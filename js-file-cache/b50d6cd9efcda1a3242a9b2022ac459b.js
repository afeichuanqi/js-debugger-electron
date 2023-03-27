/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
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
    h = cc11001100_hook("h", {}, "var-init"),
    g = function e(t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    y = function e(t) {
      return null != t && t === t.window;
    },
    v = cc11001100_hook("v", {
      type: cc11001100_hook("type", !0, "object-key-init"),
      src: cc11001100_hook("src", !0, "object-key-init"),
      noModule: cc11001100_hook("noModule", !0, "object-key-init")
    }, "var-init");
  function m(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var i,
      o = cc11001100_hook("o", (t = cc11001100_hook("t", t || r, "assign")).createElement("script"), "var-init");
    if (o.text = cc11001100_hook("o.text", e, "assign"), n) for (i in v) n[i] && (o[i] = cc11001100_hook("o[i]", n[i], "assign"));
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    cc11001100_hook("e", e, "function-parameter");
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
  }
  var b = cc11001100_hook("b", "3.3.1", "var-init"),
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    T = cc11001100_hook("T", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init");
  w.fn = cc11001100_hook("w.fn", w.prototype = cc11001100_hook("w.prototype", {
    jquery: cc11001100_hook("jquery", "3.3.1", "object-key-init"),
    constructor: cc11001100_hook("constructor", w, "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    toArray: function () {
      return o.call(this);
    },
    get: function (e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = cc11001100_hook("t", w.merge(this.constructor(), e), "var-init");
      return t.prevObject = cc11001100_hook("t.prevObject", this, "assign"), t;
    },
    each: function (e) {
      return w.each(this, e);
    },
    map: function (e) {
      return this.pushStack(w.map(this, function (t, n) {
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
  }, "assign"), "assign"), w.extend = cc11001100_hook("w.extend", w.fn.extend = cc11001100_hook("w.fn.extend", function () {
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
    for ("boolean" == typeof a && (l = cc11001100_hook("l", a, "assign"), a = cc11001100_hook("a", arguments[s] || {}, "assign"), s++), "object" == typeof a || g(a) || (a = cc11001100_hook("a", {}, "assign")), s === u && (a = cc11001100_hook("a", this, "assign"), s--); s < u; s++) if (null != (e = cc11001100_hook("e", arguments[s], "assign"))) for (t in e) n = cc11001100_hook("n", a[t], "assign"), a !== (r = cc11001100_hook("r", e[t], "assign")) && (l && r && (w.isPlainObject(r) || (i = cc11001100_hook("i", Array.isArray(r), "assign"))) ? (i ? (i = cc11001100_hook("i", !1, "assign"), o = cc11001100_hook("o", n && Array.isArray(n) ? n : [], "assign")) : o = cc11001100_hook("o", n && w.isPlainObject(n) ? n : {}, "assign"), a[t] = cc11001100_hook("a[t]", w.extend(l, o, r), "assign")) : void 0 !== r && (a[t] = cc11001100_hook("a[t]", r, "assign")));
    return a;
  }, "assign"), "assign"), w.extend({
    expando: cc11001100_hook("expando", "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), "object-key-init"),
    isReady: cc11001100_hook("isReady", !0, "object-key-init"),
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e)) && (!(t = cc11001100_hook("t", i(e), "assign")) || "function" == typeof (n = cc11001100_hook("n", f.call(t, "constructor") && t.constructor, "assign")) && p.call(n) === d);
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function (e) {
      m(e);
    },
    each: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init");
      if (C(e)) {
        for (n = cc11001100_hook("n", e.length, "assign"); r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    trim: function (e) {
      return null == e ? "" : (e + "").replace(T, "");
    },
    makeArray: function (e, t) {
      var n = cc11001100_hook("n", t || [], "var-init");
      return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = cc11001100_hook("n", +t.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < n; r++) e[i++] = cc11001100_hook("e[i++]", t[r], "assign");
      return e.length = cc11001100_hook("e.length", i, "assign"), e;
    },
    grep: function (e, t, n) {
      for (var r, i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", e.length, "var-init"), s = cc11001100_hook("s", !n, "var-init"); o < a; o++) (r = cc11001100_hook("r", !t(e[o], o), "assign")) !== s && i.push(e[o]);
      return i;
    },
    map: function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", 0, "var-init"),
        s = cc11001100_hook("s", [], "var-init");
      if (C(e)) for (r = cc11001100_hook("r", e.length, "assign"); o < r; o++) null != (i = cc11001100_hook("i", t(e[o], o, n), "assign")) && s.push(i);else for (o in e) null != (i = cc11001100_hook("i", t(e[o], o, n), "assign")) && s.push(i);
      return a.apply([], s);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    support: cc11001100_hook("support", h, "object-key-init")
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = cc11001100_hook("w.fn[Symbol.iterator]", n[Symbol.iterator], "assign")), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = cc11001100_hook("l[\"[object \" + t + \"]\"]", t.toLowerCase(), "assign");
  });
  function C(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", !!e && "length" in e && e.length, "var-init"),
      n = cc11001100_hook("n", x(e), "var-init");
    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  var E = cc11001100_hook("E", function (e) {
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
      y,
      v,
      m,
      x,
      b = cc11001100_hook("b", "sizzle" + 1 * new Date(), "var-init"),
      w = cc11001100_hook("w", e.document, "var-init"),
      T = cc11001100_hook("T", 0, "var-init"),
      C = cc11001100_hook("C", 0, "var-init"),
      E = cc11001100_hook("E", ae(), "var-init"),
      k = cc11001100_hook("k", ae(), "var-init"),
      S = cc11001100_hook("S", ae(), "var-init"),
      D = function (e, t) {
        return e === t && (f = cc11001100_hook("f", !0, "assign")), 0;
      },
      N = cc11001100_hook("N", {}.hasOwnProperty, "var-init"),
      A = cc11001100_hook("A", [], "var-init"),
      j = cc11001100_hook("j", A.pop, "var-init"),
      q = cc11001100_hook("q", A.push, "var-init"),
      L = cc11001100_hook("L", A.push, "var-init"),
      H = cc11001100_hook("H", A.slice, "var-init"),
      O = function (e, t) {
        for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P = cc11001100_hook("P", "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", "var-init"),
      M = cc11001100_hook("M", "[\\x20\\t\\r\\n\\f]", "var-init"),
      R = cc11001100_hook("R", "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", "var-init"),
      I = cc11001100_hook("I", "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", "var-init"),
      W = cc11001100_hook("W", ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", "var-init"),
      $ = cc11001100_hook("$", new RegExp(M + "+", "g"), "var-init"),
      B = cc11001100_hook("B", new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), "var-init"),
      F = cc11001100_hook("F", new RegExp("^" + M + "*," + M + "*"), "var-init"),
      _ = cc11001100_hook("_", new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), "var-init"),
      z = cc11001100_hook("z", new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), "var-init"),
      X = cc11001100_hook("X", new RegExp(W), "var-init"),
      U = cc11001100_hook("U", new RegExp("^" + R + "$"), "var-init"),
      V = cc11001100_hook("V", {
        ID: cc11001100_hook("ID", new RegExp("^#(" + R + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", new RegExp("^\\.(" + R + ")"), "object-key-init"),
        TAG: cc11001100_hook("TAG", new RegExp("^(" + R + "|[*])"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", new RegExp("^" + I), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", new RegExp("^" + W), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), "object-key-init"),
        bool: cc11001100_hook("bool", new RegExp("^(?:" + P + ")$", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      G = cc11001100_hook("G", /^(?:input|select|textarea|button)$/i, "var-init"),
      Y = cc11001100_hook("Y", /^h\d$/i, "var-init"),
      Q = cc11001100_hook("Q", /^[^{]+\{\s*\[native \w/, "var-init"),
      J = cc11001100_hook("J", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      K = cc11001100_hook("K", /[+~]/, "var-init"),
      Z = cc11001100_hook("Z", new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), "var-init"),
      ee = function (e, t, n) {
        var r = cc11001100_hook("r", "0x" + t - 65536, "var-init");
        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
      te = cc11001100_hook("te", /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, "var-init"),
      ne = function (e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
      re = function () {
        p();
      },
      ie = cc11001100_hook("ie", me(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e);
      }, {
        dir: cc11001100_hook("dir", "parentNode", "object-key-init"),
        next: cc11001100_hook("next", "legend", "object-key-init")
      }), "var-init");
    try {
      L.apply(A = cc11001100_hook("A", H.call(w.childNodes), "assign"), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = cc11001100_hook("L", {
        apply: cc11001100_hook("apply", A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = cc11001100_hook("n", e.length, "var-init"),
            r = cc11001100_hook("r", 0, "var-init");
          while (e[n++] = cc11001100_hook("e[n++]", t[r++], "assign"));
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
        v,
        m = cc11001100_hook("m", t && t.ownerDocument, "var-init"),
        T = cc11001100_hook("T", t ? t.nodeType : 9, "var-init");
      if (r = cc11001100_hook("r", r || [], "assign"), "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = cc11001100_hook("t", t || d, "assign"), g)) {
        if (11 !== T && (f = cc11001100_hook("f", J.exec(e), "assign"))) if (o = cc11001100_hook("o", f[1], "assign")) {
          if (9 === T) {
            if (!(l = cc11001100_hook("l", t.getElementById(o), "assign"))) return r;
            if (l.id === o) return r.push(l), r;
          } else if (m && (l = cc11001100_hook("l", m.getElementById(o), "assign")) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
          if ((o = cc11001100_hook("o", f[3], "assign")) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }
        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = cc11001100_hook("m", t, "assign"), v = cc11001100_hook("v", e, "assign");else if ("object" !== t.nodeName.toLowerCase()) {
            (c = cc11001100_hook("c", t.getAttribute("id"), "assign")) ? c = cc11001100_hook("c", c.replace(te, ne), "assign") : t.setAttribute("id", c = cc11001100_hook("c", b, "assign")), s = cc11001100_hook("s", (h = cc11001100_hook("h", a(e), "assign")).length, "assign");
            while (s--) h[s] = cc11001100_hook("h[s]", "#" + c + " " + ve(h[s]), "assign");
            v = cc11001100_hook("v", h.join(","), "assign"), m = cc11001100_hook("m", K.test(e) && ge(t.parentNode) || t, "assign");
          }
          if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }
      return u(e.replace(B, "$1"), t, r, i);
    }
    function ae() {
      var e = cc11001100_hook("e", [], "var-init");
      function t(n, i) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = cc11001100_hook("t[n + \" \"]", i, "assign");
      }
      return t;
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
      var n = cc11001100_hook("n", e.split("|"), "var-init"),
        i = cc11001100_hook("i", n.length, "var-init");
      while (i--) r.attrHandle[n[i]] = cc11001100_hook("r.attrHandle[n[i]]", t, "assign");
    }
    function ce(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", t && e, "var-init"),
        r = cc11001100_hook("r", n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex, "var-init");
      if (r) return r;
      if (n) while (n = cc11001100_hook("n", n.nextSibling, "assign")) if (n === t) return -1;
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
          var i,
            o = cc11001100_hook("o", e([], n.length, t), "var-init"),
            a = cc11001100_hook("a", o.length, "var-init");
          while (a--) n[i = cc11001100_hook("i", o[a], "assign")] && (n[i] = cc11001100_hook("n[i]", !(r[i] = cc11001100_hook("r[i]", n[i], "assign")), "assign"));
        });
      });
    }
    function ge(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    n = cc11001100_hook("n", oe.support = cc11001100_hook("oe.support", {}, "assign"), "assign"), o = cc11001100_hook("o", oe.isXML = cc11001100_hook("oe.isXML", function (e) {
      var t = cc11001100_hook("t", e && (e.ownerDocument || e).documentElement, "var-init");
      return !!t && "HTML" !== t.nodeName;
    }, "assign"), "assign"), p = cc11001100_hook("p", oe.setDocument = cc11001100_hook("oe.setDocument", function (e) {
      var t,
        i,
        a = cc11001100_hook("a", e ? e.ownerDocument || e : w, "var-init");
      return a !== d && 9 === a.nodeType && a.documentElement ? (d = cc11001100_hook("d", a, "assign"), h = cc11001100_hook("h", d.documentElement, "assign"), g = cc11001100_hook("g", !o(d), "assign"), w !== d && (i = cc11001100_hook("i", d.defaultView, "assign")) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = cc11001100_hook("n.attributes", ue(function (e) {
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
        if ("undefined" != typeof t.getElementById && g) {
          var n = cc11001100_hook("n", t.getElementById(e), "var-init");
          return n ? [n] : [];
        }
      }, "assign")) : (r.filter.ID = cc11001100_hook("r.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(Z, ee), "var-init");
        return function (e) {
          var n = cc11001100_hook("n", "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"), "var-init");
          return n && n.value === t;
        };
      }, "assign"), r.find.ID = cc11001100_hook("r.find.ID", function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
            r,
            i,
            o = cc11001100_hook("o", t.getElementById(e), "var-init");
          if (o) {
            if ((n = cc11001100_hook("n", o.getAttributeNode("id"), "assign")) && n.value === e) return [o];
            i = cc11001100_hook("i", t.getElementsByName(e), "assign"), r = cc11001100_hook("r", 0, "assign");
            while (o = cc11001100_hook("o", i[r++], "assign")) if ((n = cc11001100_hook("n", o.getAttributeNode("id"), "assign")) && n.value === e) return [o];
          }
          return [];
        }
      }, "assign")), r.find.TAG = cc11001100_hook("r.find.TAG", n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
          r = cc11001100_hook("r", [], "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          o = cc11001100_hook("o", t.getElementsByTagName(e), "var-init");
        if ("*" === e) {
          while (n = cc11001100_hook("n", o[i++], "assign")) 1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, "assign"), r.find.CLASS = cc11001100_hook("r.find.CLASS", n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, "assign"), v = cc11001100_hook("v", [], "assign"), y = cc11001100_hook("y", [], "assign"), (n.qsa = cc11001100_hook("n.qsa", Q.test(d.querySelectorAll), "assign")) && (ue(function (e) {
        h.appendChild(e).innerHTML = cc11001100_hook("h.appendChild(e).innerHTML", "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", "assign"), e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = cc11001100_hook("e.innerHTML", "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>", "assign");
        var t = cc11001100_hook("t", d.createElement("input"), "var-init");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = cc11001100_hook("h.appendChild(e).disabled", !0, "assign"), 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = cc11001100_hook("n.matchesSelector", Q.test(m = cc11001100_hook("m", h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector, "assign")), "assign")) && ue(function (e) {
        n.disconnectedMatch = cc11001100_hook("n.disconnectedMatch", m.call(e, "*"), "assign"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = cc11001100_hook("y", y.length && new RegExp(y.join("|")), "assign"), v = cc11001100_hook("v", v.length && new RegExp(v.join("|")), "assign"), t = cc11001100_hook("t", Q.test(h.compareDocumentPosition), "assign"), x = cc11001100_hook("x", t || Q.test(h.contains) ? function (e, t) {
        var n = cc11001100_hook("n", 9 === e.nodeType ? e.documentElement : e, "var-init"),
          r = cc11001100_hook("r", t && t.parentNode, "var-init");
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = cc11001100_hook("t", t.parentNode, "assign")) if (t === e) return !0;
        return !1;
      }, "assign"), D = cc11001100_hook("D", t ? function (e, t) {
        if (e === t) return f = cc11001100_hook("f", !0, "assign"), 0;
        var r = cc11001100_hook("r", !e.compareDocumentPosition - !t.compareDocumentPosition, "var-init");
        return r || (1 & (r = cc11001100_hook("r", (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, "assign")) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = cc11001100_hook("f", !0, "assign"), 0;
        var n,
          r = cc11001100_hook("r", 0, "var-init"),
          i = cc11001100_hook("i", e.parentNode, "var-init"),
          o = cc11001100_hook("o", t.parentNode, "var-init"),
          a = cc11001100_hook("a", [e], "var-init"),
          s = cc11001100_hook("s", [t], "var-init");
        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
        if (i === o) return ce(e, t);
        n = cc11001100_hook("n", e, "assign");
        while (n = cc11001100_hook("n", n.parentNode, "assign")) a.unshift(n);
        n = cc11001100_hook("n", t, "assign");
        while (n = cc11001100_hook("n", n.parentNode, "assign")) s.unshift(n);
        while (a[r] === s[r]) r++;
        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, "assign"), d) : d;
    }, "assign"), "assign"), oe.matches = cc11001100_hook("oe.matches", function (e, t) {
      return oe(e, null, null, t);
    }, "assign"), oe.matchesSelector = cc11001100_hook("oe.matchesSelector", function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = cc11001100_hook("t", t.replace(z, "='$1']"), "assign"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = cc11001100_hook("r", m.call(e, t), "var-init");
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}
      return oe(t, d, null, [e]).length > 0;
    }, "assign"), oe.contains = cc11001100_hook("oe.contains", function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, "assign"), oe.attr = cc11001100_hook("oe.attr", function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = cc11001100_hook("i", r.attrHandle[t.toLowerCase()], "var-init"),
        o = cc11001100_hook("o", i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0, "var-init");
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
      if (f = cc11001100_hook("f", !n.detectDuplicates, "assign"), c = cc11001100_hook("c", !n.sortStable && e.slice(0), "assign"), e.sort(D), f) {
        while (t = cc11001100_hook("t", e[o++], "assign")) t === e[o] && (i = cc11001100_hook("i", r.push(o), "assign"));
        while (i--) e.splice(r[i], 1);
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
      } else while (t = cc11001100_hook("t", e[r++], "assign")) n += cc11001100_hook("n", i(t), "assign");
      return n;
    }, "assign"), "assign"), (r = cc11001100_hook("r", oe.selectors = cc11001100_hook("oe.selectors", {
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
          return t || (t = cc11001100_hook("t", new RegExp("(^|" + M + ")" + e + "(" + M + "|$)"), "assign")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = cc11001100_hook("i", oe.attr(r, e), "var-init");
            return null == i ? "!=" === t : !t || (i += cc11001100_hook("i", "", "assign"), "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
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
              y = cc11001100_hook("y", t.parentNode, "var-init"),
              v = cc11001100_hook("v", s && t.nodeName.toLowerCase(), "var-init"),
              m = cc11001100_hook("m", !u && !s, "var-init"),
              x = cc11001100_hook("x", !1, "var-init");
            if (y) {
              if (o) {
                while (g) {
                  p = cc11001100_hook("p", t, "assign");
                  while (p = cc11001100_hook("p", p[g], "assign")) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  h = cc11001100_hook("h", g = cc11001100_hook("g", "only" === e && !h && "nextSibling", "assign"), "assign");
                }
                return !0;
              }
              if (h = cc11001100_hook("h", [a ? y.firstChild : y.lastChild], "assign"), a && m) {
                x = cc11001100_hook("x", (d = cc11001100_hook("d", (l = cc11001100_hook("l", (c = cc11001100_hook("c", (f = cc11001100_hook("f", (p = cc11001100_hook("p", y, "assign"))[b] || (p[b] = cc11001100_hook("p[b]", {}, "assign")), "assign"))[p.uniqueID] || (f[p.uniqueID] = cc11001100_hook("f[p.uniqueID]", {}, "assign")), "assign"))[e] || [], "assign"))[0] === T && l[1], "assign")) && l[2], "assign"), p = cc11001100_hook("p", d && y.childNodes[d], "assign");
                while (p = cc11001100_hook("p", ++d && p && p[g] || (x = cc11001100_hook("x", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign")) if (1 === p.nodeType && ++x && p === t) {
                  c[e] = cc11001100_hook("c[e]", [T, d, x], "assign");
                  break;
                }
              } else if (m && (x = cc11001100_hook("x", d = cc11001100_hook("d", (l = cc11001100_hook("l", (c = cc11001100_hook("c", (f = cc11001100_hook("f", (p = cc11001100_hook("p", t, "assign"))[b] || (p[b] = cc11001100_hook("p[b]", {}, "assign")), "assign"))[p.uniqueID] || (f[p.uniqueID] = cc11001100_hook("f[p.uniqueID]", {}, "assign")), "assign"))[e] || [], "assign"))[0] === T && l[1], "assign"), "assign")), !1 === x) while (p = cc11001100_hook("p", ++d && p && p[g] || (x = cc11001100_hook("x", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign")) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = cc11001100_hook("c", (f = cc11001100_hook("f", p[b] || (p[b] = cc11001100_hook("p[b]", {}, "assign")), "assign"))[p.uniqueID] || (f[p.uniqueID] = cc11001100_hook("f[p.uniqueID]", {}, "assign")), "assign"))[e] = cc11001100_hook("(c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e]", [T, x], "assign")), p === t)) break;
              return (x -= cc11001100_hook("x", i, "assign")) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n,
            i = cc11001100_hook("i", r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e), "var-init");
          return i[b] ? i(t) : i.length > 1 ? (n = cc11001100_hook("n", [e, e, "", t], "assign"), r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
              o = cc11001100_hook("o", i(e, t), "var-init"),
              a = cc11001100_hook("a", o.length, "var-init");
            while (a--) e[r = cc11001100_hook("r", O(e, o[a]), "assign")] = cc11001100_hook("e[r = O(e, o[a])]", !(n[r] = cc11001100_hook("n[r]", o[a], "assign")), "assign");
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", se(function (e) {
          var t = cc11001100_hook("t", [], "var-init"),
            n = cc11001100_hook("n", [], "var-init"),
            r = cc11001100_hook("r", s(e.replace(B, "$1")), "var-init");
          return r[b] ? se(function (e, t, n, i) {
            var o,
              a = cc11001100_hook("a", r(e, null, i, []), "var-init"),
              s = cc11001100_hook("s", e.length, "var-init");
            while (s--) (o = cc11001100_hook("o", a[s], "assign")) && (e[s] = cc11001100_hook("e[s]", !(t[s] = cc11001100_hook("t[s]", o, "assign")), "assign"));
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
    }, "assign"), "assign")).pseudos.nth = cc11001100_hook("(r = oe.selectors = {\n  cacheLength: 50,\n  createPseudo: se,\n  match: V,\n  attrHandle: {},\n  find: {},\n  relative: {\n    \">\": {\n      dir: \"parentNode\",\n      first: !0\n    },\n    \" \": {\n      dir: \"parentNode\"\n    },\n    \"+\": {\n      dir: \"previousSibling\",\n      first: !0\n    },\n    \"~\": {\n      dir: \"previousSibling\"\n    }\n  },\n  preFilter: {\n    ATTR: function (e) {\n      return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || \"\").replace(Z, ee), \"~=\" === e[2] && (e[3] = \" \" + e[3] + \" \"), e.slice(0, 4);\n    },\n    CHILD: function (e) {\n      return e[1] = e[1].toLowerCase(), \"nth\" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (\"even\" === e[3] || \"odd\" === e[3])), e[5] = +(e[7] + e[8] || \"odd\" === e[3])) : e[3] && oe.error(e[0]), e;\n    },\n    PSEUDO: function (e) {\n      var t,\n        n = !e[6] && e[2];\n      return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || \"\" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(\")\", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));\n    }\n  },\n  filter: {\n    TAG: function (e) {\n      var t = e.replace(Z, ee).toLowerCase();\n      return \"*\" === e ? function () {\n        return !0;\n      } : function (e) {\n        return e.nodeName && e.nodeName.toLowerCase() === t;\n      };\n    },\n    CLASS: function (e) {\n      var t = E[e + \" \"];\n      return t || (t = new RegExp(\"(^|\" + M + \")\" + e + \"(\" + M + \"|$)\")) && E(e, function (e) {\n        return t.test(\"string\" == typeof e.className && e.className || \"undefined\" != typeof e.getAttribute && e.getAttribute(\"class\") || \"\");\n      });\n    },\n    ATTR: function (e, t, n) {\n      return function (r) {\n        var i = oe.attr(r, e);\n        return null == i ? \"!=\" === t : !t || (i += \"\", \"=\" === t ? i === n : \"!=\" === t ? i !== n : \"^=\" === t ? n && 0 === i.indexOf(n) : \"*=\" === t ? n && i.indexOf(n) > -1 : \"$=\" === t ? n && i.slice(-n.length) === n : \"~=\" === t ? (\" \" + i.replace($, \" \") + \" \").indexOf(n) > -1 : \"|=\" === t && (i === n || i.slice(0, n.length + 1) === n + \"-\"));\n      };\n    },\n    CHILD: function (e, t, n, r, i) {\n      var o = \"nth\" !== e.slice(0, 3),\n        a = \"last\" !== e.slice(-4),\n        s = \"of-type\" === t;\n      return 1 === r && 0 === i ? function (e) {\n        return !!e.parentNode;\n      } : function (t, n, u) {\n        var l,\n          c,\n          f,\n          p,\n          d,\n          h,\n          g = o !== a ? \"nextSibling\" : \"previousSibling\",\n          y = t.parentNode,\n          v = s && t.nodeName.toLowerCase(),\n          m = !u && !s,\n          x = !1;\n        if (y) {\n          if (o) {\n            while (g) {\n              p = t;\n              while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;\n              h = g = \"only\" === e && !h && \"nextSibling\";\n            }\n            return !0;\n          }\n          if (h = [a ? y.firstChild : y.lastChild], a && m) {\n            x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];\n            while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {\n              c[e] = [T, d, x];\n              break;\n            }\n          } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;\n          return (x -= i) === r || x % r == 0 && x / r >= 0;\n        }\n      };\n    },\n    PSEUDO: function (e, t) {\n      var n,\n        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error(\"unsupported pseudo: \" + e);\n      return i[b] ? i(t) : i.length > 1 ? (n = [e, e, \"\", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {\n        var r,\n          o = i(e, t),\n          a = o.length;\n        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a]);\n      }) : function (e) {\n        return i(e, 0, n);\n      }) : i;\n    }\n  },\n  pseudos: {\n    not: se(function (e) {\n      var t = [],\n        n = [],\n        r = s(e.replace(B, \"$1\"));\n      return r[b] ? se(function (e, t, n, i) {\n        var o,\n          a = r(e, null, i, []),\n          s = e.length;\n        while (s--) (o = a[s]) && (e[s] = !(t[s] = o));\n      }) : function (e, i, o) {\n        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();\n      };\n    }),\n    has: se(function (e) {\n      return function (t) {\n        return oe(e, t).length > 0;\n      };\n    }),\n    contains: se(function (e) {\n      return e = e.replace(Z, ee), function (t) {\n        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;\n      };\n    }),\n    lang: se(function (e) {\n      return U.test(e || \"\") || oe.error(\"unsupported lang: \" + e), e = e.replace(Z, ee).toLowerCase(), function (t) {\n        var n;\n        do {\n          if (n = g ? t.lang : t.getAttribute(\"xml:lang\") || t.getAttribute(\"lang\")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + \"-\");\n        } while ((t = t.parentNode) && 1 === t.nodeType);\n        return !1;\n      };\n    }),\n    target: function (t) {\n      var n = e.location && e.location.hash;\n      return n && n.slice(1) === t.id;\n    },\n    root: function (e) {\n      return e === h;\n    },\n    focus: function (e) {\n      return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);\n    },\n    enabled: de(!1),\n    disabled: de(!0),\n    checked: function (e) {\n      var t = e.nodeName.toLowerCase();\n      return \"input\" === t && !!e.checked || \"option\" === t && !!e.selected;\n    },\n    selected: function (e) {\n      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;\n    },\n    empty: function (e) {\n      for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;\n      return !0;\n    },\n    parent: function (e) {\n      return !r.pseudos.empty(e);\n    },\n    header: function (e) {\n      return Y.test(e.nodeName);\n    },\n    input: function (e) {\n      return G.test(e.nodeName);\n    },\n    button: function (e) {\n      var t = e.nodeName.toLowerCase();\n      return \"input\" === t && \"button\" === e.type || \"button\" === t;\n    },\n    text: function (e) {\n      var t;\n      return \"input\" === e.nodeName.toLowerCase() && \"text\" === e.type && (null == (t = e.getAttribute(\"type\")) || \"text\" === t.toLowerCase());\n    },\n    first: he(function () {\n      return [0];\n    }),\n    last: he(function (e, t) {\n      return [t - 1];\n    }),\n    eq: he(function (e, t, n) {\n      return [n < 0 ? n + t : n];\n    }),\n    even: he(function (e, t) {\n      for (var n = 0; n < t; n += 2) e.push(n);\n      return e;\n    }),\n    odd: he(function (e, t) {\n      for (var n = 1; n < t; n += 2) e.push(n);\n      return e;\n    }),\n    lt: he(function (e, t, n) {\n      for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);\n      return e;\n    }),\n    gt: he(function (e, t, n) {\n      for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);\n      return e;\n    })\n  }\n}).pseudos.nth", r.pseudos.eq, "assign");
    for (t in {
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
    function ye() {}
    ye.prototype = cc11001100_hook("ye.prototype", r.filters = cc11001100_hook("r.filters", r.pseudos, "assign"), "assign"), r.setFilters = cc11001100_hook("r.setFilters", new ye(), "assign"), a = cc11001100_hook("a", oe.tokenize = cc11001100_hook("oe.tokenize", function (e, t) {
      var n,
        i,
        o,
        a,
        s,
        u,
        l,
        c = cc11001100_hook("c", k[e + " "], "var-init");
      if (c) return t ? 0 : c.slice(0);
      s = cc11001100_hook("s", e, "assign"), u = cc11001100_hook("u", [], "assign"), l = cc11001100_hook("l", r.preFilter, "assign");
      while (s) {
        n && !(i = cc11001100_hook("i", F.exec(s), "assign")) || (i && (s = cc11001100_hook("s", s.slice(i[0].length) || s, "assign")), u.push(o = cc11001100_hook("o", [], "assign"))), n = cc11001100_hook("n", !1, "assign"), (i = cc11001100_hook("i", _.exec(s), "assign")) && (n = cc11001100_hook("n", i.shift(), "assign"), o.push({
          value: cc11001100_hook("value", n, "object-key-init"),
          type: cc11001100_hook("type", i[0].replace(B, " "), "object-key-init")
        }), s = cc11001100_hook("s", s.slice(n.length), "assign"));
        for (a in r.filter) !(i = cc11001100_hook("i", V[a].exec(s), "assign")) || l[a] && !(i = cc11001100_hook("i", l[a](i), "assign")) || (n = cc11001100_hook("n", i.shift(), "assign"), o.push({
          value: cc11001100_hook("value", n, "object-key-init"),
          type: cc11001100_hook("type", a, "object-key-init"),
          matches: cc11001100_hook("matches", i, "object-key-init")
        }), s = cc11001100_hook("s", s.slice(n.length), "assign"));
        if (!n) break;
      }
      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    }, "assign"), "assign");
    function ve(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t = cc11001100_hook("t", 0, "var-init"), n = cc11001100_hook("n", e.length, "var-init"), r = cc11001100_hook("r", "", "var-init"); t < n; t++) r += cc11001100_hook("r", e[t].value, "assign");
      return r;
    }
    function me(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", t.dir, "var-init"),
        i = cc11001100_hook("i", t.next, "var-init"),
        o = cc11001100_hook("o", i || r, "var-init"),
        a = cc11001100_hook("a", n && "parentNode" === o, "var-init"),
        s = cc11001100_hook("s", C++, "var-init");
      return t.first ? function (t, n, i) {
        while (t = cc11001100_hook("t", t[r], "assign")) if (1 === t.nodeType || a) return e(t, n, i);
        return !1;
      } : function (t, n, u) {
        var l,
          c,
          f,
          p = cc11001100_hook("p", [T, s], "var-init");
        if (u) {
          while (t = cc11001100_hook("t", t[r], "assign")) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
        } else while (t = cc11001100_hook("t", t[r], "assign")) if (1 === t.nodeType || a) if (f = cc11001100_hook("f", t[b] || (t[b] = cc11001100_hook("t[b]", {}, "assign")), "assign"), c = cc11001100_hook("c", f[t.uniqueID] || (f[t.uniqueID] = cc11001100_hook("f[t.uniqueID]", {}, "assign")), "assign"), i && i === t.nodeName.toLowerCase()) t = cc11001100_hook("t", t[r] || t, "assign");else {
          if ((l = cc11001100_hook("l", c[o], "assign")) && l[0] === T && l[1] === s) return p[2] = cc11001100_hook("p[2]", l[2], "assign");
          if (c[o] = cc11001100_hook("c[o]", p, "assign"), p[2] = cc11001100_hook("p[2]", e(t, n, u), "assign")) return !0;
        }
        return !1;
      };
    }
    function xe(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.length > 1 ? function (t, n, r) {
        var i = cc11001100_hook("i", e.length, "var-init");
        while (i--) if (!e[i](t, n, r)) return !1;
        return !0;
      } : e[0];
    }
    function be(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", t.length, "var-init"); r < i; r++) oe(e, t[r], n);
      return n;
    }
    function we(e, t, n, r, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      for (var o, a = cc11001100_hook("a", [], "var-init"), s = cc11001100_hook("s", 0, "var-init"), u = cc11001100_hook("u", e.length, "var-init"), l = cc11001100_hook("l", null != t, "var-init"); s < u; s++) (o = cc11001100_hook("o", e[s], "assign")) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(e, t, n, r, i, o) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      return r && !r[b] && (r = cc11001100_hook("r", Te(r), "assign")), i && !i[b] && (i = cc11001100_hook("i", Te(i, o), "assign")), se(function (o, a, s, u) {
        var l,
          c,
          f,
          p = cc11001100_hook("p", [], "var-init"),
          d = cc11001100_hook("d", [], "var-init"),
          h = cc11001100_hook("h", a.length, "var-init"),
          g = cc11001100_hook("g", o || be(t || "*", s.nodeType ? [s] : s, []), "var-init"),
          y = cc11001100_hook("y", !e || !o && t ? g : we(g, p, e, s, u), "var-init"),
          v = cc11001100_hook("v", n ? i || (o ? e : h || r) ? [] : a : y, "var-init");
        if (n && n(y, v, s, u), r) {
          l = cc11001100_hook("l", we(v, d), "assign"), r(l, [], s, u), c = cc11001100_hook("c", l.length, "assign");
          while (c--) (f = cc11001100_hook("f", l[c], "assign")) && (v[d[c]] = cc11001100_hook("v[d[c]]", !(y[d[c]] = cc11001100_hook("y[d[c]]", f, "assign")), "assign"));
        }
        if (o) {
          if (i || e) {
            if (i) {
              l = cc11001100_hook("l", [], "assign"), c = cc11001100_hook("c", v.length, "assign");
              while (c--) (f = cc11001100_hook("f", v[c], "assign")) && l.push(y[c] = cc11001100_hook("y[c]", f, "assign"));
              i(null, v = cc11001100_hook("v", [], "assign"), l, u);
            }
            c = cc11001100_hook("c", v.length, "assign");
            while (c--) (f = cc11001100_hook("f", v[c], "assign")) && (l = cc11001100_hook("l", i ? O(o, f) : p[c], "assign")) > -1 && (o[l] = cc11001100_hook("o[l]", !(a[l] = cc11001100_hook("a[l]", f, "assign")), "assign"));
          }
        } else v = cc11001100_hook("v", we(v === a ? v.splice(h, v.length) : v), "assign"), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }
    function Ce(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t, n, i, o = cc11001100_hook("o", e.length, "var-init"), a = cc11001100_hook("a", r.relative[e[0].type], "var-init"), s = cc11001100_hook("s", a || r.relative[" "], "var-init"), u = cc11001100_hook("u", a ? 1 : 0, "var-init"), c = cc11001100_hook("c", me(function (e) {
          return e === t;
        }, s, !0), "var-init"), f = cc11001100_hook("f", me(function (e) {
          return O(t, e) > -1;
        }, s, !0), "var-init"), p = cc11001100_hook("p", [function (e, n, r) {
          var i = cc11001100_hook("i", !a && (r || n !== l) || ((t = cc11001100_hook("t", n, "assign")).nodeType ? c(e, n, r) : f(e, n, r)), "var-init");
          return t = cc11001100_hook("t", null, "assign"), i;
        }], "var-init"); u < o; u++) if (n = cc11001100_hook("n", r.relative[e[u].type], "assign")) p = cc11001100_hook("p", [me(xe(p), n)], "assign");else {
        if ((n = cc11001100_hook("n", r.filter[e[u].type].apply(null, e[u].matches), "assign"))[b]) {
          for (i = cc11001100_hook("i", ++u, "assign"); i < o; i++) if (r.relative[e[i].type]) break;
          return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
            value: cc11001100_hook("value", " " === e[u - 2].type ? "*" : "", "object-key-init")
          })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = cc11001100_hook("e", e.slice(i), "assign")), i < o && ve(e));
        }
        p.push(n);
      }
      return xe(p);
    }
    function Ee(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", t.length > 0, "var-init"),
        i = cc11001100_hook("i", e.length > 0, "var-init"),
        o = function (o, a, s, u, c) {
          var f,
            h,
            y,
            v = cc11001100_hook("v", 0, "var-init"),
            m = cc11001100_hook("m", "0", "var-init"),
            x = cc11001100_hook("x", o && [], "var-init"),
            b = cc11001100_hook("b", [], "var-init"),
            w = cc11001100_hook("w", l, "var-init"),
            C = cc11001100_hook("C", o || i && r.find.TAG("*", c), "var-init"),
            E = cc11001100_hook("E", T += cc11001100_hook("T", null == w ? 1 : Math.random() || .1, "assign"), "var-init"),
            k = cc11001100_hook("k", C.length, "var-init");
          for (c && (l = cc11001100_hook("l", a === d || a || c, "assign")); m !== k && null != (f = cc11001100_hook("f", C[m], "assign")); m++) {
            if (i && f) {
              h = cc11001100_hook("h", 0, "assign"), a || f.ownerDocument === d || (p(f), s = cc11001100_hook("s", !g, "assign"));
              while (y = cc11001100_hook("y", e[h++], "assign")) if (y(f, a || d, s)) {
                u.push(f);
                break;
              }
              c && (T = cc11001100_hook("T", E, "assign"));
            }
            n && ((f = cc11001100_hook("f", !y && f, "assign")) && v--, o && x.push(f));
          }
          if (v += cc11001100_hook("v", m, "assign"), n && m !== v) {
            h = cc11001100_hook("h", 0, "assign");
            while (y = cc11001100_hook("y", t[h++], "assign")) y(x, b, a, s);
            if (o) {
              if (v > 0) while (m--) x[m] || b[m] || (b[m] = cc11001100_hook("b[m]", j.call(u), "assign"));
              b = cc11001100_hook("b", we(b), "assign");
            }
            L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
          }
          return c && (T = cc11001100_hook("T", E, "assign"), l = cc11001100_hook("l", w, "assign")), x;
        };
      return n ? se(o) : o;
    }
    return s = cc11001100_hook("s", oe.compile = cc11001100_hook("oe.compile", function (e, t) {
      var n,
        r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", S[e + " "], "var-init");
      if (!o) {
        t || (t = cc11001100_hook("t", a(e), "assign")), n = cc11001100_hook("n", t.length, "assign");
        while (n--) (o = cc11001100_hook("o", Ce(t[n]), "assign"))[b] ? r.push(o) : i.push(o);
        (o = cc11001100_hook("o", S(e, Ee(i, r)), "assign")).selector = cc11001100_hook("(o = S(e, Ee(i, r))).selector", e, "assign");
      }
      return o;
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
        o = cc11001100_hook("o", V.needsContext.test(e) ? 0 : u.length, "assign");
        while (o--) {
          if (l = cc11001100_hook("l", u[o], "assign"), r.relative[c = cc11001100_hook("c", l.type, "assign")]) break;
          if ((f = cc11001100_hook("f", r.find[c], "assign")) && (i = cc11001100_hook("i", f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t), "assign"))) {
            if (u.splice(o, 1), !(e = cc11001100_hook("e", i.length && ve(u), "assign"))) return L.apply(n, i), n;
            break;
          }
        }
      }
      return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, "assign"), "assign"), n.sortStable = cc11001100_hook("n.sortStable", b.split("").sort(D).join("") === b, "assign"), n.detectDuplicates = cc11001100_hook("n.detectDuplicates", !!f, "assign"), p(), n.sortDetached = cc11001100_hook("n.sortDetached", ue(function (e) {
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
    }) || le(P, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = cc11001100_hook("r", e.getAttributeNode(t), "assign")) && r.specified ? r.value : null;
    }), oe;
  }(e), "var-init");
  w.find = cc11001100_hook("w.find", E, "assign"), w.expr = cc11001100_hook("w.expr", E.selectors, "assign"), w.expr[":"] = cc11001100_hook("w.expr[\":\"]", w.expr.pseudos, "assign"), w.uniqueSort = cc11001100_hook("w.uniqueSort", w.unique = cc11001100_hook("w.unique", E.uniqueSort, "assign"), "assign"), w.text = cc11001100_hook("w.text", E.getText, "assign"), w.isXMLDoc = cc11001100_hook("w.isXMLDoc", E.isXML, "assign"), w.contains = cc11001100_hook("w.contains", E.contains, "assign"), w.escapeSelector = cc11001100_hook("w.escapeSelector", E.escape, "assign");
  var k = function (e, t, n) {
      var r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", void 0 !== n, "var-init");
      while ((e = cc11001100_hook("e", e[t], "assign")) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    S = function (e, t) {
      for (var n = cc11001100_hook("n", [], "var-init"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = cc11001100_hook("D", w.expr.match.needsContext, "var-init");
  function N(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = cc11001100_hook("A", /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, "var-init");
  function j(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }
  w.filter = cc11001100_hook("w.filter", function (e, t, n) {
    var r = cc11001100_hook("r", t[0], "var-init");
    return n && (e = cc11001100_hook("e", ":not(" + e + ")", "assign")), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, "assign"), w.fn.extend({
    find: function (e) {
      var t,
        n,
        r = cc11001100_hook("r", this.length, "var-init"),
        i = cc11001100_hook("i", this, "var-init");
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = cc11001100_hook("t", 0, "assign"); t < r; t++) if (w.contains(i[t], this)) return !0;
      }));
      for (n = cc11001100_hook("n", this.pushStack([]), "assign"), t = cc11001100_hook("t", 0, "assign"); t < r; t++) w.find(e, i[t], n);
      return r > 1 ? w.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function (e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var q,
    L = cc11001100_hook("L", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, "var-init");
  (w.fn.init = cc11001100_hook("w.fn.init", function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (n = cc11001100_hook("n", n || q, "assign"), "string" == typeof e) {
      if (!(i = cc11001100_hook("i", "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e), "assign")) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = cc11001100_hook("t", t instanceof w ? t[0] : t, "assign"), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (o = cc11001100_hook("o", r.getElementById(i[2]), "assign")) && (this[0] = cc11001100_hook("this[0]", o, "assign"), this.length = cc11001100_hook("this.length", 1, "assign")), this;
    }
    return e.nodeType ? (this[0] = cc11001100_hook("this[0]", e, "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }, "assign")).prototype = cc11001100_hook("(w.fn.init = function (e, t, n) {\n  var i, o;\n  if (!e) return this;\n  if (n = n || q, \"string\" == typeof e) {\n    if (!(i = \"<\" === e[0] && \">\" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);\n    if (i[1]) {\n      if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);\n      return this;\n    }\n    return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;\n  }\n  return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);\n}).prototype", w.fn, "assign"), q = cc11001100_hook("q", w(r), "assign");
  var H = cc11001100_hook("H", /^(?:parents|prev(?:Until|All))/, "var-init"),
    O = cc11001100_hook("O", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  w.fn.extend({
    has: function (e) {
      var t = cc11001100_hook("t", w(e, this), "var-init"),
        n = cc11001100_hook("n", t.length, "var-init");
      return this.filter(function () {
        for (var e = cc11001100_hook("e", 0, "var-init"); e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", this.length, "var-init"),
        o = cc11001100_hook("o", [], "var-init"),
        a = cc11001100_hook("a", "string" != typeof e && w(e), "var-init");
      if (!D.test(e)) for (; r < i; r++) for (n = cc11001100_hook("n", this[r], "assign"); n && n !== t; n = cc11001100_hook("n", n.parentNode, "assign")) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });
  function P(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    while ((e = cc11001100_hook("e", e[t], "assign")) && 1 !== e.nodeType);
    return e;
  }
  w.each({
    parent: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return k(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return k(e, "parentNode", n);
    },
    next: function (e) {
      return P(e, "nextSibling");
    },
    prev: function (e) {
      return P(e, "previousSibling");
    },
    nextAll: function (e) {
      return k(e, "nextSibling");
    },
    prevAll: function (e) {
      return k(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return k(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return k(e, "previousSibling", n);
    },
    siblings: function (e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return S(e.firstChild);
    },
    contents: function (e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = cc11001100_hook("e", e.content || e, "assign")), w.merge([], e.childNodes));
    }
  }, function (e, t) {
    w.fn[e] = cc11001100_hook("w.fn[e]", function (n, r) {
      var i = cc11001100_hook("i", w.map(this, t, n), "var-init");
      return "Until" !== e.slice(-5) && (r = cc11001100_hook("r", n, "assign")), r && "string" == typeof r && (i = cc11001100_hook("i", w.filter(r, i), "assign")), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    }, "assign");
  });
  var M = cc11001100_hook("M", /[^\x20\t\r\n\f]+/g, "var-init");
  function R(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", {}, "var-init");
    return w.each(e.match(M) || [], function (e, n) {
      t[n] = cc11001100_hook("t[n]", !0, "assign");
    }), t;
  }
  w.Callbacks = cc11001100_hook("w.Callbacks", function (e) {
    e = cc11001100_hook("e", "string" == typeof e ? R(e) : w.extend({}, e), "assign");
    var t,
      n,
      r,
      i,
      o = cc11001100_hook("o", [], "var-init"),
      a = cc11001100_hook("a", [], "var-init"),
      s = cc11001100_hook("s", -1, "var-init"),
      u = function () {
        for (i = cc11001100_hook("i", i || e.once, "assign"), r = cc11001100_hook("r", t = cc11001100_hook("t", !0, "assign"), "assign"); a.length; s = cc11001100_hook("s", -1, "assign")) {
          n = cc11001100_hook("n", a.shift(), "assign");
          while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = cc11001100_hook("s", o.length, "assign"), n = cc11001100_hook("n", !1, "assign"));
        }
        e.memory || (n = cc11001100_hook("n", !1, "assign")), t = cc11001100_hook("t", !1, "assign"), i && (o = cc11001100_hook("o", n ? [] : "", "assign"));
      },
      l = cc11001100_hook("l", {
        add: function () {
          return o && (n && !t && (s = cc11001100_hook("s", o.length - 1, "assign"), a.push(n)), function t(n) {
            w.each(n, function (n, r) {
              g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
            });
          }(arguments), n && !t && u()), this;
        },
        remove: function () {
          return w.each(arguments, function (e, t) {
            var n;
            while ((n = cc11001100_hook("n", w.inArray(t, o, n), "assign")) > -1) o.splice(n, 1), n <= s && s--;
          }), this;
        },
        has: function (e) {
          return e ? w.inArray(e, o) > -1 : o.length > 0;
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
  }, "assign");
  function I(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e;
  }
  function W(e) {
    cc11001100_hook("e", e, "function-parameter");
    throw e;
  }
  function $(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i;
    try {
      e && g(i = cc11001100_hook("i", e.promise, "assign")) ? i.call(e).done(t).fail(n) : e && g(i = cc11001100_hook("i", e.then, "assign")) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  w.extend({
    Deferred: function (t) {
      var n = cc11001100_hook("n", [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]], "var-init"),
        r = cc11001100_hook("r", "pending", "var-init"),
        i = cc11001100_hook("i", {
          state: function () {
            return r;
          },
          always: function () {
            return o.done(arguments).fail(arguments), this;
          },
          "catch": function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = cc11001100_hook("e", arguments, "var-init");
            return w.Deferred(function (t) {
              w.each(n, function (n, r) {
                var i = cc11001100_hook("i", g(e[r[4]]) && e[r[4]], "var-init");
                o[r[1]](function () {
                  var e = cc11001100_hook("e", i && i.apply(this, arguments), "var-init");
                  e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
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
                      l = cc11001100_hook("l", e && ("object" == typeof e || "function" == typeof e) && e.then, "assign"), g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = cc11001100_hook("s", void 0, "assign"), u = cc11001100_hook("u", [e], "assign")), (i || n.resolveWith)(s, u));
                    }
                  },
                  c = cc11001100_hook("c", i ? l : function () {
                    try {
                      l();
                    } catch (e) {
                      w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = cc11001100_hook("s", void 0, "assign"), u = cc11001100_hook("u", [e], "assign")), n.rejectWith(s, u));
                    }
                  }, "var-init");
                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = cc11001100_hook("c.stackTrace", w.Deferred.getStackHook(), "assign")), e.setTimeout(c));
              };
            }
            return w.Deferred(function (e) {
              n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
            }).promise();
          },
          promise: function (e) {
            return null != e ? w.extend(e, i) : i;
          }
        }, "var-init"),
        o = cc11001100_hook("o", {}, "var-init");
      return w.each(n, function (e, t) {
        var a = cc11001100_hook("a", t[2], "var-init"),
          s = cc11001100_hook("s", t[5], "var-init");
        i[t[1]] = cc11001100_hook("i[t[1]]", a.add, "assign"), s && a.add(function () {
          r = cc11001100_hook("r", s, "assign");
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = cc11001100_hook("o[t[0]]", function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, "assign"), o[t[0] + "With"] = cc11001100_hook("o[t[0] + \"With\"]", a.fireWith, "assign");
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function (e) {
      var t = cc11001100_hook("t", arguments.length, "var-init"),
        n = cc11001100_hook("n", t, "var-init"),
        r = cc11001100_hook("r", Array(n), "var-init"),
        i = cc11001100_hook("i", o.call(arguments), "var-init"),
        a = cc11001100_hook("a", w.Deferred(), "var-init"),
        s = function (e) {
          return function (n) {
            r[e] = cc11001100_hook("r[e]", this, "assign"), i[e] = cc11001100_hook("i[e]", arguments.length > 1 ? o.call(arguments) : n, "assign"), --t || a.resolveWith(r, i);
          };
        };
      if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
      while (n--) $(i[n], s(n), a.reject);
      return a.promise();
    }
  });
  var B = cc11001100_hook("B", /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/, "var-init");
  w.Deferred.exceptionHook = cc11001100_hook("w.Deferred.exceptionHook", function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, "assign"), w.readyException = cc11001100_hook("w.readyException", function (t) {
    e.setTimeout(function () {
      throw t;
    });
  }, "assign");
  var F = cc11001100_hook("F", w.Deferred(), "var-init");
  w.fn.ready = cc11001100_hook("w.fn.ready", function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, "assign"), w.extend({
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    ready: function (e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = cc11001100_hook("w.isReady", !0, "assign"), !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    }
  }), w.ready.then = cc11001100_hook("w.ready.then", F.then, "assign");
  function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }
  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
  var z = function (e, t, n, r, i, o, a) {
      var s = cc11001100_hook("s", 0, "var-init"),
        u = cc11001100_hook("u", e.length, "var-init"),
        l = cc11001100_hook("l", null == n, "var-init");
      if ("object" === x(n)) {
        i = cc11001100_hook("i", !0, "assign");
        for (s in n) z(e, t, s, n[s], !0, o, a);
      } else if (void 0 !== r && (i = cc11001100_hook("i", !0, "assign"), g(r) || (a = cc11001100_hook("a", !0, "assign")), l && (a ? (t.call(e, r), t = cc11001100_hook("t", null, "assign")) : (l = cc11001100_hook("l", t, "assign"), t = cc11001100_hook("t", function (e, t, n) {
        return l.call(w(e), n);
      }, "assign"))), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    X = cc11001100_hook("X", /^-ms-/, "var-init"),
    U = cc11001100_hook("U", /-([a-z])/g, "var-init");
  function V(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return t.toUpperCase();
  }
  function G(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.replace(X, "ms-").replace(U, V);
  }
  var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = cc11001100_hook("this.expando", w.expando + Q.uid++, "assign");
  }
  Q.uid = cc11001100_hook("Q.uid", 1, "assign"), Q.prototype = cc11001100_hook("Q.prototype", {
    cache: function (e) {
      var t = cc11001100_hook("t", e[this.expando], "var-init");
      return t || (t = cc11001100_hook("t", {}, "assign"), Y(e) && (e.nodeType ? e[this.expando] = cc11001100_hook("e[this.expando]", t, "assign") : Object.defineProperty(e, this.expando, {
        value: cc11001100_hook("value", t, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      }))), t;
    },
    set: function (e, t, n) {
      var r,
        i = cc11001100_hook("i", this.cache(e), "var-init");
      if ("string" == typeof t) i[G(t)] = cc11001100_hook("i[G(t)]", n, "assign");else for (r in t) i[G(r)] = cc11001100_hook("i[G(r)]", t[r], "assign");
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
        r = cc11001100_hook("r", e[this.expando], "var-init");
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = cc11001100_hook("n", (t = cc11001100_hook("t", Array.isArray(t) ? t.map(G) : (t = cc11001100_hook("t", G(t), "assign")) in r ? [t] : t.match(M) || [], "assign")).length, "assign");
          while (n--) delete r[t[n]];
        }
        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = cc11001100_hook("e[this.expando]", void 0, "assign") : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = cc11001100_hook("t", e[this.expando], "var-init");
      return void 0 !== t && !w.isEmptyObject(t);
    }
  }, "assign");
  var J = cc11001100_hook("J", new Q(), "var-init"),
    K = cc11001100_hook("K", new Q(), "var-init"),
    Z = cc11001100_hook("Z", /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, "var-init"),
    ee = cc11001100_hook("ee", /[A-Z]/g, "var-init");
  function te(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }
  function ne(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = cc11001100_hook("r", "data-" + t.replace(ee, "-$&").toLowerCase(), "assign"), "string" == typeof (n = cc11001100_hook("n", e.getAttribute(r), "assign"))) {
      try {
        n = cc11001100_hook("n", te(n), "assign");
      } catch (e) {}
      K.set(e, t, n);
    } else n = cc11001100_hook("n", void 0, "assign");
    return n;
  }
  w.extend({
    hasData: function (e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function (e, t) {
      J.remove(e, t);
    }
  }), w.fn.extend({
    data: function (e, t) {
      var n,
        r,
        i,
        o = cc11001100_hook("o", this[0], "var-init"),
        a = cc11001100_hook("a", o && o.attributes, "var-init");
      if (void 0 === e) {
        if (this.length && (i = cc11001100_hook("i", K.get(o), "assign"), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = cc11001100_hook("n", a.length, "assign");
          while (n--) a[n] && 0 === (r = cc11001100_hook("r", a[n].name, "assign")).indexOf("data-") && (r = cc11001100_hook("r", G(r.slice(5)), "assign"), ne(o, r, i[r]));
          J.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == typeof e ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;
        if (o && void 0 === t) {
          if (void 0 !== (n = cc11001100_hook("n", K.get(o, e), "assign"))) return n;
          if (void 0 !== (n = cc11001100_hook("n", ne(o, e), "assign"))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        K.remove(this, e);
      });
    }
  }), w.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = cc11001100_hook("t", (t || "fx") + "queue", "assign"), r = cc11001100_hook("r", J.get(e, t), "assign"), n && (!r || Array.isArray(n) ? r = cc11001100_hook("r", J.access(e, t, w.makeArray(n)), "assign") : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = cc11001100_hook("t", t || "fx", "assign");
      var n = cc11001100_hook("n", w.queue(e, t), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", n.shift(), "var-init"),
        o = cc11001100_hook("o", w._queueHooks(e, t), "var-init"),
        a = function () {
          w.dequeue(e, t);
        };
      "inprogress" === i && (i = cc11001100_hook("i", n.shift(), "assign"), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = cc11001100_hook("n", t + "queueHooks", "var-init");
      return J.get(e, n) || J.access(e, n, {
        empty: cc11001100_hook("empty", w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        }), "object-key-init")
      });
    }
  }), w.fn.extend({
    queue: function (e, t) {
      var n = cc11001100_hook("n", 2, "var-init");
      return "string" != typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", "fx", "assign"), n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = cc11001100_hook("n", w.queue(this, e, t), "var-init");
        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
        r = cc11001100_hook("r", 1, "var-init"),
        i = cc11001100_hook("i", w.Deferred(), "var-init"),
        o = cc11001100_hook("o", this, "var-init"),
        a = cc11001100_hook("a", this.length, "var-init"),
        s = function () {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), e = cc11001100_hook("e", e || "fx", "assign");
      while (a--) (n = cc11001100_hook("n", J.get(o[a], e + "queueHooks"), "assign")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var re = cc11001100_hook("re", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    ie = cc11001100_hook("ie", new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), "var-init"),
    oe = cc11001100_hook("oe", ["Top", "Right", "Bottom", "Left"], "var-init"),
    ae = function (e, t) {
      return "none" === (e = cc11001100_hook("e", t || e, "assign")).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
    },
    se = function (e, t, n, r) {
      var i,
        o,
        a = cc11001100_hook("a", {}, "var-init");
      for (o in t) a[o] = cc11001100_hook("a[o]", e.style[o], "assign"), e.style[o] = cc11001100_hook("e.style[o]", t[o], "assign");
      i = cc11001100_hook("i", n.apply(e, r || []), "assign");
      for (o in t) e.style[o] = cc11001100_hook("e.style[o]", a[o], "assign");
      return i;
    };
  function ue(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i,
      o,
      a = cc11001100_hook("a", 20, "var-init"),
      s = cc11001100_hook("s", r ? function () {
        return r.cur();
      } : function () {
        return w.css(e, t, "");
      }, "var-init"),
      u = cc11001100_hook("u", s(), "var-init"),
      l = cc11001100_hook("l", n && n[3] || (w.cssNumber[t] ? "" : "px"), "var-init"),
      c = cc11001100_hook("c", (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t)), "var-init");
    if (c && c[3] !== l) {
      u /= cc11001100_hook("u", 2, "assign"), l = cc11001100_hook("l", l || c[3], "assign"), c = cc11001100_hook("c", +u || 1, "assign");
      while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = cc11001100_hook("o", s() / u || .5, "assign"))) <= 0 && (a = cc11001100_hook("a", 0, "assign")), c /= cc11001100_hook("c", o, "assign");
      c *= cc11001100_hook("c", 2, "assign"), w.style(e, t, c + l), n = cc11001100_hook("n", n || [], "assign");
    }
    return n && (c = cc11001100_hook("c", +c || +u || 0, "assign"), i = cc11001100_hook("i", n[1] ? c + (n[1] + 1) * n[2] : +n[2], "assign"), r && (r.unit = cc11001100_hook("r.unit", l, "assign"), r.start = cc11001100_hook("r.start", c, "assign"), r.end = cc11001100_hook("r.end", i, "assign"))), i;
  }
  var le = cc11001100_hook("le", {}, "var-init");
  function ce(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t,
      n = cc11001100_hook("n", e.ownerDocument, "var-init"),
      r = cc11001100_hook("r", e.nodeName, "var-init"),
      i = cc11001100_hook("i", le[r], "var-init");
    return i || (t = cc11001100_hook("t", n.body.appendChild(n.createElement(r)), "assign"), i = cc11001100_hook("i", w.css(t, "display"), "assign"), t.parentNode.removeChild(t), "none" === i && (i = cc11001100_hook("i", "block", "assign")), le[r] = cc11001100_hook("le[r]", i, "assign"), i);
  }
  function fe(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n, r, i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", e.length, "var-init"); o < a; o++) (r = cc11001100_hook("r", e[o], "assign")).style && (n = cc11001100_hook("n", r.style.display, "assign"), t ? ("none" === n && (i[o] = cc11001100_hook("i[o]", J.get(r, "display") || null, "assign"), i[o] || (r.style.display = cc11001100_hook("r.style.display", "", "assign"))), "" === r.style.display && ae(r) && (i[o] = cc11001100_hook("i[o]", ce(r), "assign"))) : "none" !== n && (i[o] = cc11001100_hook("i[o]", "none", "assign"), J.set(r, "display", n)));
    for (o = cc11001100_hook("o", 0, "assign"); o < a; o++) null != i[o] && (e[o].style.display = cc11001100_hook("e[o].style.display", i[o], "assign"));
    return e;
  }
  w.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    }
  });
  var pe = cc11001100_hook("pe", /^(?:checkbox|radio)$/i, "var-init"),
    de = cc11001100_hook("de", /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, "var-init"),
    he = cc11001100_hook("he", /^$|^module$|\/(?:java|ecma)script/i, "var-init"),
    ge = cc11001100_hook("ge", {
      option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
      thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
      col: cc11001100_hook("col", [2, "<table><colgroup>", "</colgroup></table>"], "object-key-init"),
      tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
      td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
      _default: cc11001100_hook("_default", [0, "", ""], "object-key-init")
    }, "var-init");
  ge.optgroup = cc11001100_hook("ge.optgroup", ge.option, "assign"), ge.tbody = cc11001100_hook("ge.tbody", ge.tfoot = cc11001100_hook("ge.tfoot", ge.colgroup = cc11001100_hook("ge.colgroup", ge.caption = cc11001100_hook("ge.caption", ge.thead, "assign"), "assign"), "assign"), "assign"), ge.th = cc11001100_hook("ge.th", ge.td, "assign");
  function ye(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n;
    return n = cc11001100_hook("n", "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], "assign"), void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }
  function ve(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }
  var me = cc11001100_hook("me", /<|&#?\w+;/, "var-init");
  function xe(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    for (var o, a, s, u, l, c, f = cc11001100_hook("f", t.createDocumentFragment(), "var-init"), p = cc11001100_hook("p", [], "var-init"), d = cc11001100_hook("d", 0, "var-init"), h = cc11001100_hook("h", e.length, "var-init"); d < h; d++) if ((o = cc11001100_hook("o", e[d], "assign")) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
      a = cc11001100_hook("a", a || f.appendChild(t.createElement("div")), "assign"), s = cc11001100_hook("s", (de.exec(o) || ["", ""])[1].toLowerCase(), "assign"), u = cc11001100_hook("u", ge[s] || ge._default, "assign"), a.innerHTML = cc11001100_hook("a.innerHTML", u[1] + w.htmlPrefilter(o) + u[2], "assign"), c = cc11001100_hook("c", u[0], "assign");
      while (c--) a = cc11001100_hook("a", a.lastChild, "assign");
      w.merge(p, a.childNodes), (a = cc11001100_hook("a", f.firstChild, "assign")).textContent = cc11001100_hook("(a = f.firstChild).textContent", "", "assign");
    } else p.push(t.createTextNode(o));
    f.textContent = cc11001100_hook("f.textContent", "", "assign"), d = cc11001100_hook("d", 0, "assign");
    while (o = cc11001100_hook("o", p[d++], "assign")) if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = cc11001100_hook("l", w.contains(o.ownerDocument, o), "assign"), a = cc11001100_hook("a", ye(f.appendChild(o), "script"), "assign"), l && ve(a), n) {
      c = cc11001100_hook("c", 0, "assign");
      while (o = cc11001100_hook("o", a[c++], "assign")) he.test(o.type || "") && n.push(o);
    }
    return f;
  }
  !function () {
    var e = cc11001100_hook("e", r.createDocumentFragment().appendChild(r.createElement("div")), "var-init"),
      t = cc11001100_hook("t", r.createElement("input"), "var-init");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = cc11001100_hook("h.checkClone", e.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), e.innerHTML = cc11001100_hook("e.innerHTML", "<textarea>x</textarea>", "assign"), h.noCloneChecked = cc11001100_hook("h.noCloneChecked", !!e.cloneNode(!0).lastChild.defaultValue, "assign");
  }();
  var be = cc11001100_hook("be", r.documentElement, "var-init"),
    we = cc11001100_hook("we", /^key/, "var-init"),
    Te = cc11001100_hook("Te", /^(?:mouse|pointer|contextmenu|drag|drop)|click/, "var-init"),
    Ce = cc11001100_hook("Ce", /^([^.]*)(?:\.(.+)|)/, "var-init");
  function Ee() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function De(e, t, n, r, i, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && (r = cc11001100_hook("r", r || n, "assign"), n = cc11001100_hook("n", void 0, "assign"));
      for (s in t) De(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = cc11001100_hook("i", n, "assign"), r = cc11001100_hook("r", n = cc11001100_hook("n", void 0, "assign"), "assign")) : null == i && ("string" == typeof n ? (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", void 0, "assign")) : (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", void 0, "assign"))), !1 === i) i = cc11001100_hook("i", ke, "assign");else if (!i) return e;
    return 1 === o && (a = cc11001100_hook("a", i, "assign"), (i = cc11001100_hook("i", function (e) {
      return w().off(e), a.apply(this, arguments);
    }, "assign")).guid = cc11001100_hook("(i = function (e) {\n  return w().off(e), a.apply(this, arguments);\n}).guid", a.guid || (a.guid = cc11001100_hook("a.guid", w.guid++, "assign")), "assign")), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }
  w.event = cc11001100_hook("w.event", {
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
        y = cc11001100_hook("y", J.get(e), "var-init");
      if (y) {
        n.handler && (n = cc11001100_hook("n", (o = cc11001100_hook("o", n, "assign")).handler, "assign"), i = cc11001100_hook("i", o.selector, "assign")), i && w.find.matchesSelector(be, i), n.guid || (n.guid = cc11001100_hook("n.guid", w.guid++, "assign")), (u = cc11001100_hook("u", y.events, "assign")) || (u = cc11001100_hook("u", y.events = cc11001100_hook("y.events", {}, "assign"), "assign")), (a = cc11001100_hook("a", y.handle, "assign")) || (a = cc11001100_hook("a", y.handle = cc11001100_hook("y.handle", function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }, "assign"), "assign")), l = cc11001100_hook("l", (t = cc11001100_hook("t", (t || "").match(M) || [""], "assign")).length, "assign");
        while (l--) d = cc11001100_hook("d", g = cc11001100_hook("g", (s = cc11001100_hook("s", Ce.exec(t[l]) || [], "assign"))[1], "assign"), "assign"), h = cc11001100_hook("h", (s[2] || "").split(".").sort(), "assign"), d && (f = cc11001100_hook("f", w.event.special[d] || {}, "assign"), d = cc11001100_hook("d", (i ? f.delegateType : f.bindType) || d, "assign"), f = cc11001100_hook("f", w.event.special[d] || {}, "assign"), c = cc11001100_hook("c", w.extend({
          type: cc11001100_hook("type", d, "object-key-init"),
          origType: cc11001100_hook("origType", g, "object-key-init"),
          data: cc11001100_hook("data", r, "object-key-init"),
          handler: cc11001100_hook("handler", n, "object-key-init"),
          guid: cc11001100_hook("guid", n.guid, "object-key-init"),
          selector: cc11001100_hook("selector", i, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", i && w.expr.match.needsContext.test(i), "object-key-init"),
          namespace: cc11001100_hook("namespace", h.join("."), "object-key-init")
        }, o), "assign"), (p = cc11001100_hook("p", u[d], "assign")) || ((p = cc11001100_hook("p", u[d] = cc11001100_hook("u[d]", [], "assign"), "assign")).delegateCount = cc11001100_hook("(p = u[d] = []).delegateCount", 0, "assign"), f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = cc11001100_hook("c.handler.guid", n.guid, "assign"))), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = cc11001100_hook("w.event.global[d]", !0, "assign"));
      }
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
        y = cc11001100_hook("y", J.hasData(e) && J.get(e), "var-init");
      if (y && (u = cc11001100_hook("u", y.events, "assign"))) {
        l = cc11001100_hook("l", (t = cc11001100_hook("t", (t || "").match(M) || [""], "assign")).length, "assign");
        while (l--) if (s = cc11001100_hook("s", Ce.exec(t[l]) || [], "assign"), d = cc11001100_hook("d", g = cc11001100_hook("g", s[1], "assign"), "assign"), h = cc11001100_hook("h", (s[2] || "").split(".").sort(), "assign"), d) {
          f = cc11001100_hook("f", w.event.special[d] || {}, "assign"), p = cc11001100_hook("p", u[d = cc11001100_hook("d", (r ? f.delegateType : f.bindType) || d, "assign")] || [], "assign"), s = cc11001100_hook("s", s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), a = cc11001100_hook("a", o = cc11001100_hook("o", p.length, "assign"), "assign");
          while (o--) c = cc11001100_hook("c", p[o], "assign"), !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
        } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t = cc11001100_hook("t", w.event.fix(e), "var-init"),
        n,
        r,
        i,
        o,
        a,
        s,
        u = cc11001100_hook("u", new Array(arguments.length), "var-init"),
        l = cc11001100_hook("l", (J.get(this, "events") || {})[t.type] || [], "var-init"),
        c = cc11001100_hook("c", w.event.special[t.type] || {}, "var-init");
      for (u[0] = cc11001100_hook("u[0]", t, "assign"), n = cc11001100_hook("n", 1, "assign"); n < arguments.length; n++) u[n] = cc11001100_hook("u[n]", arguments[n], "assign");
      if (t.delegateTarget = cc11001100_hook("t.delegateTarget", this, "assign"), !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = cc11001100_hook("s", w.event.handlers.call(this, t, l), "assign"), n = cc11001100_hook("n", 0, "assign");
        while ((o = cc11001100_hook("o", s[n++], "assign")) && !t.isPropagationStopped()) {
          t.currentTarget = cc11001100_hook("t.currentTarget", o.elem, "assign"), r = cc11001100_hook("r", 0, "assign");
          while ((a = cc11001100_hook("a", o.handlers[r++], "assign")) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = cc11001100_hook("t.handleObj", a, "assign"), t.data = cc11001100_hook("t.data", a.data, "assign"), void 0 !== (i = cc11001100_hook("i", ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u), "assign")) && !1 === (t.result = cc11001100_hook("t.result", i, "assign")) && (t.preventDefault(), t.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, t), t.result;
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
        for (o = cc11001100_hook("o", [], "assign"), a = cc11001100_hook("a", {}, "assign"), n = cc11001100_hook("n", 0, "assign"); n < u; n++) void 0 === a[i = cc11001100_hook("i", (r = cc11001100_hook("r", t[n], "assign")).selector + " ", "assign")] && (a[i] = cc11001100_hook("a[i]", r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length, "assign")), a[i] && o.push(r);
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
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        get: cc11001100_hook("get", g(t) ? function () {
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
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      focus: {
        trigger: function () {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          if (this === Se() && this.blur) return this.blur(), !1;
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
  }, "assign"), w.removeEvent = cc11001100_hook("w.removeEvent", function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, "assign"), w.Event = cc11001100_hook("w.Event", function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", e, "assign"), this.type = cc11001100_hook("this.type", e.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, "assign"), this.target = cc11001100_hook("this.target", e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, "assign"), this.currentTarget = cc11001100_hook("this.currentTarget", e.currentTarget, "assign"), this.relatedTarget = cc11001100_hook("this.relatedTarget", e.relatedTarget, "assign")) : this.type = cc11001100_hook("this.type", e, "assign"), t && w.extend(this, t), this.timeStamp = cc11001100_hook("this.timeStamp", e && e.timeStamp || Date.now(), "assign"), this[w.expando] = cc11001100_hook("this[w.expando]", !0, "assign");
  }, "assign"), w.Event.prototype = cc11001100_hook("w.Event.prototype", {
    constructor: cc11001100_hook("constructor", w.Event, "object-key-init"),
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", ke, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", ke, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", ke, "object-key-init"),
    isSimulated: cc11001100_hook("isSimulated", !1, "object-key-init"),
    preventDefault: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", Ee, "assign"), e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", Ee, "assign"), e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", Ee, "assign"), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, "assign"), w.each({
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
    which: function (e) {
      var t = cc11001100_hook("t", e.button, "var-init");
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, w.event.addProp), w.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init"),
    pointerenter: cc11001100_hook("pointerenter", "pointerover", "object-key-init"),
    pointerleave: cc11001100_hook("pointerleave", "pointerout", "object-key-init")
  }, function (e, t) {
    w.event.special[e] = cc11001100_hook("w.event.special[e]", {
      delegateType: cc11001100_hook("delegateType", t, "object-key-init"),
      bindType: cc11001100_hook("bindType", t, "object-key-init"),
      handle: function (e) {
        var n,
          r = cc11001100_hook("r", this, "var-init"),
          i = cc11001100_hook("i", e.relatedTarget, "var-init"),
          o = cc11001100_hook("o", e.handleObj, "var-init");
        return i && (i === r || w.contains(r, i)) || (e.type = cc11001100_hook("e.type", o.origType, "assign"), n = cc11001100_hook("n", o.handler.apply(this, arguments), "assign"), e.type = cc11001100_hook("e.type", t, "assign")), n;
      }
    }, "assign");
  }), w.fn.extend({
    on: function (e, t, n, r) {
      return De(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return De(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = cc11001100_hook("r", e.handleObj, "assign"), w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign")), !1 === n && (n = cc11001100_hook("n", ke, "assign")), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = cc11001100_hook("Ne", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "var-init"),
    Ae = cc11001100_hook("Ae", /<script|<style|<link/i, "var-init"),
    je = cc11001100_hook("je", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    qe = cc11001100_hook("qe", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init");
  function Le(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }
  function He(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.type = cc11001100_hook("e.type", (null !== e.getAttribute("type")) + "/" + e.type, "assign"), e;
  }
  function Oe(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "true/" === (e.type || "").slice(0, 5) ? e.type = cc11001100_hook("e.type", e.type.slice(5), "assign") : e.removeAttribute("type"), e;
  }
  function Pe(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (J.hasData(e) && (o = cc11001100_hook("o", J.access(e), "assign"), a = cc11001100_hook("a", J.set(t, o), "assign"), l = cc11001100_hook("l", o.events, "assign"))) {
        delete a.handle, a.events = cc11001100_hook("a.events", {}, "assign");
        for (i in l) for (n = cc11001100_hook("n", 0, "assign"), r = cc11001100_hook("r", l[i].length, "assign"); n < r; n++) w.event.add(t, i, l[i][n]);
      }
      K.hasData(e) && (s = cc11001100_hook("s", K.access(e), "assign"), u = cc11001100_hook("u", w.extend({}, s), "assign"), K.set(t, u));
    }
  }
  function Me(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
    "input" === n && pe.test(e.type) ? t.checked = cc11001100_hook("t.checked", e.checked, "assign") : "input" !== n && "textarea" !== n || (t.defaultValue = cc11001100_hook("t.defaultValue", e.defaultValue, "assign"));
  }
  function Re(e, t, n, r) {
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
      y = cc11001100_hook("y", t[0], "var-init"),
      v = cc11001100_hook("v", g(y), "var-init");
    if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = cc11001100_hook("o", e.eq(i), "var-init");
      v && (t[0] = cc11001100_hook("t[0]", y.call(this, i, o.html()), "assign")), Re(o, t, n, r);
    });
    if (p && (i = cc11001100_hook("i", xe(t, e[0].ownerDocument, !1, e, r), "assign"), o = cc11001100_hook("o", i.firstChild, "assign"), 1 === i.childNodes.length && (i = cc11001100_hook("i", o, "assign")), o || r)) {
      for (u = cc11001100_hook("u", (s = cc11001100_hook("s", w.map(ye(i, "script"), He), "assign")).length, "assign"); f < p; f++) l = cc11001100_hook("l", i, "assign"), f !== d && (l = cc11001100_hook("l", w.clone(l, !0, !0), "assign"), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      if (u) for (c = cc11001100_hook("c", s[s.length - 1].ownerDocument, "assign"), w.map(s, Oe), f = cc11001100_hook("f", 0, "assign"); f < u; f++) l = cc11001100_hook("l", s[f], "assign"), he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
    }
    return e;
  }
  function Ie(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r, i = cc11001100_hook("i", t ? w.filter(t, e) : e, "var-init"), o = cc11001100_hook("o", 0, "var-init"); null != (r = cc11001100_hook("r", i[o], "assign")); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = cc11001100_hook("s", e.cloneNode(!0), "var-init"),
        u = cc11001100_hook("u", w.contains(e.ownerDocument, e), "var-init");
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = cc11001100_hook("a", ye(s), "assign"), r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", (o = cc11001100_hook("o", ye(e), "assign")).length, "assign"); r < i; r++) Me(o[r], a[r]);
      if (t) if (n) for (o = cc11001100_hook("o", o || ye(e), "assign"), a = cc11001100_hook("a", a || ye(s), "assign"), r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", o.length, "assign"); r < i; r++) Pe(o[r], a[r]);else Pe(e, s);
      return (a = cc11001100_hook("a", ye(s, "script"), "assign")).length > 0 && ve(a, !u && ye(e, "script")), s;
    },
    cleanData: function (e) {
      for (var t, n, r, i = cc11001100_hook("i", w.event.special, "var-init"), o = cc11001100_hook("o", 0, "var-init"); void 0 !== (n = cc11001100_hook("n", e[o], "assign")); o++) if (Y(n)) {
        if (t = cc11001100_hook("t", n[J.expando], "assign")) {
          if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
          n[J.expando] = cc11001100_hook("n[J.expando]", void 0, "assign");
        }
        n[K.expando] && (n[K.expando] = cc11001100_hook("n[K.expando]", void 0, "assign"));
      }
    }
  }), w.fn.extend({
    detach: function (e) {
      return Ie(this, e, !0);
    },
    remove: function (e) {
      return Ie(this, e);
    },
    text: function (e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = cc11001100_hook("this.textContent", e, "assign"));
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = cc11001100_hook("t", Le(this, e), "var-init");
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = cc11001100_hook("t", 0, "var-init"); null != (e = cc11001100_hook("e", this[t], "assign")); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = cc11001100_hook("e.textContent", "", "assign"));
      return this;
    },
    clone: function (e, t) {
      return e = cc11001100_hook("e", null != e && e, "assign"), t = cc11001100_hook("t", null == t ? e : t, "assign"), this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function (e) {
      return z(this, function (e) {
        var t = cc11001100_hook("t", this[0] || {}, "var-init"),
          n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", this.length, "var-init");
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = cc11001100_hook("e", w.htmlPrefilter(e), "assign");
          try {
            for (; n < r; n++) 1 === (t = cc11001100_hook("t", this[n] || {}, "assign")).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = cc11001100_hook("t.innerHTML", e, "assign"));
            t = cc11001100_hook("t", 0, "assign");
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = cc11001100_hook("e", [], "var-init");
      return Re(this, arguments, function (t) {
        var n = cc11001100_hook("n", this.parentNode, "var-init");
        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), w.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (e, t) {
    w.fn[e] = cc11001100_hook("w.fn[e]", function (e) {
      for (var n, r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", w(e), "var-init"), o = cc11001100_hook("o", i.length - 1, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a <= o; a++) n = cc11001100_hook("n", a === o ? this : this.clone(!0), "assign"), w(i[a])[t](n), s.apply(r, n.get());
      return this.pushStack(r);
    }, "assign");
  });
  var We = cc11001100_hook("We", new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), "var-init"),
    $e = function (t) {
      var n = cc11001100_hook("n", t.ownerDocument.defaultView, "var-init");
      return n && n.opener || (n = cc11001100_hook("n", e, "assign")), n.getComputedStyle(t);
    },
    Be = cc11001100_hook("Be", new RegExp(oe.join("|"), "i"), "var-init");
  !function () {
    function t() {
      if (c) {
        l.style.cssText = cc11001100_hook("l.style.cssText", "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", "assign"), c.style.cssText = cc11001100_hook("c.style.cssText", "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", "assign"), be.appendChild(l).appendChild(c);
        var t = cc11001100_hook("t", e.getComputedStyle(c), "var-init");
        i = cc11001100_hook("i", "1%" !== t.top, "assign"), u = cc11001100_hook("u", 12 === n(t.marginLeft), "assign"), c.style.right = cc11001100_hook("c.style.right", "60%", "assign"), s = cc11001100_hook("s", 36 === n(t.right), "assign"), o = cc11001100_hook("o", 36 === n(t.width), "assign"), c.style.position = cc11001100_hook("c.style.position", "absolute", "assign"), a = cc11001100_hook("a", 36 === c.offsetWidth || "absolute", "assign"), be.removeChild(l), c = cc11001100_hook("c", null, "assign");
      }
    }
    function n(e) {
      cc11001100_hook("e", e, "function-parameter");
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = cc11001100_hook("l", r.createElement("div"), "var-init"),
      c = cc11001100_hook("c", r.createElement("div"), "var-init");
    c.style && (c.style.backgroundClip = cc11001100_hook("c.style.backgroundClip", "content-box", "assign"), c.cloneNode(!0).style.backgroundClip = cc11001100_hook("c.cloneNode(!0).style.backgroundClip", "", "assign"), h.clearCloneStyle = cc11001100_hook("h.clearCloneStyle", "content-box" === c.style.backgroundClip, "assign"), w.extend(h, {
      boxSizingReliable: function () {
        return t(), o;
      },
      pixelBoxStyles: function () {
        return t(), s;
      },
      pixelPosition: function () {
        return t(), i;
      },
      reliableMarginLeft: function () {
        return t(), u;
      },
      scrollboxSize: function () {
        return t(), a;
      }
    }));
  }();
  function Fe(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o,
      a,
      s = cc11001100_hook("s", e.style, "var-init");
    return (n = cc11001100_hook("n", n || $e(e), "assign")) && ("" !== (a = cc11001100_hook("a", n.getPropertyValue(t) || n[t], "assign")) || w.contains(e.ownerDocument, e) || (a = cc11001100_hook("a", w.style(e, t), "assign")), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = cc11001100_hook("r", s.width, "assign"), i = cc11001100_hook("i", s.minWidth, "assign"), o = cc11001100_hook("o", s.maxWidth, "assign"), s.minWidth = cc11001100_hook("s.minWidth", s.maxWidth = cc11001100_hook("s.maxWidth", s.width = cc11001100_hook("s.width", a, "assign"), "assign"), "assign"), a = cc11001100_hook("a", n.width, "assign"), s.width = cc11001100_hook("s.width", r, "assign"), s.minWidth = cc11001100_hook("s.minWidth", i, "assign"), s.maxWidth = cc11001100_hook("s.maxWidth", o, "assign"))), void 0 !== a ? a + "" : a;
  }
  function _e(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return {
      get: function () {
        if (!e()) return (this.get = cc11001100_hook("this.get", t, "assign")).apply(this, arguments);
        delete this.get;
      }
    };
  }
  var ze = cc11001100_hook("ze", /^(none|table(?!-c[ea]).+)/, "var-init"),
    Xe = cc11001100_hook("Xe", /^--/, "var-init"),
    Ue = cc11001100_hook("Ue", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    Ve = cc11001100_hook("Ve", {
      letterSpacing: cc11001100_hook("letterSpacing", "0", "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", "400", "object-key-init")
    }, "var-init"),
    Ge = cc11001100_hook("Ge", ["Webkit", "Moz", "ms"], "var-init"),
    Ye = cc11001100_hook("Ye", r.createElement("div").style, "var-init");
  function Qe(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e in Ye) return e;
    var t = cc11001100_hook("t", e[0].toUpperCase() + e.slice(1), "var-init"),
      n = cc11001100_hook("n", Ge.length, "var-init");
    while (n--) if ((e = cc11001100_hook("e", Ge[n] + t, "assign")) in Ye) return e;
  }
  function Je(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", w.cssProps[e], "var-init");
    return t || (t = cc11001100_hook("t", w.cssProps[e] = cc11001100_hook("w.cssProps[e]", Qe(e) || e, "assign"), "assign")), t;
  }
  function Ke(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", ie.exec(t), "var-init");
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var a = cc11001100_hook("a", "width" === t ? 1 : 0, "var-init"),
      s = cc11001100_hook("s", 0, "var-init"),
      u = cc11001100_hook("u", 0, "var-init");
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += cc11001100_hook("a", 2, "assign")) "margin" === n && (u += cc11001100_hook("u", w.css(e, n + oe[a], !0, i), "assign")), r ? ("content" === n && (u -= cc11001100_hook("u", w.css(e, "padding" + oe[a], !0, i), "assign")), "margin" !== n && (u -= cc11001100_hook("u", w.css(e, "border" + oe[a] + "Width", !0, i), "assign"))) : (u += cc11001100_hook("u", w.css(e, "padding" + oe[a], !0, i), "assign"), "padding" !== n ? u += cc11001100_hook("u", w.css(e, "border" + oe[a] + "Width", !0, i), "assign") : s += cc11001100_hook("s", w.css(e, "border" + oe[a] + "Width", !0, i), "assign"));
    return !r && o >= 0 && (u += cc11001100_hook("u", Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)), "assign")), u;
  }
  function et(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", $e(e), "var-init"),
      i = cc11001100_hook("i", Fe(e, t, r), "var-init"),
      o = cc11001100_hook("o", "border-box" === w.css(e, "boxSizing", !1, r), "var-init"),
      a = cc11001100_hook("a", o, "var-init");
    if (We.test(i)) {
      if (!n) return i;
      i = cc11001100_hook("i", "auto", "assign");
    }
    return a = cc11001100_hook("a", a && (h.boxSizingReliable() || i === e.style[t]), "assign"), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = cc11001100_hook("i", e["offset" + t[0].toUpperCase() + t.slice(1)], "assign"), a = cc11001100_hook("a", !0, "assign")), (i = cc11001100_hook("i", parseFloat(i) || 0, "assign")) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = cc11001100_hook("n", Fe(e, "opacity"), "var-init");
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
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = cc11001100_hook("s", G(t), "var-init"),
          u = cc11001100_hook("u", Xe.test(t), "var-init"),
          l = cc11001100_hook("l", e.style, "var-init");
        if (u || (t = cc11001100_hook("t", Je(s), "assign")), a = cc11001100_hook("a", w.cssHooks[t] || w.cssHooks[s], "assign"), void 0 === n) return a && "get" in a && void 0 !== (i = cc11001100_hook("i", a.get(e, !1, r), "assign")) ? i : l[t];
        "string" == (o = cc11001100_hook("o", typeof n, "assign")) && (i = cc11001100_hook("i", ie.exec(n), "assign")) && i[1] && (n = cc11001100_hook("n", ue(e, t, i), "assign"), o = cc11001100_hook("o", "number", "assign")), null != n && n === n && ("number" === o && (n += cc11001100_hook("n", i && i[3] || (w.cssNumber[s] ? "" : "px"), "assign")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = cc11001100_hook("l[t]", "inherit", "assign")), a && "set" in a && void 0 === (n = cc11001100_hook("n", a.set(e, n, r), "assign")) || (u ? l.setProperty(t, n) : l[t] = cc11001100_hook("l[t]", n, "assign")));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = cc11001100_hook("s", G(t), "var-init");
      return Xe.test(t) || (t = cc11001100_hook("t", Je(s), "assign")), (a = cc11001100_hook("a", w.cssHooks[t] || w.cssHooks[s], "assign")) && "get" in a && (i = cc11001100_hook("i", a.get(e, !0, n), "assign")), void 0 === i && (i = cc11001100_hook("i", Fe(e, t, r), "assign")), "normal" === i && t in Ve && (i = cc11001100_hook("i", Ve[t], "assign")), "" === n || n ? (o = cc11001100_hook("o", parseFloat(i), "assign"), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = cc11001100_hook("w.cssHooks[t]", {
      get: function (e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      },
      set: function (e, n, r) {
        var i,
          o = cc11001100_hook("o", $e(e), "var-init"),
          a = cc11001100_hook("a", "border-box" === w.css(e, "boxSizing", !1, o), "var-init"),
          s = cc11001100_hook("s", r && Ze(e, t, r, a, o), "var-init");
        return a && h.scrollboxSize() === o.position && (s -= cc11001100_hook("s", Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5), "assign")), s && (i = cc11001100_hook("i", ie.exec(n), "assign")) && "px" !== (i[3] || "px") && (e.style[t] = cc11001100_hook("e.style[t]", n, "assign"), n = cc11001100_hook("n", w.css(e, t), "assign")), Ke(e, n, s);
      }
    }, "assign");
  }), w.cssHooks.marginLeft = cc11001100_hook("w.cssHooks.marginLeft", _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
      marginLeft: cc11001100_hook("marginLeft", 0, "object-key-init")
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), "assign"), w.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (e, t) {
    w.cssHooks[e + t] = cc11001100_hook("w.cssHooks[e + t]", {
      expand: function (n) {
        for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", {}, "var-init"), o = cc11001100_hook("o", "string" == typeof n ? n.split(" ") : [n], "var-init"); r < 4; r++) i[e + oe[r] + t] = cc11001100_hook("i[e + oe[r] + t]", o[r] || o[r - 2] || o[0], "assign");
        return i;
      }
    }, "assign"), "margin" !== e && (w.cssHooks[e + t].set = cc11001100_hook("w.cssHooks[e + t].set", Ke, "assign"));
  }), w.fn.extend({
    css: function (e, t) {
      return z(this, function (e, t, n) {
        var r,
          i,
          o = cc11001100_hook("o", {}, "var-init"),
          a = cc11001100_hook("a", 0, "var-init");
        if (Array.isArray(t)) {
          for (r = cc11001100_hook("r", $e(e), "assign"), i = cc11001100_hook("i", t.length, "assign"); a < i; a++) o[t[a]] = cc11001100_hook("o[t[a]]", w.css(e, t[a], !1, r), "assign");
          return o;
        }
        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    }
  });
  function tt(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    return new tt.prototype.init(e, t, n, r, i);
  }
  w.Tween = cc11001100_hook("w.Tween", tt, "assign"), tt.prototype = cc11001100_hook("tt.prototype", {
    constructor: cc11001100_hook("constructor", tt, "object-key-init"),
    init: function (e, t, n, r, i, o) {
      this.elem = cc11001100_hook("this.elem", e, "assign"), this.prop = cc11001100_hook("this.prop", n, "assign"), this.easing = cc11001100_hook("this.easing", i || w.easing._default, "assign"), this.options = cc11001100_hook("this.options", t, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", r, "assign"), this.unit = cc11001100_hook("this.unit", o || (w.cssNumber[n] ? "" : "px"), "assign");
    },
    cur: function () {
      var e = cc11001100_hook("e", tt.propHooks[this.prop], "var-init");
      return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = cc11001100_hook("n", tt.propHooks[this.prop], "var-init");
      return this.options.duration ? this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration), "assign"), "assign") : this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", e, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * t + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    }
  }, "assign"), tt.prototype.init.prototype = cc11001100_hook("tt.prototype.init.prototype", tt.prototype, "assign"), tt.propHooks = cc11001100_hook("tt.propHooks", {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = cc11001100_hook("t", w.css(e.elem, e.prop, ""), "assign")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign") : w.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, "assign"), tt.propHooks.scrollTop = cc11001100_hook("tt.propHooks.scrollTop", tt.propHooks.scrollLeft = cc11001100_hook("tt.propHooks.scrollLeft", {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign"));
    }
  }, "assign"), "assign"), w.easing = cc11001100_hook("w.easing", {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: cc11001100_hook("_default", "swing", "object-key-init")
  }, "assign"), w.fx = cc11001100_hook("w.fx", tt.prototype.init, "assign"), w.fx.step = cc11001100_hook("w.fx.step", {}, "assign");
  var nt,
    rt,
    it = cc11001100_hook("it", /^(?:toggle|show|hide)$/, "var-init"),
    ot = cc11001100_hook("ot", /queueHooks$/, "var-init");
  function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }
  function st() {
    return e.setTimeout(function () {
      nt = cc11001100_hook("nt", void 0, "assign");
    }), nt = cc11001100_hook("nt", Date.now(), "assign");
  }
  function ut(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r = cc11001100_hook("r", 0, "var-init"),
      i = cc11001100_hook("i", {
        height: cc11001100_hook("height", e, "object-key-init")
      }, "var-init");
    for (t = cc11001100_hook("t", t ? 1 : 0, "assign"); r < 4; r += cc11001100_hook("r", 2 - t, "assign")) i["margin" + (n = cc11001100_hook("n", oe[r], "assign"))] = cc11001100_hook("i[\"margin\" + (n = oe[r])]", i["padding" + n] = cc11001100_hook("i[\"padding\" + n]", e, "assign"), "assign");
    return t && (i.opacity = cc11001100_hook("i.opacity", i.width = cc11001100_hook("i.width", e, "assign"), "assign")), i;
  }
  function lt(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r, i = cc11001100_hook("i", (pt.tweeners[t] || []).concat(pt.tweeners["*"]), "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", i.length, "var-init"); o < a; o++) if (r = cc11001100_hook("r", i[o].call(n, t, e), "assign")) return r;
  }
  function ct(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
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
      g = cc11001100_hook("g", e.nodeType && ae(e), "var-init"),
      y = cc11001100_hook("y", J.get(e, "fxshow"), "var-init");
    n.queue || (null == (a = cc11001100_hook("a", w._queueHooks(e, "fx"), "assign")).unqueued && (a.unqueued = cc11001100_hook("a.unqueued", 0, "assign"), s = cc11001100_hook("s", a.empty.fire, "assign"), a.empty.fire = cc11001100_hook("a.empty.fire", function () {
      a.unqueued || s();
    }, "assign")), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));
    for (r in t) if (i = cc11001100_hook("i", t[r], "assign"), it.test(i)) {
      if (delete t[r], o = cc11001100_hook("o", o || "toggle" === i, "assign"), i === (g ? "hide" : "show")) {
        if ("show" !== i || !y || void 0 === y[r]) continue;
        g = cc11001100_hook("g", !0, "assign");
      }
      d[r] = cc11001100_hook("d[r]", y && y[r] || w.style(e, r), "assign");
    }
    if ((u = cc11001100_hook("u", !w.isEmptyObject(t), "assign")) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = cc11001100_hook("n.overflow", [h.overflow, h.overflowX, h.overflowY], "assign"), null == (l = cc11001100_hook("l", y && y.display, "assign")) && (l = cc11001100_hook("l", J.get(e, "display"), "assign")), "none" === (c = cc11001100_hook("c", w.css(e, "display"), "assign")) && (l ? c = cc11001100_hook("c", l, "assign") : (fe([e], !0), l = cc11001100_hook("l", e.style.display || l, "assign"), c = cc11001100_hook("c", w.css(e, "display"), "assign"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = cc11001100_hook("h.display", l, "assign");
      }), null == l && (c = cc11001100_hook("c", h.display, "assign"), l = cc11001100_hook("l", "none" === c ? "" : c, "assign"))), h.display = cc11001100_hook("h.display", "inline-block", "assign"))), n.overflow && (h.overflow = cc11001100_hook("h.overflow", "hidden", "assign"), p.always(function () {
        h.overflow = cc11001100_hook("h.overflow", n.overflow[0], "assign"), h.overflowX = cc11001100_hook("h.overflowX", n.overflow[1], "assign"), h.overflowY = cc11001100_hook("h.overflowY", n.overflow[2], "assign");
      })), u = cc11001100_hook("u", !1, "assign");
      for (r in d) u || (y ? "hidden" in y && (g = cc11001100_hook("g", y.hidden, "assign")) : y = cc11001100_hook("y", J.access(e, "fxshow", {
        display: cc11001100_hook("display", l, "object-key-init")
      }), "assign"), o && (y.hidden = cc11001100_hook("y.hidden", !g, "assign")), g && fe([e], !0), p.done(function () {
        g || fe([e]), J.remove(e, "fxshow");
        for (r in d) w.style(e, r, d[r]);
      })), u = cc11001100_hook("u", lt(g ? y[r] : 0, r, p), "assign"), r in y || (y[r] = cc11001100_hook("y[r]", u.start, "assign"), g && (u.end = cc11001100_hook("u.end", u.start, "assign"), u.start = cc11001100_hook("u.start", 0, "assign")));
    }
  }
  function ft(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i, o, a;
    for (n in e) if (r = cc11001100_hook("r", G(n), "assign"), i = cc11001100_hook("i", t[r], "assign"), o = cc11001100_hook("o", e[n], "assign"), Array.isArray(o) && (i = cc11001100_hook("i", o[1], "assign"), o = cc11001100_hook("o", e[n] = cc11001100_hook("e[n]", o[0], "assign"), "assign")), n !== r && (e[r] = cc11001100_hook("e[r]", o, "assign"), delete e[n]), (a = cc11001100_hook("a", w.cssHooks[r], "assign")) && "expand" in a) {
      o = cc11001100_hook("o", a.expand(o), "assign"), delete e[r];
      for (n in o) n in e || (e[n] = cc11001100_hook("e[n]", o[n], "assign"), t[n] = cc11001100_hook("t[n]", i, "assign"));
    } else t[r] = cc11001100_hook("t[r]", i, "assign");
  }
  function pt(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", 0, "var-init"),
      a = cc11001100_hook("a", pt.prefilters.length, "var-init"),
      s = cc11001100_hook("s", w.Deferred().always(function () {
        delete u.elem;
      }), "var-init"),
      u = function () {
        if (i) return !1;
        for (var t = cc11001100_hook("t", nt || st(), "var-init"), n = cc11001100_hook("n", Math.max(0, l.startTime + l.duration - t), "var-init"), r = cc11001100_hook("r", 1 - (n / l.duration || 0), "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", l.tweens.length, "var-init"); o < a; o++) l.tweens[o].run(r);
        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
      },
      l = cc11001100_hook("l", s.promise({
        elem: cc11001100_hook("elem", e, "object-key-init"),
        props: cc11001100_hook("props", w.extend({}, t), "object-key-init"),
        opts: cc11001100_hook("opts", w.extend(!0, {
          specialEasing: {},
          easing: cc11001100_hook("easing", w.easing._default, "object-key-init")
        }, n), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", t, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", n, "object-key-init"),
        startTime: cc11001100_hook("startTime", nt || st(), "object-key-init"),
        duration: cc11001100_hook("duration", n.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (t, n) {
          var r = cc11001100_hook("r", w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing), "var-init");
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
    for (ft(c, l.opts.specialEasing); o < a; o++) if (r = cc11001100_hook("r", pt.prefilters[o].call(l, e, c, l.opts), "assign")) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = cc11001100_hook("w._queueHooks(l.elem, l.opts.queue).stop", r.stop.bind(r), "assign")), r;
    return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
      elem: cc11001100_hook("elem", e, "object-key-init"),
      anim: cc11001100_hook("anim", l, "object-key-init"),
      queue: cc11001100_hook("queue", l.opts.queue, "object-key-init")
    })), l;
  }
  w.Animation = cc11001100_hook("w.Animation", w.extend(pt, {
    tweeners: {
      "*": cc11001100_hook("*", [function (e, t) {
        var n = cc11001100_hook("n", this.createTween(e, t), "var-init");
        return ue(n.elem, e, ie.exec(t), n), n;
      }], "object-key-init")
    },
    tweener: function (e, t) {
      g(e) ? (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", ["*"], "assign")) : e = cc11001100_hook("e", e.match(M), "assign");
      for (var n, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < i; r++) n = cc11001100_hook("n", e[r], "assign"), pt.tweeners[n] = cc11001100_hook("pt.tweeners[n]", pt.tweeners[n] || [], "assign"), pt.tweeners[n].unshift(t);
    },
    prefilters: cc11001100_hook("prefilters", [ct], "object-key-init"),
    prefilter: function (e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    }
  }), "assign"), w.speed = cc11001100_hook("w.speed", function (e, t, n) {
    var r = cc11001100_hook("r", e && "object" == typeof e ? w.extend({}, e) : {
      complete: cc11001100_hook("complete", n || !n && t || g(e) && e, "object-key-init"),
      duration: cc11001100_hook("duration", e, "object-key-init"),
      easing: cc11001100_hook("easing", n && t || t && !g(t) && t, "object-key-init")
    }, "var-init");
    return w.fx.off ? r.duration = cc11001100_hook("r.duration", 0, "assign") : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = cc11001100_hook("r.duration", w.fx.speeds[r.duration], "assign") : r.duration = cc11001100_hook("r.duration", w.fx.speeds._default, "assign")), null != r.queue && !0 !== r.queue || (r.queue = cc11001100_hook("r.queue", "fx", "assign")), r.old = cc11001100_hook("r.old", r.complete, "assign"), r.complete = cc11001100_hook("r.complete", function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, "assign"), r;
  }, "assign"), w.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", t, "object-key-init")
      }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = cc11001100_hook("i", w.isEmptyObject(e), "var-init"),
        o = cc11001100_hook("o", w.speed(t, n, r), "var-init"),
        a = function () {
          var t = cc11001100_hook("t", pt(this, w.extend({}, e), o), "var-init");
          (i || J.get(this, "finish")) && t.stop(!0);
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
          o = cc11001100_hook("o", w.timers, "var-init"),
          a = cc11001100_hook("a", J.get(this), "var-init");
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
        for (i = cc11001100_hook("i", o.length, "assign"); i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = cc11001100_hook("t", !1, "assign"), o.splice(i, 1));
        !t && n || w.dequeue(this, e);
      });
    },
    finish: function (e) {
      return !1 !== e && (e = cc11001100_hook("e", e || "fx", "assign")), this.each(function () {
        var t,
          n = cc11001100_hook("n", J.get(this), "var-init"),
          r = cc11001100_hook("r", n[e + "queue"], "var-init"),
          i = cc11001100_hook("i", n[e + "queueHooks"], "var-init"),
          o = cc11001100_hook("o", w.timers, "var-init"),
          a = cc11001100_hook("a", r ? r.length : 0, "var-init");
        for (n.finish = cc11001100_hook("n.finish", !0, "assign"), w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = cc11001100_hook("t", o.length, "assign"); t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = cc11001100_hook("t", 0, "assign"); t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = cc11001100_hook("n", w.fn[t], "var-init");
    w.fn[t] = cc11001100_hook("w.fn[t]", function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    }, "assign");
  }), w.each({
    slideDown: cc11001100_hook("slideDown", ut("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", ut("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", ut("toggle"), "object-key-init"),
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
    w.fn[e] = cc11001100_hook("w.fn[e]", function (e, n, r) {
      return this.animate(t, e, n, r);
    }, "assign");
  }), w.timers = cc11001100_hook("w.timers", [], "assign"), w.fx.tick = cc11001100_hook("w.fx.tick", function () {
    var e,
      t = cc11001100_hook("t", 0, "var-init"),
      n = cc11001100_hook("n", w.timers, "var-init");
    for (nt = cc11001100_hook("nt", Date.now(), "assign"); t < n.length; t++) (e = cc11001100_hook("e", n[t], "assign"))() || n[t] !== e || n.splice(t--, 1);
    n.length || w.fx.stop(), nt = cc11001100_hook("nt", void 0, "assign");
  }, "assign"), w.fx.timer = cc11001100_hook("w.fx.timer", function (e) {
    w.timers.push(e), w.fx.start();
  }, "assign"), w.fx.interval = cc11001100_hook("w.fx.interval", 13, "assign"), w.fx.start = cc11001100_hook("w.fx.start", function () {
    rt || (rt = cc11001100_hook("rt", !0, "assign"), at());
  }, "assign"), w.fx.stop = cc11001100_hook("w.fx.stop", function () {
    rt = cc11001100_hook("rt", null, "assign");
  }, "assign"), w.fx.speeds = cc11001100_hook("w.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"), w.fn.delay = cc11001100_hook("w.fn.delay", function (t, n) {
    return t = cc11001100_hook("t", w.fx ? w.fx.speeds[t] || t : t, "assign"), n = cc11001100_hook("n", n || "fx", "assign"), this.queue(n, function (n, r) {
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
  var dt,
    ht = cc11001100_hook("ht", w.expr.attrHandle, "var-init");
  w.fn.extend({
    attr: function (e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", e.nodeType, "var-init");
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = cc11001100_hook("i", w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0), "assign")), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = cc11001100_hook("r", i.set(e, n, t), "assign")) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = cc11001100_hook("r", i.get(e, t), "assign")) ? r : null == (r = cc11001100_hook("r", w.find.attr(e, t), "assign")) ? void 0 : r);
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
        i = cc11001100_hook("i", t && t.match(M), "var-init");
      if (i && 1 === e.nodeType) while (n = cc11001100_hook("n", i[r++], "assign")) e.removeAttribute(n);
    }
  }), dt = cc11001100_hook("dt", {
    set: function (e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, "assign"), w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = cc11001100_hook("n", ht[t] || w.find.attr, "var-init");
    ht[t] = cc11001100_hook("ht[t]", function (e, t, r) {
      var i,
        o,
        a = cc11001100_hook("a", t.toLowerCase(), "var-init");
      return r || (o = cc11001100_hook("o", ht[a], "assign"), ht[a] = cc11001100_hook("ht[a]", i, "assign"), i = cc11001100_hook("i", null != n(e, t, r) ? a : null, "assign"), ht[a] = cc11001100_hook("ht[a]", o, "assign")), i;
    }, "assign");
  });
  var gt = cc11001100_hook("gt", /^(?:input|select|textarea|button)$/i, "var-init"),
    yt = cc11001100_hook("yt", /^(?:a|area)$/i, "var-init");
  w.fn.extend({
    prop: function (e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    prop: function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", e.nodeType, "var-init");
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = cc11001100_hook("t", w.propFix[t] || t, "assign"), i = cc11001100_hook("i", w.propHooks[t], "assign")), void 0 !== n ? i && "set" in i && void 0 !== (r = cc11001100_hook("r", i.set(e, n, t), "assign")) ? r : e[t] = cc11001100_hook("e[t]", n, "assign") : i && "get" in i && null !== (r = cc11001100_hook("r", i.get(e, t), "assign")) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = cc11001100_hook("t", w.find.attr(e, "tabindex"), "var-init");
          return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init")
    }
  }), h.optSelected || (w.propHooks.selected = cc11001100_hook("w.propHooks.selected", {
    get: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }, "assign")), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = cc11001100_hook("w.propFix[this.toLowerCase()]", this, "assign");
  });
  function vt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return (e.match(M) || []).join(" ");
  }
  function mt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function xt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }
  w.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = cc11001100_hook("u", 0, "var-init");
      if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });
      if ((t = cc11001100_hook("t", xt(e), "assign")).length) while (n = cc11001100_hook("n", this[u++], "assign")) if (i = cc11001100_hook("i", mt(n), "assign"), r = cc11001100_hook("r", 1 === n.nodeType && " " + vt(i) + " ", "assign")) {
        a = cc11001100_hook("a", 0, "assign");
        while (o = cc11001100_hook("o", t[a++], "assign")) r.indexOf(" " + o + " ") < 0 && (r += cc11001100_hook("r", o + " ", "assign"));
        i !== (s = cc11001100_hook("s", vt(r), "assign")) && n.setAttribute("class", s);
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
      if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = cc11001100_hook("t", xt(e), "assign")).length) while (n = cc11001100_hook("n", this[u++], "assign")) if (i = cc11001100_hook("i", mt(n), "assign"), r = cc11001100_hook("r", 1 === n.nodeType && " " + vt(i) + " ", "assign")) {
        a = cc11001100_hook("a", 0, "assign");
        while (o = cc11001100_hook("o", t[a++], "assign")) while (r.indexOf(" " + o + " ") > -1) r = cc11001100_hook("r", r.replace(" " + o + " ", " "), "assign");
        i !== (s = cc11001100_hook("s", vt(r), "assign")) && n.setAttribute("class", s);
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = cc11001100_hook("n", typeof e, "var-init"),
        r = cc11001100_hook("r", "string" === n || Array.isArray(e), "var-init");
      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;
        if (r) {
          i = cc11001100_hook("i", 0, "assign"), o = cc11001100_hook("o", w(this), "assign"), a = cc11001100_hook("a", xt(e), "assign");
          while (t = cc11001100_hook("t", a[i++], "assign")) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = cc11001100_hook("t", mt(this), "assign")) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    },
    hasClass: function (e) {
      var t,
        n,
        r = cc11001100_hook("r", 0, "var-init");
      t = cc11001100_hook("t", " " + e + " ", "assign");
      while (n = cc11001100_hook("n", this[r++], "assign")) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      return !1;
    }
  });
  var bt = cc11001100_hook("bt", /\r/g, "var-init");
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = cc11001100_hook("i", this[0], "var-init");
      {
        if (arguments.length) return r = cc11001100_hook("r", g(e), "assign"), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = cc11001100_hook("i", r ? e.call(this, n, w(this).val()) : e, "assign")) ? i = cc11001100_hook("i", "", "assign") : "number" == typeof i ? i += cc11001100_hook("i", "", "assign") : Array.isArray(i) && (i = cc11001100_hook("i", w.map(i, function (e) {
            return null == e ? "" : e + "";
          }), "assign")), (t = cc11001100_hook("t", w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()], "assign")) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = cc11001100_hook("this.value", i, "assign")));
        });
        if (i) return (t = cc11001100_hook("t", w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()], "assign")) && "get" in t && void 0 !== (n = cc11001100_hook("n", t.get(i, "value"), "assign")) ? n : "string" == typeof (n = cc11001100_hook("n", i.value, "assign")) ? n.replace(bt, "") : null == n ? "" : n;
      }
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = cc11001100_hook("t", w.find.attr(e, "value"), "var-init");
          return null != t ? t : vt(w.text(e));
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
            if (t = cc11001100_hook("t", w(n).val(), "assign"), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function (e, t) {
          var n,
            r,
            i = cc11001100_hook("i", e.options, "var-init"),
            o = cc11001100_hook("o", w.makeArray(t), "var-init"),
            a = cc11001100_hook("a", i.length, "var-init");
          while (a--) ((r = cc11001100_hook("r", i[a], "assign")).selected = cc11001100_hook("(r = i[a]).selected", w.inArray(w.valHooks.option.get(r), o) > -1, "assign")) && (n = cc11001100_hook("n", !0, "assign"));
          return n || (e.selectedIndex = cc11001100_hook("e.selectedIndex", -1, "assign")), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = cc11001100_hook("w.valHooks[this]", {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = cc11001100_hook("e.checked", w.inArray(w(e).val(), t) > -1, "assign");
      }
    }, "assign"), h.checkOn || (w.valHooks[this].get = cc11001100_hook("w.valHooks[this].get", function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    }, "assign"));
  }), h.focusin = cc11001100_hook("h.focusin", "onfocusin" in e, "assign");
  var wt = cc11001100_hook("wt", /^(?:focusinfocus|focusoutblur)$/, "var-init"),
    Tt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        v = cc11001100_hook("v", [i || r], "var-init"),
        m = cc11001100_hook("m", f.call(t, "type") ? t.type : t, "var-init"),
        x = cc11001100_hook("x", f.call(t, "namespace") ? t.namespace.split(".") : [], "var-init");
      if (s = cc11001100_hook("s", h = cc11001100_hook("h", u = cc11001100_hook("u", i = cc11001100_hook("i", i || r, "assign"), "assign"), "assign"), "assign"), 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = cc11001100_hook("m", (x = cc11001100_hook("x", m.split("."), "assign")).shift(), "assign"), x.sort()), c = cc11001100_hook("c", m.indexOf(":") < 0 && "on" + m, "assign"), t = cc11001100_hook("t", t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), "assign"), t.isTrigger = cc11001100_hook("t.isTrigger", o ? 2 : 3, "assign"), t.namespace = cc11001100_hook("t.namespace", x.join("."), "assign"), t.rnamespace = cc11001100_hook("t.rnamespace", t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), t.result = cc11001100_hook("t.result", void 0, "assign"), t.target || (t.target = cc11001100_hook("t.target", i, "assign")), n = cc11001100_hook("n", null == n ? [t] : w.makeArray(n, [t]), "assign"), d = cc11001100_hook("d", w.event.special[m] || {}, "assign"), o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = cc11001100_hook("l", d.delegateType || m, "assign"), wt.test(l + m) || (s = cc11001100_hook("s", s.parentNode, "assign")); s; s = cc11001100_hook("s", s.parentNode, "assign")) v.push(s), u = cc11001100_hook("u", s, "assign");
          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }
        a = cc11001100_hook("a", 0, "assign");
        while ((s = cc11001100_hook("s", v[a++], "assign")) && !t.isPropagationStopped()) h = cc11001100_hook("h", s, "assign"), t.type = cc11001100_hook("t.type", a > 1 ? l : d.bindType || m, "assign"), (p = cc11001100_hook("p", (J.get(s, "events") || {})[t.type] && J.get(s, "handle"), "assign")) && p.apply(s, n), (p = cc11001100_hook("p", c && s[c], "assign")) && p.apply && Y(s) && (t.result = cc11001100_hook("t.result", p.apply(s, n), "assign"), !1 === t.result && t.preventDefault());
        return t.type = cc11001100_hook("t.type", m, "assign"), o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = cc11001100_hook("u", i[c], "assign")) && (i[c] = cc11001100_hook("i[c]", null, "assign")), w.event.triggered = cc11001100_hook("w.event.triggered", m, "assign"), t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = cc11001100_hook("w.event.triggered", void 0, "assign"), u && (i[c] = cc11001100_hook("i[c]", u, "assign"))), t.result;
      }
    },
    simulate: function (e, t, n) {
      var r = cc11001100_hook("r", w.extend(new w.Event(), n, {
        type: cc11001100_hook("type", e, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init")
      }), "var-init");
      w.event.trigger(r, null, t);
    }
  }), w.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = cc11001100_hook("n", this[0], "var-init");
      if (n) return w.event.trigger(e, t, n, !0);
    }
  }), h.focusin || w.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (e, t) {
    var n = function (e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };
    w.event.special[t] = cc11001100_hook("w.event.special[t]", {
      setup: function () {
        var r = cc11001100_hook("r", this.ownerDocument || this, "var-init"),
          i = cc11001100_hook("i", J.access(r, t), "var-init");
        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      },
      teardown: function () {
        var r = cc11001100_hook("r", this.ownerDocument || this, "var-init"),
          i = cc11001100_hook("i", J.access(r, t) - 1, "var-init");
        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      }
    }, "assign");
  });
  var Ct = cc11001100_hook("Ct", e.location, "var-init"),
    Et = cc11001100_hook("Et", Date.now(), "var-init"),
    kt = cc11001100_hook("kt", /\?/, "var-init");
  w.parseXML = cc11001100_hook("w.parseXML", function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = cc11001100_hook("n", new e.DOMParser().parseFromString(t, "text/xml"), "assign");
    } catch (e) {
      n = cc11001100_hook("n", void 0, "assign");
    }
    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  }, "assign");
  var St = cc11001100_hook("St", /\[\]$/, "var-init"),
    Dt = cc11001100_hook("Dt", /\r?\n/g, "var-init"),
    Nt = cc11001100_hook("Nt", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    At = cc11001100_hook("At", /^(?:input|select|textarea|keygen)/i, "var-init");
  function jt(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i;
    if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }
  w.param = cc11001100_hook("w.param", function (e, t) {
    var n,
      r = cc11001100_hook("r", [], "var-init"),
      i = function (e, t) {
        var n = cc11001100_hook("n", g(t) ? t() : t, "var-init");
        r[r.length] = cc11001100_hook("r[r.length]", encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n), "assign");
      };
    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }, "assign"), w.fn.extend({
    serialize: function () {
      return w.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", w.prop(this, "elements"), "var-init");
        return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = cc11001100_hook("e", this.type, "var-init");
        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = cc11001100_hook("n", w(this).val(), "var-init");
        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return {
            name: cc11001100_hook("name", t.name, "object-key-init"),
            value: cc11001100_hook("value", e.replace(Dt, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", t.name, "object-key-init"),
          value: cc11001100_hook("value", n.replace(Dt, "\r\n"), "object-key-init")
        };
      }).get();
    }
  });
  var qt = cc11001100_hook("qt", /%20/g, "var-init"),
    Lt = cc11001100_hook("Lt", /#.*$/, "var-init"),
    Ht = cc11001100_hook("Ht", /([?&])_=[^&]*/, "var-init"),
    Ot = cc11001100_hook("Ot", /^(.*?):[ \t]*([^\r\n]*)$/gm, "var-init"),
    Pt = cc11001100_hook("Pt", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
    Mt = cc11001100_hook("Mt", /^(?:GET|HEAD)$/, "var-init"),
    Rt = cc11001100_hook("Rt", /^\/\//, "var-init"),
    It = cc11001100_hook("It", {}, "var-init"),
    Wt = cc11001100_hook("Wt", {}, "var-init"),
    $t = cc11001100_hook("$t", "*/".concat("*"), "var-init"),
    Bt = cc11001100_hook("Bt", r.createElement("a"), "var-init");
  Bt.href = cc11001100_hook("Bt.href", Ct.href, "assign");
  function Ft(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function (t, n) {
      "string" != typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", "*", "assign"));
      var r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", t.toLowerCase().match(M) || [], "var-init");
      if (g(n)) while (r = cc11001100_hook("r", o[i++], "assign")) "+" === r[0] ? (r = cc11001100_hook("r", r.slice(1) || "*", "assign"), (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).unshift(n)) : (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).push(n);
    };
  }
  function _t(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i = cc11001100_hook("i", {}, "var-init"),
      o = cc11001100_hook("o", e === Wt, "var-init");
    function a(s) {
      cc11001100_hook("s", s, "function-parameter");
      var u;
      return i[s] = cc11001100_hook("i[s]", !0, "assign"), w.each(e[s] || [], function (e, s) {
        var l = cc11001100_hook("l", s(t, n, r), "var-init");
        return "string" != typeof l || o || i[l] ? o ? !(u = cc11001100_hook("u", l, "assign")) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }
    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }
  function zt(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r,
      i = cc11001100_hook("i", w.ajaxSettings.flatOptions || {}, "var-init");
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = cc11001100_hook("r", {}, "assign")))[n] = cc11001100_hook("(i[n] ? e : r || (r = {}))[n]", t[n], "assign"));
    return r && w.extend(!0, e, r), e;
  }
  function Xt(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o,
      a,
      s = cc11001100_hook("s", e.contents, "var-init"),
      u = cc11001100_hook("u", e.dataTypes, "var-init");
    while ("*" === u[0]) u.shift(), void 0 === r && (r = cc11001100_hook("r", e.mimeType || t.getResponseHeader("Content-Type"), "assign"));
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
  }
  function Ut(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i,
      o,
      a,
      s,
      u,
      l = cc11001100_hook("l", {}, "var-init"),
      c = cc11001100_hook("c", e.dataTypes.slice(), "var-init");
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = cc11001100_hook("l[a.toLowerCase()]", e.converters[a], "assign");
    o = cc11001100_hook("o", c.shift(), "assign");
    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = cc11001100_hook("n[e.responseFields[o]]", t, "assign")), !u && r && e.dataFilter && (t = cc11001100_hook("t", e.dataFilter(t, e.dataType), "assign")), u = cc11001100_hook("u", o, "assign"), o = cc11001100_hook("o", c.shift(), "assign")) if ("*" === o) o = cc11001100_hook("o", u, "assign");else if ("*" !== u && u !== o) {
      if (!(a = cc11001100_hook("a", l[u + " " + o] || l["* " + o], "assign"))) for (i in l) if ((s = cc11001100_hook("s", i.split(" "), "assign"))[1] === o && (a = cc11001100_hook("a", l[u + " " + s[0]] || l["* " + s[0]], "assign"))) {
        !0 === a ? a = cc11001100_hook("a", l[i], "assign") : !0 !== l[i] && (o = cc11001100_hook("o", s[0], "assign"), c.unshift(s[1]));
        break;
      }
      if (!0 !== a) if (a && e["throws"]) t = cc11001100_hook("t", a(t), "assign");else try {
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
  }
  w.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", Ct.href, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", Pt.test(Ct.protocol), "object-key-init"),
      global: cc11001100_hook("global", !0, "object-key-init"),
      processData: cc11001100_hook("processData", !0, "object-key-init"),
      async: cc11001100_hook("async", !0, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", $t, "object-key-init"),
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
        "text xml": cc11001100_hook("text xml", w.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", !0, "object-key-init"),
        context: cc11001100_hook("context", !0, "object-key-init")
      }
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", Ft(It), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", Ft(Wt), "object-key-init"),
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
        h = cc11001100_hook("h", w.ajaxSetup({}, n), "var-init"),
        g = cc11001100_hook("g", h.context || h, "var-init"),
        y = cc11001100_hook("y", h.context && (g.nodeType || g.jquery) ? w(g) : w.event, "var-init"),
        v = cc11001100_hook("v", w.Deferred(), "var-init"),
        m = cc11001100_hook("m", w.Callbacks("once memory"), "var-init"),
        x = cc11001100_hook("x", h.statusCode || {}, "var-init"),
        b = cc11001100_hook("b", {}, "var-init"),
        T = cc11001100_hook("T", {}, "var-init"),
        C = cc11001100_hook("C", "canceled", "var-init"),
        E = cc11001100_hook("E", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s) {
                s = cc11001100_hook("s", {}, "assign");
                while (t = cc11001100_hook("t", Ot.exec(a), "assign")) s[t[1].toLowerCase()] = cc11001100_hook("s[t[1].toLowerCase()]", t[2], "assign");
              }
              t = cc11001100_hook("t", s[e.toLowerCase()], "assign");
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return c ? a : null;
          },
          setRequestHeader: function (e, t) {
            return null == c && (e = cc11001100_hook("e", T[e.toLowerCase()] = cc11001100_hook("T[e.toLowerCase()]", T[e.toLowerCase()] || e, "assign"), "assign"), b[e] = cc11001100_hook("b[e]", t, "assign")), this;
          },
          overrideMimeType: function (e) {
            return null == c && (h.mimeType = cc11001100_hook("h.mimeType", e, "assign")), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (c) E.always(e[E.status]);else for (t in e) x[t] = cc11001100_hook("x[t]", [x[t], e[t]], "assign");
            return this;
          },
          abort: function (e) {
            var t = cc11001100_hook("t", e || C, "var-init");
            return i && i.abort(t), k(0, t), this;
          }
        }, "var-init");
      if (v.promise(E), h.url = cc11001100_hook("h.url", ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), "assign"), h.type = cc11001100_hook("h.type", n.method || n.type || h.method || h.type, "assign"), h.dataTypes = cc11001100_hook("h.dataTypes", (h.dataType || "*").toLowerCase().match(M) || [""], "assign"), null == h.crossDomain) {
        l = cc11001100_hook("l", r.createElement("a"), "assign");
        try {
          l.href = cc11001100_hook("l.href", h.url, "assign"), l.href = cc11001100_hook("l.href", l.href, "assign"), h.crossDomain = cc11001100_hook("h.crossDomain", Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host, "assign");
        } catch (e) {
          h.crossDomain = cc11001100_hook("h.crossDomain", !0, "assign");
        }
      }
      if (h.data && h.processData && "string" != typeof h.data && (h.data = cc11001100_hook("h.data", w.param(h.data, h.traditional), "assign")), _t(It, h, n, E), c) return E;
      (f = cc11001100_hook("f", w.event && h.global, "assign")) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = cc11001100_hook("h.type", h.type.toUpperCase(), "assign"), h.hasContent = cc11001100_hook("h.hasContent", !Mt.test(h.type), "assign"), o = cc11001100_hook("o", h.url.replace(Lt, ""), "assign"), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = cc11001100_hook("h.data", h.data.replace(qt, "+"), "assign")) : (d = cc11001100_hook("d", h.url.slice(o.length), "assign"), h.data && (h.processData || "string" == typeof h.data) && (o += cc11001100_hook("o", (kt.test(o) ? "&" : "?") + h.data, "assign"), delete h.data), !1 === h.cache && (o = cc11001100_hook("o", o.replace(Ht, "$1"), "assign"), d = cc11001100_hook("d", (kt.test(o) ? "&" : "?") + "_=" + Et++ + d, "assign")), h.url = cc11001100_hook("h.url", o + d, "assign")), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
      for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
      if (C = cc11001100_hook("C", "abort", "assign"), m.add(h.complete), E.done(h.success), E.fail(h.error), i = cc11001100_hook("i", _t(Wt, h, n, E), "assign")) {
        if (E.readyState = cc11001100_hook("E.readyState", 1, "assign"), f && y.trigger("ajaxSend", [E, h]), c) return E;
        h.async && h.timeout > 0 && (u = cc11001100_hook("u", e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout), "assign"));
        try {
          c = cc11001100_hook("c", !1, "assign"), i.send(b, k);
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
          b,
          T,
          C = cc11001100_hook("C", n, "var-init");
        c || (c = cc11001100_hook("c", !0, "assign"), u && e.clearTimeout(u), i = cc11001100_hook("i", void 0, "assign"), a = cc11001100_hook("a", s || "", "assign"), E.readyState = cc11001100_hook("E.readyState", t > 0 ? 4 : 0, "assign"), l = cc11001100_hook("l", t >= 200 && t < 300 || 304 === t, "assign"), r && (b = cc11001100_hook("b", Xt(h, E, r), "assign")), b = cc11001100_hook("b", Ut(h, b, E, l), "assign"), l ? (h.ifModified && ((T = cc11001100_hook("T", E.getResponseHeader("Last-Modified"), "assign")) && (w.lastModified[o] = cc11001100_hook("w.lastModified[o]", T, "assign")), (T = cc11001100_hook("T", E.getResponseHeader("etag"), "assign")) && (w.etag[o] = cc11001100_hook("w.etag[o]", T, "assign"))), 204 === t || "HEAD" === h.type ? C = cc11001100_hook("C", "nocontent", "assign") : 304 === t ? C = cc11001100_hook("C", "notmodified", "assign") : (C = cc11001100_hook("C", b.state, "assign"), p = cc11001100_hook("p", b.data, "assign"), l = cc11001100_hook("l", !(d = cc11001100_hook("d", b.error, "assign")), "assign"))) : (d = cc11001100_hook("d", C, "assign"), !t && C || (C = cc11001100_hook("C", "error", "assign"), t < 0 && (t = cc11001100_hook("t", 0, "assign")))), E.status = cc11001100_hook("E.status", t, "assign"), E.statusText = cc11001100_hook("E.statusText", (n || C) + "", "assign"), l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = cc11001100_hook("x", void 0, "assign"), f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }
      return E;
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, t) {
    w[t] = cc11001100_hook("w[t]", function (e, n, r, i) {
      return g(n) && (i = cc11001100_hook("i", i || r, "assign"), r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", void 0, "assign")), w.ajax(w.extend({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", t, "object-key-init"),
        dataType: cc11001100_hook("dataType", i, "object-key-init"),
        data: cc11001100_hook("data", n, "object-key-init"),
        success: cc11001100_hook("success", r, "object-key-init")
      }, w.isPlainObject(e) && e));
    }, "assign");
  }), w._evalUrl = cc11001100_hook("w._evalUrl", function (e) {
    return w.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "script", "object-key-init"),
      cache: cc11001100_hook("cache", !0, "object-key-init"),
      async: cc11001100_hook("async", !1, "object-key-init"),
      global: cc11001100_hook("global", !1, "object-key-init"),
      "throws": cc11001100_hook("throws", !0, "object-key-init")
    });
  }, "assign"), w.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (g(e) && (e = cc11001100_hook("e", e.call(this[0]), "assign")), t = cc11001100_hook("t", w(e, this[0].ownerDocument).eq(0).clone(!0), "assign"), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = cc11001100_hook("e", this, "var-init");
        while (e.firstElementChild) e = cc11001100_hook("e", e.firstElementChild, "assign");
        return e;
      }).append(this)), this;
    },
    wrapInner: function (e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = cc11001100_hook("t", w(this), "var-init"),
          n = cc11001100_hook("n", t.contents(), "var-init");
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = cc11001100_hook("t", g(e), "var-init");
      return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    }
  }), w.expr.pseudos.hidden = cc11001100_hook("w.expr.pseudos.hidden", function (e) {
    return !w.expr.pseudos.visible(e);
  }, "assign"), w.expr.pseudos.visible = cc11001100_hook("w.expr.pseudos.visible", function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, "assign"), w.ajaxSettings.xhr = cc11001100_hook("w.ajaxSettings.xhr", function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }, "assign");
  var Vt = cc11001100_hook("Vt", {
      0: cc11001100_hook(0, 200, "object-key-init"),
      1223: cc11001100_hook(1223, 204, "object-key-init")
    }, "var-init"),
    Gt = cc11001100_hook("Gt", w.ajaxSettings.xhr(), "var-init");
  h.cors = cc11001100_hook("h.cors", !!Gt && "withCredentials" in Gt, "assign"), h.ajax = cc11001100_hook("h.ajax", Gt = cc11001100_hook("Gt", !!Gt, "assign"), "assign"), w.ajaxTransport(function (t) {
    var n, r;
    if (h.cors || Gt && !t.crossDomain) return {
      send: function (i, o) {
        var a,
          s = cc11001100_hook("s", t.xhr(), "var-init");
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = cc11001100_hook("s[a]", t.xhrFields[a], "assign");
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = cc11001100_hook("i[\"X-Requested-With\"]", "XMLHttpRequest", "assign"));
        for (a in i) s.setRequestHeader(a, i[a]);
        n = cc11001100_hook("n", function (e) {
          return function () {
            n && (n = cc11001100_hook("n", r = cc11001100_hook("r", s.onload = cc11001100_hook("s.onload", s.onerror = cc11001100_hook("s.onerror", s.onabort = cc11001100_hook("s.onabort", s.ontimeout = cc11001100_hook("s.ontimeout", s.onreadystatechange = cc11001100_hook("s.onreadystatechange", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: cc11001100_hook("binary", s.response, "object-key-init")
            } : {
              text: cc11001100_hook("text", s.responseText, "object-key-init")
            }, s.getAllResponseHeaders()));
          };
        }, "assign"), s.onload = cc11001100_hook("s.onload", n(), "assign"), r = cc11001100_hook("r", s.onerror = cc11001100_hook("s.onerror", s.ontimeout = cc11001100_hook("s.ontimeout", n("error"), "assign"), "assign"), "assign"), void 0 !== s.onabort ? s.onabort = cc11001100_hook("s.onabort", r, "assign") : s.onreadystatechange = cc11001100_hook("s.onreadystatechange", function () {
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
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = cc11001100_hook("e.contents.script", !1, "assign"));
  }), w.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /\b(?:java|ecma)script\b/, "object-key-init")
    },
    converters: {
      "text script": function (e) {
        return w.globalEval(e), e;
      }
    }
  }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = cc11001100_hook("e.cache", !1, "assign")), e.crossDomain && (e.type = cc11001100_hook("e.type", "GET", "assign"));
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (i, o) {
          t = cc11001100_hook("t", w("<script>").prop({
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
    }
  });
  var Yt = cc11001100_hook("Yt", [], "var-init"),
    Qt = cc11001100_hook("Qt", /(=)\?(?=&|$)|\?\?/, "var-init");
  w.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var e = cc11001100_hook("e", Yt.pop() || w.expando + "_" + Et++, "var-init");
      return this[e] = cc11001100_hook("this[e]", !0, "assign"), e;
    }
  }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
      o,
      a,
      s = cc11001100_hook("s", !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data"), "var-init");
    if (s || "jsonp" === t.dataTypes[0]) return i = cc11001100_hook("i", t.jsonpCallback = cc11001100_hook("t.jsonpCallback", g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, "assign"), "assign"), s ? t[s] = cc11001100_hook("t[s]", t[s].replace(Qt, "$1" + i), "assign") : !1 !== t.jsonp && (t.url += cc11001100_hook("t.url", (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i, "assign")), t.converters["script json"] = cc11001100_hook("t.converters[\"script json\"]", function () {
      return a || w.error(i + " was not called"), a[0];
    }, "assign"), t.dataTypes[0] = cc11001100_hook("t.dataTypes[0]", "json", "assign"), o = cc11001100_hook("o", e[i], "assign"), e[i] = cc11001100_hook("e[i]", function () {
      a = cc11001100_hook("a", arguments, "assign");
    }, "assign"), r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = cc11001100_hook("e[i]", o, "assign"), t[i] && (t.jsonpCallback = cc11001100_hook("t.jsonpCallback", n.jsonpCallback, "assign"), Yt.push(i)), a && g(o) && o(a[0]), a = cc11001100_hook("a", o = cc11001100_hook("o", void 0, "assign"), "assign");
    }), "script";
  }), h.createHTMLDocument = cc11001100_hook("h.createHTMLDocument", function () {
    var e = cc11001100_hook("e", r.implementation.createHTMLDocument("").body, "var-init");
    return e.innerHTML = cc11001100_hook("e.innerHTML", "<form></form><form></form>", "assign"), 2 === e.childNodes.length;
  }(), "assign"), w.parseHTML = cc11001100_hook("w.parseHTML", function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", !1, "assign"));
    var i, o, a;
    return t || (h.createHTMLDocument ? ((i = cc11001100_hook("i", (t = cc11001100_hook("t", r.implementation.createHTMLDocument(""), "assign")).createElement("base"), "assign")).href = cc11001100_hook("(i = (t = r.implementation.createHTMLDocument(\"\")).createElement(\"base\")).href", r.location.href, "assign"), t.head.appendChild(i)) : t = cc11001100_hook("t", r, "assign")), o = cc11001100_hook("o", A.exec(e), "assign"), a = cc11001100_hook("a", !n && [], "assign"), o ? [t.createElement(o[1])] : (o = cc11001100_hook("o", xe([e], t, a), "assign"), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, "assign"), w.fn.load = cc11001100_hook("w.fn.load", function (e, t, n) {
    var r,
      i,
      o,
      a = cc11001100_hook("a", this, "var-init"),
      s = cc11001100_hook("s", e.indexOf(" "), "var-init");
    return s > -1 && (r = cc11001100_hook("r", vt(e.slice(s)), "assign"), e = cc11001100_hook("e", e.slice(0, s), "assign")), g(t) ? (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign")) : t && "object" == typeof t && (i = cc11001100_hook("i", "POST", "assign")), a.length > 0 && w.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", i || "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", t, "object-key-init")
    }).done(function (e) {
      o = cc11001100_hook("o", arguments, "assign"), a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, "assign"), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = cc11001100_hook("w.fn[t]", function (e) {
      return this.on(t, e);
    }, "assign");
  }), w.expr.pseudos.animated = cc11001100_hook("w.expr.pseudos.animated", function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, "assign"), w.offset = cc11001100_hook("w.offset", {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = cc11001100_hook("c", w.css(e, "position"), "var-init"),
        f = cc11001100_hook("f", w(e), "var-init"),
        p = cc11001100_hook("p", {}, "var-init");
      "static" === c && (e.style.position = cc11001100_hook("e.style.position", "relative", "assign")), s = cc11001100_hook("s", f.offset(), "assign"), o = cc11001100_hook("o", w.css(e, "top"), "assign"), u = cc11001100_hook("u", w.css(e, "left"), "assign"), (l = cc11001100_hook("l", ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, "assign")) ? (a = cc11001100_hook("a", (r = cc11001100_hook("r", f.position(), "assign")).top, "assign"), i = cc11001100_hook("i", r.left, "assign")) : (a = cc11001100_hook("a", parseFloat(o) || 0, "assign"), i = cc11001100_hook("i", parseFloat(u) || 0, "assign")), g(t) && (t = cc11001100_hook("t", t.call(e, n, w.extend({}, s)), "assign")), null != t.top && (p.top = cc11001100_hook("p.top", t.top - s.top + a, "assign")), null != t.left && (p.left = cc11001100_hook("p.left", t.left - s.left + i, "assign")), "using" in t ? t.using.call(e, p) : f.css(p);
    }
  }, "assign"), w.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });
      var t,
        n,
        r = cc11001100_hook("r", this[0], "var-init");
      if (r) return r.getClientRects().length ? (t = cc11001100_hook("t", r.getBoundingClientRect(), "assign"), n = cc11001100_hook("n", r.ownerDocument.defaultView, "assign"), {
        top: cc11001100_hook("top", t.top + n.pageYOffset, "object-key-init"),
        left: cc11001100_hook("left", t.left + n.pageXOffset, "object-key-init")
      }) : {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      };
    },
    position: function () {
      if (this[0]) {
        var e,
          t,
          n,
          r = cc11001100_hook("r", this[0], "var-init"),
          i = cc11001100_hook("i", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init");
        if ("fixed" === w.css(r, "position")) t = cc11001100_hook("t", r.getBoundingClientRect(), "assign");else {
          t = cc11001100_hook("t", this.offset(), "assign"), n = cc11001100_hook("n", r.ownerDocument, "assign"), e = cc11001100_hook("e", r.offsetParent || n.documentElement, "assign");
          while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = cc11001100_hook("e", e.parentNode, "assign");
          e && e !== r && 1 === e.nodeType && ((i = cc11001100_hook("i", w(e).offset(), "assign")).top += cc11001100_hook("(i = w(e).offset()).top", w.css(e, "borderTopWidth", !0), "assign"), i.left += cc11001100_hook("i.left", w.css(e, "borderLeftWidth", !0), "assign"));
        }
        return {
          top: cc11001100_hook("top", t.top - i.top - w.css(r, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", t.left - i.left - w.css(r, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", this.offsetParent, "var-init");
        while (e && "static" === w.css(e, "position")) e = cc11001100_hook("e", e.offsetParent, "assign");
        return e || be;
      });
    }
  }), w.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (e, t) {
    var n = cc11001100_hook("n", "pageYOffset" === t, "var-init");
    w.fn[e] = cc11001100_hook("w.fn[e]", function (r) {
      return z(this, function (e, r, i) {
        var o;
        if (y(e) ? o = cc11001100_hook("o", e, "assign") : 9 === e.nodeType && (o = cc11001100_hook("o", e.defaultView, "assign")), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = cc11001100_hook("e[r]", i, "assign");
      }, e, r, arguments.length);
    }, "assign");
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = cc11001100_hook("w.cssHooks[t]", _e(h.pixelPosition, function (e, n) {
      if (n) return n = cc11001100_hook("n", Fe(e, t), "assign"), We.test(n) ? w(e).position()[t] + "px" : n;
    }), "assign");
  }), w.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (e, t) {
    w.each({
      padding: cc11001100_hook("padding", "inner" + e, "object-key-init"),
      content: cc11001100_hook("content", t, "object-key-init"),
      "": cc11001100_hook("", "outer" + e, "object-key-init")
    }, function (n, r) {
      w.fn[r] = cc11001100_hook("w.fn[r]", function (i, o) {
        var a = cc11001100_hook("a", arguments.length && (n || "boolean" != typeof i), "var-init"),
          s = cc11001100_hook("s", n || (!0 === i || !0 === o ? "margin" : "border"), "var-init");
        return z(this, function (t, n, i) {
          var o;
          return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = cc11001100_hook("o", t.documentElement, "assign"), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      }, "assign");
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = cc11001100_hook("w.fn[t]", function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    }, "assign");
  }), w.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), w.fn.extend({
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
  }), w.proxy = cc11001100_hook("w.proxy", function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = cc11001100_hook("n", e[t], "assign"), t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", n, "assign")), g(e)) return r = cc11001100_hook("r", o.call(arguments, 2), "assign"), i = cc11001100_hook("i", function () {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, "assign"), i.guid = cc11001100_hook("i.guid", e.guid = cc11001100_hook("e.guid", e.guid || w.guid++, "assign"), "assign"), i;
  }, "assign"), w.holdReady = cc11001100_hook("w.holdReady", function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, "assign"), w.isArray = cc11001100_hook("w.isArray", Array.isArray, "assign"), w.parseJSON = cc11001100_hook("w.parseJSON", JSON.parse, "assign"), w.nodeName = cc11001100_hook("w.nodeName", N, "assign"), w.isFunction = cc11001100_hook("w.isFunction", g, "assign"), w.isWindow = cc11001100_hook("w.isWindow", y, "assign"), w.camelCase = cc11001100_hook("w.camelCase", G, "assign"), w.type = cc11001100_hook("w.type", x, "assign"), w.now = cc11001100_hook("w.now", Date.now, "assign"), w.isNumeric = cc11001100_hook("w.isNumeric", function (e) {
    var t = cc11001100_hook("t", w.type(e), "var-init");
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "assign"), "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });
  var Jt = cc11001100_hook("Jt", e.jQuery, "var-init"),
    Kt = cc11001100_hook("Kt", e.$, "var-init");
  return w.noConflict = cc11001100_hook("w.noConflict", function (t) {
    return e.$ === w && (e.$ = cc11001100_hook("e.$", Kt, "assign")), t && e.jQuery === w && (e.jQuery = cc11001100_hook("e.jQuery", Jt, "assign")), w;
  }, "assign"), t || (e.jQuery = cc11001100_hook("e.jQuery", e.$ = cc11001100_hook("e.$", w, "assign"), "assign")), w;
});