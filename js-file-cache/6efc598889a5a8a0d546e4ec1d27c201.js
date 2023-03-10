/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = cc11001100_hook("module.exports", a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  }, "assign") : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";

  var c = cc11001100_hook("c", [], "var-init"),
    d = cc11001100_hook("d", a.document, "var-init"),
    e = cc11001100_hook("e", Object.getPrototypeOf, "var-init"),
    f = cc11001100_hook("f", c.slice, "var-init"),
    g = cc11001100_hook("g", c.concat, "var-init"),
    h = cc11001100_hook("h", c.push, "var-init"),
    i = cc11001100_hook("i", c.indexOf, "var-init"),
    j = cc11001100_hook("j", {}, "var-init"),
    k = cc11001100_hook("k", j.toString, "var-init"),
    l = cc11001100_hook("l", j.hasOwnProperty, "var-init"),
    m = cc11001100_hook("m", l.toString, "var-init"),
    n = cc11001100_hook("n", m.call(Object), "var-init"),
    o = cc11001100_hook("o", {}, "var-init");
  function p(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b || d, "assign");
    var c = cc11001100_hook("c", b.createElement("script"), "var-init");
    c.text = cc11001100_hook("c.text", a, "assign"), b.head.appendChild(c).parentNode.removeChild(c);
  }
  var q = cc11001100_hook("q", "3.2.1", "var-init"),
    r = function (a, b) {
      return new r.fn.init(a, b);
    },
    s = cc11001100_hook("s", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init"),
    t = cc11001100_hook("t", /^-ms-/, "var-init"),
    u = cc11001100_hook("u", /-([a-z])/g, "var-init"),
    v = function (a, b) {
      return b.toUpperCase();
    };
  r.fn = cc11001100_hook("r.fn", r.prototype = cc11001100_hook("r.prototype", {
    jquery: cc11001100_hook("jquery", q, "object-key-init"),
    constructor: cc11001100_hook("constructor", r, "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    toArray: function () {
      return f.call(this);
    },
    get: function (a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    },
    pushStack: function (a) {
      var b = cc11001100_hook("b", r.merge(this.constructor(), a), "var-init");
      return b.prevObject = cc11001100_hook("b.prevObject", this, "assign"), b;
    },
    each: function (a) {
      return r.each(this, a);
    },
    map: function (a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function () {
      return this.pushStack(f.apply(this, arguments));
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
    push: cc11001100_hook("push", h, "object-key-init"),
    sort: cc11001100_hook("sort", c.sort, "object-key-init"),
    splice: cc11001100_hook("splice", c.splice, "object-key-init")
  }, "assign"), "assign"), r.extend = cc11001100_hook("r.extend", r.fn.extend = cc11001100_hook("r.fn.extend", function () {
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
    for ("boolean" == typeof g && (j = cc11001100_hook("j", g, "assign"), g = cc11001100_hook("g", arguments[h] || {}, "assign"), h++), "object" == typeof g || r.isFunction(g) || (g = cc11001100_hook("g", {}, "assign")), h === i && (g = cc11001100_hook("g", this, "assign"), h--); h < i; h++) if (null != (a = cc11001100_hook("a", arguments[h], "assign"))) for (b in a) c = cc11001100_hook("c", g[b], "assign"), d = cc11001100_hook("d", a[b], "assign"), g !== d && (j && d && (r.isPlainObject(d) || (e = cc11001100_hook("e", Array.isArray(d), "assign"))) ? (e ? (e = cc11001100_hook("e", !1, "assign"), f = cc11001100_hook("f", c && Array.isArray(c) ? c : [], "assign")) : f = cc11001100_hook("f", c && r.isPlainObject(c) ? c : {}, "assign"), g[b] = cc11001100_hook("g[b]", r.extend(j, f, d), "assign")) : void 0 !== d && (g[b] = cc11001100_hook("g[b]", d, "assign")));
    return g;
  }, "assign"), "assign"), r.extend({
    expando: cc11001100_hook("expando", "jQuery" + (q + Math.random()).replace(/\D/g, ""), "object-key-init"),
    isReady: cc11001100_hook("isReady", !0, "object-key-init"),
    error: function (a) {
      throw new Error(a);
    },
    noop: function () {},
    isFunction: function (a) {
      return "function" === r.type(a);
    },
    isWindow: function (a) {
      return null != a && a === a.window;
    },
    isNumeric: function (a) {
      var b = cc11001100_hook("b", r.type(a), "var-init");
      return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    },
    isPlainObject: function (a) {
      var b, c;
      return !(!a || "[object Object]" !== k.call(a)) && (!(b = cc11001100_hook("b", e(a), "assign")) || (c = cc11001100_hook("c", l.call(b, "constructor") && b.constructor, "assign"), "function" == typeof c && m.call(c) === n));
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) return !1;
      return !0;
    },
    type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a;
    },
    globalEval: function (a) {
      p(a);
    },
    camelCase: function (a) {
      return a.replace(t, "ms-").replace(u, v);
    },
    each: function (a, b) {
      var c,
        d = cc11001100_hook("d", 0, "var-init");
      if (w(a)) {
        for (c = cc11001100_hook("c", a.length, "assign"); d < c; d++) if (b.call(a[d], d, a[d]) === !1) break;
      } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
      return a;
    },
    trim: function (a) {
      return null == a ? "" : (a + "").replace(s, "");
    },
    makeArray: function (a, b) {
      var c = cc11001100_hook("c", b || [], "var-init");
      return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    },
    inArray: function (a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    },
    merge: function (a, b) {
      for (var c = cc11001100_hook("c", +b.length, "var-init"), d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", a.length, "var-init"); d < c; d++) a[e++] = cc11001100_hook("a[e++]", b[d], "assign");
      return a.length = cc11001100_hook("a.length", e, "assign"), a;
    },
    grep: function (a, b, c) {
      for (var d, e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", a.length, "var-init"), h = cc11001100_hook("h", !c, "var-init"); f < g; f++) d = cc11001100_hook("d", !b(a[f], f), "assign"), d !== h && e.push(a[f]);
      return e;
    },
    map: function (a, b, c) {
      var d,
        e,
        f = cc11001100_hook("f", 0, "var-init"),
        h = cc11001100_hook("h", [], "var-init");
      if (w(a)) for (d = cc11001100_hook("d", a.length, "assign"); f < d; f++) e = cc11001100_hook("e", b(a[f], f, c), "assign"), null != e && h.push(e);else for (f in a) e = cc11001100_hook("e", b(a[f], f, c), "assign"), null != e && h.push(e);
      return g.apply([], h);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    proxy: function (a, b) {
      var c, d, e;
      if ("string" == typeof b && (c = cc11001100_hook("c", a[b], "assign"), b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", c, "assign")), r.isFunction(a)) return d = cc11001100_hook("d", f.call(arguments, 2), "assign"), e = cc11001100_hook("e", function () {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, "assign"), e.guid = cc11001100_hook("e.guid", a.guid = cc11001100_hook("a.guid", a.guid || r.guid++, "assign"), "assign"), e;
    },
    now: cc11001100_hook("now", Date.now, "object-key-init"),
    support: cc11001100_hook("support", o, "object-key-init")
  }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = cc11001100_hook("r.fn[Symbol.iterator]", c[Symbol.iterator], "assign")), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = cc11001100_hook("j[\"[object \" + b + \"]\"]", b.toLowerCase(), "assign");
  });
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", !!a && "length" in a && a.length, "var-init"),
      c = cc11001100_hook("c", r.type(a), "var-init");
    return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }
  var x = cc11001100_hook("x", function (a) {
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
      y = cc11001100_hook("y", ha(), "var-init"),
      z = cc11001100_hook("z", ha(), "var-init"),
      A = cc11001100_hook("A", ha(), "var-init"),
      B = function (a, b) {
        return a === b && (l = cc11001100_hook("l", !0, "assign")), 0;
      },
      C = cc11001100_hook("C", {}.hasOwnProperty, "var-init"),
      D = cc11001100_hook("D", [], "var-init"),
      E = cc11001100_hook("E", D.pop, "var-init"),
      F = cc11001100_hook("F", D.push, "var-init"),
      G = cc11001100_hook("G", D.push, "var-init"),
      H = cc11001100_hook("H", D.slice, "var-init"),
      I = function (a, b) {
        for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", a.length, "var-init"); c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      J = cc11001100_hook("J", "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", "var-init"),
      K = cc11001100_hook("K", "[\\x20\\t\\r\\n\\f]", "var-init"),
      L = cc11001100_hook("L", "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", "var-init"),
      M = cc11001100_hook("M", "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", "var-init"),
      N = cc11001100_hook("N", ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", "var-init"),
      O = cc11001100_hook("O", new RegExp(K + "+", "g"), "var-init"),
      P = cc11001100_hook("P", new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), "var-init"),
      Q = cc11001100_hook("Q", new RegExp("^" + K + "*," + K + "*"), "var-init"),
      R = cc11001100_hook("R", new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), "var-init"),
      S = cc11001100_hook("S", new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), "var-init"),
      T = cc11001100_hook("T", new RegExp(N), "var-init"),
      U = cc11001100_hook("U", new RegExp("^" + L + "$"), "var-init"),
      V = cc11001100_hook("V", {
        ID: cc11001100_hook("ID", new RegExp("^#(" + L + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", new RegExp("^\\.(" + L + ")"), "object-key-init"),
        TAG: cc11001100_hook("TAG", new RegExp("^(" + L + "|[*])"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", new RegExp("^" + M), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", new RegExp("^" + N), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), "object-key-init"),
        bool: cc11001100_hook("bool", new RegExp("^(?:" + J + ")$", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      W = cc11001100_hook("W", /^(?:input|select|textarea|button)$/i, "var-init"),
      X = cc11001100_hook("X", /^h\d$/i, "var-init"),
      Y = cc11001100_hook("Y", /^[^{]+\{\s*\[native \w/, "var-init"),
      Z = cc11001100_hook("Z", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      $ = cc11001100_hook("$", /[+~]/, "var-init"),
      _ = cc11001100_hook("_", new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), "var-init"),
      aa = function (a, b, c) {
        var d = cc11001100_hook("d", "0x" + b - 65536, "var-init");
        return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
      },
      ba = cc11001100_hook("ba", /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, "var-init"),
      ca = function (a, b) {
        return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
      },
      da = function () {
        m();
      },
      ea = cc11001100_hook("ea", ta(function (a) {
        return a.disabled === !0 && ("form" in a || "label" in a);
      }, {
        dir: cc11001100_hook("dir", "parentNode", "object-key-init"),
        next: cc11001100_hook("next", "legend", "object-key-init")
      }), "var-init");
    try {
      G.apply(D = cc11001100_hook("D", H.call(v.childNodes), "assign"), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = cc11001100_hook("G", {
        apply: cc11001100_hook("apply", D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = cc11001100_hook("c", a.length, "var-init"),
            d = cc11001100_hook("d", 0, "var-init");
          while (a[c++] = cc11001100_hook("a[c++]", b[d++], "assign"));
          a.length = cc11001100_hook("a.length", c - 1, "assign");
        }, "object-key-init")
      }, "assign");
    }
    function ga(a, b, d, e) {
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
        s = cc11001100_hook("s", b && b.ownerDocument, "var-init"),
        w = cc11001100_hook("w", b ? b.nodeType : 9, "var-init");
      if (d = cc11001100_hook("d", d || [], "assign"), "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = cc11001100_hook("b", b || n, "assign"), p)) {
        if (11 !== w && (l = cc11001100_hook("l", Z.exec(a), "assign"))) if (f = cc11001100_hook("f", l[1], "assign")) {
          if (9 === w) {
            if (!(j = cc11001100_hook("j", b.getElementById(f), "assign"))) return d;
            if (j.id === f) return d.push(j), d;
          } else if (s && (j = cc11001100_hook("j", s.getElementById(f), "assign")) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
          if ((f = cc11001100_hook("f", l[3], "assign")) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = cc11001100_hook("s", b, "assign"), r = cc11001100_hook("r", a, "assign");else if ("object" !== b.nodeName.toLowerCase()) {
            (k = cc11001100_hook("k", b.getAttribute("id"), "assign")) ? k = cc11001100_hook("k", k.replace(ba, ca), "assign") : b.setAttribute("id", k = cc11001100_hook("k", u, "assign")), o = cc11001100_hook("o", g(a), "assign"), h = cc11001100_hook("h", o.length, "assign");
            while (h--) o[h] = cc11001100_hook("o[h]", "#" + k + " " + sa(o[h]), "assign");
            r = cc11001100_hook("r", o.join(","), "assign"), s = cc11001100_hook("s", $.test(a) && qa(b.parentNode) || b, "assign");
          }
          if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }
      return i(a.replace(P, "$1"), b, d, e);
    }
    function ha() {
      var a = cc11001100_hook("a", [], "var-init");
      function b(c, e) {
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = cc11001100_hook("b[c + \" \"]", e, "assign");
      }
      return b;
    }
    function ia(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a[u] = cc11001100_hook("a[u]", !0, "assign"), a;
    }
    function ja(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", n.createElement("fieldset"), "var-init");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = cc11001100_hook("b", null, "assign");
      }
    }
    function ka(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", a.split("|"), "var-init"),
        e = cc11001100_hook("e", c.length, "var-init");
      while (e--) d.attrHandle[c[e]] = cc11001100_hook("d.attrHandle[c[e]]", b, "assign");
    }
    function la(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", b && a, "var-init"),
        d = cc11001100_hook("d", c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex, "var-init");
      if (d) return d;
      if (c) while (c = cc11001100_hook("c", c.nextSibling, "assign")) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      cc11001100_hook("a", a, "function-parameter");
      return function (b) {
        var c = cc11001100_hook("c", b.nodeName.toLowerCase(), "var-init");
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      cc11001100_hook("a", a, "function-parameter");
      return function (b) {
        var c = cc11001100_hook("c", b.nodeName.toLowerCase(), "var-init");
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      cc11001100_hook("a", a, "function-parameter");
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }
    function pa(a) {
      cc11001100_hook("a", a, "function-parameter");
      return ia(function (b) {
        return b = cc11001100_hook("b", +b, "assign"), ia(function (c, d) {
          var e,
            f = cc11001100_hook("f", a([], c.length, b), "var-init"),
            g = cc11001100_hook("g", f.length, "var-init");
          while (g--) c[e = cc11001100_hook("e", f[g], "assign")] && (c[e] = cc11001100_hook("c[e]", !(d[e] = cc11001100_hook("d[e]", c[e], "assign")), "assign"));
        });
      });
    }
    function qa(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    c = cc11001100_hook("c", ga.support = cc11001100_hook("ga.support", {}, "assign"), "assign"), f = cc11001100_hook("f", ga.isXML = cc11001100_hook("ga.isXML", function (a) {
      var b = cc11001100_hook("b", a && (a.ownerDocument || a).documentElement, "var-init");
      return !!b && "HTML" !== b.nodeName;
    }, "assign"), "assign"), m = cc11001100_hook("m", ga.setDocument = cc11001100_hook("ga.setDocument", function (a) {
      var b,
        e,
        g = cc11001100_hook("g", a ? a.ownerDocument || a : v, "var-init");
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = cc11001100_hook("n", g, "assign"), o = cc11001100_hook("o", n.documentElement, "assign"), p = cc11001100_hook("p", !f(n), "assign"), v !== n && (e = cc11001100_hook("e", n.defaultView, "assign")) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = cc11001100_hook("c.attributes", ja(function (a) {
        return a.className = cc11001100_hook("a.className", "i", "assign"), !a.getAttribute("className");
      }), "assign"), c.getElementsByTagName = cc11001100_hook("c.getElementsByTagName", ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), "assign"), c.getElementsByClassName = cc11001100_hook("c.getElementsByClassName", Y.test(n.getElementsByClassName), "assign"), c.getById = cc11001100_hook("c.getById", ja(function (a) {
        return o.appendChild(a).id = cc11001100_hook("o.appendChild(a).id", u, "assign"), !n.getElementsByName || !n.getElementsByName(u).length;
      }), "assign"), c.getById ? (d.filter.ID = cc11001100_hook("d.filter.ID", function (a) {
        var b = cc11001100_hook("b", a.replace(_, aa), "var-init");
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }, "assign"), d.find.ID = cc11001100_hook("d.find.ID", function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = cc11001100_hook("c", b.getElementById(a), "var-init");
          return c ? [c] : [];
        }
      }, "assign")) : (d.filter.ID = cc11001100_hook("d.filter.ID", function (a) {
        var b = cc11001100_hook("b", a.replace(_, aa), "var-init");
        return function (a) {
          var c = cc11001100_hook("c", "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"), "var-init");
          return c && c.value === b;
        };
      }, "assign"), d.find.ID = cc11001100_hook("d.find.ID", function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
            d,
            e,
            f = cc11001100_hook("f", b.getElementById(a), "var-init");
          if (f) {
            if (c = cc11001100_hook("c", f.getAttributeNode("id"), "assign"), c && c.value === a) return [f];
            e = cc11001100_hook("e", b.getElementsByName(a), "assign"), d = cc11001100_hook("d", 0, "assign");
            while (f = cc11001100_hook("f", e[d++], "assign")) if (c = cc11001100_hook("c", f.getAttributeNode("id"), "assign"), c && c.value === a) return [f];
          }
          return [];
        }
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
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, "assign"), r = cc11001100_hook("r", [], "assign"), q = cc11001100_hook("q", [], "assign"), (c.qsa = cc11001100_hook("c.qsa", Y.test(n.querySelectorAll), "assign")) && (ja(function (a) {
        o.appendChild(a).innerHTML = cc11001100_hook("o.appendChild(a).innerHTML", "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", "assign"), a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = cc11001100_hook("a.innerHTML", "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>", "assign");
        var b = cc11001100_hook("b", n.createElement("input"), "var-init");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = cc11001100_hook("o.appendChild(a).disabled", !0, "assign"), 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = cc11001100_hook("c.matchesSelector", Y.test(s = cc11001100_hook("s", o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector, "assign")), "assign")) && ja(function (a) {
        c.disconnectedMatch = cc11001100_hook("c.disconnectedMatch", s.call(a, "*"), "assign"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = cc11001100_hook("q", q.length && new RegExp(q.join("|")), "assign"), r = cc11001100_hook("r", r.length && new RegExp(r.join("|")), "assign"), b = cc11001100_hook("b", Y.test(o.compareDocumentPosition), "assign"), t = cc11001100_hook("t", b || Y.test(o.contains) ? function (a, b) {
        var c = cc11001100_hook("c", 9 === a.nodeType ? a.documentElement : a, "var-init"),
          d = cc11001100_hook("d", b && b.parentNode, "var-init");
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = cc11001100_hook("b", b.parentNode, "assign")) if (b === a) return !0;
        return !1;
      }, "assign"), B = cc11001100_hook("B", b ? function (a, b) {
        if (a === b) return l = cc11001100_hook("l", !0, "assign"), 0;
        var d = cc11001100_hook("d", !a.compareDocumentPosition - !b.compareDocumentPosition, "var-init");
        return d ? d : (d = cc11001100_hook("d", (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, "assign"), 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = cc11001100_hook("l", !0, "assign"), 0;
        var c,
          d = cc11001100_hook("d", 0, "var-init"),
          e = cc11001100_hook("e", a.parentNode, "var-init"),
          f = cc11001100_hook("f", b.parentNode, "var-init"),
          g = cc11001100_hook("g", [a], "var-init"),
          h = cc11001100_hook("h", [b], "var-init");
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
        if (e === f) return la(a, b);
        c = cc11001100_hook("c", a, "assign");
        while (c = cc11001100_hook("c", c.parentNode, "assign")) g.unshift(c);
        c = cc11001100_hook("c", b, "assign");
        while (c = cc11001100_hook("c", c.parentNode, "assign")) h.unshift(c);
        while (g[d] === h[d]) d++;
        return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, "assign"), n) : n;
    }, "assign"), "assign"), ga.matches = cc11001100_hook("ga.matches", function (a, b) {
      return ga(a, null, null, b);
    }, "assign"), ga.matchesSelector = cc11001100_hook("ga.matchesSelector", function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = cc11001100_hook("b", b.replace(S, "='$1']"), "assign"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = cc11001100_hook("d", s.call(a, b), "var-init");
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return ga(b, n, null, [a]).length > 0;
    }, "assign"), ga.contains = cc11001100_hook("ga.contains", function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, "assign"), ga.attr = cc11001100_hook("ga.attr", function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = cc11001100_hook("e", d.attrHandle[b.toLowerCase()], "var-init"),
        f = cc11001100_hook("f", e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0, "var-init");
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = cc11001100_hook("f", a.getAttributeNode(b), "assign")) && f.specified ? f.value : null;
    }, "assign"), ga.escape = cc11001100_hook("ga.escape", function (a) {
      return (a + "").replace(ba, ca);
    }, "assign"), ga.error = cc11001100_hook("ga.error", function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, "assign"), ga.uniqueSort = cc11001100_hook("ga.uniqueSort", function (a) {
      var b,
        d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", 0, "var-init");
      if (l = cc11001100_hook("l", !c.detectDuplicates, "assign"), k = cc11001100_hook("k", !c.sortStable && a.slice(0), "assign"), a.sort(B), l) {
        while (b = cc11001100_hook("b", a[f++], "assign")) b === a[f] && (e = cc11001100_hook("e", d.push(f), "assign"));
        while (e--) a.splice(d[e], 1);
      }
      return k = cc11001100_hook("k", null, "assign"), a;
    }, "assign"), e = cc11001100_hook("e", ga.getText = cc11001100_hook("ga.getText", function (a) {
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
    }, "assign"), "assign"), d = cc11001100_hook("d", ga.selectors = cc11001100_hook("ga.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", ia, "object-key-init"),
      match: cc11001100_hook("match", V, "object-key-init"),
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
          return a[1] = cc11001100_hook("a[1]", a[1].replace(_, aa), "assign"), a[3] = cc11001100_hook("a[3]", (a[3] || a[4] || a[5] || "").replace(_, aa), "assign"), "~=" === a[2] && (a[3] = cc11001100_hook("a[3]", " " + a[3] + " ", "assign")), a.slice(0, 4);
        },
        CHILD: function (a) {
          return a[1] = cc11001100_hook("a[1]", a[1].toLowerCase(), "assign"), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = cc11001100_hook("a[4]", +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), "assign"), a[5] = cc11001100_hook("a[5]", +(a[7] + a[8] || "odd" === a[3]), "assign")) : a[3] && ga.error(a[0]), a;
        },
        PSEUDO: function (a) {
          var b,
            c = cc11001100_hook("c", !a[6] && a[2], "var-init");
          return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = cc11001100_hook("a[2]", a[4] || a[5] || "", "assign") : c && T.test(c) && (b = cc11001100_hook("b", g(c, !0), "assign")) && (b = cc11001100_hook("b", c.indexOf(")", c.length - b) - c.length, "assign")) && (a[0] = cc11001100_hook("a[0]", a[0].slice(0, b), "assign"), a[2] = cc11001100_hook("a[2]", c.slice(0, b), "assign")), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function (a) {
          var b = cc11001100_hook("b", a.replace(_, aa).toLowerCase(), "var-init");
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function (a) {
          var b = cc11001100_hook("b", y[a + " "], "var-init");
          return b || (b = cc11001100_hook("b", new RegExp("(^|" + K + ")" + a + "(" + K + "|$)"), "assign")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = cc11001100_hook("e", ga.attr(d, a), "var-init");
            return null == e ? "!=" === b : !b || (e += cc11001100_hook("e", "", "assign"), "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
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
            e = cc11001100_hook("e", d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a), "var-init");
          return e[u] ? e(b) : e.length > 1 ? (c = cc11001100_hook("c", [a, a, "", b], "assign"), d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
              f = cc11001100_hook("f", e(a, b), "var-init"),
              g = cc11001100_hook("g", f.length, "var-init");
            while (g--) d = cc11001100_hook("d", I(a, f[g]), "assign"), a[d] = cc11001100_hook("a[d]", !(c[d] = cc11001100_hook("c[d]", f[g], "assign")), "assign");
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", ia(function (a) {
          var b = cc11001100_hook("b", [], "var-init"),
            c = cc11001100_hook("c", [], "var-init"),
            d = cc11001100_hook("d", h(a.replace(P, "$1")), "var-init");
          return d[u] ? ia(function (a, b, c, e) {
            var f,
              g = cc11001100_hook("g", d(a, null, e, []), "var-init"),
              h = cc11001100_hook("h", a.length, "var-init");
            while (h--) (f = cc11001100_hook("f", g[h], "assign")) && (a[h] = cc11001100_hook("a[h]", !(b[h] = cc11001100_hook("b[h]", f, "assign")), "assign"));
          }) : function (a, e, f) {
            return b[0] = cc11001100_hook("b[0]", a, "assign"), d(b, null, f, c), b[0] = cc11001100_hook("b[0]", null, "assign"), !c.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", ia(function (a) {
          return a = cc11001100_hook("a", a.replace(_, aa), "assign"), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = cc11001100_hook("a", a.replace(_, aa).toLowerCase(), "assign"), function (b) {
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
        enabled: cc11001100_hook("enabled", oa(!1), "object-key-init"),
        disabled: cc11001100_hook("disabled", oa(!0), "object-key-init"),
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
          return X.test(a.nodeName);
        },
        input: function (a) {
          return W.test(a.nodeName);
        },
        button: function (a) {
          var b = cc11001100_hook("b", a.nodeName.toLowerCase(), "var-init");
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = cc11001100_hook("b", a.getAttribute("type"), "assign")) || "text" === b.toLowerCase());
        },
        first: cc11001100_hook("first", pa(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", pa(function (a, b) {
          return [b - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), "object-key-init"),
        even: cc11001100_hook("even", pa(function (a, b) {
          for (var c = cc11001100_hook("c", 0, "var-init"); c < b; c += cc11001100_hook("c", 2, "assign")) a.push(c);
          return a;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", pa(function (a, b) {
          for (var c = cc11001100_hook("c", 1, "var-init"); c < b; c += cc11001100_hook("c", 2, "assign")) a.push(c);
          return a;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", pa(function (a, b, c) {
          for (var d = cc11001100_hook("d", c < 0 ? c + b : c, "var-init"); --d >= 0;) a.push(d);
          return a;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", pa(function (a, b, c) {
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
    }) d.pseudos[b] = cc11001100_hook("d.pseudos[b]", ma(b), "assign");
    for (b in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !0, "object-key-init")
    }) d.pseudos[b] = cc11001100_hook("d.pseudos[b]", na(b), "assign");
    function ra() {}
    ra.prototype = cc11001100_hook("ra.prototype", d.filters = cc11001100_hook("d.filters", d.pseudos, "assign"), "assign"), d.setFilters = cc11001100_hook("d.setFilters", new ra(), "assign"), g = cc11001100_hook("g", ga.tokenize = cc11001100_hook("ga.tokenize", function (a, b) {
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
        c && !(e = cc11001100_hook("e", Q.exec(h), "assign")) || (e && (h = cc11001100_hook("h", h.slice(e[0].length) || h, "assign")), i.push(f = cc11001100_hook("f", [], "assign"))), c = cc11001100_hook("c", !1, "assign"), (e = cc11001100_hook("e", R.exec(h), "assign")) && (c = cc11001100_hook("c", e.shift(), "assign"), f.push({
          value: cc11001100_hook("value", c, "object-key-init"),
          type: cc11001100_hook("type", e[0].replace(P, " "), "object-key-init")
        }), h = cc11001100_hook("h", h.slice(c.length), "assign"));
        for (g in d.filter) !(e = cc11001100_hook("e", V[g].exec(h), "assign")) || j[g] && !(e = cc11001100_hook("e", j[g](e), "assign")) || (c = cc11001100_hook("c", e.shift(), "assign"), f.push({
          value: cc11001100_hook("value", c, "object-key-init"),
          type: cc11001100_hook("type", g, "object-key-init"),
          matches: cc11001100_hook("matches", e, "object-key-init")
        }), h = cc11001100_hook("h", h.slice(c.length), "assign"));
        if (!c) break;
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    }, "assign"), "assign");
    function sa(a) {
      cc11001100_hook("a", a, "function-parameter");
      for (var b = cc11001100_hook("b", 0, "var-init"), c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "", "var-init"); b < c; b++) d += cc11001100_hook("d", a[b].value, "assign");
      return d;
    }
    function ta(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      var d = cc11001100_hook("d", b.dir, "var-init"),
        e = cc11001100_hook("e", b.next, "var-init"),
        f = cc11001100_hook("f", e || d, "var-init"),
        g = cc11001100_hook("g", c && "parentNode" === f, "var-init"),
        h = cc11001100_hook("h", x++, "var-init");
      return b.first ? function (b, c, e) {
        while (b = cc11001100_hook("b", b[d], "assign")) if (1 === b.nodeType || g) return a(b, c, e);
        return !1;
      } : function (b, c, i) {
        var j,
          k,
          l,
          m = cc11001100_hook("m", [w, h], "var-init");
        if (i) {
          while (b = cc11001100_hook("b", b[d], "assign")) if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
        } else while (b = cc11001100_hook("b", b[d], "assign")) if (1 === b.nodeType || g) if (l = cc11001100_hook("l", b[u] || (b[u] = cc11001100_hook("b[u]", {}, "assign")), "assign"), k = cc11001100_hook("k", l[b.uniqueID] || (l[b.uniqueID] = cc11001100_hook("l[b.uniqueID]", {}, "assign")), "assign"), e && e === b.nodeName.toLowerCase()) b = cc11001100_hook("b", b[d] || b, "assign");else {
          if ((j = cc11001100_hook("j", k[f], "assign")) && j[0] === w && j[1] === h) return m[2] = cc11001100_hook("m[2]", j[2], "assign");
          if (k[f] = cc11001100_hook("k[f]", m, "assign"), m[2] = cc11001100_hook("m[2]", a(b, c, i), "assign")) return !0;
        }
        return !1;
      };
    }
    function ua(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a.length > 1 ? function (b, c, d) {
        var e = cc11001100_hook("e", a.length, "var-init");
        while (e--) if (!a[e](b, c, d)) return !1;
        return !0;
      } : a[0];
    }
    function va(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      for (var d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", b.length, "var-init"); d < e; d++) ga(a, b[d], c);
      return c;
    }
    function wa(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      for (var f, g = cc11001100_hook("g", [], "var-init"), h = cc11001100_hook("h", 0, "var-init"), i = cc11001100_hook("i", a.length, "var-init"), j = cc11001100_hook("j", null != b, "var-init"); h < i; h++) (f = cc11001100_hook("f", a[h], "assign")) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g;
    }
    function xa(a, b, c, d, e, f) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      return d && !d[u] && (d = cc11001100_hook("d", xa(d), "assign")), e && !e[u] && (e = cc11001100_hook("e", xa(e, f), "assign")), ia(function (f, g, h, i) {
        var j,
          k,
          l,
          m = cc11001100_hook("m", [], "var-init"),
          n = cc11001100_hook("n", [], "var-init"),
          o = cc11001100_hook("o", g.length, "var-init"),
          p = cc11001100_hook("p", f || va(b || "*", h.nodeType ? [h] : h, []), "var-init"),
          q = cc11001100_hook("q", !a || !f && b ? p : wa(p, m, a, h, i), "var-init"),
          r = cc11001100_hook("r", c ? e || (f ? a : o || d) ? [] : g : q, "var-init");
        if (c && c(q, r, h, i), d) {
          j = cc11001100_hook("j", wa(r, n), "assign"), d(j, [], h, i), k = cc11001100_hook("k", j.length, "assign");
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
            while (k--) (l = cc11001100_hook("l", r[k], "assign")) && (j = cc11001100_hook("j", e ? I(f, l) : m[k], "assign")) > -1 && (f[j] = cc11001100_hook("f[j]", !(g[j] = cc11001100_hook("g[j]", l, "assign")), "assign"));
          }
        } else r = cc11001100_hook("r", wa(r === g ? r.splice(o, r.length) : r), "assign"), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }
    function ya(a) {
      cc11001100_hook("a", a, "function-parameter");
      for (var b, c, e, f = cc11001100_hook("f", a.length, "var-init"), g = cc11001100_hook("g", d.relative[a[0].type], "var-init"), h = cc11001100_hook("h", g || d.relative[" "], "var-init"), i = cc11001100_hook("i", g ? 1 : 0, "var-init"), k = cc11001100_hook("k", ta(function (a) {
          return a === b;
        }, h, !0), "var-init"), l = cc11001100_hook("l", ta(function (a) {
          return I(b, a) > -1;
        }, h, !0), "var-init"), m = cc11001100_hook("m", [function (a, c, d) {
          var e = cc11001100_hook("e", !g && (d || c !== j) || ((b = cc11001100_hook("b", c, "assign")).nodeType ? k(a, c, d) : l(a, c, d)), "var-init");
          return b = cc11001100_hook("b", null, "assign"), e;
        }], "var-init"); i < f; i++) if (c = cc11001100_hook("c", d.relative[a[i].type], "assign")) m = cc11001100_hook("m", [ta(ua(m), c)], "assign");else {
        if (c = cc11001100_hook("c", d.filter[a[i].type].apply(null, a[i].matches), "assign"), c[u]) {
          for (e = cc11001100_hook("e", ++i, "assign"); e < f; e++) if (d.relative[a[e].type]) break;
          return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
            value: cc11001100_hook("value", " " === a[i - 2].type ? "*" : "", "object-key-init")
          })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = cc11001100_hook("a", a.slice(e), "assign")), e < f && sa(a));
        }
        m.push(c);
      }
      return ua(m);
    }
    function za(a, b) {
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
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = cc11001100_hook("u[s]", E.call(i), "assign"));
              u = cc11001100_hook("u", wa(u), "assign");
            }
            G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
          }
          return k && (w = cc11001100_hook("w", y, "assign"), j = cc11001100_hook("j", v, "assign")), t;
        };
      return c ? ia(f) : f;
    }
    return h = cc11001100_hook("h", ga.compile = cc11001100_hook("ga.compile", function (a, b) {
      var c,
        d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", [], "var-init"),
        f = cc11001100_hook("f", A[a + " "], "var-init");
      if (!f) {
        b || (b = cc11001100_hook("b", g(a), "assign")), c = cc11001100_hook("c", b.length, "assign");
        while (c--) f = cc11001100_hook("f", ya(b[c]), "assign"), f[u] ? d.push(f) : e.push(f);
        f = cc11001100_hook("f", A(a, za(e, d)), "assign"), f.selector = cc11001100_hook("f.selector", a, "assign");
      }
      return f;
    }, "assign"), "assign"), i = cc11001100_hook("i", ga.select = cc11001100_hook("ga.select", function (a, b, c, e) {
      var f,
        i,
        j,
        k,
        l,
        m = cc11001100_hook("m", "function" == typeof a && a, "var-init"),
        n = cc11001100_hook("n", !e && g(a = cc11001100_hook("a", m.selector || a, "assign")), "var-init");
      if (c = cc11001100_hook("c", c || [], "assign"), 1 === n.length) {
        if (i = cc11001100_hook("i", n[0] = cc11001100_hook("n[0]", n[0].slice(0), "assign"), "assign"), i.length > 2 && "ID" === (j = cc11001100_hook("j", i[0], "assign")).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = cc11001100_hook("b", (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], "assign"), !b) return c;
          m && (b = cc11001100_hook("b", b.parentNode, "assign")), a = cc11001100_hook("a", a.slice(i.shift().value.length), "assign");
        }
        f = cc11001100_hook("f", V.needsContext.test(a) ? 0 : i.length, "assign");
        while (f--) {
          if (j = cc11001100_hook("j", i[f], "assign"), d.relative[k = cc11001100_hook("k", j.type, "assign")]) break;
          if ((l = cc11001100_hook("l", d.find[k], "assign")) && (e = cc11001100_hook("e", l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b), "assign"))) {
            if (i.splice(f, 1), a = cc11001100_hook("a", e.length && sa(i), "assign"), !a) return G.apply(c, e), c;
            break;
          }
        }
      }
      return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, "assign"), "assign"), c.sortStable = cc11001100_hook("c.sortStable", u.split("").sort(B).join("") === u, "assign"), c.detectDuplicates = cc11001100_hook("c.detectDuplicates", !!l, "assign"), m(), c.sortDetached = cc11001100_hook("c.sortDetached", ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), "assign"), ja(function (a) {
      return a.innerHTML = cc11001100_hook("a.innerHTML", "<a href='#'></a>", "assign"), "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = cc11001100_hook("a.innerHTML", "<input/>", "assign"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;
      if (!c) return a[b] === !0 ? b.toLowerCase() : (d = cc11001100_hook("d", a.getAttributeNode(b), "assign")) && d.specified ? d.value : null;
    }), ga;
  }(a), "var-init");
  r.find = cc11001100_hook("r.find", x, "assign"), r.expr = cc11001100_hook("r.expr", x.selectors, "assign"), r.expr[":"] = cc11001100_hook("r.expr[\":\"]", r.expr.pseudos, "assign"), r.uniqueSort = cc11001100_hook("r.uniqueSort", r.unique = cc11001100_hook("r.unique", x.uniqueSort, "assign"), "assign"), r.text = cc11001100_hook("r.text", x.getText, "assign"), r.isXMLDoc = cc11001100_hook("r.isXMLDoc", x.isXML, "assign"), r.contains = cc11001100_hook("r.contains", x.contains, "assign"), r.escapeSelector = cc11001100_hook("r.escapeSelector", x.escape, "assign");
  var y = function (a, b, c) {
      var d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", void 0 !== c, "var-init");
      while ((a = cc11001100_hook("a", a[b], "assign")) && 9 !== a.nodeType) if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;
        d.push(a);
      }
      return d;
    },
    z = function (a, b) {
      for (var c = cc11001100_hook("c", [], "var-init"); a; a = cc11001100_hook("a", a.nextSibling, "assign")) 1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    A = cc11001100_hook("A", r.expr.match.needsContext, "var-init");
  function B(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  var C = cc11001100_hook("C", /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, "var-init"),
    D = cc11001100_hook("D", /^.[^:#\[\.,]*$/, "var-init");
  function E(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : D.test(b) ? r.filter(b, a, c) : (b = cc11001100_hook("b", r.filter(b, a), "assign"), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }
  r.filter = cc11001100_hook("r.filter", function (a, b, c) {
    var d = cc11001100_hook("d", b[0], "var-init");
    return c && (a = cc11001100_hook("a", ":not(" + a + ")", "assign")), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, "assign"), r.fn.extend({
    find: function (a) {
      var b,
        c,
        d = cc11001100_hook("d", this.length, "var-init"),
        e = cc11001100_hook("e", this, "var-init");
      if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = cc11001100_hook("b", 0, "assign"); b < d; b++) if (r.contains(e[b], this)) return !0;
      }));
      for (c = cc11001100_hook("c", this.pushStack([]), "assign"), b = cc11001100_hook("b", 0, "assign"); b < d; b++) r.find(a, e[b], c);
      return d > 1 ? r.uniqueSort(c) : c;
    },
    filter: function (a) {
      return this.pushStack(E(this, a || [], !1));
    },
    not: function (a) {
      return this.pushStack(E(this, a || [], !0));
    },
    is: function (a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    }
  });
  var F,
    G = cc11001100_hook("G", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, "var-init"),
    H = cc11001100_hook("H", r.fn.init = cc11001100_hook("r.fn.init", function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = cc11001100_hook("c", c || F, "assign"), "string" == typeof a) {
        if (e = cc11001100_hook("e", "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), "assign"), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = cc11001100_hook("b", b instanceof r ? b[0] : b, "assign"), r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return f = cc11001100_hook("f", d.getElementById(e[2]), "assign"), f && (this[0] = cc11001100_hook("this[0]", f, "assign"), this.length = cc11001100_hook("this.length", 1, "assign")), this;
      }
      return a.nodeType ? (this[0] = cc11001100_hook("this[0]", a, "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
    }, "assign"), "var-init");
  H.prototype = cc11001100_hook("H.prototype", r.fn, "assign"), F = cc11001100_hook("F", r(d), "assign");
  var I = cc11001100_hook("I", /^(?:parents|prev(?:Until|All))/, "var-init"),
    J = cc11001100_hook("J", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  r.fn.extend({
    has: function (a) {
      var b = cc11001100_hook("b", r(a, this), "var-init"),
        c = cc11001100_hook("c", b.length, "var-init");
      return this.filter(function () {
        for (var a = cc11001100_hook("a", 0, "var-init"); a < c; a++) if (r.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      var c,
        d = cc11001100_hook("d", 0, "var-init"),
        e = cc11001100_hook("e", this.length, "var-init"),
        f = cc11001100_hook("f", [], "var-init"),
        g = cc11001100_hook("g", "string" != typeof a && r(a), "var-init");
      if (!A.test(a)) for (; d < e; d++) for (c = cc11001100_hook("c", this[d], "assign"); c && c !== b; c = cc11001100_hook("c", c.parentNode, "assign")) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
        f.push(c);
        break;
      }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    },
    index: function (a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });
  function K(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    while ((a = cc11001100_hook("a", a[b], "assign")) && 1 !== a.nodeType);
    return a;
  }
  r.each({
    parent: function (a) {
      var b = cc11001100_hook("b", a.parentNode, "var-init");
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function (a) {
      return y(a, "parentNode");
    },
    parentsUntil: function (a, b, c) {
      return y(a, "parentNode", c);
    },
    next: function (a) {
      return K(a, "nextSibling");
    },
    prev: function (a) {
      return K(a, "previousSibling");
    },
    nextAll: function (a) {
      return y(a, "nextSibling");
    },
    prevAll: function (a) {
      return y(a, "previousSibling");
    },
    nextUntil: function (a, b, c) {
      return y(a, "nextSibling", c);
    },
    prevUntil: function (a, b, c) {
      return y(a, "previousSibling", c);
    },
    siblings: function (a) {
      return z((a.parentNode || {}).firstChild, a);
    },
    children: function (a) {
      return z(a.firstChild);
    },
    contents: function (a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = cc11001100_hook("a", a.content || a, "assign")), r.merge([], a.childNodes));
    }
  }, function (a, b) {
    r.fn[a] = cc11001100_hook("r.fn[a]", function (c, d) {
      var e = cc11001100_hook("e", r.map(this, b, c), "var-init");
      return "Until" !== a.slice(-5) && (d = cc11001100_hook("d", c, "assign")), d && "string" == typeof d && (e = cc11001100_hook("e", r.filter(d, e), "assign")), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
    }, "assign");
  });
  var L = cc11001100_hook("L", /[^\x20\t\r\n\f]+/g, "var-init");
  function M(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", {}, "var-init");
    return r.each(a.match(L) || [], function (a, c) {
      b[c] = cc11001100_hook("b[c]", !0, "assign");
    }), b;
  }
  r.Callbacks = cc11001100_hook("r.Callbacks", function (a) {
    a = cc11001100_hook("a", "string" == typeof a ? M(a) : r.extend({}, a), "assign");
    var b,
      c,
      d,
      e,
      f = cc11001100_hook("f", [], "var-init"),
      g = cc11001100_hook("g", [], "var-init"),
      h = cc11001100_hook("h", -1, "var-init"),
      i = function () {
        for (e = cc11001100_hook("e", e || a.once, "assign"), d = cc11001100_hook("d", b = cc11001100_hook("b", !0, "assign"), "assign"); g.length; h = cc11001100_hook("h", -1, "assign")) {
          c = cc11001100_hook("c", g.shift(), "assign");
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = cc11001100_hook("h", f.length, "assign"), c = cc11001100_hook("c", !1, "assign"));
        }
        a.memory || (c = cc11001100_hook("c", !1, "assign")), b = cc11001100_hook("b", !1, "assign"), e && (f = cc11001100_hook("f", c ? [] : "", "assign"));
      },
      j = cc11001100_hook("j", {
        add: function () {
          return f && (c && !b && (h = cc11001100_hook("h", f.length - 1, "assign"), g.push(c)), function d(b) {
            r.each(b, function (b, c) {
              r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
            });
          }(arguments), c && !b && i()), this;
        },
        remove: function () {
          return r.each(arguments, function (a, b) {
            var c;
            while ((c = cc11001100_hook("c", r.inArray(b, f, c), "assign")) > -1) f.splice(c, 1), c <= h && h--;
          }), this;
        },
        has: function (a) {
          return a ? r.inArray(a, f) > -1 : f.length > 0;
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
          return e = cc11001100_hook("e", g = cc11001100_hook("g", [], "assign"), "assign"), c || b || (f = cc11001100_hook("f", c = cc11001100_hook("c", "", "assign"), "assign")), this;
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
  }, "assign");
  function N(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function O(a) {
    cc11001100_hook("a", a, "function-parameter");
    throw a;
  }
  function P(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e;
    try {
      a && r.isFunction(e = cc11001100_hook("e", a.promise, "assign")) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = cc11001100_hook("e", a.then, "assign")) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }
  r.extend({
    Deferred: function (b) {
      var c = cc11001100_hook("c", [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]], "var-init"),
        d = cc11001100_hook("d", "pending", "var-init"),
        e = cc11001100_hook("e", {
          state: function () {
            return d;
          },
          always: function () {
            return f.done(arguments).fail(arguments), this;
          },
          "catch": function (a) {
            return e.then(null, a);
          },
          pipe: function () {
            var a = cc11001100_hook("a", arguments, "var-init");
            return r.Deferred(function (b) {
              r.each(c, function (c, d) {
                var e = cc11001100_hook("e", r.isFunction(a[d[4]]) && a[d[4]], "var-init");
                f[d[1]](function () {
                  var a = cc11001100_hook("a", e && e.apply(this, arguments), "var-init");
                  a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
                });
              }), a = cc11001100_hook("a", null, "assign");
            }).promise();
          },
          then: function (b, d, e) {
            var f = cc11001100_hook("f", 0, "var-init");
            function g(b, c, d, e) {
              cc11001100_hook("b", b, "function-parameter");
              cc11001100_hook("c", c, "function-parameter");
              cc11001100_hook("d", d, "function-parameter");
              cc11001100_hook("e", e, "function-parameter");
              return function () {
                var h = cc11001100_hook("h", this, "var-init"),
                  i = cc11001100_hook("i", arguments, "var-init"),
                  j = function () {
                    var a, j;
                    if (!(b < f)) {
                      if (a = cc11001100_hook("a", d.apply(h, i), "assign"), a === c.promise()) throw new TypeError("Thenable self-resolution");
                      j = cc11001100_hook("j", a && ("object" == typeof a || "function" == typeof a) && a.then, "assign"), r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = cc11001100_hook("h", void 0, "assign"), i = cc11001100_hook("i", [a], "assign")), (e || c.resolveWith)(h, i));
                    }
                  },
                  k = cc11001100_hook("k", e ? j : function () {
                    try {
                      j();
                    } catch (a) {
                      r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = cc11001100_hook("h", void 0, "assign"), i = cc11001100_hook("i", [a], "assign")), c.rejectWith(h, i));
                    }
                  }, "var-init");
                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = cc11001100_hook("k.stackTrace", r.Deferred.getStackHook(), "assign")), a.setTimeout(k));
              };
            }
            return r.Deferred(function (a) {
              c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
            }).promise();
          },
          promise: function (a) {
            return null != a ? r.extend(a, e) : e;
          }
        }, "var-init"),
        f = cc11001100_hook("f", {}, "var-init");
      return r.each(c, function (a, b) {
        var g = cc11001100_hook("g", b[2], "var-init"),
          h = cc11001100_hook("h", b[5], "var-init");
        e[b[1]] = cc11001100_hook("e[b[1]]", g.add, "assign"), h && g.add(function () {
          d = cc11001100_hook("d", h, "assign");
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = cc11001100_hook("f[b[0]]", function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, "assign"), f[b[0] + "With"] = cc11001100_hook("f[b[0] + \"With\"]", g.fireWith, "assign");
      }), e.promise(f), b && b.call(f, f), f;
    },
    when: function (a) {
      var b = cc11001100_hook("b", arguments.length, "var-init"),
        c = cc11001100_hook("c", b, "var-init"),
        d = cc11001100_hook("d", Array(c), "var-init"),
        e = cc11001100_hook("e", f.call(arguments), "var-init"),
        g = cc11001100_hook("g", r.Deferred(), "var-init"),
        h = function (a) {
          return function (c) {
            d[a] = cc11001100_hook("d[a]", this, "assign"), e[a] = cc11001100_hook("e[a]", arguments.length > 1 ? f.call(arguments) : c, "assign"), --b || g.resolveWith(d, e);
          };
        };
      if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
      while (c--) P(e[c], h(c), g.reject);
      return g.promise();
    }
  });
  var Q = cc11001100_hook("Q", /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/, "var-init");
  r.Deferred.exceptionHook = cc11001100_hook("r.Deferred.exceptionHook", function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, "assign"), r.readyException = cc11001100_hook("r.readyException", function (b) {
    a.setTimeout(function () {
      throw b;
    });
  }, "assign");
  var R = cc11001100_hook("R", r.Deferred(), "var-init");
  r.fn.ready = cc11001100_hook("r.fn.ready", function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, "assign"), r.extend({
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    ready: function (a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = cc11001100_hook("r.isReady", !0, "assign"), a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
    }
  }), r.ready.then = cc11001100_hook("r.ready.then", R.then, "assign");
  function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }
  "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
  var T = function (a, b, c, d, e, f, g) {
      var h = cc11001100_hook("h", 0, "var-init"),
        i = cc11001100_hook("i", a.length, "var-init"),
        j = cc11001100_hook("j", null == c, "var-init");
      if ("object" === r.type(c)) {
        e = cc11001100_hook("e", !0, "assign");
        for (h in c) T(a, b, h, c[h], !0, f, g);
      } else if (void 0 !== d && (e = cc11001100_hook("e", !0, "assign"), r.isFunction(d) || (g = cc11001100_hook("g", !0, "assign")), j && (g ? (b.call(a, d), b = cc11001100_hook("b", null, "assign")) : (j = cc11001100_hook("j", b, "assign"), b = cc11001100_hook("b", function (a, b, c) {
        return j.call(r(a), c);
      }, "assign"))), b)) for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    U = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function V() {
    this.expando = cc11001100_hook("this.expando", r.expando + V.uid++, "assign");
  }
  V.uid = cc11001100_hook("V.uid", 1, "assign"), V.prototype = cc11001100_hook("V.prototype", {
    cache: function (a) {
      var b = cc11001100_hook("b", a[this.expando], "var-init");
      return b || (b = cc11001100_hook("b", {}, "assign"), U(a) && (a.nodeType ? a[this.expando] = cc11001100_hook("a[this.expando]", b, "assign") : Object.defineProperty(a, this.expando, {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      }))), b;
    },
    set: function (a, b, c) {
      var d,
        e = cc11001100_hook("e", this.cache(a), "var-init");
      if ("string" == typeof b) e[r.camelCase(b)] = cc11001100_hook("e[r.camelCase(b)]", c, "assign");else for (d in b) e[r.camelCase(d)] = cc11001100_hook("e[r.camelCase(d)]", b[d], "assign");
      return e;
    },
    get: function (a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    },
    access: function (a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function (a, b) {
      var c,
        d = cc11001100_hook("d", a[this.expando], "var-init");
      if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = cc11001100_hook("b", b.map(r.camelCase), "assign") : (b = cc11001100_hook("b", r.camelCase(b), "assign"), b = cc11001100_hook("b", b in d ? [b] : b.match(L) || [], "assign")), c = cc11001100_hook("c", b.length, "assign");
          while (c--) delete d[b[c]];
        }
        (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = cc11001100_hook("a[this.expando]", void 0, "assign") : delete a[this.expando]);
      }
    },
    hasData: function (a) {
      var b = cc11001100_hook("b", a[this.expando], "var-init");
      return void 0 !== b && !r.isEmptyObject(b);
    }
  }, "assign");
  var W = cc11001100_hook("W", new V(), "var-init"),
    X = cc11001100_hook("X", new V(), "var-init"),
    Y = cc11001100_hook("Y", /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, "var-init"),
    Z = cc11001100_hook("Z", /[A-Z]/g, "var-init");
  function $(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
  }
  function _(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d;
    if (void 0 === c && 1 === a.nodeType) if (d = cc11001100_hook("d", "data-" + b.replace(Z, "-$&").toLowerCase(), "assign"), c = cc11001100_hook("c", a.getAttribute(d), "assign"), "string" == typeof c) {
      try {
        c = cc11001100_hook("c", $(c), "assign");
      } catch (e) {}
      X.set(a, b, c);
    } else c = cc11001100_hook("c", void 0, "assign");
    return c;
  }
  r.extend({
    hasData: function (a) {
      return X.hasData(a) || W.hasData(a);
    },
    data: function (a, b, c) {
      return X.access(a, b, c);
    },
    removeData: function (a, b) {
      X.remove(a, b);
    },
    _data: function (a, b, c) {
      return W.access(a, b, c);
    },
    _removeData: function (a, b) {
      W.remove(a, b);
    }
  }), r.fn.extend({
    data: function (a, b) {
      var c,
        d,
        e,
        f = cc11001100_hook("f", this[0], "var-init"),
        g = cc11001100_hook("g", f && f.attributes, "var-init");
      if (void 0 === a) {
        if (this.length && (e = cc11001100_hook("e", X.get(f), "assign"), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = cc11001100_hook("c", g.length, "assign");
          while (c--) g[c] && (d = cc11001100_hook("d", g[c].name, "assign"), 0 === d.indexOf("data-") && (d = cc11001100_hook("d", r.camelCase(d.slice(5)), "assign"), _(f, d, e[d])));
          W.set(f, "hasDataAttrs", !0);
        }
        return e;
      }
      return "object" == typeof a ? this.each(function () {
        X.set(this, a);
      }) : T(this, function (b) {
        var c;
        if (f && void 0 === b) {
          if (c = cc11001100_hook("c", X.get(f, a), "assign"), void 0 !== c) return c;
          if (c = cc11001100_hook("c", _(f, a), "assign"), void 0 !== c) return c;
        } else this.each(function () {
          X.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function (a) {
      return this.each(function () {
        X.remove(this, a);
      });
    }
  }), r.extend({
    queue: function (a, b, c) {
      var d;
      if (a) return b = cc11001100_hook("b", (b || "fx") + "queue", "assign"), d = cc11001100_hook("d", W.get(a, b), "assign"), c && (!d || Array.isArray(c) ? d = cc11001100_hook("d", W.access(a, b, r.makeArray(c)), "assign") : d.push(c)), d || [];
    },
    dequeue: function (a, b) {
      b = cc11001100_hook("b", b || "fx", "assign");
      var c = cc11001100_hook("c", r.queue(a, b), "var-init"),
        d = cc11001100_hook("d", c.length, "var-init"),
        e = cc11001100_hook("e", c.shift(), "var-init"),
        f = cc11001100_hook("f", r._queueHooks(a, b), "var-init"),
        g = function () {
          r.dequeue(a, b);
        };
      "inprogress" === e && (e = cc11001100_hook("e", c.shift(), "assign"), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function (a, b) {
      var c = cc11001100_hook("c", b + "queueHooks", "var-init");
      return W.get(a, c) || W.access(a, c, {
        empty: cc11001100_hook("empty", r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c]);
        }), "object-key-init")
      });
    }
  }), r.fn.extend({
    queue: function (a, b) {
      var c = cc11001100_hook("c", 2, "var-init");
      return "string" != typeof a && (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", "fx", "assign"), c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = cc11001100_hook("c", r.queue(this, a, b), "var-init");
        r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    },
    dequeue: function (a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", []);
    },
    promise: function (a, b) {
      var c,
        d = cc11001100_hook("d", 1, "var-init"),
        e = cc11001100_hook("e", r.Deferred(), "var-init"),
        f = cc11001100_hook("f", this, "var-init"),
        g = cc11001100_hook("g", this.length, "var-init"),
        h = function () {
          --d || e.resolveWith(f, [f]);
        };
      "string" != typeof a && (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", void 0, "assign")), a = cc11001100_hook("a", a || "fx", "assign");
      while (g--) c = cc11001100_hook("c", W.get(f[g], a + "queueHooks"), "assign"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b);
    }
  });
  var aa = cc11001100_hook("aa", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    ba = cc11001100_hook("ba", new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"), "var-init"),
    ca = cc11001100_hook("ca", ["Top", "Right", "Bottom", "Left"], "var-init"),
    da = function (a, b) {
      return a = cc11001100_hook("a", b || a, "assign"), "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
    },
    ea = function (a, b, c, d) {
      var e,
        f,
        g = cc11001100_hook("g", {}, "var-init");
      for (f in b) g[f] = cc11001100_hook("g[f]", a.style[f], "assign"), a.style[f] = cc11001100_hook("a.style[f]", b[f], "assign");
      e = cc11001100_hook("e", c.apply(a, d || []), "assign");
      for (f in b) a.style[f] = cc11001100_hook("a.style[f]", g[f], "assign");
      return e;
    };
  function fa(a, b, c, d) {
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
        return r.css(a, b, "");
      }, "var-init"),
      i = cc11001100_hook("i", h(), "var-init"),
      j = cc11001100_hook("j", c && c[3] || (r.cssNumber[b] ? "" : "px"), "var-init"),
      k = cc11001100_hook("k", (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b)), "var-init");
    if (k && k[3] !== j) {
      j = cc11001100_hook("j", j || k[3], "assign"), c = cc11001100_hook("c", c || [], "assign"), k = cc11001100_hook("k", +i || 1, "assign");
      do f = cc11001100_hook("f", f || ".5", "assign"), k /= cc11001100_hook("k", f, "assign"), r.style(a, b, k + j); while (f !== (f = cc11001100_hook("f", h() / i, "assign")) && 1 !== f && --g);
    }
    return c && (k = cc11001100_hook("k", +k || +i || 0, "assign"), e = cc11001100_hook("e", c[1] ? k + (c[1] + 1) * c[2] : +c[2], "assign"), d && (d.unit = cc11001100_hook("d.unit", j, "assign"), d.start = cc11001100_hook("d.start", k, "assign"), d.end = cc11001100_hook("d.end", e, "assign"))), e;
  }
  var ga = cc11001100_hook("ga", {}, "var-init");
  function ha(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b,
      c = cc11001100_hook("c", a.ownerDocument, "var-init"),
      d = cc11001100_hook("d", a.nodeName, "var-init"),
      e = cc11001100_hook("e", ga[d], "var-init");
    return e ? e : (b = cc11001100_hook("b", c.body.appendChild(c.createElement(d)), "assign"), e = cc11001100_hook("e", r.css(b, "display"), "assign"), b.parentNode.removeChild(b), "none" === e && (e = cc11001100_hook("e", "block", "assign")), ga[d] = cc11001100_hook("ga[d]", e, "assign"), e);
  }
  function ia(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c, d, e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", a.length, "var-init"); f < g; f++) d = cc11001100_hook("d", a[f], "assign"), d.style && (c = cc11001100_hook("c", d.style.display, "assign"), b ? ("none" === c && (e[f] = cc11001100_hook("e[f]", W.get(d, "display") || null, "assign"), e[f] || (d.style.display = cc11001100_hook("d.style.display", "", "assign"))), "" === d.style.display && da(d) && (e[f] = cc11001100_hook("e[f]", ha(d), "assign"))) : "none" !== c && (e[f] = cc11001100_hook("e[f]", "none", "assign"), W.set(d, "display", c)));
    for (f = cc11001100_hook("f", 0, "assign"); f < g; f++) null != e[f] && (a[f].style.display = cc11001100_hook("a[f].style.display", e[f], "assign"));
    return a;
  }
  r.fn.extend({
    show: function () {
      return ia(this, !0);
    },
    hide: function () {
      return ia(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide();
      });
    }
  });
  var ja = cc11001100_hook("ja", /^(?:checkbox|radio)$/i, "var-init"),
    ka = cc11001100_hook("ka", /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, "var-init"),
    la = cc11001100_hook("la", /^$|\/(?:java|ecma)script/i, "var-init"),
    ma = cc11001100_hook("ma", {
      option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
      thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
      col: cc11001100_hook("col", [2, "<table><colgroup>", "</colgroup></table>"], "object-key-init"),
      tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
      td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
      _default: cc11001100_hook("_default", [0, "", ""], "object-key-init")
    }, "var-init");
  ma.optgroup = cc11001100_hook("ma.optgroup", ma.option, "assign"), ma.tbody = cc11001100_hook("ma.tbody", ma.tfoot = cc11001100_hook("ma.tfoot", ma.colgroup = cc11001100_hook("ma.colgroup", ma.caption = cc11001100_hook("ma.caption", ma.thead, "assign"), "assign"), "assign"), "assign"), ma.th = cc11001100_hook("ma.th", ma.td, "assign");
  function na(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c;
    return c = cc11001100_hook("c", "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], "assign"), void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
  }
  function oa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", a.length, "var-init"); c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
  }
  var pa = cc11001100_hook("pa", /<|&#?\w+;/, "var-init");
  function qa(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var f, g, h, i, j, k, l = cc11001100_hook("l", b.createDocumentFragment(), "var-init"), m = cc11001100_hook("m", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"), o = cc11001100_hook("o", a.length, "var-init"); n < o; n++) if (f = cc11001100_hook("f", a[n], "assign"), f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
      g = cc11001100_hook("g", g || l.appendChild(b.createElement("div")), "assign"), h = cc11001100_hook("h", (ka.exec(f) || ["", ""])[1].toLowerCase(), "assign"), i = cc11001100_hook("i", ma[h] || ma._default, "assign"), g.innerHTML = cc11001100_hook("g.innerHTML", i[1] + r.htmlPrefilter(f) + i[2], "assign"), k = cc11001100_hook("k", i[0], "assign");
      while (k--) g = cc11001100_hook("g", g.lastChild, "assign");
      r.merge(m, g.childNodes), g = cc11001100_hook("g", l.firstChild, "assign"), g.textContent = cc11001100_hook("g.textContent", "", "assign");
    } else m.push(b.createTextNode(f));
    l.textContent = cc11001100_hook("l.textContent", "", "assign"), n = cc11001100_hook("n", 0, "assign");
    while (f = cc11001100_hook("f", m[n++], "assign")) if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = cc11001100_hook("j", r.contains(f.ownerDocument, f), "assign"), g = cc11001100_hook("g", na(l.appendChild(f), "script"), "assign"), j && oa(g), c) {
      k = cc11001100_hook("k", 0, "assign");
      while (f = cc11001100_hook("f", g[k++], "assign")) la.test(f.type || "") && c.push(f);
    }
    return l;
  }
  !function () {
    var a = cc11001100_hook("a", d.createDocumentFragment(), "var-init"),
      b = cc11001100_hook("b", a.appendChild(d.createElement("div")), "var-init"),
      c = cc11001100_hook("c", d.createElement("input"), "var-init");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = cc11001100_hook("o.checkClone", b.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), b.innerHTML = cc11001100_hook("b.innerHTML", "<textarea>x</textarea>", "assign"), o.noCloneChecked = cc11001100_hook("o.noCloneChecked", !!b.cloneNode(!0).lastChild.defaultValue, "assign");
  }();
  var ra = cc11001100_hook("ra", d.documentElement, "var-init"),
    sa = cc11001100_hook("sa", /^key/, "var-init"),
    ta = cc11001100_hook("ta", /^(?:mouse|pointer|contextmenu|drag|drop)|click/, "var-init"),
    ua = cc11001100_hook("ua", /^([^.]*)(?:\.(.+)|)/, "var-init");
  function va() {
    return !0;
  }
  function wa() {
    return !1;
  }
  function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ya(a, b, c, d, e, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = cc11001100_hook("d", d || c, "assign"), c = cc11001100_hook("c", void 0, "assign"));
      for (h in b) ya(a, h, c, d, b[h], f);
      return a;
    }
    if (null == d && null == e ? (e = cc11001100_hook("e", c, "assign"), d = cc11001100_hook("d", c = cc11001100_hook("c", void 0, "assign"), "assign")) : null == e && ("string" == typeof c ? (e = cc11001100_hook("e", d, "assign"), d = cc11001100_hook("d", void 0, "assign")) : (e = cc11001100_hook("e", d, "assign"), d = cc11001100_hook("d", c, "assign"), c = cc11001100_hook("c", void 0, "assign"))), e === !1) e = cc11001100_hook("e", wa, "assign");else if (!e) return a;
    return 1 === f && (g = cc11001100_hook("g", e, "assign"), e = cc11001100_hook("e", function (a) {
      return r().off(a), g.apply(this, arguments);
    }, "assign"), e.guid = cc11001100_hook("e.guid", g.guid || (g.guid = cc11001100_hook("g.guid", r.guid++, "assign")), "assign")), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }
  r.event = cc11001100_hook("r.event", {
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
        n,
        o,
        p,
        q = cc11001100_hook("q", W.get(a), "var-init");
      if (q) {
        c.handler && (f = cc11001100_hook("f", c, "assign"), c = cc11001100_hook("c", f.handler, "assign"), e = cc11001100_hook("e", f.selector, "assign")), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = cc11001100_hook("c.guid", r.guid++, "assign")), (i = cc11001100_hook("i", q.events, "assign")) || (i = cc11001100_hook("i", q.events = cc11001100_hook("q.events", {}, "assign"), "assign")), (g = cc11001100_hook("g", q.handle, "assign")) || (g = cc11001100_hook("g", q.handle = cc11001100_hook("q.handle", function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }, "assign"), "assign")), b = cc11001100_hook("b", (b || "").match(L) || [""], "assign"), j = cc11001100_hook("j", b.length, "assign");
        while (j--) h = cc11001100_hook("h", ua.exec(b[j]) || [], "assign"), n = cc11001100_hook("n", p = cc11001100_hook("p", h[1], "assign"), "assign"), o = cc11001100_hook("o", (h[2] || "").split(".").sort(), "assign"), n && (l = cc11001100_hook("l", r.event.special[n] || {}, "assign"), n = cc11001100_hook("n", (e ? l.delegateType : l.bindType) || n, "assign"), l = cc11001100_hook("l", r.event.special[n] || {}, "assign"), k = cc11001100_hook("k", r.extend({
          type: cc11001100_hook("type", n, "object-key-init"),
          origType: cc11001100_hook("origType", p, "object-key-init"),
          data: cc11001100_hook("data", d, "object-key-init"),
          handler: cc11001100_hook("handler", c, "object-key-init"),
          guid: cc11001100_hook("guid", c.guid, "object-key-init"),
          selector: cc11001100_hook("selector", e, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", e && r.expr.match.needsContext.test(e), "object-key-init"),
          namespace: cc11001100_hook("namespace", o.join("."), "object-key-init")
        }, f), "assign"), (m = cc11001100_hook("m", i[n], "assign")) || (m = cc11001100_hook("m", i[n] = cc11001100_hook("i[n]", [], "assign"), "assign"), m.delegateCount = cc11001100_hook("m.delegateCount", 0, "assign"), l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = cc11001100_hook("k.handler.guid", c.guid, "assign"))), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = cc11001100_hook("r.event.global[n]", !0, "assign"));
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
        n,
        o,
        p,
        q = cc11001100_hook("q", W.hasData(a) && W.get(a), "var-init");
      if (q && (i = cc11001100_hook("i", q.events, "assign"))) {
        b = cc11001100_hook("b", (b || "").match(L) || [""], "assign"), j = cc11001100_hook("j", b.length, "assign");
        while (j--) if (h = cc11001100_hook("h", ua.exec(b[j]) || [], "assign"), n = cc11001100_hook("n", p = cc11001100_hook("p", h[1], "assign"), "assign"), o = cc11001100_hook("o", (h[2] || "").split(".").sort(), "assign"), n) {
          l = cc11001100_hook("l", r.event.special[n] || {}, "assign"), n = cc11001100_hook("n", (d ? l.delegateType : l.bindType) || n, "assign"), m = cc11001100_hook("m", i[n] || [], "assign"), h = cc11001100_hook("h", h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), g = cc11001100_hook("g", f = cc11001100_hook("f", m.length, "assign"), "assign");
          while (f--) k = cc11001100_hook("k", m[f], "assign"), !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
          g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
        } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      var b = cc11001100_hook("b", r.event.fix(a), "var-init"),
        c,
        d,
        e,
        f,
        g,
        h,
        i = cc11001100_hook("i", new Array(arguments.length), "var-init"),
        j = cc11001100_hook("j", (W.get(this, "events") || {})[b.type] || [], "var-init"),
        k = cc11001100_hook("k", r.event.special[b.type] || {}, "var-init");
      for (i[0] = cc11001100_hook("i[0]", b, "assign"), c = cc11001100_hook("c", 1, "assign"); c < arguments.length; c++) i[c] = cc11001100_hook("i[c]", arguments[c], "assign");
      if (b.delegateTarget = cc11001100_hook("b.delegateTarget", this, "assign"), !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = cc11001100_hook("h", r.event.handlers.call(this, b, j), "assign"), c = cc11001100_hook("c", 0, "assign");
        while ((f = cc11001100_hook("f", h[c++], "assign")) && !b.isPropagationStopped()) {
          b.currentTarget = cc11001100_hook("b.currentTarget", f.elem, "assign"), d = cc11001100_hook("d", 0, "assign");
          while ((g = cc11001100_hook("g", f.handlers[d++], "assign")) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = cc11001100_hook("b.handleObj", g, "assign"), b.data = cc11001100_hook("b.data", g.data, "assign"), e = cc11001100_hook("e", ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), "assign"), void 0 !== e && (b.result = cc11001100_hook("b.result", e, "assign")) === !1 && (b.preventDefault(), b.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = cc11001100_hook("h", [], "var-init"),
        i = cc11001100_hook("i", b.delegateCount, "var-init"),
        j = cc11001100_hook("j", a.target, "var-init");
      if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = cc11001100_hook("j", j.parentNode || this, "assign")) if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
        for (f = cc11001100_hook("f", [], "assign"), g = cc11001100_hook("g", {}, "assign"), c = cc11001100_hook("c", 0, "assign"); c < i; c++) d = cc11001100_hook("d", b[c], "assign"), e = cc11001100_hook("e", d.selector + " ", "assign"), void 0 === g[e] && (g[e] = cc11001100_hook("g[e]", d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length, "assign")), g[e] && f.push(d);
        f.length && h.push({
          elem: cc11001100_hook("elem", j, "object-key-init"),
          handlers: cc11001100_hook("handlers", f, "object-key-init")
        });
      }
      return j = cc11001100_hook("j", this, "assign"), i < b.length && h.push({
        elem: cc11001100_hook("elem", j, "object-key-init"),
        handlers: cc11001100_hook("handlers", b.slice(i), "object-key-init")
      }), h;
    },
    addProp: function (a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        get: cc11001100_hook("get", r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, "object-key-init"),
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", b, "object-key-init")
          });
        }
      });
    },
    fix: function (a) {
      return a[r.expando] ? a : new r.Event(a);
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      focus: {
        trigger: function () {
          if (this !== xa() && this.focus) return this.focus(), !1;
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          if (this === xa() && this.blur) return this.blur(), !1;
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
        },
        _default: function (a) {
          return B(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = cc11001100_hook("a.originalEvent.returnValue", a.result, "assign"));
        }
      }
    }
  }, "assign"), r.removeEvent = cc11001100_hook("r.removeEvent", function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, "assign"), r.Event = cc11001100_hook("r.Event", function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", a, "assign"), this.type = cc11001100_hook("this.type", a.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, "assign"), this.target = cc11001100_hook("this.target", a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, "assign"), this.currentTarget = cc11001100_hook("this.currentTarget", a.currentTarget, "assign"), this.relatedTarget = cc11001100_hook("this.relatedTarget", a.relatedTarget, "assign")) : this.type = cc11001100_hook("this.type", a, "assign"), b && r.extend(this, b), this.timeStamp = cc11001100_hook("this.timeStamp", a && a.timeStamp || r.now(), "assign"), void (this[r.expando] = cc11001100_hook("this[r.expando]", !0, "assign"))) : new r.Event(a, b);
  }, "assign"), r.Event.prototype = cc11001100_hook("r.Event.prototype", {
    constructor: cc11001100_hook("constructor", r.Event, "object-key-init"),
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", wa, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", wa, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", wa, "object-key-init"),
    isSimulated: cc11001100_hook("isSimulated", !1, "object-key-init"),
    preventDefault: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", va, "assign"), a && !this.isSimulated && a.preventDefault();
    },
    stopPropagation: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", va, "assign"), a && !this.isSimulated && a.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", va, "assign"), a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, "assign"), r.each({
    altKey: cc11001100_hook("altKey", !0, "object-key-init"),
    bubbles: cc11001100_hook("bubbles", !0, "object-key-init"),
    cancelable: cc11001100_hook("cancelable", !0, "object-key-init"),
    changedTouches: cc11001100_hook("changedTouches", !0, "object-key-init"),
    ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
    detail: cc11001100_hook("detail", !0, "object-key-init"),
    eventPhase: cc11001100_hook("eventPhase", !0, "object-key-init"),
    metaKey: cc11001100_hook("metaKey", !0, "object-key-init"),
    pageX: cc11001100_hook("pageX", !0, "object-key-init"),
    pageY: cc11001100_hook("pageY", !0, "object-key-init"),
    shiftKey: cc11001100_hook("shiftKey", !0, "object-key-init"),
    view: cc11001100_hook("view", !0, "object-key-init"),
    "char": cc11001100_hook("char", !0, "object-key-init"),
    charCode: cc11001100_hook("charCode", !0, "object-key-init"),
    key: cc11001100_hook("key", !0, "object-key-init"),
    keyCode: cc11001100_hook("keyCode", !0, "object-key-init"),
    button: cc11001100_hook("button", !0, "object-key-init"),
    buttons: cc11001100_hook("buttons", !0, "object-key-init"),
    clientX: cc11001100_hook("clientX", !0, "object-key-init"),
    clientY: cc11001100_hook("clientY", !0, "object-key-init"),
    offsetX: cc11001100_hook("offsetX", !0, "object-key-init"),
    offsetY: cc11001100_hook("offsetY", !0, "object-key-init"),
    pointerId: cc11001100_hook("pointerId", !0, "object-key-init"),
    pointerType: cc11001100_hook("pointerType", !0, "object-key-init"),
    screenX: cc11001100_hook("screenX", !0, "object-key-init"),
    screenY: cc11001100_hook("screenY", !0, "object-key-init"),
    targetTouches: cc11001100_hook("targetTouches", !0, "object-key-init"),
    toElement: cc11001100_hook("toElement", !0, "object-key-init"),
    touches: cc11001100_hook("touches", !0, "object-key-init"),
    which: function (a) {
      var b = cc11001100_hook("b", a.button, "var-init");
      return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    }
  }, r.event.addProp), r.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init"),
    pointerenter: cc11001100_hook("pointerenter", "pointerover", "object-key-init"),
    pointerleave: cc11001100_hook("pointerleave", "pointerout", "object-key-init")
  }, function (a, b) {
    r.event.special[a] = cc11001100_hook("r.event.special[a]", {
      delegateType: cc11001100_hook("delegateType", b, "object-key-init"),
      bindType: cc11001100_hook("bindType", b, "object-key-init"),
      handle: function (a) {
        var c,
          d = cc11001100_hook("d", this, "var-init"),
          e = cc11001100_hook("e", a.relatedTarget, "var-init"),
          f = cc11001100_hook("f", a.handleObj, "var-init");
        return e && (e === d || r.contains(d, e)) || (a.type = cc11001100_hook("a.type", f.origType, "assign"), c = cc11001100_hook("c", f.handler.apply(this, arguments), "assign"), a.type = cc11001100_hook("a.type", b, "assign")), c;
      }
    }, "assign");
  }), r.fn.extend({
    on: function (a, b, c, d) {
      return ya(this, a, b, c, d);
    },
    one: function (a, b, c, d) {
      return ya(this, a, b, c, d, 1);
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = cc11001100_hook("d", a.handleObj, "assign"), r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this;
      }
      return b !== !1 && "function" != typeof b || (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign")), c === !1 && (c = cc11001100_hook("c", wa, "assign")), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    }
  });
  var za = cc11001100_hook("za", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "var-init"),
    Aa = cc11001100_hook("Aa", /<script|<style|<link/i, "var-init"),
    Ba = cc11001100_hook("Ba", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    Ca = cc11001100_hook("Ca", /^true\/(.*)/, "var-init"),
    Da = cc11001100_hook("Da", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init");
  function Ea(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
  }
  function Fa(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.type = cc11001100_hook("a.type", (null !== a.getAttribute("type")) + "/" + a.type, "assign"), a;
  }
  function Ga(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Ca.exec(a.type), "var-init");
    return b ? a.type = cc11001100_hook("a.type", b[1], "assign") : a.removeAttribute("type"), a;
  }
  function Ha(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (W.hasData(a) && (f = cc11001100_hook("f", W.access(a), "assign"), g = cc11001100_hook("g", W.set(b, f), "assign"), j = cc11001100_hook("j", f.events, "assign"))) {
        delete g.handle, g.events = cc11001100_hook("g.events", {}, "assign");
        for (e in j) for (c = cc11001100_hook("c", 0, "assign"), d = cc11001100_hook("d", j[e].length, "assign"); c < d; c++) r.event.add(b, e, j[e][c]);
      }
      X.hasData(a) && (h = cc11001100_hook("h", X.access(a), "assign"), i = cc11001100_hook("i", r.extend({}, h), "assign"), X.set(b, i));
    }
  }
  function Ia(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.nodeName.toLowerCase(), "var-init");
    "input" === c && ja.test(a.type) ? b.checked = cc11001100_hook("b.checked", a.checked, "assign") : "input" !== c && "textarea" !== c || (b.defaultValue = cc11001100_hook("b.defaultValue", a.defaultValue, "assign"));
  }
  function Ja(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    b = cc11001100_hook("b", g.apply([], b), "assign");
    var e,
      f,
      h,
      i,
      j,
      k,
      l = cc11001100_hook("l", 0, "var-init"),
      m = cc11001100_hook("m", a.length, "var-init"),
      n = cc11001100_hook("n", m - 1, "var-init"),
      q = cc11001100_hook("q", b[0], "var-init"),
      s = cc11001100_hook("s", r.isFunction(q), "var-init");
    if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = cc11001100_hook("f", a.eq(e), "var-init");
      s && (b[0] = cc11001100_hook("b[0]", q.call(this, e, f.html()), "assign")), Ja(f, b, c, d);
    });
    if (m && (e = cc11001100_hook("e", qa(b, a[0].ownerDocument, !1, a, d), "assign"), f = cc11001100_hook("f", e.firstChild, "assign"), 1 === e.childNodes.length && (e = cc11001100_hook("e", f, "assign")), f || d)) {
      for (h = cc11001100_hook("h", r.map(na(e, "script"), Fa), "assign"), i = cc11001100_hook("i", h.length, "assign"); l < m; l++) j = cc11001100_hook("j", e, "assign"), l !== n && (j = cc11001100_hook("j", r.clone(j, !0, !0), "assign"), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      if (i) for (k = cc11001100_hook("k", h[h.length - 1].ownerDocument, "assign"), r.map(h, Ga), l = cc11001100_hook("l", 0, "assign"); l < i; l++) j = cc11001100_hook("j", h[l], "assign"), la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
    }
    return a;
  }
  function Ka(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var d, e = cc11001100_hook("e", b ? r.filter(b, a) : a, "var-init"), f = cc11001100_hook("f", 0, "var-init"); null != (d = cc11001100_hook("d", e[f], "assign")); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    return a;
  }
  r.extend({
    htmlPrefilter: function (a) {
      return a.replace(za, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = cc11001100_hook("h", a.cloneNode(!0), "var-init"),
        i = cc11001100_hook("i", r.contains(a.ownerDocument, a), "var-init");
      if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = cc11001100_hook("g", na(h), "assign"), f = cc11001100_hook("f", na(a), "assign"), d = cc11001100_hook("d", 0, "assign"), e = cc11001100_hook("e", f.length, "assign"); d < e; d++) Ia(f[d], g[d]);
      if (b) if (c) for (f = cc11001100_hook("f", f || na(a), "assign"), g = cc11001100_hook("g", g || na(h), "assign"), d = cc11001100_hook("d", 0, "assign"), e = cc11001100_hook("e", f.length, "assign"); d < e; d++) Ha(f[d], g[d]);else Ha(a, h);
      return g = cc11001100_hook("g", na(h, "script"), "assign"), g.length > 0 && oa(g, !i && na(a, "script")), h;
    },
    cleanData: function (a) {
      for (var b, c, d, e = cc11001100_hook("e", r.event.special, "var-init"), f = cc11001100_hook("f", 0, "var-init"); void 0 !== (c = cc11001100_hook("c", a[f], "assign")); f++) if (U(c)) {
        if (b = cc11001100_hook("b", c[W.expando], "assign")) {
          if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
          c[W.expando] = cc11001100_hook("c[W.expando]", void 0, "assign");
        }
        c[X.expando] && (c[X.expando] = cc11001100_hook("c[X.expando]", void 0, "assign"));
      }
    }
  }), r.fn.extend({
    detach: function (a) {
      return Ka(this, a, !0);
    },
    remove: function (a) {
      return Ka(this, a);
    },
    text: function (a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = cc11001100_hook("this.textContent", a, "assign"));
        });
      }, null, a, arguments.length);
    },
    append: function () {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = cc11001100_hook("b", Ea(this, a), "var-init");
          b.appendChild(a);
        }
      });
    },
    prepend: function () {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = cc11001100_hook("b", Ea(this, a), "var-init");
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function () {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function () {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function () {
      for (var a, b = cc11001100_hook("b", 0, "var-init"); null != (a = cc11001100_hook("a", this[b], "assign")); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = cc11001100_hook("a.textContent", "", "assign"));
      return this;
    },
    clone: function (a, b) {
      return a = cc11001100_hook("a", null != a && a, "assign"), b = cc11001100_hook("b", null == b ? a : b, "assign"), this.map(function () {
        return r.clone(this, a, b);
      });
    },
    html: function (a) {
      return T(this, function (a) {
        var b = cc11001100_hook("b", this[0] || {}, "var-init"),
          c = cc11001100_hook("c", 0, "var-init"),
          d = cc11001100_hook("d", this.length, "var-init");
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = cc11001100_hook("a", r.htmlPrefilter(a), "assign");
          try {
            for (; c < d; c++) b = cc11001100_hook("b", this[c] || {}, "assign"), 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = cc11001100_hook("b.innerHTML", a, "assign"));
            b = cc11001100_hook("b", 0, "assign");
          } catch (e) {}
        }
        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function () {
      var a = cc11001100_hook("a", [], "var-init");
      return Ja(this, arguments, function (b) {
        var c = cc11001100_hook("c", this.parentNode, "var-init");
        r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
      }, a);
    }
  }), r.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (a, b) {
    r.fn[a] = cc11001100_hook("r.fn[a]", function (a) {
      for (var c, d = cc11001100_hook("d", [], "var-init"), e = cc11001100_hook("e", r(a), "var-init"), f = cc11001100_hook("f", e.length - 1, "var-init"), g = cc11001100_hook("g", 0, "var-init"); g <= f; g++) c = cc11001100_hook("c", g === f ? this : this.clone(!0), "assign"), r(e[g])[b](c), h.apply(d, c.get());
      return this.pushStack(d);
    }, "assign");
  });
  var La = cc11001100_hook("La", /^margin/, "var-init"),
    Ma = cc11001100_hook("Ma", new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"), "var-init"),
    Na = function (b) {
      var c = cc11001100_hook("c", b.ownerDocument.defaultView, "var-init");
      return c && c.opener || (c = cc11001100_hook("c", a, "assign")), c.getComputedStyle(b);
    };
  !function () {
    function b() {
      if (i) {
        i.style.cssText = cc11001100_hook("i.style.cssText", "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", "assign"), i.innerHTML = cc11001100_hook("i.innerHTML", "", "assign"), ra.appendChild(h);
        var b = cc11001100_hook("b", a.getComputedStyle(i), "var-init");
        c = cc11001100_hook("c", "1%" !== b.top, "assign"), g = cc11001100_hook("g", "2px" === b.marginLeft, "assign"), e = cc11001100_hook("e", "4px" === b.width, "assign"), i.style.marginRight = cc11001100_hook("i.style.marginRight", "50%", "assign"), f = cc11001100_hook("f", "4px" === b.marginRight, "assign"), ra.removeChild(h), i = cc11001100_hook("i", null, "assign");
      }
    }
    var c,
      e,
      f,
      g,
      h = cc11001100_hook("h", d.createElement("div"), "var-init"),
      i = cc11001100_hook("i", d.createElement("div"), "var-init");
    i.style && (i.style.backgroundClip = cc11001100_hook("i.style.backgroundClip", "content-box", "assign"), i.cloneNode(!0).style.backgroundClip = cc11001100_hook("i.cloneNode(!0).style.backgroundClip", "", "assign"), o.clearCloneStyle = cc11001100_hook("o.clearCloneStyle", "content-box" === i.style.backgroundClip, "assign"), h.style.cssText = cc11001100_hook("h.style.cssText", "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", "assign"), h.appendChild(i), r.extend(o, {
      pixelPosition: function () {
        return b(), c;
      },
      boxSizingReliable: function () {
        return b(), e;
      },
      pixelMarginRight: function () {
        return b(), f;
      },
      reliableMarginLeft: function () {
        return b(), g;
      }
    }));
  }();
  function Oa(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f,
      g,
      h = cc11001100_hook("h", a.style, "var-init");
    return c = cc11001100_hook("c", c || Na(a), "assign"), c && (g = cc11001100_hook("g", c.getPropertyValue(b) || c[b], "assign"), "" !== g || r.contains(a.ownerDocument, a) || (g = cc11001100_hook("g", r.style(a, b), "assign")), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = cc11001100_hook("d", h.width, "assign"), e = cc11001100_hook("e", h.minWidth, "assign"), f = cc11001100_hook("f", h.maxWidth, "assign"), h.minWidth = cc11001100_hook("h.minWidth", h.maxWidth = cc11001100_hook("h.maxWidth", h.width = cc11001100_hook("h.width", g, "assign"), "assign"), "assign"), g = cc11001100_hook("g", c.width, "assign"), h.width = cc11001100_hook("h.width", d, "assign"), h.minWidth = cc11001100_hook("h.minWidth", e, "assign"), h.maxWidth = cc11001100_hook("h.maxWidth", f, "assign"))), void 0 !== g ? g + "" : g;
  }
  function Pa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = cc11001100_hook("this.get", b, "assign")).apply(this, arguments);
      }
    };
  }
  var Qa = cc11001100_hook("Qa", /^(none|table(?!-c[ea]).+)/, "var-init"),
    Ra = cc11001100_hook("Ra", /^--/, "var-init"),
    Sa = cc11001100_hook("Sa", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    Ta = cc11001100_hook("Ta", {
      letterSpacing: cc11001100_hook("letterSpacing", "0", "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", "400", "object-key-init")
    }, "var-init"),
    Ua = cc11001100_hook("Ua", ["Webkit", "Moz", "ms"], "var-init"),
    Va = cc11001100_hook("Va", d.createElement("div").style, "var-init");
  function Wa(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a in Va) return a;
    var b = cc11001100_hook("b", a[0].toUpperCase() + a.slice(1), "var-init"),
      c = cc11001100_hook("c", Ua.length, "var-init");
    while (c--) if (a = cc11001100_hook("a", Ua[c] + b, "assign"), a in Va) return a;
  }
  function Xa(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", r.cssProps[a], "var-init");
    return b || (b = cc11001100_hook("b", r.cssProps[a] = cc11001100_hook("r.cssProps[a]", Wa(a) || a, "assign"), "assign")), b;
  }
  function Ya(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", ba.exec(b), "var-init");
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Za(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f,
      g = cc11001100_hook("g", 0, "var-init");
    for (f = cc11001100_hook("f", c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, "assign"); f < 4; f += cc11001100_hook("f", 2, "assign")) "margin" === c && (g += cc11001100_hook("g", r.css(a, c + ca[f], !0, e), "assign")), d ? ("content" === c && (g -= cc11001100_hook("g", r.css(a, "padding" + ca[f], !0, e), "assign")), "margin" !== c && (g -= cc11001100_hook("g", r.css(a, "border" + ca[f] + "Width", !0, e), "assign"))) : (g += cc11001100_hook("g", r.css(a, "padding" + ca[f], !0, e), "assign"), "padding" !== c && (g += cc11001100_hook("g", r.css(a, "border" + ca[f] + "Width", !0, e), "assign")));
    return g;
  }
  function $a(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e = cc11001100_hook("e", Na(a), "var-init"),
      f = cc11001100_hook("f", Oa(a, b, e), "var-init"),
      g = cc11001100_hook("g", "border-box" === r.css(a, "boxSizing", !1, e), "var-init");
    return Ma.test(f) ? f : (d = cc11001100_hook("d", g && (o.boxSizingReliable() || f === a.style[b]), "assign"), "auto" === f && (f = cc11001100_hook("f", a["offset" + b[0].toUpperCase() + b.slice(1)], "assign")), f = cc11001100_hook("f", parseFloat(f) || 0, "assign"), f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = cc11001100_hook("c", Oa(a, "opacity"), "var-init");
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
          h = cc11001100_hook("h", r.camelCase(b), "var-init"),
          i = cc11001100_hook("i", Ra.test(b), "var-init"),
          j = cc11001100_hook("j", a.style, "var-init");
        return i || (b = cc11001100_hook("b", Xa(h), "assign")), g = cc11001100_hook("g", r.cssHooks[b] || r.cssHooks[h], "assign"), void 0 === c ? g && "get" in g && void 0 !== (e = cc11001100_hook("e", g.get(a, !1, d), "assign")) ? e : j[b] : (f = cc11001100_hook("f", typeof c, "assign"), "string" === f && (e = cc11001100_hook("e", ba.exec(c), "assign")) && e[1] && (c = cc11001100_hook("c", fa(a, b, e), "assign"), f = cc11001100_hook("f", "number", "assign")), null != c && c === c && ("number" === f && (c += cc11001100_hook("c", e && e[3] || (r.cssNumber[h] ? "" : "px"), "assign")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = cc11001100_hook("j[b]", "inherit", "assign")), g && "set" in g && void 0 === (c = cc11001100_hook("c", g.set(a, c, d), "assign")) || (i ? j.setProperty(b, c) : j[b] = cc11001100_hook("j[b]", c, "assign"))), void 0);
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = cc11001100_hook("h", r.camelCase(b), "var-init"),
        i = cc11001100_hook("i", Ra.test(b), "var-init");
      return i || (b = cc11001100_hook("b", Xa(h), "assign")), g = cc11001100_hook("g", r.cssHooks[b] || r.cssHooks[h], "assign"), g && "get" in g && (e = cc11001100_hook("e", g.get(a, !0, c), "assign")), void 0 === e && (e = cc11001100_hook("e", Oa(a, b, d), "assign")), "normal" === e && b in Ta && (e = cc11001100_hook("e", Ta[b], "assign")), "" === c || c ? (f = cc11001100_hook("f", parseFloat(e), "assign"), c === !0 || isFinite(f) ? f || 0 : e) : e;
    }
  }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = cc11001100_hook("r.cssHooks[b]", {
      get: function (a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d);
        });
      },
      set: function (a, c, d) {
        var e,
          f = cc11001100_hook("f", d && Na(a), "var-init"),
          g = cc11001100_hook("g", d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f), "var-init");
        return g && (e = cc11001100_hook("e", ba.exec(c), "assign")) && "px" !== (e[3] || "px") && (a.style[b] = cc11001100_hook("a.style[b]", c, "assign"), c = cc11001100_hook("c", r.css(a, b), "assign")), Ya(a, c, g);
      }
    }, "assign");
  }), r.cssHooks.marginLeft = cc11001100_hook("r.cssHooks.marginLeft", Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
      marginLeft: cc11001100_hook("marginLeft", 0, "object-key-init")
    }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), "assign"), r.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (a, b) {
    r.cssHooks[a + b] = cc11001100_hook("r.cssHooks[a + b]", {
      expand: function (c) {
        for (var d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", {}, "var-init"), f = cc11001100_hook("f", "string" == typeof c ? c.split(" ") : [c], "var-init"); d < 4; d++) e[a + ca[d] + b] = cc11001100_hook("e[a + ca[d] + b]", f[d] || f[d - 2] || f[0], "assign");
        return e;
      }
    }, "assign"), La.test(a) || (r.cssHooks[a + b].set = cc11001100_hook("r.cssHooks[a + b].set", Ya, "assign"));
  }), r.fn.extend({
    css: function (a, b) {
      return T(this, function (a, b, c) {
        var d,
          e,
          f = cc11001100_hook("f", {}, "var-init"),
          g = cc11001100_hook("g", 0, "var-init");
        if (Array.isArray(b)) {
          for (d = cc11001100_hook("d", Na(a), "assign"), e = cc11001100_hook("e", b.length, "assign"); g < e; g++) f[b[g]] = cc11001100_hook("f[b[g]]", r.css(a, b[g], !1, d), "assign");
          return f;
        }
        return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    }
  });
  function _a(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return new _a.prototype.init(a, b, c, d, e);
  }
  r.Tween = cc11001100_hook("r.Tween", _a, "assign"), _a.prototype = cc11001100_hook("_a.prototype", {
    constructor: cc11001100_hook("constructor", _a, "object-key-init"),
    init: function (a, b, c, d, e, f) {
      this.elem = cc11001100_hook("this.elem", a, "assign"), this.prop = cc11001100_hook("this.prop", c, "assign"), this.easing = cc11001100_hook("this.easing", e || r.easing._default, "assign"), this.options = cc11001100_hook("this.options", b, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", d, "assign"), this.unit = cc11001100_hook("this.unit", f || (r.cssNumber[c] ? "" : "px"), "assign");
    },
    cur: function () {
      var a = cc11001100_hook("a", _a.propHooks[this.prop], "var-init");
      return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
    },
    run: function (a) {
      var b,
        c = cc11001100_hook("c", _a.propHooks[this.prop], "var-init");
      return this.options.duration ? this.pos = cc11001100_hook("this.pos", b = cc11001100_hook("b", r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration), "assign"), "assign") : this.pos = cc11001100_hook("this.pos", b = cc11001100_hook("b", a, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * b + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
    }
  }, "assign"), _a.prototype.init.prototype = cc11001100_hook("_a.prototype.init.prototype", _a.prototype, "assign"), _a.propHooks = cc11001100_hook("_a.propHooks", {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = cc11001100_hook("b", r.css(a.elem, a.prop, ""), "assign"), b && "auto" !== b ? b : 0);
      },
      set: function (a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = cc11001100_hook("a.elem[a.prop]", a.now, "assign") : r.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, "assign"), _a.propHooks.scrollTop = cc11001100_hook("_a.propHooks.scrollTop", _a.propHooks.scrollLeft = cc11001100_hook("_a.propHooks.scrollLeft", {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = cc11001100_hook("a.elem[a.prop]", a.now, "assign"));
    }
  }, "assign"), "assign"), r.easing = cc11001100_hook("r.easing", {
    linear: function (a) {
      return a;
    },
    swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    },
    _default: cc11001100_hook("_default", "swing", "object-key-init")
  }, "assign"), r.fx = cc11001100_hook("r.fx", _a.prototype.init, "assign"), r.fx.step = cc11001100_hook("r.fx.step", {}, "assign");
  var ab,
    bb,
    cb = cc11001100_hook("cb", /^(?:toggle|show|hide)$/, "var-init"),
    db = cc11001100_hook("db", /queueHooks$/, "var-init");
  function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }
  function fb() {
    return a.setTimeout(function () {
      ab = cc11001100_hook("ab", void 0, "assign");
    }), ab = cc11001100_hook("ab", r.now(), "assign");
  }
  function gb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c,
      d = cc11001100_hook("d", 0, "var-init"),
      e = cc11001100_hook("e", {
        height: cc11001100_hook("height", a, "object-key-init")
      }, "var-init");
    for (b = cc11001100_hook("b", b ? 1 : 0, "assign"); d < 4; d += cc11001100_hook("d", 2 - b, "assign")) c = cc11001100_hook("c", ca[d], "assign"), e["margin" + c] = cc11001100_hook("e[\"margin\" + c]", e["padding" + c] = cc11001100_hook("e[\"padding\" + c]", a, "assign"), "assign");
    return b && (e.opacity = cc11001100_hook("e.opacity", e.width = cc11001100_hook("e.width", a, "assign"), "assign")), e;
  }
  function hb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var d, e = cc11001100_hook("e", (kb.tweeners[b] || []).concat(kb.tweeners["*"]), "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", e.length, "var-init"); f < g; f++) if (d = cc11001100_hook("d", e[f].call(c, b, a), "assign")) return d;
  }
  function ib(a, b, c) {
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
      l = cc11001100_hook("l", "width" in b || "height" in b, "var-init"),
      m = cc11001100_hook("m", this, "var-init"),
      n = cc11001100_hook("n", {}, "var-init"),
      o = cc11001100_hook("o", a.style, "var-init"),
      p = cc11001100_hook("p", a.nodeType && da(a), "var-init"),
      q = cc11001100_hook("q", W.get(a, "fxshow"), "var-init");
    c.queue || (g = cc11001100_hook("g", r._queueHooks(a, "fx"), "assign"), null == g.unqueued && (g.unqueued = cc11001100_hook("g.unqueued", 0, "assign"), h = cc11001100_hook("h", g.empty.fire, "assign"), g.empty.fire = cc11001100_hook("g.empty.fire", function () {
      g.unqueued || h();
    }, "assign")), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));
    for (d in b) if (e = cc11001100_hook("e", b[d], "assign"), cb.test(e)) {
      if (delete b[d], f = cc11001100_hook("f", f || "toggle" === e, "assign"), e === (p ? "hide" : "show")) {
        if ("show" !== e || !q || void 0 === q[d]) continue;
        p = cc11001100_hook("p", !0, "assign");
      }
      n[d] = cc11001100_hook("n[d]", q && q[d] || r.style(a, d), "assign");
    }
    if (i = cc11001100_hook("i", !r.isEmptyObject(b), "assign"), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = cc11001100_hook("c.overflow", [o.overflow, o.overflowX, o.overflowY], "assign"), j = cc11001100_hook("j", q && q.display, "assign"), null == j && (j = cc11001100_hook("j", W.get(a, "display"), "assign")), k = cc11001100_hook("k", r.css(a, "display"), "assign"), "none" === k && (j ? k = cc11001100_hook("k", j, "assign") : (ia([a], !0), j = cc11001100_hook("j", a.style.display || j, "assign"), k = cc11001100_hook("k", r.css(a, "display"), "assign"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = cc11001100_hook("o.display", j, "assign");
      }), null == j && (k = cc11001100_hook("k", o.display, "assign"), j = cc11001100_hook("j", "none" === k ? "" : k, "assign"))), o.display = cc11001100_hook("o.display", "inline-block", "assign"))), c.overflow && (o.overflow = cc11001100_hook("o.overflow", "hidden", "assign"), m.always(function () {
        o.overflow = cc11001100_hook("o.overflow", c.overflow[0], "assign"), o.overflowX = cc11001100_hook("o.overflowX", c.overflow[1], "assign"), o.overflowY = cc11001100_hook("o.overflowY", c.overflow[2], "assign");
      })), i = cc11001100_hook("i", !1, "assign");
      for (d in n) i || (q ? "hidden" in q && (p = cc11001100_hook("p", q.hidden, "assign")) : q = cc11001100_hook("q", W.access(a, "fxshow", {
        display: cc11001100_hook("display", j, "object-key-init")
      }), "assign"), f && (q.hidden = cc11001100_hook("q.hidden", !p, "assign")), p && ia([a], !0), m.done(function () {
        p || ia([a]), W.remove(a, "fxshow");
        for (d in n) r.style(a, d, n[d]);
      })), i = cc11001100_hook("i", hb(p ? q[d] : 0, d, m), "assign"), d in q || (q[d] = cc11001100_hook("q[d]", i.start, "assign"), p && (i.end = cc11001100_hook("i.end", i.start, "assign"), i.start = cc11001100_hook("i.start", 0, "assign")));
    }
  }
  function jb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c, d, e, f, g;
    for (c in a) if (d = cc11001100_hook("d", r.camelCase(c), "assign"), e = cc11001100_hook("e", b[d], "assign"), f = cc11001100_hook("f", a[c], "assign"), Array.isArray(f) && (e = cc11001100_hook("e", f[1], "assign"), f = cc11001100_hook("f", a[c] = cc11001100_hook("a[c]", f[0], "assign"), "assign")), c !== d && (a[d] = cc11001100_hook("a[d]", f, "assign"), delete a[c]), g = cc11001100_hook("g", r.cssHooks[d], "assign"), g && "expand" in g) {
      f = cc11001100_hook("f", g.expand(f), "assign"), delete a[d];
      for (c in f) c in a || (a[c] = cc11001100_hook("a[c]", f[c], "assign"), b[c] = cc11001100_hook("b[c]", e, "assign"));
    } else b[d] = cc11001100_hook("b[d]", e, "assign");
  }
  function kb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f = cc11001100_hook("f", 0, "var-init"),
      g = cc11001100_hook("g", kb.prefilters.length, "var-init"),
      h = cc11001100_hook("h", r.Deferred().always(function () {
        delete i.elem;
      }), "var-init"),
      i = function () {
        if (e) return !1;
        for (var b = cc11001100_hook("b", ab || fb(), "var-init"), c = cc11001100_hook("c", Math.max(0, j.startTime + j.duration - b), "var-init"), d = cc11001100_hook("d", c / j.duration || 0, "var-init"), f = cc11001100_hook("f", 1 - d, "var-init"), g = cc11001100_hook("g", 0, "var-init"), i = cc11001100_hook("i", j.tweens.length, "var-init"); g < i; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
      },
      j = cc11001100_hook("j", h.promise({
        elem: cc11001100_hook("elem", a, "object-key-init"),
        props: cc11001100_hook("props", r.extend({}, b), "object-key-init"),
        opts: cc11001100_hook("opts", r.extend(!0, {
          specialEasing: {},
          easing: cc11001100_hook("easing", r.easing._default, "object-key-init")
        }, c), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", b, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", c, "object-key-init"),
        startTime: cc11001100_hook("startTime", ab || fb(), "object-key-init"),
        duration: cc11001100_hook("duration", c.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (b, c) {
          var d = cc11001100_hook("d", r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing), "var-init");
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
    for (jb(k, j.opts.specialEasing); f < g; f++) if (d = cc11001100_hook("d", kb.prefilters[f].call(j, a, k, j.opts), "assign")) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = cc11001100_hook("r._queueHooks(j.elem, j.opts.queue).stop", r.proxy(d.stop, d), "assign")), d;
    return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
      elem: cc11001100_hook("elem", a, "object-key-init"),
      anim: cc11001100_hook("anim", j, "object-key-init"),
      queue: cc11001100_hook("queue", j.opts.queue, "object-key-init")
    })), j;
  }
  r.Animation = cc11001100_hook("r.Animation", r.extend(kb, {
    tweeners: {
      "*": cc11001100_hook("*", [function (a, b) {
        var c = cc11001100_hook("c", this.createTween(a, b), "var-init");
        return fa(c.elem, a, ba.exec(b), c), c;
      }], "object-key-init")
    },
    tweener: function (a, b) {
      r.isFunction(a) ? (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", ["*"], "assign")) : a = cc11001100_hook("a", a.match(L), "assign");
      for (var c, d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", a.length, "var-init"); d < e; d++) c = cc11001100_hook("c", a[d], "assign"), kb.tweeners[c] = cc11001100_hook("kb.tweeners[c]", kb.tweeners[c] || [], "assign"), kb.tweeners[c].unshift(b);
    },
    prefilters: cc11001100_hook("prefilters", [ib], "object-key-init"),
    prefilter: function (a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    }
  }), "assign"), r.speed = cc11001100_hook("r.speed", function (a, b, c) {
    var d = cc11001100_hook("d", a && "object" == typeof a ? r.extend({}, a) : {
      complete: cc11001100_hook("complete", c || !c && b || r.isFunction(a) && a, "object-key-init"),
      duration: cc11001100_hook("duration", a, "object-key-init"),
      easing: cc11001100_hook("easing", c && b || b && !r.isFunction(b) && b, "object-key-init")
    }, "var-init");
    return r.fx.off ? d.duration = cc11001100_hook("d.duration", 0, "assign") : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = cc11001100_hook("d.duration", r.fx.speeds[d.duration], "assign") : d.duration = cc11001100_hook("d.duration", r.fx.speeds._default, "assign")), null != d.queue && d.queue !== !0 || (d.queue = cc11001100_hook("d.queue", "fx", "assign")), d.old = cc11001100_hook("d.old", d.complete, "assign"), d.complete = cc11001100_hook("d.complete", function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
    }, "assign"), d;
  }, "assign"), r.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", b, "object-key-init")
      }, a, c, d);
    },
    animate: function (a, b, c, d) {
      var e = cc11001100_hook("e", r.isEmptyObject(a), "var-init"),
        f = cc11001100_hook("f", r.speed(b, c, d), "var-init"),
        g = function () {
          var b = cc11001100_hook("b", kb(this, r.extend({}, a), f), "var-init");
          (e || W.get(this, "finish")) && b.stop(!0);
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
          f = cc11001100_hook("f", r.timers, "var-init"),
          g = cc11001100_hook("g", W.get(this), "var-init");
        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
        for (e = cc11001100_hook("e", f.length, "assign"); e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = cc11001100_hook("b", !1, "assign"), f.splice(e, 1));
        !b && c || r.dequeue(this, a);
      });
    },
    finish: function (a) {
      return a !== !1 && (a = cc11001100_hook("a", a || "fx", "assign")), this.each(function () {
        var b,
          c = cc11001100_hook("c", W.get(this), "var-init"),
          d = cc11001100_hook("d", c[a + "queue"], "var-init"),
          e = cc11001100_hook("e", c[a + "queueHooks"], "var-init"),
          f = cc11001100_hook("f", r.timers, "var-init"),
          g = cc11001100_hook("g", d ? d.length : 0, "var-init");
        for (c.finish = cc11001100_hook("c.finish", !0, "assign"), r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = cc11001100_hook("b", f.length, "assign"); b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = cc11001100_hook("b", 0, "assign"); b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish;
      });
    }
  }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = cc11001100_hook("c", r.fn[b], "var-init");
    r.fn[b] = cc11001100_hook("r.fn[b]", function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    }, "assign");
  }), r.each({
    slideDown: cc11001100_hook("slideDown", gb("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", gb("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", gb("toggle"), "object-key-init"),
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
    r.fn[a] = cc11001100_hook("r.fn[a]", function (a, c, d) {
      return this.animate(b, a, c, d);
    }, "assign");
  }), r.timers = cc11001100_hook("r.timers", [], "assign"), r.fx.tick = cc11001100_hook("r.fx.tick", function () {
    var a,
      b = cc11001100_hook("b", 0, "var-init"),
      c = cc11001100_hook("c", r.timers, "var-init");
    for (ab = cc11001100_hook("ab", r.now(), "assign"); b < c.length; b++) a = cc11001100_hook("a", c[b], "assign"), a() || c[b] !== a || c.splice(b--, 1);
    c.length || r.fx.stop(), ab = cc11001100_hook("ab", void 0, "assign");
  }, "assign"), r.fx.timer = cc11001100_hook("r.fx.timer", function (a) {
    r.timers.push(a), r.fx.start();
  }, "assign"), r.fx.interval = cc11001100_hook("r.fx.interval", 13, "assign"), r.fx.start = cc11001100_hook("r.fx.start", function () {
    bb || (bb = cc11001100_hook("bb", !0, "assign"), eb());
  }, "assign"), r.fx.stop = cc11001100_hook("r.fx.stop", function () {
    bb = cc11001100_hook("bb", null, "assign");
  }, "assign"), r.fx.speeds = cc11001100_hook("r.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"), r.fn.delay = cc11001100_hook("r.fn.delay", function (b, c) {
    return b = cc11001100_hook("b", r.fx ? r.fx.speeds[b] || b : b, "assign"), c = cc11001100_hook("c", c || "fx", "assign"), this.queue(c, function (c, d) {
      var e = cc11001100_hook("e", a.setTimeout(c, b), "var-init");
      d.stop = cc11001100_hook("d.stop", function () {
        a.clearTimeout(e);
      }, "assign");
    });
  }, "assign"), function () {
    var a = cc11001100_hook("a", d.createElement("input"), "var-init"),
      b = cc11001100_hook("b", d.createElement("select"), "var-init"),
      c = cc11001100_hook("c", b.appendChild(d.createElement("option")), "var-init");
    a.type = cc11001100_hook("a.type", "checkbox", "assign"), o.checkOn = cc11001100_hook("o.checkOn", "" !== a.value, "assign"), o.optSelected = cc11001100_hook("o.optSelected", c.selected, "assign"), a = cc11001100_hook("a", d.createElement("input"), "assign"), a.value = cc11001100_hook("a.value", "t", "assign"), a.type = cc11001100_hook("a.type", "radio", "assign"), o.radioValue = cc11001100_hook("o.radioValue", "t" === a.value, "assign");
  }();
  var lb,
    mb = cc11001100_hook("mb", r.expr.attrHandle, "var-init");
  r.fn.extend({
    attr: function (a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    }
  }), r.extend({
    attr: function (a, b, c) {
      var d,
        e,
        f = cc11001100_hook("f", a.nodeType, "var-init");
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = cc11001100_hook("e", r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0), "assign")), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = cc11001100_hook("d", e.set(a, c, b), "assign")) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = cc11001100_hook("d", e.get(a, b), "assign")) ? d : (d = cc11001100_hook("d", r.find.attr(a, b), "assign"), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = cc11001100_hook("c", a.value, "var-init");
            return a.setAttribute("type", b), c && (a.value = cc11001100_hook("a.value", c, "assign")), b;
          }
        }
      }
    },
    removeAttr: function (a, b) {
      var c,
        d = cc11001100_hook("d", 0, "var-init"),
        e = cc11001100_hook("e", b && b.match(L), "var-init");
      if (e && 1 === a.nodeType) while (c = cc11001100_hook("c", e[d++], "assign")) a.removeAttribute(c);
    }
  }), lb = cc11001100_hook("lb", {
    set: function (a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    }
  }, "assign"), r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = cc11001100_hook("c", mb[b] || r.find.attr, "var-init");
    mb[b] = cc11001100_hook("mb[b]", function (a, b, d) {
      var e,
        f,
        g = cc11001100_hook("g", b.toLowerCase(), "var-init");
      return d || (f = cc11001100_hook("f", mb[g], "assign"), mb[g] = cc11001100_hook("mb[g]", e, "assign"), e = cc11001100_hook("e", null != c(a, b, d) ? g : null, "assign"), mb[g] = cc11001100_hook("mb[g]", f, "assign")), e;
    }, "assign");
  });
  var nb = cc11001100_hook("nb", /^(?:input|select|textarea|button)$/i, "var-init"),
    ob = cc11001100_hook("ob", /^(?:a|area)$/i, "var-init");
  r.fn.extend({
    prop: function (a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    }
  }), r.extend({
    prop: function (a, b, c) {
      var d,
        e,
        f = cc11001100_hook("f", a.nodeType, "var-init");
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = cc11001100_hook("b", r.propFix[b] || b, "assign"), e = cc11001100_hook("e", r.propHooks[b], "assign")), void 0 !== c ? e && "set" in e && void 0 !== (d = cc11001100_hook("d", e.set(a, c, b), "assign")) ? d : a[b] = cc11001100_hook("a[b]", c, "assign") : e && "get" in e && null !== (d = cc11001100_hook("d", e.get(a, b), "assign")) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = cc11001100_hook("b", r.find.attr(a, "tabindex"), "var-init");
          return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init")
    }
  }), o.optSelected || (r.propHooks.selected = cc11001100_hook("r.propHooks.selected", {
    get: function (a) {
      var b = cc11001100_hook("b", a.parentNode, "var-init");
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    },
    set: function (a) {
      var b = cc11001100_hook("b", a.parentNode, "var-init");
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    }
  }, "assign")), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = cc11001100_hook("r.propFix[this.toLowerCase()]", this, "assign");
  });
  function pb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.match(L) || [], "var-init");
    return b.join(" ");
  }
  function qb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.getAttribute && a.getAttribute("class") || "";
  }
  r.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = cc11001100_hook("i", 0, "var-init");
      if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)));
      });
      if ("string" == typeof a && a) {
        b = cc11001100_hook("b", a.match(L) || [], "assign");
        while (c = cc11001100_hook("c", this[i++], "assign")) if (e = cc11001100_hook("e", qb(c), "assign"), d = cc11001100_hook("d", 1 === c.nodeType && " " + pb(e) + " ", "assign")) {
          g = cc11001100_hook("g", 0, "assign");
          while (f = cc11001100_hook("f", b[g++], "assign")) d.indexOf(" " + f + " ") < 0 && (d += cc11001100_hook("d", f + " ", "assign"));
          h = cc11001100_hook("h", pb(d), "assign"), e !== h && c.setAttribute("class", h);
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
      if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = cc11001100_hook("b", a.match(L) || [], "assign");
        while (c = cc11001100_hook("c", this[i++], "assign")) if (e = cc11001100_hook("e", qb(c), "assign"), d = cc11001100_hook("d", 1 === c.nodeType && " " + pb(e) + " ", "assign")) {
          g = cc11001100_hook("g", 0, "assign");
          while (f = cc11001100_hook("f", b[g++], "assign")) while (d.indexOf(" " + f + " ") > -1) d = cc11001100_hook("d", d.replace(" " + f + " ", " "), "assign");
          h = cc11001100_hook("h", pb(d), "assign"), e !== h && c.setAttribute("class", h);
        }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = cc11001100_hook("c", typeof a, "var-init");
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;
        if ("string" === c) {
          d = cc11001100_hook("d", 0, "assign"), e = cc11001100_hook("e", r(this), "assign"), f = cc11001100_hook("f", a.match(L) || [], "assign");
          while (b = cc11001100_hook("b", f[d++], "assign")) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else void 0 !== a && "boolean" !== c || (b = cc11001100_hook("b", qb(this), "assign"), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
      });
    },
    hasClass: function (a) {
      var b,
        c,
        d = cc11001100_hook("d", 0, "var-init");
      b = cc11001100_hook("b", " " + a + " ", "assign");
      while (c = cc11001100_hook("c", this[d++], "assign")) if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      return !1;
    }
  });
  var rb = cc11001100_hook("rb", /\r/g, "var-init");
  r.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = cc11001100_hook("e", this[0], "var-init");
      {
        if (arguments.length) return d = cc11001100_hook("d", r.isFunction(a), "assign"), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = cc11001100_hook("e", d ? a.call(this, c, r(this).val()) : a, "assign"), null == e ? e = cc11001100_hook("e", "", "assign") : "number" == typeof e ? e += cc11001100_hook("e", "", "assign") : Array.isArray(e) && (e = cc11001100_hook("e", r.map(e, function (a) {
            return null == a ? "" : a + "";
          }), "assign")), b = cc11001100_hook("b", r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], "assign"), b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = cc11001100_hook("this.value", e, "assign")));
        });
        if (e) return b = cc11001100_hook("b", r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], "assign"), b && "get" in b && void 0 !== (c = cc11001100_hook("c", b.get(e, "value"), "assign")) ? c : (c = cc11001100_hook("c", e.value, "assign"), "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    }
  }), r.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = cc11001100_hook("b", r.find.attr(a, "value"), "var-init");
          return null != b ? b : pb(r.text(a));
        }
      },
      select: {
        get: function (a) {
          var b,
            c,
            d,
            e = cc11001100_hook("e", a.options, "var-init"),
            f = cc11001100_hook("f", a.selectedIndex, "var-init"),
            g = cc11001100_hook("g", "select-one" === a.type, "var-init"),
            h = cc11001100_hook("h", g ? null : [], "var-init"),
            i = cc11001100_hook("i", g ? f + 1 : e.length, "var-init");
          for (d = cc11001100_hook("d", f < 0 ? i : g ? f : 0, "assign"); d < i; d++) if (c = cc11001100_hook("c", e[d], "assign"), (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
            if (b = cc11001100_hook("b", r(c).val(), "assign"), g) return b;
            h.push(b);
          }
          return h;
        },
        set: function (a, b) {
          var c,
            d,
            e = cc11001100_hook("e", a.options, "var-init"),
            f = cc11001100_hook("f", r.makeArray(b), "var-init"),
            g = cc11001100_hook("g", e.length, "var-init");
          while (g--) d = cc11001100_hook("d", e[g], "assign"), (d.selected = cc11001100_hook("d.selected", r.inArray(r.valHooks.option.get(d), f) > -1, "assign")) && (c = cc11001100_hook("c", !0, "assign"));
          return c || (a.selectedIndex = cc11001100_hook("a.selectedIndex", -1, "assign")), f;
        }
      }
    }
  }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = cc11001100_hook("r.valHooks[this]", {
      set: function (a, b) {
        if (Array.isArray(b)) return a.checked = cc11001100_hook("a.checked", r.inArray(r(a).val(), b) > -1, "assign");
      }
    }, "assign"), o.checkOn || (r.valHooks[this].get = cc11001100_hook("r.valHooks[this].get", function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    }, "assign"));
  });
  var sb = cc11001100_hook("sb", /^(?:focusinfocus|focusoutblur)$/, "var-init");
  r.extend(r.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        k,
        m,
        n,
        o = cc11001100_hook("o", [e || d], "var-init"),
        p = cc11001100_hook("p", l.call(b, "type") ? b.type : b, "var-init"),
        q = cc11001100_hook("q", l.call(b, "namespace") ? b.namespace.split(".") : [], "var-init");
      if (h = cc11001100_hook("h", i = cc11001100_hook("i", e = cc11001100_hook("e", e || d, "assign"), "assign"), "assign"), 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = cc11001100_hook("q", p.split("."), "assign"), p = cc11001100_hook("p", q.shift(), "assign"), q.sort()), k = cc11001100_hook("k", p.indexOf(":") < 0 && "on" + p, "assign"), b = cc11001100_hook("b", b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), "assign"), b.isTrigger = cc11001100_hook("b.isTrigger", f ? 2 : 3, "assign"), b.namespace = cc11001100_hook("b.namespace", q.join("."), "assign"), b.rnamespace = cc11001100_hook("b.rnamespace", b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), b.result = cc11001100_hook("b.result", void 0, "assign"), b.target || (b.target = cc11001100_hook("b.target", e, "assign")), c = cc11001100_hook("c", null == c ? [b] : r.makeArray(c, [b]), "assign"), n = cc11001100_hook("n", r.event.special[p] || {}, "assign"), f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = cc11001100_hook("j", n.delegateType || p, "assign"), sb.test(j + p) || (h = cc11001100_hook("h", h.parentNode, "assign")); h; h = cc11001100_hook("h", h.parentNode, "assign")) o.push(h), i = cc11001100_hook("i", h, "assign");
          i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }
        g = cc11001100_hook("g", 0, "assign");
        while ((h = cc11001100_hook("h", o[g++], "assign")) && !b.isPropagationStopped()) b.type = cc11001100_hook("b.type", g > 1 ? j : n.bindType || p, "assign"), m = cc11001100_hook("m", (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), "assign"), m && m.apply(h, c), m = cc11001100_hook("m", k && h[k], "assign"), m && m.apply && U(h) && (b.result = cc11001100_hook("b.result", m.apply(h, c), "assign"), b.result === !1 && b.preventDefault());
        return b.type = cc11001100_hook("b.type", p, "assign"), f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = cc11001100_hook("i", e[k], "assign"), i && (e[k] = cc11001100_hook("e[k]", null, "assign")), r.event.triggered = cc11001100_hook("r.event.triggered", p, "assign"), e[p](), r.event.triggered = cc11001100_hook("r.event.triggered", void 0, "assign"), i && (e[k] = cc11001100_hook("e[k]", i, "assign"))), b.result;
      }
    },
    simulate: function (a, b, c) {
      var d = cc11001100_hook("d", r.extend(new r.Event(), c, {
        type: cc11001100_hook("type", a, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init")
      }), "var-init");
      r.event.trigger(d, null, b);
    }
  }), r.fn.extend({
    trigger: function (a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      var c = cc11001100_hook("c", this[0], "var-init");
      if (c) return r.event.trigger(a, b, c, !0);
    }
  }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = cc11001100_hook("r.fn[b]", function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    }, "assign");
  }), r.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  }), o.focusin = cc11001100_hook("o.focusin", "onfocusin" in a, "assign"), o.focusin || r.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (a, b) {
    var c = function (a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };
    r.event.special[b] = cc11001100_hook("r.event.special[b]", {
      setup: function () {
        var d = cc11001100_hook("d", this.ownerDocument || this, "var-init"),
          e = cc11001100_hook("e", W.access(d, b), "var-init");
        e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
      },
      teardown: function () {
        var d = cc11001100_hook("d", this.ownerDocument || this, "var-init"),
          e = cc11001100_hook("e", W.access(d, b) - 1, "var-init");
        e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
      }
    }, "assign");
  });
  var tb = cc11001100_hook("tb", a.location, "var-init"),
    ub = cc11001100_hook("ub", r.now(), "var-init"),
    vb = cc11001100_hook("vb", /\?/, "var-init");
  r.parseXML = cc11001100_hook("r.parseXML", function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = cc11001100_hook("c", new a.DOMParser().parseFromString(b, "text/xml"), "assign");
    } catch (d) {
      c = cc11001100_hook("c", void 0, "assign");
    }
    return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  }, "assign");
  var wb = cc11001100_hook("wb", /\[\]$/, "var-init"),
    xb = cc11001100_hook("xb", /\r?\n/g, "var-init"),
    yb = cc11001100_hook("yb", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    zb = cc11001100_hook("zb", /^(?:input|select|textarea|keygen)/i, "var-init");
  function Ab(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e;
    if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  r.param = cc11001100_hook("r.param", function (a, b) {
    var c,
      d = cc11001100_hook("d", [], "var-init"),
      e = function (a, b) {
        var c = cc11001100_hook("c", r.isFunction(b) ? b() : b, "var-init");
        d[d.length] = cc11001100_hook("d[d.length]", encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c), "assign");
      };
    if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) Ab(c, a[c], b, e);
    return d.join("&");
  }, "assign"), r.fn.extend({
    serialize: function () {
      return r.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var a = cc11001100_hook("a", r.prop(this, "elements"), "var-init");
        return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = cc11001100_hook("a", this.type, "var-init");
        return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
      }).map(function (a, b) {
        var c = cc11001100_hook("c", r(this).val(), "var-init");
        return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return {
            name: cc11001100_hook("name", b.name, "object-key-init"),
            value: cc11001100_hook("value", a.replace(xb, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", b.name, "object-key-init"),
          value: cc11001100_hook("value", c.replace(xb, "\r\n"), "object-key-init")
        };
      }).get();
    }
  });
  var Bb = cc11001100_hook("Bb", /%20/g, "var-init"),
    Cb = cc11001100_hook("Cb", /#.*$/, "var-init"),
    Db = cc11001100_hook("Db", /([?&])_=[^&]*/, "var-init"),
    Eb = cc11001100_hook("Eb", /^(.*?):[ \t]*([^\r\n]*)$/gm, "var-init"),
    Fb = cc11001100_hook("Fb", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
    Gb = cc11001100_hook("Gb", /^(?:GET|HEAD)$/, "var-init"),
    Hb = cc11001100_hook("Hb", /^\/\//, "var-init"),
    Ib = cc11001100_hook("Ib", {}, "var-init"),
    Jb = cc11001100_hook("Jb", {}, "var-init"),
    Kb = cc11001100_hook("Kb", "*/".concat("*"), "var-init"),
    Lb = cc11001100_hook("Lb", d.createElement("a"), "var-init");
  Lb.href = cc11001100_hook("Lb.href", tb.href, "assign");
  function Mb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b, c) {
      "string" != typeof b && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", "*", "assign"));
      var d,
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", b.toLowerCase().match(L) || [], "var-init");
      if (r.isFunction(c)) while (d = cc11001100_hook("d", f[e++], "assign")) "+" === d[0] ? (d = cc11001100_hook("d", d.slice(1) || "*", "assign"), (a[d] = cc11001100_hook("a[d]", a[d] || [], "assign")).unshift(c)) : (a[d] = cc11001100_hook("a[d]", a[d] || [], "assign")).push(c);
    };
  }
  function Nb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", {}, "var-init"),
      f = cc11001100_hook("f", a === Jb, "var-init");
    function g(h) {
      cc11001100_hook("h", h, "function-parameter");
      var i;
      return e[h] = cc11001100_hook("e[h]", !0, "assign"), r.each(a[h] || [], function (a, h) {
        var j = cc11001100_hook("j", h(b, c, d), "var-init");
        return "string" != typeof j || f || e[j] ? f ? !(i = cc11001100_hook("i", j, "assign")) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }
  function Ob(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c,
      d,
      e = cc11001100_hook("e", r.ajaxSettings.flatOptions || {}, "var-init");
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = cc11001100_hook("d", {}, "assign")))[c] = cc11001100_hook("(e[c] ? a : d || (d = {}))[c]", b[c], "assign"));
    return d && r.extend(!0, a, d), a;
  }
  function Pb(a, b, c) {
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
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Qb(a, b, c, d) {
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
  r.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", tb.href, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", Fb.test(tb.protocol), "object-key-init"),
      global: cc11001100_hook("global", !0, "object-key-init"),
      processData: cc11001100_hook("processData", !0, "object-key-init"),
      async: cc11001100_hook("async", !0, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", Kb, "object-key-init"),
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
        "text json": cc11001100_hook("text json", JSON.parse, "object-key-init"),
        "text xml": cc11001100_hook("text xml", r.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", !0, "object-key-init"),
        context: cc11001100_hook("context", !0, "object-key-init")
      }
    },
    ajaxSetup: function (a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", Mb(Ib), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", Mb(Jb), "object-key-init"),
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
        m,
        n,
        o = cc11001100_hook("o", r.ajaxSetup({}, c), "var-init"),
        p = cc11001100_hook("p", o.context || o, "var-init"),
        q = cc11001100_hook("q", o.context && (p.nodeType || p.jquery) ? r(p) : r.event, "var-init"),
        s = cc11001100_hook("s", r.Deferred(), "var-init"),
        t = cc11001100_hook("t", r.Callbacks("once memory"), "var-init"),
        u = cc11001100_hook("u", o.statusCode || {}, "var-init"),
        v = cc11001100_hook("v", {}, "var-init"),
        w = cc11001100_hook("w", {}, "var-init"),
        x = cc11001100_hook("x", "canceled", "var-init"),
        y = cc11001100_hook("y", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (a) {
            var b;
            if (k) {
              if (!h) {
                h = cc11001100_hook("h", {}, "assign");
                while (b = cc11001100_hook("b", Eb.exec(g), "assign")) h[b[1].toLowerCase()] = cc11001100_hook("h[b[1].toLowerCase()]", b[2], "assign");
              }
              b = cc11001100_hook("b", h[a.toLowerCase()], "assign");
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return k ? g : null;
          },
          setRequestHeader: function (a, b) {
            return null == k && (a = cc11001100_hook("a", w[a.toLowerCase()] = cc11001100_hook("w[a.toLowerCase()]", w[a.toLowerCase()] || a, "assign"), "assign"), v[a] = cc11001100_hook("v[a]", b, "assign")), this;
          },
          overrideMimeType: function (a) {
            return null == k && (o.mimeType = cc11001100_hook("o.mimeType", a, "assign")), this;
          },
          statusCode: function (a) {
            var b;
            if (a) if (k) y.always(a[y.status]);else for (b in a) u[b] = cc11001100_hook("u[b]", [u[b], a[b]], "assign");
            return this;
          },
          abort: function (a) {
            var b = cc11001100_hook("b", a || x, "var-init");
            return e && e.abort(b), A(0, b), this;
          }
        }, "var-init");
      if (s.promise(y), o.url = cc11001100_hook("o.url", ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), "assign"), o.type = cc11001100_hook("o.type", c.method || c.type || o.method || o.type, "assign"), o.dataTypes = cc11001100_hook("o.dataTypes", (o.dataType || "*").toLowerCase().match(L) || [""], "assign"), null == o.crossDomain) {
        j = cc11001100_hook("j", d.createElement("a"), "assign");
        try {
          j.href = cc11001100_hook("j.href", o.url, "assign"), j.href = cc11001100_hook("j.href", j.href, "assign"), o.crossDomain = cc11001100_hook("o.crossDomain", Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host, "assign");
        } catch (z) {
          o.crossDomain = cc11001100_hook("o.crossDomain", !0, "assign");
        }
      }
      if (o.data && o.processData && "string" != typeof o.data && (o.data = cc11001100_hook("o.data", r.param(o.data, o.traditional), "assign")), Nb(Ib, o, c, y), k) return y;
      l = cc11001100_hook("l", r.event && o.global, "assign"), l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = cc11001100_hook("o.type", o.type.toUpperCase(), "assign"), o.hasContent = cc11001100_hook("o.hasContent", !Gb.test(o.type), "assign"), f = cc11001100_hook("f", o.url.replace(Cb, ""), "assign"), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = cc11001100_hook("o.data", o.data.replace(Bb, "+"), "assign")) : (n = cc11001100_hook("n", o.url.slice(f.length), "assign"), o.data && (f += cc11001100_hook("f", (vb.test(f) ? "&" : "?") + o.data, "assign"), delete o.data), o.cache === !1 && (f = cc11001100_hook("f", f.replace(Db, "$1"), "assign"), n = cc11001100_hook("n", (vb.test(f) ? "&" : "?") + "_=" + ub++ + n, "assign")), o.url = cc11001100_hook("o.url", f + n, "assign")), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
      for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
      if (x = cc11001100_hook("x", "abort", "assign"), t.add(o.complete), y.done(o.success), y.fail(o.error), e = cc11001100_hook("e", Nb(Jb, o, c, y), "assign")) {
        if (y.readyState = cc11001100_hook("y.readyState", 1, "assign"), l && q.trigger("ajaxSend", [y, o]), k) return y;
        o.async && o.timeout > 0 && (i = cc11001100_hook("i", a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout), "assign"));
        try {
          k = cc11001100_hook("k", !1, "assign"), e.send(v, A);
        } catch (z) {
          if (k) throw z;
          A(-1, z);
        }
      } else A(-1, "No Transport");
      function A(b, c, d, h) {
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        var j,
          m,
          n,
          v,
          w,
          x = cc11001100_hook("x", c, "var-init");
        k || (k = cc11001100_hook("k", !0, "assign"), i && a.clearTimeout(i), e = cc11001100_hook("e", void 0, "assign"), g = cc11001100_hook("g", h || "", "assign"), y.readyState = cc11001100_hook("y.readyState", b > 0 ? 4 : 0, "assign"), j = cc11001100_hook("j", b >= 200 && b < 300 || 304 === b, "assign"), d && (v = cc11001100_hook("v", Pb(o, y, d), "assign")), v = cc11001100_hook("v", Qb(o, v, y, j), "assign"), j ? (o.ifModified && (w = cc11001100_hook("w", y.getResponseHeader("Last-Modified"), "assign"), w && (r.lastModified[f] = cc11001100_hook("r.lastModified[f]", w, "assign")), w = cc11001100_hook("w", y.getResponseHeader("etag"), "assign"), w && (r.etag[f] = cc11001100_hook("r.etag[f]", w, "assign"))), 204 === b || "HEAD" === o.type ? x = cc11001100_hook("x", "nocontent", "assign") : 304 === b ? x = cc11001100_hook("x", "notmodified", "assign") : (x = cc11001100_hook("x", v.state, "assign"), m = cc11001100_hook("m", v.data, "assign"), n = cc11001100_hook("n", v.error, "assign"), j = cc11001100_hook("j", !n, "assign"))) : (n = cc11001100_hook("n", x, "assign"), !b && x || (x = cc11001100_hook("x", "error", "assign"), b < 0 && (b = cc11001100_hook("b", 0, "assign")))), y.status = cc11001100_hook("y.status", b, "assign"), y.statusText = cc11001100_hook("y.statusText", (c || x) + "", "assign"), j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = cc11001100_hook("u", void 0, "assign"), l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }
      return y;
    },
    getJSON: function (a, b, c) {
      return r.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return r.get(a, void 0, b, "script");
    }
  }), r.each(["get", "post"], function (a, b) {
    r[b] = cc11001100_hook("r[b]", function (a, c, d, e) {
      return r.isFunction(c) && (e = cc11001100_hook("e", e || d, "assign"), d = cc11001100_hook("d", c, "assign"), c = cc11001100_hook("c", void 0, "assign")), r.ajax(r.extend({
        url: cc11001100_hook("url", a, "object-key-init"),
        type: cc11001100_hook("type", b, "object-key-init"),
        dataType: cc11001100_hook("dataType", e, "object-key-init"),
        data: cc11001100_hook("data", c, "object-key-init"),
        success: cc11001100_hook("success", d, "object-key-init")
      }, r.isPlainObject(a) && a));
    }, "assign");
  }), r._evalUrl = cc11001100_hook("r._evalUrl", function (a) {
    return r.ajax({
      url: cc11001100_hook("url", a, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "script", "object-key-init"),
      cache: cc11001100_hook("cache", !0, "object-key-init"),
      async: cc11001100_hook("async", !1, "object-key-init"),
      global: cc11001100_hook("global", !1, "object-key-init"),
      "throws": cc11001100_hook("throws", !0, "object-key-init")
    });
  }, "assign"), r.fn.extend({
    wrapAll: function (a) {
      var b;
      return this[0] && (r.isFunction(a) && (a = cc11001100_hook("a", a.call(this[0]), "assign")), b = cc11001100_hook("b", r(a, this[0].ownerDocument).eq(0).clone(!0), "assign"), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = cc11001100_hook("a", this, "var-init");
        while (a.firstElementChild) a = cc11001100_hook("a", a.firstElementChild, "assign");
        return a;
      }).append(this)), this;
    },
    wrapInner: function (a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = cc11001100_hook("b", r(this), "var-init"),
          c = cc11001100_hook("c", b.contents(), "var-init");
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function (a) {
      var b = cc11001100_hook("b", r.isFunction(a), "var-init");
      return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function (a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    }
  }), r.expr.pseudos.hidden = cc11001100_hook("r.expr.pseudos.hidden", function (a) {
    return !r.expr.pseudos.visible(a);
  }, "assign"), r.expr.pseudos.visible = cc11001100_hook("r.expr.pseudos.visible", function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, "assign"), r.ajaxSettings.xhr = cc11001100_hook("r.ajaxSettings.xhr", function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }, "assign");
  var Rb = cc11001100_hook("Rb", {
      0: cc11001100_hook(0, 200, "object-key-init"),
      1223: cc11001100_hook(1223, 204, "object-key-init")
    }, "var-init"),
    Sb = cc11001100_hook("Sb", r.ajaxSettings.xhr(), "var-init");
  o.cors = cc11001100_hook("o.cors", !!Sb && "withCredentials" in Sb, "assign"), o.ajax = cc11001100_hook("o.ajax", Sb = cc11001100_hook("Sb", !!Sb, "assign"), "assign"), r.ajaxTransport(function (b) {
    var c, d;
    if (o.cors || Sb && !b.crossDomain) return {
      send: function (e, f) {
        var g,
          h = cc11001100_hook("h", b.xhr(), "var-init");
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = cc11001100_hook("h[g]", b.xhrFields[g], "assign");
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = cc11001100_hook("e[\"X-Requested-With\"]", "XMLHttpRequest", "assign"));
        for (g in e) h.setRequestHeader(g, e[g]);
        c = cc11001100_hook("c", function (a) {
          return function () {
            c && (c = cc11001100_hook("c", d = cc11001100_hook("d", h.onload = cc11001100_hook("h.onload", h.onerror = cc11001100_hook("h.onerror", h.onabort = cc11001100_hook("h.onabort", h.onreadystatechange = cc11001100_hook("h.onreadystatechange", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
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
    };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = cc11001100_hook("a.contents.script", !1, "assign"));
  }), r.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /\b(?:java|ecma)script\b/, "object-key-init")
    },
    converters: {
      "text script": function (a) {
        return r.globalEval(a), a;
      }
    }
  }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = cc11001100_hook("a.cache", !1, "assign")), a.crossDomain && (a.type = cc11001100_hook("a.type", "GET", "assign"));
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (e, f) {
          b = cc11001100_hook("b", r("<script>").prop({
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
  var Tb = cc11001100_hook("Tb", [], "var-init"),
    Ub = cc11001100_hook("Ub", /(=)\?(?=&|$)|\?\?/, "var-init");
  r.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var a = cc11001100_hook("a", Tb.pop() || r.expando + "_" + ub++, "var-init");
      return this[a] = cc11001100_hook("this[a]", !0, "assign"), a;
    }
  }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
      f,
      g,
      h = cc11001100_hook("h", b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data"), "var-init");
    if (h || "jsonp" === b.dataTypes[0]) return e = cc11001100_hook("e", b.jsonpCallback = cc11001100_hook("b.jsonpCallback", r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, "assign"), "assign"), h ? b[h] = cc11001100_hook("b[h]", b[h].replace(Ub, "$1" + e), "assign") : b.jsonp !== !1 && (b.url += cc11001100_hook("b.url", (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e, "assign")), b.converters["script json"] = cc11001100_hook("b.converters[\"script json\"]", function () {
      return g || r.error(e + " was not called"), g[0];
    }, "assign"), b.dataTypes[0] = cc11001100_hook("b.dataTypes[0]", "json", "assign"), f = cc11001100_hook("f", a[e], "assign"), a[e] = cc11001100_hook("a[e]", function () {
      g = cc11001100_hook("g", arguments, "assign");
    }, "assign"), d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = cc11001100_hook("a[e]", f, "assign"), b[e] && (b.jsonpCallback = cc11001100_hook("b.jsonpCallback", c.jsonpCallback, "assign"), Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = cc11001100_hook("g", f = cc11001100_hook("f", void 0, "assign"), "assign");
    }), "script";
  }), o.createHTMLDocument = cc11001100_hook("o.createHTMLDocument", function () {
    var a = cc11001100_hook("a", d.implementation.createHTMLDocument("").body, "var-init");
    return a.innerHTML = cc11001100_hook("a.innerHTML", "<form></form><form></form>", "assign"), 2 === a.childNodes.length;
  }(), "assign"), r.parseHTML = cc11001100_hook("r.parseHTML", function (a, b, c) {
    if ("string" != typeof a) return [];
    "boolean" == typeof b && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", !1, "assign"));
    var e, f, g;
    return b || (o.createHTMLDocument ? (b = cc11001100_hook("b", d.implementation.createHTMLDocument(""), "assign"), e = cc11001100_hook("e", b.createElement("base"), "assign"), e.href = cc11001100_hook("e.href", d.location.href, "assign"), b.head.appendChild(e)) : b = cc11001100_hook("b", d, "assign")), f = cc11001100_hook("f", C.exec(a), "assign"), g = cc11001100_hook("g", !c && [], "assign"), f ? [b.createElement(f[1])] : (f = cc11001100_hook("f", qa([a], b, g), "assign"), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, "assign"), r.fn.load = cc11001100_hook("r.fn.load", function (a, b, c) {
    var d,
      e,
      f,
      g = cc11001100_hook("g", this, "var-init"),
      h = cc11001100_hook("h", a.indexOf(" "), "var-init");
    return h > -1 && (d = cc11001100_hook("d", pb(a.slice(h)), "assign"), a = cc11001100_hook("a", a.slice(0, h), "assign")), r.isFunction(b) ? (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign")) : b && "object" == typeof b && (e = cc11001100_hook("e", "POST", "assign")), g.length > 0 && r.ajax({
      url: cc11001100_hook("url", a, "object-key-init"),
      type: cc11001100_hook("type", e || "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", b, "object-key-init")
    }).done(function (a) {
      f = cc11001100_hook("f", arguments, "assign"), g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, "assign"), r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = cc11001100_hook("r.fn[b]", function (a) {
      return this.on(b, a);
    }, "assign");
  }), r.expr.pseudos.animated = cc11001100_hook("r.expr.pseudos.animated", function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  }, "assign"), r.offset = cc11001100_hook("r.offset", {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = cc11001100_hook("k", r.css(a, "position"), "var-init"),
        l = cc11001100_hook("l", r(a), "var-init"),
        m = cc11001100_hook("m", {}, "var-init");
      "static" === k && (a.style.position = cc11001100_hook("a.style.position", "relative", "assign")), h = cc11001100_hook("h", l.offset(), "assign"), f = cc11001100_hook("f", r.css(a, "top"), "assign"), i = cc11001100_hook("i", r.css(a, "left"), "assign"), j = cc11001100_hook("j", ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, "assign"), j ? (d = cc11001100_hook("d", l.position(), "assign"), g = cc11001100_hook("g", d.top, "assign"), e = cc11001100_hook("e", d.left, "assign")) : (g = cc11001100_hook("g", parseFloat(f) || 0, "assign"), e = cc11001100_hook("e", parseFloat(i) || 0, "assign")), r.isFunction(b) && (b = cc11001100_hook("b", b.call(a, c, r.extend({}, h)), "assign")), null != b.top && (m.top = cc11001100_hook("m.top", b.top - h.top + g, "assign")), null != b.left && (m.left = cc11001100_hook("m.left", b.left - h.left + e, "assign")), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, "assign"), r.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });
      var b,
        c,
        d,
        e,
        f = cc11001100_hook("f", this[0], "var-init");
      if (f) return f.getClientRects().length ? (d = cc11001100_hook("d", f.getBoundingClientRect(), "assign"), b = cc11001100_hook("b", f.ownerDocument, "assign"), c = cc11001100_hook("c", b.documentElement, "assign"), e = cc11001100_hook("e", b.defaultView, "assign"), {
        top: cc11001100_hook("top", d.top + e.pageYOffset - c.clientTop, "object-key-init"),
        left: cc11001100_hook("left", d.left + e.pageXOffset - c.clientLeft, "object-key-init")
      }) : {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      };
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
        return "fixed" === r.css(c, "position") ? b = cc11001100_hook("b", c.getBoundingClientRect(), "assign") : (a = cc11001100_hook("a", this.offsetParent(), "assign"), b = cc11001100_hook("b", this.offset(), "assign"), B(a[0], "html") || (d = cc11001100_hook("d", a.offset(), "assign")), d = cc11001100_hook("d", {
          top: cc11001100_hook("top", d.top + r.css(a[0], "borderTopWidth", !0), "object-key-init"),
          left: cc11001100_hook("left", d.left + r.css(a[0], "borderLeftWidth", !0), "object-key-init")
        }, "assign")), {
          top: cc11001100_hook("top", b.top - d.top - r.css(c, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", b.left - d.left - r.css(c, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = cc11001100_hook("a", this.offsetParent, "var-init");
        while (a && "static" === r.css(a, "position")) a = cc11001100_hook("a", a.offsetParent, "assign");
        return a || ra;
      });
    }
  }), r.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (a, b) {
    var c = cc11001100_hook("c", "pageYOffset" === b, "var-init");
    r.fn[a] = cc11001100_hook("r.fn[a]", function (d) {
      return T(this, function (a, d, e) {
        var f;
        return r.isWindow(a) ? f = cc11001100_hook("f", a, "assign") : 9 === a.nodeType && (f = cc11001100_hook("f", a.defaultView, "assign")), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = cc11001100_hook("a[d]", e, "assign"));
      }, a, d, arguments.length);
    }, "assign");
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = cc11001100_hook("r.cssHooks[b]", Pa(o.pixelPosition, function (a, c) {
      if (c) return c = cc11001100_hook("c", Oa(a, b), "assign"), Ma.test(c) ? r(a).position()[b] + "px" : c;
    }), "assign");
  }), r.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (a, b) {
    r.each({
      padding: cc11001100_hook("padding", "inner" + a, "object-key-init"),
      content: cc11001100_hook("content", b, "object-key-init"),
      "": cc11001100_hook("", "outer" + a, "object-key-init")
    }, function (c, d) {
      r.fn[d] = cc11001100_hook("r.fn[d]", function (e, f) {
        var g = cc11001100_hook("g", arguments.length && (c || "boolean" != typeof e), "var-init"),
          h = cc11001100_hook("h", c || (e === !0 || f === !0 ? "margin" : "border"), "var-init");
        return T(this, function (b, c, e) {
          var f;
          return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = cc11001100_hook("f", b.documentElement, "assign"), Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      }, "assign");
    });
  }), r.fn.extend({
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
  }), r.holdReady = cc11001100_hook("r.holdReady", function (a) {
    a ? r.readyWait++ : r.ready(!0);
  }, "assign"), r.isArray = cc11001100_hook("r.isArray", Array.isArray, "assign"), r.parseJSON = cc11001100_hook("r.parseJSON", JSON.parse, "assign"), r.nodeName = cc11001100_hook("r.nodeName", B, "assign"), "function" == typeof define && define.amd && define("jquery", [], function () {
    return r;
  });
  var Vb = cc11001100_hook("Vb", a.jQuery, "var-init"),
    Wb = cc11001100_hook("Wb", a.$, "var-init");
  return r.noConflict = cc11001100_hook("r.noConflict", function (b) {
    return a.$ === r && (a.$ = cc11001100_hook("a.$", Wb, "assign")), b && a.jQuery === r && (a.jQuery = cc11001100_hook("a.jQuery", Vb, "assign")), r;
  }, "assign"), b || (a.jQuery = cc11001100_hook("a.jQuery", a.$ = cc11001100_hook("a.$", r, "assign"), "assign")), r;
});