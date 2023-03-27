/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
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
    m = cc11001100_hook("m", "2.2.0", "var-init"),
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
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
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
        c = cc11001100_hook("c", +a + (0 > a ? b : 0), "var-init");
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
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
    for ("boolean" == typeof g && (j = cc11001100_hook("j", g, "assign"), g = cc11001100_hook("g", arguments[h] || {}, "assign"), h++), "object" == typeof g || n.isFunction(g) || (g = cc11001100_hook("g", {}, "assign")), h === i && (g = cc11001100_hook("g", this, "assign"), h--); i > h; h++) if (null != (a = cc11001100_hook("a", arguments[h], "assign"))) for (b in a) c = cc11001100_hook("c", g[b], "assign"), d = cc11001100_hook("d", a[b], "assign"), g !== d && (j && d && (n.isPlainObject(d) || (e = cc11001100_hook("e", n.isArray(d), "assign"))) ? (e ? (e = cc11001100_hook("e", !1, "assign"), f = cc11001100_hook("f", c && n.isArray(c) ? c : [], "assign")) : f = cc11001100_hook("f", c && n.isPlainObject(c) ? c : {}, "assign"), g[b] = cc11001100_hook("g[b]", n.extend(j, f, d), "assign")) : void 0 !== d && (g[b] = cc11001100_hook("g[b]", d, "assign")));
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
    isArray: cc11001100_hook("isArray", Array.isArray, "object-key-init"),
    isWindow: function (a) {
      return null != a && a === a.window;
    },
    isNumeric: function (a) {
      var b = cc11001100_hook("b", a && a.toString(), "var-init");
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    },
    isPlainObject: function (a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) return !1;
      return !0;
    },
    type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
    },
    globalEval: function (a) {
      var b,
        c = cc11001100_hook("c", eval, "var-init");
      a = cc11001100_hook("a", n.trim(a), "assign"), a && (1 === a.indexOf("use strict") ? (b = cc11001100_hook("b", d.createElement("script"), "assign"), b.text = cc11001100_hook("b.text", a, "assign"), d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
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
        for (c = cc11001100_hook("c", a.length, "assign"); c > d; d++) if (b.call(a[d], d, a[d]) === !1) break;
      } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
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
      return null == b ? -1 : h.call(b, a, c);
    },
    merge: function (a, b) {
      for (var c = cc11001100_hook("c", +b.length, "var-init"), d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", a.length, "var-init"); c > d; d++) a[e++] = cc11001100_hook("a[e++]", b[d], "assign");
      return a.length = cc11001100_hook("a.length", e, "assign"), a;
    },
    grep: function (a, b, c) {
      for (var d, e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", a.length, "var-init"), h = cc11001100_hook("h", !c, "var-init"); g > f; f++) d = cc11001100_hook("d", !b(a[f], f), "assign"), d !== h && e.push(a[f]);
      return e;
    },
    map: function (a, b, c) {
      var d,
        e,
        g = cc11001100_hook("g", 0, "var-init"),
        h = cc11001100_hook("h", [], "var-init");
      if (s(a)) for (d = cc11001100_hook("d", a.length, "assign"); d > g; g++) e = cc11001100_hook("e", b(a[g], g, c), "assign"), null != e && h.push(e);else for (g in a) e = cc11001100_hook("e", b(a[g], g, c), "assign"), null != e && h.push(e);
      return f.apply([], h);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    proxy: function (a, b) {
      var c, d, f;
      return "string" == typeof b && (c = cc11001100_hook("c", a[b], "assign"), b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", c, "assign")), n.isFunction(a) ? (d = cc11001100_hook("d", e.call(arguments, 2), "assign"), f = cc11001100_hook("f", function () {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, "assign"), f.guid = cc11001100_hook("f.guid", a.guid = cc11001100_hook("a.guid", a.guid || n.guid++, "assign"), "assign"), f) : void 0;
    },
    now: cc11001100_hook("now", Date.now, "object-key-init"),
    support: cc11001100_hook("support", l, "object-key-init")
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = cc11001100_hook("n.fn[Symbol.iterator]", c[Symbol.iterator], "assign")), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = cc11001100_hook("i[\"[object \" + b + \"]\"]", b.toLowerCase(), "assign");
  });
  function s(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", !!a && "length" in a && a.length, "var-init"),
      c = cc11001100_hook("c", n.type(a), "var-init");
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
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
      y = cc11001100_hook("y", ga(), "var-init"),
      z = cc11001100_hook("z", ga(), "var-init"),
      A = cc11001100_hook("A", ga(), "var-init"),
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
        for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", a.length, "var-init"); d > c; c++) if (a[c] === b) return c;
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
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply(E = cc11001100_hook("E", I.call(v.childNodes), "assign"), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
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
    function fa(a, b, d, e) {
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
            while (h--) r[h] = cc11001100_hook("r[h]", l + " " + qa(r[h]), "assign");
            s = cc11001100_hook("s", r.join(","), "assign"), w = cc11001100_hook("w", _.test(a) && oa(b.parentNode) || b, "assign");
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
    function ga() {
      var a = cc11001100_hook("a", [], "var-init");
      function b(c, e) {
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = cc11001100_hook("b[c + \" \"]", e, "assign");
      }
      return b;
    }
    function ha(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a[u] = cc11001100_hook("a[u]", !0, "assign"), a;
    }
    function ia(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", n.createElement("div"), "var-init");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = cc11001100_hook("b", null, "assign");
      }
    }
    function ja(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", a.split("|"), "var-init"),
        e = cc11001100_hook("e", c.length, "var-init");
      while (e--) d.attrHandle[c[e]] = cc11001100_hook("d.attrHandle[c[e]]", b, "assign");
    }
    function ka(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", b && a, "var-init"),
        d = cc11001100_hook("d", c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C), "var-init");
      if (d) return d;
      if (c) while (c = cc11001100_hook("c", c.nextSibling, "assign")) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      cc11001100_hook("a", a, "function-parameter");
      return function (b) {
        var c = cc11001100_hook("c", b.nodeName.toLowerCase(), "var-init");
        return "input" === c && b.type === a;
      };
    }
    function ma(a) {
      cc11001100_hook("a", a, "function-parameter");
      return function (b) {
        var c = cc11001100_hook("c", b.nodeName.toLowerCase(), "var-init");
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function na(a) {
      cc11001100_hook("a", a, "function-parameter");
      return ha(function (b) {
        return b = cc11001100_hook("b", +b, "assign"), ha(function (c, d) {
          var e,
            f = cc11001100_hook("f", a([], c.length, b), "var-init"),
            g = cc11001100_hook("g", f.length, "var-init");
          while (g--) c[e = cc11001100_hook("e", f[g], "assign")] && (c[e] = cc11001100_hook("c[e]", !(d[e] = cc11001100_hook("d[e]", c[e], "assign")), "assign"));
        });
      });
    }
    function oa(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    c = cc11001100_hook("c", fa.support = cc11001100_hook("fa.support", {}, "assign"), "assign"), f = cc11001100_hook("f", fa.isXML = cc11001100_hook("fa.isXML", function (a) {
      var b = cc11001100_hook("b", a && (a.ownerDocument || a).documentElement, "var-init");
      return b ? "HTML" !== b.nodeName : !1;
    }, "assign"), "assign"), m = cc11001100_hook("m", fa.setDocument = cc11001100_hook("fa.setDocument", function (a) {
      var b,
        e,
        g = cc11001100_hook("g", a ? a.ownerDocument || a : v, "var-init");
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = cc11001100_hook("n", g, "assign"), o = cc11001100_hook("o", n.documentElement, "assign"), p = cc11001100_hook("p", !f(n), "assign"), (e = cc11001100_hook("e", n.defaultView, "assign")) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = cc11001100_hook("c.attributes", ia(function (a) {
        return a.className = cc11001100_hook("a.className", "i", "assign"), !a.getAttribute("className");
      }), "assign"), c.getElementsByTagName = cc11001100_hook("c.getElementsByTagName", ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), "assign"), c.getElementsByClassName = cc11001100_hook("c.getElementsByClassName", Z.test(n.getElementsByClassName), "assign"), c.getById = cc11001100_hook("c.getById", ia(function (a) {
        return o.appendChild(a).id = cc11001100_hook("o.appendChild(a).id", u, "assign"), !n.getElementsByName || !n.getElementsByName(u).length;
      }), "assign"), c.getById ? (d.find.ID = cc11001100_hook("d.find.ID", function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
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
          var c = cc11001100_hook("c", "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"), "var-init");
          return c && c.value === b;
        };
      }, "assign")), d.find.TAG = cc11001100_hook("d.find.TAG", c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
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
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, "assign"), r = cc11001100_hook("r", [], "assign"), q = cc11001100_hook("q", [], "assign"), (c.qsa = cc11001100_hook("c.qsa", Z.test(n.querySelectorAll), "assign")) && (ia(function (a) {
        o.appendChild(a).innerHTML = cc11001100_hook("o.appendChild(a).innerHTML", "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", "assign"), a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = cc11001100_hook("b", n.createElement("input"), "var-init");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = cc11001100_hook("c.matchesSelector", Z.test(s = cc11001100_hook("s", o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector, "assign")), "assign")) && ia(function (a) {
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
        return d ? d : (d = cc11001100_hook("d", (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, "assign"), 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = cc11001100_hook("l", !0, "assign"), 0;
        var c,
          d = cc11001100_hook("d", 0, "var-init"),
          e = cc11001100_hook("e", a.parentNode, "var-init"),
          f = cc11001100_hook("f", b.parentNode, "var-init"),
          g = cc11001100_hook("g", [a], "var-init"),
          h = cc11001100_hook("h", [b], "var-init");
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = cc11001100_hook("c", a, "assign");
        while (c = cc11001100_hook("c", c.parentNode, "assign")) g.unshift(c);
        c = cc11001100_hook("c", b, "assign");
        while (c = cc11001100_hook("c", c.parentNode, "assign")) h.unshift(c);
        while (g[d] === h[d]) d++;
        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, "assign"), n) : n;
    }, "assign"), "assign"), fa.matches = cc11001100_hook("fa.matches", function (a, b) {
      return fa(a, null, null, b);
    }, "assign"), fa.matchesSelector = cc11001100_hook("fa.matchesSelector", function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = cc11001100_hook("b", b.replace(T, "='$1']"), "assign"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = cc11001100_hook("d", s.call(a, b), "var-init");
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0;
    }, "assign"), fa.contains = cc11001100_hook("fa.contains", function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, "assign"), fa.attr = cc11001100_hook("fa.attr", function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = cc11001100_hook("e", d.attrHandle[b.toLowerCase()], "var-init"),
        f = cc11001100_hook("f", e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0, "var-init");
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = cc11001100_hook("f", a.getAttributeNode(b), "assign")) && f.specified ? f.value : null;
    }, "assign"), fa.error = cc11001100_hook("fa.error", function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, "assign"), fa.uniqueSort = cc11001100_hook("fa.uniqueSort", function (a) {
      var b,
        d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", 0, "var-init");
      if (l = cc11001100_hook("l", !c.detectDuplicates, "assign"), k = cc11001100_hook("k", !c.sortStable && a.slice(0), "assign"), a.sort(B), l) {
        while (b = cc11001100_hook("b", a[f++], "assign")) b === a[f] && (e = cc11001100_hook("e", d.push(f), "assign"));
        while (e--) a.splice(d[e], 1);
      }
      return k = cc11001100_hook("k", null, "assign"), a;
    }, "assign"), e = cc11001100_hook("e", fa.getText = cc11001100_hook("fa.getText", function (a) {
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
    }, "assign"), "assign"), d = cc11001100_hook("d", fa.selectors = cc11001100_hook("fa.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", ha, "object-key-init"),
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
          return a[1] = cc11001100_hook("a[1]", a[1].toLowerCase(), "assign"), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = cc11001100_hook("a[4]", +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), "assign"), a[5] = cc11001100_hook("a[5]", +(a[7] + a[8] || "odd" === a[3]), "assign")) : a[3] && fa.error(a[0]), a;
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
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = cc11001100_hook("e", fa.attr(d, a), "var-init");
            return null == e ? "!=" === b : b ? (e += cc11001100_hook("e", "", "assign"), "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
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
              } else if (s && (m = cc11001100_hook("m", b, "assign"), l = cc11001100_hook("l", m[u] || (m[u] = cc11001100_hook("m[u]", {}, "assign")), "assign"), k = cc11001100_hook("k", l[m.uniqueID] || (l[m.uniqueID] = cc11001100_hook("l[m.uniqueID]", {}, "assign")), "assign"), j = cc11001100_hook("j", k[a] || [], "assign"), n = cc11001100_hook("n", j[0] === w && j[1], "assign"), t = cc11001100_hook("t", n, "assign")), t === !1) while (m = cc11001100_hook("m", ++n && m && m[p] || (t = cc11001100_hook("t", n = cc11001100_hook("n", 0, "assign"), "assign")) || o.pop(), "assign")) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = cc11001100_hook("l", m[u] || (m[u] = cc11001100_hook("m[u]", {}, "assign")), "assign"), k = cc11001100_hook("k", l[m.uniqueID] || (l[m.uniqueID] = cc11001100_hook("l[m.uniqueID]", {}, "assign")), "assign"), k[a] = cc11001100_hook("k[a]", [w, t], "assign")), m === b)) break;
              return t -= cc11001100_hook("t", e, "assign"), t === d || t % d === 0 && t / d >= 0;
            }
          };
        },
        PSEUDO: function (a, b) {
          var c,
            e = cc11001100_hook("e", d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a), "var-init");
          return e[u] ? e(b) : e.length > 1 ? (c = cc11001100_hook("c", [a, a, "", b], "assign"), d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
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
        not: cc11001100_hook("not", ha(function (a) {
          var b = cc11001100_hook("b", [], "var-init"),
            c = cc11001100_hook("c", [], "var-init"),
            d = cc11001100_hook("d", h(a.replace(Q, "$1")), "var-init");
          return d[u] ? ha(function (a, b, c, e) {
            var f,
              g = cc11001100_hook("g", d(a, null, e, []), "var-init"),
              h = cc11001100_hook("h", a.length, "var-init");
            while (h--) (f = cc11001100_hook("f", g[h], "assign")) && (a[h] = cc11001100_hook("a[h]", !(b[h] = cc11001100_hook("b[h]", f, "assign")), "assign"));
          }) : function (a, e, f) {
            return b[0] = cc11001100_hook("b[0]", a, "assign"), d(b, null, f, c), b[0] = cc11001100_hook("b[0]", null, "assign"), !c.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", ha(function (a) {
          return a = cc11001100_hook("a", a.replace(ba, ca), "assign"), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = cc11001100_hook("a", a.replace(ba, ca).toLowerCase(), "assign"), function (b) {
            var c;
            do if (c = cc11001100_hook("c", p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"), "assign")) return c = cc11001100_hook("c", c.toLowerCase(), "assign"), c === a || 0 === c.indexOf(a + "-"); while ((b = cc11001100_hook("b", b.parentNode, "assign")) && 1 === b.nodeType);
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
          return a.disabled === !1;
        },
        disabled: function (a) {
          return a.disabled === !0;
        },
        checked: function (a) {
          var b = cc11001100_hook("b", a.nodeName.toLowerCase(), "var-init");
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
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
        first: cc11001100_hook("first", na(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", na(function (a, b) {
          return [b - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), "object-key-init"),
        even: cc11001100_hook("even", na(function (a, b) {
          for (var c = cc11001100_hook("c", 0, "var-init"); b > c; c += cc11001100_hook("c", 2, "assign")) a.push(c);
          return a;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", na(function (a, b) {
          for (var c = cc11001100_hook("c", 1, "var-init"); b > c; c += cc11001100_hook("c", 2, "assign")) a.push(c);
          return a;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", na(function (a, b, c) {
          for (var d = cc11001100_hook("d", 0 > c ? c + b : c, "var-init"); --d >= 0;) a.push(d);
          return a;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", na(function (a, b, c) {
          for (var d = cc11001100_hook("d", 0 > c ? c + b : c, "var-init"); ++d < b;) a.push(d);
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
    }) d.pseudos[b] = cc11001100_hook("d.pseudos[b]", la(b), "assign");
    for (b in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !0, "object-key-init")
    }) d.pseudos[b] = cc11001100_hook("d.pseudos[b]", ma(b), "assign");
    function pa() {}
    pa.prototype = cc11001100_hook("pa.prototype", d.filters = cc11001100_hook("d.filters", d.pseudos, "assign"), "assign"), d.setFilters = cc11001100_hook("d.setFilters", new pa(), "assign"), g = cc11001100_hook("g", fa.tokenize = cc11001100_hook("fa.tokenize", function (a, b) {
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
        (!c || (e = cc11001100_hook("e", R.exec(h), "assign"))) && (e && (h = cc11001100_hook("h", h.slice(e[0].length) || h, "assign")), i.push(f = cc11001100_hook("f", [], "assign"))), c = cc11001100_hook("c", !1, "assign"), (e = cc11001100_hook("e", S.exec(h), "assign")) && (c = cc11001100_hook("c", e.shift(), "assign"), f.push({
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
      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    }, "assign"), "assign");
    function qa(a) {
      cc11001100_hook("a", a, "function-parameter");
      for (var b = cc11001100_hook("b", 0, "var-init"), c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "", "var-init"); c > b; b++) d += cc11001100_hook("d", a[b].value, "assign");
      return d;
    }
    function ra(a, b, c) {
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
    function sa(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a.length > 1 ? function (b, c, d) {
        var e = cc11001100_hook("e", a.length, "var-init");
        while (e--) if (!a[e](b, c, d)) return !1;
        return !0;
      } : a[0];
    }
    function ta(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      for (var d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", b.length, "var-init"); e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      for (var f, g = cc11001100_hook("g", [], "var-init"), h = cc11001100_hook("h", 0, "var-init"), i = cc11001100_hook("i", a.length, "var-init"), j = cc11001100_hook("j", null != b, "var-init"); i > h; h++) (f = cc11001100_hook("f", a[h], "assign")) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function va(a, b, c, d, e, f) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      return d && !d[u] && (d = cc11001100_hook("d", va(d), "assign")), e && !e[u] && (e = cc11001100_hook("e", va(e, f), "assign")), ha(function (f, g, h, i) {
        var j,
          k,
          l,
          m = cc11001100_hook("m", [], "var-init"),
          n = cc11001100_hook("n", [], "var-init"),
          o = cc11001100_hook("o", g.length, "var-init"),
          p = cc11001100_hook("p", f || ta(b || "*", h.nodeType ? [h] : h, []), "var-init"),
          q = cc11001100_hook("q", !a || !f && b ? p : ua(p, m, a, h, i), "var-init"),
          r = cc11001100_hook("r", c ? e || (f ? a : o || d) ? [] : g : q, "var-init");
        if (c && c(q, r, h, i), d) {
          j = cc11001100_hook("j", ua(r, n), "assign"), d(j, [], h, i), k = cc11001100_hook("k", j.length, "assign");
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
        } else r = cc11001100_hook("r", ua(r === g ? r.splice(o, r.length) : r), "assign"), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }
    function wa(a) {
      cc11001100_hook("a", a, "function-parameter");
      for (var b, c, e, f = cc11001100_hook("f", a.length, "var-init"), g = cc11001100_hook("g", d.relative[a[0].type], "var-init"), h = cc11001100_hook("h", g || d.relative[" "], "var-init"), i = cc11001100_hook("i", g ? 1 : 0, "var-init"), k = cc11001100_hook("k", ra(function (a) {
          return a === b;
        }, h, !0), "var-init"), l = cc11001100_hook("l", ra(function (a) {
          return J(b, a) > -1;
        }, h, !0), "var-init"), m = cc11001100_hook("m", [function (a, c, d) {
          var e = cc11001100_hook("e", !g && (d || c !== j) || ((b = cc11001100_hook("b", c, "assign")).nodeType ? k(a, c, d) : l(a, c, d)), "var-init");
          return b = cc11001100_hook("b", null, "assign"), e;
        }], "var-init"); f > i; i++) if (c = cc11001100_hook("c", d.relative[a[i].type], "assign")) m = cc11001100_hook("m", [ra(sa(m), c)], "assign");else {
        if (c = cc11001100_hook("c", d.filter[a[i].type].apply(null, a[i].matches), "assign"), c[u]) {
          for (e = cc11001100_hook("e", ++i, "assign"); f > e; e++) if (d.relative[a[e].type]) break;
          return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
            value: cc11001100_hook("value", " " === a[i - 2].type ? "*" : "", "object-key-init")
          })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = cc11001100_hook("a", a.slice(e), "assign")), f > e && qa(a));
        }
        m.push(c);
      }
      return sa(m);
    }
    function xa(a, b) {
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
              u = cc11001100_hook("u", ua(u), "assign");
            }
            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && (w = cc11001100_hook("w", y, "assign"), j = cc11001100_hook("j", v, "assign")), t;
        };
      return c ? ha(f) : f;
    }
    return h = cc11001100_hook("h", fa.compile = cc11001100_hook("fa.compile", function (a, b) {
      var c,
        d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", [], "var-init"),
        f = cc11001100_hook("f", A[a + " "], "var-init");
      if (!f) {
        b || (b = cc11001100_hook("b", g(a), "assign")), c = cc11001100_hook("c", b.length, "assign");
        while (c--) f = cc11001100_hook("f", wa(b[c]), "assign"), f[u] ? d.push(f) : e.push(f);
        f = cc11001100_hook("f", A(a, xa(e, d)), "assign"), f.selector = cc11001100_hook("f.selector", a, "assign");
      }
      return f;
    }, "assign"), "assign"), i = cc11001100_hook("i", fa.select = cc11001100_hook("fa.select", function (a, b, e, f) {
      var i,
        j,
        k,
        l,
        m,
        n = cc11001100_hook("n", "function" == typeof a && a, "var-init"),
        o = cc11001100_hook("o", !f && g(a = cc11001100_hook("a", n.selector || a, "assign")), "var-init");
      if (e = cc11001100_hook("e", e || [], "assign"), 1 === o.length) {
        if (j = cc11001100_hook("j", o[0] = cc11001100_hook("o[0]", o[0].slice(0), "assign"), "assign"), j.length > 2 && "ID" === (k = cc11001100_hook("k", j[0], "assign")).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = cc11001100_hook("b", (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], "assign"), !b) return e;
          n && (b = cc11001100_hook("b", b.parentNode, "assign")), a = cc11001100_hook("a", a.slice(j.shift().value.length), "assign");
        }
        i = cc11001100_hook("i", W.needsContext.test(a) ? 0 : j.length, "assign");
        while (i--) {
          if (k = cc11001100_hook("k", j[i], "assign"), d.relative[l = cc11001100_hook("l", k.type, "assign")]) break;
          if ((m = cc11001100_hook("m", d.find[l], "assign")) && (f = cc11001100_hook("f", m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b), "assign"))) {
            if (j.splice(i, 1), a = cc11001100_hook("a", f.length && qa(j), "assign"), !a) return H.apply(e, f), e;
            break;
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, "assign"), "assign"), c.sortStable = cc11001100_hook("c.sortStable", u.split("").sort(B).join("") === u, "assign"), c.detectDuplicates = cc11001100_hook("c.detectDuplicates", !!l, "assign"), m(), c.sortDetached = cc11001100_hook("c.sortDetached", ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), "assign"), ia(function (a) {
      return a.innerHTML = cc11001100_hook("a.innerHTML", "<a href='#'></a>", "assign"), "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = cc11001100_hook("a.innerHTML", "<input/>", "assign"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = cc11001100_hook("d", a.getAttributeNode(b), "assign")) && d.specified ? d.value : null;
    }), fa;
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
      return h.call(b, a) > -1 !== c;
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
        c = cc11001100_hook("c", this.length, "var-init"),
        d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", this, "var-init");
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = cc11001100_hook("b", 0, "assign"); c > b; b++) if (n.contains(e[b], this)) return !0;
      }));
      for (b = cc11001100_hook("b", 0, "assign"); c > b; b++) n.find(a, e[b], d);
      return d = cc11001100_hook("d", this.pushStack(c > 1 ? n.unique(d) : d), "assign"), d.selector = cc11001100_hook("d.selector", this.selector ? this.selector + " " + a : a, "assign"), d;
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
    B = cc11001100_hook("B", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, "var-init"),
    C = cc11001100_hook("C", n.fn.init = cc11001100_hook("n.fn.init", function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = cc11001100_hook("c", c || A, "assign"), "string" == typeof a) {
        if (e = cc11001100_hook("e", "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), "assign"), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = cc11001100_hook("b", b instanceof n ? b[0] : b, "assign"), n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return f = cc11001100_hook("f", d.getElementById(e[2]), "assign"), f && f.parentNode && (this.length = cc11001100_hook("this.length", 1, "assign"), this[0] = cc11001100_hook("this[0]", f, "assign")), this.context = cc11001100_hook("this.context", d, "assign"), this.selector = cc11001100_hook("this.selector", a, "assign"), this;
      }
      return a.nodeType ? (this.context = cc11001100_hook("this.context", this[0] = cc11001100_hook("this[0]", a, "assign"), "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = cc11001100_hook("this.selector", a.selector, "assign"), this.context = cc11001100_hook("this.context", a.context, "assign")), n.makeArray(a, this));
    }, "assign"), "var-init");
  C.prototype = cc11001100_hook("C.prototype", n.fn, "assign"), A = cc11001100_hook("A", n(d), "assign");
  var D = cc11001100_hook("D", /^(?:parents|prev(?:Until|All))/, "var-init"),
    E = cc11001100_hook("E", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  n.fn.extend({
    has: function (a) {
      var b = cc11001100_hook("b", n(a, this), "var-init"),
        c = cc11001100_hook("c", b.length, "var-init");
      return this.filter(function () {
        for (var a = cc11001100_hook("a", 0, "var-init"); c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      for (var c, d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", this.length, "var-init"), f = cc11001100_hook("f", [], "var-init"), g = cc11001100_hook("g", w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0, "var-init"); e > d; d++) for (c = cc11001100_hook("c", this[d], "assign"); c && c !== b; c = cc11001100_hook("c", c.parentNode, "assign")) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
        f.push(c);
        break;
      }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });
  function F(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    while ((a = cc11001100_hook("a", a[b], "assign")) && 1 !== a.nodeType);
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
      return F(a, "nextSibling");
    },
    prev: function (a) {
      return F(a, "previousSibling");
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
      return a.contentDocument || n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = cc11001100_hook("n.fn[a]", function (c, d) {
      var e = cc11001100_hook("e", n.map(this, b, c), "var-init");
      return "Until" !== a.slice(-5) && (d = cc11001100_hook("d", c, "assign")), d && "string" == typeof d && (e = cc11001100_hook("e", n.filter(d, e), "assign")), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    }, "assign");
  });
  var G = cc11001100_hook("G", /\S+/g, "var-init");
  function H(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", {}, "var-init");
    return n.each(a.match(G) || [], function (a, c) {
      b[c] = cc11001100_hook("b[c]", !0, "assign");
    }), b;
  }
  n.Callbacks = cc11001100_hook("n.Callbacks", function (a) {
    a = cc11001100_hook("a", "string" == typeof a ? H(a) : n.extend({}, a), "assign");
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
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = cc11001100_hook("h", f.length, "assign"), c = cc11001100_hook("c", !1, "assign"));
        }
        a.memory || (c = cc11001100_hook("c", !1, "assign")), b = cc11001100_hook("b", !1, "assign"), e && (f = cc11001100_hook("f", c ? [] : "", "assign"));
      },
      j = cc11001100_hook("j", {
        add: function () {
          return f && (c && !b && (h = cc11001100_hook("h", f.length - 1, "assign"), g.push(c)), function d(b) {
            n.each(b, function (b, c) {
              n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
            });
          }(arguments), c && !b && i()), this;
        },
        remove: function () {
          return n.each(arguments, function (a, b) {
            var c;
            while ((c = cc11001100_hook("c", n.inArray(b, f, c), "assign")) > -1) f.splice(c, 1), h >= c && h--;
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
          return e = cc11001100_hook("e", g = cc11001100_hook("g", [], "assign"), "assign"), c || (f = cc11001100_hook("f", c = cc11001100_hook("c", "", "assign"), "assign")), this;
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
      if (d > 1) for (i = cc11001100_hook("i", new Array(d), "assign"), j = cc11001100_hook("j", new Array(d), "assign"), k = cc11001100_hook("k", new Array(d), "assign"); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var I;
  n.fn.ready = cc11001100_hook("n.fn.ready", function (a) {
    return n.ready.promise().done(a), this;
  }, "assign"), n.extend({
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = cc11001100_hook("n.isReady", !0, "assign"), a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    }
  });
  function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }
  n.ready.promise = cc11001100_hook("n.ready.promise", function (b) {
    return I || (I = cc11001100_hook("I", n.Deferred(), "assign"), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, "assign"), n.ready.promise();
  var K = function (a, b, c, d, e, f, g) {
      var h = cc11001100_hook("h", 0, "var-init"),
        i = cc11001100_hook("i", a.length, "var-init"),
        j = cc11001100_hook("j", null == c, "var-init");
      if ("object" === n.type(c)) {
        e = cc11001100_hook("e", !0, "assign");
        for (h in c) K(a, b, h, c[h], !0, f, g);
      } else if (void 0 !== d && (e = cc11001100_hook("e", !0, "assign"), n.isFunction(d) || (g = cc11001100_hook("g", !0, "assign")), j && (g ? (b.call(a, d), b = cc11001100_hook("b", null, "assign")) : (j = cc11001100_hook("j", b, "assign"), b = cc11001100_hook("b", function (a, b, c) {
        return j.call(n(a), c);
      }, "assign"))), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    L = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function M() {
    this.expando = cc11001100_hook("this.expando", n.expando + M.uid++, "assign");
  }
  M.uid = cc11001100_hook("M.uid", 1, "assign"), M.prototype = cc11001100_hook("M.prototype", {
    register: function (a, b) {
      var c = cc11001100_hook("c", b || {}, "var-init");
      return a.nodeType ? a[this.expando] = cc11001100_hook("a[this.expando]", c, "assign") : Object.defineProperty(a, this.expando, {
        value: cc11001100_hook("value", c, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      }), a[this.expando];
    },
    cache: function (a) {
      if (!L(a)) return {};
      var b = cc11001100_hook("b", a[this.expando], "var-init");
      return b || (b = cc11001100_hook("b", {}, "assign"), L(a) && (a.nodeType ? a[this.expando] = cc11001100_hook("a[this.expando]", b, "assign") : Object.defineProperty(a, this.expando, {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      }))), b;
    },
    set: function (a, b, c) {
      var d,
        e = cc11001100_hook("e", this.cache(a), "var-init");
      if ("string" == typeof b) e[b] = cc11001100_hook("e[b]", c, "assign");else for (d in b) e[d] = cc11001100_hook("e[d]", b[d], "assign");
      return e;
    },
    get: function (a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    },
    access: function (a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = cc11001100_hook("d", this.get(a, b), "assign"), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function (a, b) {
      var c,
        d,
        e,
        f = cc11001100_hook("f", a[this.expando], "var-init");
      if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = cc11001100_hook("d", b.concat(b.map(n.camelCase)), "assign") : (e = cc11001100_hook("e", n.camelCase(b), "assign"), b in f ? d = cc11001100_hook("d", [b, e], "assign") : (d = cc11001100_hook("d", e, "assign"), d = cc11001100_hook("d", d in f ? [d] : d.match(G) || [], "assign"))), c = cc11001100_hook("c", d.length, "assign");
          while (c--) delete f[d[c]];
        }
        (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = cc11001100_hook("a[this.expando]", void 0, "assign") : delete a[this.expando]);
      }
    },
    hasData: function (a) {
      var b = cc11001100_hook("b", a[this.expando], "var-init");
      return void 0 !== b && !n.isEmptyObject(b);
    }
  }, "assign");
  var N = cc11001100_hook("N", new M(), "var-init"),
    O = cc11001100_hook("O", new M(), "var-init"),
    P = cc11001100_hook("P", /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, "var-init"),
    Q = cc11001100_hook("Q", /[A-Z]/g, "var-init");
  function R(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d;
    if (void 0 === c && 1 === a.nodeType) if (d = cc11001100_hook("d", "data-" + b.replace(Q, "-$&").toLowerCase(), "assign"), c = cc11001100_hook("c", a.getAttribute(d), "assign"), "string" == typeof c) {
      try {
        c = cc11001100_hook("c", "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c, "assign");
      } catch (e) {}
      O.set(a, b, c);
    } else c = cc11001100_hook("c", void 0, "assign");
    return c;
  }
  n.extend({
    hasData: function (a) {
      return O.hasData(a) || N.hasData(a);
    },
    data: function (a, b, c) {
      return O.access(a, b, c);
    },
    removeData: function (a, b) {
      O.remove(a, b);
    },
    _data: function (a, b, c) {
      return N.access(a, b, c);
    },
    _removeData: function (a, b) {
      N.remove(a, b);
    }
  }), n.fn.extend({
    data: function (a, b) {
      var c,
        d,
        e,
        f = cc11001100_hook("f", this[0], "var-init"),
        g = cc11001100_hook("g", f && f.attributes, "var-init");
      if (void 0 === a) {
        if (this.length && (e = cc11001100_hook("e", O.get(f), "assign"), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = cc11001100_hook("c", g.length, "assign");
          while (c--) g[c] && (d = cc11001100_hook("d", g[c].name, "assign"), 0 === d.indexOf("data-") && (d = cc11001100_hook("d", n.camelCase(d.slice(5)), "assign"), R(f, d, e[d])));
          N.set(f, "hasDataAttrs", !0);
        }
        return e;
      }
      return "object" == typeof a ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;
        if (f && void 0 === b) {
          if (c = cc11001100_hook("c", O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), "assign"), void 0 !== c) return c;
          if (d = cc11001100_hook("d", n.camelCase(a), "assign"), c = cc11001100_hook("c", O.get(f, d), "assign"), void 0 !== c) return c;
          if (c = cc11001100_hook("c", R(f, d, void 0), "assign"), void 0 !== c) return c;
        } else d = cc11001100_hook("d", n.camelCase(a), "assign"), this.each(function () {
          var c = cc11001100_hook("c", O.get(this, d), "var-init");
          O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function (a) {
      return this.each(function () {
        O.remove(this, a);
      });
    }
  }), n.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = cc11001100_hook("b", (b || "fx") + "queue", "assign"), d = cc11001100_hook("d", N.get(a, b), "assign"), c && (!d || n.isArray(c) ? d = cc11001100_hook("d", N.access(a, b, n.makeArray(c)), "assign") : d.push(c)), d || []) : void 0;
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
      return N.get(a, c) || N.access(a, c, {
        empty: cc11001100_hook("empty", n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
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
      while (g--) c = cc11001100_hook("c", N.get(f[g], a + "queueHooks"), "assign"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b);
    }
  });
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
      do f = cc11001100_hook("f", f || ".5", "assign"), k /= cc11001100_hook("k", f, "assign"), n.style(a, b, k + j); while (f !== (f = cc11001100_hook("f", h() / i, "assign")) && 1 !== f && --g);
    }
    return c && (k = cc11001100_hook("k", +k || +i || 0, "assign"), e = cc11001100_hook("e", c[1] ? k + (c[1] + 1) * c[2] : +c[2], "assign"), d && (d.unit = cc11001100_hook("d.unit", j, "assign"), d.start = cc11001100_hook("d.start", k, "assign"), d.end = cc11001100_hook("d.end", e, "assign"))), e;
  }
  var X = cc11001100_hook("X", /^(?:checkbox|radio)$/i, "var-init"),
    Y = cc11001100_hook("Y", /<([\w:-]+)/, "var-init"),
    Z = cc11001100_hook("Z", /^$|\/(?:java|ecma)script/i, "var-init"),
    $ = cc11001100_hook("$", {
      option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
      thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
      col: cc11001100_hook("col", [2, "<table><colgroup>", "</colgroup></table>"], "object-key-init"),
      tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
      td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
      _default: cc11001100_hook("_default", [0, "", ""], "object-key-init")
    }, "var-init");
  $.optgroup = cc11001100_hook("$.optgroup", $.option, "assign"), $.tbody = cc11001100_hook("$.tbody", $.tfoot = cc11001100_hook("$.tfoot", $.colgroup = cc11001100_hook("$.colgroup", $.caption = cc11001100_hook("$.caption", $.thead, "assign"), "assign"), "assign"), "assign"), $.th = cc11001100_hook("$.th", $.td, "assign");
  function _(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], "var-init");
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }
  function aa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", a.length, "var-init"); d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
  }
  var ba = cc11001100_hook("ba", /<|&#?\w+;/, "var-init");
  function ca(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var f, g, h, i, j, k, l = cc11001100_hook("l", b.createDocumentFragment(), "var-init"), m = cc11001100_hook("m", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"), p = cc11001100_hook("p", a.length, "var-init"); p > o; o++) if (f = cc11001100_hook("f", a[o], "assign"), f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
      g = cc11001100_hook("g", g || l.appendChild(b.createElement("div")), "assign"), h = cc11001100_hook("h", (Y.exec(f) || ["", ""])[1].toLowerCase(), "assign"), i = cc11001100_hook("i", $[h] || $._default, "assign"), g.innerHTML = cc11001100_hook("g.innerHTML", i[1] + n.htmlPrefilter(f) + i[2], "assign"), k = cc11001100_hook("k", i[0], "assign");
      while (k--) g = cc11001100_hook("g", g.lastChild, "assign");
      n.merge(m, g.childNodes), g = cc11001100_hook("g", l.firstChild, "assign"), g.textContent = cc11001100_hook("g.textContent", "", "assign");
    } else m.push(b.createTextNode(f));
    l.textContent = cc11001100_hook("l.textContent", "", "assign"), o = cc11001100_hook("o", 0, "assign");
    while (f = cc11001100_hook("f", m[o++], "assign")) if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = cc11001100_hook("j", n.contains(f.ownerDocument, f), "assign"), g = cc11001100_hook("g", _(l.appendChild(f), "script"), "assign"), j && aa(g), c) {
      k = cc11001100_hook("k", 0, "assign");
      while (f = cc11001100_hook("f", g[k++], "assign")) Z.test(f.type || "") && c.push(f);
    }
    return l;
  }
  !function () {
    var a = cc11001100_hook("a", d.createDocumentFragment(), "var-init"),
      b = cc11001100_hook("b", a.appendChild(d.createElement("div")), "var-init"),
      c = cc11001100_hook("c", d.createElement("input"), "var-init");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = cc11001100_hook("l.checkClone", b.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), b.innerHTML = cc11001100_hook("b.innerHTML", "<textarea>x</textarea>", "assign"), l.noCloneChecked = cc11001100_hook("l.noCloneChecked", !!b.cloneNode(!0).lastChild.defaultValue, "assign");
  }();
  var da = cc11001100_hook("da", /^key/, "var-init"),
    ea = cc11001100_hook("ea", /^(?:mouse|pointer|contextmenu|drag|drop)|click/, "var-init"),
    fa = cc11001100_hook("fa", /^([^.]*)(?:\.(.+)|)/, "var-init");
  function ga() {
    return !0;
  }
  function ha() {
    return !1;
  }
  function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ja(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = cc11001100_hook("d", d || c, "assign"), c = cc11001100_hook("c", void 0, "assign"));
      for (h in b) ja(a, h, c, d, b[h], f);
      return a;
    }
    if (null == d && null == e ? (e = cc11001100_hook("e", c, "assign"), d = cc11001100_hook("d", c = cc11001100_hook("c", void 0, "assign"), "assign")) : null == e && ("string" == typeof c ? (e = cc11001100_hook("e", d, "assign"), d = cc11001100_hook("d", void 0, "assign")) : (e = cc11001100_hook("e", d, "assign"), d = cc11001100_hook("d", c, "assign"), c = cc11001100_hook("c", void 0, "assign"))), e === !1) e = cc11001100_hook("e", ha, "assign");else if (!e) return this;
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
        r = cc11001100_hook("r", N.get(a), "var-init");
      if (r) {
        c.handler && (f = cc11001100_hook("f", c, "assign"), c = cc11001100_hook("c", f.handler, "assign"), e = cc11001100_hook("e", f.selector, "assign")), c.guid || (c.guid = cc11001100_hook("c.guid", n.guid++, "assign")), (i = cc11001100_hook("i", r.events, "assign")) || (i = cc11001100_hook("i", r.events = cc11001100_hook("r.events", {}, "assign"), "assign")), (g = cc11001100_hook("g", r.handle, "assign")) || (g = cc11001100_hook("g", r.handle = cc11001100_hook("r.handle", function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }, "assign"), "assign")), b = cc11001100_hook("b", (b || "").match(G) || [""], "assign"), j = cc11001100_hook("j", b.length, "assign");
        while (j--) h = cc11001100_hook("h", fa.exec(b[j]) || [], "assign"), o = cc11001100_hook("o", q = cc11001100_hook("q", h[1], "assign"), "assign"), p = cc11001100_hook("p", (h[2] || "").split(".").sort(), "assign"), o && (l = cc11001100_hook("l", n.event.special[o] || {}, "assign"), o = cc11001100_hook("o", (e ? l.delegateType : l.bindType) || o, "assign"), l = cc11001100_hook("l", n.event.special[o] || {}, "assign"), k = cc11001100_hook("k", n.extend({
          type: cc11001100_hook("type", o, "object-key-init"),
          origType: cc11001100_hook("origType", q, "object-key-init"),
          data: cc11001100_hook("data", d, "object-key-init"),
          handler: cc11001100_hook("handler", c, "object-key-init"),
          guid: cc11001100_hook("guid", c.guid, "object-key-init"),
          selector: cc11001100_hook("selector", e, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", e && n.expr.match.needsContext.test(e), "object-key-init"),
          namespace: cc11001100_hook("namespace", p.join("."), "object-key-init")
        }, f), "assign"), (m = cc11001100_hook("m", i[o], "assign")) || (m = cc11001100_hook("m", i[o] = cc11001100_hook("i[o]", [], "assign"), "assign"), m.delegateCount = cc11001100_hook("m.delegateCount", 0, "assign"), l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = cc11001100_hook("k.handler.guid", c.guid, "assign"))), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = cc11001100_hook("n.event.global[o]", !0, "assign"));
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
        r = cc11001100_hook("r", N.hasData(a) && N.get(a), "var-init");
      if (r && (i = cc11001100_hook("i", r.events, "assign"))) {
        b = cc11001100_hook("b", (b || "").match(G) || [""], "assign"), j = cc11001100_hook("j", b.length, "assign");
        while (j--) if (h = cc11001100_hook("h", fa.exec(b[j]) || [], "assign"), o = cc11001100_hook("o", q = cc11001100_hook("q", h[1], "assign"), "assign"), p = cc11001100_hook("p", (h[2] || "").split(".").sort(), "assign"), o) {
          l = cc11001100_hook("l", n.event.special[o] || {}, "assign"), o = cc11001100_hook("o", (d ? l.delegateType : l.bindType) || o, "assign"), m = cc11001100_hook("m", i[o] || [], "assign"), h = cc11001100_hook("h", h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), g = cc11001100_hook("g", f = cc11001100_hook("f", m.length, "assign"), "assign");
          while (f--) k = cc11001100_hook("k", m[f], "assign"), !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
          g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
        } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && N.remove(a, "handle events");
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
        j = cc11001100_hook("j", (N.get(this, "events") || {})[a.type] || [], "var-init"),
        k = cc11001100_hook("k", n.event.special[a.type] || {}, "var-init");
      if (i[0] = cc11001100_hook("i[0]", a, "assign"), a.delegateTarget = cc11001100_hook("a.delegateTarget", this, "assign"), !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = cc11001100_hook("h", n.event.handlers.call(this, a, j), "assign"), b = cc11001100_hook("b", 0, "assign");
        while ((f = cc11001100_hook("f", h[b++], "assign")) && !a.isPropagationStopped()) {
          a.currentTarget = cc11001100_hook("a.currentTarget", f.elem, "assign"), c = cc11001100_hook("c", 0, "assign");
          while ((g = cc11001100_hook("g", f.handlers[c++], "assign")) && !a.isImmediatePropagationStopped()) (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = cc11001100_hook("a.handleObj", g, "assign"), a.data = cc11001100_hook("a.data", g.data, "assign"), d = cc11001100_hook("d", ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), "assign"), void 0 !== d && (a.result = cc11001100_hook("a.result", d, "assign")) === !1 && (a.preventDefault(), a.stopPropagation()));
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
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = cc11001100_hook("i", i.parentNode || this, "assign")) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
        for (d = cc11001100_hook("d", [], "assign"), c = cc11001100_hook("c", 0, "assign"); h > c; c++) f = cc11001100_hook("f", b[c], "assign"), e = cc11001100_hook("e", f.selector + " ", "assign"), void 0 === d[e] && (d[e] = cc11001100_hook("d[e]", f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length, "assign")), d[e] && d.push(f);
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
    props: cc11001100_hook("props", "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), "object-key-init"),
    fixHooks: {},
    keyHooks: {
      props: cc11001100_hook("props", "char charCode key keyCode".split(" "), "object-key-init"),
      filter: function (a, b) {
        return null == a.which && (a.which = cc11001100_hook("a.which", null != b.charCode ? b.charCode : b.keyCode, "assign")), a;
      }
    },
    mouseHooks: {
      props: cc11001100_hook("props", "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), "object-key-init"),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = cc11001100_hook("g", b.button, "var-init");
        return null == a.pageX && null != b.clientX && (c = cc11001100_hook("c", a.target.ownerDocument || d, "assign"), e = cc11001100_hook("e", c.documentElement, "assign"), f = cc11001100_hook("f", c.body, "assign"), a.pageX = cc11001100_hook("a.pageX", b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), "assign"), a.pageY = cc11001100_hook("a.pageY", b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0), "assign")), a.which || void 0 === g || (a.which = cc11001100_hook("a.which", 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0, "assign")), a;
      }
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = cc11001100_hook("f", a.type, "var-init"),
        g = cc11001100_hook("g", a, "var-init"),
        h = cc11001100_hook("h", this.fixHooks[f], "var-init");
      h || (this.fixHooks[f] = cc11001100_hook("this.fixHooks[f]", h = cc11001100_hook("h", ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}, "assign"), "assign")), e = cc11001100_hook("e", h.props ? this.props.concat(h.props) : this.props, "assign"), a = cc11001100_hook("a", new n.Event(g), "assign"), b = cc11001100_hook("b", e.length, "assign");
      while (b--) c = cc11001100_hook("c", e[b], "assign"), a[c] = cc11001100_hook("a[c]", g[c], "assign");
      return a.target || (a.target = cc11001100_hook("a.target", d, "assign")), 3 === a.target.nodeType && (a.target = cc11001100_hook("a.target", a.target.parentNode, "assign")), h.filter ? h.filter(a, g) : a;
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      focus: {
        trigger: function () {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
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
    }
  }, "assign"), n.removeEvent = cc11001100_hook("n.removeEvent", function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, "assign"), n.Event = cc11001100_hook("n.Event", function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", a, "assign"), this.type = cc11001100_hook("this.type", a.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha, "assign")) : this.type = cc11001100_hook("this.type", a, "assign"), b && n.extend(this, b), this.timeStamp = cc11001100_hook("this.timeStamp", a && a.timeStamp || n.now(), "assign"), void (this[n.expando] = cc11001100_hook("this[n.expando]", !0, "assign"))) : new n.Event(a, b);
  }, "assign"), n.Event.prototype = cc11001100_hook("n.Event.prototype", {
    constructor: cc11001100_hook("constructor", n.Event, "object-key-init"),
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", ha, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", ha, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", ha, "object-key-init"),
    preventDefault: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", ga, "assign"), a && a.preventDefault();
    },
    stopPropagation: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", ga, "assign"), a && a.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", ga, "assign"), a && a.stopImmediatePropagation(), this.stopPropagation();
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
        return (!e || e !== d && !n.contains(d, e)) && (a.type = cc11001100_hook("a.type", f.origType, "assign"), c = cc11001100_hook("c", f.handler.apply(this, arguments), "assign"), a.type = cc11001100_hook("a.type", b, "assign")), c;
      }
    }, "assign");
  }), n.fn.extend({
    on: function (a, b, c, d) {
      return ja(this, a, b, c, d);
    },
    one: function (a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = cc11001100_hook("d", a.handleObj, "assign"), n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this;
      }
      return (b === !1 || "function" == typeof b) && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign")), c === !1 && (c = cc11001100_hook("c", ha, "assign")), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    }
  });
  var ka = cc11001100_hook("ka", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "var-init"),
    la = cc11001100_hook("la", /<script|<style|<link/i, "var-init"),
    ma = cc11001100_hook("ma", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    na = cc11001100_hook("na", /^true\/(.*)/, "var-init"),
    oa = cc11001100_hook("oa", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init");
  function pa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
  }
  function qa(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.type = cc11001100_hook("a.type", (null !== a.getAttribute("type")) + "/" + a.type, "assign"), a;
  }
  function ra(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", na.exec(a.type), "var-init");
    return b ? a.type = cc11001100_hook("a.type", b[1], "assign") : a.removeAttribute("type"), a;
  }
  function sa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (N.hasData(a) && (f = cc11001100_hook("f", N.access(a), "assign"), g = cc11001100_hook("g", N.set(b, f), "assign"), j = cc11001100_hook("j", f.events, "assign"))) {
        delete g.handle, g.events = cc11001100_hook("g.events", {}, "assign");
        for (e in j) for (c = cc11001100_hook("c", 0, "assign"), d = cc11001100_hook("d", j[e].length, "assign"); d > c; c++) n.event.add(b, e, j[e][c]);
      }
      O.hasData(a) && (h = cc11001100_hook("h", O.access(a), "assign"), i = cc11001100_hook("i", n.extend({}, h), "assign"), O.set(b, i));
    }
  }
  function ta(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.nodeName.toLowerCase(), "var-init");
    "input" === c && X.test(a.type) ? b.checked = cc11001100_hook("b.checked", a.checked, "assign") : ("input" === c || "textarea" === c) && (b.defaultValue = cc11001100_hook("b.defaultValue", a.defaultValue, "assign"));
  }
  function ua(a, b, c, d) {
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
    if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = cc11001100_hook("f", a.eq(e), "var-init");
      r && (b[0] = cc11001100_hook("b[0]", q.call(this, e, f.html()), "assign")), ua(f, b, c, d);
    });
    if (o && (e = cc11001100_hook("e", ca(b, a[0].ownerDocument, !1, a, d), "assign"), g = cc11001100_hook("g", e.firstChild, "assign"), 1 === e.childNodes.length && (e = cc11001100_hook("e", g, "assign")), g || d)) {
      for (h = cc11001100_hook("h", n.map(_(e, "script"), qa), "assign"), i = cc11001100_hook("i", h.length, "assign"); o > m; m++) j = cc11001100_hook("j", e, "assign"), m !== p && (j = cc11001100_hook("j", n.clone(j, !0, !0), "assign"), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      if (i) for (k = cc11001100_hook("k", h[h.length - 1].ownerDocument, "assign"), n.map(h, ra), m = cc11001100_hook("m", 0, "assign"); i > m; m++) j = cc11001100_hook("j", h[m], "assign"), Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
    }
    return a;
  }
  function va(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var d, e = cc11001100_hook("e", b ? n.filter(b, a) : a, "var-init"), f = cc11001100_hook("f", 0, "var-init"); null != (d = cc11001100_hook("d", e[f], "assign")); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(ka, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = cc11001100_hook("h", a.cloneNode(!0), "var-init"),
        i = cc11001100_hook("i", n.contains(a.ownerDocument, a), "var-init");
      if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = cc11001100_hook("g", _(h), "assign"), f = cc11001100_hook("f", _(a), "assign"), d = cc11001100_hook("d", 0, "assign"), e = cc11001100_hook("e", f.length, "assign"); e > d; d++) ta(f[d], g[d]);
      if (b) if (c) for (f = cc11001100_hook("f", f || _(a), "assign"), g = cc11001100_hook("g", g || _(h), "assign"), d = cc11001100_hook("d", 0, "assign"), e = cc11001100_hook("e", f.length, "assign"); e > d; d++) sa(f[d], g[d]);else sa(a, h);
      return g = cc11001100_hook("g", _(h, "script"), "assign"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    },
    cleanData: function (a) {
      for (var b, c, d, e = cc11001100_hook("e", n.event.special, "var-init"), f = cc11001100_hook("f", 0, "var-init"); void 0 !== (c = cc11001100_hook("c", a[f], "assign")); f++) if (L(c)) {
        if (b = cc11001100_hook("b", c[N.expando], "assign")) {
          if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          c[N.expando] = cc11001100_hook("c[N.expando]", void 0, "assign");
        }
        c[O.expando] && (c[O.expando] = cc11001100_hook("c[O.expando]", void 0, "assign"));
      }
    }
  }), n.fn.extend({
    domManip: cc11001100_hook("domManip", ua, "object-key-init"),
    detach: function (a) {
      return va(this, a, !0);
    },
    remove: function (a) {
      return va(this, a);
    },
    text: function (a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = cc11001100_hook("this.textContent", a, "assign"));
        });
      }, null, a, arguments.length);
    },
    append: function () {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = cc11001100_hook("b", pa(this, a), "var-init");
          b.appendChild(a);
        }
      });
    },
    prepend: function () {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = cc11001100_hook("b", pa(this, a), "var-init");
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function () {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function () {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function () {
      for (var a, b = cc11001100_hook("b", 0, "var-init"); null != (a = cc11001100_hook("a", this[b], "assign")); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = cc11001100_hook("a.textContent", "", "assign"));
      return this;
    },
    clone: function (a, b) {
      return a = cc11001100_hook("a", null == a ? !1 : a, "assign"), b = cc11001100_hook("b", null == b ? a : b, "assign"), this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function (a) {
      return K(this, function (a) {
        var b = cc11001100_hook("b", this[0] || {}, "var-init"),
          c = cc11001100_hook("c", 0, "var-init"),
          d = cc11001100_hook("d", this.length, "var-init");
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = cc11001100_hook("a", n.htmlPrefilter(a), "assign");
          try {
            for (; d > c; c++) b = cc11001100_hook("b", this[c] || {}, "assign"), 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = cc11001100_hook("b.innerHTML", a, "assign"));
            b = cc11001100_hook("b", 0, "assign");
          } catch (e) {}
        }
        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function () {
      var a = cc11001100_hook("a", [], "var-init");
      return ua(this, arguments, function (b) {
        var c = cc11001100_hook("c", this.parentNode, "var-init");
        n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
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
      for (var c, d = cc11001100_hook("d", [], "var-init"), e = cc11001100_hook("e", n(a), "var-init"), f = cc11001100_hook("f", e.length - 1, "var-init"), h = cc11001100_hook("h", 0, "var-init"); f >= h; h++) c = cc11001100_hook("c", h === f ? this : this.clone(!0), "assign"), n(e[h])[b](c), g.apply(d, c.get());
      return this.pushStack(d);
    }, "assign");
  });
  var wa,
    xa = cc11001100_hook("xa", {
      HTML: cc11001100_hook("HTML", "block", "object-key-init"),
      BODY: cc11001100_hook("BODY", "block", "object-key-init")
    }, "var-init");
  function ya(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", n(b.createElement(a)).appendTo(b.body), "var-init"),
      d = cc11001100_hook("d", n.css(c[0], "display"), "var-init");
    return c.detach(), d;
  }
  function za(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", d, "var-init"),
      c = cc11001100_hook("c", xa[a], "var-init");
    return c || (c = cc11001100_hook("c", ya(a, b), "assign"), "none" !== c && c || (wa = cc11001100_hook("wa", (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), "assign"), b = cc11001100_hook("b", wa[0].contentDocument, "assign"), b.write(), b.close(), c = cc11001100_hook("c", ya(a, b), "assign"), wa.detach()), xa[a] = cc11001100_hook("xa[a]", c, "assign")), c;
  }
  var Aa = cc11001100_hook("Aa", /^margin/, "var-init"),
    Ba = cc11001100_hook("Ba", new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), "var-init"),
    Ca = function (b) {
      var c = cc11001100_hook("c", b.ownerDocument.defaultView, "var-init");
      return c.opener || (c = cc11001100_hook("c", a, "assign")), c.getComputedStyle(b);
    },
    Da = function (a, b, c, d) {
      var e,
        f,
        g = cc11001100_hook("g", {}, "var-init");
      for (f in b) g[f] = cc11001100_hook("g[f]", a.style[f], "assign"), a.style[f] = cc11001100_hook("a.style[f]", b[f], "assign");
      e = cc11001100_hook("e", c.apply(a, d || []), "assign");
      for (f in b) a.style[f] = cc11001100_hook("a.style[f]", g[f], "assign");
      return e;
    },
    Ea = cc11001100_hook("Ea", d.documentElement, "var-init");
  !function () {
    var b,
      c,
      e,
      f,
      g = cc11001100_hook("g", d.createElement("div"), "var-init"),
      h = cc11001100_hook("h", d.createElement("div"), "var-init");
    if (h.style) {
      h.style.backgroundClip = cc11001100_hook("h.style.backgroundClip", "content-box", "assign"), h.cloneNode(!0).style.backgroundClip = cc11001100_hook("h.cloneNode(!0).style.backgroundClip", "", "assign"), l.clearCloneStyle = cc11001100_hook("l.clearCloneStyle", "content-box" === h.style.backgroundClip, "assign"), g.style.cssText = cc11001100_hook("g.style.cssText", "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", "assign"), g.appendChild(h);
      function i() {
        h.style.cssText = cc11001100_hook("h.style.cssText", "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", "assign"), h.innerHTML = cc11001100_hook("h.innerHTML", "", "assign"), Ea.appendChild(g);
        var d = cc11001100_hook("d", a.getComputedStyle(h), "var-init");
        b = cc11001100_hook("b", "1%" !== d.top, "assign"), f = cc11001100_hook("f", "2px" === d.marginLeft, "assign"), c = cc11001100_hook("c", "4px" === d.width, "assign"), h.style.marginRight = cc11001100_hook("h.style.marginRight", "50%", "assign"), e = cc11001100_hook("e", "4px" === d.marginRight, "assign"), Ea.removeChild(g);
      }
      n.extend(l, {
        pixelPosition: function () {
          return i(), b;
        },
        boxSizingReliable: function () {
          return null == c && i(), c;
        },
        pixelMarginRight: function () {
          return null == c && i(), e;
        },
        reliableMarginLeft: function () {
          return null == c && i(), f;
        },
        reliableMarginRight: function () {
          var b,
            c = cc11001100_hook("c", h.appendChild(d.createElement("div")), "var-init");
          return c.style.cssText = cc11001100_hook("c.style.cssText", h.style.cssText = cc11001100_hook("h.style.cssText", "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", "assign"), "assign"), c.style.marginRight = cc11001100_hook("c.style.marginRight", c.style.width = cc11001100_hook("c.style.width", "0", "assign"), "assign"), h.style.width = cc11001100_hook("h.style.width", "1px", "assign"), Ea.appendChild(g), b = cc11001100_hook("b", !parseFloat(a.getComputedStyle(c).marginRight), "assign"), Ea.removeChild(g), h.removeChild(c), b;
        }
      });
    }
  }();
  function Fa(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f,
      g,
      h = cc11001100_hook("h", a.style, "var-init");
    return c = cc11001100_hook("c", c || Ca(a), "assign"), c && (g = cc11001100_hook("g", c.getPropertyValue(b) || c[b], "assign"), "" !== g || n.contains(a.ownerDocument, a) || (g = cc11001100_hook("g", n.style(a, b), "assign")), !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = cc11001100_hook("d", h.width, "assign"), e = cc11001100_hook("e", h.minWidth, "assign"), f = cc11001100_hook("f", h.maxWidth, "assign"), h.minWidth = cc11001100_hook("h.minWidth", h.maxWidth = cc11001100_hook("h.maxWidth", h.width = cc11001100_hook("h.width", g, "assign"), "assign"), "assign"), g = cc11001100_hook("g", c.width, "assign"), h.width = cc11001100_hook("h.width", d, "assign"), h.minWidth = cc11001100_hook("h.minWidth", e, "assign"), h.maxWidth = cc11001100_hook("h.maxWidth", f, "assign"))), void 0 !== g ? g + "" : g;
  }
  function Ga(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = cc11001100_hook("this.get", b, "assign")).apply(this, arguments);
      }
    };
  }
  var Ha = cc11001100_hook("Ha", /^(none|table(?!-c[ea]).+)/, "var-init"),
    Ia = cc11001100_hook("Ia", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    Ja = cc11001100_hook("Ja", {
      letterSpacing: cc11001100_hook("letterSpacing", "0", "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", "400", "object-key-init")
    }, "var-init"),
    Ka = cc11001100_hook("Ka", ["Webkit", "O", "Moz", "ms"], "var-init"),
    La = cc11001100_hook("La", d.createElement("div").style, "var-init");
  function Ma(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a in La) return a;
    var b = cc11001100_hook("b", a[0].toUpperCase() + a.slice(1), "var-init"),
      c = cc11001100_hook("c", Ka.length, "var-init");
    while (c--) if (a = cc11001100_hook("a", Ka[c] + b, "assign"), a in La) return a;
  }
  function Na(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", T.exec(b), "var-init");
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Oa(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var f = cc11001100_hook("f", c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, "var-init"), g = cc11001100_hook("g", 0, "var-init"); 4 > f; f += cc11001100_hook("f", 2, "assign")) "margin" === c && (g += cc11001100_hook("g", n.css(a, c + U[f], !0, e), "assign")), d ? ("content" === c && (g -= cc11001100_hook("g", n.css(a, "padding" + U[f], !0, e), "assign")), "margin" !== c && (g -= cc11001100_hook("g", n.css(a, "border" + U[f] + "Width", !0, e), "assign"))) : (g += cc11001100_hook("g", n.css(a, "padding" + U[f], !0, e), "assign"), "padding" !== c && (g += cc11001100_hook("g", n.css(a, "border" + U[f] + "Width", !0, e), "assign")));
    return g;
  }
  function Pa(b, c, e) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f = cc11001100_hook("f", !0, "var-init"),
      g = cc11001100_hook("g", "width" === c ? b.offsetWidth : b.offsetHeight, "var-init"),
      h = cc11001100_hook("h", Ca(b), "var-init"),
      i = cc11001100_hook("i", "border-box" === n.css(b, "boxSizing", !1, h), "var-init");
    if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = cc11001100_hook("g", Math.round(100 * b.getBoundingClientRect()[c]), "assign")), 0 >= g || null == g) {
      if (g = cc11001100_hook("g", Fa(b, c, h), "assign"), (0 > g || null == g) && (g = cc11001100_hook("g", b.style[c], "assign")), Ba.test(g)) return g;
      f = cc11001100_hook("f", i && (l.boxSizingReliable() || g === b.style[c]), "assign"), g = cc11001100_hook("g", parseFloat(g) || 0, "assign");
    }
    return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
  }
  function Qa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c, d, e, f = cc11001100_hook("f", [], "var-init"), g = cc11001100_hook("g", 0, "var-init"), h = cc11001100_hook("h", a.length, "var-init"); h > g; g++) d = cc11001100_hook("d", a[g], "assign"), d.style && (f[g] = cc11001100_hook("f[g]", N.get(d, "olddisplay"), "assign"), c = cc11001100_hook("c", d.style.display, "assign"), b ? (f[g] || "none" !== c || (d.style.display = cc11001100_hook("d.style.display", "", "assign")), "" === d.style.display && V(d) && (f[g] = cc11001100_hook("f[g]", N.access(d, "olddisplay", za(d.nodeName)), "assign"))) : (e = cc11001100_hook("e", V(d), "assign"), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = cc11001100_hook("g", 0, "assign"); h > g; g++) d = cc11001100_hook("d", a[g], "assign"), d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = cc11001100_hook("d.style.display", b ? f[g] || "" : "none", "assign")));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = cc11001100_hook("c", Fa(a, "opacity"), "var-init");
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
      "float": cc11001100_hook("float", "cssFloat", "object-key-init")
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = cc11001100_hook("h", n.camelCase(b), "var-init"),
          i = cc11001100_hook("i", a.style, "var-init");
        return b = cc11001100_hook("b", n.cssProps[h] || (n.cssProps[h] = cc11001100_hook("n.cssProps[h]", Ma(h) || h, "assign")), "assign"), g = cc11001100_hook("g", n.cssHooks[b] || n.cssHooks[h], "assign"), void 0 === c ? g && "get" in g && void 0 !== (e = cc11001100_hook("e", g.get(a, !1, d), "assign")) ? e : i[b] : (f = cc11001100_hook("f", typeof c, "assign"), "string" === f && (e = cc11001100_hook("e", T.exec(c), "assign")) && e[1] && (c = cc11001100_hook("c", W(a, b, e), "assign"), f = cc11001100_hook("f", "number", "assign")), null != c && c === c && ("number" === f && (c += cc11001100_hook("c", e && e[3] || (n.cssNumber[h] ? "" : "px"), "assign")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = cc11001100_hook("i[b]", "inherit", "assign")), g && "set" in g && void 0 === (c = cc11001100_hook("c", g.set(a, c, d), "assign")) || (i[b] = cc11001100_hook("i[b]", c, "assign"))), void 0);
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = cc11001100_hook("h", n.camelCase(b), "var-init");
      return b = cc11001100_hook("b", n.cssProps[h] || (n.cssProps[h] = cc11001100_hook("n.cssProps[h]", Ma(h) || h, "assign")), "assign"), g = cc11001100_hook("g", n.cssHooks[b] || n.cssHooks[h], "assign"), g && "get" in g && (e = cc11001100_hook("e", g.get(a, !0, c), "assign")), void 0 === e && (e = cc11001100_hook("e", Fa(a, b, d), "assign")), "normal" === e && b in Ja && (e = cc11001100_hook("e", Ja[b], "assign")), "" === c || c ? (f = cc11001100_hook("f", parseFloat(e), "assign"), c === !0 || isFinite(f) ? f || 0 : e) : e;
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = cc11001100_hook("n.cssHooks[b]", {
      get: function (a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      },
      set: function (a, c, d) {
        var e,
          f = cc11001100_hook("f", d && Ca(a), "var-init"),
          g = cc11001100_hook("g", d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f), "var-init");
        return g && (e = cc11001100_hook("e", T.exec(c), "assign")) && "px" !== (e[3] || "px") && (a.style[b] = cc11001100_hook("a.style[b]", c, "assign"), c = cc11001100_hook("c", n.css(a, b), "assign")), Na(a, c, g);
      }
    }, "assign");
  }), n.cssHooks.marginLeft = cc11001100_hook("n.cssHooks.marginLeft", Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
      marginLeft: cc11001100_hook("marginLeft", 0, "object-key-init")
    }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), "assign"), n.cssHooks.marginRight = cc11001100_hook("n.cssHooks.marginRight", Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, {
      display: cc11001100_hook("display", "inline-block", "object-key-init")
    }, Fa, [a, "marginRight"]) : void 0;
  }), "assign"), n.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (a, b) {
    n.cssHooks[a + b] = cc11001100_hook("n.cssHooks[a + b]", {
      expand: function (c) {
        for (var d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", {}, "var-init"), f = cc11001100_hook("f", "string" == typeof c ? c.split(" ") : [c], "var-init"); 4 > d; d++) e[a + U[d] + b] = cc11001100_hook("e[a + U[d] + b]", f[d] || f[d - 2] || f[0], "assign");
        return e;
      }
    }, "assign"), Aa.test(a) || (n.cssHooks[a + b].set = cc11001100_hook("n.cssHooks[a + b].set", Na, "assign"));
  }), n.fn.extend({
    css: function (a, b) {
      return K(this, function (a, b, c) {
        var d,
          e,
          f = cc11001100_hook("f", {}, "var-init"),
          g = cc11001100_hook("g", 0, "var-init");
        if (n.isArray(b)) {
          for (d = cc11001100_hook("d", Ca(a), "assign"), e = cc11001100_hook("e", b.length, "assign"); e > g; g++) f[b[g]] = cc11001100_hook("f[b[g]]", n.css(a, b[g], !1, d), "assign");
          return f;
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function () {
      return Qa(this, !0);
    },
    hide: function () {
      return Qa(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    }
  });
  function Ra(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return new Ra.prototype.init(a, b, c, d, e);
  }
  n.Tween = cc11001100_hook("n.Tween", Ra, "assign"), Ra.prototype = cc11001100_hook("Ra.prototype", {
    constructor: cc11001100_hook("constructor", Ra, "object-key-init"),
    init: function (a, b, c, d, e, f) {
      this.elem = cc11001100_hook("this.elem", a, "assign"), this.prop = cc11001100_hook("this.prop", c, "assign"), this.easing = cc11001100_hook("this.easing", e || n.easing._default, "assign"), this.options = cc11001100_hook("this.options", b, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", d, "assign"), this.unit = cc11001100_hook("this.unit", f || (n.cssNumber[c] ? "" : "px"), "assign");
    },
    cur: function () {
      var a = cc11001100_hook("a", Ra.propHooks[this.prop], "var-init");
      return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    },
    run: function (a) {
      var b,
        c = cc11001100_hook("c", Ra.propHooks[this.prop], "var-init");
      return this.options.duration ? this.pos = cc11001100_hook("this.pos", b = cc11001100_hook("b", n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration), "assign"), "assign") : this.pos = cc11001100_hook("this.pos", b = cc11001100_hook("b", a, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * b + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    }
  }, "assign"), Ra.prototype.init.prototype = cc11001100_hook("Ra.prototype.init.prototype", Ra.prototype, "assign"), Ra.propHooks = cc11001100_hook("Ra.propHooks", {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = cc11001100_hook("b", n.css(a.elem, a.prop, ""), "assign"), b && "auto" !== b ? b : 0);
      },
      set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = cc11001100_hook("a.elem[a.prop]", a.now, "assign") : n.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, "assign"), Ra.propHooks.scrollTop = cc11001100_hook("Ra.propHooks.scrollTop", Ra.propHooks.scrollLeft = cc11001100_hook("Ra.propHooks.scrollLeft", {
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
  }, "assign"), n.fx = cc11001100_hook("n.fx", Ra.prototype.init, "assign"), n.fx.step = cc11001100_hook("n.fx.step", {}, "assign");
  var Sa,
    Ta,
    Ua = cc11001100_hook("Ua", /^(?:toggle|show|hide)$/, "var-init"),
    Va = cc11001100_hook("Va", /queueHooks$/, "var-init");
  function Wa() {
    return a.setTimeout(function () {
      Sa = cc11001100_hook("Sa", void 0, "assign");
    }), Sa = cc11001100_hook("Sa", n.now(), "assign");
  }
  function Xa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c,
      d = cc11001100_hook("d", 0, "var-init"),
      e = cc11001100_hook("e", {
        height: cc11001100_hook("height", a, "object-key-init")
      }, "var-init");
    for (b = cc11001100_hook("b", b ? 1 : 0, "assign"); 4 > d; d += cc11001100_hook("d", 2 - b, "assign")) c = cc11001100_hook("c", U[d], "assign"), e["margin" + c] = cc11001100_hook("e[\"margin\" + c]", e["padding" + c] = cc11001100_hook("e[\"padding\" + c]", a, "assign"), "assign");
    return b && (e.opacity = cc11001100_hook("e.opacity", e.width = cc11001100_hook("e.width", a, "assign"), "assign")), e;
  }
  function Ya(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var d, e = cc11001100_hook("e", (_a.tweeners[b] || []).concat(_a.tweeners["*"]), "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", e.length, "var-init"); g > f; f++) if (d = cc11001100_hook("d", e[f].call(c, b, a), "assign")) return d;
  }
  function Za(a, b, c) {
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
      l = cc11001100_hook("l", this, "var-init"),
      m = cc11001100_hook("m", {}, "var-init"),
      o = cc11001100_hook("o", a.style, "var-init"),
      p = cc11001100_hook("p", a.nodeType && V(a), "var-init"),
      q = cc11001100_hook("q", N.get(a, "fxshow"), "var-init");
    c.queue || (h = cc11001100_hook("h", n._queueHooks(a, "fx"), "assign"), null == h.unqueued && (h.unqueued = cc11001100_hook("h.unqueued", 0, "assign"), i = cc11001100_hook("i", h.empty.fire, "assign"), h.empty.fire = cc11001100_hook("h.empty.fire", function () {
      h.unqueued || i();
    }, "assign")), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = cc11001100_hook("c.overflow", [o.overflow, o.overflowX, o.overflowY], "assign"), j = cc11001100_hook("j", n.css(a, "display"), "assign"), k = cc11001100_hook("k", "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "assign"), "inline" === k && "none" === n.css(a, "float") && (o.display = cc11001100_hook("o.display", "inline-block", "assign"))), c.overflow && (o.overflow = cc11001100_hook("o.overflow", "hidden", "assign"), l.always(function () {
      o.overflow = cc11001100_hook("o.overflow", c.overflow[0], "assign"), o.overflowX = cc11001100_hook("o.overflowX", c.overflow[1], "assign"), o.overflowY = cc11001100_hook("o.overflowY", c.overflow[2], "assign");
    }));
    for (d in b) if (e = cc11001100_hook("e", b[d], "assign"), Ua.exec(e)) {
      if (delete b[d], f = cc11001100_hook("f", f || "toggle" === e, "assign"), e === (p ? "hide" : "show")) {
        if ("show" !== e || !q || void 0 === q[d]) continue;
        p = cc11001100_hook("p", !0, "assign");
      }
      m[d] = cc11001100_hook("m[d]", q && q[d] || n.style(a, d), "assign");
    } else j = cc11001100_hook("j", void 0, "assign");
    if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = cc11001100_hook("o.display", j, "assign"));else {
      q ? "hidden" in q && (p = cc11001100_hook("p", q.hidden, "assign")) : q = cc11001100_hook("q", N.access(a, "fxshow", {}), "assign"), f && (q.hidden = cc11001100_hook("q.hidden", !p, "assign")), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;
        N.remove(a, "fxshow");
        for (b in m) n.style(a, b, m[b]);
      });
      for (d in m) g = cc11001100_hook("g", Ya(p ? q[d] : 0, d, l), "assign"), d in q || (q[d] = cc11001100_hook("q[d]", g.start, "assign"), p && (g.end = cc11001100_hook("g.end", g.start, "assign"), g.start = cc11001100_hook("g.start", "width" === d || "height" === d ? 1 : 0, "assign")));
    }
  }
  function $a(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c, d, e, f, g;
    for (c in a) if (d = cc11001100_hook("d", n.camelCase(c), "assign"), e = cc11001100_hook("e", b[d], "assign"), f = cc11001100_hook("f", a[c], "assign"), n.isArray(f) && (e = cc11001100_hook("e", f[1], "assign"), f = cc11001100_hook("f", a[c] = cc11001100_hook("a[c]", f[0], "assign"), "assign")), c !== d && (a[d] = cc11001100_hook("a[d]", f, "assign"), delete a[c]), g = cc11001100_hook("g", n.cssHooks[d], "assign"), g && "expand" in g) {
      f = cc11001100_hook("f", g.expand(f), "assign"), delete a[d];
      for (c in f) c in a || (a[c] = cc11001100_hook("a[c]", f[c], "assign"), b[c] = cc11001100_hook("b[c]", e, "assign"));
    } else b[d] = cc11001100_hook("b[d]", e, "assign");
  }
  function _a(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f = cc11001100_hook("f", 0, "var-init"),
      g = cc11001100_hook("g", _a.prefilters.length, "var-init"),
      h = cc11001100_hook("h", n.Deferred().always(function () {
        delete i.elem;
      }), "var-init"),
      i = function () {
        if (e) return !1;
        for (var b = cc11001100_hook("b", Sa || Wa(), "var-init"), c = cc11001100_hook("c", Math.max(0, j.startTime + j.duration - b), "var-init"), d = cc11001100_hook("d", c / j.duration || 0, "var-init"), f = cc11001100_hook("f", 1 - d, "var-init"), g = cc11001100_hook("g", 0, "var-init"), i = cc11001100_hook("i", j.tweens.length, "var-init"); i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
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
        startTime: cc11001100_hook("startTime", Sa || Wa(), "object-key-init"),
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
          for (e = cc11001100_hook("e", !0, "assign"); d > c; c++) j.tweens[c].run(1);
          return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
        }
      }), "var-init"),
      k = cc11001100_hook("k", j.props, "var-init");
    for ($a(k, j.opts.specialEasing); g > f; f++) if (d = cc11001100_hook("d", _a.prefilters[f].call(j, a, k, j.opts), "assign")) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = cc11001100_hook("n._queueHooks(j.elem, j.opts.queue).stop", n.proxy(d.stop, d), "assign")), d;
    return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: cc11001100_hook("elem", a, "object-key-init"),
      anim: cc11001100_hook("anim", j, "object-key-init"),
      queue: cc11001100_hook("queue", j.opts.queue, "object-key-init")
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }
  n.Animation = cc11001100_hook("n.Animation", n.extend(_a, {
    tweeners: {
      "*": cc11001100_hook("*", [function (a, b) {
        var c = cc11001100_hook("c", this.createTween(a, b), "var-init");
        return W(c.elem, a, T.exec(b), c), c;
      }], "object-key-init")
    },
    tweener: function (a, b) {
      n.isFunction(a) ? (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", ["*"], "assign")) : a = cc11001100_hook("a", a.match(G), "assign");
      for (var c, d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", a.length, "var-init"); e > d; d++) c = cc11001100_hook("c", a[d], "assign"), _a.tweeners[c] = cc11001100_hook("_a.tweeners[c]", _a.tweeners[c] || [], "assign"), _a.tweeners[c].unshift(b);
    },
    prefilters: cc11001100_hook("prefilters", [Za], "object-key-init"),
    prefilter: function (a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    }
  }), "assign"), n.speed = cc11001100_hook("n.speed", function (a, b, c) {
    var d = cc11001100_hook("d", a && "object" == typeof a ? n.extend({}, a) : {
      complete: cc11001100_hook("complete", c || !c && b || n.isFunction(a) && a, "object-key-init"),
      duration: cc11001100_hook("duration", a, "object-key-init"),
      easing: cc11001100_hook("easing", c && b || b && !n.isFunction(b) && b, "object-key-init")
    }, "var-init");
    return d.duration = cc11001100_hook("d.duration", n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, "assign"), (null == d.queue || d.queue === !0) && (d.queue = cc11001100_hook("d.queue", "fx", "assign")), d.old = cc11001100_hook("d.old", d.complete, "assign"), d.complete = cc11001100_hook("d.complete", function () {
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
          var b = cc11001100_hook("b", _a(this, n.extend({}, a), f), "var-init");
          (e || N.get(this, "finish")) && b.stop(!0);
        };
      return g.finish = cc11001100_hook("g.finish", g, "assign"), e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function (a, b, c) {
      var d = function (a) {
        var b = cc11001100_hook("b", a.stop, "var-init");
        delete a.stop, b(c);
      };
      return "string" != typeof a && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", void 0, "assign")), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = cc11001100_hook("b", !0, "var-init"),
          e = cc11001100_hook("e", null != a && a + "queueHooks", "var-init"),
          f = cc11001100_hook("f", n.timers, "var-init"),
          g = cc11001100_hook("g", N.get(this), "var-init");
        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
        for (e = cc11001100_hook("e", f.length, "assign"); e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = cc11001100_hook("b", !1, "assign"), f.splice(e, 1));
        (b || !c) && n.dequeue(this, a);
      });
    },
    finish: function (a) {
      return a !== !1 && (a = cc11001100_hook("a", a || "fx", "assign")), this.each(function () {
        var b,
          c = cc11001100_hook("c", N.get(this), "var-init"),
          d = cc11001100_hook("d", c[a + "queue"], "var-init"),
          e = cc11001100_hook("e", c[a + "queueHooks"], "var-init"),
          f = cc11001100_hook("f", n.timers, "var-init"),
          g = cc11001100_hook("g", d ? d.length : 0, "var-init");
        for (c.finish = cc11001100_hook("c.finish", !0, "assign"), n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = cc11001100_hook("b", f.length, "assign"); b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = cc11001100_hook("b", 0, "assign"); g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = cc11001100_hook("c", n.fn[b], "var-init");
    n.fn[b] = cc11001100_hook("n.fn[b]", function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    }, "assign");
  }), n.each({
    slideDown: cc11001100_hook("slideDown", Xa("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", Xa("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", Xa("toggle"), "object-key-init"),
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
      b = cc11001100_hook("b", 0, "var-init"),
      c = cc11001100_hook("c", n.timers, "var-init");
    for (Sa = cc11001100_hook("Sa", n.now(), "assign"); b < c.length; b++) a = cc11001100_hook("a", c[b], "assign"), a() || c[b] !== a || c.splice(b--, 1);
    c.length || n.fx.stop(), Sa = cc11001100_hook("Sa", void 0, "assign");
  }, "assign"), n.fx.timer = cc11001100_hook("n.fx.timer", function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, "assign"), n.fx.interval = cc11001100_hook("n.fx.interval", 13, "assign"), n.fx.start = cc11001100_hook("n.fx.start", function () {
    Ta || (Ta = cc11001100_hook("Ta", a.setInterval(n.fx.tick, n.fx.interval), "assign"));
  }, "assign"), n.fx.stop = cc11001100_hook("n.fx.stop", function () {
    a.clearInterval(Ta), Ta = cc11001100_hook("Ta", null, "assign");
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
    var a = cc11001100_hook("a", d.createElement("input"), "var-init"),
      b = cc11001100_hook("b", d.createElement("select"), "var-init"),
      c = cc11001100_hook("c", b.appendChild(d.createElement("option")), "var-init");
    a.type = cc11001100_hook("a.type", "checkbox", "assign"), l.checkOn = cc11001100_hook("l.checkOn", "" !== a.value, "assign"), l.optSelected = cc11001100_hook("l.optSelected", c.selected, "assign"), b.disabled = cc11001100_hook("b.disabled", !0, "assign"), l.optDisabled = cc11001100_hook("l.optDisabled", !c.disabled, "assign"), a = cc11001100_hook("a", d.createElement("input"), "assign"), a.value = cc11001100_hook("a.value", "t", "assign"), a.type = cc11001100_hook("a.type", "radio", "assign"), l.radioValue = cc11001100_hook("l.radioValue", "t" === a.value, "assign");
  }();
  var ab,
    bb = cc11001100_hook("bb", n.expr.attrHandle, "var-init");
  n.fn.extend({
    attr: function (a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
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
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = cc11001100_hook("b", b.toLowerCase(), "assign"), e = cc11001100_hook("e", n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0), "assign")), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = cc11001100_hook("d", e.set(a, c, b), "assign")) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = cc11001100_hook("d", e.get(a, b), "assign")) ? d : (d = cc11001100_hook("d", n.find.attr(a, b), "assign"), null == d ? void 0 : d));
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
        f = cc11001100_hook("f", b && b.match(G), "var-init");
      if (f && 1 === a.nodeType) while (c = cc11001100_hook("c", f[e++], "assign")) d = cc11001100_hook("d", n.propFix[c] || c, "assign"), n.expr.match.bool.test(c) && (a[d] = cc11001100_hook("a[d]", !1, "assign")), a.removeAttribute(c);
    }
  }), ab = cc11001100_hook("ab", {
    set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    }
  }, "assign"), n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = cc11001100_hook("c", bb[b] || n.find.attr, "var-init");
    bb[b] = cc11001100_hook("bb[b]", function (a, b, d) {
      var e, f;
      return d || (f = cc11001100_hook("f", bb[b], "assign"), bb[b] = cc11001100_hook("bb[b]", e, "assign"), e = cc11001100_hook("e", null != c(a, b, d) ? b.toLowerCase() : null, "assign"), bb[b] = cc11001100_hook("bb[b]", f, "assign")), e;
    }, "assign");
  });
  var cb = cc11001100_hook("cb", /^(?:input|select|textarea|button)$/i, "var-init"),
    db = cc11001100_hook("db", /^(?:a|area)$/i, "var-init");
  n.fn.extend({
    prop: function (a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
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
          return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init")
    }
  }), l.optSelected || (n.propHooks.selected = cc11001100_hook("n.propHooks.selected", {
    get: function (a) {
      var b = cc11001100_hook("b", a.parentNode, "var-init");
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    }
  }, "assign")), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = cc11001100_hook("n.propFix[this.toLowerCase()]", this, "assign");
  });
  var eb = cc11001100_hook("eb", /[\t\r\n\f]/g, "var-init");
  function fb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.getAttribute && a.getAttribute("class") || "";
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
        n(this).addClass(a.call(this, b, fb(this)));
      });
      if ("string" == typeof a && a) {
        b = cc11001100_hook("b", a.match(G) || [], "assign");
        while (c = cc11001100_hook("c", this[i++], "assign")) if (e = cc11001100_hook("e", fb(c), "assign"), d = cc11001100_hook("d", 1 === c.nodeType && (" " + e + " ").replace(eb, " "), "assign")) {
          g = cc11001100_hook("g", 0, "assign");
          while (f = cc11001100_hook("f", b[g++], "assign")) d.indexOf(" " + f + " ") < 0 && (d += cc11001100_hook("d", f + " ", "assign"));
          h = cc11001100_hook("h", n.trim(d), "assign"), e !== h && c.setAttribute("class", h);
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
        n(this).removeClass(a.call(this, b, fb(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = cc11001100_hook("b", a.match(G) || [], "assign");
        while (c = cc11001100_hook("c", this[i++], "assign")) if (e = cc11001100_hook("e", fb(c), "assign"), d = cc11001100_hook("d", 1 === c.nodeType && (" " + e + " ").replace(eb, " "), "assign")) {
          g = cc11001100_hook("g", 0, "assign");
          while (f = cc11001100_hook("f", b[g++], "assign")) while (d.indexOf(" " + f + " ") > -1) d = cc11001100_hook("d", d.replace(" " + f + " ", " "), "assign");
          h = cc11001100_hook("h", n.trim(d), "assign"), e !== h && c.setAttribute("class", h);
        }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = cc11001100_hook("c", typeof a, "var-init");
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;
        if ("string" === c) {
          d = cc11001100_hook("d", 0, "assign"), e = cc11001100_hook("e", n(this), "assign"), f = cc11001100_hook("f", a.match(G) || [], "assign");
          while (b = cc11001100_hook("b", f[d++], "assign")) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else (void 0 === a || "boolean" === c) && (b = cc11001100_hook("b", fb(this), "assign"), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    },
    hasClass: function (a) {
      var b,
        c,
        d = cc11001100_hook("d", 0, "var-init");
      b = cc11001100_hook("b", " " + a + " ", "assign");
      while (c = cc11001100_hook("c", this[d++], "assign")) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
      return !1;
    }
  });
  var gb = cc11001100_hook("gb", /\r/g, "var-init");
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
          }), "assign")), b = cc11001100_hook("b", n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], "assign"), b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = cc11001100_hook("this.value", e, "assign")));
        });
        if (e) return b = cc11001100_hook("b", n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], "assign"), b && "get" in b && void 0 !== (c = cc11001100_hook("c", b.get(e, "value"), "assign")) ? c : (c = cc11001100_hook("c", e.value, "assign"), "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function (a) {
          return n.trim(a.value);
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = cc11001100_hook("d", a.options, "var-init"), e = cc11001100_hook("e", a.selectedIndex, "var-init"), f = cc11001100_hook("f", "select-one" === a.type || 0 > e, "var-init"), g = cc11001100_hook("g", f ? null : [], "var-init"), h = cc11001100_hook("h", f ? e + 1 : d.length, "var-init"), i = cc11001100_hook("i", 0 > e ? h : f ? e : 0, "var-init"); h > i; i++) if (c = cc11001100_hook("c", d[i], "assign"), (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
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
          while (g--) d = cc11001100_hook("d", e[g], "assign"), (d.selected = cc11001100_hook("d.selected", n.inArray(n.valHooks.option.get(d), f) > -1, "assign")) && (c = cc11001100_hook("c", !0, "assign"));
          return c || (a.selectedIndex = cc11001100_hook("a.selectedIndex", -1, "assign")), f;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = cc11001100_hook("n.valHooks[this]", {
      set: function (a, b) {
        return n.isArray(b) ? a.checked = cc11001100_hook("a.checked", n.inArray(n(a).val(), b) > -1, "assign") : void 0;
      }
    }, "assign"), l.checkOn || (n.valHooks[this].get = cc11001100_hook("n.valHooks[this].get", function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    }, "assign"));
  });
  var hb = cc11001100_hook("hb", /^(?:focusinfocus|focusoutblur)$/, "var-init");
  n.extend(n.event, {
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
      if (h = cc11001100_hook("h", i = cc11001100_hook("i", e = cc11001100_hook("e", e || d, "assign"), "assign"), "assign"), 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = cc11001100_hook("r", q.split("."), "assign"), q = cc11001100_hook("q", r.shift(), "assign"), r.sort()), l = cc11001100_hook("l", q.indexOf(":") < 0 && "on" + q, "assign"), b = cc11001100_hook("b", b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), "assign"), b.isTrigger = cc11001100_hook("b.isTrigger", f ? 2 : 3, "assign"), b.namespace = cc11001100_hook("b.namespace", r.join("."), "assign"), b.rnamespace = cc11001100_hook("b.rnamespace", b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), b.result = cc11001100_hook("b.result", void 0, "assign"), b.target || (b.target = cc11001100_hook("b.target", e, "assign")), c = cc11001100_hook("c", null == c ? [b] : n.makeArray(c, [b]), "assign"), o = cc11001100_hook("o", n.event.special[q] || {}, "assign"), f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = cc11001100_hook("j", o.delegateType || q, "assign"), hb.test(j + q) || (h = cc11001100_hook("h", h.parentNode, "assign")); h; h = cc11001100_hook("h", h.parentNode, "assign")) p.push(h), i = cc11001100_hook("i", h, "assign");
          i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }
        g = cc11001100_hook("g", 0, "assign");
        while ((h = cc11001100_hook("h", p[g++], "assign")) && !b.isPropagationStopped()) b.type = cc11001100_hook("b.type", g > 1 ? j : o.bindType || q, "assign"), m = cc11001100_hook("m", (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), "assign"), m && m.apply(h, c), m = cc11001100_hook("m", l && h[l], "assign"), m && m.apply && L(h) && (b.result = cc11001100_hook("b.result", m.apply(h, c), "assign"), b.result === !1 && b.preventDefault());
        return b.type = cc11001100_hook("b.type", q, "assign"), f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = cc11001100_hook("i", e[l], "assign"), i && (e[l] = cc11001100_hook("e[l]", null, "assign")), n.event.triggered = cc11001100_hook("n.event.triggered", q, "assign"), e[q](), n.event.triggered = cc11001100_hook("n.event.triggered", void 0, "assign"), i && (e[l] = cc11001100_hook("e[l]", i, "assign"))), b.result;
      }
    },
    simulate: function (a, b, c) {
      var d = cc11001100_hook("d", n.extend(new n.Event(), c, {
        type: cc11001100_hook("type", a, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init")
      }), "var-init");
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    }
  }), n.fn.extend({
    trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      var c = cc11001100_hook("c", this[0], "var-init");
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = cc11001100_hook("n.fn[b]", function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    }, "assign");
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  }), l.focusin = cc11001100_hook("l.focusin", "onfocusin" in a, "assign"), l.focusin || n.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };
    n.event.special[b] = cc11001100_hook("n.event.special[b]", {
      setup: function () {
        var d = cc11001100_hook("d", this.ownerDocument || this, "var-init"),
          e = cc11001100_hook("e", N.access(d, b), "var-init");
        e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      },
      teardown: function () {
        var d = cc11001100_hook("d", this.ownerDocument || this, "var-init"),
          e = cc11001100_hook("e", N.access(d, b) - 1, "var-init");
        e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      }
    }, "assign");
  });
  var ib = cc11001100_hook("ib", a.location, "var-init"),
    jb = cc11001100_hook("jb", n.now(), "var-init"),
    kb = cc11001100_hook("kb", /\?/, "var-init");
  n.parseJSON = cc11001100_hook("n.parseJSON", function (a) {
    return JSON.parse(a + "");
  }, "assign"), n.parseXML = cc11001100_hook("n.parseXML", function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = cc11001100_hook("c", new a.DOMParser().parseFromString(b, "text/xml"), "assign");
    } catch (d) {
      c = cc11001100_hook("c", void 0, "assign");
    }
    return (!c || c.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + b), c;
  }, "assign");
  var lb = cc11001100_hook("lb", /#.*$/, "var-init"),
    mb = cc11001100_hook("mb", /([?&])_=[^&]*/, "var-init"),
    nb = cc11001100_hook("nb", /^(.*?):[ \t]*([^\r\n]*)$/gm, "var-init"),
    ob = cc11001100_hook("ob", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
    pb = cc11001100_hook("pb", /^(?:GET|HEAD)$/, "var-init"),
    qb = cc11001100_hook("qb", /^\/\//, "var-init"),
    rb = cc11001100_hook("rb", {}, "var-init"),
    sb = cc11001100_hook("sb", {}, "var-init"),
    tb = cc11001100_hook("tb", "*/".concat("*"), "var-init"),
    ub = cc11001100_hook("ub", d.createElement("a"), "var-init");
  ub.href = cc11001100_hook("ub.href", ib.href, "assign");
  function vb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b, c) {
      "string" != typeof b && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", "*", "assign"));
      var d,
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", b.toLowerCase().match(G) || [], "var-init");
      if (n.isFunction(c)) while (d = cc11001100_hook("d", f[e++], "assign")) "+" === d[0] ? (d = cc11001100_hook("d", d.slice(1) || "*", "assign"), (a[d] = cc11001100_hook("a[d]", a[d] || [], "assign")).unshift(c)) : (a[d] = cc11001100_hook("a[d]", a[d] || [], "assign")).push(c);
    };
  }
  function wb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", {}, "var-init"),
      f = cc11001100_hook("f", a === sb, "var-init");
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
  function xb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c,
      d,
      e = cc11001100_hook("e", n.ajaxSettings.flatOptions || {}, "var-init");
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = cc11001100_hook("d", {}, "assign")))[c] = cc11001100_hook("(e[c] ? a : d || (d = {}))[c]", b[c], "assign"));
    return d && n.extend(!0, a, d), a;
  }
  function yb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f,
      g,
      h = cc11001100_hook("h", a.contents, "var-init"),
      i = cc11001100_hook("i", a.dataTypes, "var-init");
    while ("*" === i[0]) i.shift(), void 0 === d && (d = cc11001100_hook("d", a.mimeType || b.getResponseHeader("Content-Type"), "assign"));
    if (d) for (e in h) if (h[e] && h[e].test(d)) {
      i.unshift(e);
      break;
    }
    if (i[0] in c) f = cc11001100_hook("f", i[0], "assign");else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = cc11001100_hook("f", e, "assign");
          break;
        }
        g || (g = cc11001100_hook("g", e, "assign"));
      }
      f = cc11001100_hook("f", f || g, "assign");
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function zb(a, b, c, d) {
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
      if (g = cc11001100_hook("g", j[i + " " + f] || j["* " + f], "assign"), !g) for (e in j) if (h = cc11001100_hook("h", e.split(" "), "assign"), h[1] === f && (g = cc11001100_hook("g", j[i + " " + h[0]] || j["* " + h[0]], "assign"))) {
        g === !0 ? g = cc11001100_hook("g", j[e], "assign") : j[e] !== !0 && (f = cc11001100_hook("f", h[0], "assign"), k.unshift(h[1]));
        break;
      }
      if (g !== !0) if (g && a["throws"]) b = cc11001100_hook("b", g(b), "assign");else try {
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
      url: cc11001100_hook("url", ib.href, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", ob.test(ib.protocol), "object-key-init"),
      global: cc11001100_hook("global", !0, "object-key-init"),
      processData: cc11001100_hook("processData", !0, "object-key-init"),
      async: cc11001100_hook("async", !0, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", tb, "object-key-init"),
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
      return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", vb(rb), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", vb(sb), "object-key-init"),
    ajax: function (b, c) {
      "object" == typeof b && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign")), c = cc11001100_hook("c", c || {}, "assign");
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = cc11001100_hook("m", n.ajaxSetup({}, c), "var-init"),
        o = cc11001100_hook("o", m.context || m, "var-init"),
        p = cc11001100_hook("p", m.context && (o.nodeType || o.jquery) ? n(o) : n.event, "var-init"),
        q = cc11001100_hook("q", n.Deferred(), "var-init"),
        r = cc11001100_hook("r", n.Callbacks("once memory"), "var-init"),
        s = cc11001100_hook("s", m.statusCode || {}, "var-init"),
        t = cc11001100_hook("t", {}, "var-init"),
        u = cc11001100_hook("u", {}, "var-init"),
        v = cc11001100_hook("v", 0, "var-init"),
        w = cc11001100_hook("w", "canceled", "var-init"),
        x = cc11001100_hook("x", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (a) {
            var b;
            if (2 === v) {
              if (!h) {
                h = cc11001100_hook("h", {}, "assign");
                while (b = cc11001100_hook("b", nb.exec(g), "assign")) h[b[1].toLowerCase()] = cc11001100_hook("h[b[1].toLowerCase()]", b[2], "assign");
              }
              b = cc11001100_hook("b", h[a.toLowerCase()], "assign");
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === v ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = cc11001100_hook("c", a.toLowerCase(), "var-init");
            return v || (a = cc11001100_hook("a", u[c] = cc11001100_hook("u[c]", u[c] || a, "assign"), "assign"), t[a] = cc11001100_hook("t[a]", b, "assign")), this;
          },
          overrideMimeType: function (a) {
            return v || (m.mimeType = cc11001100_hook("m.mimeType", a, "assign")), this;
          },
          statusCode: function (a) {
            var b;
            if (a) if (2 > v) for (b in a) s[b] = cc11001100_hook("s[b]", [s[b], a[b]], "assign");else x.always(a[x.status]);
            return this;
          },
          abort: function (a) {
            var b = cc11001100_hook("b", a || w, "var-init");
            return e && e.abort(b), z(0, b), this;
          }
        }, "var-init");
      if (q.promise(x).complete = cc11001100_hook("q.promise(x).complete", r.add, "assign"), x.success = cc11001100_hook("x.success", x.done, "assign"), x.error = cc11001100_hook("x.error", x.fail, "assign"), m.url = cc11001100_hook("m.url", ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), "assign"), m.type = cc11001100_hook("m.type", c.method || c.type || m.method || m.type, "assign"), m.dataTypes = cc11001100_hook("m.dataTypes", n.trim(m.dataType || "*").toLowerCase().match(G) || [""], "assign"), null == m.crossDomain) {
        j = cc11001100_hook("j", d.createElement("a"), "assign");
        try {
          j.href = cc11001100_hook("j.href", m.url, "assign"), j.href = cc11001100_hook("j.href", j.href, "assign"), m.crossDomain = cc11001100_hook("m.crossDomain", ub.protocol + "//" + ub.host != j.protocol + "//" + j.host, "assign");
        } catch (y) {
          m.crossDomain = cc11001100_hook("m.crossDomain", !0, "assign");
        }
      }
      if (m.data && m.processData && "string" != typeof m.data && (m.data = cc11001100_hook("m.data", n.param(m.data, m.traditional), "assign")), wb(rb, m, c, x), 2 === v) return x;
      k = cc11001100_hook("k", n.event && m.global, "assign"), k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = cc11001100_hook("m.type", m.type.toUpperCase(), "assign"), m.hasContent = cc11001100_hook("m.hasContent", !pb.test(m.type), "assign"), f = cc11001100_hook("f", m.url, "assign"), m.hasContent || (m.data && (f = cc11001100_hook("f", m.url += cc11001100_hook("m.url", (kb.test(f) ? "&" : "?") + m.data, "assign"), "assign"), delete m.data), m.cache === !1 && (m.url = cc11001100_hook("m.url", mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++, "assign"))), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);
      for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
      w = cc11001100_hook("w", "abort", "assign");
      for (l in {
        success: cc11001100_hook("success", 1, "object-key-init"),
        error: cc11001100_hook("error", 1, "object-key-init"),
        complete: cc11001100_hook("complete", 1, "object-key-init")
      }) x[l](m[l]);
      if (e = cc11001100_hook("e", wb(sb, m, c, x), "assign")) {
        if (x.readyState = cc11001100_hook("x.readyState", 1, "assign"), k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
        m.async && m.timeout > 0 && (i = cc11001100_hook("i", a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout), "assign"));
        try {
          v = cc11001100_hook("v", 1, "assign"), e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y);
        }
      } else z(-1, "No Transport");
      function z(b, c, d, h) {
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        var j,
          l,
          t,
          u,
          w,
          y = cc11001100_hook("y", c, "var-init");
        2 !== v && (v = cc11001100_hook("v", 2, "assign"), i && a.clearTimeout(i), e = cc11001100_hook("e", void 0, "assign"), g = cc11001100_hook("g", h || "", "assign"), x.readyState = cc11001100_hook("x.readyState", b > 0 ? 4 : 0, "assign"), j = cc11001100_hook("j", b >= 200 && 300 > b || 304 === b, "assign"), d && (u = cc11001100_hook("u", yb(m, x, d), "assign")), u = cc11001100_hook("u", zb(m, u, x, j), "assign"), j ? (m.ifModified && (w = cc11001100_hook("w", x.getResponseHeader("Last-Modified"), "assign"), w && (n.lastModified[f] = cc11001100_hook("n.lastModified[f]", w, "assign")), w = cc11001100_hook("w", x.getResponseHeader("etag"), "assign"), w && (n.etag[f] = cc11001100_hook("n.etag[f]", w, "assign"))), 204 === b || "HEAD" === m.type ? y = cc11001100_hook("y", "nocontent", "assign") : 304 === b ? y = cc11001100_hook("y", "notmodified", "assign") : (y = cc11001100_hook("y", u.state, "assign"), l = cc11001100_hook("l", u.data, "assign"), t = cc11001100_hook("t", u.error, "assign"), j = cc11001100_hook("j", !t, "assign"))) : (t = cc11001100_hook("t", y, "assign"), (b || !y) && (y = cc11001100_hook("y", "error", "assign"), 0 > b && (b = cc11001100_hook("b", 0, "assign")))), x.status = cc11001100_hook("x.status", b, "assign"), x.statusText = cc11001100_hook("x.statusText", (c || y) + "", "assign"), j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = cc11001100_hook("s", void 0, "assign"), k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }
      return x;
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
      async: cc11001100_hook("async", !1, "object-key-init"),
      global: cc11001100_hook("global", !1, "object-key-init"),
      "throws": cc11001100_hook("throws", !0, "object-key-init")
    });
  }, "assign"), n.fn.extend({
    wrapAll: function (a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = cc11001100_hook("b", n(a, this[0].ownerDocument).eq(0).clone(!0), "assign"), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = cc11001100_hook("a", this, "var-init");
        while (a.firstElementChild) a = cc11001100_hook("a", a.firstElementChild, "assign");
        return a;
      }).append(this)), this);
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
  }), n.expr.filters.hidden = cc11001100_hook("n.expr.filters.hidden", function (a) {
    return !n.expr.filters.visible(a);
  }, "assign"), n.expr.filters.visible = cc11001100_hook("n.expr.filters.visible", function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  }, "assign");
  var Ab = cc11001100_hook("Ab", /%20/g, "var-init"),
    Bb = cc11001100_hook("Bb", /\[\]$/, "var-init"),
    Cb = cc11001100_hook("Cb", /\r?\n/g, "var-init"),
    Db = cc11001100_hook("Db", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    Eb = cc11001100_hook("Eb", /^(?:input|select|textarea|keygen)/i, "var-init");
  function Fb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || Bb.test(a) ? d(a, e) : Fb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Fb(a + "[" + e + "]", b[e], c, d);
  }
  n.param = cc11001100_hook("n.param", function (a, b) {
    var c,
      d = cc11001100_hook("d", [], "var-init"),
      e = function (a, b) {
        b = cc11001100_hook("b", n.isFunction(b) ? b() : null == b ? "" : b, "assign"), d[d.length] = cc11001100_hook("d[d.length]", encodeURIComponent(a) + "=" + encodeURIComponent(b), "assign");
      };
    if (void 0 === b && (b = cc11001100_hook("b", n.ajaxSettings && n.ajaxSettings.traditional, "assign")), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) Fb(c, a[c], b, e);
    return d.join("&").replace(Ab, "+");
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
        return this.name && !n(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = cc11001100_hook("c", n(this).val(), "var-init");
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: cc11001100_hook("name", b.name, "object-key-init"),
            value: cc11001100_hook("value", a.replace(Cb, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", b.name, "object-key-init"),
          value: cc11001100_hook("value", c.replace(Cb, "\r\n"), "object-key-init")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = cc11001100_hook("n.ajaxSettings.xhr", function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }, "assign");
  var Gb = cc11001100_hook("Gb", {
      0: cc11001100_hook(0, 200, "object-key-init"),
      1223: cc11001100_hook(1223, 204, "object-key-init")
    }, "var-init"),
    Hb = cc11001100_hook("Hb", n.ajaxSettings.xhr(), "var-init");
  l.cors = cc11001100_hook("l.cors", !!Hb && "withCredentials" in Hb, "assign"), l.ajax = cc11001100_hook("l.ajax", Hb = cc11001100_hook("Hb", !!Hb, "assign"), "assign"), n.ajaxTransport(function (b) {
    var c, d;
    return l.cors || Hb && !b.crossDomain ? {
      send: function (e, f) {
        var g,
          h = cc11001100_hook("h", b.xhr(), "var-init");
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = cc11001100_hook("h[g]", b.xhrFields[g], "assign");
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = cc11001100_hook("e[\"X-Requested-With\"]", "XMLHttpRequest", "assign"));
        for (g in e) h.setRequestHeader(g, e[g]);
        c = cc11001100_hook("c", function (a) {
          return function () {
            c && (c = cc11001100_hook("c", d = cc11001100_hook("d", h.onload = cc11001100_hook("h.onload", h.onerror = cc11001100_hook("h.onerror", h.onabort = cc11001100_hook("h.onabort", h.onreadystatechange = cc11001100_hook("h.onreadystatechange", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
              binary: cc11001100_hook("binary", h.response, "object-key-init")
            } : {
              text: cc11001100_hook("text", h.responseText, "object-key-init")
            }, h.getAllResponseHeaders()));
          };
        }, "assign"), h.onload = cc11001100_hook("h.onload", c(), "assign"), d = cc11001100_hook("d", h.onerror = cc11001100_hook("h.onerror", c("error"), "assign"), "assign"), void 0 !== h.onabort ? h.onabort = cc11001100_hook("h.onabort", d, "assign") : h.onreadystatechange = cc11001100_hook("h.onreadystatechange", function () {
          4 === h.readyState && a.setTimeout(function () {
            c && d();
          });
        }, "assign"), c = cc11001100_hook("c", c("abort"), "assign");
        try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (c) throw i;
        }
      },
      abort: function () {
        c && c();
      }
    } : void 0;
  }), n.ajaxSetup({
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
    void 0 === a.cache && (a.cache = cc11001100_hook("a.cache", !1, "assign")), a.crossDomain && (a.type = cc11001100_hook("a.type", "GET", "assign"));
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (e, f) {
          b = cc11001100_hook("b", n("<script>").prop({
            charset: cc11001100_hook("charset", a.scriptCharset, "object-key-init"),
            src: cc11001100_hook("src", a.url, "object-key-init")
          }).on("load error", c = cc11001100_hook("c", function (a) {
            b.remove(), c = cc11001100_hook("c", null, "assign"), a && f("error" === a.type ? 404 : 200, a.type);
          }, "assign")), "assign"), d.head.appendChild(b[0]);
        },
        abort: function () {
          c && c();
        }
      };
    }
  });
  var Ib = cc11001100_hook("Ib", [], "var-init"),
    Jb = cc11001100_hook("Jb", /(=)\?(?=&|$)|\?\?/, "var-init");
  n.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var a = cc11001100_hook("a", Ib.pop() || n.expando + "_" + jb++, "var-init");
      return this[a] = cc11001100_hook("this[a]", !0, "assign"), a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
      f,
      g,
      h = cc11001100_hook("h", b.jsonp !== !1 && (Jb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(b.data) && "data"), "var-init");
    return h || "jsonp" === b.dataTypes[0] ? (e = cc11001100_hook("e", b.jsonpCallback = cc11001100_hook("b.jsonpCallback", n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, "assign"), "assign"), h ? b[h] = cc11001100_hook("b[h]", b[h].replace(Jb, "$1" + e), "assign") : b.jsonp !== !1 && (b.url += cc11001100_hook("b.url", (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e, "assign")), b.converters["script json"] = cc11001100_hook("b.converters[\"script json\"]", function () {
      return g || n.error(e + " was not called"), g[0];
    }, "assign"), b.dataTypes[0] = cc11001100_hook("b.dataTypes[0]", "json", "assign"), f = cc11001100_hook("f", a[e], "assign"), a[e] = cc11001100_hook("a[e]", function () {
      g = cc11001100_hook("g", arguments, "assign");
    }, "assign"), d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = cc11001100_hook("a[e]", f, "assign"), b[e] && (b.jsonpCallback = cc11001100_hook("b.jsonpCallback", c.jsonpCallback, "assign"), Ib.push(e)), g && n.isFunction(f) && f(g[0]), g = cc11001100_hook("g", f = cc11001100_hook("f", void 0, "assign"), "assign");
    }), "script") : void 0;
  }), l.createHTMLDocument = cc11001100_hook("l.createHTMLDocument", function () {
    var a = cc11001100_hook("a", d.implementation.createHTMLDocument("").body, "var-init");
    return a.innerHTML = cc11001100_hook("a.innerHTML", "<form></form><form></form>", "assign"), 2 === a.childNodes.length;
  }(), "assign"), n.parseHTML = cc11001100_hook("n.parseHTML", function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", !1, "assign")), b = cc11001100_hook("b", b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d), "assign");
    var e = cc11001100_hook("e", x.exec(a), "var-init"),
      f = cc11001100_hook("f", !c && [], "var-init");
    return e ? [b.createElement(e[1])] : (e = cc11001100_hook("e", ca([a], b, f), "assign"), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  }, "assign");
  var Kb = cc11001100_hook("Kb", n.fn.load, "var-init");
  n.fn.load = cc11001100_hook("n.fn.load", function (a, b, c) {
    if ("string" != typeof a && Kb) return Kb.apply(this, arguments);
    var d,
      e,
      f,
      g = cc11001100_hook("g", this, "var-init"),
      h = cc11001100_hook("h", a.indexOf(" "), "var-init");
    return h > -1 && (d = cc11001100_hook("d", n.trim(a.slice(h)), "assign"), a = cc11001100_hook("a", a.slice(0, h), "assign")), n.isFunction(b) ? (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign")) : b && "object" == typeof b && (e = cc11001100_hook("e", "POST", "assign")), g.length > 0 && n.ajax({
      url: cc11001100_hook("url", a, "object-key-init"),
      type: cc11001100_hook("type", e || "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", b, "object-key-init")
    }).done(function (a) {
      f = cc11001100_hook("f", arguments, "assign"), g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(g, f || [a.responseText, b, a]);
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
  function Lb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
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
      "static" === k && (a.style.position = cc11001100_hook("a.style.position", "relative", "assign")), h = cc11001100_hook("h", l.offset(), "assign"), f = cc11001100_hook("f", n.css(a, "top"), "assign"), i = cc11001100_hook("i", n.css(a, "left"), "assign"), j = cc11001100_hook("j", ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, "assign"), j ? (d = cc11001100_hook("d", l.position(), "assign"), g = cc11001100_hook("g", d.top, "assign"), e = cc11001100_hook("e", d.left, "assign")) : (g = cc11001100_hook("g", parseFloat(f) || 0, "assign"), e = cc11001100_hook("e", parseFloat(i) || 0, "assign")), n.isFunction(b) && (b = cc11001100_hook("b", b.call(a, c, n.extend({}, h)), "assign")), null != b.top && (m.top = cc11001100_hook("m.top", b.top - h.top + g, "assign")), null != b.left && (m.left = cc11001100_hook("m.left", b.left - h.left + e, "assign")), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, "assign"), n.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
        c,
        d = cc11001100_hook("d", this[0], "var-init"),
        e = cc11001100_hook("e", {
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init")
        }, "var-init"),
        f = cc11001100_hook("f", d && d.ownerDocument, "var-init");
      if (f) return b = cc11001100_hook("b", f.documentElement, "assign"), n.contains(b, d) ? (e = cc11001100_hook("e", d.getBoundingClientRect(), "assign"), c = cc11001100_hook("c", Lb(f), "assign"), {
        top: cc11001100_hook("top", e.top + c.pageYOffset - b.clientTop, "object-key-init"),
        left: cc11001100_hook("left", e.left + c.pageXOffset - b.clientLeft, "object-key-init")
      }) : e;
    },
    position: function () {
      if (this[0]) {
        var a,
          b,
          c = cc11001100_hook("c", this[0], "var-init"),
          d = cc11001100_hook("d", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init");
        return "fixed" === n.css(c, "position") ? b = cc11001100_hook("b", c.getBoundingClientRect(), "assign") : (a = cc11001100_hook("a", this.offsetParent(), "assign"), b = cc11001100_hook("b", this.offset(), "assign"), n.nodeName(a[0], "html") || (d = cc11001100_hook("d", a.offset(), "assign")), d.top += cc11001100_hook("d.top", n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), "assign"), d.left += cc11001100_hook("d.left", n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft(), "assign")), {
          top: cc11001100_hook("top", b.top - d.top - n.css(c, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", b.left - d.left - n.css(c, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = cc11001100_hook("a", this.offsetParent, "var-init");
        while (a && "static" === n.css(a, "position")) a = cc11001100_hook("a", a.offsetParent, "assign");
        return a || Ea;
      });
    }
  }), n.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (a, b) {
    var c = cc11001100_hook("c", "pageYOffset" === b, "var-init");
    n.fn[a] = cc11001100_hook("n.fn[a]", function (d) {
      return K(this, function (a, d, e) {
        var f = cc11001100_hook("f", Lb(a), "var-init");
        return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = cc11001100_hook("a[d]", e, "assign"));
      }, a, d, arguments.length);
    }, "assign");
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = cc11001100_hook("n.cssHooks[b]", Ga(l.pixelPosition, function (a, c) {
      return c ? (c = cc11001100_hook("c", Fa(a, b), "assign"), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
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
          g = cc11001100_hook("g", c || (d === !0 || e === !0 ? "margin" : "border"), "var-init");
        return K(this, function (b, c, d) {
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
    },
    size: function () {
      return this.length;
    }
  }), n.fn.andSelf = cc11001100_hook("n.fn.andSelf", n.fn.addBack, "assign"), "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });
  var Mb = cc11001100_hook("Mb", a.jQuery, "var-init"),
    Nb = cc11001100_hook("Nb", a.$, "var-init");
  return n.noConflict = cc11001100_hook("n.noConflict", function (b) {
    return a.$ === n && (a.$ = cc11001100_hook("a.$", Nb, "assign")), b && a.jQuery === n && (a.jQuery = cc11001100_hook("a.jQuery", Mb, "assign")), n;
  }, "assign"), b || (a.jQuery = cc11001100_hook("a.jQuery", a.$ = cc11001100_hook("a.$", n, "assign"), "assign")), n;
});