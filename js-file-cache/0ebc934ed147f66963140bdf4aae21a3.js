/*! For license information please see jquery.js.LICENSE.txt */
!function (e, t) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = cc11001100_hook("module.exports", e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  }, "assign") : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";

  var n = cc11001100_hook("n", [], "var-init"),
    r = cc11001100_hook("r", e.document, "var-init"),
    i = cc11001100_hook("i", Object.getPrototypeOf, "var-init"),
    o = cc11001100_hook("o", n.slice, "var-init"),
    a = cc11001100_hook("a", n.concat, "var-init"),
    s = cc11001100_hook("s", n.push, "var-init"),
    u = cc11001100_hook("u", n.indexOf, "var-init"),
    l = cc11001100_hook("l", {}, "var-init"),
    c = cc11001100_hook("c", l.toString, "var-init"),
    f = cc11001100_hook("f", l.hasOwnProperty, "var-init"),
    p = cc11001100_hook("p", f.toString, "var-init"),
    d = cc11001100_hook("d", p.call(Object), "var-init"),
    h = cc11001100_hook("h", {}, "var-init");
  function g(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", (t = cc11001100_hook("t", t || r, "assign")).createElement("script"), "var-init");
    n.text = cc11001100_hook("n.text", e, "assign"), t.head.appendChild(n).parentNode.removeChild(n);
  }
  var v = cc11001100_hook("v", "3.2.1", "var-init"),
    m = function (e, t) {
      return new m.fn.init(e, t);
    },
    y = cc11001100_hook("y", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init"),
    x = cc11001100_hook("x", /^-ms-/, "var-init"),
    b = cc11001100_hook("b", /-([a-z])/g, "var-init"),
    w = function (e, t) {
      return t.toUpperCase();
    };
  function T(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", !!e && "length" in e && e.length, "var-init"),
      n = cc11001100_hook("n", m.type(e), "var-init");
    return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  m.fn = cc11001100_hook("m.fn", m.prototype = cc11001100_hook("m.prototype", {
    jquery: cc11001100_hook("jquery", v, "object-key-init"),
    constructor: cc11001100_hook("constructor", m, "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    toArray: function () {
      return o.call(this);
    },
    get: function (e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = cc11001100_hook("t", m.merge(this.constructor(), e), "var-init");
      return t.prevObject = cc11001100_hook("t.prevObject", this, "assign"), t;
    },
    each: function (e) {
      return m.each(this, e);
    },
    map: function (e) {
      return this.pushStack(m.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function () {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = cc11001100_hook("t", this.length, "var-init"),
        n = cc11001100_hook("n", +e + (e < 0 ? t : 0), "var-init");
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: cc11001100_hook("push", s, "object-key-init"),
    sort: cc11001100_hook("sort", n.sort, "object-key-init"),
    splice: cc11001100_hook("splice", n.splice, "object-key-init")
  }, "assign"), "assign"), m.extend = cc11001100_hook("m.extend", m.fn.extend = cc11001100_hook("m.fn.extend", function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = cc11001100_hook("a", arguments[0] || {}, "var-init"),
      s = cc11001100_hook("s", 1, "var-init"),
      u = cc11001100_hook("u", arguments.length, "var-init"),
      l = cc11001100_hook("l", !1, "var-init");
    for ("boolean" == typeof a && (l = cc11001100_hook("l", a, "assign"), a = cc11001100_hook("a", arguments[s] || {}, "assign"), s++), "object" == typeof a || m.isFunction(a) || (a = cc11001100_hook("a", {}, "assign")), s === u && (a = cc11001100_hook("a", this, "assign"), s--); s < u; s++) if (null != (e = cc11001100_hook("e", arguments[s], "assign"))) for (t in e) n = cc11001100_hook("n", a[t], "assign"), a !== (r = cc11001100_hook("r", e[t], "assign")) && (l && r && (m.isPlainObject(r) || (i = cc11001100_hook("i", Array.isArray(r), "assign"))) ? (i ? (i = cc11001100_hook("i", !1, "assign"), o = cc11001100_hook("o", n && Array.isArray(n) ? n : [], "assign")) : o = cc11001100_hook("o", n && m.isPlainObject(n) ? n : {}, "assign"), a[t] = cc11001100_hook("a[t]", m.extend(l, o, r), "assign")) : void 0 !== r && (a[t] = cc11001100_hook("a[t]", r, "assign")));
    return a;
  }, "assign"), "assign"), m.extend({
    expando: cc11001100_hook("expando", "jQuery" + (v + Math.random()).replace(/\D/g, ""), "object-key-init"),
    isReady: cc11001100_hook("isReady", !0, "object-key-init"),
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isFunction: function (e) {
      return "function" === m.type(e);
    },
    isWindow: function (e) {
      return null != e && e === e.window;
    },
    isNumeric: function (e) {
      var t = cc11001100_hook("t", m.type(e), "var-init");
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    },
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e) || (t = cc11001100_hook("t", i(e), "assign")) && ("function" != typeof (n = cc11001100_hook("n", f.call(t, "constructor") && t.constructor, "assign")) || p.call(n) !== d));
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    },
    globalEval: function (e) {
      g(e);
    },
    camelCase: function (e) {
      return e.replace(x, "ms-").replace(b, w);
    },
    each: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init");
      if (T(e)) for (n = cc11001100_hook("n", e.length, "assign"); r < n && !1 !== t.call(e[r], r, e[r]); r++);else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    trim: function (e) {
      return null == e ? "" : (e + "").replace(y, "");
    },
    makeArray: function (e, t) {
      var n = cc11001100_hook("n", t || [], "var-init");
      return null != e && (T(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = cc11001100_hook("n", +t.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < n; r++) e[i++] = cc11001100_hook("e[i++]", t[r], "assign");
      return e.length = cc11001100_hook("e.length", i, "assign"), e;
    },
    grep: function (e, t, n) {
      for (var r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"), o = cc11001100_hook("o", e.length, "var-init"), a = cc11001100_hook("a", !n, "var-init"); i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", 0, "var-init"),
        s = cc11001100_hook("s", [], "var-init");
      if (T(e)) for (r = cc11001100_hook("r", e.length, "assign"); o < r; o++) null != (i = cc11001100_hook("i", t(e[o], o, n), "assign")) && s.push(i);else for (o in e) null != (i = cc11001100_hook("i", t(e[o], o, n), "assign")) && s.push(i);
      return a.apply([], s);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    proxy: function (e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = cc11001100_hook("n", e[t], "assign"), t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", n, "assign")), m.isFunction(e)) return r = cc11001100_hook("r", o.call(arguments, 2), "assign"), i = cc11001100_hook("i", function () {
        return e.apply(t || this, r.concat(o.call(arguments)));
      }, "assign"), i.guid = cc11001100_hook("i.guid", e.guid = cc11001100_hook("e.guid", e.guid || m.guid++, "assign"), "assign"), i;
    },
    now: cc11001100_hook("now", Date.now, "object-key-init"),
    support: cc11001100_hook("support", h, "object-key-init")
  }), "function" == typeof Symbol && (m.fn[Symbol.iterator] = cc11001100_hook("m.fn[Symbol.iterator]", n[Symbol.iterator], "assign")), m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = cc11001100_hook("l[\"[object \" + t + \"]\"]", t.toLowerCase(), "assign");
  });
  var C = cc11001100_hook("C", function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      v,
      m,
      y,
      x,
      b = cc11001100_hook("b", "sizzle" + 1 * new Date(), "var-init"),
      w = cc11001100_hook("w", e.document, "var-init"),
      T = cc11001100_hook("T", 0, "var-init"),
      C = cc11001100_hook("C", 0, "var-init"),
      E = cc11001100_hook("E", ae(), "var-init"),
      k = cc11001100_hook("k", ae(), "var-init"),
      S = cc11001100_hook("S", ae(), "var-init"),
      N = function (e, t) {
        return e === t && (f = cc11001100_hook("f", !0, "assign")), 0;
      },
      D = cc11001100_hook("D", {}.hasOwnProperty, "var-init"),
      j = cc11001100_hook("j", [], "var-init"),
      A = cc11001100_hook("A", j.pop, "var-init"),
      q = cc11001100_hook("q", j.push, "var-init"),
      L = cc11001100_hook("L", j.push, "var-init"),
      H = cc11001100_hook("H", j.slice, "var-init"),
      F = function (e, t) {
        for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      O = cc11001100_hook("O", "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", "var-init"),
      P = cc11001100_hook("P", "[\\x20\\t\\r\\n\\f]", "var-init"),
      R = cc11001100_hook("R", "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", "var-init"),
      M = cc11001100_hook("M", "\\[[\\x20\\t\\r\\n\\f]*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]", "var-init"),
      I = cc11001100_hook("I", ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", "var-init"),
      W = cc11001100_hook("W", new RegExp(P + "+", "g"), "var-init"),
      $ = cc11001100_hook("$", new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), "var-init"),
      B = cc11001100_hook("B", new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), "var-init"),
      _ = cc11001100_hook("_", new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), "var-init"),
      z = cc11001100_hook("z", new RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), "var-init"),
      X = cc11001100_hook("X", new RegExp(I), "var-init"),
      U = cc11001100_hook("U", new RegExp("^" + R + "$"), "var-init"),
      V = cc11001100_hook("V", {
        ID: cc11001100_hook("ID", new RegExp("^#(" + R + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", new RegExp("^\\.(" + R + ")"), "object-key-init"),
        TAG: cc11001100_hook("TAG", new RegExp("^(" + R + "|[*])"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", new RegExp("^" + M), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", new RegExp("^" + I), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), "object-key-init"),
        bool: cc11001100_hook("bool", new RegExp("^(?:" + O + ")$", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      G = cc11001100_hook("G", /^(?:input|select|textarea|button)$/i, "var-init"),
      Y = cc11001100_hook("Y", /^h\d$/i, "var-init"),
      Q = cc11001100_hook("Q", /^[^{]+\{\s*\[native \w/, "var-init"),
      J = cc11001100_hook("J", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      K = cc11001100_hook("K", /[+~]/, "var-init"),
      Z = cc11001100_hook("Z", new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), "var-init"),
      ee = function (e, t, n) {
        var r = cc11001100_hook("r", "0x" + t - 65536, "var-init");
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
      te = cc11001100_hook("te", /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, "var-init"),
      ne = function (e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
      re = function () {
        p();
      },
      ie = cc11001100_hook("ie", ye(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e);
      }, {
        dir: cc11001100_hook("dir", "parentNode", "object-key-init"),
        next: cc11001100_hook("next", "legend", "object-key-init")
      }), "var-init");
    try {
      L.apply(j = cc11001100_hook("j", H.call(w.childNodes), "assign"), w.childNodes), j[w.childNodes.length].nodeType;
    } catch (e) {
      L = cc11001100_hook("L", {
        apply: cc11001100_hook("apply", j.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          for (var n = cc11001100_hook("n", e.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"); e[n++] = cc11001100_hook("e[n++]", t[r++], "assign"););
          e.length = cc11001100_hook("e.length", n - 1, "assign");
        }, "object-key-init")
      }, "assign");
    }
    function oe(e, t, r, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      var o,
        s,
        l,
        c,
        f,
        h,
        m,
        y = cc11001100_hook("y", t && t.ownerDocument, "var-init"),
        T = cc11001100_hook("T", t ? t.nodeType : 9, "var-init");
      if (r = cc11001100_hook("r", r || [], "assign"), "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = cc11001100_hook("t", t || d, "assign"), g)) {
        if (11 !== T && (f = cc11001100_hook("f", J.exec(e), "assign"))) if (o = cc11001100_hook("o", f[1], "assign")) {
          if (9 === T) {
            if (!(l = cc11001100_hook("l", t.getElementById(o), "assign"))) return r;
            if (l.id === o) return r.push(l), r;
          } else if (y && (l = cc11001100_hook("l", y.getElementById(o), "assign")) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
          if ((o = cc11001100_hook("o", f[3], "assign")) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }
        if (n.qsa && !S[e + " "] && (!v || !v.test(e))) {
          if (1 !== T) y = cc11001100_hook("y", t, "assign"), m = cc11001100_hook("m", e, "assign");else if ("object" !== t.nodeName.toLowerCase()) {
            for ((c = cc11001100_hook("c", t.getAttribute("id"), "assign")) ? c = cc11001100_hook("c", c.replace(te, ne), "assign") : t.setAttribute("id", c = cc11001100_hook("c", b, "assign")), s = cc11001100_hook("s", (h = cc11001100_hook("h", a(e), "assign")).length, "assign"); s--;) h[s] = cc11001100_hook("h[s]", "#" + c + " " + me(h[s]), "assign");
            m = cc11001100_hook("m", h.join(","), "assign"), y = cc11001100_hook("y", K.test(e) && ge(t.parentNode) || t, "assign");
          }
          if (m) try {
            return L.apply(r, y.querySelectorAll(m)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }
      return u(e.replace($, "$1"), t, r, i);
    }
    function ae() {
      var e = cc11001100_hook("e", [], "var-init");
      return function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = cc11001100_hook("t[n + \" \"]", i, "assign");
      };
    }
    function se(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e[b] = cc11001100_hook("e[b]", !0, "assign"), e;
    }
    function ue(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", d.createElement("fieldset"), "var-init");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = cc11001100_hook("t", null, "assign");
      }
    }
    function le(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      for (var n = cc11001100_hook("n", e.split("|"), "var-init"), i = cc11001100_hook("i", n.length, "var-init"); i--;) r.attrHandle[n[i]] = cc11001100_hook("r.attrHandle[n[i]]", t, "assign");
    }
    function ce(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", t && e, "var-init"),
        r = cc11001100_hook("r", n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex, "var-init");
      if (r) return r;
      if (n) for (; n = cc11001100_hook("n", n.nextSibling, "assign");) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }
    function he(e) {
      cc11001100_hook("e", e, "function-parameter");
      return se(function (t) {
        return t = cc11001100_hook("t", +t, "assign"), se(function (n, r) {
          for (var i, o = cc11001100_hook("o", e([], n.length, t), "var-init"), a = cc11001100_hook("a", o.length, "var-init"); a--;) n[i = cc11001100_hook("i", o[a], "assign")] && (n[i] = cc11001100_hook("n[i]", !(r[i] = cc11001100_hook("r[i]", n[i], "assign")), "assign"));
        });
      });
    }
    function ge(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in n = cc11001100_hook("n", oe.support = cc11001100_hook("oe.support", {}, "assign"), "assign"), o = cc11001100_hook("o", oe.isXML = cc11001100_hook("oe.isXML", function (e) {
      var t = cc11001100_hook("t", e && (e.ownerDocument || e).documentElement, "var-init");
      return !!t && "HTML" !== t.nodeName;
    }, "assign"), "assign"), p = cc11001100_hook("p", oe.setDocument = cc11001100_hook("oe.setDocument", function (e) {
      var t,
        i,
        a = cc11001100_hook("a", e ? e.ownerDocument || e : w, "var-init");
      return a !== d && 9 === a.nodeType && a.documentElement ? (h = cc11001100_hook("h", (d = cc11001100_hook("d", a, "assign")).documentElement, "assign"), g = cc11001100_hook("g", !o(d), "assign"), w !== d && (i = cc11001100_hook("i", d.defaultView, "assign")) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = cc11001100_hook("n.attributes", ue(function (e) {
        return e.className = cc11001100_hook("e.className", "i", "assign"), !e.getAttribute("className");
      }), "assign"), n.getElementsByTagName = cc11001100_hook("n.getElementsByTagName", ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), "assign"), n.getElementsByClassName = cc11001100_hook("n.getElementsByClassName", Q.test(d.getElementsByClassName), "assign"), n.getById = cc11001100_hook("n.getById", ue(function (e) {
        return h.appendChild(e).id = cc11001100_hook("h.appendChild(e).id", b, "assign"), !d.getElementsByName || !d.getElementsByName(b).length;
      }), "assign"), n.getById ? (r.filter.ID = cc11001100_hook("r.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(Z, ee), "var-init");
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, "assign"), r.find.ID = cc11001100_hook("r.find.ID", function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n = cc11001100_hook("n", t.getElementById(e), "var-init");
          return n ? [n] : [];
        }
      }, "assign")) : (r.filter.ID = cc11001100_hook("r.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(Z, ee), "var-init");
        return function (e) {
          var n = cc11001100_hook("n", void 0 !== e.getAttributeNode && e.getAttributeNode("id"), "var-init");
          return n && n.value === t;
        };
      }, "assign"), r.find.ID = cc11001100_hook("r.find.ID", function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n,
            r,
            i,
            o = cc11001100_hook("o", t.getElementById(e), "var-init");
          if (o) {
            if ((n = cc11001100_hook("n", o.getAttributeNode("id"), "assign")) && n.value === e) return [o];
            for (i = cc11001100_hook("i", t.getElementsByName(e), "assign"), r = cc11001100_hook("r", 0, "assign"); o = cc11001100_hook("o", i[r++], "assign");) if ((n = cc11001100_hook("n", o.getAttributeNode("id"), "assign")) && n.value === e) return [o];
          }
          return [];
        }
      }, "assign")), r.find.TAG = cc11001100_hook("r.find.TAG", n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
          r = cc11001100_hook("r", [], "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          o = cc11001100_hook("o", t.getElementsByTagName(e), "var-init");
        if ("*" === e) {
          for (; n = cc11001100_hook("n", o[i++], "assign");) 1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, "assign"), r.find.CLASS = cc11001100_hook("r.find.CLASS", n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, "assign"), m = cc11001100_hook("m", [], "assign"), v = cc11001100_hook("v", [], "assign"), (n.qsa = cc11001100_hook("n.qsa", Q.test(d.querySelectorAll), "assign")) && (ue(function (e) {
        h.appendChild(e).innerHTML = cc11001100_hook("h.appendChild(e).innerHTML", "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", "assign"), e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = cc11001100_hook("e.innerHTML", "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>", "assign");
        var t = cc11001100_hook("t", d.createElement("input"), "var-init");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = cc11001100_hook("h.appendChild(e).disabled", !0, "assign"), 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (n.matchesSelector = cc11001100_hook("n.matchesSelector", Q.test(y = cc11001100_hook("y", h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector, "assign")), "assign")) && ue(function (e) {
        n.disconnectedMatch = cc11001100_hook("n.disconnectedMatch", y.call(e, "*"), "assign"), y.call(e, "[s!='']:x"), m.push("!=", I);
      }), v = cc11001100_hook("v", v.length && new RegExp(v.join("|")), "assign"), m = cc11001100_hook("m", m.length && new RegExp(m.join("|")), "assign"), t = cc11001100_hook("t", Q.test(h.compareDocumentPosition), "assign"), x = cc11001100_hook("x", t || Q.test(h.contains) ? function (e, t) {
        var n = cc11001100_hook("n", 9 === e.nodeType ? e.documentElement : e, "var-init"),
          r = cc11001100_hook("r", t && t.parentNode, "var-init");
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) for (; t = cc11001100_hook("t", t.parentNode, "assign");) if (t === e) return !0;
        return !1;
      }, "assign"), N = cc11001100_hook("N", t ? function (e, t) {
        if (e === t) return f = cc11001100_hook("f", !0, "assign"), 0;
        var r = cc11001100_hook("r", !e.compareDocumentPosition - !t.compareDocumentPosition, "var-init");
        return r || (1 & (r = cc11001100_hook("r", (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, "assign")) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? F(c, e) - F(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = cc11001100_hook("f", !0, "assign"), 0;
        var n,
          r = cc11001100_hook("r", 0, "var-init"),
          i = cc11001100_hook("i", e.parentNode, "var-init"),
          o = cc11001100_hook("o", t.parentNode, "var-init"),
          a = cc11001100_hook("a", [e], "var-init"),
          s = cc11001100_hook("s", [t], "var-init");
        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? F(c, e) - F(c, t) : 0;
        if (i === o) return ce(e, t);
        for (n = cc11001100_hook("n", e, "assign"); n = cc11001100_hook("n", n.parentNode, "assign");) a.unshift(n);
        for (n = cc11001100_hook("n", t, "assign"); n = cc11001100_hook("n", n.parentNode, "assign");) s.unshift(n);
        for (; a[r] === s[r];) r++;
        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, "assign"), d) : d;
    }, "assign"), "assign"), oe.matches = cc11001100_hook("oe.matches", function (e, t) {
      return oe(e, null, null, t);
    }, "assign"), oe.matchesSelector = cc11001100_hook("oe.matchesSelector", function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = cc11001100_hook("t", t.replace(z, "='$1']"), "assign"), n.matchesSelector && g && !S[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
        var r = cc11001100_hook("r", y.call(e, t), "var-init");
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}
      return oe(t, d, null, [e]).length > 0;
    }, "assign"), oe.contains = cc11001100_hook("oe.contains", function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, "assign"), oe.attr = cc11001100_hook("oe.attr", function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = cc11001100_hook("i", r.attrHandle[t.toLowerCase()], "var-init"),
        o = cc11001100_hook("o", i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0, "var-init");
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = cc11001100_hook("o", e.getAttributeNode(t), "assign")) && o.specified ? o.value : null;
    }, "assign"), oe.escape = cc11001100_hook("oe.escape", function (e) {
      return (e + "").replace(te, ne);
    }, "assign"), oe.error = cc11001100_hook("oe.error", function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, "assign"), oe.uniqueSort = cc11001100_hook("oe.uniqueSort", function (e) {
      var t,
        r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      if (f = cc11001100_hook("f", !n.detectDuplicates, "assign"), c = cc11001100_hook("c", !n.sortStable && e.slice(0), "assign"), e.sort(N), f) {
        for (; t = cc11001100_hook("t", e[o++], "assign");) t === e[o] && (i = cc11001100_hook("i", r.push(o), "assign"));
        for (; i--;) e.splice(r[i], 1);
      }
      return c = cc11001100_hook("c", null, "assign"), e;
    }, "assign"), i = cc11001100_hook("i", oe.getText = cc11001100_hook("oe.getText", function (e) {
      var t,
        n = cc11001100_hook("n", "", "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        o = cc11001100_hook("o", e.nodeType, "var-init");
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) n += cc11001100_hook("n", i(e), "assign");
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = cc11001100_hook("t", e[r++], "assign");) n += cc11001100_hook("n", i(t), "assign");
      return n;
    }, "assign"), "assign"), r = cc11001100_hook("r", oe.selectors = cc11001100_hook("oe.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", se, "object-key-init"),
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
        ATTR: function (e) {
          return e[1] = cc11001100_hook("e[1]", e[1].replace(Z, ee), "assign"), e[3] = cc11001100_hook("e[3]", (e[3] || e[4] || e[5] || "").replace(Z, ee), "assign"), "~=" === e[2] && (e[3] = cc11001100_hook("e[3]", " " + e[3] + " ", "assign")), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = cc11001100_hook("e[1]", e[1].toLowerCase(), "assign"), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = cc11001100_hook("e[4]", +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), "assign"), e[5] = cc11001100_hook("e[5]", +(e[7] + e[8] || "odd" === e[3]), "assign")) : e[3] && oe.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
            n = cc11001100_hook("n", !e[6] && e[2], "var-init");
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = cc11001100_hook("e[2]", e[4] || e[5] || "", "assign") : n && X.test(n) && (t = cc11001100_hook("t", a(n, !0), "assign")) && (t = cc11001100_hook("t", n.indexOf(")", n.length - t) - n.length, "assign")) && (e[0] = cc11001100_hook("e[0]", e[0].slice(0, t), "assign"), e[2] = cc11001100_hook("e[2]", n.slice(0, t), "assign")), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = cc11001100_hook("t", e.replace(Z, ee).toLowerCase(), "var-init");
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = cc11001100_hook("t", E[e + " "], "var-init");
          return t || (t = cc11001100_hook("t", new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + P + "|$)"), "assign")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = cc11001100_hook("i", oe.attr(r, e), "var-init");
            return null == i ? "!=" === t : !t || (i += cc11001100_hook("i", "", "assign"), "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = cc11001100_hook("o", "nth" !== e.slice(0, 3), "var-init"),
            a = cc11001100_hook("a", "last" !== e.slice(-4), "var-init"),
            s = cc11001100_hook("s", "of-type" === t, "var-init");
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
              c,
              f,
              p,
              d,
              h,
              g = cc11001100_hook("g", o !== a ? "nextSibling" : "previousSibling", "var-init"),
              v = cc11001100_hook("v", t.parentNode, "var-init"),
              m = cc11001100_hook("m", s && t.nodeName.toLowerCase(), "var-init"),
              y = cc11001100_hook("y", !u && !s, "var-init"),
              x = cc11001100_hook("x", !1, "var-init");
            if (v) {
              if (o) {
                for (; g;) {
                  for (p = cc11001100_hook("p", t, "assign"); p = cc11001100_hook("p", p[g], "assign");) if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                  h = cc11001100_hook("h", g = cc11001100_hook("g", "only" === e && !h && "nextSibling", "assign"), "assign");
                }
                return !0;
              }
              if (h = cc11001100_hook("h", [a ? v.firstChild : v.lastChild], "assign"), a && y) {
                for (x = cc11001100_hook("x", (d = cc11001100_hook("d", (l = cc11001100_hook("l", (c = cc11001100_hook("c", (f = cc11001100_hook("f", (p = cc11001100_hook("p", v, "assign"))[b] || (p[b] = cc11001100_hook("p[b]", {}, "assign")), "assign"))[p.uniqueID] || (f[p.uniqueID] = cc11001100_hook("f[p.uniqueID]", {}, "assign")), "assign"))[e] || [], "assign"))[0] === T && l[1], "assign")) && l[2], "assign"), p = cc11001100_hook("p", d && v.childNodes[d], "assign"); p = cc11001100_hook("p", ++d && p && p[g] || (x = cc11001100_hook("x", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign");) if (1 === p.nodeType && ++x && p === t) {
                  c[e] = cc11001100_hook("c[e]", [T, d, x], "assign");
                  break;
                }
              } else if (y && (x = cc11001100_hook("x", d = cc11001100_hook("d", (l = cc11001100_hook("l", (c = cc11001100_hook("c", (f = cc11001100_hook("f", (p = cc11001100_hook("p", t, "assign"))[b] || (p[b] = cc11001100_hook("p[b]", {}, "assign")), "assign"))[p.uniqueID] || (f[p.uniqueID] = cc11001100_hook("f[p.uniqueID]", {}, "assign")), "assign"))[e] || [], "assign"))[0] === T && l[1], "assign"), "assign")), !1 === x) for (; (p = cc11001100_hook("p", ++d && p && p[g] || (x = cc11001100_hook("x", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign")) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = cc11001100_hook("c", (f = cc11001100_hook("f", p[b] || (p[b] = cc11001100_hook("p[b]", {}, "assign")), "assign"))[p.uniqueID] || (f[p.uniqueID] = cc11001100_hook("f[p.uniqueID]", {}, "assign")), "assign"))[e] = cc11001100_hook("(c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e]", [T, x], "assign")), p !== t)););
              return (x -= cc11001100_hook("x", i, "assign")) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n,
            i = cc11001100_hook("i", r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e), "var-init");
          return i[b] ? i(t) : i.length > 1 ? (n = cc11001100_hook("n", [e, e, "", t], "assign"), r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            for (var r, o = cc11001100_hook("o", i(e, t), "var-init"), a = cc11001100_hook("a", o.length, "var-init"); a--;) e[r = cc11001100_hook("r", F(e, o[a]), "assign")] = cc11001100_hook("e[r = F(e, o[a])]", !(n[r] = cc11001100_hook("n[r]", o[a], "assign")), "assign");
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", se(function (e) {
          var t = cc11001100_hook("t", [], "var-init"),
            n = cc11001100_hook("n", [], "var-init"),
            r = cc11001100_hook("r", s(e.replace($, "$1")), "var-init");
          return r[b] ? se(function (e, t, n, i) {
            for (var o, a = cc11001100_hook("a", r(e, null, i, []), "var-init"), s = cc11001100_hook("s", e.length, "var-init"); s--;) (o = cc11001100_hook("o", a[s], "assign")) && (e[s] = cc11001100_hook("e[s]", !(t[s] = cc11001100_hook("t[s]", o, "assign")), "assign"));
          }) : function (e, i, o) {
            return t[0] = cc11001100_hook("t[0]", e, "assign"), r(t, null, o, n), t[0] = cc11001100_hook("t[0]", null, "assign"), !n.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", se(function (e) {
          return e = cc11001100_hook("e", e.replace(Z, ee), "assign"), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = cc11001100_hook("e", e.replace(Z, ee).toLowerCase(), "assign"), function (t) {
            var n;
            do {
              if (n = cc11001100_hook("n", g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"), "assign")) return (n = cc11001100_hook("n", n.toLowerCase(), "assign")) === e || 0 === n.indexOf(e + "-");
            } while ((t = cc11001100_hook("t", t.parentNode, "assign")) && 1 === t.nodeType);
            return !1;
          };
        }), "object-key-init"),
        target: function (t) {
          var n = cc11001100_hook("n", e.location && e.location.hash, "var-init");
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === h;
        },
        focus: function (e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: cc11001100_hook("enabled", de(!1), "object-key-init"),
        disabled: cc11001100_hook("disabled", de(!0), "object-key-init"),
        checked: function (e) {
          var t = cc11001100_hook("t", e.nodeName.toLowerCase(), "var-init");
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !r.pseudos.empty(e);
        },
        header: function (e) {
          return Y.test(e.nodeName);
        },
        input: function (e) {
          return G.test(e.nodeName);
        },
        button: function (e) {
          var t = cc11001100_hook("t", e.nodeName.toLowerCase(), "var-init");
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = cc11001100_hook("t", e.getAttribute("type"), "assign")) || "text" === t.toLowerCase());
        },
        first: cc11001100_hook("first", he(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", he(function (e, t) {
          return [t - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), "object-key-init"),
        even: cc11001100_hook("even", he(function (e, t) {
          for (var n = cc11001100_hook("n", 0, "var-init"); n < t; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", he(function (e, t) {
          for (var n = cc11001100_hook("n", 1, "var-init"); n < t; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", he(function (e, t, n) {
          for (var r = cc11001100_hook("r", n < 0 ? n + t : n, "var-init"); --r >= 0;) e.push(r);
          return e;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", he(function (e, t, n) {
          for (var r = cc11001100_hook("r", n < 0 ? n + t : n, "var-init"); ++r < t;) e.push(r);
          return e;
        }), "object-key-init")
      }
    }, "assign"), "assign"), r.pseudos.nth = cc11001100_hook("r.pseudos.nth", r.pseudos.eq, "assign"), {
      radio: cc11001100_hook("radio", !0, "object-key-init"),
      checkbox: cc11001100_hook("checkbox", !0, "object-key-init"),
      file: cc11001100_hook("file", !0, "object-key-init"),
      password: cc11001100_hook("password", !0, "object-key-init"),
      image: cc11001100_hook("image", !0, "object-key-init")
    }) r.pseudos[t] = cc11001100_hook("r.pseudos[t]", fe(t), "assign");
    for (t in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !0, "object-key-init")
    }) r.pseudos[t] = cc11001100_hook("r.pseudos[t]", pe(t), "assign");
    function ve() {}
    function me(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t = cc11001100_hook("t", 0, "var-init"), n = cc11001100_hook("n", e.length, "var-init"), r = cc11001100_hook("r", "", "var-init"); t < n; t++) r += cc11001100_hook("r", e[t].value, "assign");
      return r;
    }
    function ye(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", t.dir, "var-init"),
        i = cc11001100_hook("i", t.next, "var-init"),
        o = cc11001100_hook("o", i || r, "var-init"),
        a = cc11001100_hook("a", n && "parentNode" === o, "var-init"),
        s = cc11001100_hook("s", C++, "var-init");
      return t.first ? function (t, n, i) {
        for (; t = cc11001100_hook("t", t[r], "assign");) if (1 === t.nodeType || a) return e(t, n, i);
        return !1;
      } : function (t, n, u) {
        var l,
          c,
          f,
          p = cc11001100_hook("p", [T, s], "var-init");
        if (u) {
          for (; t = cc11001100_hook("t", t[r], "assign");) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
        } else for (; t = cc11001100_hook("t", t[r], "assign");) if (1 === t.nodeType || a) if (c = cc11001100_hook("c", (f = cc11001100_hook("f", t[b] || (t[b] = cc11001100_hook("t[b]", {}, "assign")), "assign"))[t.uniqueID] || (f[t.uniqueID] = cc11001100_hook("f[t.uniqueID]", {}, "assign")), "assign"), i && i === t.nodeName.toLowerCase()) t = cc11001100_hook("t", t[r] || t, "assign");else {
          if ((l = cc11001100_hook("l", c[o], "assign")) && l[0] === T && l[1] === s) return p[2] = cc11001100_hook("p[2]", l[2], "assign");
          if (c[o] = cc11001100_hook("c[o]", p, "assign"), p[2] = cc11001100_hook("p[2]", e(t, n, u), "assign")) return !0;
        }
        return !1;
      };
    }
    function xe(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.length > 1 ? function (t, n, r) {
        for (var i = cc11001100_hook("i", e.length, "var-init"); i--;) if (!e[i](t, n, r)) return !1;
        return !0;
      } : e[0];
    }
    function be(e, t, n, r, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      for (var o, a = cc11001100_hook("a", [], "var-init"), s = cc11001100_hook("s", 0, "var-init"), u = cc11001100_hook("u", e.length, "var-init"), l = cc11001100_hook("l", null != t, "var-init"); s < u; s++) (o = cc11001100_hook("o", e[s], "assign")) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function we(e, t, n, r, i, o) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      return r && !r[b] && (r = cc11001100_hook("r", we(r), "assign")), i && !i[b] && (i = cc11001100_hook("i", we(i, o), "assign")), se(function (o, a, s, u) {
        var l,
          c,
          f,
          p = cc11001100_hook("p", [], "var-init"),
          d = cc11001100_hook("d", [], "var-init"),
          h = cc11001100_hook("h", a.length, "var-init"),
          g = cc11001100_hook("g", o || function (e, t, n) {
            for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", t.length, "var-init"); r < i; r++) oe(e, t[r], n);
            return n;
          }(t || "*", s.nodeType ? [s] : s, []), "var-init"),
          v = cc11001100_hook("v", !e || !o && t ? g : be(g, p, e, s, u), "var-init"),
          m = cc11001100_hook("m", n ? i || (o ? e : h || r) ? [] : a : v, "var-init");
        if (n && n(v, m, s, u), r) for (l = cc11001100_hook("l", be(m, d), "assign"), r(l, [], s, u), c = cc11001100_hook("c", l.length, "assign"); c--;) (f = cc11001100_hook("f", l[c], "assign")) && (m[d[c]] = cc11001100_hook("m[d[c]]", !(v[d[c]] = cc11001100_hook("v[d[c]]", f, "assign")), "assign"));
        if (o) {
          if (i || e) {
            if (i) {
              for (l = cc11001100_hook("l", [], "assign"), c = cc11001100_hook("c", m.length, "assign"); c--;) (f = cc11001100_hook("f", m[c], "assign")) && l.push(v[c] = cc11001100_hook("v[c]", f, "assign"));
              i(null, m = cc11001100_hook("m", [], "assign"), l, u);
            }
            for (c = cc11001100_hook("c", m.length, "assign"); c--;) (f = cc11001100_hook("f", m[c], "assign")) && (l = cc11001100_hook("l", i ? F(o, f) : p[c], "assign")) > -1 && (o[l] = cc11001100_hook("o[l]", !(a[l] = cc11001100_hook("a[l]", f, "assign")), "assign"));
          }
        } else m = cc11001100_hook("m", be(m === a ? m.splice(h, m.length) : m), "assign"), i ? i(null, a, m, u) : L.apply(a, m);
      });
    }
    function Te(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t, n, i, o = cc11001100_hook("o", e.length, "var-init"), a = cc11001100_hook("a", r.relative[e[0].type], "var-init"), s = cc11001100_hook("s", a || r.relative[" "], "var-init"), u = cc11001100_hook("u", a ? 1 : 0, "var-init"), c = cc11001100_hook("c", ye(function (e) {
          return e === t;
        }, s, !0), "var-init"), f = cc11001100_hook("f", ye(function (e) {
          return F(t, e) > -1;
        }, s, !0), "var-init"), p = cc11001100_hook("p", [function (e, n, r) {
          var i = cc11001100_hook("i", !a && (r || n !== l) || ((t = cc11001100_hook("t", n, "assign")).nodeType ? c(e, n, r) : f(e, n, r)), "var-init");
          return t = cc11001100_hook("t", null, "assign"), i;
        }], "var-init"); u < o; u++) if (n = cc11001100_hook("n", r.relative[e[u].type], "assign")) p = cc11001100_hook("p", [ye(xe(p), n)], "assign");else {
        if ((n = cc11001100_hook("n", r.filter[e[u].type].apply(null, e[u].matches), "assign"))[b]) {
          for (i = cc11001100_hook("i", ++u, "assign"); i < o && !r.relative[e[i].type]; i++);
          return we(u > 1 && xe(p), u > 1 && me(e.slice(0, u - 1).concat({
            value: cc11001100_hook("value", " " === e[u - 2].type ? "*" : "", "object-key-init")
          })).replace($, "$1"), n, u < i && Te(e.slice(u, i)), i < o && Te(e = cc11001100_hook("e", e.slice(i), "assign")), i < o && me(e));
        }
        p.push(n);
      }
      return xe(p);
    }
    return ve.prototype = cc11001100_hook("ve.prototype", r.filters = cc11001100_hook("r.filters", r.pseudos, "assign"), "assign"), r.setFilters = cc11001100_hook("r.setFilters", new ve(), "assign"), a = cc11001100_hook("a", oe.tokenize = cc11001100_hook("oe.tokenize", function (e, t) {
      var n,
        i,
        o,
        a,
        s,
        u,
        l,
        c = cc11001100_hook("c", k[e + " "], "var-init");
      if (c) return t ? 0 : c.slice(0);
      for (s = cc11001100_hook("s", e, "assign"), u = cc11001100_hook("u", [], "assign"), l = cc11001100_hook("l", r.preFilter, "assign"); s;) {
        for (a in n && !(i = cc11001100_hook("i", B.exec(s), "assign")) || (i && (s = cc11001100_hook("s", s.slice(i[0].length) || s, "assign")), u.push(o = cc11001100_hook("o", [], "assign"))), n = cc11001100_hook("n", !1, "assign"), (i = cc11001100_hook("i", _.exec(s), "assign")) && (n = cc11001100_hook("n", i.shift(), "assign"), o.push({
          value: cc11001100_hook("value", n, "object-key-init"),
          type: cc11001100_hook("type", i[0].replace($, " "), "object-key-init")
        }), s = cc11001100_hook("s", s.slice(n.length), "assign")), r.filter) !(i = cc11001100_hook("i", V[a].exec(s), "assign")) || l[a] && !(i = cc11001100_hook("i", l[a](i), "assign")) || (n = cc11001100_hook("n", i.shift(), "assign"), o.push({
          value: cc11001100_hook("value", n, "object-key-init"),
          type: cc11001100_hook("type", a, "object-key-init"),
          matches: cc11001100_hook("matches", i, "object-key-init")
        }), s = cc11001100_hook("s", s.slice(n.length), "assign"));
        if (!n) break;
      }
      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    }, "assign"), "assign"), s = cc11001100_hook("s", oe.compile = cc11001100_hook("oe.compile", function (e, t) {
      var n,
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", [], "var-init"),
        s = cc11001100_hook("s", S[e + " "], "var-init");
      if (!s) {
        for (t || (t = cc11001100_hook("t", a(e), "assign")), n = cc11001100_hook("n", t.length, "assign"); n--;) (s = cc11001100_hook("s", Te(t[n]), "assign"))[b] ? i.push(s) : o.push(s);
        s = cc11001100_hook("s", S(e, function (e, t) {
          var n = cc11001100_hook("n", t.length > 0, "var-init"),
            i = cc11001100_hook("i", e.length > 0, "var-init"),
            o = function (o, a, s, u, c) {
              var f,
                h,
                v,
                m = cc11001100_hook("m", 0, "var-init"),
                y = cc11001100_hook("y", "0", "var-init"),
                x = cc11001100_hook("x", o && [], "var-init"),
                b = cc11001100_hook("b", [], "var-init"),
                w = cc11001100_hook("w", l, "var-init"),
                C = cc11001100_hook("C", o || i && r.find.TAG("*", c), "var-init"),
                E = cc11001100_hook("E", T += cc11001100_hook("T", null == w ? 1 : Math.random() || .1, "assign"), "var-init"),
                k = cc11001100_hook("k", C.length, "var-init");
              for (c && (l = cc11001100_hook("l", a === d || a || c, "assign")); y !== k && null != (f = cc11001100_hook("f", C[y], "assign")); y++) {
                if (i && f) {
                  for (h = cc11001100_hook("h", 0, "assign"), a || f.ownerDocument === d || (p(f), s = cc11001100_hook("s", !g, "assign")); v = cc11001100_hook("v", e[h++], "assign");) if (v(f, a || d, s)) {
                    u.push(f);
                    break;
                  }
                  c && (T = cc11001100_hook("T", E, "assign"));
                }
                n && ((f = cc11001100_hook("f", !v && f, "assign")) && m--, o && x.push(f));
              }
              if (m += cc11001100_hook("m", y, "assign"), n && y !== m) {
                for (h = cc11001100_hook("h", 0, "assign"); v = cc11001100_hook("v", t[h++], "assign");) v(x, b, a, s);
                if (o) {
                  if (m > 0) for (; y--;) x[y] || b[y] || (b[y] = cc11001100_hook("b[y]", A.call(u), "assign"));
                  b = cc11001100_hook("b", be(b), "assign");
                }
                L.apply(u, b), c && !o && b.length > 0 && m + t.length > 1 && oe.uniqueSort(u);
              }
              return c && (T = cc11001100_hook("T", E, "assign"), l = cc11001100_hook("l", w, "assign")), x;
            };
          return n ? se(o) : o;
        }(o, i)), "assign"), s.selector = cc11001100_hook("s.selector", e, "assign");
      }
      return s;
    }, "assign"), "assign"), u = cc11001100_hook("u", oe.select = cc11001100_hook("oe.select", function (e, t, n, i) {
      var o,
        u,
        l,
        c,
        f,
        p = cc11001100_hook("p", "function" == typeof e && e, "var-init"),
        d = cc11001100_hook("d", !i && a(e = cc11001100_hook("e", p.selector || e, "assign")), "var-init");
      if (n = cc11001100_hook("n", n || [], "assign"), 1 === d.length) {
        if ((u = cc11001100_hook("u", d[0] = cc11001100_hook("d[0]", d[0].slice(0), "assign"), "assign")).length > 2 && "ID" === (l = cc11001100_hook("l", u[0], "assign")).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = cc11001100_hook("t", (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0], "assign"))) return n;
          p && (t = cc11001100_hook("t", t.parentNode, "assign")), e = cc11001100_hook("e", e.slice(u.shift().value.length), "assign");
        }
        for (o = cc11001100_hook("o", V.needsContext.test(e) ? 0 : u.length, "assign"); o-- && (l = cc11001100_hook("l", u[o], "assign"), !r.relative[c = cc11001100_hook("c", l.type, "assign")]);) if ((f = cc11001100_hook("f", r.find[c], "assign")) && (i = cc11001100_hook("i", f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t), "assign"))) {
          if (u.splice(o, 1), !(e = cc11001100_hook("e", i.length && me(u), "assign"))) return L.apply(n, i), n;
          break;
        }
      }
      return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, "assign"), "assign"), n.sortStable = cc11001100_hook("n.sortStable", b.split("").sort(N).join("") === b, "assign"), n.detectDuplicates = cc11001100_hook("n.detectDuplicates", !!f, "assign"), p(), n.sortDetached = cc11001100_hook("n.sortDetached", ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), "assign"), ue(function (e) {
      return e.innerHTML = cc11001100_hook("e.innerHTML", "<a href='#'></a>", "assign"), "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = cc11001100_hook("e.innerHTML", "<input/>", "assign"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(O, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = cc11001100_hook("r", e.getAttributeNode(t), "assign")) && r.specified ? r.value : null;
    }), oe;
  }(e), "var-init");
  m.find = cc11001100_hook("m.find", C, "assign"), m.expr = cc11001100_hook("m.expr", C.selectors, "assign"), m.expr[":"] = cc11001100_hook("m.expr[\":\"]", m.expr.pseudos, "assign"), m.uniqueSort = cc11001100_hook("m.uniqueSort", m.unique = cc11001100_hook("m.unique", C.uniqueSort, "assign"), "assign"), m.text = cc11001100_hook("m.text", C.getText, "assign"), m.isXMLDoc = cc11001100_hook("m.isXMLDoc", C.isXML, "assign"), m.contains = cc11001100_hook("m.contains", C.contains, "assign"), m.escapeSelector = cc11001100_hook("m.escapeSelector", C.escape, "assign");
  var E = function (e, t, n) {
      for (var r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", void 0 !== n, "var-init"); (e = cc11001100_hook("e", e[t], "assign")) && 9 !== e.nodeType;) if (1 === e.nodeType) {
        if (i && m(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    k = function (e, t) {
      for (var n = cc11001100_hook("n", [], "var-init"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    S = cc11001100_hook("S", m.expr.match.needsContext, "var-init");
  function N(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = cc11001100_hook("D", /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, "var-init"),
    j = cc11001100_hook("j", /^.[^:#\[\.,]*$/, "var-init");
  function A(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return m.isFunction(t) ? m.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? m.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? m.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : j.test(t) ? m.filter(t, e, n) : (t = cc11001100_hook("t", m.filter(t, e), "assign"), m.grep(e, function (e) {
      return u.call(t, e) > -1 !== n && 1 === e.nodeType;
    }));
  }
  m.filter = cc11001100_hook("m.filter", function (e, t, n) {
    var r = cc11001100_hook("r", t[0], "var-init");
    return n && (e = cc11001100_hook("e", ":not(" + e + ")", "assign")), 1 === t.length && 1 === r.nodeType ? m.find.matchesSelector(r, e) ? [r] : [] : m.find.matches(e, m.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, "assign"), m.fn.extend({
    find: function (e) {
      var t,
        n,
        r = cc11001100_hook("r", this.length, "var-init"),
        i = cc11001100_hook("i", this, "var-init");
      if ("string" != typeof e) return this.pushStack(m(e).filter(function () {
        for (t = cc11001100_hook("t", 0, "assign"); t < r; t++) if (m.contains(i[t], this)) return !0;
      }));
      for (n = cc11001100_hook("n", this.pushStack([]), "assign"), t = cc11001100_hook("t", 0, "assign"); t < r; t++) m.find(e, i[t], n);
      return r > 1 ? m.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(A(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(A(this, e || [], !0));
    },
    is: function (e) {
      return !!A(this, "string" == typeof e && S.test(e) ? m(e) : e || [], !1).length;
    }
  });
  var q,
    L = cc11001100_hook("L", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, "var-init");
  (m.fn.init = cc11001100_hook("m.fn.init", function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (n = cc11001100_hook("n", n || q, "assign"), "string" == typeof e) {
      if (!(i = cc11001100_hook("i", "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e), "assign")) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = cc11001100_hook("t", t instanceof m ? t[0] : t, "assign"), m.merge(this, m.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), D.test(i[1]) && m.isPlainObject(t)) for (i in t) m.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (o = cc11001100_hook("o", r.getElementById(i[2]), "assign")) && (this[0] = cc11001100_hook("this[0]", o, "assign"), this.length = cc11001100_hook("this.length", 1, "assign")), this;
    }
    return e.nodeType ? (this[0] = cc11001100_hook("this[0]", e, "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : m.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(m) : m.makeArray(e, this);
  }, "assign")).prototype = cc11001100_hook("(m.fn.init = function (e, t, n) {\n  var i, o;\n  if (!e) return this;\n  if (n = n || q, \"string\" == typeof e) {\n    if (!(i = \"<\" === e[0] && \">\" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);\n    if (i[1]) {\n      if (t = t instanceof m ? t[0] : t, m.merge(this, m.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), D.test(i[1]) && m.isPlainObject(t)) for (i in t) m.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);\n      return this;\n    }\n    return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;\n  }\n  return e.nodeType ? (this[0] = e, this.length = 1, this) : m.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(m) : m.makeArray(e, this);\n}).prototype", m.fn, "assign"), q = cc11001100_hook("q", m(r), "assign");
  var H = cc11001100_hook("H", /^(?:parents|prev(?:Until|All))/, "var-init"),
    F = cc11001100_hook("F", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  function O(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (; (e = cc11001100_hook("e", e[t], "assign")) && 1 !== e.nodeType;);
    return e;
  }
  m.fn.extend({
    has: function (e) {
      var t = cc11001100_hook("t", m(e, this), "var-init"),
        n = cc11001100_hook("n", t.length, "var-init");
      return this.filter(function () {
        for (var e = cc11001100_hook("e", 0, "var-init"); e < n; e++) if (m.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", this.length, "var-init"),
        o = cc11001100_hook("o", [], "var-init"),
        a = cc11001100_hook("a", "string" != typeof e && m(e), "var-init");
      if (!S.test(e)) for (; r < i; r++) for (n = cc11001100_hook("n", this[r], "assign"); n && n !== t; n = cc11001100_hook("n", n.parentNode, "assign")) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? u.call(m(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), m.each({
    parent: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return E(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return E(e, "parentNode", n);
    },
    next: function (e) {
      return O(e, "nextSibling");
    },
    prev: function (e) {
      return O(e, "previousSibling");
    },
    nextAll: function (e) {
      return E(e, "nextSibling");
    },
    prevAll: function (e) {
      return E(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return E(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return E(e, "previousSibling", n);
    },
    siblings: function (e) {
      return k((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return k(e.firstChild);
    },
    contents: function (e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = cc11001100_hook("e", e.content || e, "assign")), m.merge([], e.childNodes));
    }
  }, function (e, t) {
    m.fn[e] = cc11001100_hook("m.fn[e]", function (n, r) {
      var i = cc11001100_hook("i", m.map(this, t, n), "var-init");
      return "Until" !== e.slice(-5) && (r = cc11001100_hook("r", n, "assign")), r && "string" == typeof r && (i = cc11001100_hook("i", m.filter(r, i), "assign")), this.length > 1 && (F[e] || m.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    }, "assign");
  });
  var P = cc11001100_hook("P", /[^\x20\t\r\n\f]+/g, "var-init");
  function R(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e;
  }
  function M(e) {
    cc11001100_hook("e", e, "function-parameter");
    throw e;
  }
  function I(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i;
    try {
      e && m.isFunction(i = cc11001100_hook("i", e.promise, "assign")) ? i.call(e).done(t).fail(n) : e && m.isFunction(i = cc11001100_hook("i", e.then, "assign")) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  m.Callbacks = cc11001100_hook("m.Callbacks", function (e) {
    e = cc11001100_hook("e", "string" == typeof e ? function (e) {
      var t = cc11001100_hook("t", {}, "var-init");
      return m.each(e.match(P) || [], function (e, n) {
        t[n] = cc11001100_hook("t[n]", !0, "assign");
      }), t;
    }(e) : m.extend({}, e), "assign");
    var t,
      n,
      r,
      i,
      o = cc11001100_hook("o", [], "var-init"),
      a = cc11001100_hook("a", [], "var-init"),
      s = cc11001100_hook("s", -1, "var-init"),
      u = function () {
        for (i = cc11001100_hook("i", i || e.once, "assign"), r = cc11001100_hook("r", t = cc11001100_hook("t", !0, "assign"), "assign"); a.length; s = cc11001100_hook("s", -1, "assign")) for (n = cc11001100_hook("n", a.shift(), "assign"); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = cc11001100_hook("s", o.length, "assign"), n = cc11001100_hook("n", !1, "assign"));
        e.memory || (n = cc11001100_hook("n", !1, "assign")), t = cc11001100_hook("t", !1, "assign"), i && (o = cc11001100_hook("o", n ? [] : "", "assign"));
      },
      l = cc11001100_hook("l", {
        add: function () {
          return o && (n && !t && (s = cc11001100_hook("s", o.length - 1, "assign"), a.push(n)), function t(n) {
            m.each(n, function (n, r) {
              m.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== m.type(r) && t(r);
            });
          }(arguments), n && !t && u()), this;
        },
        remove: function () {
          return m.each(arguments, function (e, t) {
            for (var n; (n = cc11001100_hook("n", m.inArray(t, o, n), "assign")) > -1;) o.splice(n, 1), n <= s && s--;
          }), this;
        },
        has: function (e) {
          return e ? m.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = cc11001100_hook("o", [], "assign")), this;
        },
        disable: function () {
          return i = cc11001100_hook("i", a = cc11001100_hook("a", [], "assign"), "assign"), o = cc11001100_hook("o", n = cc11001100_hook("n", "", "assign"), "assign"), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return i = cc11001100_hook("i", a = cc11001100_hook("a", [], "assign"), "assign"), n || t || (o = cc11001100_hook("o", n = cc11001100_hook("n", "", "assign"), "assign")), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return i || (n = cc11001100_hook("n", [e, (n = cc11001100_hook("n", n || [], "assign")).slice ? n.slice() : n], "assign"), a.push(n), t || u()), this;
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        }
      }, "var-init");
    return l;
  }, "assign"), m.extend({
    Deferred: function (t) {
      var n = cc11001100_hook("n", [["notify", "progress", m.Callbacks("memory"), m.Callbacks("memory"), 2], ["resolve", "done", m.Callbacks("once memory"), m.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", m.Callbacks("once memory"), m.Callbacks("once memory"), 1, "rejected"]], "var-init"),
        r = cc11001100_hook("r", "pending", "var-init"),
        i = cc11001100_hook("i", {
          state: function () {
            return r;
          },
          always: function () {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = cc11001100_hook("e", arguments, "var-init");
            return m.Deferred(function (t) {
              m.each(n, function (n, r) {
                var i = cc11001100_hook("i", m.isFunction(e[r[4]]) && e[r[4]], "var-init");
                o[r[1]](function () {
                  var e = cc11001100_hook("e", i && i.apply(this, arguments), "var-init");
                  e && m.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                });
              }), e = cc11001100_hook("e", null, "assign");
            }).promise();
          },
          then: function (t, r, i) {
            var o = cc11001100_hook("o", 0, "var-init");
            function a(t, n, r, i) {
              cc11001100_hook("t", t, "function-parameter");
              cc11001100_hook("n", n, "function-parameter");
              cc11001100_hook("r", r, "function-parameter");
              cc11001100_hook("i", i, "function-parameter");
              return function () {
                var s = cc11001100_hook("s", this, "var-init"),
                  u = cc11001100_hook("u", arguments, "var-init"),
                  l = function () {
                    var e, l;
                    if (!(t < o)) {
                      if ((e = cc11001100_hook("e", r.apply(s, u), "assign")) === n.promise()) throw new TypeError("Thenable self-resolution");
                      l = cc11001100_hook("l", e && ("object" == typeof e || "function" == typeof e) && e.then, "assign"), m.isFunction(l) ? i ? l.call(e, a(o, n, R, i), a(o, n, M, i)) : (o++, l.call(e, a(o, n, R, i), a(o, n, M, i), a(o, n, R, n.notifyWith))) : (r !== R && (s = cc11001100_hook("s", void 0, "assign"), u = cc11001100_hook("u", [e], "assign")), (i || n.resolveWith)(s, u));
                    }
                  },
                  c = cc11001100_hook("c", i ? l : function () {
                    try {
                      l();
                    } catch (e) {
                      m.Deferred.exceptionHook && m.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== M && (s = cc11001100_hook("s", void 0, "assign"), u = cc11001100_hook("u", [e], "assign")), n.rejectWith(s, u));
                    }
                  }, "var-init");
                t ? c() : (m.Deferred.getStackHook && (c.stackTrace = cc11001100_hook("c.stackTrace", m.Deferred.getStackHook(), "assign")), e.setTimeout(c));
              };
            }
            return m.Deferred(function (e) {
              n[0][3].add(a(0, e, m.isFunction(i) ? i : R, e.notifyWith)), n[1][3].add(a(0, e, m.isFunction(t) ? t : R)), n[2][3].add(a(0, e, m.isFunction(r) ? r : M));
            }).promise();
          },
          promise: function (e) {
            return null != e ? m.extend(e, i) : i;
          }
        }, "var-init"),
        o = cc11001100_hook("o", {}, "var-init");
      return m.each(n, function (e, t) {
        var a = cc11001100_hook("a", t[2], "var-init"),
          s = cc11001100_hook("s", t[5], "var-init");
        i[t[1]] = cc11001100_hook("i[t[1]]", a.add, "assign"), s && a.add(function () {
          r = cc11001100_hook("r", s, "assign");
        }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = cc11001100_hook("o[t[0]]", function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, "assign"), o[t[0] + "With"] = cc11001100_hook("o[t[0] + \"With\"]", a.fireWith, "assign");
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function (e) {
      var t = cc11001100_hook("t", arguments.length, "var-init"),
        n = cc11001100_hook("n", t, "var-init"),
        r = cc11001100_hook("r", Array(n), "var-init"),
        i = cc11001100_hook("i", o.call(arguments), "var-init"),
        a = cc11001100_hook("a", m.Deferred(), "var-init"),
        s = function (e) {
          return function (n) {
            r[e] = cc11001100_hook("r[e]", this, "assign"), i[e] = cc11001100_hook("i[e]", arguments.length > 1 ? o.call(arguments) : n, "assign"), --t || a.resolveWith(r, i);
          };
        };
      if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || m.isFunction(i[n] && i[n].then))) return a.then();
      for (; n--;) I(i[n], s(n), a.reject);
      return a.promise();
    }
  });
  var W = cc11001100_hook("W", /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/, "var-init");
  m.Deferred.exceptionHook = cc11001100_hook("m.Deferred.exceptionHook", function (t, n) {
    e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, "assign"), m.readyException = cc11001100_hook("m.readyException", function (t) {
    e.setTimeout(function () {
      throw t;
    });
  }, "assign");
  var $ = cc11001100_hook("$", m.Deferred(), "var-init");
  function B() {
    r.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), m.ready();
  }
  m.fn.ready = cc11001100_hook("m.fn.ready", function (e) {
    return $.then(e).catch(function (e) {
      m.readyException(e);
    }), this;
  }, "assign"), m.extend({
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    ready: function (e) {
      (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = cc11001100_hook("m.isReady", !0, "assign"), !0 !== e && --m.readyWait > 0 || $.resolveWith(r, [m]));
    }
  }), m.ready.then = cc11001100_hook("m.ready.then", $.then, "assign"), "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(m.ready) : (r.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
  var _ = function (e, t, n, r, i, o, a) {
      var s = cc11001100_hook("s", 0, "var-init"),
        u = cc11001100_hook("u", e.length, "var-init"),
        l = cc11001100_hook("l", null == n, "var-init");
      if ("object" === m.type(n)) for (s in i = cc11001100_hook("i", !0, "assign"), n) _(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = cc11001100_hook("i", !0, "assign"), m.isFunction(r) || (a = cc11001100_hook("a", !0, "assign")), l && (a ? (t.call(e, r), t = cc11001100_hook("t", null, "assign")) : (l = cc11001100_hook("l", t, "assign"), t = cc11001100_hook("t", function (e, t, n) {
        return l.call(m(e), n);
      }, "assign"))), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  function X() {
    this.expando = cc11001100_hook("this.expando", m.expando + X.uid++, "assign");
  }
  X.uid = cc11001100_hook("X.uid", 1, "assign"), X.prototype = cc11001100_hook("X.prototype", {
    cache: function (e) {
      var t = cc11001100_hook("t", e[this.expando], "var-init");
      return t || (t = cc11001100_hook("t", {}, "assign"), z(e) && (e.nodeType ? e[this.expando] = cc11001100_hook("e[this.expando]", t, "assign") : Object.defineProperty(e, this.expando, {
        value: cc11001100_hook("value", t, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      }))), t;
    },
    set: function (e, t, n) {
      var r,
        i = cc11001100_hook("i", this.cache(e), "var-init");
      if ("string" == typeof t) i[m.camelCase(t)] = cc11001100_hook("i[m.camelCase(t)]", n, "assign");else for (r in t) i[m.camelCase(r)] = cc11001100_hook("i[m.camelCase(r)]", t[r], "assign");
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][m.camelCase(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
        r = cc11001100_hook("r", e[this.expando], "var-init");
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = cc11001100_hook("n", (t = cc11001100_hook("t", Array.isArray(t) ? t.map(m.camelCase) : (t = cc11001100_hook("t", m.camelCase(t), "assign")) in r ? [t] : t.match(P) || [], "assign")).length, "assign");
          for (; n--;) delete r[t[n]];
        }
        (void 0 === t || m.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = cc11001100_hook("e[this.expando]", void 0, "assign") : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = cc11001100_hook("t", e[this.expando], "var-init");
      return void 0 !== t && !m.isEmptyObject(t);
    }
  }, "assign");
  var U = cc11001100_hook("U", new X(), "var-init"),
    V = cc11001100_hook("V", new X(), "var-init"),
    G = cc11001100_hook("G", /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, "var-init"),
    Y = cc11001100_hook("Y", /[A-Z]/g, "var-init");
  function Q(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = cc11001100_hook("r", "data-" + t.replace(Y, "-$&").toLowerCase(), "assign"), "string" == typeof (n = cc11001100_hook("n", e.getAttribute(r), "assign"))) {
      try {
        n = cc11001100_hook("n", function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e);
        }(n), "assign");
      } catch (e) {}
      V.set(e, t, n);
    } else n = cc11001100_hook("n", void 0, "assign");
    return n;
  }
  m.extend({
    hasData: function (e) {
      return V.hasData(e) || U.hasData(e);
    },
    data: function (e, t, n) {
      return V.access(e, t, n);
    },
    removeData: function (e, t) {
      V.remove(e, t);
    },
    _data: function (e, t, n) {
      return U.access(e, t, n);
    },
    _removeData: function (e, t) {
      U.remove(e, t);
    }
  }), m.fn.extend({
    data: function (e, t) {
      var n,
        r,
        i,
        o = cc11001100_hook("o", this[0], "var-init"),
        a = cc11001100_hook("a", o && o.attributes, "var-init");
      if (void 0 === e) {
        if (this.length && (i = cc11001100_hook("i", V.get(o), "assign"), 1 === o.nodeType && !U.get(o, "hasDataAttrs"))) {
          for (n = cc11001100_hook("n", a.length, "assign"); n--;) a[n] && 0 === (r = cc11001100_hook("r", a[n].name, "assign")).indexOf("data-") && (r = cc11001100_hook("r", m.camelCase(r.slice(5)), "assign"), Q(o, r, i[r]));
          U.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == typeof e ? this.each(function () {
        V.set(this, e);
      }) : _(this, function (t) {
        var n;
        if (o && void 0 === t) return void 0 !== (n = cc11001100_hook("n", V.get(o, e), "assign")) || void 0 !== (n = cc11001100_hook("n", Q(o, e), "assign")) ? n : void 0;
        this.each(function () {
          V.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        V.remove(this, e);
      });
    }
  }), m.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = cc11001100_hook("t", (t || "fx") + "queue", "assign"), r = cc11001100_hook("r", U.get(e, t), "assign"), n && (!r || Array.isArray(n) ? r = cc11001100_hook("r", U.access(e, t, m.makeArray(n)), "assign") : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = cc11001100_hook("t", t || "fx", "assign");
      var n = cc11001100_hook("n", m.queue(e, t), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", n.shift(), "var-init"),
        o = cc11001100_hook("o", m._queueHooks(e, t), "var-init");
      "inprogress" === i && (i = cc11001100_hook("i", n.shift(), "assign"), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        m.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = cc11001100_hook("n", t + "queueHooks", "var-init");
      return U.get(e, n) || U.access(e, n, {
        empty: cc11001100_hook("empty", m.Callbacks("once memory").add(function () {
          U.remove(e, [t + "queue", n]);
        }), "object-key-init")
      });
    }
  }), m.fn.extend({
    queue: function (e, t) {
      var n = cc11001100_hook("n", 2, "var-init");
      return "string" != typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", "fx", "assign"), n--), arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = cc11001100_hook("n", m.queue(this, e, t), "var-init");
        m._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        m.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
        r = cc11001100_hook("r", 1, "var-init"),
        i = cc11001100_hook("i", m.Deferred(), "var-init"),
        o = cc11001100_hook("o", this, "var-init"),
        a = cc11001100_hook("a", this.length, "var-init"),
        s = function () {
          --r || i.resolveWith(o, [o]);
        };
      for ("string" != typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), e = cc11001100_hook("e", e || "fx", "assign"); a--;) (n = cc11001100_hook("n", U.get(o[a], e + "queueHooks"), "assign")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var J = cc11001100_hook("J", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    K = cc11001100_hook("K", new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"), "var-init"),
    Z = cc11001100_hook("Z", ["Top", "Right", "Bottom", "Left"], "var-init"),
    ee = function (e, t) {
      return "none" === (e = cc11001100_hook("e", t || e, "assign")).style.display || "" === e.style.display && m.contains(e.ownerDocument, e) && "none" === m.css(e, "display");
    },
    te = function (e, t, n, r) {
      var i,
        o,
        a = cc11001100_hook("a", {}, "var-init");
      for (o in t) a[o] = cc11001100_hook("a[o]", e.style[o], "assign"), e.style[o] = cc11001100_hook("e.style[o]", t[o], "assign");
      for (o in i = cc11001100_hook("i", n.apply(e, r || []), "assign"), t) e.style[o] = cc11001100_hook("e.style[o]", a[o], "assign");
      return i;
    };
  function ne(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i,
      o = cc11001100_hook("o", 1, "var-init"),
      a = cc11001100_hook("a", 20, "var-init"),
      s = cc11001100_hook("s", r ? function () {
        return r.cur();
      } : function () {
        return m.css(e, t, "");
      }, "var-init"),
      u = cc11001100_hook("u", s(), "var-init"),
      l = cc11001100_hook("l", n && n[3] || (m.cssNumber[t] ? "" : "px"), "var-init"),
      c = cc11001100_hook("c", (m.cssNumber[t] || "px" !== l && +u) && K.exec(m.css(e, t)), "var-init");
    if (c && c[3] !== l) {
      l = cc11001100_hook("l", l || c[3], "assign"), n = cc11001100_hook("n", n || [], "assign"), c = cc11001100_hook("c", +u || 1, "assign");
      do {
        c /= cc11001100_hook("c", o = cc11001100_hook("o", o || ".5", "assign"), "assign"), m.style(e, t, c + l);
      } while (o !== (o = cc11001100_hook("o", s() / u, "assign")) && 1 !== o && --a);
    }
    return n && (c = cc11001100_hook("c", +c || +u || 0, "assign"), i = cc11001100_hook("i", n[1] ? c + (n[1] + 1) * n[2] : +n[2], "assign"), r && (r.unit = cc11001100_hook("r.unit", l, "assign"), r.start = cc11001100_hook("r.start", c, "assign"), r.end = cc11001100_hook("r.end", i, "assign"))), i;
  }
  var re = cc11001100_hook("re", {}, "var-init");
  function ie(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t,
      n = cc11001100_hook("n", e.ownerDocument, "var-init"),
      r = cc11001100_hook("r", e.nodeName, "var-init"),
      i = cc11001100_hook("i", re[r], "var-init");
    return i || (t = cc11001100_hook("t", n.body.appendChild(n.createElement(r)), "assign"), i = cc11001100_hook("i", m.css(t, "display"), "assign"), t.parentNode.removeChild(t), "none" === i && (i = cc11001100_hook("i", "block", "assign")), re[r] = cc11001100_hook("re[r]", i, "assign"), i);
  }
  function oe(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n, r, i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", e.length, "var-init"); o < a; o++) (r = cc11001100_hook("r", e[o], "assign")).style && (n = cc11001100_hook("n", r.style.display, "assign"), t ? ("none" === n && (i[o] = cc11001100_hook("i[o]", U.get(r, "display") || null, "assign"), i[o] || (r.style.display = cc11001100_hook("r.style.display", "", "assign"))), "" === r.style.display && ee(r) && (i[o] = cc11001100_hook("i[o]", ie(r), "assign"))) : "none" !== n && (i[o] = cc11001100_hook("i[o]", "none", "assign"), U.set(r, "display", n)));
    for (o = cc11001100_hook("o", 0, "assign"); o < a; o++) null != i[o] && (e[o].style.display = cc11001100_hook("e[o].style.display", i[o], "assign"));
    return e;
  }
  m.fn.extend({
    show: function () {
      return oe(this, !0);
    },
    hide: function () {
      return oe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ee(this) ? m(this).show() : m(this).hide();
      });
    }
  });
  var ae = cc11001100_hook("ae", /^(?:checkbox|radio)$/i, "var-init"),
    se = cc11001100_hook("se", /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, "var-init"),
    ue = cc11001100_hook("ue", /^$|\/(?:java|ecma)script/i, "var-init"),
    le = cc11001100_hook("le", {
      option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
      thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
      col: cc11001100_hook("col", [2, "<table><colgroup>", "</colgroup></table>"], "object-key-init"),
      tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
      td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
      _default: cc11001100_hook("_default", [0, "", ""], "object-key-init")
    }, "var-init");
  function ce(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n;
    return n = cc11001100_hook("n", void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], "assign"), void 0 === t || t && N(e, t) ? m.merge([e], n) : n;
  }
  function fe(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"));
  }
  le.optgroup = cc11001100_hook("le.optgroup", le.option, "assign"), le.tbody = cc11001100_hook("le.tbody", le.tfoot = cc11001100_hook("le.tfoot", le.colgroup = cc11001100_hook("le.colgroup", le.caption = cc11001100_hook("le.caption", le.thead, "assign"), "assign"), "assign"), "assign"), le.th = cc11001100_hook("le.th", le.td, "assign");
  var pe,
    de,
    he = cc11001100_hook("he", /<|&#?\w+;/, "var-init");
  function ge(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    for (var o, a, s, u, l, c, f = cc11001100_hook("f", t.createDocumentFragment(), "var-init"), p = cc11001100_hook("p", [], "var-init"), d = cc11001100_hook("d", 0, "var-init"), h = cc11001100_hook("h", e.length, "var-init"); d < h; d++) if ((o = cc11001100_hook("o", e[d], "assign")) || 0 === o) if ("object" === m.type(o)) m.merge(p, o.nodeType ? [o] : o);else if (he.test(o)) {
      for (a = cc11001100_hook("a", a || f.appendChild(t.createElement("div")), "assign"), s = cc11001100_hook("s", (se.exec(o) || ["", ""])[1].toLowerCase(), "assign"), u = cc11001100_hook("u", le[s] || le._default, "assign"), a.innerHTML = cc11001100_hook("a.innerHTML", u[1] + m.htmlPrefilter(o) + u[2], "assign"), c = cc11001100_hook("c", u[0], "assign"); c--;) a = cc11001100_hook("a", a.lastChild, "assign");
      m.merge(p, a.childNodes), (a = cc11001100_hook("a", f.firstChild, "assign")).textContent = cc11001100_hook("(a = f.firstChild).textContent", "", "assign");
    } else p.push(t.createTextNode(o));
    for (f.textContent = cc11001100_hook("f.textContent", "", "assign"), d = cc11001100_hook("d", 0, "assign"); o = cc11001100_hook("o", p[d++], "assign");) if (r && m.inArray(o, r) > -1) i && i.push(o);else if (l = cc11001100_hook("l", m.contains(o.ownerDocument, o), "assign"), a = cc11001100_hook("a", ce(f.appendChild(o), "script"), "assign"), l && fe(a), n) for (c = cc11001100_hook("c", 0, "assign"); o = cc11001100_hook("o", a[c++], "assign");) ue.test(o.type || "") && n.push(o);
    return f;
  }
  pe = cc11001100_hook("pe", r.createDocumentFragment().appendChild(r.createElement("div")), "assign"), (de = cc11001100_hook("de", r.createElement("input"), "assign")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), pe.appendChild(de), h.checkClone = cc11001100_hook("h.checkClone", pe.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), pe.innerHTML = cc11001100_hook("pe.innerHTML", "<textarea>x</textarea>", "assign"), h.noCloneChecked = cc11001100_hook("h.noCloneChecked", !!pe.cloneNode(!0).lastChild.defaultValue, "assign");
  var ve = cc11001100_hook("ve", r.documentElement, "var-init"),
    me = cc11001100_hook("me", /^key/, "var-init"),
    ye = cc11001100_hook("ye", /^(?:mouse|pointer|contextmenu|drag|drop)|click/, "var-init"),
    xe = cc11001100_hook("xe", /^([^.]*)(?:\.(.+)|)/, "var-init");
  function be() {
    return !0;
  }
  function we() {
    return !1;
  }
  function Te() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function Ce(e, t, n, r, i, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = cc11001100_hook("r", r || n, "assign"), n = cc11001100_hook("n", void 0, "assign")), t) Ce(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = cc11001100_hook("i", n, "assign"), r = cc11001100_hook("r", n = cc11001100_hook("n", void 0, "assign"), "assign")) : null == i && ("string" == typeof n ? (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", void 0, "assign")) : (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", void 0, "assign"))), !1 === i) i = cc11001100_hook("i", we, "assign");else if (!i) return e;
    return 1 === o && (a = cc11001100_hook("a", i, "assign"), i = cc11001100_hook("i", function (e) {
      return m().off(e), a.apply(this, arguments);
    }, "assign"), i.guid = cc11001100_hook("i.guid", a.guid || (a.guid = cc11001100_hook("a.guid", m.guid++, "assign")), "assign")), e.each(function () {
      m.event.add(this, t, i, r, n);
    });
  }
  m.event = cc11001100_hook("m.event", {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = cc11001100_hook("v", U.get(e), "var-init");
      if (v) for (n.handler && (n = cc11001100_hook("n", (o = cc11001100_hook("o", n, "assign")).handler, "assign"), i = cc11001100_hook("i", o.selector, "assign")), i && m.find.matchesSelector(ve, i), n.guid || (n.guid = cc11001100_hook("n.guid", m.guid++, "assign")), (u = cc11001100_hook("u", v.events, "assign")) || (u = cc11001100_hook("u", v.events = cc11001100_hook("v.events", {}, "assign"), "assign")), (a = cc11001100_hook("a", v.handle, "assign")) || (a = cc11001100_hook("a", v.handle = cc11001100_hook("v.handle", function (t) {
        return void 0 !== m && m.event.triggered !== t.type ? m.event.dispatch.apply(e, arguments) : void 0;
      }, "assign"), "assign")), l = cc11001100_hook("l", (t = cc11001100_hook("t", (t || "").match(P) || [""], "assign")).length, "assign"); l--;) d = cc11001100_hook("d", g = cc11001100_hook("g", (s = cc11001100_hook("s", xe.exec(t[l]) || [], "assign"))[1], "assign"), "assign"), h = cc11001100_hook("h", (s[2] || "").split(".").sort(), "assign"), d && (f = cc11001100_hook("f", m.event.special[d] || {}, "assign"), d = cc11001100_hook("d", (i ? f.delegateType : f.bindType) || d, "assign"), f = cc11001100_hook("f", m.event.special[d] || {}, "assign"), c = cc11001100_hook("c", m.extend({
        type: cc11001100_hook("type", d, "object-key-init"),
        origType: cc11001100_hook("origType", g, "object-key-init"),
        data: cc11001100_hook("data", r, "object-key-init"),
        handler: cc11001100_hook("handler", n, "object-key-init"),
        guid: cc11001100_hook("guid", n.guid, "object-key-init"),
        selector: cc11001100_hook("selector", i, "object-key-init"),
        needsContext: cc11001100_hook("needsContext", i && m.expr.match.needsContext.test(i), "object-key-init"),
        namespace: cc11001100_hook("namespace", h.join("."), "object-key-init")
      }, o), "assign"), (p = cc11001100_hook("p", u[d], "assign")) || ((p = cc11001100_hook("p", u[d] = cc11001100_hook("u[d]", [], "assign"), "assign")).delegateCount = cc11001100_hook("(p = u[d] = []).delegateCount", 0, "assign"), f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = cc11001100_hook("c.handler.guid", n.guid, "assign"))), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), m.event.global[d] = cc11001100_hook("m.event.global[d]", !0, "assign"));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = cc11001100_hook("v", U.hasData(e) && U.get(e), "var-init");
      if (v && (u = cc11001100_hook("u", v.events, "assign"))) {
        for (l = cc11001100_hook("l", (t = cc11001100_hook("t", (t || "").match(P) || [""], "assign")).length, "assign"); l--;) if (d = cc11001100_hook("d", g = cc11001100_hook("g", (s = cc11001100_hook("s", xe.exec(t[l]) || [], "assign"))[1], "assign"), "assign"), h = cc11001100_hook("h", (s[2] || "").split(".").sort(), "assign"), d) {
          for (f = cc11001100_hook("f", m.event.special[d] || {}, "assign"), p = cc11001100_hook("p", u[d = cc11001100_hook("d", (r ? f.delegateType : f.bindType) || d, "assign")] || [], "assign"), s = cc11001100_hook("s", s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), a = cc11001100_hook("a", o = cc11001100_hook("o", p.length, "assign"), "assign"); o--;) c = cc11001100_hook("c", p[o], "assign"), !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || m.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) m.event.remove(e, d + t[l], n, r, !0);
        m.isEmptyObject(u) && U.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = cc11001100_hook("s", m.event.fix(e), "var-init"),
        u = cc11001100_hook("u", new Array(arguments.length), "var-init"),
        l = cc11001100_hook("l", (U.get(this, "events") || {})[s.type] || [], "var-init"),
        c = cc11001100_hook("c", m.event.special[s.type] || {}, "var-init");
      for (u[0] = cc11001100_hook("u[0]", s, "assign"), t = cc11001100_hook("t", 1, "assign"); t < arguments.length; t++) u[t] = cc11001100_hook("u[t]", arguments[t], "assign");
      if (s.delegateTarget = cc11001100_hook("s.delegateTarget", this, "assign"), !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        for (a = cc11001100_hook("a", m.event.handlers.call(this, s, l), "assign"), t = cc11001100_hook("t", 0, "assign"); (i = cc11001100_hook("i", a[t++], "assign")) && !s.isPropagationStopped();) for (s.currentTarget = cc11001100_hook("s.currentTarget", i.elem, "assign"), n = cc11001100_hook("n", 0, "assign"); (o = cc11001100_hook("o", i.handlers[n++], "assign")) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = cc11001100_hook("s.handleObj", o, "assign"), s.data = cc11001100_hook("s.data", o.data, "assign"), void 0 !== (r = cc11001100_hook("r", ((m.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), "assign")) && !1 === (s.result = cc11001100_hook("s.result", r, "assign")) && (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = cc11001100_hook("s", [], "var-init"),
        u = cc11001100_hook("u", t.delegateCount, "var-init"),
        l = cc11001100_hook("l", e.target, "var-init");
      if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = cc11001100_hook("l", l.parentNode || this, "assign")) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = cc11001100_hook("o", [], "assign"), a = cc11001100_hook("a", {}, "assign"), n = cc11001100_hook("n", 0, "assign"); n < u; n++) void 0 === a[i = cc11001100_hook("i", (r = cc11001100_hook("r", t[n], "assign")).selector + " ", "assign")] && (a[i] = cc11001100_hook("a[i]", r.needsContext ? m(i, this).index(l) > -1 : m.find(i, this, null, [l]).length, "assign")), a[i] && o.push(r);
        o.length && s.push({
          elem: cc11001100_hook("elem", l, "object-key-init"),
          handlers: cc11001100_hook("handlers", o, "object-key-init")
        });
      }
      return l = cc11001100_hook("l", this, "assign"), u < t.length && s.push({
        elem: cc11001100_hook("elem", l, "object-key-init"),
        handlers: cc11001100_hook("handlers", t.slice(u), "object-key-init")
      }), s;
    },
    addProp: function (e, t) {
      Object.defineProperty(m.Event.prototype, e, {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        get: cc11001100_hook("get", m.isFunction(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, "object-key-init"),
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", t, "object-key-init")
          });
        }
      });
    },
    fix: function (e) {
      return e[m.expando] ? e : new m.Event(e);
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      focus: {
        trigger: function () {
          if (this !== Te() && this.focus) return this.focus(), !1;
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          if (this === Te() && this.blur) return this.blur(), !1;
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        },
        _default: function (e) {
          return N(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = cc11001100_hook("e.originalEvent.returnValue", e.result, "assign"));
        }
      }
    }
  }, "assign"), m.removeEvent = cc11001100_hook("m.removeEvent", function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, "assign"), m.Event = cc11001100_hook("m.Event", function (e, t) {
    if (!(this instanceof m.Event)) return new m.Event(e, t);
    e && e.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", e, "assign"), this.type = cc11001100_hook("this.type", e.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? be : we, "assign"), this.target = cc11001100_hook("this.target", e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, "assign"), this.currentTarget = cc11001100_hook("this.currentTarget", e.currentTarget, "assign"), this.relatedTarget = cc11001100_hook("this.relatedTarget", e.relatedTarget, "assign")) : this.type = cc11001100_hook("this.type", e, "assign"), t && m.extend(this, t), this.timeStamp = cc11001100_hook("this.timeStamp", e && e.timeStamp || m.now(), "assign"), this[m.expando] = cc11001100_hook("this[m.expando]", !0, "assign");
  }, "assign"), m.Event.prototype = cc11001100_hook("m.Event.prototype", {
    constructor: cc11001100_hook("constructor", m.Event, "object-key-init"),
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", we, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", we, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", we, "object-key-init"),
    isSimulated: cc11001100_hook("isSimulated", !1, "object-key-init"),
    preventDefault: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", be, "assign"), e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", be, "assign"), e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", be, "assign"), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, "assign"), m.each({
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
    char: cc11001100_hook("char", !0, "object-key-init"),
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
    which: function (e) {
      var t = cc11001100_hook("t", e.button, "var-init");
      return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ye.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, m.event.addProp), m.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init"),
    pointerenter: cc11001100_hook("pointerenter", "pointerover", "object-key-init"),
    pointerleave: cc11001100_hook("pointerleave", "pointerout", "object-key-init")
  }, function (e, t) {
    m.event.special[e] = cc11001100_hook("m.event.special[e]", {
      delegateType: cc11001100_hook("delegateType", t, "object-key-init"),
      bindType: cc11001100_hook("bindType", t, "object-key-init"),
      handle: function (e) {
        var n,
          r = cc11001100_hook("r", this, "var-init"),
          i = cc11001100_hook("i", e.relatedTarget, "var-init"),
          o = cc11001100_hook("o", e.handleObj, "var-init");
        return i && (i === r || m.contains(r, i)) || (e.type = cc11001100_hook("e.type", o.origType, "assign"), n = cc11001100_hook("n", o.handler.apply(this, arguments), "assign"), e.type = cc11001100_hook("e.type", t, "assign")), n;
      }
    }, "assign");
  }), m.fn.extend({
    on: function (e, t, n, r) {
      return Ce(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return Ce(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = cc11001100_hook("r", e.handleObj, "assign"), m(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign")), !1 === n && (n = cc11001100_hook("n", we, "assign")), this.each(function () {
        m.event.remove(this, e, n, t);
      });
    }
  });
  var Ee = cc11001100_hook("Ee", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "var-init"),
    ke = cc11001100_hook("ke", /<script|<style|<link/i, "var-init"),
    Se = cc11001100_hook("Se", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    Ne = cc11001100_hook("Ne", /^true\/(.*)/, "var-init"),
    De = cc11001100_hook("De", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init");
  function je(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && m(">tbody", e)[0] || e;
  }
  function Ae(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.type = cc11001100_hook("e.type", (null !== e.getAttribute("type")) + "/" + e.type, "assign"), e;
  }
  function qe(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", Ne.exec(e.type), "var-init");
    return t ? e.type = cc11001100_hook("e.type", t[1], "assign") : e.removeAttribute("type"), e;
  }
  function Le(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (U.hasData(e) && (o = cc11001100_hook("o", U.access(e), "assign"), a = cc11001100_hook("a", U.set(t, o), "assign"), l = cc11001100_hook("l", o.events, "assign"))) for (i in delete a.handle, a.events = cc11001100_hook("a.events", {}, "assign"), l) for (n = cc11001100_hook("n", 0, "assign"), r = cc11001100_hook("r", l[i].length, "assign"); n < r; n++) m.event.add(t, i, l[i][n]);
      V.hasData(e) && (s = cc11001100_hook("s", V.access(e), "assign"), u = cc11001100_hook("u", m.extend({}, s), "assign"), V.set(t, u));
    }
  }
  function He(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
    "input" === n && ae.test(e.type) ? t.checked = cc11001100_hook("t.checked", e.checked, "assign") : "input" !== n && "textarea" !== n || (t.defaultValue = cc11001100_hook("t.defaultValue", e.defaultValue, "assign"));
  }
  function Fe(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    t = cc11001100_hook("t", a.apply([], t), "assign");
    var i,
      o,
      s,
      u,
      l,
      c,
      f = cc11001100_hook("f", 0, "var-init"),
      p = cc11001100_hook("p", e.length, "var-init"),
      d = cc11001100_hook("d", p - 1, "var-init"),
      v = cc11001100_hook("v", t[0], "var-init"),
      y = cc11001100_hook("y", m.isFunction(v), "var-init");
    if (y || p > 1 && "string" == typeof v && !h.checkClone && Se.test(v)) return e.each(function (i) {
      var o = cc11001100_hook("o", e.eq(i), "var-init");
      y && (t[0] = cc11001100_hook("t[0]", v.call(this, i, o.html()), "assign")), Fe(o, t, n, r);
    });
    if (p && (o = cc11001100_hook("o", (i = cc11001100_hook("i", ge(t, e[0].ownerDocument, !1, e, r), "assign")).firstChild, "assign"), 1 === i.childNodes.length && (i = cc11001100_hook("i", o, "assign")), o || r)) {
      for (u = cc11001100_hook("u", (s = cc11001100_hook("s", m.map(ce(i, "script"), Ae), "assign")).length, "assign"); f < p; f++) l = cc11001100_hook("l", i, "assign"), f !== d && (l = cc11001100_hook("l", m.clone(l, !0, !0), "assign"), u && m.merge(s, ce(l, "script"))), n.call(e[f], l, f);
      if (u) for (c = cc11001100_hook("c", s[s.length - 1].ownerDocument, "assign"), m.map(s, qe), f = cc11001100_hook("f", 0, "assign"); f < u; f++) l = cc11001100_hook("l", s[f], "assign"), ue.test(l.type || "") && !U.access(l, "globalEval") && m.contains(c, l) && (l.src ? m._evalUrl && m._evalUrl(l.src) : g(l.textContent.replace(De, ""), c));
    }
    return e;
  }
  function Oe(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r, i = cc11001100_hook("i", t ? m.filter(t, e) : e, "var-init"), o = cc11001100_hook("o", 0, "var-init"); null != (r = cc11001100_hook("r", i[o], "assign")); o++) n || 1 !== r.nodeType || m.cleanData(ce(r)), r.parentNode && (n && m.contains(r.ownerDocument, r) && fe(ce(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  m.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ee, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = cc11001100_hook("s", e.cloneNode(!0), "var-init"),
        u = cc11001100_hook("u", m.contains(e.ownerDocument, e), "var-init");
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e))) for (a = cc11001100_hook("a", ce(s), "assign"), r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", (o = cc11001100_hook("o", ce(e), "assign")).length, "assign"); r < i; r++) He(o[r], a[r]);
      if (t) if (n) for (o = cc11001100_hook("o", o || ce(e), "assign"), a = cc11001100_hook("a", a || ce(s), "assign"), r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", o.length, "assign"); r < i; r++) Le(o[r], a[r]);else Le(e, s);
      return (a = cc11001100_hook("a", ce(s, "script"), "assign")).length > 0 && fe(a, !u && ce(e, "script")), s;
    },
    cleanData: function (e) {
      for (var t, n, r, i = cc11001100_hook("i", m.event.special, "var-init"), o = cc11001100_hook("o", 0, "var-init"); void 0 !== (n = cc11001100_hook("n", e[o], "assign")); o++) if (z(n)) {
        if (t = cc11001100_hook("t", n[U.expando], "assign")) {
          if (t.events) for (r in t.events) i[r] ? m.event.remove(n, r) : m.removeEvent(n, r, t.handle);
          n[U.expando] = cc11001100_hook("n[U.expando]", void 0, "assign");
        }
        n[V.expando] && (n[V.expando] = cc11001100_hook("n[V.expando]", void 0, "assign"));
      }
    }
  }), m.fn.extend({
    detach: function (e) {
      return Oe(this, e, !0);
    },
    remove: function (e) {
      return Oe(this, e);
    },
    text: function (e) {
      return _(this, function (e) {
        return void 0 === e ? m.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = cc11001100_hook("this.textContent", e, "assign"));
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return Fe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return Fe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = cc11001100_hook("t", je(this, e), "var-init");
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return Fe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return Fe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = cc11001100_hook("t", 0, "var-init"); null != (e = cc11001100_hook("e", this[t], "assign")); t++) 1 === e.nodeType && (m.cleanData(ce(e, !1)), e.textContent = cc11001100_hook("e.textContent", "", "assign"));
      return this;
    },
    clone: function (e, t) {
      return e = cc11001100_hook("e", null != e && e, "assign"), t = cc11001100_hook("t", null == t ? e : t, "assign"), this.map(function () {
        return m.clone(this, e, t);
      });
    },
    html: function (e) {
      return _(this, function (e) {
        var t = cc11001100_hook("t", this[0] || {}, "var-init"),
          n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", this.length, "var-init");
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !ke.test(e) && !le[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = cc11001100_hook("e", m.htmlPrefilter(e), "assign");
          try {
            for (; n < r; n++) 1 === (t = cc11001100_hook("t", this[n] || {}, "assign")).nodeType && (m.cleanData(ce(t, !1)), t.innerHTML = cc11001100_hook("t.innerHTML", e, "assign"));
            t = cc11001100_hook("t", 0, "assign");
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = cc11001100_hook("e", [], "var-init");
      return Fe(this, arguments, function (t) {
        var n = cc11001100_hook("n", this.parentNode, "var-init");
        m.inArray(this, e) < 0 && (m.cleanData(ce(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), m.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (e, t) {
    m.fn[e] = cc11001100_hook("m.fn[e]", function (e) {
      for (var n, r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", m(e), "var-init"), o = cc11001100_hook("o", i.length - 1, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a <= o; a++) n = cc11001100_hook("n", a === o ? this : this.clone(!0), "assign"), m(i[a])[t](n), s.apply(r, n.get());
      return this.pushStack(r);
    }, "assign");
  });
  var Pe = cc11001100_hook("Pe", /^margin/, "var-init"),
    Re = cc11001100_hook("Re", new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"), "var-init"),
    Me = function (t) {
      var n = cc11001100_hook("n", t.ownerDocument.defaultView, "var-init");
      return n && n.opener || (n = cc11001100_hook("n", e, "assign")), n.getComputedStyle(t);
    };
  function Ie(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o,
      a,
      s = cc11001100_hook("s", e.style, "var-init");
    return (n = cc11001100_hook("n", n || Me(e), "assign")) && ("" !== (a = cc11001100_hook("a", n.getPropertyValue(t) || n[t], "assign")) || m.contains(e.ownerDocument, e) || (a = cc11001100_hook("a", m.style(e, t), "assign")), !h.pixelMarginRight() && Re.test(a) && Pe.test(t) && (r = cc11001100_hook("r", s.width, "assign"), i = cc11001100_hook("i", s.minWidth, "assign"), o = cc11001100_hook("o", s.maxWidth, "assign"), s.minWidth = cc11001100_hook("s.minWidth", s.maxWidth = cc11001100_hook("s.maxWidth", s.width = cc11001100_hook("s.width", a, "assign"), "assign"), "assign"), a = cc11001100_hook("a", n.width, "assign"), s.width = cc11001100_hook("s.width", r, "assign"), s.minWidth = cc11001100_hook("s.minWidth", i, "assign"), s.maxWidth = cc11001100_hook("s.maxWidth", o, "assign"))), void 0 !== a ? a + "" : a;
  }
  function We(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return {
      get: function () {
        if (!e()) return (this.get = cc11001100_hook("this.get", t, "assign")).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function t() {
      if (u) {
        u.style.cssText = cc11001100_hook("u.style.cssText", "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", "assign"), u.innerHTML = cc11001100_hook("u.innerHTML", "", "assign"), ve.appendChild(s);
        var t = cc11001100_hook("t", e.getComputedStyle(u), "var-init");
        n = cc11001100_hook("n", "1%" !== t.top, "assign"), a = cc11001100_hook("a", "2px" === t.marginLeft, "assign"), i = cc11001100_hook("i", "4px" === t.width, "assign"), u.style.marginRight = cc11001100_hook("u.style.marginRight", "50%", "assign"), o = cc11001100_hook("o", "4px" === t.marginRight, "assign"), ve.removeChild(s), u = cc11001100_hook("u", null, "assign");
      }
    }
    var n,
      i,
      o,
      a,
      s = cc11001100_hook("s", r.createElement("div"), "var-init"),
      u = cc11001100_hook("u", r.createElement("div"), "var-init");
    u.style && (u.style.backgroundClip = cc11001100_hook("u.style.backgroundClip", "content-box", "assign"), u.cloneNode(!0).style.backgroundClip = cc11001100_hook("u.cloneNode(!0).style.backgroundClip", "", "assign"), h.clearCloneStyle = cc11001100_hook("h.clearCloneStyle", "content-box" === u.style.backgroundClip, "assign"), s.style.cssText = cc11001100_hook("s.style.cssText", "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", "assign"), s.appendChild(u), m.extend(h, {
      pixelPosition: function () {
        return t(), n;
      },
      boxSizingReliable: function () {
        return t(), i;
      },
      pixelMarginRight: function () {
        return t(), o;
      },
      reliableMarginLeft: function () {
        return t(), a;
      }
    }));
  }();
  var $e = cc11001100_hook("$e", /^(none|table(?!-c[ea]).+)/, "var-init"),
    Be = cc11001100_hook("Be", /^--/, "var-init"),
    _e = cc11001100_hook("_e", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    ze = cc11001100_hook("ze", {
      letterSpacing: cc11001100_hook("letterSpacing", "0", "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", "400", "object-key-init")
    }, "var-init"),
    Xe = cc11001100_hook("Xe", ["Webkit", "Moz", "ms"], "var-init"),
    Ue = cc11001100_hook("Ue", r.createElement("div").style, "var-init");
  function Ve(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", m.cssProps[e], "var-init");
    return t || (t = cc11001100_hook("t", m.cssProps[e] = cc11001100_hook("m.cssProps[e]", function (e) {
      if (e in Ue) return e;
      for (var t = cc11001100_hook("t", e[0].toUpperCase() + e.slice(1), "var-init"), n = cc11001100_hook("n", Xe.length, "var-init"); n--;) if ((e = cc11001100_hook("e", Xe[n] + t, "assign")) in Ue) return e;
    }(e) || e, "assign"), "assign")), t;
  }
  function Ge(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", K.exec(t), "var-init");
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ye(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var o,
      a = cc11001100_hook("a", 0, "var-init");
    for (o = cc11001100_hook("o", n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, "assign"); o < 4; o += cc11001100_hook("o", 2, "assign")) "margin" === n && (a += cc11001100_hook("a", m.css(e, n + Z[o], !0, i), "assign")), r ? ("content" === n && (a -= cc11001100_hook("a", m.css(e, "padding" + Z[o], !0, i), "assign")), "margin" !== n && (a -= cc11001100_hook("a", m.css(e, "border" + Z[o] + "Width", !0, i), "assign"))) : (a += cc11001100_hook("a", m.css(e, "padding" + Z[o], !0, i), "assign"), "padding" !== n && (a += cc11001100_hook("a", m.css(e, "border" + Z[o] + "Width", !0, i), "assign")));
    return a;
  }
  function Qe(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i = cc11001100_hook("i", Me(e), "var-init"),
      o = cc11001100_hook("o", Ie(e, t, i), "var-init"),
      a = cc11001100_hook("a", "border-box" === m.css(e, "boxSizing", !1, i), "var-init");
    return Re.test(o) ? o : (r = cc11001100_hook("r", a && (h.boxSizingReliable() || o === e.style[t]), "assign"), "auto" === o && (o = cc11001100_hook("o", e["offset" + t[0].toUpperCase() + t.slice(1)], "assign")), (o = cc11001100_hook("o", parseFloat(o) || 0, "assign")) + Ye(e, t, n || (a ? "border" : "content"), r, i) + "px");
  }
  function Je(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    return new Je.prototype.init(e, t, n, r, i);
  }
  m.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = cc11001100_hook("n", Ie(e, "opacity"), "var-init");
            return "" === n ? "1" : n;
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
      float: cc11001100_hook("float", "cssFloat", "object-key-init")
    },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = cc11001100_hook("s", m.camelCase(t), "var-init"),
          u = cc11001100_hook("u", Be.test(t), "var-init"),
          l = cc11001100_hook("l", e.style, "var-init");
        if (u || (t = cc11001100_hook("t", Ve(s), "assign")), a = cc11001100_hook("a", m.cssHooks[t] || m.cssHooks[s], "assign"), void 0 === n) return a && "get" in a && void 0 !== (i = cc11001100_hook("i", a.get(e, !1, r), "assign")) ? i : l[t];
        "string" == (o = cc11001100_hook("o", typeof n, "assign")) && (i = cc11001100_hook("i", K.exec(n), "assign")) && i[1] && (n = cc11001100_hook("n", ne(e, t, i), "assign"), o = cc11001100_hook("o", "number", "assign")), null != n && n == n && ("number" === o && (n += cc11001100_hook("n", i && i[3] || (m.cssNumber[s] ? "" : "px"), "assign")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = cc11001100_hook("l[t]", "inherit", "assign")), a && "set" in a && void 0 === (n = cc11001100_hook("n", a.set(e, n, r), "assign")) || (u ? l.setProperty(t, n) : l[t] = cc11001100_hook("l[t]", n, "assign")));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = cc11001100_hook("s", m.camelCase(t), "var-init");
      return Be.test(t) || (t = cc11001100_hook("t", Ve(s), "assign")), (a = cc11001100_hook("a", m.cssHooks[t] || m.cssHooks[s], "assign")) && "get" in a && (i = cc11001100_hook("i", a.get(e, !0, n), "assign")), void 0 === i && (i = cc11001100_hook("i", Ie(e, t, r), "assign")), "normal" === i && t in ze && (i = cc11001100_hook("i", ze[t], "assign")), "" === n || n ? (o = cc11001100_hook("o", parseFloat(i), "assign"), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), m.each(["height", "width"], function (e, t) {
    m.cssHooks[t] = cc11001100_hook("m.cssHooks[t]", {
      get: function (e, n, r) {
        if (n) return !$e.test(m.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, t, r) : te(e, _e, function () {
          return Qe(e, t, r);
        });
      },
      set: function (e, n, r) {
        var i,
          o = cc11001100_hook("o", r && Me(e), "var-init"),
          a = cc11001100_hook("a", r && Ye(e, t, r, "border-box" === m.css(e, "boxSizing", !1, o), o), "var-init");
        return a && (i = cc11001100_hook("i", K.exec(n), "assign")) && "px" !== (i[3] || "px") && (e.style[t] = cc11001100_hook("e.style[t]", n, "assign"), n = cc11001100_hook("n", m.css(e, t), "assign")), Ge(0, n, a);
      }
    }, "assign");
  }), m.cssHooks.marginLeft = cc11001100_hook("m.cssHooks.marginLeft", We(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Ie(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
      marginLeft: cc11001100_hook("marginLeft", 0, "object-key-init")
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), "assign"), m.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (e, t) {
    m.cssHooks[e + t] = cc11001100_hook("m.cssHooks[e + t]", {
      expand: function (n) {
        for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", {}, "var-init"), o = cc11001100_hook("o", "string" == typeof n ? n.split(" ") : [n], "var-init"); r < 4; r++) i[e + Z[r] + t] = cc11001100_hook("i[e + Z[r] + t]", o[r] || o[r - 2] || o[0], "assign");
        return i;
      }
    }, "assign"), Pe.test(e) || (m.cssHooks[e + t].set = cc11001100_hook("m.cssHooks[e + t].set", Ge, "assign"));
  }), m.fn.extend({
    css: function (e, t) {
      return _(this, function (e, t, n) {
        var r,
          i,
          o = cc11001100_hook("o", {}, "var-init"),
          a = cc11001100_hook("a", 0, "var-init");
        if (Array.isArray(t)) {
          for (r = cc11001100_hook("r", Me(e), "assign"), i = cc11001100_hook("i", t.length, "assign"); a < i; a++) o[t[a]] = cc11001100_hook("o[t[a]]", m.css(e, t[a], !1, r), "assign");
          return o;
        }
        return void 0 !== n ? m.style(e, t, n) : m.css(e, t);
      }, e, t, arguments.length > 1);
    }
  }), m.Tween = cc11001100_hook("m.Tween", Je, "assign"), Je.prototype = cc11001100_hook("Je.prototype", {
    constructor: cc11001100_hook("constructor", Je, "object-key-init"),
    init: function (e, t, n, r, i, o) {
      this.elem = cc11001100_hook("this.elem", e, "assign"), this.prop = cc11001100_hook("this.prop", n, "assign"), this.easing = cc11001100_hook("this.easing", i || m.easing._default, "assign"), this.options = cc11001100_hook("this.options", t, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", r, "assign"), this.unit = cc11001100_hook("this.unit", o || (m.cssNumber[n] ? "" : "px"), "assign");
    },
    cur: function () {
      var e = cc11001100_hook("e", Je.propHooks[this.prop], "var-init");
      return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = cc11001100_hook("n", Je.propHooks[this.prop], "var-init");
      return this.options.duration ? this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration), "assign"), "assign") : this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", e, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * t + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this;
    }
  }, "assign"), Je.prototype.init.prototype = cc11001100_hook("Je.prototype.init.prototype", Je.prototype, "assign"), Je.propHooks = cc11001100_hook("Je.propHooks", {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = cc11001100_hook("t", m.css(e.elem, e.prop, ""), "assign")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop] ? e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign") : m.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, "assign"), Je.propHooks.scrollTop = cc11001100_hook("Je.propHooks.scrollTop", Je.propHooks.scrollLeft = cc11001100_hook("Je.propHooks.scrollLeft", {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign"));
    }
  }, "assign"), "assign"), m.easing = cc11001100_hook("m.easing", {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: cc11001100_hook("_default", "swing", "object-key-init")
  }, "assign"), m.fx = cc11001100_hook("m.fx", Je.prototype.init, "assign"), m.fx.step = cc11001100_hook("m.fx.step", {}, "assign");
  var Ke,
    Ze,
    et = cc11001100_hook("et", /^(?:toggle|show|hide)$/, "var-init"),
    tt = cc11001100_hook("tt", /queueHooks$/, "var-init");
  function nt() {
    Ze && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, m.fx.interval), m.fx.tick());
  }
  function rt() {
    return e.setTimeout(function () {
      Ke = cc11001100_hook("Ke", void 0, "assign");
    }), Ke = cc11001100_hook("Ke", m.now(), "assign");
  }
  function it(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r = cc11001100_hook("r", 0, "var-init"),
      i = cc11001100_hook("i", {
        height: cc11001100_hook("height", e, "object-key-init")
      }, "var-init");
    for (t = cc11001100_hook("t", t ? 1 : 0, "assign"); r < 4; r += cc11001100_hook("r", 2 - t, "assign")) i["margin" + (n = cc11001100_hook("n", Z[r], "assign"))] = cc11001100_hook("i[\"margin\" + (n = Z[r])]", i["padding" + n] = cc11001100_hook("i[\"padding\" + n]", e, "assign"), "assign");
    return t && (i.opacity = cc11001100_hook("i.opacity", i.width = cc11001100_hook("i.width", e, "assign"), "assign")), i;
  }
  function ot(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r, i = cc11001100_hook("i", (at.tweeners[t] || []).concat(at.tweeners["*"]), "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", i.length, "var-init"); o < a; o++) if (r = cc11001100_hook("r", i[o].call(n, t, e), "assign")) return r;
  }
  function at(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", 0, "var-init"),
      a = cc11001100_hook("a", at.prefilters.length, "var-init"),
      s = cc11001100_hook("s", m.Deferred().always(function () {
        delete u.elem;
      }), "var-init"),
      u = function () {
        if (i) return !1;
        for (var t = cc11001100_hook("t", Ke || rt(), "var-init"), n = cc11001100_hook("n", Math.max(0, l.startTime + l.duration - t), "var-init"), r = cc11001100_hook("r", 1 - (n / l.duration || 0), "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", l.tweens.length, "var-init"); o < a; o++) l.tweens[o].run(r);
        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
      },
      l = cc11001100_hook("l", s.promise({
        elem: cc11001100_hook("elem", e, "object-key-init"),
        props: cc11001100_hook("props", m.extend({}, t), "object-key-init"),
        opts: cc11001100_hook("opts", m.extend(!0, {
          specialEasing: {},
          easing: cc11001100_hook("easing", m.easing._default, "object-key-init")
        }, n), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", t, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", n, "object-key-init"),
        startTime: cc11001100_hook("startTime", Ke || rt(), "object-key-init"),
        duration: cc11001100_hook("duration", n.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (t, n) {
          var r = cc11001100_hook("r", m.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing), "var-init");
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = cc11001100_hook("n", 0, "var-init"),
            r = cc11001100_hook("r", t ? l.tweens.length : 0, "var-init");
          if (i) return this;
          for (i = cc11001100_hook("i", !0, "assign"); n < r; n++) l.tweens[n].run(1);
          return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
        }
      }), "var-init"),
      c = cc11001100_hook("c", l.props, "var-init");
    for (function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = cc11001100_hook("i", t[r = cc11001100_hook("r", m.camelCase(n), "assign")], "assign"), o = cc11001100_hook("o", e[n], "assign"), Array.isArray(o) && (i = cc11001100_hook("i", o[1], "assign"), o = cc11001100_hook("o", e[n] = cc11001100_hook("e[n]", o[0], "assign"), "assign")), n !== r && (e[r] = cc11001100_hook("e[r]", o, "assign"), delete e[n]), (a = cc11001100_hook("a", m.cssHooks[r], "assign")) && ("expand" in a)) for (n in o = cc11001100_hook("o", a.expand(o), "assign"), delete e[r], o) (n in e) || (e[n] = cc11001100_hook("e[n]", o[n], "assign"), t[n] = cc11001100_hook("t[n]", i, "assign"));else t[r] = cc11001100_hook("t[r]", i, "assign");
    }(c, l.opts.specialEasing); o < a; o++) if (r = cc11001100_hook("r", at.prefilters[o].call(l, e, c, l.opts), "assign")) return m.isFunction(r.stop) && (m._queueHooks(l.elem, l.opts.queue).stop = cc11001100_hook("m._queueHooks(l.elem, l.opts.queue).stop", m.proxy(r.stop, r), "assign")), r;
    return m.map(c, ot, l), m.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), m.fx.timer(m.extend(u, {
      elem: cc11001100_hook("elem", e, "object-key-init"),
      anim: cc11001100_hook("anim", l, "object-key-init"),
      queue: cc11001100_hook("queue", l.opts.queue, "object-key-init")
    })), l;
  }
  m.Animation = cc11001100_hook("m.Animation", m.extend(at, {
    tweeners: {
      "*": cc11001100_hook("*", [function (e, t) {
        var n = cc11001100_hook("n", this.createTween(e, t), "var-init");
        return ne(n.elem, e, K.exec(t), n), n;
      }], "object-key-init")
    },
    tweener: function (e, t) {
      m.isFunction(e) ? (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", ["*"], "assign")) : e = cc11001100_hook("e", e.match(P), "assign");
      for (var n, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < i; r++) n = cc11001100_hook("n", e[r], "assign"), at.tweeners[n] = cc11001100_hook("at.tweeners[n]", at.tweeners[n] || [], "assign"), at.tweeners[n].unshift(t);
    },
    prefilters: cc11001100_hook("prefilters", [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = cc11001100_hook("f", "width" in t || "height" in t, "var-init"),
        p = cc11001100_hook("p", this, "var-init"),
        d = cc11001100_hook("d", {}, "var-init"),
        h = cc11001100_hook("h", e.style, "var-init"),
        g = cc11001100_hook("g", e.nodeType && ee(e), "var-init"),
        v = cc11001100_hook("v", U.get(e, "fxshow"), "var-init");
      for (r in n.queue || (null == (a = cc11001100_hook("a", m._queueHooks(e, "fx"), "assign")).unqueued && (a.unqueued = cc11001100_hook("a.unqueued", 0, "assign"), s = cc11001100_hook("s", a.empty.fire, "assign"), a.empty.fire = cc11001100_hook("a.empty.fire", function () {
        a.unqueued || s();
      }, "assign")), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, m.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = cc11001100_hook("i", t[r], "assign"), et.test(i)) {
        if (delete t[r], o = cc11001100_hook("o", o || "toggle" === i, "assign"), i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = cc11001100_hook("g", !0, "assign");
        }
        d[r] = cc11001100_hook("d[r]", v && v[r] || m.style(e, r), "assign");
      }
      if ((u = cc11001100_hook("u", !m.isEmptyObject(t), "assign")) || !m.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = cc11001100_hook("n.overflow", [h.overflow, h.overflowX, h.overflowY], "assign"), null == (l = cc11001100_hook("l", v && v.display, "assign")) && (l = cc11001100_hook("l", U.get(e, "display"), "assign")), "none" === (c = cc11001100_hook("c", m.css(e, "display"), "assign")) && (l ? c = cc11001100_hook("c", l, "assign") : (oe([e], !0), l = cc11001100_hook("l", e.style.display || l, "assign"), c = cc11001100_hook("c", m.css(e, "display"), "assign"), oe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === m.css(e, "float") && (u || (p.done(function () {
        h.display = cc11001100_hook("h.display", l, "assign");
      }), null == l && (c = cc11001100_hook("c", h.display, "assign"), l = cc11001100_hook("l", "none" === c ? "" : c, "assign"))), h.display = cc11001100_hook("h.display", "inline-block", "assign"))), n.overflow && (h.overflow = cc11001100_hook("h.overflow", "hidden", "assign"), p.always(function () {
        h.overflow = cc11001100_hook("h.overflow", n.overflow[0], "assign"), h.overflowX = cc11001100_hook("h.overflowX", n.overflow[1], "assign"), h.overflowY = cc11001100_hook("h.overflowY", n.overflow[2], "assign");
      })), u = cc11001100_hook("u", !1, "assign"), d) u || (v ? "hidden" in v && (g = cc11001100_hook("g", v.hidden, "assign")) : v = cc11001100_hook("v", U.access(e, "fxshow", {
        display: cc11001100_hook("display", l, "object-key-init")
      }), "assign"), o && (v.hidden = cc11001100_hook("v.hidden", !g, "assign")), g && oe([e], !0), p.done(function () {
        for (r in g || oe([e]), U.remove(e, "fxshow"), d) m.style(e, r, d[r]);
      })), u = cc11001100_hook("u", ot(g ? v[r] : 0, r, p), "assign"), r in v || (v[r] = cc11001100_hook("v[r]", u.start, "assign"), g && (u.end = cc11001100_hook("u.end", u.start, "assign"), u.start = cc11001100_hook("u.start", 0, "assign")));
    }], "object-key-init"),
    prefilter: function (e, t) {
      t ? at.prefilters.unshift(e) : at.prefilters.push(e);
    }
  }), "assign"), m.speed = cc11001100_hook("m.speed", function (e, t, n) {
    var r = cc11001100_hook("r", e && "object" == typeof e ? m.extend({}, e) : {
      complete: cc11001100_hook("complete", n || !n && t || m.isFunction(e) && e, "object-key-init"),
      duration: cc11001100_hook("duration", e, "object-key-init"),
      easing: cc11001100_hook("easing", n && t || t && !m.isFunction(t) && t, "object-key-init")
    }, "var-init");
    return m.fx.off ? r.duration = cc11001100_hook("r.duration", 0, "assign") : "number" != typeof r.duration && (r.duration in m.fx.speeds ? r.duration = cc11001100_hook("r.duration", m.fx.speeds[r.duration], "assign") : r.duration = cc11001100_hook("r.duration", m.fx.speeds._default, "assign")), null != r.queue && !0 !== r.queue || (r.queue = cc11001100_hook("r.queue", "fx", "assign")), r.old = cc11001100_hook("r.old", r.complete, "assign"), r.complete = cc11001100_hook("r.complete", function () {
      m.isFunction(r.old) && r.old.call(this), r.queue && m.dequeue(this, r.queue);
    }, "assign"), r;
  }, "assign"), m.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ee).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", t, "object-key-init")
      }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = cc11001100_hook("i", m.isEmptyObject(e), "var-init"),
        o = cc11001100_hook("o", m.speed(t, n, r), "var-init"),
        a = function () {
          var t = cc11001100_hook("t", at(this, m.extend({}, e), o), "var-init");
          (i || U.get(this, "finish")) && t.stop(!0);
        };
      return a.finish = cc11001100_hook("a.finish", a, "assign"), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = cc11001100_hook("t", e.stop, "var-init");
        delete e.stop, t(n);
      };
      return "string" != typeof e && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = cc11001100_hook("t", !0, "var-init"),
          i = cc11001100_hook("i", null != e && e + "queueHooks", "var-init"),
          o = cc11001100_hook("o", m.timers, "var-init"),
          a = cc11001100_hook("a", U.get(this), "var-init");
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) a[i] && a[i].stop && tt.test(i) && r(a[i]);
        for (i = cc11001100_hook("i", o.length, "assign"); i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = cc11001100_hook("t", !1, "assign"), o.splice(i, 1));
        !t && n || m.dequeue(this, e);
      });
    },
    finish: function (e) {
      return !1 !== e && (e = cc11001100_hook("e", e || "fx", "assign")), this.each(function () {
        var t,
          n = cc11001100_hook("n", U.get(this), "var-init"),
          r = cc11001100_hook("r", n[e + "queue"], "var-init"),
          i = cc11001100_hook("i", n[e + "queueHooks"], "var-init"),
          o = cc11001100_hook("o", m.timers, "var-init"),
          a = cc11001100_hook("a", r ? r.length : 0, "var-init");
        for (n.finish = cc11001100_hook("n.finish", !0, "assign"), m.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = cc11001100_hook("t", o.length, "assign"); t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = cc11001100_hook("t", 0, "assign"); t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  }), m.each(["toggle", "show", "hide"], function (e, t) {
    var n = cc11001100_hook("n", m.fn[t], "var-init");
    m.fn[t] = cc11001100_hook("m.fn[t]", function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(it(t, !0), e, r, i);
    }, "assign");
  }), m.each({
    slideDown: cc11001100_hook("slideDown", it("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", it("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", it("toggle"), "object-key-init"),
    fadeIn: {
      opacity: cc11001100_hook("opacity", "show", "object-key-init")
    },
    fadeOut: {
      opacity: cc11001100_hook("opacity", "hide", "object-key-init")
    },
    fadeToggle: {
      opacity: cc11001100_hook("opacity", "toggle", "object-key-init")
    }
  }, function (e, t) {
    m.fn[e] = cc11001100_hook("m.fn[e]", function (e, n, r) {
      return this.animate(t, e, n, r);
    }, "assign");
  }), m.timers = cc11001100_hook("m.timers", [], "assign"), m.fx.tick = cc11001100_hook("m.fx.tick", function () {
    var e,
      t = cc11001100_hook("t", 0, "var-init"),
      n = cc11001100_hook("n", m.timers, "var-init");
    for (Ke = cc11001100_hook("Ke", m.now(), "assign"); t < n.length; t++) (e = cc11001100_hook("e", n[t], "assign"))() || n[t] !== e || n.splice(t--, 1);
    n.length || m.fx.stop(), Ke = cc11001100_hook("Ke", void 0, "assign");
  }, "assign"), m.fx.timer = cc11001100_hook("m.fx.timer", function (e) {
    m.timers.push(e), m.fx.start();
  }, "assign"), m.fx.interval = cc11001100_hook("m.fx.interval", 13, "assign"), m.fx.start = cc11001100_hook("m.fx.start", function () {
    Ze || (Ze = cc11001100_hook("Ze", !0, "assign"), nt());
  }, "assign"), m.fx.stop = cc11001100_hook("m.fx.stop", function () {
    Ze = cc11001100_hook("Ze", null, "assign");
  }, "assign"), m.fx.speeds = cc11001100_hook("m.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"), m.fn.delay = cc11001100_hook("m.fn.delay", function (t, n) {
    return t = cc11001100_hook("t", m.fx && m.fx.speeds[t] || t, "assign"), n = cc11001100_hook("n", n || "fx", "assign"), this.queue(n, function (n, r) {
      var i = cc11001100_hook("i", e.setTimeout(n, t), "var-init");
      r.stop = cc11001100_hook("r.stop", function () {
        e.clearTimeout(i);
      }, "assign");
    });
  }, "assign"), function () {
    var e = cc11001100_hook("e", r.createElement("input"), "var-init"),
      t = cc11001100_hook("t", r.createElement("select").appendChild(r.createElement("option")), "var-init");
    e.type = cc11001100_hook("e.type", "checkbox", "assign"), h.checkOn = cc11001100_hook("h.checkOn", "" !== e.value, "assign"), h.optSelected = cc11001100_hook("h.optSelected", t.selected, "assign"), (e = cc11001100_hook("e", r.createElement("input"), "assign")).value = cc11001100_hook("(e = r.createElement(\"input\")).value", "t", "assign"), e.type = cc11001100_hook("e.type", "radio", "assign"), h.radioValue = cc11001100_hook("h.radioValue", "t" === e.value, "assign");
  }();
  var st,
    ut = cc11001100_hook("ut", m.expr.attrHandle, "var-init");
  m.fn.extend({
    attr: function (e, t) {
      return _(this, m.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        m.removeAttr(this, e);
      });
    }
  }), m.extend({
    attr: function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", e.nodeType, "var-init");
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (i = cc11001100_hook("i", m.attrHooks[t.toLowerCase()] || (m.expr.match.bool.test(t) ? st : void 0), "assign")), void 0 !== n ? null === n ? void m.removeAttr(e, t) : i && "set" in i && void 0 !== (r = cc11001100_hook("r", i.set(e, n, t), "assign")) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = cc11001100_hook("r", i.get(e, t), "assign")) ? r : null == (r = cc11001100_hook("r", m.find.attr(e, t), "assign")) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = cc11001100_hook("n", e.value, "var-init");
            return e.setAttribute("type", t), n && (e.value = cc11001100_hook("e.value", n, "assign")), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", t && t.match(P), "var-init");
      if (i && 1 === e.nodeType) for (; n = cc11001100_hook("n", i[r++], "assign");) e.removeAttribute(n);
    }
  }), st = cc11001100_hook("st", {
    set: function (e, t, n) {
      return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, "assign"), m.each(m.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = cc11001100_hook("n", ut[t] || m.find.attr, "var-init");
    ut[t] = cc11001100_hook("ut[t]", function (e, t, r) {
      var i,
        o,
        a = cc11001100_hook("a", t.toLowerCase(), "var-init");
      return r || (o = cc11001100_hook("o", ut[a], "assign"), ut[a] = cc11001100_hook("ut[a]", i, "assign"), i = cc11001100_hook("i", null != n(e, t, r) ? a : null, "assign"), ut[a] = cc11001100_hook("ut[a]", o, "assign")), i;
    }, "assign");
  });
  var lt = cc11001100_hook("lt", /^(?:input|select|textarea|button)$/i, "var-init"),
    ct = cc11001100_hook("ct", /^(?:a|area)$/i, "var-init");
  function ft(e) {
    cc11001100_hook("e", e, "function-parameter");
    return (e.match(P) || []).join(" ");
  }
  function pt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.getAttribute && e.getAttribute("class") || "";
  }
  m.fn.extend({
    prop: function (e, t) {
      return _(this, m.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[m.propFix[e] || e];
      });
    }
  }), m.extend({
    prop: function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", e.nodeType, "var-init");
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && m.isXMLDoc(e) || (t = cc11001100_hook("t", m.propFix[t] || t, "assign"), i = cc11001100_hook("i", m.propHooks[t], "assign")), void 0 !== n ? i && "set" in i && void 0 !== (r = cc11001100_hook("r", i.set(e, n, t), "assign")) ? r : e[t] = cc11001100_hook("e[t]", n, "assign") : i && "get" in i && null !== (r = cc11001100_hook("r", i.get(e, t), "assign")) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = cc11001100_hook("t", m.find.attr(e, "tabindex"), "var-init");
          return t ? parseInt(t, 10) : lt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: cc11001100_hook("for", "htmlFor", "object-key-init"),
      class: cc11001100_hook("class", "className", "object-key-init")
    }
  }), h.optSelected || (m.propHooks.selected = cc11001100_hook("m.propHooks.selected", {
    get: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }, "assign")), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    m.propFix[this.toLowerCase()] = cc11001100_hook("m.propFix[this.toLowerCase()]", this, "assign");
  }), m.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = cc11001100_hook("u", 0, "var-init");
      if (m.isFunction(e)) return this.each(function (t) {
        m(this).addClass(e.call(this, t, pt(this)));
      });
      if ("string" == typeof e && e) for (t = cc11001100_hook("t", e.match(P) || [], "assign"); n = cc11001100_hook("n", this[u++], "assign");) if (i = cc11001100_hook("i", pt(n), "assign"), r = cc11001100_hook("r", 1 === n.nodeType && " " + ft(i) + " ", "assign")) {
        for (a = cc11001100_hook("a", 0, "assign"); o = cc11001100_hook("o", t[a++], "assign");) r.indexOf(" " + o + " ") < 0 && (r += cc11001100_hook("r", o + " ", "assign"));
        i !== (s = cc11001100_hook("s", ft(r), "assign")) && n.setAttribute("class", s);
      }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = cc11001100_hook("u", 0, "var-init");
      if (m.isFunction(e)) return this.each(function (t) {
        m(this).removeClass(e.call(this, t, pt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e) for (t = cc11001100_hook("t", e.match(P) || [], "assign"); n = cc11001100_hook("n", this[u++], "assign");) if (i = cc11001100_hook("i", pt(n), "assign"), r = cc11001100_hook("r", 1 === n.nodeType && " " + ft(i) + " ", "assign")) {
        for (a = cc11001100_hook("a", 0, "assign"); o = cc11001100_hook("o", t[a++], "assign");) for (; r.indexOf(" " + o + " ") > -1;) r = cc11001100_hook("r", r.replace(" " + o + " ", " "), "assign");
        i !== (s = cc11001100_hook("s", ft(r), "assign")) && n.setAttribute("class", s);
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = cc11001100_hook("n", typeof e, "var-init");
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each(function (n) {
        m(this).toggleClass(e.call(this, n, pt(this), t), t);
      }) : this.each(function () {
        var t, r, i, o;
        if ("string" === n) for (r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", m(this), "assign"), o = cc11001100_hook("o", e.match(P) || [], "assign"); t = cc11001100_hook("t", o[r++], "assign");) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);else void 0 !== e && "boolean" !== n || ((t = cc11001100_hook("t", pt(this), "assign")) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : U.get(this, "__className__") || ""));
      });
    },
    hasClass: function (e) {
      var t,
        n,
        r = cc11001100_hook("r", 0, "var-init");
      for (t = cc11001100_hook("t", " " + e + " ", "assign"); n = cc11001100_hook("n", this[r++], "assign");) if (1 === n.nodeType && (" " + ft(pt(n)) + " ").indexOf(t) > -1) return !0;
      return !1;
    }
  });
  var dt = cc11001100_hook("dt", /\r/g, "var-init");
  m.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = cc11001100_hook("i", this[0], "var-init");
      return arguments.length ? (r = cc11001100_hook("r", m.isFunction(e), "assign"), this.each(function (n) {
        var i;
        1 === this.nodeType && (null == (i = cc11001100_hook("i", r ? e.call(this, n, m(this).val()) : e, "assign")) ? i = cc11001100_hook("i", "", "assign") : "number" == typeof i ? i += cc11001100_hook("i", "", "assign") : Array.isArray(i) && (i = cc11001100_hook("i", m.map(i, function (e) {
          return null == e ? "" : e + "";
        }), "assign")), (t = cc11001100_hook("t", m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], "assign")) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = cc11001100_hook("this.value", i, "assign")));
      })) : i ? (t = cc11001100_hook("t", m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()], "assign")) && "get" in t && void 0 !== (n = cc11001100_hook("n", t.get(i, "value"), "assign")) ? n : "string" == typeof (n = cc11001100_hook("n", i.value, "assign")) ? n.replace(dt, "") : null == n ? "" : n : void 0;
    }
  }), m.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = cc11001100_hook("t", m.find.attr(e, "value"), "var-init");
          return null != t ? t : ft(m.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
            n,
            r,
            i = cc11001100_hook("i", e.options, "var-init"),
            o = cc11001100_hook("o", e.selectedIndex, "var-init"),
            a = cc11001100_hook("a", "select-one" === e.type, "var-init"),
            s = cc11001100_hook("s", a ? null : [], "var-init"),
            u = cc11001100_hook("u", a ? o + 1 : i.length, "var-init");
          for (r = cc11001100_hook("r", o < 0 ? u : a ? o : 0, "assign"); r < u; r++) if (((n = cc11001100_hook("n", i[r], "assign")).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
            if (t = cc11001100_hook("t", m(n).val(), "assign"), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function (e, t) {
          for (var n, r, i = cc11001100_hook("i", e.options, "var-init"), o = cc11001100_hook("o", m.makeArray(t), "var-init"), a = cc11001100_hook("a", i.length, "var-init"); a--;) ((r = cc11001100_hook("r", i[a], "assign")).selected = cc11001100_hook("(r = i[a]).selected", m.inArray(m.valHooks.option.get(r), o) > -1, "assign")) && (n = cc11001100_hook("n", !0, "assign"));
          return n || (e.selectedIndex = cc11001100_hook("e.selectedIndex", -1, "assign")), o;
        }
      }
    }
  }), m.each(["radio", "checkbox"], function () {
    m.valHooks[this] = cc11001100_hook("m.valHooks[this]", {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = cc11001100_hook("e.checked", m.inArray(m(e).val(), t) > -1, "assign");
      }
    }, "assign"), h.checkOn || (m.valHooks[this].get = cc11001100_hook("m.valHooks[this].get", function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    }, "assign"));
  });
  var ht = cc11001100_hook("ht", /^(?:focusinfocus|focusoutblur)$/, "var-init");
  m.extend(m.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h = cc11001100_hook("h", [i || r], "var-init"),
        g = cc11001100_hook("g", f.call(t, "type") ? t.type : t, "var-init"),
        v = cc11001100_hook("v", f.call(t, "namespace") ? t.namespace.split(".") : [], "var-init");
      if (s = cc11001100_hook("s", u = cc11001100_hook("u", i = cc11001100_hook("i", i || r, "assign"), "assign"), "assign"), 3 !== i.nodeType && 8 !== i.nodeType && !ht.test(g + m.event.triggered) && (g.indexOf(".") > -1 && (v = cc11001100_hook("v", g.split("."), "assign"), g = cc11001100_hook("g", v.shift(), "assign"), v.sort()), c = cc11001100_hook("c", g.indexOf(":") < 0 && "on" + g, "assign"), (t = cc11001100_hook("t", t[m.expando] ? t : new m.Event(g, "object" == typeof t && t), "assign")).isTrigger = cc11001100_hook("(t = t[m.expando] ? t : new m.Event(g, \"object\" == typeof t && t)).isTrigger", o ? 2 : 3, "assign"), t.namespace = cc11001100_hook("t.namespace", v.join("."), "assign"), t.rnamespace = cc11001100_hook("t.rnamespace", t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), t.result = cc11001100_hook("t.result", void 0, "assign"), t.target || (t.target = cc11001100_hook("t.target", i, "assign")), n = cc11001100_hook("n", null == n ? [t] : m.makeArray(n, [t]), "assign"), d = cc11001100_hook("d", m.event.special[g] || {}, "assign"), o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !m.isWindow(i)) {
          for (l = cc11001100_hook("l", d.delegateType || g, "assign"), ht.test(l + g) || (s = cc11001100_hook("s", s.parentNode, "assign")); s; s = cc11001100_hook("s", s.parentNode, "assign")) h.push(s), u = cc11001100_hook("u", s, "assign");
          u === (i.ownerDocument || r) && h.push(u.defaultView || u.parentWindow || e);
        }
        for (a = cc11001100_hook("a", 0, "assign"); (s = cc11001100_hook("s", h[a++], "assign")) && !t.isPropagationStopped();) t.type = cc11001100_hook("t.type", a > 1 ? l : d.bindType || g, "assign"), (p = cc11001100_hook("p", (U.get(s, "events") || {})[t.type] && U.get(s, "handle"), "assign")) && p.apply(s, n), (p = cc11001100_hook("p", c && s[c], "assign")) && p.apply && z(s) && (t.result = cc11001100_hook("t.result", p.apply(s, n), "assign"), !1 === t.result && t.preventDefault());
        return t.type = cc11001100_hook("t.type", g, "assign"), o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !z(i) || c && m.isFunction(i[g]) && !m.isWindow(i) && ((u = cc11001100_hook("u", i[c], "assign")) && (i[c] = cc11001100_hook("i[c]", null, "assign")), m.event.triggered = cc11001100_hook("m.event.triggered", g, "assign"), i[g](), m.event.triggered = cc11001100_hook("m.event.triggered", void 0, "assign"), u && (i[c] = cc11001100_hook("i[c]", u, "assign"))), t.result;
      }
    },
    simulate: function (e, t, n) {
      var r = cc11001100_hook("r", m.extend(new m.Event(), n, {
        type: cc11001100_hook("type", e, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init")
      }), "var-init");
      m.event.trigger(r, null, t);
    }
  }), m.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        m.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = cc11001100_hook("n", this[0], "var-init");
      if (n) return m.event.trigger(e, t, n, !0);
    }
  }), m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    m.fn[t] = cc11001100_hook("m.fn[t]", function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    }, "assign");
  }), m.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), h.focusin = cc11001100_hook("h.focusin", "onfocusin" in e, "assign"), h.focusin || m.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (e, t) {
    var n = function (e) {
      m.event.simulate(t, e.target, m.event.fix(e));
    };
    m.event.special[t] = cc11001100_hook("m.event.special[t]", {
      setup: function () {
        var r = cc11001100_hook("r", this.ownerDocument || this, "var-init"),
          i = cc11001100_hook("i", U.access(r, t), "var-init");
        i || r.addEventListener(e, n, !0), U.access(r, t, (i || 0) + 1);
      },
      teardown: function () {
        var r = cc11001100_hook("r", this.ownerDocument || this, "var-init"),
          i = cc11001100_hook("i", U.access(r, t) - 1, "var-init");
        i ? U.access(r, t, i) : (r.removeEventListener(e, n, !0), U.remove(r, t));
      }
    }, "assign");
  });
  var gt = cc11001100_hook("gt", e.location, "var-init"),
    vt = cc11001100_hook("vt", m.now(), "var-init"),
    mt = cc11001100_hook("mt", /\?/, "var-init");
  m.parseXML = cc11001100_hook("m.parseXML", function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = cc11001100_hook("n", new e.DOMParser().parseFromString(t, "text/xml"), "assign");
    } catch (e) {
      n = cc11001100_hook("n", void 0, "assign");
    }
    return n && !n.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + t), n;
  }, "assign");
  var yt = cc11001100_hook("yt", /\[\]$/, "var-init"),
    xt = cc11001100_hook("xt", /\r?\n/g, "var-init"),
    bt = cc11001100_hook("bt", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    wt = cc11001100_hook("wt", /^(?:input|select|textarea|keygen)/i, "var-init");
  function Tt(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i;
    if (Array.isArray(t)) m.each(t, function (t, i) {
      n || yt.test(e) ? r(e, i) : Tt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== m.type(t)) r(e, t);else for (i in t) Tt(e + "[" + i + "]", t[i], n, r);
  }
  m.param = cc11001100_hook("m.param", function (e, t) {
    var n,
      r = cc11001100_hook("r", [], "var-init"),
      i = function (e, t) {
        var n = cc11001100_hook("n", m.isFunction(t) ? t() : t, "var-init");
        r[r.length] = cc11001100_hook("r[r.length]", encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n), "assign");
      };
    if (Array.isArray(e) || e.jquery && !m.isPlainObject(e)) m.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) Tt(n, e[n], t, i);
    return r.join("&");
  }, "assign"), m.fn.extend({
    serialize: function () {
      return m.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", m.prop(this, "elements"), "var-init");
        return e ? m.makeArray(e) : this;
      }).filter(function () {
        var e = cc11001100_hook("e", this.type, "var-init");
        return this.name && !m(this).is(":disabled") && wt.test(this.nodeName) && !bt.test(e) && (this.checked || !ae.test(e));
      }).map(function (e, t) {
        var n = cc11001100_hook("n", m(this).val(), "var-init");
        return null == n ? null : Array.isArray(n) ? m.map(n, function (e) {
          return {
            name: cc11001100_hook("name", t.name, "object-key-init"),
            value: cc11001100_hook("value", e.replace(xt, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", t.name, "object-key-init"),
          value: cc11001100_hook("value", n.replace(xt, "\r\n"), "object-key-init")
        };
      }).get();
    }
  });
  var Ct = cc11001100_hook("Ct", /%20/g, "var-init"),
    Et = cc11001100_hook("Et", /#.*$/, "var-init"),
    kt = cc11001100_hook("kt", /([?&])_=[^&]*/, "var-init"),
    St = cc11001100_hook("St", /^(.*?):[ \t]*([^\r\n]*)$/gm, "var-init"),
    Nt = cc11001100_hook("Nt", /^(?:GET|HEAD)$/, "var-init"),
    Dt = cc11001100_hook("Dt", /^\/\//, "var-init"),
    jt = cc11001100_hook("jt", {}, "var-init"),
    At = cc11001100_hook("At", {}, "var-init"),
    qt = cc11001100_hook("qt", "*/".concat("*"), "var-init"),
    Lt = cc11001100_hook("Lt", r.createElement("a"), "var-init");
  function Ht(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function (t, n) {
      "string" != typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", "*", "assign"));
      var r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", t.toLowerCase().match(P) || [], "var-init");
      if (m.isFunction(n)) for (; r = cc11001100_hook("r", o[i++], "assign");) "+" === r[0] ? (r = cc11001100_hook("r", r.slice(1) || "*", "assign"), (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).unshift(n)) : (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).push(n);
    };
  }
  function Ft(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i = cc11001100_hook("i", {}, "var-init"),
      o = cc11001100_hook("o", e === At, "var-init");
    function a(s) {
      cc11001100_hook("s", s, "function-parameter");
      var u;
      return i[s] = cc11001100_hook("i[s]", !0, "assign"), m.each(e[s] || [], function (e, s) {
        var l = cc11001100_hook("l", s(t, n, r), "var-init");
        return "string" != typeof l || o || i[l] ? o ? !(u = cc11001100_hook("u", l, "assign")) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }
    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }
  function Ot(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r,
      i = cc11001100_hook("i", m.ajaxSettings.flatOptions || {}, "var-init");
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = cc11001100_hook("r", {}, "assign")))[n] = cc11001100_hook("(i[n] ? e : r || (r = {}))[n]", t[n], "assign"));
    return r && m.extend(!0, e, r), e;
  }
  Lt.href = cc11001100_hook("Lt.href", gt.href, "assign"), m.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", gt.href, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol), "object-key-init"),
      global: cc11001100_hook("global", !0, "object-key-init"),
      processData: cc11001100_hook("processData", !0, "object-key-init"),
      async: cc11001100_hook("async", !0, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", qt, "object-key-init"),
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
        "text xml": cc11001100_hook("text xml", m.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", !0, "object-key-init"),
        context: cc11001100_hook("context", !0, "object-key-init")
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Ot(Ot(e, m.ajaxSettings), t) : Ot(m.ajaxSettings, e);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", Ht(jt), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", Ht(At), "object-key-init"),
    ajax: function (t, n) {
      "object" == typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign")), n = cc11001100_hook("n", n || {}, "assign");
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h = cc11001100_hook("h", m.ajaxSetup({}, n), "var-init"),
        g = cc11001100_hook("g", h.context || h, "var-init"),
        v = cc11001100_hook("v", h.context && (g.nodeType || g.jquery) ? m(g) : m.event, "var-init"),
        y = cc11001100_hook("y", m.Deferred(), "var-init"),
        x = cc11001100_hook("x", m.Callbacks("once memory"), "var-init"),
        b = cc11001100_hook("b", h.statusCode || {}, "var-init"),
        w = cc11001100_hook("w", {}, "var-init"),
        T = cc11001100_hook("T", {}, "var-init"),
        C = cc11001100_hook("C", "canceled", "var-init"),
        E = cc11001100_hook("E", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s) for (s = cc11001100_hook("s", {}, "assign"); t = cc11001100_hook("t", St.exec(a), "assign");) s[t[1].toLowerCase()] = cc11001100_hook("s[t[1].toLowerCase()]", t[2], "assign");
              t = cc11001100_hook("t", s[e.toLowerCase()], "assign");
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return c ? a : null;
          },
          setRequestHeader: function (e, t) {
            return null == c && (e = cc11001100_hook("e", T[e.toLowerCase()] = cc11001100_hook("T[e.toLowerCase()]", T[e.toLowerCase()] || e, "assign"), "assign"), w[e] = cc11001100_hook("w[e]", t, "assign")), this;
          },
          overrideMimeType: function (e) {
            return null == c && (h.mimeType = cc11001100_hook("h.mimeType", e, "assign")), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (c) E.always(e[E.status]);else for (t in e) b[t] = cc11001100_hook("b[t]", [b[t], e[t]], "assign");
            return this;
          },
          abort: function (e) {
            var t = cc11001100_hook("t", e || C, "var-init");
            return i && i.abort(t), k(0, t), this;
          }
        }, "var-init");
      if (y.promise(E), h.url = cc11001100_hook("h.url", ((t || h.url || gt.href) + "").replace(Dt, gt.protocol + "//"), "assign"), h.type = cc11001100_hook("h.type", n.method || n.type || h.method || h.type, "assign"), h.dataTypes = cc11001100_hook("h.dataTypes", (h.dataType || "*").toLowerCase().match(P) || [""], "assign"), null == h.crossDomain) {
        l = cc11001100_hook("l", r.createElement("a"), "assign");
        try {
          l.href = cc11001100_hook("l.href", h.url, "assign"), l.href = cc11001100_hook("l.href", l.href, "assign"), h.crossDomain = cc11001100_hook("h.crossDomain", Lt.protocol + "//" + Lt.host != l.protocol + "//" + l.host, "assign");
        } catch (e) {
          h.crossDomain = cc11001100_hook("h.crossDomain", !0, "assign");
        }
      }
      if (h.data && h.processData && "string" != typeof h.data && (h.data = cc11001100_hook("h.data", m.param(h.data, h.traditional), "assign")), Ft(jt, h, n, E), c) return E;
      for (p in (f = cc11001100_hook("f", m.event && h.global, "assign")) && 0 == m.active++ && m.event.trigger("ajaxStart"), h.type = cc11001100_hook("h.type", h.type.toUpperCase(), "assign"), h.hasContent = cc11001100_hook("h.hasContent", !Nt.test(h.type), "assign"), o = cc11001100_hook("o", h.url.replace(Et, ""), "assign"), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = cc11001100_hook("h.data", h.data.replace(Ct, "+"), "assign")) : (d = cc11001100_hook("d", h.url.slice(o.length), "assign"), h.data && (o += cc11001100_hook("o", (mt.test(o) ? "&" : "?") + h.data, "assign"), delete h.data), !1 === h.cache && (o = cc11001100_hook("o", o.replace(kt, "$1"), "assign"), d = cc11001100_hook("d", (mt.test(o) ? "&" : "?") + "_=" + vt++ + d, "assign")), h.url = cc11001100_hook("h.url", o + d, "assign")), h.ifModified && (m.lastModified[o] && E.setRequestHeader("If-Modified-Since", m.lastModified[o]), m.etag[o] && E.setRequestHeader("If-None-Match", m.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
      if (C = cc11001100_hook("C", "abort", "assign"), x.add(h.complete), E.done(h.success), E.fail(h.error), i = cc11001100_hook("i", Ft(At, h, n, E), "assign")) {
        if (E.readyState = cc11001100_hook("E.readyState", 1, "assign"), f && v.trigger("ajaxSend", [E, h]), c) return E;
        h.async && h.timeout > 0 && (u = cc11001100_hook("u", e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout), "assign"));
        try {
          c = cc11001100_hook("c", !1, "assign"), i.send(w, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");
      function k(t, n, r, s) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        var l,
          p,
          d,
          w,
          T,
          C = cc11001100_hook("C", n, "var-init");
        c || (c = cc11001100_hook("c", !0, "assign"), u && e.clearTimeout(u), i = cc11001100_hook("i", void 0, "assign"), a = cc11001100_hook("a", s || "", "assign"), E.readyState = cc11001100_hook("E.readyState", t > 0 ? 4 : 0, "assign"), l = cc11001100_hook("l", t >= 200 && t < 300 || 304 === t, "assign"), r && (w = cc11001100_hook("w", function (e, t, n) {
          for (var r, i, o, a, s = cc11001100_hook("s", e.contents, "var-init"), u = cc11001100_hook("u", e.dataTypes, "var-init"); "*" === u[0];) u.shift(), void 0 === r && (r = cc11001100_hook("r", e.mimeType || t.getResponseHeader("Content-Type"), "assign"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = cc11001100_hook("o", u[0], "assign");else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = cc11001100_hook("o", i, "assign");
                break;
              }
              a || (a = cc11001100_hook("a", i, "assign"));
            }
            o = cc11001100_hook("o", o || a, "assign");
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(h, E, r), "assign")), w = cc11001100_hook("w", function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = cc11001100_hook("l", {}, "var-init"),
            c = cc11001100_hook("c", e.dataTypes.slice(), "var-init");
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = cc11001100_hook("l[a.toLowerCase()]", e.converters[a], "assign");
          for (o = cc11001100_hook("o", c.shift(), "assign"); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = cc11001100_hook("n[e.responseFields[o]]", t, "assign")), !u && r && e.dataFilter && (t = cc11001100_hook("t", e.dataFilter(t, e.dataType), "assign")), u = cc11001100_hook("u", o, "assign"), o = cc11001100_hook("o", c.shift(), "assign")) if ("*" === o) o = cc11001100_hook("o", u, "assign");else if ("*" !== u && u !== o) {
            if (!(a = cc11001100_hook("a", l[u + " " + o] || l["* " + o], "assign"))) for (i in l) if ((s = cc11001100_hook("s", i.split(" "), "assign"))[1] === o && (a = cc11001100_hook("a", l[u + " " + s[0]] || l["* " + s[0]], "assign"))) {
              !0 === a ? a = cc11001100_hook("a", l[i], "assign") : !0 !== l[i] && (o = cc11001100_hook("o", s[0], "assign"), c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e.throws) t = cc11001100_hook("t", a(t), "assign");else try {
              t = cc11001100_hook("t", a(t), "assign");
            } catch (e) {
              return {
                state: cc11001100_hook("state", "parsererror", "object-key-init"),
                error: cc11001100_hook("error", a ? e : "No conversion from " + u + " to " + o, "object-key-init")
              };
            }
          }
          return {
            state: cc11001100_hook("state", "success", "object-key-init"),
            data: cc11001100_hook("data", t, "object-key-init")
          };
        }(h, w, E, l), "assign"), l ? (h.ifModified && ((T = cc11001100_hook("T", E.getResponseHeader("Last-Modified"), "assign")) && (m.lastModified[o] = cc11001100_hook("m.lastModified[o]", T, "assign")), (T = cc11001100_hook("T", E.getResponseHeader("etag"), "assign")) && (m.etag[o] = cc11001100_hook("m.etag[o]", T, "assign"))), 204 === t || "HEAD" === h.type ? C = cc11001100_hook("C", "nocontent", "assign") : 304 === t ? C = cc11001100_hook("C", "notmodified", "assign") : (C = cc11001100_hook("C", w.state, "assign"), p = cc11001100_hook("p", w.data, "assign"), l = cc11001100_hook("l", !(d = cc11001100_hook("d", w.error, "assign")), "assign"))) : (d = cc11001100_hook("d", C, "assign"), !t && C || (C = cc11001100_hook("C", "error", "assign"), t < 0 && (t = cc11001100_hook("t", 0, "assign")))), E.status = cc11001100_hook("E.status", t, "assign"), E.statusText = cc11001100_hook("E.statusText", (n || C) + "", "assign"), l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]), E.statusCode(b), b = cc11001100_hook("b", void 0, "assign"), f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), x.fireWith(g, [E, C]), f && (v.trigger("ajaxComplete", [E, h]), --m.active || m.event.trigger("ajaxStop")));
      }
      return E;
    },
    getJSON: function (e, t, n) {
      return m.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return m.get(e, void 0, t, "script");
    }
  }), m.each(["get", "post"], function (e, t) {
    m[t] = cc11001100_hook("m[t]", function (e, n, r, i) {
      return m.isFunction(n) && (i = cc11001100_hook("i", i || r, "assign"), r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", void 0, "assign")), m.ajax(m.extend({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", t, "object-key-init"),
        dataType: cc11001100_hook("dataType", i, "object-key-init"),
        data: cc11001100_hook("data", n, "object-key-init"),
        success: cc11001100_hook("success", r, "object-key-init")
      }, m.isPlainObject(e) && e));
    }, "assign");
  }), m._evalUrl = cc11001100_hook("m._evalUrl", function (e) {
    return m.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "script", "object-key-init"),
      cache: cc11001100_hook("cache", !0, "object-key-init"),
      async: cc11001100_hook("async", !1, "object-key-init"),
      global: cc11001100_hook("global", !1, "object-key-init"),
      throws: cc11001100_hook("throws", !0, "object-key-init")
    });
  }, "assign"), m.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m.isFunction(e) && (e = cc11001100_hook("e", e.call(this[0]), "assign")), t = cc11001100_hook("t", m(e, this[0].ownerDocument).eq(0).clone(!0), "assign"), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = cc11001100_hook("e", this, "var-init"); e.firstElementChild;) e = cc11001100_hook("e", e.firstElementChild, "assign");
        return e;
      }).append(this)), this;
    },
    wrapInner: function (e) {
      return m.isFunction(e) ? this.each(function (t) {
        m(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = cc11001100_hook("t", m(this), "var-init"),
          n = cc11001100_hook("n", t.contents(), "var-init");
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = cc11001100_hook("t", m.isFunction(e), "var-init");
      return this.each(function (n) {
        m(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        m(this).replaceWith(this.childNodes);
      }), this;
    }
  }), m.expr.pseudos.hidden = cc11001100_hook("m.expr.pseudos.hidden", function (e) {
    return !m.expr.pseudos.visible(e);
  }, "assign"), m.expr.pseudos.visible = cc11001100_hook("m.expr.pseudos.visible", function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, "assign"), m.ajaxSettings.xhr = cc11001100_hook("m.ajaxSettings.xhr", function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }, "assign");
  var Pt = cc11001100_hook("Pt", {
      0: cc11001100_hook(0, 200, "object-key-init"),
      1223: cc11001100_hook(1223, 204, "object-key-init")
    }, "var-init"),
    Rt = cc11001100_hook("Rt", m.ajaxSettings.xhr(), "var-init");
  h.cors = cc11001100_hook("h.cors", !!Rt && "withCredentials" in Rt, "assign"), h.ajax = cc11001100_hook("h.ajax", Rt = cc11001100_hook("Rt", !!Rt, "assign"), "assign"), m.ajaxTransport(function (t) {
    var n, r;
    if (h.cors || Rt && !t.crossDomain) return {
      send: function (i, o) {
        var a,
          s = cc11001100_hook("s", t.xhr(), "var-init");
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = cc11001100_hook("s[a]", t.xhrFields[a], "assign");
        for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = cc11001100_hook("i[\"X-Requested-With\"]", "XMLHttpRequest", "assign")), i) s.setRequestHeader(a, i[a]);
        n = cc11001100_hook("n", function (e) {
          return function () {
            n && (n = cc11001100_hook("n", r = cc11001100_hook("r", s.onload = cc11001100_hook("s.onload", s.onerror = cc11001100_hook("s.onerror", s.onabort = cc11001100_hook("s.onabort", s.onreadystatechange = cc11001100_hook("s.onreadystatechange", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Pt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: cc11001100_hook("binary", s.response, "object-key-init")
            } : {
              text: cc11001100_hook("text", s.responseText, "object-key-init")
            }, s.getAllResponseHeaders()));
          };
        }, "assign"), s.onload = cc11001100_hook("s.onload", n(), "assign"), r = cc11001100_hook("r", s.onerror = cc11001100_hook("s.onerror", n("error"), "assign"), "assign"), void 0 !== s.onabort ? s.onabort = cc11001100_hook("s.onabort", r, "assign") : s.onreadystatechange = cc11001100_hook("s.onreadystatechange", function () {
          4 === s.readyState && e.setTimeout(function () {
            n && r();
          });
        }, "assign"), n = cc11001100_hook("n", n("abort"), "assign");
        try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (n) throw e;
        }
      },
      abort: function () {
        n && n();
      }
    };
  }), m.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = cc11001100_hook("e.contents.script", !1, "assign"));
  }), m.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /\b(?:java|ecma)script\b/, "object-key-init")
    },
    converters: {
      "text script": function (e) {
        return m.globalEval(e), e;
      }
    }
  }), m.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = cc11001100_hook("e.cache", !1, "assign")), e.crossDomain && (e.type = cc11001100_hook("e.type", "GET", "assign"));
  }), m.ajaxTransport("script", function (e) {
    var t, n;
    if (e.crossDomain) return {
      send: function (i, o) {
        t = cc11001100_hook("t", m("<script>").prop({
          charset: cc11001100_hook("charset", e.scriptCharset, "object-key-init"),
          src: cc11001100_hook("src", e.url, "object-key-init")
        }).on("load error", n = cc11001100_hook("n", function (e) {
          t.remove(), n = cc11001100_hook("n", null, "assign"), e && o("error" === e.type ? 404 : 200, e.type);
        }, "assign")), "assign"), r.head.appendChild(t[0]);
      },
      abort: function () {
        n && n();
      }
    };
  });
  var Mt,
    It = cc11001100_hook("It", [], "var-init"),
    Wt = cc11001100_hook("Wt", /(=)\?(?=&|$)|\?\?/, "var-init");
  m.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var e = cc11001100_hook("e", It.pop() || m.expando + "_" + vt++, "var-init");
      return this[e] = cc11001100_hook("this[e]", !0, "assign"), e;
    }
  }), m.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
      o,
      a,
      s = cc11001100_hook("s", !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data"), "var-init");
    if (s || "jsonp" === t.dataTypes[0]) return i = cc11001100_hook("i", t.jsonpCallback = cc11001100_hook("t.jsonpCallback", m.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, "assign"), "assign"), s ? t[s] = cc11001100_hook("t[s]", t[s].replace(Wt, "$1" + i), "assign") : !1 !== t.jsonp && (t.url += cc11001100_hook("t.url", (mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i, "assign")), t.converters["script json"] = cc11001100_hook("t.converters[\"script json\"]", function () {
      return a || m.error(i + " was not called"), a[0];
    }, "assign"), t.dataTypes[0] = cc11001100_hook("t.dataTypes[0]", "json", "assign"), o = cc11001100_hook("o", e[i], "assign"), e[i] = cc11001100_hook("e[i]", function () {
      a = cc11001100_hook("a", arguments, "assign");
    }, "assign"), r.always(function () {
      void 0 === o ? m(e).removeProp(i) : e[i] = cc11001100_hook("e[i]", o, "assign"), t[i] && (t.jsonpCallback = cc11001100_hook("t.jsonpCallback", n.jsonpCallback, "assign"), It.push(i)), a && m.isFunction(o) && o(a[0]), a = cc11001100_hook("a", o = cc11001100_hook("o", void 0, "assign"), "assign");
    }), "script";
  }), h.createHTMLDocument = cc11001100_hook("h.createHTMLDocument", ((Mt = cc11001100_hook("Mt", r.implementation.createHTMLDocument("").body, "assign")).innerHTML = cc11001100_hook("(Mt = r.implementation.createHTMLDocument(\"\").body).innerHTML", "<form></form><form></form>", "assign"), 2 === Mt.childNodes.length), "assign"), m.parseHTML = cc11001100_hook("m.parseHTML", function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", !1, "assign")), t || (h.createHTMLDocument ? ((i = cc11001100_hook("i", (t = cc11001100_hook("t", r.implementation.createHTMLDocument(""), "assign")).createElement("base"), "assign")).href = cc11001100_hook("(i = (t = r.implementation.createHTMLDocument(\"\")).createElement(\"base\")).href", r.location.href, "assign"), t.head.appendChild(i)) : t = cc11001100_hook("t", r, "assign")), a = cc11001100_hook("a", !n && [], "assign"), (o = cc11001100_hook("o", D.exec(e), "assign")) ? [t.createElement(o[1])] : (o = cc11001100_hook("o", ge([e], t, a), "assign"), a && a.length && m(a).remove(), m.merge([], o.childNodes)));
    var i, o, a;
  }, "assign"), m.fn.load = cc11001100_hook("m.fn.load", function (e, t, n) {
    var r,
      i,
      o,
      a = cc11001100_hook("a", this, "var-init"),
      s = cc11001100_hook("s", e.indexOf(" "), "var-init");
    return s > -1 && (r = cc11001100_hook("r", ft(e.slice(s)), "assign"), e = cc11001100_hook("e", e.slice(0, s), "assign")), m.isFunction(t) ? (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign")) : t && "object" == typeof t && (i = cc11001100_hook("i", "POST", "assign")), a.length > 0 && m.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", i || "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", t, "object-key-init")
    }).done(function (e) {
      o = cc11001100_hook("o", arguments, "assign"), a.html(r ? m("<div>").append(m.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, "assign"), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    m.fn[t] = cc11001100_hook("m.fn[t]", function (e) {
      return this.on(t, e);
    }, "assign");
  }), m.expr.pseudos.animated = cc11001100_hook("m.expr.pseudos.animated", function (e) {
    return m.grep(m.timers, function (t) {
      return e === t.elem;
    }).length;
  }, "assign"), m.offset = cc11001100_hook("m.offset", {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = cc11001100_hook("l", m.css(e, "position"), "var-init"),
        c = cc11001100_hook("c", m(e), "var-init"),
        f = cc11001100_hook("f", {}, "var-init");
      "static" === l && (e.style.position = cc11001100_hook("e.style.position", "relative", "assign")), s = cc11001100_hook("s", c.offset(), "assign"), o = cc11001100_hook("o", m.css(e, "top"), "assign"), u = cc11001100_hook("u", m.css(e, "left"), "assign"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = cc11001100_hook("a", (r = cc11001100_hook("r", c.position(), "assign")).top, "assign"), i = cc11001100_hook("i", r.left, "assign")) : (a = cc11001100_hook("a", parseFloat(o) || 0, "assign"), i = cc11001100_hook("i", parseFloat(u) || 0, "assign")), m.isFunction(t) && (t = cc11001100_hook("t", t.call(e, n, m.extend({}, s)), "assign")), null != t.top && (f.top = cc11001100_hook("f.top", t.top - s.top + a, "assign")), null != t.left && (f.left = cc11001100_hook("f.left", t.left - s.left + i, "assign")), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, "assign"), m.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        m.offset.setOffset(this, e, t);
      });
      var t,
        n,
        r,
        i,
        o = cc11001100_hook("o", this[0], "var-init");
      return o ? o.getClientRects().length ? (r = cc11001100_hook("r", o.getBoundingClientRect(), "assign"), n = cc11001100_hook("n", (t = cc11001100_hook("t", o.ownerDocument, "assign")).documentElement, "assign"), i = cc11001100_hook("i", t.defaultView, "assign"), {
        top: cc11001100_hook("top", r.top + i.pageYOffset - n.clientTop, "object-key-init"),
        left: cc11001100_hook("left", r.left + i.pageXOffset - n.clientLeft, "object-key-init")
      }) : {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
          t,
          n = cc11001100_hook("n", this[0], "var-init"),
          r = cc11001100_hook("r", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init");
        return "fixed" === m.css(n, "position") ? t = cc11001100_hook("t", n.getBoundingClientRect(), "assign") : (e = cc11001100_hook("e", this.offsetParent(), "assign"), t = cc11001100_hook("t", this.offset(), "assign"), N(e[0], "html") || (r = cc11001100_hook("r", e.offset(), "assign")), r = cc11001100_hook("r", {
          top: cc11001100_hook("top", r.top + m.css(e[0], "borderTopWidth", !0), "object-key-init"),
          left: cc11001100_hook("left", r.left + m.css(e[0], "borderLeftWidth", !0), "object-key-init")
        }, "assign")), {
          top: cc11001100_hook("top", t.top - r.top - m.css(n, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", t.left - r.left - m.css(n, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = cc11001100_hook("e", this.offsetParent, "var-init"); e && "static" === m.css(e, "position");) e = cc11001100_hook("e", e.offsetParent, "assign");
        return e || ve;
      });
    }
  }), m.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (e, t) {
    var n = cc11001100_hook("n", "pageYOffset" === t, "var-init");
    m.fn[e] = cc11001100_hook("m.fn[e]", function (r) {
      return _(this, function (e, r, i) {
        var o;
        if (m.isWindow(e) ? o = cc11001100_hook("o", e, "assign") : 9 === e.nodeType && (o = cc11001100_hook("o", e.defaultView, "assign")), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = cc11001100_hook("e[r]", i, "assign");
      }, e, r, arguments.length);
    }, "assign");
  }), m.each(["top", "left"], function (e, t) {
    m.cssHooks[t] = cc11001100_hook("m.cssHooks[t]", We(h.pixelPosition, function (e, n) {
      if (n) return n = cc11001100_hook("n", Ie(e, t), "assign"), Re.test(n) ? m(e).position()[t] + "px" : n;
    }), "assign");
  }), m.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (e, t) {
    m.each({
      padding: cc11001100_hook("padding", "inner" + e, "object-key-init"),
      content: cc11001100_hook("content", t, "object-key-init"),
      "": cc11001100_hook("", "outer" + e, "object-key-init")
    }, function (n, r) {
      m.fn[r] = cc11001100_hook("m.fn[r]", function (i, o) {
        var a = cc11001100_hook("a", arguments.length && (n || "boolean" != typeof i), "var-init"),
          s = cc11001100_hook("s", n || (!0 === i || !0 === o ? "margin" : "border"), "var-init");
        return _(this, function (t, n, i) {
          var o;
          return m.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = cc11001100_hook("o", t.documentElement, "assign"), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? m.css(t, n, s) : m.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      }, "assign");
    });
  }), m.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), m.holdReady = cc11001100_hook("m.holdReady", function (e) {
    e ? m.readyWait++ : m.ready(!0);
  }, "assign"), m.isArray = cc11001100_hook("m.isArray", Array.isArray, "assign"), m.parseJSON = cc11001100_hook("m.parseJSON", JSON.parse, "assign"), m.nodeName = cc11001100_hook("m.nodeName", N, "assign"), "function" == typeof define && define.amd && define("jquery", [], function () {
    return m;
  });
  var $t = cc11001100_hook("$t", e.jQuery, "var-init"),
    Bt = cc11001100_hook("Bt", e.$, "var-init");
  return m.noConflict = cc11001100_hook("m.noConflict", function (t) {
    return e.$ === m && (e.$ = cc11001100_hook("e.$", Bt, "assign")), t && e.jQuery === m && (e.jQuery = cc11001100_hook("e.jQuery", $t, "assign")), m;
  }, "assign"), t || (e.jQuery = cc11001100_hook("e.jQuery", e.$ = cc11001100_hook("e.$", m, "assign"), "assign")), m;
});