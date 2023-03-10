/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license | WordPress 2019-05-16 */
!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = cc11001100_hook("module.exports", a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  }, "assign") : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = cc11001100_hook("c", [], "var-init"),
    d = cc11001100_hook("d", a.document, "var-init"),
    e = cc11001100_hook("e", c.slice, "var-init"),
    f = cc11001100_hook("f", c.concat, "var-init"),
    g = cc11001100_hook("g", c.push, "var-init"),
    h = cc11001100_hook("h", c.indexOf, "var-init"),
    i = cc11001100_hook("i", {}, "var-init"),
    j = cc11001100_hook("j", i.toString, "var-init"),
    k = cc11001100_hook("k", i.hasOwnProperty, "var-init"),
    l = cc11001100_hook("l", {}, "var-init"),
    m = cc11001100_hook("m", "1.12.4", "var-init"),
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = cc11001100_hook("o", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init"),
    p = cc11001100_hook("p", /^-ms-/, "var-init"),
    q = cc11001100_hook("q", /-([\da-z])/gi, "var-init"),
    r = function (a, b) {
      return b.toUpperCase();
    };
  n.fn = cc11001100_hook("n.fn", n.prototype = cc11001100_hook("n.prototype", {
    jquery: cc11001100_hook("jquery", m, "object-key-init"),
    constructor: cc11001100_hook("constructor", n, "object-key-init"),
    selector: cc11001100_hook("selector", "", "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    toArray: function () {
      return e.call(this);
    },
    get: function (a) {
      return null != a ? a < 0 ? this[a + this.length] : this[a] : e.call(this);
    },
    pushStack: function (a) {
      var b = cc11001100_hook("b", n.merge(this.constructor(), a), "var-init");
      return b.prevObject = cc11001100_hook("b.prevObject", this, "assign"), b.context = cc11001100_hook("b.context", this.context, "assign"), b;
    },
    each: function (a) {
      return n.each(this, a);
    },
    map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function () {
      return this.pushStack(e.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = cc11001100_hook("b", this.length, "var-init"),
        c = cc11001100_hook("c", +a + (a < 0 ? b : 0), "var-init");
      return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: cc11001100_hook("push", g, "object-key-init"),
    sort: cc11001100_hook("sort", c.sort, "object-key-init"),
    splice: cc11001100_hook("splice", c.splice, "object-key-init")
  }, "assign"), "assign"), n.extend = cc11001100_hook("n.extend", n.fn.extend = cc11001100_hook("n.fn.extend", function () {
    var a,
      b,
      c,
      d,
      e,
      f,
      g = cc11001100_hook("g", arguments[0] || {}, "var-init"),
      h = cc11001100_hook("h", 1, "var-init"),
      i = cc11001100_hook("i", arguments.length, "var-init"),
      j = cc11001100_hook("j", !1, "var-init");
    for ("boolean" == typeof g && (j = cc11001100_hook("j", g, "assign"), g = cc11001100_hook("g", arguments[h] || {}, "assign"), h++), "object" == typeof g || n.isFunction(g) || (g = cc11001100_hook("g", {}, "assign")), h === i && (g = cc11001100_hook("g", this, "assign"), h--); h < i; h++) if (null != (e = cc11001100_hook("e", arguments[h], "assign"))) for (d in e) a = cc11001100_hook("a", g[d], "assign"), c = cc11001100_hook("c", e[d], "assign"), "__proto__" !== d && g !== c && (j && c && (n.isPlainObject(c) || (b = cc11001100_hook("b", n.isArray(c), "assign"))) ? (b ? (b = cc11001100_hook("b", !1, "assign"), f = cc11001100_hook("f", a && n.isArray(a) ? a : [], "assign")) : f = cc11001100_hook("f", a && n.isPlainObject(a) ? a : {}, "assign"), g[d] = cc11001100_hook("g[d]", n.extend(j, f, c), "assign")) : void 0 !== c && (g[d] = cc11001100_hook("g[d]", c, "assign")));
    return g;
  }, "assign"), "assign"), n.extend({
    expando: cc11001100_hook("expando", "jQuery" + (m + Math.random()).replace(/\D/g, ""), "object-key-init"),
    isReady: cc11001100_hook("isReady", !0, "object-key-init"),
    error: function (a) {
      throw new Error(a);
    },
    noop: function () {},
    isFunction: function (a) {
      return "function" === n.type(a);
    },
    isArray: cc11001100_hook("isArray", Array.isArray || function (a) {
      return "array" === n.type(a);
    }, "object-key-init"),
    isWindow: function (a) {
      return null != a && a == a.window;
    },
    isNumeric: function (a) {
      var b = cc11001100_hook("b", a && a.toString(), "var-init");
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) return !1;
      return !0;
    },
    isPlainObject: function (a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
      try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      if (!l.ownFirst) for (b in a) return k.call(a, b);
      for (b in a);
      return void 0 === b || k.call(a, b);
    },
    type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
    },
    globalEval: function (b) {
      b && n.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    },
    camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function (a, b) {
      var c,
        d = cc11001100_hook("d", 0, "var-init");
      if (s(a)) {
        for (c = cc11001100_hook("c", a.length, "assign"); d < c; d++) if (!1 === b.call(a[d], d, a[d])) break;
      } else for (d in a) if (!1 === b.call(a[d], d, a[d])) break;
      return a;
    },
    trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function (a, b) {
      var c = cc11001100_hook("c", b || [], "var-init");
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    },
    inArray: function (a, b, c) {
      var d;
      if (b) {
        if (h) return h.call(b, a, c);
        for (d = cc11001100_hook("d", b.length, "assign"), c = cc11001100_hook("c", c ? c < 0 ? Math.max(0, d + c) : c : 0, "assign"); c < d; c++) if (c in b && b[c] === a) return c;
      }
      return -1;
    },
    merge: function (a, b) {
      var c = cc11001100_hook("c", +b.length, "var-init"),
        d = cc11001100_hook("d", 0, "var-init"),
        e = cc11001100_hook("e", a.length, "var-init");
      while (d < c) a[e++] = cc11001100_hook("a[e++]", b[d++], "assign");
      if (c !== c) while (void 0 !== b[d]) a[e++] = cc11001100_hook("a[e++]", b[d++], "assign");
      return a.length = cc11001100_hook("a.length", e, "assign"), a;
    },
    grep: function (a, b, c) {
      for (var d, e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", a.length, "var-init"), h = cc11001100_hook("h", !c, "var-init"); f < g; f++) (d = cc11001100_hook("d", !b(a[f], f), "assign")) !== h && e.push(a[f]);
      return e;
    },
    map: function (a, b, c) {
      var d,
        e,
        g = cc11001100_hook("g", 0, "var-init"),
        h = cc11001100_hook("h", [], "var-init");
      if (s(a)) for (d = cc11001100_hook("d", a.length, "assign"); g < d; g++) null != (e = cc11001100_hook("e", b(a[g], g, c), "assign")) && h.push(e);else for (g in a) null != (e = cc11001100_hook("e", b(a[g], g, c), "assign")) && h.push(e);
      return f.apply([], h);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    proxy: function (a, b) {
      var c, d, f;
      if ("string" == typeof b && (f = cc11001100_hook("f", a[b], "assign"), b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", f, "assign")), n.isFunction(a)) return c = cc11001100_hook("c", e.call(arguments, 2), "assign"), d = cc11001100_hook("d", function () {
        return a.apply(b || this, c.concat(e.call(arguments)));
      }, "assign"), d.guid = cc11001100_hook("d.guid", a.guid = cc11001100_hook("a.guid", a.guid || n.guid++, "assign"), "assign"), d;
    },
    now: function () {
      return +new Date();
    },
    support: cc11001100_hook("support", l, "object-key-init")
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = cc11001100_hook("n.fn[Symbol.iterator]", c[Symbol.iterator], "assign")), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = cc11001100_hook("i[\"[object \" + b + \"]\"]", b.toLowerCase(), "assign");
  });
  function s(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", !!a && "length" in a && a.length, "var-init"),
      c = cc11001100_hook("c", n.type(a), "var-init");
    return "function" !== c && !n.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = cc11001100_hook("t", function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = cc11001100_hook("u", "sizzle" + 1 * new Date(), "var-init"),
      v = cc11001100_hook("v", a.document, "var-init"),
      w = cc11001100_hook("w", 0, "var-init"),
      x = cc11001100_hook("x", 0, "var-init"),
      y = cc11001100_hook("y", fa(), "var-init"),
      z = cc11001100_hook("z", fa(), "var-init"),
      A = cc11001100_hook("A", fa(), "var-init"),
      B = function (a, b) {
        return a === b && (l = cc11001100_hook("l", !0, "assign")), 0;
      },
      C = cc11001100_hook("C", 1 << 31, "var-init"),
      D = cc11001100_hook("D", {}.hasOwnProperty, "var-init"),
      E = cc11001100_hook("E", [], "var-init"),
      F = cc11001100_hook("F", E.pop, "var-init"),
      G = cc11001100_hook("G", E.push, "var-init"),
      H = cc11001100_hook("H", E.push, "var-init"),
      I = cc11001100_hook("I", E.slice, "var-init"),
      J = function (a, b) {
        for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", a.length, "var-init"); c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      K = cc11001100_hook("K", "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", "var-init"),
      L = cc11001100_hook("L", "[\\x20\\t\\r\\n\\f]", "var-init"),
      M = cc11001100_hook("M", "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", "var-init"),
      N = cc11001100_hook("N", "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", "var-init"),
      O = cc11001100_hook("O", ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", "var-init"),
      P = cc11001100_hook("P", new RegExp(L + "+", "g"), "var-init"),
      Q = cc11001100_hook("Q", new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), "var-init"),
      R = cc11001100_hook("R", new RegExp("^" + L + "*," + L + "*"), "var-init"),
      S = cc11001100_hook("S", new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), "var-init"),
      T = cc11001100_hook("T", new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), "var-init"),
      U = cc11001100_hook("U", new RegExp(O), "var-init"),
      V = cc11001100_hook("V", new RegExp("^" + M + "$"), "var-init"),
      W = cc11001100_hook("W", {
        ID: cc11001100_hook("ID", new RegExp("^#(" + M + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", new RegExp("^\\.(" + M + ")"), "object-key-init"),
        TAG: cc11001100_hook("TAG", new RegExp("^(" + M + "|[*])"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", new RegExp("^" + N), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", new RegExp("^" + O), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), "object-key-init"),
        bool: cc11001100_hook("bool", new RegExp("^(?:" + K + ")$", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      X = cc11001100_hook("X", /^(?:input|select|textarea|button)$/i, "var-init"),
      Y = cc11001100_hook("Y", /^h\d$/i, "var-init"),
      Z = cc11001100_hook("Z", /^[^{]+\{\s*\[native \w/, "var-init"),
      $ = cc11001100_hook("$", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      _ = cc11001100_hook("_", /[+~]/, "var-init"),
      aa = cc11001100_hook("aa", /'|\\/g, "var-init"),
      ba = cc11001100_hook("ba", new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), "var-init"),
      ca = function (a, b, c) {
        var d = cc11001100_hook("d", "0x" + b - 65536, "var-init");
        return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply(E = cc11001100_hook("E", I.call(v.childNodes), "assign"), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (xa) {
      H = cc11001100_hook("H", {
        apply: cc11001100_hook("apply", E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = cc11001100_hook("c", a.length, "var-init"),
            d = cc11001100_hook("d", 0, "var-init");
          while (a[c++] = cc11001100_hook("a[c++]", b[d++], "assign"));
          a.length = cc11001100_hook("a.length", c - 1, "assign");
        }, "object-key-init")
      }, "assign");
    }
    function ea(a, b, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = cc11001100_hook("w", b && b.ownerDocument, "var-init"),
        x = cc11001100_hook("x", b ? b.nodeType : 9, "var-init");
      if (d = cc11001100_hook("d", d || [], "assign"), "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = cc11001100_hook("b", b || n, "assign"), p)) {
        if (11 !== x && (o = cc11001100_hook("o", $.exec(a), "assign"))) if (f = cc11001100_hook("f", o[1], "assign")) {
          if (9 === x) {
            if (!(j = cc11001100_hook("j", b.getElementById(f), "assign"))) return d;
            if (j.id === f) return d.push(j), d;
          } else if (w && (j = cc11001100_hook("j", w.getElementById(f), "assign")) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((f = cc11001100_hook("f", o[3], "assign")) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = cc11001100_hook("w", b, "assign"), s = cc11001100_hook("s", a, "assign");else if ("object" !== b.nodeName.toLowerCase()) {
            (k = cc11001100_hook("k", b.getAttribute("id"), "assign")) ? k = cc11001100_hook("k", k.replace(aa, "\\$&"), "assign") : b.setAttribute("id", k = cc11001100_hook("k", u, "assign")), r = cc11001100_hook("r", g(a), "assign"), h = cc11001100_hook("h", r.length, "assign"), l = cc11001100_hook("l", V.test(k) ? "#" + k : "[id='" + k + "']", "assign");
            while (h--) r[h] = cc11001100_hook("r[h]", l + " " + pa(r[h]), "assign");
            s = cc11001100_hook("s", r.join(","), "assign"), w = cc11001100_hook("w", _.test(a) && na(b.parentNode) || b, "assign");
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function fa() {
      var a = cc11001100_hook("a", [], "var-init");
      function b(c, e) {
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = cc11001100_hook("b[c + \" \"]", e, "assign");
      }
      return b;
    }
    function ga(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a[u] = cc11001100_hook("a[u]", !0, "assign"), a;
    }
    function ha(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", n.createElement("div"), "var-init");
      try {
        return !!a(b);
      } catch (xa) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = cc11001100_hook("b", null, "assign");
      }
    }
    function ia(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", a.split("|"), "var-init"),
        e = cc11001100_hook("e", c.length, "var-init");
      while (e--) d.attrHandle[c[e]] = cc11001100_hook("d.attrHandle[c[e]]", b, "assign");
    }
    function ja(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", b && a, "var-init"),
        d = cc11001100_hook("d", c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C), "var-init");
      if (d) return d;
      if (c) while (c = cc11001100_hook("c", c.nextSibling, "assign")) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ka(a) {
      cc11001100_hook("a", a, "function-parameter");
      return function (b) {
        return "input" === b.nodeName.toLowerCase() && b.type === a;
      };
    }
    function la(a) {
      cc11001100_hook("a", a, "function-parameter");
      return function (b) {
        var c = cc11001100_hook("c", b.nodeName.toLowerCase(), "var-init");
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function ma(a) {
      cc11001100_hook("a", a, "function-parameter");
      return ga(function (b) {
        return b = cc11001100_hook("b", +b, "assign"), ga(function (c, d) {
          var e,
            f = cc11001100_hook("f", a([], c.length, b), "var-init"),
            g = cc11001100_hook("g", f.length, "var-init");
          while (g--) c[e = cc11001100_hook("e", f[g], "assign")] && (c[e] = cc11001100_hook("c[e]", !(d[e] = cc11001100_hook("d[e]", c[e], "assign")), "assign"));
        });
      });
    }
    function na(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a && void 0 !== a.getElementsByTagName && a;
    }
    c = cc11001100_hook("c", ea.support = cc11001100_hook("ea.support", {}, "assign"), "assign"), f = cc11001100_hook("f", ea.isXML = cc11001100_hook("ea.isXML", function (a) {
      var b = cc11001100_hook("b", a && (a.ownerDocument || a).documentElement, "var-init");
      return !!b && "HTML" !== b.nodeName;
    }, "assign"), "assign"), m = cc11001100_hook("m", ea.setDocument = cc11001100_hook("ea.setDocument", function (a) {
      var b,
        e,
        g = cc11001100_hook("g", a ? a.ownerDocument || a : v, "var-init");
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = cc11001100_hook("n", g, "assign"), o = cc11001100_hook("o", n.documentElement, "assign"), p = cc11001100_hook("p", !f(n), "assign"), (e = cc11001100_hook("e", n.defaultView, "assign")) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = cc11001100_hook("c.attributes", ha(function (a) {
        return a.className = cc11001100_hook("a.className", "i", "assign"), !a.getAttribute("className");
      }), "assign"), c.getElementsByTagName = cc11001100_hook("c.getElementsByTagName", ha(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), "assign"), c.getElementsByClassName = cc11001100_hook("c.getElementsByClassName", Z.test(n.getElementsByClassName), "assign"), c.getById = cc11001100_hook("c.getById", ha(function (a) {
        return o.appendChild(a).id = cc11001100_hook("o.appendChild(a).id", u, "assign"), !n.getElementsByName || !n.getElementsByName(u).length;
      }), "assign"), c.getById ? (d.find.ID = cc11001100_hook("d.find.ID", function (a, b) {
        if (void 0 !== b.getElementById && p) {
          var c = cc11001100_hook("c", b.getElementById(a), "var-init");
          return c ? [c] : [];
        }
      }, "assign"), d.filter.ID = cc11001100_hook("d.filter.ID", function (a) {
        var b = cc11001100_hook("b", a.replace(ba, ca), "var-init");
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }, "assign")) : (delete d.find.ID, d.filter.ID = cc11001100_hook("d.filter.ID", function (a) {
        var b = cc11001100_hook("b", a.replace(ba, ca), "var-init");
        return function (a) {
          var c = cc11001100_hook("c", void 0 !== a.getAttributeNode && a.getAttributeNode("id"), "var-init");
          return c && c.value === b;
        };
      }, "assign")), d.find.TAG = cc11001100_hook("d.find.TAG", c.getElementsByTagName ? function (a, b) {
        return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
          d = cc11001100_hook("d", [], "var-init"),
          e = cc11001100_hook("e", 0, "var-init"),
          f = cc11001100_hook("f", b.getElementsByTagName(a), "var-init");
        if ("*" === a) {
          while (c = cc11001100_hook("c", f[e++], "assign")) 1 === c.nodeType && d.push(c);
          return d;
        }
        return f;
      }, "assign"), d.find.CLASS = cc11001100_hook("d.find.CLASS", c.getElementsByClassName && function (a, b) {
        if (void 0 !== b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, "assign"), r = cc11001100_hook("r", [], "assign"), q = cc11001100_hook("q", [], "assign"), (c.qsa = cc11001100_hook("c.qsa", Z.test(n.querySelectorAll), "assign")) && (ha(function (a) {
        o.appendChild(a).innerHTML = cc11001100_hook("o.appendChild(a).innerHTML", "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", "assign"), a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ha(function (a) {
        var b = cc11001100_hook("b", n.createElement("input"), "var-init");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = cc11001100_hook("c.matchesSelector", Z.test(s = cc11001100_hook("s", o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector, "assign")), "assign")) && ha(function (a) {
        c.disconnectedMatch = cc11001100_hook("c.disconnectedMatch", s.call(a, "div"), "assign"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = cc11001100_hook("q", q.length && new RegExp(q.join("|")), "assign"), r = cc11001100_hook("r", r.length && new RegExp(r.join("|")), "assign"), b = cc11001100_hook("b", Z.test(o.compareDocumentPosition), "assign"), t = cc11001100_hook("t", b || Z.test(o.contains) ? function (a, b) {
        var c = cc11001100_hook("c", 9 === a.nodeType ? a.documentElement : a, "var-init"),
          d = cc11001100_hook("d", b && b.parentNode, "var-init");
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = cc11001100_hook("b", b.parentNode, "assign")) if (b === a) return !0;
        return !1;
      }, "assign"), B = cc11001100_hook("B", b ? function (a, b) {
        if (a === b) return l = cc11001100_hook("l", !0, "assign"), 0;
        var d = cc11001100_hook("d", !a.compareDocumentPosition - !b.compareDocumentPosition, "var-init");
        return d || (d = cc11001100_hook("d", (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, "assign"), 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = cc11001100_hook("l", !0, "assign"), 0;
        var c,
          d = cc11001100_hook("d", 0, "var-init"),
          e = cc11001100_hook("e", a.parentNode, "var-init"),
          f = cc11001100_hook("f", b.parentNode, "var-init"),
          g = cc11001100_hook("g", [a], "var-init"),
          h = cc11001100_hook("h", [b], "var-init");
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ja(a, b);
        c = cc11001100_hook("c", a, "assign");
        while (c = cc11001100_hook("c", c.parentNode, "assign")) g.unshift(c);
        c = cc11001100_hook("c", b, "assign");
        while (c = cc11001100_hook("c", c.parentNode, "assign")) h.unshift(c);
        while (g[d] === h[d]) d++;
        return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, "assign"), n) : n;
    }, "assign"), "assign"), ea.matches = cc11001100_hook("ea.matches", function (a, b) {
      return ea(a, null, null, b);
    }, "assign"), ea.matchesSelector = cc11001100_hook("ea.matchesSelector", function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = cc11001100_hook("b", b.replace(T, "='$1']"), "assign"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = cc11001100_hook("d", s.call(a, b), "var-init");
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (xa) {}
      return ea(b, n, null, [a]).length > 0;
    }, "assign"), ea.contains = cc11001100_hook("ea.contains", function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, "assign"), ea.attr = cc11001100_hook("ea.attr", function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = cc11001100_hook("e", d.attrHandle[b.toLowerCase()], "var-init"),
        f = cc11001100_hook("f", e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0, "var-init");
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = cc11001100_hook("f", a.getAttributeNode(b), "assign")) && f.specified ? f.value : null;
    }, "assign"), ea.error = cc11001100_hook("ea.error", function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, "assign"), ea.uniqueSort = cc11001100_hook("ea.uniqueSort", function (a) {
      var b,
        d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", 0, "var-init");
      if (l = cc11001100_hook("l", !c.detectDuplicates, "assign"), k = cc11001100_hook("k", !c.sortStable && a.slice(0), "assign"), a.sort(B), l) {
        while (b = cc11001100_hook("b", a[f++], "assign")) b === a[f] && (e = cc11001100_hook("e", d.push(f), "assign"));
        while (e--) a.splice(d[e], 1);
      }
      return k = cc11001100_hook("k", null, "assign"), a;
    }, "assign"), e = cc11001100_hook("e", ea.getText = cc11001100_hook("ea.getText", function (a) {
      var b,
        c = cc11001100_hook("c", "", "var-init"),
        d = cc11001100_hook("d", 0, "var-init"),
        f = cc11001100_hook("f", a.nodeType, "var-init");
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = cc11001100_hook("a", a.firstChild, "assign"); a; a = cc11001100_hook("a", a.nextSibling, "assign")) c += cc11001100_hook("c", e(a), "assign");
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = cc11001100_hook("b", a[d++], "assign")) c += cc11001100_hook("c", e(b), "assign");
      return c;
    }, "assign"), "assign"), d = cc11001100_hook("d", ea.selectors = cc11001100_hook("ea.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", ga, "object-key-init"),
      match: cc11001100_hook("match", W, "object-key-init"),
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: cc11001100_hook("dir", "parentNode", "object-key-init"),
          first: cc11001100_hook("first", !0, "object-key-init")
        },
        " ": {
          dir: cc11001100_hook("dir", "parentNode", "object-key-init")
        },
        "+": {
          dir: cc11001100_hook("dir", "previousSibling", "object-key-init"),
          first: cc11001100_hook("first", !0, "object-key-init")
        },
        "~": {
          dir: cc11001100_hook("dir", "previousSibling", "object-key-init")
        }
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = cc11001100_hook("a[1]", a[1].replace(ba, ca), "assign"), a[3] = cc11001100_hook("a[3]", (a[3] || a[4] || a[5] || "").replace(ba, ca), "assign"), "~=" === a[2] && (a[3] = cc11001100_hook("a[3]", " " + a[3] + " ", "assign")), a.slice(0, 4);
        },
        CHILD: function (a) {
          return a[1] = cc11001100_hook("a[1]", a[1].toLowerCase(), "assign"), "nth" === a[1].slice(0, 3) ? (a[3] || ea.error(a[0]), a[4] = cc11001100_hook("a[4]", +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), "assign"), a[5] = cc11001100_hook("a[5]", +(a[7] + a[8] || "odd" === a[3]), "assign")) : a[3] && ea.error(a[0]), a;
        },
        PSEUDO: function (a) {
          var b,
            c = cc11001100_hook("c", !a[6] && a[2], "var-init");
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = cc11001100_hook("a[2]", a[4] || a[5] || "", "assign") : c && U.test(c) && (b = cc11001100_hook("b", g(c, !0), "assign")) && (b = cc11001100_hook("b", c.indexOf(")", c.length - b) - c.length, "assign")) && (a[0] = cc11001100_hook("a[0]", a[0].slice(0, b), "assign"), a[2] = cc11001100_hook("a[2]", c.slice(0, b), "assign")), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function (a) {
          var b = cc11001100_hook("b", a.replace(ba, ca).toLowerCase(), "var-init");
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function (a) {
          var b = cc11001100_hook("b", y[a + " "], "var-init");
          return b || (b = cc11001100_hook("b", new RegExp("(^|" + L + ")" + a + "(" + L + "|$)"), "assign")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = cc11001100_hook("e", ea.attr(d, a), "var-init");
            return null == e ? "!=" === b : !b || (e += cc11001100_hook("e", "", "assign"), "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        },
        CHILD: function (a, b, c, d, e) {
          var f = cc11001100_hook("f", "nth" !== a.slice(0, 3), "var-init"),
            g = cc11001100_hook("g", "last" !== a.slice(-4), "var-init"),
            h = cc11001100_hook("h", "of-type" === b, "var-init");
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
              k,
              l,
              m,
              n,
              o,
              p = cc11001100_hook("p", f !== g ? "nextSibling" : "previousSibling", "var-init"),
              q = cc11001100_hook("q", b.parentNode, "var-init"),
              r = cc11001100_hook("r", h && b.nodeName.toLowerCase(), "var-init"),
              s = cc11001100_hook("s", !i && !h, "var-init"),
              t = cc11001100_hook("t", !1, "var-init");
            if (q) {
              if (f) {
                while (p) {
                  m = cc11001100_hook("m", b, "assign");
                  while (m = cc11001100_hook("m", m[p], "assign")) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  o = cc11001100_hook("o", p = cc11001100_hook("p", "only" === a && !o && "nextSibling", "assign"), "assign");
                }
                return !0;
              }
              if (o = cc11001100_hook("o", [g ? q.firstChild : q.lastChild], "assign"), g && s) {
                m = cc11001100_hook("m", q, "assign"), l = cc11001100_hook("l", m[u] || (m[u] = cc11001100_hook("m[u]", {}, "assign")), "assign"), k = cc11001100_hook("k", l[m.uniqueID] || (l[m.uniqueID] = cc11001100_hook("l[m.uniqueID]", {}, "assign")), "assign"), j = cc11001100_hook("j", k[a] || [], "assign"), n = cc11001100_hook("n", j[0] === w && j[1], "assign"), t = cc11001100_hook("t", n && j[2], "assign"), m = cc11001100_hook("m", n && q.childNodes[n], "assign");
                while (m = cc11001100_hook("m", ++n && m && m[p] || (t = cc11001100_hook("t", n = cc11001100_hook("n", 0, "assign"), "assign")) || o.pop(), "assign")) if (1 === m.nodeType && ++t && m === b) {
                  k[a] = cc11001100_hook("k[a]", [w, n, t], "assign");
                  break;
                }
              } else if (s && (m = cc11001100_hook("m", b, "assign"), l = cc11001100_hook("l", m[u] || (m[u] = cc11001100_hook("m[u]", {}, "assign")), "assign"), k = cc11001100_hook("k", l[m.uniqueID] || (l[m.uniqueID] = cc11001100_hook("l[m.uniqueID]", {}, "assign")), "assign"), j = cc11001100_hook("j", k[a] || [], "assign"), n = cc11001100_hook("n", j[0] === w && j[1], "assign"), t = cc11001100_hook("t", n, "assign")), !1 === t) while (m = cc11001100_hook("m", ++n && m && m[p] || (t = cc11001100_hook("t", n = cc11001100_hook("n", 0, "assign"), "assign")) || o.pop(), "assign")) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = cc11001100_hook("l", m[u] || (m[u] = cc11001100_hook("m[u]", {}, "assign")), "assign"), k = cc11001100_hook("k", l[m.uniqueID] || (l[m.uniqueID] = cc11001100_hook("l[m.uniqueID]", {}, "assign")), "assign"), k[a] = cc11001100_hook("k[a]", [w, t], "assign")), m === b)) break;
              return (t -= cc11001100_hook("t", e, "assign")) === d || t % d == 0 && t / d >= 0;
            }
          };
        },
        PSEUDO: function (a, b) {
          var c,
            e = cc11001100_hook("e", d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a), "var-init");
          return e[u] ? e(b) : e.length > 1 ? (c = cc11001100_hook("c", [a, a, "", b], "assign"), d.setFilters.hasOwnProperty(a.toLowerCase()) ? ga(function (a, c) {
            var d,
              f = cc11001100_hook("f", e(a, b), "var-init"),
              g = cc11001100_hook("g", f.length, "var-init");
            while (g--) d = cc11001100_hook("d", J(a, f[g]), "assign"), a[d] = cc11001100_hook("a[d]", !(c[d] = cc11001100_hook("c[d]", f[g], "assign")), "assign");
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", ga(function (a) {
          var b = cc11001100_hook("b", [], "var-init"),
            c = cc11001100_hook("c", [], "var-init"),
            d = cc11001100_hook("d", h(a.replace(Q, "$1")), "var-init");
          return d[u] ? ga(function (a, b, c, e) {
            var f,
              g = cc11001100_hook("g", d(a, null, e, []), "var-init"),
              h = cc11001100_hook("h", a.length, "var-init");
            while (h--) (f = cc11001100_hook("f", g[h], "assign")) && (a[h] = cc11001100_hook("a[h]", !(b[h] = cc11001100_hook("b[h]", f, "assign")), "assign"));
          }) : function (a, e, f) {
            return b[0] = cc11001100_hook("b[0]", a, "assign"), d(b, null, f, c), b[0] = cc11001100_hook("b[0]", null, "assign"), !c.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", ga(function (a) {
          return function (b) {
            return ea(a, b).length > 0;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", ga(function (a) {
          return a = cc11001100_hook("a", a.replace(ba, ca), "assign"), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", ga(function (a) {
          return V.test(a || "") || ea.error("unsupported lang: " + a), a = cc11001100_hook("a", a.replace(ba, ca).toLowerCase(), "assign"), function (b) {
            var c;
            do {
              if (c = cc11001100_hook("c", p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"), "assign")) return (c = cc11001100_hook("c", c.toLowerCase(), "assign")) === a || 0 === c.indexOf(a + "-");
            } while ((b = cc11001100_hook("b", b.parentNode, "assign")) && 1 === b.nodeType);
            return !1;
          };
        }), "object-key-init"),
        target: function (b) {
          var c = cc11001100_hook("c", a.location && a.location.hash, "var-init");
          return c && c.slice(1) === b.id;
        },
        root: function (a) {
          return a === o;
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function (a) {
          return !1 === a.disabled;
        },
        disabled: function (a) {
          return !0 === a.disabled;
        },
        checked: function (a) {
          var b = cc11001100_hook("b", a.nodeName.toLowerCase(), "var-init");
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
        },
        empty: function (a) {
          for (a = cc11001100_hook("a", a.firstChild, "assign"); a; a = cc11001100_hook("a", a.nextSibling, "assign")) if (a.nodeType < 6) return !1;
          return !0;
        },
        parent: function (a) {
          return !d.pseudos.empty(a);
        },
        header: function (a) {
          return Y.test(a.nodeName);
        },
        input: function (a) {
          return X.test(a.nodeName);
        },
        button: function (a) {
          var b = cc11001100_hook("b", a.nodeName.toLowerCase(), "var-init");
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = cc11001100_hook("b", a.getAttribute("type"), "assign")) || "text" === b.toLowerCase());
        },
        first: cc11001100_hook("first", ma(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", ma(function (a, b) {
          return [b - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", ma(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), "object-key-init"),
        even: cc11001100_hook("even", ma(function (a, b) {
          for (var c = cc11001100_hook("c", 0, "var-init"); c < b; c += cc11001100_hook("c", 2, "assign")) a.push(c);
          return a;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", ma(function (a, b) {
          for (var c = cc11001100_hook("c", 1, "var-init"); c < b; c += cc11001100_hook("c", 2, "assign")) a.push(c);
          return a;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", ma(function (a, b, c) {
          for (var d = cc11001100_hook("d", c < 0 ? c + b : c, "var-init"); --d >= 0;) a.push(d);
          return a;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", ma(function (a, b, c) {
          for (var d = cc11001100_hook("d", c < 0 ? c + b : c, "var-init"); ++d < b;) a.push(d);
          return a;
        }), "object-key-init")
      }
    }, "assign"), "assign"), d.pseudos.nth = cc11001100_hook("d.pseudos.nth", d.pseudos.eq, "assign");
    for (b in {
      radio: cc11001100_hook("radio", !0, "object-key-init"),
      checkbox: cc11001100_hook("checkbox", !0, "object-key-init"),
      file: cc11001100_hook("file", !0, "object-key-init"),
      password: cc11001100_hook("password", !0, "object-key-init"),
      image: cc11001100_hook("image", !0, "object-key-init")
    }) d.pseudos[b] = cc11001100_hook("d.pseudos[b]", ka(b), "assign");
    for (b in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !0, "object-key-init")
    }) d.pseudos[b] = cc11001100_hook("d.pseudos[b]", la(b), "assign");
    function oa() {}
    oa.prototype = cc11001100_hook("oa.prototype", d.filters = cc11001100_hook("d.filters", d.pseudos, "assign"), "assign"), d.setFilters = cc11001100_hook("d.setFilters", new oa(), "assign"), g = cc11001100_hook("g", ea.tokenize = cc11001100_hook("ea.tokenize", function (a, b) {
      var c,
        e,
        f,
        g,
        h,
        i,
        j,
        k = cc11001100_hook("k", z[a + " "], "var-init");
      if (k) return b ? 0 : k.slice(0);
      h = cc11001100_hook("h", a, "assign"), i = cc11001100_hook("i", [], "assign"), j = cc11001100_hook("j", d.preFilter, "assign");
      while (h) {
        c && !(e = cc11001100_hook("e", R.exec(h), "assign")) || (e && (h = cc11001100_hook("h", h.slice(e[0].length) || h, "assign")), i.push(f = cc11001100_hook("f", [], "assign"))), c = cc11001100_hook("c", !1, "assign"), (e = cc11001100_hook("e", S.exec(h), "assign")) && (c = cc11001100_hook("c", e.shift(), "assign"), f.push({
          value: cc11001100_hook("value", c, "object-key-init"),
          type: cc11001100_hook("type", e[0].replace(Q, " "), "object-key-init")
        }), h = cc11001100_hook("h", h.slice(c.length), "assign"));
        for (g in d.filter) !(e = cc11001100_hook("e", W[g].exec(h), "assign")) || j[g] && !(e = cc11001100_hook("e", j[g](e), "assign")) || (c = cc11001100_hook("c", e.shift(), "assign"), f.push({
          value: cc11001100_hook("value", c, "object-key-init"),
          type: cc11001100_hook("type", g, "object-key-init"),
          matches: cc11001100_hook("matches", e, "object-key-init")
        }), h = cc11001100_hook("h", h.slice(c.length), "assign"));
        if (!c) break;
      }
      return b ? h.length : h ? ea.error(a) : z(a, i).slice(0);
    }, "assign"), "assign");
    function pa(a) {
      cc11001100_hook("a", a, "function-parameter");
      for (var b = cc11001100_hook("b", 0, "var-init"), c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "", "var-init"); b < c; b++) d += cc11001100_hook("d", a[b].value, "assign");
      return d;
    }
    function qa(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      var d = cc11001100_hook("d", b.dir, "var-init"),
        e = cc11001100_hook("e", c && "parentNode" === d, "var-init"),
        f = cc11001100_hook("f", x++, "var-init");
      return b.first ? function (b, c, f) {
        while (b = cc11001100_hook("b", b[d], "assign")) if (1 === b.nodeType || e) return a(b, c, f);
      } : function (b, c, g) {
        var h,
          i,
          j,
          k = cc11001100_hook("k", [w, f], "var-init");
        if (g) {
          while (b = cc11001100_hook("b", b[d], "assign")) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
        } else while (b = cc11001100_hook("b", b[d], "assign")) if (1 === b.nodeType || e) {
          if (j = cc11001100_hook("j", b[u] || (b[u] = cc11001100_hook("b[u]", {}, "assign")), "assign"), i = cc11001100_hook("i", j[b.uniqueID] || (j[b.uniqueID] = cc11001100_hook("j[b.uniqueID]", {}, "assign")), "assign"), (h = cc11001100_hook("h", i[d], "assign")) && h[0] === w && h[1] === f) return k[2] = cc11001100_hook("k[2]", h[2], "assign");
          if (i[d] = cc11001100_hook("i[d]", k, "assign"), k[2] = cc11001100_hook("k[2]", a(b, c, g), "assign")) return !0;
        }
      };
    }
    function ra(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a.length > 1 ? function (b, c, d) {
        var e = cc11001100_hook("e", a.length, "var-init");
        while (e--) if (!a[e](b, c, d)) return !1;
        return !0;
      } : a[0];
    }
    function sa(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      for (var d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", b.length, "var-init"); d < e; d++) ea(a, b[d], c);
      return c;
    }
    function ta(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      for (var f, g = cc11001100_hook("g", [], "var-init"), h = cc11001100_hook("h", 0, "var-init"), i = cc11001100_hook("i", a.length, "var-init"), j = cc11001100_hook("j", null != b, "var-init"); h < i; h++) (f = cc11001100_hook("f", a[h], "assign")) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g;
    }
    function ua(a, b, c, d, e, f) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      return d && !d[u] && (d = cc11001100_hook("d", ua(d), "assign")), e && !e[u] && (e = cc11001100_hook("e", ua(e, f), "assign")), ga(function (f, g, h, i) {
        var j,
          k,
          l,
          m = cc11001100_hook("m", [], "var-init"),
          n = cc11001100_hook("n", [], "var-init"),
          o = cc11001100_hook("o", g.length, "var-init"),
          p = cc11001100_hook("p", f || sa(b || "*", h.nodeType ? [h] : h, []), "var-init"),
          q = cc11001100_hook("q", !a || !f && b ? p : ta(p, m, a, h, i), "var-init"),
          r = cc11001100_hook("r", c ? e || (f ? a : o || d) ? [] : g : q, "var-init");
        if (c && c(q, r, h, i), d) {
          j = cc11001100_hook("j", ta(r, n), "assign"), d(j, [], h, i), k = cc11001100_hook("k", j.length, "assign");
          while (k--) (l = cc11001100_hook("l", j[k], "assign")) && (r[n[k]] = cc11001100_hook("r[n[k]]", !(q[n[k]] = cc11001100_hook("q[n[k]]", l, "assign")), "assign"));
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = cc11001100_hook("j", [], "assign"), k = cc11001100_hook("k", r.length, "assign");
              while (k--) (l = cc11001100_hook("l", r[k], "assign")) && j.push(q[k] = cc11001100_hook("q[k]", l, "assign"));
              e(null, r = cc11001100_hook("r", [], "assign"), j, i);
            }
            k = cc11001100_hook("k", r.length, "assign");
            while (k--) (l = cc11001100_hook("l", r[k], "assign")) && (j = cc11001100_hook("j", e ? J(f, l) : m[k], "assign")) > -1 && (f[j] = cc11001100_hook("f[j]", !(g[j] = cc11001100_hook("g[j]", l, "assign")), "assign"));
          }
        } else r = cc11001100_hook("r", ta(r === g ? r.splice(o, r.length) : r), "assign"), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }
    function va(a) {
      cc11001100_hook("a", a, "function-parameter");
      for (var b, c, e, f = cc11001100_hook("f", a.length, "var-init"), g = cc11001100_hook("g", d.relative[a[0].type], "var-init"), h = cc11001100_hook("h", g || d.relative[" "], "var-init"), i = cc11001100_hook("i", g ? 1 : 0, "var-init"), k = cc11001100_hook("k", qa(function (a) {
          return a === b;
        }, h, !0), "var-init"), l = cc11001100_hook("l", qa(function (a) {
          return J(b, a) > -1;
        }, h, !0), "var-init"), m = cc11001100_hook("m", [function (a, c, d) {
          var e = cc11001100_hook("e", !g && (d || c !== j) || ((b = cc11001100_hook("b", c, "assign")).nodeType ? k(a, c, d) : l(a, c, d)), "var-init");
          return b = cc11001100_hook("b", null, "assign"), e;
        }], "var-init"); i < f; i++) if (c = cc11001100_hook("c", d.relative[a[i].type], "assign")) m = cc11001100_hook("m", [qa(ra(m), c)], "assign");else {
        if (c = cc11001100_hook("c", d.filter[a[i].type].apply(null, a[i].matches), "assign"), c[u]) {
          for (e = cc11001100_hook("e", ++i, "assign"); e < f; e++) if (d.relative[a[e].type]) break;
          return ua(i > 1 && ra(m), i > 1 && pa(a.slice(0, i - 1).concat({
            value: cc11001100_hook("value", " " === a[i - 2].type ? "*" : "", "object-key-init")
          })).replace(Q, "$1"), c, i < e && va(a.slice(i, e)), e < f && va(a = cc11001100_hook("a", a.slice(e), "assign")), e < f && pa(a));
        }
        m.push(c);
      }
      return ra(m);
    }
    function wa(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", b.length > 0, "var-init"),
        e = cc11001100_hook("e", a.length > 0, "var-init"),
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = cc11001100_hook("r", 0, "var-init"),
            s = cc11001100_hook("s", "0", "var-init"),
            t = cc11001100_hook("t", f && [], "var-init"),
            u = cc11001100_hook("u", [], "var-init"),
            v = cc11001100_hook("v", j, "var-init"),
            x = cc11001100_hook("x", f || e && d.find.TAG("*", k), "var-init"),
            y = cc11001100_hook("y", w += cc11001100_hook("w", null == v ? 1 : Math.random() || .1, "assign"), "var-init"),
            z = cc11001100_hook("z", x.length, "var-init");
          for (k && (j = cc11001100_hook("j", g === n || g || k, "assign")); s !== z && null != (l = cc11001100_hook("l", x[s], "assign")); s++) {
            if (e && l) {
              o = cc11001100_hook("o", 0, "assign"), g || l.ownerDocument === n || (m(l), h = cc11001100_hook("h", !p, "assign"));
              while (q = cc11001100_hook("q", a[o++], "assign")) if (q(l, g || n, h)) {
                i.push(l);
                break;
              }
              k && (w = cc11001100_hook("w", y, "assign"));
            }
            c && ((l = cc11001100_hook("l", !q && l, "assign")) && r--, f && t.push(l));
          }
          if (r += cc11001100_hook("r", s, "assign"), c && s !== r) {
            o = cc11001100_hook("o", 0, "assign");
            while (q = cc11001100_hook("q", b[o++], "assign")) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = cc11001100_hook("u[s]", F.call(i), "assign"));
              u = cc11001100_hook("u", ta(u), "assign");
            }
            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ea.uniqueSort(i);
          }
          return k && (w = cc11001100_hook("w", y, "assign"), j = cc11001100_hook("j", v, "assign")), t;
        };
      return c ? ga(f) : f;
    }
    return h = cc11001100_hook("h", ea.compile = cc11001100_hook("ea.compile", function (a, b) {
      var c,
        d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", [], "var-init"),
        f = cc11001100_hook("f", A[a + " "], "var-init");
      if (!f) {
        b || (b = cc11001100_hook("b", g(a), "assign")), c = cc11001100_hook("c", b.length, "assign");
        while (c--) f = cc11001100_hook("f", va(b[c]), "assign"), f[u] ? d.push(f) : e.push(f);
        f = cc11001100_hook("f", A(a, wa(e, d)), "assign"), f.selector = cc11001100_hook("f.selector", a, "assign");
      }
      return f;
    }, "assign"), "assign"), i = cc11001100_hook("i", ea.select = cc11001100_hook("ea.select", function (a, b, e, f) {
      var i,
        j,
        k,
        l,
        m,
        n = cc11001100_hook("n", "function" == typeof a && a, "var-init"),
        o = cc11001100_hook("o", !f && g(a = cc11001100_hook("a", n.selector || a, "assign")), "var-init");
      if (e = cc11001100_hook("e", e || [], "assign"), 1 === o.length) {
        if (j = cc11001100_hook("j", o[0] = cc11001100_hook("o[0]", o[0].slice(0), "assign"), "assign"), j.length > 2 && "ID" === (k = cc11001100_hook("k", j[0], "assign")).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (!(b = cc11001100_hook("b", (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], "assign"))) return e;
          n && (b = cc11001100_hook("b", b.parentNode, "assign")), a = cc11001100_hook("a", a.slice(j.shift().value.length), "assign");
        }
        i = cc11001100_hook("i", W.needsContext.test(a) ? 0 : j.length, "assign");
        while (i--) {
          if (k = cc11001100_hook("k", j[i], "assign"), d.relative[l = cc11001100_hook("l", k.type, "assign")]) break;
          if ((m = cc11001100_hook("m", d.find[l], "assign")) && (f = cc11001100_hook("f", m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b), "assign"))) {
            if (j.splice(i, 1), !(a = cc11001100_hook("a", f.length && pa(j), "assign"))) return H.apply(e, f), e;
            break;
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b), e;
    }, "assign"), "assign"), c.sortStable = cc11001100_hook("c.sortStable", u.split("").sort(B).join("") === u, "assign"), c.detectDuplicates = cc11001100_hook("c.detectDuplicates", !!l, "assign"), m(), c.sortDetached = cc11001100_hook("c.sortDetached", ha(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), "assign"), ha(function (a) {
      return a.innerHTML = cc11001100_hook("a.innerHTML", "<a href='#'></a>", "assign"), "#" === a.firstChild.getAttribute("href");
    }) || ia("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ha(function (a) {
      return a.innerHTML = cc11001100_hook("a.innerHTML", "<input/>", "assign"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ia("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ha(function (a) {
      return null == a.getAttribute("disabled");
    }) || ia(K, function (a, b, c) {
      var d;
      if (!c) return !0 === a[b] ? b.toLowerCase() : (d = cc11001100_hook("d", a.getAttributeNode(b), "assign")) && d.specified ? d.value : null;
    }), ea;
  }(a), "var-init");
  n.find = cc11001100_hook("n.find", t, "assign"), n.expr = cc11001100_hook("n.expr", t.selectors, "assign"), n.expr[":"] = cc11001100_hook("n.expr[\":\"]", n.expr.pseudos, "assign"), n.uniqueSort = cc11001100_hook("n.uniqueSort", n.unique = cc11001100_hook("n.unique", t.uniqueSort, "assign"), "assign"), n.text = cc11001100_hook("n.text", t.getText, "assign"), n.isXMLDoc = cc11001100_hook("n.isXMLDoc", t.isXML, "assign"), n.contains = cc11001100_hook("n.contains", t.contains, "assign");
  var u = function (a, b, c) {
      var d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", void 0 !== c, "var-init");
      while ((a = cc11001100_hook("a", a[b], "assign")) && 9 !== a.nodeType) if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;
        d.push(a);
      }
      return d;
    },
    v = function (a, b) {
      for (var c = cc11001100_hook("c", [], "var-init"); a; a = cc11001100_hook("a", a.nextSibling, "assign")) 1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = cc11001100_hook("w", n.expr.match.needsContext, "var-init"),
    x = cc11001100_hook("x", /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, "var-init"),
    y = cc11001100_hook("y", /^.[^:#\[\.,]*$/, "var-init");
  function z(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = cc11001100_hook("b", n.filter(b, a), "assign");
    }
    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }
  n.filter = cc11001100_hook("n.filter", function (a, b, c) {
    var d = cc11001100_hook("d", b[0], "var-init");
    return c && (a = cc11001100_hook("a", ":not(" + a + ")", "assign")), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, "assign"), n.fn.extend({
    find: function (a) {
      var b,
        c = cc11001100_hook("c", [], "var-init"),
        d = cc11001100_hook("d", this, "var-init"),
        e = cc11001100_hook("e", d.length, "var-init");
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = cc11001100_hook("b", 0, "assign"); b < e; b++) if (n.contains(d[b], this)) return !0;
      }));
      for (b = cc11001100_hook("b", 0, "assign"); b < e; b++) n.find(a, d[b], c);
      return c = cc11001100_hook("c", this.pushStack(e > 1 ? n.unique(c) : c), "assign"), c.selector = cc11001100_hook("c.selector", this.selector ? this.selector + " " + a : a, "assign"), c;
    },
    filter: function (a) {
      return this.pushStack(z(this, a || [], !1));
    },
    not: function (a) {
      return this.pushStack(z(this, a || [], !0));
    },
    is: function (a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    }
  });
  var A,
    B = cc11001100_hook("B", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, "var-init");
  (n.fn.init = cc11001100_hook("n.fn.init", function (a, b, c) {
    var e, f;
    if (!a) return this;
    if (c = cc11001100_hook("c", c || A, "assign"), "string" == typeof a) {
      if (!(e = cc11001100_hook("e", "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), "assign")) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
      if (e[1]) {
        if (b = cc11001100_hook("b", b instanceof n ? b[0] : b, "assign"), n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        return this;
      }
      if ((f = cc11001100_hook("f", d.getElementById(e[2]), "assign")) && f.parentNode) {
        if (f.id !== e[2]) return A.find(a);
        this.length = cc11001100_hook("this.length", 1, "assign"), this[0] = cc11001100_hook("this[0]", f, "assign");
      }
      return this.context = cc11001100_hook("this.context", d, "assign"), this.selector = cc11001100_hook("this.selector", a, "assign"), this;
    }
    return a.nodeType ? (this.context = cc11001100_hook("this.context", this[0] = cc11001100_hook("this[0]", a, "assign"), "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = cc11001100_hook("this.selector", a.selector, "assign"), this.context = cc11001100_hook("this.context", a.context, "assign")), n.makeArray(a, this));
  }, "assign")).prototype = cc11001100_hook("(n.fn.init = function (a, b, c) {\n  var e, f;\n  if (!a) return this;\n  if (c = c || A, \"string\" == typeof a) {\n    if (!(e = \"<\" === a.charAt(0) && \">\" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);\n    if (e[1]) {\n      if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);\n      return this;\n    }\n    if ((f = d.getElementById(e[2])) && f.parentNode) {\n      if (f.id !== e[2]) return A.find(a);\n      this.length = 1, this[0] = f;\n    }\n    return this.context = d, this.selector = a, this;\n  }\n  return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));\n}).prototype", n.fn, "assign"), A = cc11001100_hook("A", n(d), "assign");
  var C = cc11001100_hook("C", /^(?:parents|prev(?:Until|All))/, "var-init"),
    D = cc11001100_hook("D", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  n.fn.extend({
    has: function (a) {
      var b,
        c = cc11001100_hook("c", n(a, this), "var-init"),
        d = cc11001100_hook("d", c.length, "var-init");
      return this.filter(function () {
        for (b = cc11001100_hook("b", 0, "assign"); b < d; b++) if (n.contains(this, c[b])) return !0;
      });
    },
    closest: function (a, b) {
      for (var c, d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", this.length, "var-init"), f = cc11001100_hook("f", [], "var-init"), g = cc11001100_hook("g", w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0, "var-init"); d < e; d++) for (c = cc11001100_hook("c", this[d], "assign"); c && c !== b; c = cc11001100_hook("c", c.parentNode, "assign")) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
        f.push(c);
        break;
      }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });
  function E(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    do {
      a = cc11001100_hook("a", a[b], "assign");
    } while (a && 1 !== a.nodeType);
    return a;
  }
  n.each({
    parent: function (a) {
      var b = cc11001100_hook("b", a.parentNode, "var-init");
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function (a) {
      return u(a, "parentNode");
    },
    parentsUntil: function (a, b, c) {
      return u(a, "parentNode", c);
    },
    next: function (a) {
      return E(a, "nextSibling");
    },
    prev: function (a) {
      return E(a, "previousSibling");
    },
    nextAll: function (a) {
      return u(a, "nextSibling");
    },
    prevAll: function (a) {
      return u(a, "previousSibling");
    },
    nextUntil: function (a, b, c) {
      return u(a, "nextSibling", c);
    },
    prevUntil: function (a, b, c) {
      return u(a, "previousSibling", c);
    },
    siblings: function (a) {
      return v((a.parentNode || {}).firstChild, a);
    },
    children: function (a) {
      return v(a.firstChild);
    },
    contents: function (a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = cc11001100_hook("n.fn[a]", function (c, d) {
      var e = cc11001100_hook("e", n.map(this, b, c), "var-init");
      return "Until" !== a.slice(-5) && (d = cc11001100_hook("d", c, "assign")), d && "string" == typeof d && (e = cc11001100_hook("e", n.filter(d, e), "assign")), this.length > 1 && (D[a] || (e = cc11001100_hook("e", n.uniqueSort(e), "assign")), C.test(a) && (e = cc11001100_hook("e", e.reverse(), "assign"))), this.pushStack(e);
    }, "assign");
  });
  var F = cc11001100_hook("F", /\S+/g, "var-init");
  function G(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", {}, "var-init");
    return n.each(a.match(F) || [], function (a, c) {
      b[c] = cc11001100_hook("b[c]", !0, "assign");
    }), b;
  }
  n.Callbacks = cc11001100_hook("n.Callbacks", function (a) {
    a = cc11001100_hook("a", "string" == typeof a ? G(a) : n.extend({}, a), "assign");
    var b,
      c,
      d,
      e,
      f = cc11001100_hook("f", [], "var-init"),
      g = cc11001100_hook("g", [], "var-init"),
      h = cc11001100_hook("h", -1, "var-init"),
      i = function () {
        for (e = cc11001100_hook("e", a.once, "assign"), d = cc11001100_hook("d", b = cc11001100_hook("b", !0, "assign"), "assign"); g.length; h = cc11001100_hook("h", -1, "assign")) {
          c = cc11001100_hook("c", g.shift(), "assign");
          while (++h < f.length) !1 === f[h].apply(c[0], c[1]) && a.stopOnFalse && (h = cc11001100_hook("h", f.length, "assign"), c = cc11001100_hook("c", !1, "assign"));
        }
        a.memory || (c = cc11001100_hook("c", !1, "assign")), b = cc11001100_hook("b", !1, "assign"), e && (f = cc11001100_hook("f", c ? [] : "", "assign"));
      },
      j = cc11001100_hook("j", {
        add: function () {
          return f && (c && !b && (h = cc11001100_hook("h", f.length - 1, "assign"), g.push(c)), function b(c) {
            n.each(c, function (c, d) {
              n.isFunction(d) ? a.unique && j.has(d) || f.push(d) : d && d.length && "string" !== n.type(d) && b(d);
            });
          }(arguments), c && !b && i()), this;
        },
        remove: function () {
          return n.each(arguments, function (a, b) {
            var c;
            while ((c = cc11001100_hook("c", n.inArray(b, f, c), "assign")) > -1) f.splice(c, 1), c <= h && h--;
          }), this;
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = cc11001100_hook("f", [], "assign")), this;
        },
        disable: function () {
          return e = cc11001100_hook("e", g = cc11001100_hook("g", [], "assign"), "assign"), f = cc11001100_hook("f", c = cc11001100_hook("c", "", "assign"), "assign"), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return e = cc11001100_hook("e", !0, "assign"), c || j.disable(), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return e || (c = cc11001100_hook("c", c || [], "assign"), c = cc11001100_hook("c", [a, c.slice ? c.slice() : c], "assign"), g.push(c), b || i()), this;
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        }
      }, "var-init");
    return j;
  }, "assign"), n.extend({
    Deferred: function (a) {
      var b = cc11001100_hook("b", [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], "var-init"),
        c = cc11001100_hook("c", "pending", "var-init"),
        d = cc11001100_hook("d", {
          state: function () {
            return c;
          },
          always: function () {
            return e.done(arguments).fail(arguments), this;
          },
          then: function () {
            var a = cc11001100_hook("a", arguments, "var-init");
            return n.Deferred(function (c) {
              n.each(b, function (b, f) {
                var g = cc11001100_hook("g", n.isFunction(a[b]) && a[b], "var-init");
                e[f[1]](function () {
                  var a = cc11001100_hook("a", g && g.apply(this, arguments), "var-init");
                  a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                });
              }), a = cc11001100_hook("a", null, "assign");
            }).promise();
          },
          promise: function (a) {
            return null != a ? n.extend(a, d) : d;
          }
        }, "var-init"),
        e = cc11001100_hook("e", {}, "var-init");
      return d.pipe = cc11001100_hook("d.pipe", d.then, "assign"), n.each(b, function (a, f) {
        var g = cc11001100_hook("g", f[2], "var-init"),
          h = cc11001100_hook("h", f[3], "var-init");
        d[f[1]] = cc11001100_hook("d[f[1]]", g.add, "assign"), h && g.add(function () {
          c = cc11001100_hook("c", h, "assign");
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = cc11001100_hook("e[f[0]]", function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, "assign"), e[f[0] + "With"] = cc11001100_hook("e[f[0] + \"With\"]", g.fireWith, "assign");
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function (a) {
      var b = cc11001100_hook("b", 0, "var-init"),
        c = cc11001100_hook("c", e.call(arguments), "var-init"),
        d = cc11001100_hook("d", c.length, "var-init"),
        f = cc11001100_hook("f", 1 !== d || a && n.isFunction(a.promise) ? d : 0, "var-init"),
        g = cc11001100_hook("g", 1 === f ? a : n.Deferred(), "var-init"),
        h = function (a, b, c) {
          return function (d) {
            b[a] = cc11001100_hook("b[a]", this, "assign"), c[a] = cc11001100_hook("c[a]", arguments.length > 1 ? e.call(arguments) : d, "assign"), c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
          };
        },
        i,
        j,
        k;
      if (d > 1) for (i = cc11001100_hook("i", new Array(d), "assign"), j = cc11001100_hook("j", new Array(d), "assign"), k = cc11001100_hook("k", new Array(d), "assign"); b < d; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var H;
  n.fn.ready = cc11001100_hook("n.fn.ready", function (a) {
    return n.ready.promise().done(a), this;
  }, "assign"), n.extend({
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function (a) {
      (!0 === a ? --n.readyWait : n.isReady) || (n.isReady = cc11001100_hook("n.isReady", !0, "assign"), !0 !== a && --n.readyWait > 0 || (H.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    }
  });
  function I() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J)) : (d.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }
  function J() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (I(), n.ready());
  }
  n.ready.promise = cc11001100_hook("n.ready.promise", function (b) {
    if (!H) if (H = cc11001100_hook("H", n.Deferred(), "assign"), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);else if (d.addEventListener) d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J);else {
      d.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
      var c = cc11001100_hook("c", !1, "var-init");
      try {
        c = cc11001100_hook("c", null == a.frameElement && d.documentElement, "assign");
      } catch (e) {}
      c && c.doScroll && function b() {
        if (!n.isReady) {
          try {
            c.doScroll("left");
          } catch (e) {
            return a.setTimeout(b, 50);
          }
          I(), n.ready();
        }
      }();
    }
    return H.promise(b);
  }, "assign"), n.ready.promise();
  var K;
  for (K in n(l)) break;
  l.ownFirst = cc11001100_hook("l.ownFirst", "0" === K, "assign"), l.inlineBlockNeedsLayout = cc11001100_hook("l.inlineBlockNeedsLayout", !1, "assign"), n(function () {
    var a, b, c, e;
    (c = cc11001100_hook("c", d.getElementsByTagName("body")[0], "assign")) && c.style && (b = cc11001100_hook("b", d.createElement("div"), "assign"), e = cc11001100_hook("e", d.createElement("div"), "assign"), e.style.cssText = cc11001100_hook("e.style.cssText", "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", "assign"), c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = cc11001100_hook("b.style.cssText", "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", "assign"), l.inlineBlockNeedsLayout = cc11001100_hook("l.inlineBlockNeedsLayout", a = cc11001100_hook("a", 3 === b.offsetWidth, "assign"), "assign"), a && (c.style.zoom = cc11001100_hook("c.style.zoom", 1, "assign"))), c.removeChild(e));
  }), function () {
    var a = cc11001100_hook("a", d.createElement("div"), "var-init");
    l.deleteExpando = cc11001100_hook("l.deleteExpando", !0, "assign");
    try {
      delete a.test;
    } catch (b) {
      l.deleteExpando = cc11001100_hook("l.deleteExpando", !1, "assign");
    }
    a = cc11001100_hook("a", null, "assign");
  }();
  var L = function (a) {
      var b = cc11001100_hook("b", n.noData[(a.nodeName + " ").toLowerCase()], "var-init"),
        c = cc11001100_hook("c", +a.nodeType || 1, "var-init");
      return (1 === c || 9 === c) && (!b || !0 !== b && a.getAttribute("classid") === b);
    },
    M = cc11001100_hook("M", /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, "var-init"),
    N = cc11001100_hook("N", /([A-Z])/g, "var-init");
  function O(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (void 0 === c && 1 === a.nodeType) {
      var d = cc11001100_hook("d", "data-" + b.replace(N, "-$1").toLowerCase(), "var-init");
      if ("string" == typeof (c = cc11001100_hook("c", a.getAttribute(d), "assign"))) {
        try {
          c = cc11001100_hook("c", "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : M.test(c) ? n.parseJSON(c) : c), "assign");
        } catch (e) {}
        n.data(a, b, c);
      } else c = cc11001100_hook("c", void 0, "assign");
    }
    return c;
  }
  function P(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;
    for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function Q(a, b, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (L(a)) {
      var f,
        g,
        h = cc11001100_hook("h", n.expando, "var-init"),
        i = cc11001100_hook("i", a.nodeType, "var-init"),
        j = cc11001100_hook("j", i ? n.cache : a, "var-init"),
        k = cc11001100_hook("k", i ? a[h] : a[h] && h, "var-init");
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = cc11001100_hook("k", i ? a[h] = cc11001100_hook("a[h]", c.pop() || n.guid++, "assign") : h, "assign")), j[k] || (j[k] = cc11001100_hook("j[k]", i ? {} : {
        toJSON: cc11001100_hook("toJSON", n.noop, "object-key-init")
      }, "assign")), "object" != typeof b && "function" != typeof b || (e ? j[k] = cc11001100_hook("j[k]", n.extend(j[k], b), "assign") : j[k].data = cc11001100_hook("j[k].data", n.extend(j[k].data, b), "assign")), g = cc11001100_hook("g", j[k], "assign"), e || (g.data || (g.data = cc11001100_hook("g.data", {}, "assign")), g = cc11001100_hook("g", g.data, "assign")), void 0 !== d && (g[n.camelCase(b)] = cc11001100_hook("g[n.camelCase(b)]", d, "assign")), "string" == typeof b ? null == (f = cc11001100_hook("f", g[b], "assign")) && (f = cc11001100_hook("f", g[n.camelCase(b)], "assign")) : f = cc11001100_hook("f", g, "assign"), f;
    }
  }
  function R(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (L(a)) {
      var d,
        e,
        f = cc11001100_hook("f", a.nodeType, "var-init"),
        g = cc11001100_hook("g", f ? n.cache : a, "var-init"),
        h = cc11001100_hook("h", f ? a[n.expando] : n.expando, "var-init");
      if (g[h]) {
        if (b && (d = cc11001100_hook("d", c ? g[h] : g[h].data, "assign"))) {
          n.isArray(b) ? b = cc11001100_hook("b", b.concat(n.map(b, n.camelCase)), "assign") : b in d ? b = cc11001100_hook("b", [b], "assign") : (b = cc11001100_hook("b", n.camelCase(b), "assign"), b = cc11001100_hook("b", b in d ? [b] : b.split(" "), "assign")), e = cc11001100_hook("e", b.length, "assign");
          while (e--) delete d[b[e]];
          if (c ? !P(d) : !n.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, P(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = cc11001100_hook("g[h]", void 0, "assign"));
      }
    }
  }
  n.extend({
    cache: {},
    noData: {
      "applet ": cc11001100_hook("applet ", !0, "object-key-init"),
      "embed ": cc11001100_hook("embed ", !0, "object-key-init"),
      "object ": cc11001100_hook("object ", "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", "object-key-init")
    },
    hasData: function (a) {
      return !!(a = cc11001100_hook("a", a.nodeType ? n.cache[a[n.expando]] : a[n.expando], "assign")) && !P(a);
    },
    data: function (a, b, c) {
      return Q(a, b, c);
    },
    removeData: function (a, b) {
      return R(a, b);
    },
    _data: function (a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return R(a, b, !0);
    }
  }), n.fn.extend({
    data: function (a, b) {
      var c,
        d,
        e,
        f = cc11001100_hook("f", this[0], "var-init"),
        g = cc11001100_hook("g", f && f.attributes, "var-init");
      if (void 0 === a) {
        if (this.length && (e = cc11001100_hook("e", n.data(f), "assign"), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
          c = cc11001100_hook("c", g.length, "assign");
          while (c--) g[c] && (d = cc11001100_hook("d", g[c].name, "assign"), 0 === d.indexOf("data-") && (d = cc11001100_hook("d", n.camelCase(d.slice(5)), "assign"), O(f, d, e[d])));
          n._data(f, "parsedAttrs", !0);
        }
        return e;
      }
      return "object" == typeof a ? this.each(function () {
        n.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        n.data(this, a, b);
      }) : f ? O(f, a, n.data(f, a)) : void 0;
    },
    removeData: function (a) {
      return this.each(function () {
        n.removeData(this, a);
      });
    }
  }), n.extend({
    queue: function (a, b, c) {
      var d;
      if (a) return b = cc11001100_hook("b", (b || "fx") + "queue", "assign"), d = cc11001100_hook("d", n._data(a, b), "assign"), c && (!d || n.isArray(c) ? d = cc11001100_hook("d", n._data(a, b, n.makeArray(c)), "assign") : d.push(c)), d || [];
    },
    dequeue: function (a, b) {
      b = cc11001100_hook("b", b || "fx", "assign");
      var c = cc11001100_hook("c", n.queue(a, b), "var-init"),
        d = cc11001100_hook("d", c.length, "var-init"),
        e = cc11001100_hook("e", c.shift(), "var-init"),
        f = cc11001100_hook("f", n._queueHooks(a, b), "var-init"),
        g = function () {
          n.dequeue(a, b);
        };
      "inprogress" === e && (e = cc11001100_hook("e", c.shift(), "assign"), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function (a, b) {
      var c = cc11001100_hook("c", b + "queueHooks", "var-init");
      return n._data(a, c) || n._data(a, c, {
        empty: cc11001100_hook("empty", n.Callbacks("once memory").add(function () {
          n._removeData(a, b + "queue"), n._removeData(a, c);
        }), "object-key-init")
      });
    }
  }), n.fn.extend({
    queue: function (a, b) {
      var c = cc11001100_hook("c", 2, "var-init");
      return "string" != typeof a && (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", "fx", "assign"), c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = cc11001100_hook("c", n.queue(this, a, b), "var-init");
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", []);
    },
    promise: function (a, b) {
      var c,
        d = cc11001100_hook("d", 1, "var-init"),
        e = cc11001100_hook("e", n.Deferred(), "var-init"),
        f = cc11001100_hook("f", this, "var-init"),
        g = cc11001100_hook("g", this.length, "var-init"),
        h = function () {
          --d || e.resolveWith(f, [f]);
        };
      "string" != typeof a && (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", void 0, "assign")), a = cc11001100_hook("a", a || "fx", "assign");
      while (g--) (c = cc11001100_hook("c", n._data(f[g], a + "queueHooks"), "assign")) && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b);
    }
  }), function () {
    var a;
    l.shrinkWrapBlocks = cc11001100_hook("l.shrinkWrapBlocks", function () {
      if (null != a) return a;
      a = cc11001100_hook("a", !1, "assign");
      var b, c, e;
      return (c = cc11001100_hook("c", d.getElementsByTagName("body")[0], "assign")) && c.style ? (b = cc11001100_hook("b", d.createElement("div"), "assign"), e = cc11001100_hook("e", d.createElement("div"), "assign"), e.style.cssText = cc11001100_hook("e.style.cssText", "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", "assign"), c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = cc11001100_hook("b.style.cssText", "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", "assign"), b.appendChild(d.createElement("div")).style.width = cc11001100_hook("b.appendChild(d.createElement(\"div\")).style.width", "5px", "assign"), a = cc11001100_hook("a", 3 !== b.offsetWidth, "assign")), c.removeChild(e), a) : void 0;
    }, "assign");
  }();
  var S = cc11001100_hook("S", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    T = cc11001100_hook("T", new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), "var-init"),
    U = cc11001100_hook("U", ["Top", "Right", "Bottom", "Left"], "var-init"),
    V = function (a, b) {
      return a = cc11001100_hook("a", b || a, "assign"), "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    };
  function W(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e,
      f = cc11001100_hook("f", 1, "var-init"),
      g = cc11001100_hook("g", 20, "var-init"),
      h = cc11001100_hook("h", d ? function () {
        return d.cur();
      } : function () {
        return n.css(a, b, "");
      }, "var-init"),
      i = cc11001100_hook("i", h(), "var-init"),
      j = cc11001100_hook("j", c && c[3] || (n.cssNumber[b] ? "" : "px"), "var-init"),
      k = cc11001100_hook("k", (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b)), "var-init");
    if (k && k[3] !== j) {
      j = cc11001100_hook("j", j || k[3], "assign"), c = cc11001100_hook("c", c || [], "assign"), k = cc11001100_hook("k", +i || 1, "assign");
      do {
        f = cc11001100_hook("f", f || ".5", "assign"), k /= cc11001100_hook("k", f, "assign"), n.style(a, b, k + j);
      } while (f !== (f = cc11001100_hook("f", h() / i, "assign")) && 1 !== f && --g);
    }
    return c && (k = cc11001100_hook("k", +k || +i || 0, "assign"), e = cc11001100_hook("e", c[1] ? k + (c[1] + 1) * c[2] : +c[2], "assign"), d && (d.unit = cc11001100_hook("d.unit", j, "assign"), d.start = cc11001100_hook("d.start", k, "assign"), d.end = cc11001100_hook("d.end", e, "assign"))), e;
  }
  var X = function (a, b, c, d, e, f, g) {
      var h = cc11001100_hook("h", 0, "var-init"),
        i = cc11001100_hook("i", a.length, "var-init"),
        j = cc11001100_hook("j", null == c, "var-init");
      if ("object" === n.type(c)) {
        e = cc11001100_hook("e", !0, "assign");
        for (h in c) X(a, b, h, c[h], !0, f, g);
      } else if (void 0 !== d && (e = cc11001100_hook("e", !0, "assign"), n.isFunction(d) || (g = cc11001100_hook("g", !0, "assign")), j && (g ? (b.call(a, d), b = cc11001100_hook("b", null, "assign")) : (j = cc11001100_hook("j", b, "assign"), b = cc11001100_hook("b", function (a, b, c) {
        return j.call(n(a), c);
      }, "assign"))), b)) for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    Y = cc11001100_hook("Y", /^(?:checkbox|radio)$/i, "var-init"),
    Z = cc11001100_hook("Z", /<([\w:-]+)/, "var-init"),
    $ = cc11001100_hook("$", /^$|\/(?:java|ecma)script/i, "var-init"),
    _ = cc11001100_hook("_", /^\s+/, "var-init"),
    aa = cc11001100_hook("aa", "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video", "var-init");
  function ba(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", aa.split("|"), "var-init"),
      c = cc11001100_hook("c", a.createDocumentFragment(), "var-init");
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  !function () {
    var a = cc11001100_hook("a", d.createElement("div"), "var-init"),
      b = cc11001100_hook("b", d.createDocumentFragment(), "var-init"),
      c = cc11001100_hook("c", d.createElement("input"), "var-init");
    a.innerHTML = cc11001100_hook("a.innerHTML", "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", "assign"), l.leadingWhitespace = cc11001100_hook("l.leadingWhitespace", 3 === a.firstChild.nodeType, "assign"), l.tbody = cc11001100_hook("l.tbody", !a.getElementsByTagName("tbody").length, "assign"), l.htmlSerialize = cc11001100_hook("l.htmlSerialize", !!a.getElementsByTagName("link").length, "assign"), l.html5Clone = cc11001100_hook("l.html5Clone", "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, "assign"), c.type = cc11001100_hook("c.type", "checkbox", "assign"), c.checked = cc11001100_hook("c.checked", !0, "assign"), b.appendChild(c), l.appendChecked = cc11001100_hook("l.appendChecked", c.checked, "assign"), a.innerHTML = cc11001100_hook("a.innerHTML", "<textarea>x</textarea>", "assign"), l.noCloneChecked = cc11001100_hook("l.noCloneChecked", !!a.cloneNode(!0).lastChild.defaultValue, "assign"), b.appendChild(a), c = cc11001100_hook("c", d.createElement("input"), "assign"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = cc11001100_hook("l.checkClone", a.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), l.noCloneEvent = cc11001100_hook("l.noCloneEvent", !!a.addEventListener, "assign"), a[n.expando] = cc11001100_hook("a[n.expando]", 1, "assign"), l.attributes = cc11001100_hook("l.attributes", !a.getAttribute(n.expando), "assign");
  }();
  var ca = cc11001100_hook("ca", {
    option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
    legend: cc11001100_hook("legend", [1, "<fieldset>", "</fieldset>"], "object-key-init"),
    area: cc11001100_hook("area", [1, "<map>", "</map>"], "object-key-init"),
    param: cc11001100_hook("param", [1, "<object>", "</object>"], "object-key-init"),
    thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
    tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
    col: cc11001100_hook("col", [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], "object-key-init"),
    td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
    _default: cc11001100_hook("_default", l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"], "object-key-init")
  }, "var-init");
  ca.optgroup = cc11001100_hook("ca.optgroup", ca.option, "assign"), ca.tbody = cc11001100_hook("ca.tbody", ca.tfoot = cc11001100_hook("ca.tfoot", ca.colgroup = cc11001100_hook("ca.colgroup", ca.caption = cc11001100_hook("ca.caption", ca.thead, "assign"), "assign"), "assign"), "assign"), ca.th = cc11001100_hook("ca.th", ca.td, "assign");
  function da(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c,
      d,
      e = cc11001100_hook("e", 0, "var-init"),
      f = cc11001100_hook("f", void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0, "var-init");
    if (!f) for (f = cc11001100_hook("f", [], "assign"), c = cc11001100_hook("c", a.childNodes || a, "assign"); null != (d = cc11001100_hook("d", c[e], "assign")); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, da(d, b));
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f;
  }
  function ea(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c, d = cc11001100_hook("d", 0, "var-init"); null != (c = cc11001100_hook("c", a[d], "assign")); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
  }
  var fa = cc11001100_hook("fa", /<|&#?\w+;/, "var-init"),
    ga = cc11001100_hook("ga", /<tbody/i, "var-init");
  function ha(a) {
    cc11001100_hook("a", a, "function-parameter");
    Y.test(a.type) && (a.defaultChecked = cc11001100_hook("a.defaultChecked", a.checked, "assign"));
  }
  function ia(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var f, g, h, i, j, k, m, o = cc11001100_hook("o", a.length, "var-init"), p = cc11001100_hook("p", ba(b), "var-init"), q = cc11001100_hook("q", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < o; r++) if ((g = cc11001100_hook("g", a[r], "assign")) || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);else if (fa.test(g)) {
      i = cc11001100_hook("i", i || p.appendChild(b.createElement("div")), "assign"), j = cc11001100_hook("j", (Z.exec(g) || ["", ""])[1].toLowerCase(), "assign"), m = cc11001100_hook("m", ca[j] || ca._default, "assign"), i.innerHTML = cc11001100_hook("i.innerHTML", m[1] + n.htmlPrefilter(g) + m[2], "assign"), f = cc11001100_hook("f", m[0], "assign");
      while (f--) i = cc11001100_hook("i", i.lastChild, "assign");
      if (!l.leadingWhitespace && _.test(g) && q.push(b.createTextNode(_.exec(g)[0])), !l.tbody) {
        g = cc11001100_hook("g", "table" !== j || ga.test(g) ? "<table>" !== m[1] || ga.test(g) ? 0 : i : i.firstChild, "assign"), f = cc11001100_hook("f", g && g.childNodes.length, "assign");
        while (f--) n.nodeName(k = cc11001100_hook("k", g.childNodes[f], "assign"), "tbody") && !k.childNodes.length && g.removeChild(k);
      }
      n.merge(q, i.childNodes), i.textContent = cc11001100_hook("i.textContent", "", "assign");
      while (i.firstChild) i.removeChild(i.firstChild);
      i = cc11001100_hook("i", p.lastChild, "assign");
    } else q.push(b.createTextNode(g));
    i && p.removeChild(i), l.appendChecked || n.grep(da(q, "input"), ha), r = cc11001100_hook("r", 0, "assign");
    while (g = cc11001100_hook("g", q[r++], "assign")) if (d && n.inArray(g, d) > -1) e && e.push(g);else if (h = cc11001100_hook("h", n.contains(g.ownerDocument, g), "assign"), i = cc11001100_hook("i", da(p.appendChild(g), "script"), "assign"), h && ea(i), c) {
      f = cc11001100_hook("f", 0, "assign");
      while (g = cc11001100_hook("g", i[f++], "assign")) $.test(g.type || "") && c.push(g);
    }
    return i = cc11001100_hook("i", null, "assign"), p;
  }
  !function () {
    var b,
      c,
      e = cc11001100_hook("e", d.createElement("div"), "var-init");
    for (b in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      change: cc11001100_hook("change", !0, "object-key-init"),
      focusin: cc11001100_hook("focusin", !0, "object-key-init")
    }) c = cc11001100_hook("c", "on" + b, "assign"), (l[b] = cc11001100_hook("l[b]", c in a, "assign")) || (e.setAttribute(c, "t"), l[b] = cc11001100_hook("l[b]", !1 === e.attributes[c].expando, "assign"));
    e = cc11001100_hook("e", null, "assign");
  }();
  var ja = cc11001100_hook("ja", /^(?:input|select|textarea)$/i, "var-init"),
    ka = cc11001100_hook("ka", /^key/, "var-init"),
    la = cc11001100_hook("la", /^(?:mouse|pointer|contextmenu|drag|drop)|click/, "var-init"),
    ma = cc11001100_hook("ma", /^(?:focusinfocus|focusoutblur)$/, "var-init"),
    na = cc11001100_hook("na", /^([^.]*)(?:\.(.+)|)/, "var-init");
  function oa() {
    return !0;
  }
  function pa() {
    return !1;
  }
  function qa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ra(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = cc11001100_hook("d", d || c, "assign"), c = cc11001100_hook("c", void 0, "assign"));
      for (h in b) ra(a, h, c, d, b[h], f);
      return a;
    }
    if (null == d && null == e ? (e = cc11001100_hook("e", c, "assign"), d = cc11001100_hook("d", c = cc11001100_hook("c", void 0, "assign"), "assign")) : null == e && ("string" == typeof c ? (e = cc11001100_hook("e", d, "assign"), d = cc11001100_hook("d", void 0, "assign")) : (e = cc11001100_hook("e", d, "assign"), d = cc11001100_hook("d", c, "assign"), c = cc11001100_hook("c", void 0, "assign"))), !1 === e) e = cc11001100_hook("e", pa, "assign");else if (!e) return a;
    return 1 === f && (g = cc11001100_hook("g", e, "assign"), e = cc11001100_hook("e", function (a) {
      return n().off(a), g.apply(this, arguments);
    }, "assign"), e.guid = cc11001100_hook("e.guid", g.guid || (g.guid = cc11001100_hook("g.guid", n.guid++, "assign")), "assign")), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }
  n.event = cc11001100_hook("n.event", {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = cc11001100_hook("r", n._data(a), "var-init");
      if (r) {
        c.handler && (i = cc11001100_hook("i", c, "assign"), c = cc11001100_hook("c", i.handler, "assign"), e = cc11001100_hook("e", i.selector, "assign")), c.guid || (c.guid = cc11001100_hook("c.guid", n.guid++, "assign")), (g = cc11001100_hook("g", r.events, "assign")) || (g = cc11001100_hook("g", r.events = cc11001100_hook("r.events", {}, "assign"), "assign")), (k = cc11001100_hook("k", r.handle, "assign")) || (k = cc11001100_hook("k", r.handle = cc11001100_hook("r.handle", function (a) {
          return void 0 === n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments);
        }, "assign"), "assign"), k.elem = cc11001100_hook("k.elem", a, "assign")), b = cc11001100_hook("b", (b || "").match(F) || [""], "assign"), h = cc11001100_hook("h", b.length, "assign");
        while (h--) f = cc11001100_hook("f", na.exec(b[h]) || [], "assign"), o = cc11001100_hook("o", q = cc11001100_hook("q", f[1], "assign"), "assign"), p = cc11001100_hook("p", (f[2] || "").split(".").sort(), "assign"), o && (j = cc11001100_hook("j", n.event.special[o] || {}, "assign"), o = cc11001100_hook("o", (e ? j.delegateType : j.bindType) || o, "assign"), j = cc11001100_hook("j", n.event.special[o] || {}, "assign"), l = cc11001100_hook("l", n.extend({
          type: cc11001100_hook("type", o, "object-key-init"),
          origType: cc11001100_hook("origType", q, "object-key-init"),
          data: cc11001100_hook("data", d, "object-key-init"),
          handler: cc11001100_hook("handler", c, "object-key-init"),
          guid: cc11001100_hook("guid", c.guid, "object-key-init"),
          selector: cc11001100_hook("selector", e, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", e && n.expr.match.needsContext.test(e), "object-key-init"),
          namespace: cc11001100_hook("namespace", p.join("."), "object-key-init")
        }, i), "assign"), (m = cc11001100_hook("m", g[o], "assign")) || (m = cc11001100_hook("m", g[o] = cc11001100_hook("g[o]", [], "assign"), "assign"), m.delegateCount = cc11001100_hook("m.delegateCount", 0, "assign"), j.setup && !1 !== j.setup.call(a, d, p, k) || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = cc11001100_hook("l.handler.guid", c.guid, "assign"))), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = cc11001100_hook("n.event.global[o]", !0, "assign"));
        a = cc11001100_hook("a", null, "assign");
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = cc11001100_hook("r", n.hasData(a) && n._data(a), "var-init");
      if (r && (k = cc11001100_hook("k", r.events, "assign"))) {
        b = cc11001100_hook("b", (b || "").match(F) || [""], "assign"), j = cc11001100_hook("j", b.length, "assign");
        while (j--) if (h = cc11001100_hook("h", na.exec(b[j]) || [], "assign"), o = cc11001100_hook("o", q = cc11001100_hook("q", h[1], "assign"), "assign"), p = cc11001100_hook("p", (h[2] || "").split(".").sort(), "assign"), o) {
          l = cc11001100_hook("l", n.event.special[o] || {}, "assign"), o = cc11001100_hook("o", (d ? l.delegateType : l.bindType) || o, "assign"), m = cc11001100_hook("m", k[o] || [], "assign"), h = cc11001100_hook("h", h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), i = cc11001100_hook("i", f = cc11001100_hook("f", m.length, "assign"), "assign");
          while (f--) g = cc11001100_hook("g", m[f], "assign"), !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
          i && !m.length && (l.teardown && !1 !== l.teardown.call(a, p, r.handle) || n.removeEvent(a, o, r.handle), delete k[o]);
        } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = cc11001100_hook("p", [e || d], "var-init"),
        q = cc11001100_hook("q", k.call(b, "type") ? b.type : b, "var-init"),
        r = cc11001100_hook("r", k.call(b, "namespace") ? b.namespace.split(".") : [], "var-init");
      if (i = cc11001100_hook("i", m = cc11001100_hook("m", e = cc11001100_hook("e", e || d, "assign"), "assign"), "assign"), 3 !== e.nodeType && 8 !== e.nodeType && !ma.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = cc11001100_hook("r", q.split("."), "assign"), q = cc11001100_hook("q", r.shift(), "assign"), r.sort()), h = cc11001100_hook("h", q.indexOf(":") < 0 && "on" + q, "assign"), b = cc11001100_hook("b", b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), "assign"), b.isTrigger = cc11001100_hook("b.isTrigger", f ? 2 : 3, "assign"), b.namespace = cc11001100_hook("b.namespace", r.join("."), "assign"), b.rnamespace = cc11001100_hook("b.rnamespace", b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), b.result = cc11001100_hook("b.result", void 0, "assign"), b.target || (b.target = cc11001100_hook("b.target", e, "assign")), c = cc11001100_hook("c", null == c ? [b] : n.makeArray(c, [b]), "assign"), l = cc11001100_hook("l", n.event.special[q] || {}, "assign"), f || !l.trigger || !1 !== l.trigger.apply(e, c))) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = cc11001100_hook("j", l.delegateType || q, "assign"), ma.test(j + q) || (i = cc11001100_hook("i", i.parentNode, "assign")); i; i = cc11001100_hook("i", i.parentNode, "assign")) p.push(i), m = cc11001100_hook("m", i, "assign");
          m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a);
        }
        o = cc11001100_hook("o", 0, "assign");
        while ((i = cc11001100_hook("i", p[o++], "assign")) && !b.isPropagationStopped()) b.type = cc11001100_hook("b.type", o > 1 ? j : l.bindType || q, "assign"), g = cc11001100_hook("g", (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), "assign"), g && g.apply(i, c), (g = cc11001100_hook("g", h && i[h], "assign")) && g.apply && L(i) && (b.result = cc11001100_hook("b.result", g.apply(i, c), "assign"), !1 === b.result && b.preventDefault());
        if (b.type = cc11001100_hook("b.type", q, "assign"), !f && !b.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), c)) && L(e) && h && e[q] && !n.isWindow(e)) {
          m = cc11001100_hook("m", e[h], "assign"), m && (e[h] = cc11001100_hook("e[h]", null, "assign")), n.event.triggered = cc11001100_hook("n.event.triggered", q, "assign");
          try {
            e[q]();
          } catch (s) {}
          n.event.triggered = cc11001100_hook("n.event.triggered", void 0, "assign"), m && (e[h] = cc11001100_hook("e[h]", m, "assign"));
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = cc11001100_hook("a", n.event.fix(a), "assign");
      var b,
        c,
        d,
        f,
        g,
        h = cc11001100_hook("h", [], "var-init"),
        i = cc11001100_hook("i", e.call(arguments), "var-init"),
        j = cc11001100_hook("j", (n._data(this, "events") || {})[a.type] || [], "var-init"),
        k = cc11001100_hook("k", n.event.special[a.type] || {}, "var-init");
      if (i[0] = cc11001100_hook("i[0]", a, "assign"), a.delegateTarget = cc11001100_hook("a.delegateTarget", this, "assign"), !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
        h = cc11001100_hook("h", n.event.handlers.call(this, a, j), "assign"), b = cc11001100_hook("b", 0, "assign");
        while ((f = cc11001100_hook("f", h[b++], "assign")) && !a.isPropagationStopped()) {
          a.currentTarget = cc11001100_hook("a.currentTarget", f.elem, "assign"), c = cc11001100_hook("c", 0, "assign");
          while ((g = cc11001100_hook("g", f.handlers[c++], "assign")) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = cc11001100_hook("a.handleObj", g, "assign"), a.data = cc11001100_hook("a.data", g.data, "assign"), void 0 !== (d = cc11001100_hook("d", ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), "assign")) && !1 === (a.result = cc11001100_hook("a.result", d, "assign")) && (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = cc11001100_hook("g", [], "var-init"),
        h = cc11001100_hook("h", b.delegateCount, "var-init"),
        i = cc11001100_hook("i", a.target, "var-init");
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = cc11001100_hook("i", i.parentNode || this, "assign")) if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
        for (d = cc11001100_hook("d", [], "assign"), c = cc11001100_hook("c", 0, "assign"); c < h; c++) f = cc11001100_hook("f", b[c], "assign"), e = cc11001100_hook("e", f.selector + " ", "assign"), void 0 === d[e] && (d[e] = cc11001100_hook("d[e]", f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length, "assign")), d[e] && d.push(f);
        d.length && g.push({
          elem: cc11001100_hook("elem", i, "object-key-init"),
          handlers: cc11001100_hook("handlers", d, "object-key-init")
        });
      }
      return h < b.length && g.push({
        elem: cc11001100_hook("elem", this, "object-key-init"),
        handlers: cc11001100_hook("handlers", b.slice(h), "object-key-init")
      }), g;
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = cc11001100_hook("f", a.type, "var-init"),
        g = cc11001100_hook("g", a, "var-init"),
        h = cc11001100_hook("h", this.fixHooks[f], "var-init");
      h || (this.fixHooks[f] = cc11001100_hook("this.fixHooks[f]", h = cc11001100_hook("h", la.test(f) ? this.mouseHooks : ka.test(f) ? this.keyHooks : {}, "assign"), "assign")), e = cc11001100_hook("e", h.props ? this.props.concat(h.props) : this.props, "assign"), a = cc11001100_hook("a", new n.Event(g), "assign"), b = cc11001100_hook("b", e.length, "assign");
      while (b--) c = cc11001100_hook("c", e[b], "assign"), a[c] = cc11001100_hook("a[c]", g[c], "assign");
      return a.target || (a.target = cc11001100_hook("a.target", g.srcElement || d, "assign")), 3 === a.target.nodeType && (a.target = cc11001100_hook("a.target", a.target.parentNode, "assign")), a.metaKey = cc11001100_hook("a.metaKey", !!a.metaKey, "assign"), h.filter ? h.filter(a, g) : a;
    },
    props: cc11001100_hook("props", "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), "object-key-init"),
    fixHooks: {},
    keyHooks: {
      props: cc11001100_hook("props", "char charCode key keyCode".split(" "), "object-key-init"),
      filter: function (a, b) {
        return null == a.which && (a.which = cc11001100_hook("a.which", null != b.charCode ? b.charCode : b.keyCode, "assign")), a;
      }
    },
    mouseHooks: {
      props: cc11001100_hook("props", "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), "object-key-init"),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = cc11001100_hook("g", b.button, "var-init"),
          h = cc11001100_hook("h", b.fromElement, "var-init");
        return null == a.pageX && null != b.clientX && (e = cc11001100_hook("e", a.target.ownerDocument || d, "assign"), f = cc11001100_hook("f", e.documentElement, "assign"), c = cc11001100_hook("c", e.body, "assign"), a.pageX = cc11001100_hook("a.pageX", b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), "assign"), a.pageY = cc11001100_hook("a.pageY", b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0), "assign")), !a.relatedTarget && h && (a.relatedTarget = cc11001100_hook("a.relatedTarget", h === a.target ? b.toElement : h, "assign")), a.which || void 0 === g || (a.which = cc11001100_hook("a.which", 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0, "assign")), a;
      }
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      focus: {
        trigger: function () {
          if (this !== qa() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          if (this === qa() && this.blur) return this.blur(), !1;
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      click: {
        trigger: function () {
          if (n.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = cc11001100_hook("a.originalEvent.returnValue", a.result, "assign"));
        }
      }
    },
    simulate: function (a, b, c) {
      var d = cc11001100_hook("d", n.extend(new n.Event(), c, {
        type: cc11001100_hook("type", a, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init")
      }), "var-init");
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    }
  }, "assign"), n.removeEvent = cc11001100_hook("n.removeEvent", d.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  } : function (a, b, c) {
    var d = cc11001100_hook("d", "on" + b, "var-init");
    a.detachEvent && (void 0 === a[d] && (a[d] = cc11001100_hook("a[d]", null, "assign")), a.detachEvent(d, c));
  }, "assign"), n.Event = cc11001100_hook("n.Event", function (a, b) {
    if (!(this instanceof n.Event)) return new n.Event(a, b);
    a && a.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", a, "assign"), this.type = cc11001100_hook("this.type", a.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? oa : pa, "assign")) : this.type = cc11001100_hook("this.type", a, "assign"), b && n.extend(this, b), this.timeStamp = cc11001100_hook("this.timeStamp", a && a.timeStamp || n.now(), "assign"), this[n.expando] = cc11001100_hook("this[n.expando]", !0, "assign");
  }, "assign"), n.Event.prototype = cc11001100_hook("n.Event.prototype", {
    constructor: cc11001100_hook("constructor", n.Event, "object-key-init"),
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", pa, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", pa, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", pa, "object-key-init"),
    preventDefault: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", oa, "assign"), a && (a.preventDefault ? a.preventDefault() : a.returnValue = cc11001100_hook("a.returnValue", !1, "assign"));
    },
    stopPropagation: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", oa, "assign"), a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = cc11001100_hook("a.cancelBubble", !0, "assign"));
    },
    stopImmediatePropagation: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", oa, "assign"), a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, "assign"), n.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init"),
    pointerenter: cc11001100_hook("pointerenter", "pointerover", "object-key-init"),
    pointerleave: cc11001100_hook("pointerleave", "pointerout", "object-key-init")
  }, function (a, b) {
    n.event.special[a] = cc11001100_hook("n.event.special[a]", {
      delegateType: cc11001100_hook("delegateType", b, "object-key-init"),
      bindType: cc11001100_hook("bindType", b, "object-key-init"),
      handle: function (a) {
        var c,
          d = cc11001100_hook("d", this, "var-init"),
          e = cc11001100_hook("e", a.relatedTarget, "var-init"),
          f = cc11001100_hook("f", a.handleObj, "var-init");
        return e && (e === d || n.contains(d, e)) || (a.type = cc11001100_hook("a.type", f.origType, "assign"), c = cc11001100_hook("c", f.handler.apply(this, arguments), "assign"), a.type = cc11001100_hook("a.type", b, "assign")), c;
      }
    }, "assign");
  }), l.submit || (n.event.special.submit = cc11001100_hook("n.event.special.submit", {
    setup: function () {
      if (n.nodeName(this, "form")) return !1;
      n.event.add(this, "click._submit keypress._submit", function (a) {
        var b = cc11001100_hook("b", a.target, "var-init"),
          c = cc11001100_hook("c", n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0, "var-init");
        c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
          a._submitBubble = cc11001100_hook("a._submitBubble", !0, "assign");
        }), n._data(c, "submit", !0));
      });
    },
    postDispatch: function (a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a));
    },
    teardown: function () {
      if (n.nodeName(this, "form")) return !1;
      n.event.remove(this, "._submit");
    }
  }, "assign")), l.change || (n.event.special.change = cc11001100_hook("n.event.special.change", {
    setup: function () {
      if (ja.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = cc11001100_hook("this._justChanged", !0, "assign"));
      }), n.event.add(this, "click._change", function (a) {
        this._justChanged && !a.isTrigger && (this._justChanged = cc11001100_hook("this._justChanged", !1, "assign")), n.event.simulate("change", this, a);
      })), !1;
      n.event.add(this, "beforeactivate._change", function (a) {
        var b = cc11001100_hook("b", a.target, "var-init");
        ja.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a);
        }), n._data(b, "change", !0));
      });
    },
    handle: function (a) {
      var b = cc11001100_hook("b", a.target, "var-init");
      if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments);
    },
    teardown: function () {
      return n.event.remove(this, "._change"), !ja.test(this.nodeName);
    }
  }, "assign")), l.focusin || n.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };
    n.event.special[b] = cc11001100_hook("n.event.special[b]", {
      setup: function () {
        var d = cc11001100_hook("d", this.ownerDocument || this, "var-init"),
          e = cc11001100_hook("e", n._data(d, b), "var-init");
        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
      },
      teardown: function () {
        var d = cc11001100_hook("d", this.ownerDocument || this, "var-init"),
          e = cc11001100_hook("e", n._data(d, b) - 1, "var-init");
        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b));
      }
    }, "assign");
  }), n.fn.extend({
    on: function (a, b, c, d) {
      return ra(this, a, b, c, d);
    },
    one: function (a, b, c, d) {
      return ra(this, a, b, c, d, 1);
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = cc11001100_hook("d", a.handleObj, "assign"), n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this;
      }
      return !1 !== b && "function" != typeof b || (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign")), !1 === c && (c = cc11001100_hook("c", pa, "assign")), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      var c = cc11001100_hook("c", this[0], "var-init");
      if (c) return n.event.trigger(a, b, c, !0);
    }
  });
  var sa = cc11001100_hook("sa", / jQuery\d+="(?:null|\d+)"/g, "var-init"),
    ta = cc11001100_hook("ta", new RegExp("<(?:" + aa + ")[\\s/>]", "i"), "var-init"),
    ua = cc11001100_hook("ua", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "var-init"),
    va = cc11001100_hook("va", /<script|<style|<link/i, "var-init"),
    wa = cc11001100_hook("wa", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    xa = cc11001100_hook("xa", /^true\/(.*)/, "var-init"),
    ya = cc11001100_hook("ya", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init"),
    za = cc11001100_hook("za", ba(d), "var-init"),
    Aa = cc11001100_hook("Aa", za.appendChild(d.createElement("div")), "var-init");
  function Ba(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }
  function Ca(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.type = cc11001100_hook("a.type", (null !== n.find.attr(a, "type")) + "/" + a.type, "assign"), a;
  }
  function Da(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", xa.exec(a.type), "var-init");
    return b ? a.type = cc11001100_hook("a.type", b[1], "assign") : a.removeAttribute("type"), a;
  }
  function Ea(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
        d,
        e,
        f = cc11001100_hook("f", n._data(a), "var-init"),
        g = cc11001100_hook("g", n._data(b, f), "var-init"),
        h = cc11001100_hook("h", f.events, "var-init");
      if (h) {
        delete g.handle, g.events = cc11001100_hook("g.events", {}, "assign");
        for (c in h) for (d = cc11001100_hook("d", 0, "assign"), e = cc11001100_hook("e", h[c].length, "assign"); d < e; d++) n.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = cc11001100_hook("g.data", n.extend({}, g.data), "assign"));
    }
  }
  function Fa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = cc11001100_hook("c", b.nodeName.toLowerCase(), "assign"), !l.noCloneEvent && b[n.expando]) {
        e = cc11001100_hook("e", n._data(b), "assign");
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando);
      }
      "script" === c && b.text !== a.text ? (Ca(b).text = cc11001100_hook("Ca(b).text", a.text, "assign"), Da(b)) : "object" === c ? (b.parentNode && (b.outerHTML = cc11001100_hook("b.outerHTML", a.outerHTML, "assign")), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = cc11001100_hook("b.innerHTML", a.innerHTML, "assign"))) : "input" === c && Y.test(a.type) ? (b.defaultChecked = cc11001100_hook("b.defaultChecked", b.checked = cc11001100_hook("b.checked", a.checked, "assign"), "assign"), b.value !== a.value && (b.value = cc11001100_hook("b.value", a.value, "assign"))) : "option" === c ? b.defaultSelected = cc11001100_hook("b.defaultSelected", b.selected = cc11001100_hook("b.selected", a.defaultSelected, "assign"), "assign") : "input" !== c && "textarea" !== c || (b.defaultValue = cc11001100_hook("b.defaultValue", a.defaultValue, "assign"));
    }
  }
  function Ga(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    b = cc11001100_hook("b", f.apply([], b), "assign");
    var e,
      g,
      h,
      i,
      j,
      k,
      m = cc11001100_hook("m", 0, "var-init"),
      o = cc11001100_hook("o", a.length, "var-init"),
      p = cc11001100_hook("p", o - 1, "var-init"),
      q = cc11001100_hook("q", b[0], "var-init"),
      r = cc11001100_hook("r", n.isFunction(q), "var-init");
    if (r || o > 1 && "string" == typeof q && !l.checkClone && wa.test(q)) return a.each(function (e) {
      var f = cc11001100_hook("f", a.eq(e), "var-init");
      r && (b[0] = cc11001100_hook("b[0]", q.call(this, e, f.html()), "assign")), Ga(f, b, c, d);
    });
    if (o && (k = cc11001100_hook("k", ia(b, a[0].ownerDocument, !1, a, d), "assign"), e = cc11001100_hook("e", k.firstChild, "assign"), 1 === k.childNodes.length && (k = cc11001100_hook("k", e, "assign")), e || d)) {
      for (i = cc11001100_hook("i", n.map(da(k, "script"), Ca), "assign"), h = cc11001100_hook("h", i.length, "assign"); m < o; m++) g = cc11001100_hook("g", k, "assign"), m !== p && (g = cc11001100_hook("g", n.clone(g, !0, !0), "assign"), h && n.merge(i, da(g, "script"))), c.call(a[m], g, m);
      if (h) for (j = cc11001100_hook("j", i[i.length - 1].ownerDocument, "assign"), n.map(i, Da), m = cc11001100_hook("m", 0, "assign"); m < h; m++) g = cc11001100_hook("g", i[m], "assign"), $.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(ya, "")));
      k = cc11001100_hook("k", e = cc11001100_hook("e", null, "assign"), "assign");
    }
    return a;
  }
  function Ha(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var d, e = cc11001100_hook("e", b ? n.filter(b, a) : a, "var-init"), f = cc11001100_hook("f", 0, "var-init"); null != (d = cc11001100_hook("d", e[f], "assign")); f++) c || 1 !== d.nodeType || n.cleanData(da(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && ea(da(d, "script")), d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(ua, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = cc11001100_hook("i", n.contains(a.ownerDocument, a), "var-init");
      if (l.html5Clone || n.isXMLDoc(a) || !ta.test("<" + a.nodeName + ">") ? f = cc11001100_hook("f", a.cloneNode(!0), "assign") : (Aa.innerHTML = cc11001100_hook("Aa.innerHTML", a.outerHTML, "assign"), Aa.removeChild(f = cc11001100_hook("f", Aa.firstChild, "assign"))), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = cc11001100_hook("d", da(f), "assign"), h = cc11001100_hook("h", da(a), "assign"), g = cc11001100_hook("g", 0, "assign"); null != (e = cc11001100_hook("e", h[g], "assign")); ++g) d[g] && Fa(e, d[g]);
      if (b) if (c) for (h = cc11001100_hook("h", h || da(a), "assign"), d = cc11001100_hook("d", d || da(f), "assign"), g = cc11001100_hook("g", 0, "assign"); null != (e = cc11001100_hook("e", h[g], "assign")); g++) Ea(e, d[g]);else Ea(a, f);
      return d = cc11001100_hook("d", da(f, "script"), "assign"), d.length > 0 && ea(d, !i && da(a, "script")), d = cc11001100_hook("d", h = cc11001100_hook("h", e = cc11001100_hook("e", null, "assign"), "assign"), "assign"), f;
    },
    cleanData: function (a, b) {
      for (var d, e, f, g, h = cc11001100_hook("h", 0, "var-init"), i = cc11001100_hook("i", n.expando, "var-init"), j = cc11001100_hook("j", n.cache, "var-init"), k = cc11001100_hook("k", l.attributes, "var-init"), m = cc11001100_hook("m", n.event.special, "var-init"); null != (d = cc11001100_hook("d", a[h], "assign")); h++) if ((b || L(d)) && (f = cc11001100_hook("f", d[i], "assign"), g = cc11001100_hook("g", f && j[f], "assign"))) {
        if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
        j[f] && (delete j[f], k || void 0 === d.removeAttribute ? d[i] = cc11001100_hook("d[i]", void 0, "assign") : d.removeAttribute(i), c.push(f));
      }
    }
  }), n.fn.extend({
    domManip: cc11001100_hook("domManip", Ga, "object-key-init"),
    detach: function (a) {
      return Ha(this, a, !0);
    },
    remove: function (a) {
      return Ha(this, a);
    },
    text: function (a) {
      return X(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
      }, null, a, arguments.length);
    },
    append: function () {
      return Ga(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          Ba(this, a).appendChild(a);
        }
      });
    },
    prepend: function () {
      return Ga(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = cc11001100_hook("b", Ba(this, a), "var-init");
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function () {
      return Ga(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function () {
      return Ga(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function () {
      for (var a, b = cc11001100_hook("b", 0, "var-init"); null != (a = cc11001100_hook("a", this[b], "assign")); b++) {
        1 === a.nodeType && n.cleanData(da(a, !1));
        while (a.firstChild) a.removeChild(a.firstChild);
        a.options && n.nodeName(a, "select") && (a.options.length = cc11001100_hook("a.options.length", 0, "assign"));
      }
      return this;
    },
    clone: function (a, b) {
      return a = cc11001100_hook("a", null != a && a, "assign"), b = cc11001100_hook("b", null == b ? a : b, "assign"), this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function (a) {
      return X(this, function (a) {
        var b = cc11001100_hook("b", this[0] || {}, "var-init"),
          c = cc11001100_hook("c", 0, "var-init"),
          d = cc11001100_hook("d", this.length, "var-init");
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(sa, "") : void 0;
        if ("string" == typeof a && !va.test(a) && (l.htmlSerialize || !ta.test(a)) && (l.leadingWhitespace || !_.test(a)) && !ca[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = cc11001100_hook("a", n.htmlPrefilter(a), "assign");
          try {
            for (; c < d; c++) b = cc11001100_hook("b", this[c] || {}, "assign"), 1 === b.nodeType && (n.cleanData(da(b, !1)), b.innerHTML = cc11001100_hook("b.innerHTML", a, "assign"));
            b = cc11001100_hook("b", 0, "assign");
          } catch (e) {}
        }
        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function () {
      var a = cc11001100_hook("a", [], "var-init");
      return Ga(this, arguments, function (b) {
        var c = cc11001100_hook("c", this.parentNode, "var-init");
        n.inArray(this, a) < 0 && (n.cleanData(da(this)), c && c.replaceChild(b, this));
      }, a);
    }
  }), n.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (a, b) {
    n.fn[a] = cc11001100_hook("n.fn[a]", function (a) {
      for (var c, d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", n(a), "var-init"), h = cc11001100_hook("h", f.length - 1, "var-init"); d <= h; d++) c = cc11001100_hook("c", d === h ? this : this.clone(!0), "assign"), n(f[d])[b](c), g.apply(e, c.get());
      return this.pushStack(e);
    }, "assign");
  });
  var Ia,
    Ja = cc11001100_hook("Ja", {
      HTML: cc11001100_hook("HTML", "block", "object-key-init"),
      BODY: cc11001100_hook("BODY", "block", "object-key-init")
    }, "var-init");
  function Ka(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", n(b.createElement(a)).appendTo(b.body), "var-init"),
      d = cc11001100_hook("d", n.css(c[0], "display"), "var-init");
    return c.detach(), d;
  }
  function La(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", d, "var-init"),
      c = cc11001100_hook("c", Ja[a], "var-init");
    return c || (c = cc11001100_hook("c", Ka(a, b), "assign"), "none" !== c && c || (Ia = cc11001100_hook("Ia", (Ia || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), "assign"), b = cc11001100_hook("b", (Ia[0].contentWindow || Ia[0].contentDocument).document, "assign"), b.write(), b.close(), c = cc11001100_hook("c", Ka(a, b), "assign"), Ia.detach()), Ja[a] = cc11001100_hook("Ja[a]", c, "assign")), c;
  }
  var Ma = cc11001100_hook("Ma", /^margin/, "var-init"),
    Na = cc11001100_hook("Na", new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), "var-init"),
    Oa = function (a, b, c, d) {
      var e,
        f,
        g = cc11001100_hook("g", {}, "var-init");
      for (f in b) g[f] = cc11001100_hook("g[f]", a.style[f], "assign"), a.style[f] = cc11001100_hook("a.style[f]", b[f], "assign");
      e = cc11001100_hook("e", c.apply(a, d || []), "assign");
      for (f in b) a.style[f] = cc11001100_hook("a.style[f]", g[f], "assign");
      return e;
    },
    Pa = cc11001100_hook("Pa", d.documentElement, "var-init");
  !function () {
    var b,
      c,
      e,
      f,
      g,
      h,
      i = cc11001100_hook("i", d.createElement("div"), "var-init"),
      j = cc11001100_hook("j", d.createElement("div"), "var-init");
    function k() {
      var k,
        l,
        m = cc11001100_hook("m", d.documentElement, "var-init");
      m.appendChild(i), j.style.cssText = cc11001100_hook("j.style.cssText", "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", "assign"), b = cc11001100_hook("b", e = cc11001100_hook("e", h = cc11001100_hook("h", !1, "assign"), "assign"), "assign"), c = cc11001100_hook("c", g = cc11001100_hook("g", !0, "assign"), "assign"), a.getComputedStyle && (l = cc11001100_hook("l", a.getComputedStyle(j), "assign"), b = cc11001100_hook("b", "1%" !== (l || {}).top, "assign"), h = cc11001100_hook("h", "2px" === (l || {}).marginLeft, "assign"), e = cc11001100_hook("e", "4px" === (l || {
        width: cc11001100_hook("width", "4px", "object-key-init")
      }).width, "assign"), j.style.marginRight = cc11001100_hook("j.style.marginRight", "50%", "assign"), c = cc11001100_hook("c", "4px" === (l || {
        marginRight: cc11001100_hook("marginRight", "4px", "object-key-init")
      }).marginRight, "assign"), k = cc11001100_hook("k", j.appendChild(d.createElement("div")), "assign"), k.style.cssText = cc11001100_hook("k.style.cssText", j.style.cssText = cc11001100_hook("j.style.cssText", "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", "assign"), "assign"), k.style.marginRight = cc11001100_hook("k.style.marginRight", k.style.width = cc11001100_hook("k.style.width", "0", "assign"), "assign"), j.style.width = cc11001100_hook("j.style.width", "1px", "assign"), g = cc11001100_hook("g", !parseFloat((a.getComputedStyle(k) || {}).marginRight), "assign"), j.removeChild(k)), j.style.display = cc11001100_hook("j.style.display", "none", "assign"), f = cc11001100_hook("f", 0 === j.getClientRects().length, "assign"), f && (j.style.display = cc11001100_hook("j.style.display", "", "assign"), j.innerHTML = cc11001100_hook("j.innerHTML", "<table><tr><td></td><td>t</td></tr></table>", "assign"), j.childNodes[0].style.borderCollapse = cc11001100_hook("j.childNodes[0].style.borderCollapse", "separate", "assign"), k = cc11001100_hook("k", j.getElementsByTagName("td"), "assign"), k[0].style.cssText = cc11001100_hook("k[0].style.cssText", "margin:0;border:0;padding:0;display:none", "assign"), (f = cc11001100_hook("f", 0 === k[0].offsetHeight, "assign")) && (k[0].style.display = cc11001100_hook("k[0].style.display", "", "assign"), k[1].style.display = cc11001100_hook("k[1].style.display", "none", "assign"), f = cc11001100_hook("f", 0 === k[0].offsetHeight, "assign"))), m.removeChild(i);
    }
    j.style && (j.style.cssText = cc11001100_hook("j.style.cssText", "float:left;opacity:.5", "assign"), l.opacity = cc11001100_hook("l.opacity", "0.5" === j.style.opacity, "assign"), l.cssFloat = cc11001100_hook("l.cssFloat", !!j.style.cssFloat, "assign"), j.style.backgroundClip = cc11001100_hook("j.style.backgroundClip", "content-box", "assign"), j.cloneNode(!0).style.backgroundClip = cc11001100_hook("j.cloneNode(!0).style.backgroundClip", "", "assign"), l.clearCloneStyle = cc11001100_hook("l.clearCloneStyle", "content-box" === j.style.backgroundClip, "assign"), i = cc11001100_hook("i", d.createElement("div"), "assign"), i.style.cssText = cc11001100_hook("i.style.cssText", "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", "assign"), j.innerHTML = cc11001100_hook("j.innerHTML", "", "assign"), i.appendChild(j), l.boxSizing = cc11001100_hook("l.boxSizing", "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, "assign"), n.extend(l, {
      reliableHiddenOffsets: function () {
        return null == b && k(), f;
      },
      boxSizingReliable: function () {
        return null == b && k(), e;
      },
      pixelMarginRight: function () {
        return null == b && k(), c;
      },
      pixelPosition: function () {
        return null == b && k(), b;
      },
      reliableMarginRight: function () {
        return null == b && k(), g;
      },
      reliableMarginLeft: function () {
        return null == b && k(), h;
      }
    }));
  }();
  var Qa,
    Ra,
    Sa = cc11001100_hook("Sa", /^(top|right|bottom|left)$/, "var-init");
  a.getComputedStyle ? (Qa = cc11001100_hook("Qa", function (b) {
    var c = cc11001100_hook("c", b.ownerDocument.defaultView, "var-init");
    return c && c.opener || (c = cc11001100_hook("c", a, "assign")), c.getComputedStyle(b);
  }, "assign"), Ra = cc11001100_hook("Ra", function (a, b, c) {
    var d,
      e,
      f,
      g,
      h = cc11001100_hook("h", a.style, "var-init");
    return c = cc11001100_hook("c", c || Qa(a), "assign"), g = cc11001100_hook("g", c ? c.getPropertyValue(b) || c[b] : void 0, "assign"), "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = cc11001100_hook("g", n.style(a, b), "assign")), c && !l.pixelMarginRight() && Na.test(g) && Ma.test(b) && (d = cc11001100_hook("d", h.width, "assign"), e = cc11001100_hook("e", h.minWidth, "assign"), f = cc11001100_hook("f", h.maxWidth, "assign"), h.minWidth = cc11001100_hook("h.minWidth", h.maxWidth = cc11001100_hook("h.maxWidth", h.width = cc11001100_hook("h.width", g, "assign"), "assign"), "assign"), g = cc11001100_hook("g", c.width, "assign"), h.width = cc11001100_hook("h.width", d, "assign"), h.minWidth = cc11001100_hook("h.minWidth", e, "assign"), h.maxWidth = cc11001100_hook("h.maxWidth", f, "assign")), void 0 === g ? g : g + "";
  }, "assign")) : Pa.currentStyle && (Qa = cc11001100_hook("Qa", function (a) {
    return a.currentStyle;
  }, "assign"), Ra = cc11001100_hook("Ra", function (a, b, c) {
    var d,
      e,
      f,
      g,
      h = cc11001100_hook("h", a.style, "var-init");
    return c = cc11001100_hook("c", c || Qa(a), "assign"), g = cc11001100_hook("g", c ? c[b] : void 0, "assign"), null == g && h && h[b] && (g = cc11001100_hook("g", h[b], "assign")), Na.test(g) && !Sa.test(b) && (d = cc11001100_hook("d", h.left, "assign"), e = cc11001100_hook("e", a.runtimeStyle, "assign"), f = cc11001100_hook("f", e && e.left, "assign"), f && (e.left = cc11001100_hook("e.left", a.currentStyle.left, "assign")), h.left = cc11001100_hook("h.left", "fontSize" === b ? "1em" : g, "assign"), g = cc11001100_hook("g", h.pixelLeft + "px", "assign"), h.left = cc11001100_hook("h.left", d, "assign"), f && (e.left = cc11001100_hook("e.left", f, "assign"))), void 0 === g ? g : g + "" || "auto";
  }, "assign"));
  function Ta(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = cc11001100_hook("this.get", b, "assign")).apply(this, arguments);
      }
    };
  }
  var Ua = cc11001100_hook("Ua", /alpha\([^)]*\)/i, "var-init"),
    Va = cc11001100_hook("Va", /opacity\s*=\s*([^)]*)/i, "var-init"),
    Wa = cc11001100_hook("Wa", /^(none|table(?!-c[ea]).+)/, "var-init"),
    Xa = cc11001100_hook("Xa", new RegExp("^(" + S + ")(.*)$", "i"), "var-init"),
    Ya = cc11001100_hook("Ya", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    Za = cc11001100_hook("Za", {
      letterSpacing: cc11001100_hook("letterSpacing", "0", "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", "400", "object-key-init")
    }, "var-init"),
    $a = cc11001100_hook("$a", ["Webkit", "O", "Moz", "ms"], "var-init"),
    _a = cc11001100_hook("_a", d.createElement("div").style, "var-init");
  function ab(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a in _a) return a;
    var b = cc11001100_hook("b", a.charAt(0).toUpperCase() + a.slice(1), "var-init"),
      c = cc11001100_hook("c", $a.length, "var-init");
    while (c--) if ((a = cc11001100_hook("a", $a[c] + b, "assign")) in _a) return a;
  }
  function bb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c, d, e, f = cc11001100_hook("f", [], "var-init"), g = cc11001100_hook("g", 0, "var-init"), h = cc11001100_hook("h", a.length, "var-init"); g < h; g++) d = cc11001100_hook("d", a[g], "assign"), d.style && (f[g] = cc11001100_hook("f[g]", n._data(d, "olddisplay"), "assign"), c = cc11001100_hook("c", d.style.display, "assign"), b ? (f[g] || "none" !== c || (d.style.display = cc11001100_hook("d.style.display", "", "assign")), "" === d.style.display && V(d) && (f[g] = cc11001100_hook("f[g]", n._data(d, "olddisplay", La(d.nodeName)), "assign"))) : (e = cc11001100_hook("e", V(d), "assign"), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = cc11001100_hook("g", 0, "assign"); g < h; g++) d = cc11001100_hook("d", a[g], "assign"), d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = cc11001100_hook("d.style.display", b ? f[g] || "" : "none", "assign")));
    return a;
  }
  function cb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", Xa.exec(b), "var-init");
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function db(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var f = cc11001100_hook("f", c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, "var-init"), g = cc11001100_hook("g", 0, "var-init"); f < 4; f += cc11001100_hook("f", 2, "assign")) "margin" === c && (g += cc11001100_hook("g", n.css(a, c + U[f], !0, e), "assign")), d ? ("content" === c && (g -= cc11001100_hook("g", n.css(a, "padding" + U[f], !0, e), "assign")), "margin" !== c && (g -= cc11001100_hook("g", n.css(a, "border" + U[f] + "Width", !0, e), "assign"))) : (g += cc11001100_hook("g", n.css(a, "padding" + U[f], !0, e), "assign"), "padding" !== c && (g += cc11001100_hook("g", n.css(a, "border" + U[f] + "Width", !0, e), "assign")));
    return g;
  }
  function eb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", !0, "var-init"),
      e = cc11001100_hook("e", "width" === b ? a.offsetWidth : a.offsetHeight, "var-init"),
      f = cc11001100_hook("f", Qa(a), "var-init"),
      g = cc11001100_hook("g", l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f), "var-init");
    if (e <= 0 || null == e) {
      if (e = cc11001100_hook("e", Ra(a, b, f), "assign"), (e < 0 || null == e) && (e = cc11001100_hook("e", a.style[b], "assign")), Na.test(e)) return e;
      d = cc11001100_hook("d", g && (l.boxSizingReliable() || e === a.style[b]), "assign"), e = cc11001100_hook("e", parseFloat(e) || 0, "assign");
    }
    return e + db(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = cc11001100_hook("c", Ra(a, "opacity"), "var-init");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: cc11001100_hook("animationIterationCount", !0, "object-key-init"),
      columnCount: cc11001100_hook("columnCount", !0, "object-key-init"),
      fillOpacity: cc11001100_hook("fillOpacity", !0, "object-key-init"),
      flexGrow: cc11001100_hook("flexGrow", !0, "object-key-init"),
      flexShrink: cc11001100_hook("flexShrink", !0, "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", !0, "object-key-init"),
      lineHeight: cc11001100_hook("lineHeight", !0, "object-key-init"),
      opacity: cc11001100_hook("opacity", !0, "object-key-init"),
      order: cc11001100_hook("order", !0, "object-key-init"),
      orphans: cc11001100_hook("orphans", !0, "object-key-init"),
      widows: cc11001100_hook("widows", !0, "object-key-init"),
      zIndex: cc11001100_hook("zIndex", !0, "object-key-init"),
      zoom: cc11001100_hook("zoom", !0, "object-key-init")
    },
    cssProps: {
      float: cc11001100_hook("float", l.cssFloat ? "cssFloat" : "styleFloat", "object-key-init")
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = cc11001100_hook("h", n.camelCase(b), "var-init"),
          i = cc11001100_hook("i", a.style, "var-init");
        if (b = cc11001100_hook("b", n.cssProps[h] || (n.cssProps[h] = cc11001100_hook("n.cssProps[h]", ab(h) || h, "assign")), "assign"), g = cc11001100_hook("g", n.cssHooks[b] || n.cssHooks[h], "assign"), void 0 === c) return g && "get" in g && void 0 !== (e = cc11001100_hook("e", g.get(a, !1, d), "assign")) ? e : i[b];
        if (f = cc11001100_hook("f", typeof c, "assign"), "string" === f && (e = cc11001100_hook("e", T.exec(c), "assign")) && e[1] && (c = cc11001100_hook("c", W(a, b, e), "assign"), f = cc11001100_hook("f", "number", "assign")), null != c && c === c && ("number" === f && (c += cc11001100_hook("c", e && e[3] || (n.cssNumber[h] ? "" : "px"), "assign")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = cc11001100_hook("i[b]", "inherit", "assign")), !(g && "set" in g && void 0 === (c = cc11001100_hook("c", g.set(a, c, d), "assign"))))) try {
          i[b] = cc11001100_hook("i[b]", c, "assign");
        } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = cc11001100_hook("h", n.camelCase(b), "var-init");
      return b = cc11001100_hook("b", n.cssProps[h] || (n.cssProps[h] = cc11001100_hook("n.cssProps[h]", ab(h) || h, "assign")), "assign"), g = cc11001100_hook("g", n.cssHooks[b] || n.cssHooks[h], "assign"), g && "get" in g && (f = cc11001100_hook("f", g.get(a, !0, c), "assign")), void 0 === f && (f = cc11001100_hook("f", Ra(a, b, d), "assign")), "normal" === f && b in Za && (f = cc11001100_hook("f", Za[b], "assign")), "" === c || c ? (e = cc11001100_hook("e", parseFloat(f), "assign"), !0 === c || isFinite(e) ? e || 0 : f) : f;
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = cc11001100_hook("n.cssHooks[b]", {
      get: function (a, c, d) {
        if (c) return Wa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Oa(a, Ya, function () {
          return eb(a, b, d);
        }) : eb(a, b, d);
      },
      set: function (a, c, d) {
        var e = cc11001100_hook("e", d && Qa(a), "var-init");
        return cb(a, c, d ? db(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      }
    }, "assign");
  }), l.opacity || (n.cssHooks.opacity = cc11001100_hook("n.cssHooks.opacity", {
    get: function (a, b) {
      return Va.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    },
    set: function (a, b) {
      var c = cc11001100_hook("c", a.style, "var-init"),
        d = cc11001100_hook("d", a.currentStyle, "var-init"),
        e = cc11001100_hook("e", n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", "var-init"),
        f = cc11001100_hook("f", d && d.filter || c.filter || "", "var-init");
      c.zoom = cc11001100_hook("c.zoom", 1, "assign"), (b >= 1 || "" === b) && "" === n.trim(f.replace(Ua, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = cc11001100_hook("c.filter", Ua.test(f) ? f.replace(Ua, e) : f + " " + e, "assign"));
    }
  }, "assign")), n.cssHooks.marginRight = cc11001100_hook("n.cssHooks.marginRight", Ta(l.reliableMarginRight, function (a, b) {
    if (b) return Oa(a, {
      display: cc11001100_hook("display", "inline-block", "object-key-init")
    }, Ra, [a, "marginRight"]);
  }), "assign"), n.cssHooks.marginLeft = cc11001100_hook("n.cssHooks.marginLeft", Ta(l.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Ra(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Oa(a, {
      marginLeft: cc11001100_hook("marginLeft", 0, "object-key-init")
    }, function () {
      return a.getBoundingClientRect().left;
    }) : 0)) + "px";
  }), "assign"), n.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (a, b) {
    n.cssHooks[a + b] = cc11001100_hook("n.cssHooks[a + b]", {
      expand: function (c) {
        for (var d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", {}, "var-init"), f = cc11001100_hook("f", "string" == typeof c ? c.split(" ") : [c], "var-init"); d < 4; d++) e[a + U[d] + b] = cc11001100_hook("e[a + U[d] + b]", f[d] || f[d - 2] || f[0], "assign");
        return e;
      }
    }, "assign"), Ma.test(a) || (n.cssHooks[a + b].set = cc11001100_hook("n.cssHooks[a + b].set", cb, "assign"));
  }), n.fn.extend({
    css: function (a, b) {
      return X(this, function (a, b, c) {
        var d,
          e,
          f = cc11001100_hook("f", {}, "var-init"),
          g = cc11001100_hook("g", 0, "var-init");
        if (n.isArray(b)) {
          for (d = cc11001100_hook("d", Qa(a), "assign"), e = cc11001100_hook("e", b.length, "assign"); g < e; g++) f[b[g]] = cc11001100_hook("f[b[g]]", n.css(a, b[g], !1, d), "assign");
          return f;
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function () {
      return bb(this, !0);
    },
    hide: function () {
      return bb(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    }
  });
  function fb(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return new fb.prototype.init(a, b, c, d, e);
  }
  n.Tween = cc11001100_hook("n.Tween", fb, "assign"), fb.prototype = cc11001100_hook("fb.prototype", {
    constructor: cc11001100_hook("constructor", fb, "object-key-init"),
    init: function (a, b, c, d, e, f) {
      this.elem = cc11001100_hook("this.elem", a, "assign"), this.prop = cc11001100_hook("this.prop", c, "assign"), this.easing = cc11001100_hook("this.easing", e || n.easing._default, "assign"), this.options = cc11001100_hook("this.options", b, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", d, "assign"), this.unit = cc11001100_hook("this.unit", f || (n.cssNumber[c] ? "" : "px"), "assign");
    },
    cur: function () {
      var a = cc11001100_hook("a", fb.propHooks[this.prop], "var-init");
      return a && a.get ? a.get(this) : fb.propHooks._default.get(this);
    },
    run: function (a) {
      var b,
        c = cc11001100_hook("c", fb.propHooks[this.prop], "var-init");
      return this.options.duration ? this.pos = cc11001100_hook("this.pos", b = cc11001100_hook("b", n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration), "assign"), "assign") : this.pos = cc11001100_hook("this.pos", b = cc11001100_hook("b", a, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * b + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : fb.propHooks._default.set(this), this;
    }
  }, "assign"), fb.prototype.init.prototype = cc11001100_hook("fb.prototype.init.prototype", fb.prototype, "assign"), fb.propHooks = cc11001100_hook("fb.propHooks", {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = cc11001100_hook("b", n.css(a.elem, a.prop, ""), "assign"), b && "auto" !== b ? b : 0);
      },
      set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = cc11001100_hook("a.elem[a.prop]", a.now, "assign") : n.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, "assign"), fb.propHooks.scrollTop = cc11001100_hook("fb.propHooks.scrollTop", fb.propHooks.scrollLeft = cc11001100_hook("fb.propHooks.scrollLeft", {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = cc11001100_hook("a.elem[a.prop]", a.now, "assign"));
    }
  }, "assign"), "assign"), n.easing = cc11001100_hook("n.easing", {
    linear: function (a) {
      return a;
    },
    swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    },
    _default: cc11001100_hook("_default", "swing", "object-key-init")
  }, "assign"), n.fx = cc11001100_hook("n.fx", fb.prototype.init, "assign"), n.fx.step = cc11001100_hook("n.fx.step", {}, "assign");
  var gb,
    hb,
    ib = cc11001100_hook("ib", /^(?:toggle|show|hide)$/, "var-init"),
    jb = cc11001100_hook("jb", /queueHooks$/, "var-init");
  function kb() {
    return a.setTimeout(function () {
      gb = cc11001100_hook("gb", void 0, "assign");
    }), gb = cc11001100_hook("gb", n.now(), "assign");
  }
  function lb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c,
      d = cc11001100_hook("d", {
        height: cc11001100_hook("height", a, "object-key-init")
      }, "var-init"),
      e = cc11001100_hook("e", 0, "var-init");
    for (b = cc11001100_hook("b", b ? 1 : 0, "assign"); e < 4; e += cc11001100_hook("e", 2 - b, "assign")) c = cc11001100_hook("c", U[e], "assign"), d["margin" + c] = cc11001100_hook("d[\"margin\" + c]", d["padding" + c] = cc11001100_hook("d[\"padding\" + c]", a, "assign"), "assign");
    return b && (d.opacity = cc11001100_hook("d.opacity", d.width = cc11001100_hook("d.width", a, "assign"), "assign")), d;
  }
  function mb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var d, e = cc11001100_hook("e", (pb.tweeners[b] || []).concat(pb.tweeners["*"]), "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", e.length, "var-init"); f < g; f++) if (d = cc11001100_hook("d", e[f].call(c, b, a), "assign")) return d;
  }
  function nb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      m = cc11001100_hook("m", this, "var-init"),
      o = cc11001100_hook("o", {}, "var-init"),
      p = cc11001100_hook("p", a.style, "var-init"),
      q = cc11001100_hook("q", a.nodeType && V(a), "var-init"),
      r = cc11001100_hook("r", n._data(a, "fxshow"), "var-init");
    c.queue || (h = cc11001100_hook("h", n._queueHooks(a, "fx"), "assign"), null == h.unqueued && (h.unqueued = cc11001100_hook("h.unqueued", 0, "assign"), i = cc11001100_hook("i", h.empty.fire, "assign"), h.empty.fire = cc11001100_hook("h.empty.fire", function () {
      h.unqueued || i();
    }, "assign")), h.unqueued++, m.always(function () {
      m.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = cc11001100_hook("c.overflow", [p.overflow, p.overflowX, p.overflowY], "assign"), j = cc11001100_hook("j", n.css(a, "display"), "assign"), "inline" === (k = cc11001100_hook("k", "none" === j ? n._data(a, "olddisplay") || La(a.nodeName) : j, "assign")) && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== La(a.nodeName) ? p.zoom = cc11001100_hook("p.zoom", 1, "assign") : p.display = cc11001100_hook("p.display", "inline-block", "assign"))), c.overflow && (p.overflow = cc11001100_hook("p.overflow", "hidden", "assign"), l.shrinkWrapBlocks() || m.always(function () {
      p.overflow = cc11001100_hook("p.overflow", c.overflow[0], "assign"), p.overflowX = cc11001100_hook("p.overflowX", c.overflow[1], "assign"), p.overflowY = cc11001100_hook("p.overflowY", c.overflow[2], "assign");
    }));
    for (d in b) if (e = cc11001100_hook("e", b[d], "assign"), ib.exec(e)) {
      if (delete b[d], f = cc11001100_hook("f", f || "toggle" === e, "assign"), e === (q ? "hide" : "show")) {
        if ("show" !== e || !r || void 0 === r[d]) continue;
        q = cc11001100_hook("q", !0, "assign");
      }
      o[d] = cc11001100_hook("o[d]", r && r[d] || n.style(a, d), "assign");
    } else j = cc11001100_hook("j", void 0, "assign");
    if (n.isEmptyObject(o)) "inline" === ("none" === j ? La(a.nodeName) : j) && (p.display = cc11001100_hook("p.display", j, "assign"));else {
      r ? "hidden" in r && (q = cc11001100_hook("q", r.hidden, "assign")) : r = cc11001100_hook("r", n._data(a, "fxshow", {}), "assign"), f && (r.hidden = cc11001100_hook("r.hidden", !q, "assign")), q ? n(a).show() : m.done(function () {
        n(a).hide();
      }), m.done(function () {
        var b;
        n._removeData(a, "fxshow");
        for (b in o) n.style(a, b, o[b]);
      });
      for (d in o) g = cc11001100_hook("g", mb(q ? r[d] : 0, d, m), "assign"), d in r || (r[d] = cc11001100_hook("r[d]", g.start, "assign"), q && (g.end = cc11001100_hook("g.end", g.start, "assign"), g.start = cc11001100_hook("g.start", "width" === d || "height" === d ? 1 : 0, "assign")));
    }
  }
  function ob(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c, d, e, f, g;
    for (c in a) if (d = cc11001100_hook("d", n.camelCase(c), "assign"), e = cc11001100_hook("e", b[d], "assign"), f = cc11001100_hook("f", a[c], "assign"), n.isArray(f) && (e = cc11001100_hook("e", f[1], "assign"), f = cc11001100_hook("f", a[c] = cc11001100_hook("a[c]", f[0], "assign"), "assign")), c !== d && (a[d] = cc11001100_hook("a[d]", f, "assign"), delete a[c]), (g = cc11001100_hook("g", n.cssHooks[d], "assign")) && "expand" in g) {
      f = cc11001100_hook("f", g.expand(f), "assign"), delete a[d];
      for (c in f) c in a || (a[c] = cc11001100_hook("a[c]", f[c], "assign"), b[c] = cc11001100_hook("b[c]", e, "assign"));
    } else b[d] = cc11001100_hook("b[d]", e, "assign");
  }
  function pb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f = cc11001100_hook("f", 0, "var-init"),
      g = cc11001100_hook("g", pb.prefilters.length, "var-init"),
      h = cc11001100_hook("h", n.Deferred().always(function () {
        delete i.elem;
      }), "var-init"),
      i = function () {
        if (e) return !1;
        for (var b = cc11001100_hook("b", gb || kb(), "var-init"), c = cc11001100_hook("c", Math.max(0, j.startTime + j.duration - b), "var-init"), d = cc11001100_hook("d", c / j.duration || 0, "var-init"), f = cc11001100_hook("f", 1 - d, "var-init"), g = cc11001100_hook("g", 0, "var-init"), i = cc11001100_hook("i", j.tweens.length, "var-init"); g < i; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
      },
      j = cc11001100_hook("j", h.promise({
        elem: cc11001100_hook("elem", a, "object-key-init"),
        props: cc11001100_hook("props", n.extend({}, b), "object-key-init"),
        opts: cc11001100_hook("opts", n.extend(!0, {
          specialEasing: {},
          easing: cc11001100_hook("easing", n.easing._default, "object-key-init")
        }, c), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", b, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", c, "object-key-init"),
        startTime: cc11001100_hook("startTime", gb || kb(), "object-key-init"),
        duration: cc11001100_hook("duration", c.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (b, c) {
          var d = cc11001100_hook("d", n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing), "var-init");
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = cc11001100_hook("c", 0, "var-init"),
            d = cc11001100_hook("d", b ? j.tweens.length : 0, "var-init");
          if (e) return this;
          for (e = cc11001100_hook("e", !0, "assign"); c < d; c++) j.tweens[c].run(1);
          return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
        }
      }), "var-init"),
      k = cc11001100_hook("k", j.props, "var-init");
    for (ob(k, j.opts.specialEasing); f < g; f++) if (d = cc11001100_hook("d", pb.prefilters[f].call(j, a, k, j.opts), "assign")) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = cc11001100_hook("n._queueHooks(j.elem, j.opts.queue).stop", n.proxy(d.stop, d), "assign")), d;
    return n.map(k, mb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: cc11001100_hook("elem", a, "object-key-init"),
      anim: cc11001100_hook("anim", j, "object-key-init"),
      queue: cc11001100_hook("queue", j.opts.queue, "object-key-init")
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }
  n.Animation = cc11001100_hook("n.Animation", n.extend(pb, {
    tweeners: {
      "*": cc11001100_hook("*", [function (a, b) {
        var c = cc11001100_hook("c", this.createTween(a, b), "var-init");
        return W(c.elem, a, T.exec(b), c), c;
      }], "object-key-init")
    },
    tweener: function (a, b) {
      n.isFunction(a) ? (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", ["*"], "assign")) : a = cc11001100_hook("a", a.match(F), "assign");
      for (var c, d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", a.length, "var-init"); d < e; d++) c = cc11001100_hook("c", a[d], "assign"), pb.tweeners[c] = cc11001100_hook("pb.tweeners[c]", pb.tweeners[c] || [], "assign"), pb.tweeners[c].unshift(b);
    },
    prefilters: cc11001100_hook("prefilters", [nb], "object-key-init"),
    prefilter: function (a, b) {
      b ? pb.prefilters.unshift(a) : pb.prefilters.push(a);
    }
  }), "assign"), n.speed = cc11001100_hook("n.speed", function (a, b, c) {
    var d = cc11001100_hook("d", a && "object" == typeof a ? n.extend({}, a) : {
      complete: cc11001100_hook("complete", c || !c && b || n.isFunction(a) && a, "object-key-init"),
      duration: cc11001100_hook("duration", a, "object-key-init"),
      easing: cc11001100_hook("easing", c && b || b && !n.isFunction(b) && b, "object-key-init")
    }, "var-init");
    return d.duration = cc11001100_hook("d.duration", n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, "assign"), null != d.queue && !0 !== d.queue || (d.queue = cc11001100_hook("d.queue", "fx", "assign")), d.old = cc11001100_hook("d.old", d.complete, "assign"), d.complete = cc11001100_hook("d.complete", function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, "assign"), d;
  }, "assign"), n.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", b, "object-key-init")
      }, a, c, d);
    },
    animate: function (a, b, c, d) {
      var e = cc11001100_hook("e", n.isEmptyObject(a), "var-init"),
        f = cc11001100_hook("f", n.speed(b, c, d), "var-init"),
        g = function () {
          var b = cc11001100_hook("b", pb(this, n.extend({}, a), f), "var-init");
          (e || n._data(this, "finish")) && b.stop(!0);
        };
      return g.finish = cc11001100_hook("g.finish", g, "assign"), e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function (a, b, c) {
      var d = function (a) {
        var b = cc11001100_hook("b", a.stop, "var-init");
        delete a.stop, b(c);
      };
      return "string" != typeof a && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", void 0, "assign")), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
        var b = cc11001100_hook("b", !0, "var-init"),
          e = cc11001100_hook("e", null != a && a + "queueHooks", "var-init"),
          f = cc11001100_hook("f", n.timers, "var-init"),
          g = cc11001100_hook("g", n._data(this), "var-init");
        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && jb.test(e) && d(g[e]);
        for (e = cc11001100_hook("e", f.length, "assign"); e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = cc11001100_hook("b", !1, "assign"), f.splice(e, 1));
        !b && c || n.dequeue(this, a);
      });
    },
    finish: function (a) {
      return !1 !== a && (a = cc11001100_hook("a", a || "fx", "assign")), this.each(function () {
        var b,
          c = cc11001100_hook("c", n._data(this), "var-init"),
          d = cc11001100_hook("d", c[a + "queue"], "var-init"),
          e = cc11001100_hook("e", c[a + "queueHooks"], "var-init"),
          f = cc11001100_hook("f", n.timers, "var-init"),
          g = cc11001100_hook("g", d ? d.length : 0, "var-init");
        for (c.finish = cc11001100_hook("c.finish", !0, "assign"), n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = cc11001100_hook("b", f.length, "assign"); b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = cc11001100_hook("b", 0, "assign"); b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = cc11001100_hook("c", n.fn[b], "var-init");
    n.fn[b] = cc11001100_hook("n.fn[b]", function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(lb(b, !0), a, d, e);
    }, "assign");
  }), n.each({
    slideDown: cc11001100_hook("slideDown", lb("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", lb("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", lb("toggle"), "object-key-init"),
    fadeIn: {
      opacity: cc11001100_hook("opacity", "show", "object-key-init")
    },
    fadeOut: {
      opacity: cc11001100_hook("opacity", "hide", "object-key-init")
    },
    fadeToggle: {
      opacity: cc11001100_hook("opacity", "toggle", "object-key-init")
    }
  }, function (a, b) {
    n.fn[a] = cc11001100_hook("n.fn[a]", function (a, c, d) {
      return this.animate(b, a, c, d);
    }, "assign");
  }), n.timers = cc11001100_hook("n.timers", [], "assign"), n.fx.tick = cc11001100_hook("n.fx.tick", function () {
    var a,
      b = cc11001100_hook("b", n.timers, "var-init"),
      c = cc11001100_hook("c", 0, "var-init");
    for (gb = cc11001100_hook("gb", n.now(), "assign"); c < b.length; c++) (a = cc11001100_hook("a", b[c], "assign"))() || b[c] !== a || b.splice(c--, 1);
    b.length || n.fx.stop(), gb = cc11001100_hook("gb", void 0, "assign");
  }, "assign"), n.fx.timer = cc11001100_hook("n.fx.timer", function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, "assign"), n.fx.interval = cc11001100_hook("n.fx.interval", 13, "assign"), n.fx.start = cc11001100_hook("n.fx.start", function () {
    hb || (hb = cc11001100_hook("hb", a.setInterval(n.fx.tick, n.fx.interval), "assign"));
  }, "assign"), n.fx.stop = cc11001100_hook("n.fx.stop", function () {
    a.clearInterval(hb), hb = cc11001100_hook("hb", null, "assign");
  }, "assign"), n.fx.speeds = cc11001100_hook("n.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"), n.fn.delay = cc11001100_hook("n.fn.delay", function (b, c) {
    return b = cc11001100_hook("b", n.fx ? n.fx.speeds[b] || b : b, "assign"), c = cc11001100_hook("c", c || "fx", "assign"), this.queue(c, function (c, d) {
      var e = cc11001100_hook("e", a.setTimeout(c, b), "var-init");
      d.stop = cc11001100_hook("d.stop", function () {
        a.clearTimeout(e);
      }, "assign");
    });
  }, "assign"), function () {
    var a,
      b = cc11001100_hook("b", d.createElement("input"), "var-init"),
      c = cc11001100_hook("c", d.createElement("div"), "var-init"),
      e = cc11001100_hook("e", d.createElement("select"), "var-init"),
      f = cc11001100_hook("f", e.appendChild(d.createElement("option")), "var-init");
    c = cc11001100_hook("c", d.createElement("div"), "assign"), c.setAttribute("className", "t"), c.innerHTML = cc11001100_hook("c.innerHTML", "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", "assign"), a = cc11001100_hook("a", c.getElementsByTagName("a")[0], "assign"), b.setAttribute("type", "checkbox"), c.appendChild(b), a = cc11001100_hook("a", c.getElementsByTagName("a")[0], "assign"), a.style.cssText = cc11001100_hook("a.style.cssText", "top:1px", "assign"), l.getSetAttribute = cc11001100_hook("l.getSetAttribute", "t" !== c.className, "assign"), l.style = cc11001100_hook("l.style", /top/.test(a.getAttribute("style")), "assign"), l.hrefNormalized = cc11001100_hook("l.hrefNormalized", "/a" === a.getAttribute("href"), "assign"), l.checkOn = cc11001100_hook("l.checkOn", !!b.value, "assign"), l.optSelected = cc11001100_hook("l.optSelected", f.selected, "assign"), l.enctype = cc11001100_hook("l.enctype", !!d.createElement("form").enctype, "assign"), e.disabled = cc11001100_hook("e.disabled", !0, "assign"), l.optDisabled = cc11001100_hook("l.optDisabled", !f.disabled, "assign"), b = cc11001100_hook("b", d.createElement("input"), "assign"), b.setAttribute("value", ""), l.input = cc11001100_hook("l.input", "" === b.getAttribute("value"), "assign"), b.value = cc11001100_hook("b.value", "t", "assign"), b.setAttribute("type", "radio"), l.radioValue = cc11001100_hook("l.radioValue", "t" === b.value, "assign");
  }();
  var qb = cc11001100_hook("qb", /\r/g, "var-init"),
    rb = cc11001100_hook("rb", /[\x20\t\r\n\f]+/g, "var-init");
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = cc11001100_hook("e", this[0], "var-init");
      {
        if (arguments.length) return d = cc11001100_hook("d", n.isFunction(a), "assign"), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = cc11001100_hook("e", d ? a.call(this, c, n(this).val()) : a, "assign"), null == e ? e = cc11001100_hook("e", "", "assign") : "number" == typeof e ? e += cc11001100_hook("e", "", "assign") : n.isArray(e) && (e = cc11001100_hook("e", n.map(e, function (a) {
            return null == a ? "" : a + "";
          }), "assign")), (b = cc11001100_hook("b", n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], "assign")) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = cc11001100_hook("this.value", e, "assign")));
        });
        if (e) return (b = cc11001100_hook("b", n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], "assign")) && "get" in b && void 0 !== (c = cc11001100_hook("c", b.get(e, "value"), "assign")) ? c : (c = cc11001100_hook("c", e.value, "assign"), "string" == typeof c ? c.replace(qb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = cc11001100_hook("b", n.find.attr(a, "value"), "var-init");
          return null != b ? b : n.trim(n.text(a)).replace(rb, " ");
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = cc11001100_hook("d", a.options, "var-init"), e = cc11001100_hook("e", a.selectedIndex, "var-init"), f = cc11001100_hook("f", "select-one" === a.type || e < 0, "var-init"), g = cc11001100_hook("g", f ? null : [], "var-init"), h = cc11001100_hook("h", f ? e + 1 : d.length, "var-init"), i = cc11001100_hook("i", e < 0 ? h : f ? e : 0, "var-init"); i < h; i++) if (c = cc11001100_hook("c", d[i], "assign"), (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
            if (b = cc11001100_hook("b", n(c).val(), "assign"), f) return b;
            g.push(b);
          }
          return g;
        },
        set: function (a, b) {
          var c,
            d,
            e = cc11001100_hook("e", a.options, "var-init"),
            f = cc11001100_hook("f", n.makeArray(b), "var-init"),
            g = cc11001100_hook("g", e.length, "var-init");
          while (g--) if (d = cc11001100_hook("d", e[g], "assign"), n.inArray(n.valHooks.option.get(d), f) > -1) try {
            d.selected = cc11001100_hook("d.selected", c = cc11001100_hook("c", !0, "assign"), "assign");
          } catch (h) {
            d.scrollHeight;
          } else d.selected = cc11001100_hook("d.selected", !1, "assign");
          return c || (a.selectedIndex = cc11001100_hook("a.selectedIndex", -1, "assign")), e;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = cc11001100_hook("n.valHooks[this]", {
      set: function (a, b) {
        if (n.isArray(b)) return a.checked = cc11001100_hook("a.checked", n.inArray(n(a).val(), b) > -1, "assign");
      }
    }, "assign"), l.checkOn || (n.valHooks[this].get = cc11001100_hook("n.valHooks[this].get", function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    }, "assign"));
  });
  var sb,
    tb,
    ub = cc11001100_hook("ub", n.expr.attrHandle, "var-init"),
    vb = cc11001100_hook("vb", /^(?:checked|selected)$/i, "var-init"),
    wb = cc11001100_hook("wb", l.getSetAttribute, "var-init"),
    xb = cc11001100_hook("xb", l.input, "var-init");
  n.fn.extend({
    attr: function (a, b) {
      return X(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function (a, b, c) {
      var d,
        e,
        f = cc11001100_hook("f", a.nodeType, "var-init");
      if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = cc11001100_hook("b", b.toLowerCase(), "assign"), e = cc11001100_hook("e", n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb), "assign")), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = cc11001100_hook("d", e.set(a, c, b), "assign")) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = cc11001100_hook("d", e.get(a, b), "assign")) ? d : (d = cc11001100_hook("d", n.find.attr(a, b), "assign"), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = cc11001100_hook("c", a.value, "var-init");
            return a.setAttribute("type", b), c && (a.value = cc11001100_hook("a.value", c, "assign")), b;
          }
        }
      }
    },
    removeAttr: function (a, b) {
      var c,
        d,
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", b && b.match(F), "var-init");
      if (f && 1 === a.nodeType) while (c = cc11001100_hook("c", f[e++], "assign")) d = cc11001100_hook("d", n.propFix[c] || c, "assign"), n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = cc11001100_hook("a[d]", !1, "assign") : a[n.camelCase("default-" + c)] = cc11001100_hook("a[n.camelCase(\"default-\" + c)]", a[d] = cc11001100_hook("a[d]", !1, "assign"), "assign") : n.attr(a, c, ""), a.removeAttribute(wb ? c : d);
    }
  }), tb = cc11001100_hook("tb", {
    set: function (a, b, c) {
      return !1 === b ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = cc11001100_hook("a[n.camelCase(\"default-\" + c)]", a[c] = cc11001100_hook("a[c]", !0, "assign"), "assign"), c;
    }
  }, "assign"), n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = cc11001100_hook("c", ub[b] || n.find.attr, "var-init");
    xb && wb || !vb.test(b) ? ub[b] = cc11001100_hook("ub[b]", function (a, b, d) {
      var e, f;
      return d || (f = cc11001100_hook("f", ub[b], "assign"), ub[b] = cc11001100_hook("ub[b]", e, "assign"), e = cc11001100_hook("e", null != c(a, b, d) ? b.toLowerCase() : null, "assign"), ub[b] = cc11001100_hook("ub[b]", f, "assign")), e;
    }, "assign") : ub[b] = cc11001100_hook("ub[b]", function (a, b, c) {
      if (!c) return a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
    }, "assign");
  }), xb && wb || (n.attrHooks.value = cc11001100_hook("n.attrHooks.value", {
    set: function (a, b, c) {
      if (!n.nodeName(a, "input")) return sb && sb.set(a, b, c);
      a.defaultValue = cc11001100_hook("a.defaultValue", b, "assign");
    }
  }, "assign")), wb || (sb = cc11001100_hook("sb", {
    set: function (a, b, c) {
      var d = cc11001100_hook("d", a.getAttributeNode(c), "var-init");
      if (d || a.setAttributeNode(d = cc11001100_hook("d", a.ownerDocument.createAttribute(c), "assign")), d.value = cc11001100_hook("d.value", b += cc11001100_hook("b", "", "assign"), "assign"), "value" === c || b === a.getAttribute(c)) return b;
    }
  }, "assign"), ub.id = cc11001100_hook("ub.id", ub.name = cc11001100_hook("ub.name", ub.coords = cc11001100_hook("ub.coords", function (a, b, c) {
    var d;
    if (!c) return (d = cc11001100_hook("d", a.getAttributeNode(b), "assign")) && "" !== d.value ? d.value : null;
  }, "assign"), "assign"), "assign"), n.valHooks.button = cc11001100_hook("n.valHooks.button", {
    get: function (a, b) {
      var c = cc11001100_hook("c", a.getAttributeNode(b), "var-init");
      if (c && c.specified) return c.value;
    },
    set: cc11001100_hook("set", sb.set, "object-key-init")
  }, "assign"), n.attrHooks.contenteditable = cc11001100_hook("n.attrHooks.contenteditable", {
    set: function (a, b, c) {
      sb.set(a, "" !== b && b, c);
    }
  }, "assign"), n.each(["width", "height"], function (a, b) {
    n.attrHooks[b] = cc11001100_hook("n.attrHooks[b]", {
      set: function (a, c) {
        if ("" === c) return a.setAttribute(b, "auto"), c;
      }
    }, "assign");
  })), l.style || (n.attrHooks.style = cc11001100_hook("n.attrHooks.style", {
    get: function (a) {
      return a.style.cssText || void 0;
    },
    set: function (a, b) {
      return a.style.cssText = cc11001100_hook("a.style.cssText", b + "", "assign");
    }
  }, "assign"));
  var yb = cc11001100_hook("yb", /^(?:input|select|textarea|button|object)$/i, "var-init"),
    zb = cc11001100_hook("zb", /^(?:a|area)$/i, "var-init");
  n.fn.extend({
    prop: function (a, b) {
      return X(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return a = cc11001100_hook("a", n.propFix[a] || a, "assign"), this.each(function () {
        try {
          this[a] = cc11001100_hook("this[a]", void 0, "assign"), delete this[a];
        } catch (b) {}
      });
    }
  }), n.extend({
    prop: function (a, b, c) {
      var d,
        e,
        f = cc11001100_hook("f", a.nodeType, "var-init");
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = cc11001100_hook("b", n.propFix[b] || b, "assign"), e = cc11001100_hook("e", n.propHooks[b], "assign")), void 0 !== c ? e && "set" in e && void 0 !== (d = cc11001100_hook("d", e.set(a, c, b), "assign")) ? d : a[b] = cc11001100_hook("a[b]", c, "assign") : e && "get" in e && null !== (d = cc11001100_hook("d", e.get(a, b), "assign")) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = cc11001100_hook("b", n.find.attr(a, "tabindex"), "var-init");
          return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: cc11001100_hook("for", "htmlFor", "object-key-init"),
      class: cc11001100_hook("class", "className", "object-key-init")
    }
  }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
    n.propHooks[b] = cc11001100_hook("n.propHooks[b]", {
      get: function (a) {
        return a.getAttribute(b, 4);
      }
    }, "assign");
  }), l.optSelected || (n.propHooks.selected = cc11001100_hook("n.propHooks.selected", {
    get: function (a) {
      var b = cc11001100_hook("b", a.parentNode, "var-init");
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    },
    set: function (a) {
      var b = cc11001100_hook("b", a.parentNode, "var-init");
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    }
  }, "assign")), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = cc11001100_hook("n.propFix[this.toLowerCase()]", this, "assign");
  }), l.enctype || (n.propFix.enctype = cc11001100_hook("n.propFix.enctype", "encoding", "assign"));
  var Ab = cc11001100_hook("Ab", /[\t\r\n\f]/g, "var-init");
  function Bb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return n.attr(a, "class") || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = cc11001100_hook("i", 0, "var-init");
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, Bb(this)));
      });
      if ("string" == typeof a && a) {
        b = cc11001100_hook("b", a.match(F) || [], "assign");
        while (c = cc11001100_hook("c", this[i++], "assign")) if (e = cc11001100_hook("e", Bb(c), "assign"), d = cc11001100_hook("d", 1 === c.nodeType && (" " + e + " ").replace(Ab, " "), "assign")) {
          g = cc11001100_hook("g", 0, "assign");
          while (f = cc11001100_hook("f", b[g++], "assign")) d.indexOf(" " + f + " ") < 0 && (d += cc11001100_hook("d", f + " ", "assign"));
          h = cc11001100_hook("h", n.trim(d), "assign"), e !== h && n.attr(c, "class", h);
        }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = cc11001100_hook("i", 0, "var-init");
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, Bb(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = cc11001100_hook("b", a.match(F) || [], "assign");
        while (c = cc11001100_hook("c", this[i++], "assign")) if (e = cc11001100_hook("e", Bb(c), "assign"), d = cc11001100_hook("d", 1 === c.nodeType && (" " + e + " ").replace(Ab, " "), "assign")) {
          g = cc11001100_hook("g", 0, "assign");
          while (f = cc11001100_hook("f", b[g++], "assign")) while (d.indexOf(" " + f + " ") > -1) d = cc11001100_hook("d", d.replace(" " + f + " ", " "), "assign");
          h = cc11001100_hook("h", n.trim(d), "assign"), e !== h && n.attr(c, "class", h);
        }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = cc11001100_hook("c", typeof a, "var-init");
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, Bb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;
        if ("string" === c) {
          d = cc11001100_hook("d", 0, "assign"), e = cc11001100_hook("e", n(this), "assign"), f = cc11001100_hook("f", a.match(F) || [], "assign");
          while (b = cc11001100_hook("b", f[d++], "assign")) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else void 0 !== a && "boolean" !== c || (b = cc11001100_hook("b", Bb(this), "assign"), b && n._data(this, "__className__", b), n.attr(this, "class", b || !1 === a ? "" : n._data(this, "__className__") || ""));
      });
    },
    hasClass: function (a) {
      var b,
        c,
        d = cc11001100_hook("d", 0, "var-init");
      b = cc11001100_hook("b", " " + a + " ", "assign");
      while (c = cc11001100_hook("c", this[d++], "assign")) if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
      return !1;
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = cc11001100_hook("n.fn[b]", function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    }, "assign");
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  });
  var Cb = cc11001100_hook("Cb", a.location, "var-init"),
    Db = cc11001100_hook("Db", n.now(), "var-init"),
    Eb = cc11001100_hook("Eb", /\?/, "var-init"),
    Fb = cc11001100_hook("Fb", /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g, "var-init");
  n.parseJSON = cc11001100_hook("n.parseJSON", function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = cc11001100_hook("d", null, "var-init"),
      e = cc11001100_hook("e", n.trim(b + ""), "var-init");
    return e && !n.trim(e.replace(Fb, function (a, b, e, f) {
      return c && b && (d = cc11001100_hook("d", 0, "assign")), 0 === d ? a : (c = cc11001100_hook("c", e || b, "assign"), d += cc11001100_hook("d", !f - !e, "assign"), "");
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
  }, "assign"), n.parseXML = cc11001100_hook("n.parseXML", function (b) {
    var c, d;
    if (!b || "string" != typeof b) return null;
    try {
      a.DOMParser ? (d = cc11001100_hook("d", new a.DOMParser(), "assign"), c = cc11001100_hook("c", d.parseFromString(b, "text/xml"), "assign")) : (c = cc11001100_hook("c", new a.ActiveXObject("Microsoft.XMLDOM"), "assign"), c.async = cc11001100_hook("c.async", "false", "assign"), c.loadXML(b));
    } catch (e) {
      c = cc11001100_hook("c", void 0, "assign");
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  }, "assign");
  var Gb = cc11001100_hook("Gb", /#.*$/, "var-init"),
    Hb = cc11001100_hook("Hb", /([?&])_=[^&]*/, "var-init"),
    Ib = cc11001100_hook("Ib", /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, "var-init"),
    Jb = cc11001100_hook("Jb", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
    Kb = cc11001100_hook("Kb", /^(?:GET|HEAD)$/, "var-init"),
    Lb = cc11001100_hook("Lb", /^\/\//, "var-init"),
    Mb = cc11001100_hook("Mb", /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, "var-init"),
    Nb = cc11001100_hook("Nb", {}, "var-init"),
    Ob = cc11001100_hook("Ob", {}, "var-init"),
    Pb = cc11001100_hook("Pb", "*/".concat("*"), "var-init"),
    Qb = cc11001100_hook("Qb", Cb.href, "var-init"),
    Rb = cc11001100_hook("Rb", Mb.exec(Qb.toLowerCase()) || [], "var-init");
  function Sb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b, c) {
      "string" != typeof b && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", "*", "assign"));
      var d,
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", b.toLowerCase().match(F) || [], "var-init");
      if (n.isFunction(c)) while (d = cc11001100_hook("d", f[e++], "assign")) "+" === d.charAt(0) ? (d = cc11001100_hook("d", d.slice(1) || "*", "assign"), (a[d] = cc11001100_hook("a[d]", a[d] || [], "assign")).unshift(c)) : (a[d] = cc11001100_hook("a[d]", a[d] || [], "assign")).push(c);
    };
  }
  function Tb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", {}, "var-init"),
      f = cc11001100_hook("f", a === Ob, "var-init");
    function g(h) {
      cc11001100_hook("h", h, "function-parameter");
      var i;
      return e[h] = cc11001100_hook("e[h]", !0, "assign"), n.each(a[h] || [], function (a, h) {
        var j = cc11001100_hook("j", h(b, c, d), "var-init");
        return "string" != typeof j || f || e[j] ? f ? !(i = cc11001100_hook("i", j, "assign")) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }
  function Ub(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c,
      d,
      e = cc11001100_hook("e", n.ajaxSettings.flatOptions || {}, "var-init");
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = cc11001100_hook("c", {}, "assign")))[d] = cc11001100_hook("(e[d] ? a : c || (c = {}))[d]", b[d], "assign"));
    return c && n.extend(!0, a, c), a;
  }
  function Vb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f,
      g,
      h = cc11001100_hook("h", a.contents, "var-init"),
      i = cc11001100_hook("i", a.dataTypes, "var-init");
    while ("*" === i[0]) i.shift(), void 0 === e && (e = cc11001100_hook("e", a.mimeType || b.getResponseHeader("Content-Type"), "assign"));
    if (e) for (g in h) if (h[g] && h[g].test(e)) {
      i.unshift(g);
      break;
    }
    if (i[0] in c) f = cc11001100_hook("f", i[0], "assign");else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = cc11001100_hook("f", g, "assign");
          break;
        }
        d || (d = cc11001100_hook("d", g, "assign"));
      }
      f = cc11001100_hook("f", f || d, "assign");
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Wb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e,
      f,
      g,
      h,
      i,
      j = cc11001100_hook("j", {}, "var-init"),
      k = cc11001100_hook("k", a.dataTypes.slice(), "var-init");
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = cc11001100_hook("j[g.toLowerCase()]", a.converters[g], "assign");
    f = cc11001100_hook("f", k.shift(), "assign");
    while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = cc11001100_hook("c[a.responseFields[f]]", b, "assign")), !i && d && a.dataFilter && (b = cc11001100_hook("b", a.dataFilter(b, a.dataType), "assign")), i = cc11001100_hook("i", f, "assign"), f = cc11001100_hook("f", k.shift(), "assign")) if ("*" === f) f = cc11001100_hook("f", i, "assign");else if ("*" !== i && i !== f) {
      if (!(g = cc11001100_hook("g", j[i + " " + f] || j["* " + f], "assign"))) for (e in j) if (h = cc11001100_hook("h", e.split(" "), "assign"), h[1] === f && (g = cc11001100_hook("g", j[i + " " + h[0]] || j["* " + h[0]], "assign"))) {
        !0 === g ? g = cc11001100_hook("g", j[e], "assign") : !0 !== j[e] && (f = cc11001100_hook("f", h[0], "assign"), k.unshift(h[1]));
        break;
      }
      if (!0 !== g) if (g && a.throws) b = cc11001100_hook("b", g(b), "assign");else try {
        b = cc11001100_hook("b", g(b), "assign");
      } catch (l) {
        return {
          state: cc11001100_hook("state", "parsererror", "object-key-init"),
          error: cc11001100_hook("error", g ? l : "No conversion from " + i + " to " + f, "object-key-init")
        };
      }
    }
    return {
      state: cc11001100_hook("state", "success", "object-key-init"),
      data: cc11001100_hook("data", b, "object-key-init")
    };
  }
  n.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", Qb, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", Jb.test(Rb[1]), "object-key-init"),
      global: cc11001100_hook("global", !0, "object-key-init"),
      processData: cc11001100_hook("processData", !0, "object-key-init"),
      async: cc11001100_hook("async", !0, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", Pb, "object-key-init"),
        text: cc11001100_hook("text", "text/plain", "object-key-init"),
        html: cc11001100_hook("html", "text/html", "object-key-init"),
        xml: cc11001100_hook("xml", "application/xml, text/xml", "object-key-init"),
        json: cc11001100_hook("json", "application/json, text/javascript", "object-key-init")
      },
      contents: {
        xml: cc11001100_hook("xml", /\bxml\b/, "object-key-init"),
        html: cc11001100_hook("html", /\bhtml/, "object-key-init"),
        json: cc11001100_hook("json", /\bjson\b/, "object-key-init")
      },
      responseFields: {
        xml: cc11001100_hook("xml", "responseXML", "object-key-init"),
        text: cc11001100_hook("text", "responseText", "object-key-init"),
        json: cc11001100_hook("json", "responseJSON", "object-key-init")
      },
      converters: {
        "* text": cc11001100_hook("* text", String, "object-key-init"),
        "text html": cc11001100_hook("text html", !0, "object-key-init"),
        "text json": cc11001100_hook("text json", n.parseJSON, "object-key-init"),
        "text xml": cc11001100_hook("text xml", n.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", !0, "object-key-init"),
        context: cc11001100_hook("context", !0, "object-key-init")
      }
    },
    ajaxSetup: function (a, b) {
      return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", Sb(Nb), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", Sb(Ob), "object-key-init"),
    ajax: function (b, c) {
      "object" == typeof b && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign")), c = cc11001100_hook("c", c || {}, "assign");
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = cc11001100_hook("l", n.ajaxSetup({}, c), "var-init"),
        m = cc11001100_hook("m", l.context || l, "var-init"),
        o = cc11001100_hook("o", l.context && (m.nodeType || m.jquery) ? n(m) : n.event, "var-init"),
        p = cc11001100_hook("p", n.Deferred(), "var-init"),
        q = cc11001100_hook("q", n.Callbacks("once memory"), "var-init"),
        r = cc11001100_hook("r", l.statusCode || {}, "var-init"),
        s = cc11001100_hook("s", {}, "var-init"),
        t = cc11001100_hook("t", {}, "var-init"),
        u = cc11001100_hook("u", 0, "var-init"),
        v = cc11001100_hook("v", "canceled", "var-init"),
        w = cc11001100_hook("w", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = cc11001100_hook("k", {}, "assign");
                while (b = cc11001100_hook("b", Ib.exec(g), "assign")) k[b[1].toLowerCase()] = cc11001100_hook("k[b[1].toLowerCase()]", b[2], "assign");
              }
              b = cc11001100_hook("b", k[a.toLowerCase()], "assign");
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === u ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = cc11001100_hook("c", a.toLowerCase(), "var-init");
            return u || (a = cc11001100_hook("a", t[c] = cc11001100_hook("t[c]", t[c] || a, "assign"), "assign"), s[a] = cc11001100_hook("s[a]", b, "assign")), this;
          },
          overrideMimeType: function (a) {
            return u || (l.mimeType = cc11001100_hook("l.mimeType", a, "assign")), this;
          },
          statusCode: function (a) {
            var b;
            if (a) if (u < 2) for (b in a) r[b] = cc11001100_hook("r[b]", [r[b], a[b]], "assign");else w.always(a[w.status]);
            return this;
          },
          abort: function (a) {
            var b = cc11001100_hook("b", a || v, "var-init");
            return j && j.abort(b), x(0, b), this;
          }
        }, "var-init");
      if (p.promise(w).complete = cc11001100_hook("p.promise(w).complete", q.add, "assign"), w.success = cc11001100_hook("w.success", w.done, "assign"), w.error = cc11001100_hook("w.error", w.fail, "assign"), l.url = cc11001100_hook("l.url", ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), "assign"), l.type = cc11001100_hook("l.type", c.method || c.type || l.method || l.type, "assign"), l.dataTypes = cc11001100_hook("l.dataTypes", n.trim(l.dataType || "*").toLowerCase().match(F) || [""], "assign"), null == l.crossDomain && (d = cc11001100_hook("d", Mb.exec(l.url.toLowerCase()), "assign"), l.crossDomain = cc11001100_hook("l.crossDomain", !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443"))), "assign")), l.data && l.processData && "string" != typeof l.data && (l.data = cc11001100_hook("l.data", n.param(l.data, l.traditional), "assign")), Tb(Nb, l, c, w), 2 === u) return w;
      i = cc11001100_hook("i", n.event && l.global, "assign"), i && 0 == n.active++ && n.event.trigger("ajaxStart"), l.type = cc11001100_hook("l.type", l.type.toUpperCase(), "assign"), l.hasContent = cc11001100_hook("l.hasContent", !Kb.test(l.type), "assign"), f = cc11001100_hook("f", l.url, "assign"), l.hasContent || (l.data && (f = cc11001100_hook("f", l.url += cc11001100_hook("l.url", (Eb.test(f) ? "&" : "?") + l.data, "assign"), "assign"), delete l.data), !1 === l.cache && (l.url = cc11001100_hook("l.url", Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++, "assign"))), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && !1 !== l.contentType || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (!1 === l.beforeSend.call(m, w, l) || 2 === u)) return w.abort();
      v = cc11001100_hook("v", "abort", "assign");
      for (e in {
        success: cc11001100_hook("success", 1, "object-key-init"),
        error: cc11001100_hook("error", 1, "object-key-init"),
        complete: cc11001100_hook("complete", 1, "object-key-init")
      }) w[e](l[e]);
      if (j = cc11001100_hook("j", Tb(Ob, l, c, w), "assign")) {
        if (w.readyState = cc11001100_hook("w.readyState", 1, "assign"), i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
        l.async && l.timeout > 0 && (h = cc11001100_hook("h", a.setTimeout(function () {
          w.abort("timeout");
        }, l.timeout), "assign"));
        try {
          u = cc11001100_hook("u", 1, "assign"), j.send(s, x);
        } catch (y) {
          if (!(u < 2)) throw y;
          x(-1, y);
        }
      } else x(-1, "No Transport");
      function x(b, c, d, e) {
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        var k,
          s,
          t,
          v,
          x,
          y = cc11001100_hook("y", c, "var-init");
        2 !== u && (u = cc11001100_hook("u", 2, "assign"), h && a.clearTimeout(h), j = cc11001100_hook("j", void 0, "assign"), g = cc11001100_hook("g", e || "", "assign"), w.readyState = cc11001100_hook("w.readyState", b > 0 ? 4 : 0, "assign"), k = cc11001100_hook("k", b >= 200 && b < 300 || 304 === b, "assign"), d && (v = cc11001100_hook("v", Vb(l, w, d), "assign")), v = cc11001100_hook("v", Wb(l, v, w, k), "assign"), k ? (l.ifModified && (x = cc11001100_hook("x", w.getResponseHeader("Last-Modified"), "assign"), x && (n.lastModified[f] = cc11001100_hook("n.lastModified[f]", x, "assign")), (x = cc11001100_hook("x", w.getResponseHeader("etag"), "assign")) && (n.etag[f] = cc11001100_hook("n.etag[f]", x, "assign"))), 204 === b || "HEAD" === l.type ? y = cc11001100_hook("y", "nocontent", "assign") : 304 === b ? y = cc11001100_hook("y", "notmodified", "assign") : (y = cc11001100_hook("y", v.state, "assign"), s = cc11001100_hook("s", v.data, "assign"), t = cc11001100_hook("t", v.error, "assign"), k = cc11001100_hook("k", !t, "assign"))) : (t = cc11001100_hook("t", y, "assign"), !b && y || (y = cc11001100_hook("y", "error", "assign"), b < 0 && (b = cc11001100_hook("b", 0, "assign")))), w.status = cc11001100_hook("w.status", b, "assign"), w.statusText = cc11001100_hook("w.statusText", (c || y) + "", "assign"), k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = cc11001100_hook("r", void 0, "assign"), i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")));
      }
      return w;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = cc11001100_hook("n[b]", function (a, c, d, e) {
      return n.isFunction(c) && (e = cc11001100_hook("e", e || d, "assign"), d = cc11001100_hook("d", c, "assign"), c = cc11001100_hook("c", void 0, "assign")), n.ajax(n.extend({
        url: cc11001100_hook("url", a, "object-key-init"),
        type: cc11001100_hook("type", b, "object-key-init"),
        dataType: cc11001100_hook("dataType", e, "object-key-init"),
        data: cc11001100_hook("data", c, "object-key-init"),
        success: cc11001100_hook("success", d, "object-key-init")
      }, n.isPlainObject(a) && a));
    }, "assign");
  }), n._evalUrl = cc11001100_hook("n._evalUrl", function (a) {
    return n.ajax({
      url: cc11001100_hook("url", a, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "script", "object-key-init"),
      cache: cc11001100_hook("cache", !0, "object-key-init"),
      async: cc11001100_hook("async", !1, "object-key-init"),
      global: cc11001100_hook("global", !1, "object-key-init"),
      throws: cc11001100_hook("throws", !0, "object-key-init")
    });
  }, "assign"), n.fn.extend({
    wrapAll: function (a) {
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      });
      if (this[0]) {
        var b = cc11001100_hook("b", n(a, this[0].ownerDocument).eq(0).clone(!0), "var-init");
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = cc11001100_hook("a", this, "var-init");
          while (a.firstChild && 1 === a.firstChild.nodeType) a = cc11001100_hook("a", a.firstChild, "assign");
          return a;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = cc11001100_hook("b", n(this), "var-init"),
          c = cc11001100_hook("c", b.contents(), "var-init");
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function (a) {
      var b = cc11001100_hook("b", n.isFunction(a), "var-init");
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  function Xb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.style && a.style.display || n.css(a, "display");
  }
  function Yb(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!n.contains(a.ownerDocument || d, a)) return !0;
    while (a && 1 === a.nodeType) {
      if ("none" === Xb(a) || "hidden" === a.type) return !0;
      a = cc11001100_hook("a", a.parentNode, "assign");
    }
    return !1;
  }
  n.expr.filters.hidden = cc11001100_hook("n.expr.filters.hidden", function (a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a);
  }, "assign"), n.expr.filters.visible = cc11001100_hook("n.expr.filters.visible", function (a) {
    return !n.expr.filters.hidden(a);
  }, "assign");
  var Zb = cc11001100_hook("Zb", /%20/g, "var-init"),
    $b = cc11001100_hook("$b", /\[\]$/, "var-init"),
    _b = cc11001100_hook("_b", /\r?\n/g, "var-init"),
    ac = cc11001100_hook("ac", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    bc = cc11001100_hook("bc", /^(?:input|select|textarea|keygen)/i, "var-init");
  function cc(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) cc(a + "[" + e + "]", b[e], c, d);
  }
  n.param = cc11001100_hook("n.param", function (a, b) {
    var c,
      d = cc11001100_hook("d", [], "var-init"),
      e = function (a, b) {
        b = cc11001100_hook("b", n.isFunction(b) ? b() : null == b ? "" : b, "assign"), d[d.length] = cc11001100_hook("d[d.length]", encodeURIComponent(a) + "=" + encodeURIComponent(b), "assign");
      };
    if (void 0 === b && (b = cc11001100_hook("b", n.ajaxSettings && n.ajaxSettings.traditional, "assign")), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) cc(c, a[c], b, e);
    return d.join("&").replace(Zb, "+");
  }, "assign"), n.fn.extend({
    serialize: function () {
      return n.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var a = cc11001100_hook("a", n.prop(this, "elements"), "var-init");
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = cc11001100_hook("a", this.type, "var-init");
        return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Y.test(a));
      }).map(function (a, b) {
        var c = cc11001100_hook("c", n(this).val(), "var-init");
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: cc11001100_hook("name", b.name, "object-key-init"),
            value: cc11001100_hook("value", a.replace(_b, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", b.name, "object-key-init"),
          value: cc11001100_hook("value", c.replace(_b, "\r\n"), "object-key-init")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = cc11001100_hook("n.ajaxSettings.xhr", void 0 !== a.ActiveXObject ? function () {
    return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc();
  } : gc, "assign");
  var dc = cc11001100_hook("dc", 0, "var-init"),
    ec = cc11001100_hook("ec", {}, "var-init"),
    fc = cc11001100_hook("fc", n.ajaxSettings.xhr(), "var-init");
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in ec) ec[a](void 0, !0);
  }), l.cors = cc11001100_hook("l.cors", !!fc && "withCredentials" in fc, "assign"), (fc = cc11001100_hook("fc", l.ajax = cc11001100_hook("l.ajax", !!fc, "assign"), "assign")) && n.ajaxTransport(function (b) {
    if (!b.crossDomain || l.cors) {
      var c;
      return {
        send: function (d, e) {
          var f,
            g = cc11001100_hook("g", b.xhr(), "var-init"),
            h = cc11001100_hook("h", ++dc, "var-init");
          if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) g[f] = cc11001100_hook("g[f]", b.xhrFields[f], "assign");
          b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = cc11001100_hook("d[\"X-Requested-With\"]", "XMLHttpRequest", "assign"));
          for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          g.send(b.hasContent && b.data || null), c = cc11001100_hook("c", function (a, d) {
            var f, i, j;
            if (c && (d || 4 === g.readyState)) if (delete ec[h], c = cc11001100_hook("c", void 0, "assign"), g.onreadystatechange = cc11001100_hook("g.onreadystatechange", n.noop, "assign"), d) 4 !== g.readyState && g.abort();else {
              j = cc11001100_hook("j", {}, "assign"), f = cc11001100_hook("f", g.status, "assign"), "string" == typeof g.responseText && (j.text = cc11001100_hook("j.text", g.responseText, "assign"));
              try {
                i = cc11001100_hook("i", g.statusText, "assign");
              } catch (k) {
                i = cc11001100_hook("i", "", "assign");
              }
              f || !b.isLocal || b.crossDomain ? 1223 === f && (f = cc11001100_hook("f", 204, "assign")) : f = cc11001100_hook("f", j.text ? 200 : 404, "assign");
            }
            j && e(f, i, j, g.getAllResponseHeaders());
          }, "assign"), b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = cc11001100_hook("g.onreadystatechange", ec[h] = cc11001100_hook("ec[h]", c, "assign"), "assign") : c();
        },
        abort: function () {
          c && c(void 0, !0);
        }
      };
    }
  });
  function gc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function hc() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /\b(?:java|ecma)script\b/, "object-key-init")
    },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = cc11001100_hook("a.cache", !1, "assign")), a.crossDomain && (a.type = cc11001100_hook("a.type", "GET", "assign"), a.global = cc11001100_hook("a.global", !1, "assign"));
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
        c = cc11001100_hook("c", d.head || n("head")[0] || d.documentElement, "var-init");
      return {
        send: function (e, f) {
          b = cc11001100_hook("b", d.createElement("script"), "assign"), b.async = cc11001100_hook("b.async", !0, "assign"), a.scriptCharset && (b.charset = cc11001100_hook("b.charset", a.scriptCharset, "assign")), b.src = cc11001100_hook("b.src", a.url, "assign"), b.onload = cc11001100_hook("b.onload", b.onreadystatechange = cc11001100_hook("b.onreadystatechange", function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = cc11001100_hook("b.onload", b.onreadystatechange = cc11001100_hook("b.onreadystatechange", null, "assign"), "assign"), b.parentNode && b.parentNode.removeChild(b), b = cc11001100_hook("b", null, "assign"), c || f(200, "success"));
          }, "assign"), "assign"), c.insertBefore(b, c.firstChild);
        },
        abort: function () {
          b && b.onload(void 0, !0);
        }
      };
    }
  });
  var ic = cc11001100_hook("ic", [], "var-init"),
    jc = cc11001100_hook("jc", /(=)\?(?=&|$)|\?\?/, "var-init");
  n.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var a = cc11001100_hook("a", ic.pop() || n.expando + "_" + Db++, "var-init");
      return this[a] = cc11001100_hook("this[a]", !0, "assign"), a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
      f,
      g,
      h = cc11001100_hook("h", !1 !== b.jsonp && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data"), "var-init");
    if (h || "jsonp" === b.dataTypes[0]) return e = cc11001100_hook("e", b.jsonpCallback = cc11001100_hook("b.jsonpCallback", n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, "assign"), "assign"), h ? b[h] = cc11001100_hook("b[h]", b[h].replace(jc, "$1" + e), "assign") : !1 !== b.jsonp && (b.url += cc11001100_hook("b.url", (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e, "assign")), b.converters["script json"] = cc11001100_hook("b.converters[\"script json\"]", function () {
      return g || n.error(e + " was not called"), g[0];
    }, "assign"), b.dataTypes[0] = cc11001100_hook("b.dataTypes[0]", "json", "assign"), f = cc11001100_hook("f", a[e], "assign"), a[e] = cc11001100_hook("a[e]", function () {
      g = cc11001100_hook("g", arguments, "assign");
    }, "assign"), d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = cc11001100_hook("a[e]", f, "assign"), b[e] && (b.jsonpCallback = cc11001100_hook("b.jsonpCallback", c.jsonpCallback, "assign"), ic.push(e)), g && n.isFunction(f) && f(g[0]), g = cc11001100_hook("g", f = cc11001100_hook("f", void 0, "assign"), "assign");
    }), "script";
  }), n.parseHTML = cc11001100_hook("n.parseHTML", function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", !1, "assign")), b = cc11001100_hook("b", b || d, "assign");
    var e = cc11001100_hook("e", x.exec(a), "var-init"),
      f = cc11001100_hook("f", !c && [], "var-init");
    return e ? [b.createElement(e[1])] : (e = cc11001100_hook("e", ia([a], b, f), "assign"), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  }, "assign");
  var kc = cc11001100_hook("kc", n.fn.load, "var-init");
  n.fn.load = cc11001100_hook("n.fn.load", function (a, b, c) {
    if ("string" != typeof a && kc) return kc.apply(this, arguments);
    var d,
      e,
      f,
      g = cc11001100_hook("g", this, "var-init"),
      h = cc11001100_hook("h", a.indexOf(" "), "var-init");
    return h > -1 && (d = cc11001100_hook("d", n.trim(a.slice(h, a.length)), "assign"), a = cc11001100_hook("a", a.slice(0, h), "assign")), n.isFunction(b) ? (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign")) : b && "object" == typeof b && (e = cc11001100_hook("e", "POST", "assign")), g.length > 0 && n.ajax({
      url: cc11001100_hook("url", a, "object-key-init"),
      type: cc11001100_hook("type", e || "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", b, "object-key-init")
    }).done(function (a) {
      f = cc11001100_hook("f", arguments, "assign"), g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, "assign"), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = cc11001100_hook("n.fn[b]", function (a) {
      return this.on(b, a);
    }, "assign");
  }), n.expr.filters.animated = cc11001100_hook("n.expr.filters.animated", function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  }, "assign");
  function lc(a) {
    cc11001100_hook("a", a, "function-parameter");
    return n.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow);
  }
  n.offset = cc11001100_hook("n.offset", {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = cc11001100_hook("k", n.css(a, "position"), "var-init"),
        l = cc11001100_hook("l", n(a), "var-init"),
        m = cc11001100_hook("m", {}, "var-init");
      "static" === k && (a.style.position = cc11001100_hook("a.style.position", "relative", "assign")), h = cc11001100_hook("h", l.offset(), "assign"), f = cc11001100_hook("f", n.css(a, "top"), "assign"), i = cc11001100_hook("i", n.css(a, "left"), "assign"), j = cc11001100_hook("j", ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, "assign"), j ? (d = cc11001100_hook("d", l.position(), "assign"), g = cc11001100_hook("g", d.top, "assign"), e = cc11001100_hook("e", d.left, "assign")) : (g = cc11001100_hook("g", parseFloat(f) || 0, "assign"), e = cc11001100_hook("e", parseFloat(i) || 0, "assign")), n.isFunction(b) && (b = cc11001100_hook("b", b.call(a, c, n.extend({}, h)), "assign")), null != b.top && (m.top = cc11001100_hook("m.top", b.top - h.top + g, "assign")), null != b.left && (m.left = cc11001100_hook("m.left", b.left - h.left + e, "assign")), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, "assign"), n.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
        c,
        d = cc11001100_hook("d", {
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init")
        }, "var-init"),
        e = cc11001100_hook("e", this[0], "var-init"),
        f = cc11001100_hook("f", e && e.ownerDocument, "var-init");
      if (f) return b = cc11001100_hook("b", f.documentElement, "assign"), n.contains(b, e) ? (void 0 !== e.getBoundingClientRect && (d = cc11001100_hook("d", e.getBoundingClientRect(), "assign")), c = cc11001100_hook("c", lc(f), "assign"), {
        top: cc11001100_hook("top", d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), "object-key-init"),
        left: cc11001100_hook("left", d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0), "object-key-init")
      }) : d;
    },
    position: function () {
      if (this[0]) {
        var a,
          b,
          c = cc11001100_hook("c", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init"),
          d = cc11001100_hook("d", this[0], "var-init");
        return "fixed" === n.css(d, "position") ? b = cc11001100_hook("b", d.getBoundingClientRect(), "assign") : (a = cc11001100_hook("a", this.offsetParent(), "assign"), b = cc11001100_hook("b", this.offset(), "assign"), n.nodeName(a[0], "html") || (c = cc11001100_hook("c", a.offset(), "assign")), c.top += cc11001100_hook("c.top", n.css(a[0], "borderTopWidth", !0), "assign"), c.left += cc11001100_hook("c.left", n.css(a[0], "borderLeftWidth", !0), "assign")), {
          top: cc11001100_hook("top", b.top - c.top - n.css(d, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", b.left - c.left - n.css(d, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = cc11001100_hook("a", this.offsetParent, "var-init");
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = cc11001100_hook("a", a.offsetParent, "assign");
        return a || Pa;
      });
    }
  }), n.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (a, b) {
    var c = cc11001100_hook("c", /Y/.test(b), "var-init");
    n.fn[a] = cc11001100_hook("n.fn[a]", function (d) {
      return X(this, function (a, d, e) {
        var f = cc11001100_hook("f", lc(a), "var-init");
        if (void 0 === e) return f ? b in f ? f[b] : f.document.documentElement[d] : a[d];
        f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = cc11001100_hook("a[d]", e, "assign");
      }, a, d, arguments.length, null);
    }, "assign");
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = cc11001100_hook("n.cssHooks[b]", Ta(l.pixelPosition, function (a, c) {
      if (c) return c = cc11001100_hook("c", Ra(a, b), "assign"), Na.test(c) ? n(a).position()[b] + "px" : c;
    }), "assign");
  }), n.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (a, b) {
    n.each({
      padding: cc11001100_hook("padding", "inner" + a, "object-key-init"),
      content: cc11001100_hook("content", b, "object-key-init"),
      "": cc11001100_hook("", "outer" + a, "object-key-init")
    }, function (c, d) {
      n.fn[d] = cc11001100_hook("n.fn[d]", function (d, e) {
        var f = cc11001100_hook("f", arguments.length && (c || "boolean" != typeof d), "var-init"),
          g = cc11001100_hook("g", c || (!0 === d || !0 === e ? "margin" : "border"), "var-init");
        return X(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = cc11001100_hook("e", b.documentElement, "assign"), Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      }, "assign");
    });
  }), n.fn.extend({
    bind: function (a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function (a, b) {
      return this.off(a, null, b);
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  }), n.fn.size = cc11001100_hook("n.fn.size", function () {
    return this.length;
  }, "assign"), n.fn.andSelf = cc11001100_hook("n.fn.andSelf", n.fn.addBack, "assign"), "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });
  var mc = cc11001100_hook("mc", a.jQuery, "var-init"),
    nc = cc11001100_hook("nc", a.$, "var-init");
  return n.noConflict = cc11001100_hook("n.noConflict", function (b) {
    return a.$ === n && (a.$ = cc11001100_hook("a.$", nc, "assign")), b && a.jQuery === n && (a.jQuery = cc11001100_hook("a.jQuery", mc, "assign")), n;
  }, "assign"), b || (a.jQuery = cc11001100_hook("a.jQuery", a.$ = cc11001100_hook("a.$", n, "assign"), "assign")), n;
});
jQuery.noConflict();