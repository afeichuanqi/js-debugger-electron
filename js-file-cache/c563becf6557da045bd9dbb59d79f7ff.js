/*! jQuery v1.10.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
(function (e, t) {
  var n,
    r,
    i = cc11001100_hook("i", typeof t, "var-init"),
    o = cc11001100_hook("o", e.location, "var-init"),
    a = cc11001100_hook("a", e.document, "var-init"),
    s = cc11001100_hook("s", a.documentElement, "var-init"),
    l = cc11001100_hook("l", e.jQuery, "var-init"),
    u = cc11001100_hook("u", e.$, "var-init"),
    c = cc11001100_hook("c", {}, "var-init"),
    p = cc11001100_hook("p", [], "var-init"),
    f = cc11001100_hook("f", "1.10.1", "var-init"),
    d = cc11001100_hook("d", p.concat, "var-init"),
    h = cc11001100_hook("h", p.push, "var-init"),
    g = cc11001100_hook("g", p.slice, "var-init"),
    m = cc11001100_hook("m", p.indexOf, "var-init"),
    y = cc11001100_hook("y", c.toString, "var-init"),
    v = cc11001100_hook("v", c.hasOwnProperty, "var-init"),
    b = cc11001100_hook("b", f.trim, "var-init"),
    x = function (e, t) {
      return new x.fn.init(e, t, r);
    },
    w = cc11001100_hook("w", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    T = cc11001100_hook("T", /\S+/g, "var-init"),
    C = cc11001100_hook("C", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init"),
    N = cc11001100_hook("N", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, "var-init"),
    k = cc11001100_hook("k", /^<(\w+)\s*\/?>(?:<\/\1>|)$/, "var-init"),
    E = cc11001100_hook("E", /^[\],:{}\s]*$/, "var-init"),
    S = cc11001100_hook("S", /(?:^|:|,)(?:\s*\[)+/g, "var-init"),
    A = cc11001100_hook("A", /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "var-init"),
    j = cc11001100_hook("j", /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "var-init"),
    D = cc11001100_hook("D", /^-ms-/, "var-init"),
    L = cc11001100_hook("L", /-([\da-z])/gi, "var-init"),
    H = function (e, t) {
      return t.toUpperCase();
    },
    q = function (e) {
      (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready());
    },
    _ = function () {
      a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q));
    };
  x.fn = cc11001100_hook("x.fn", x.prototype = cc11001100_hook("x.prototype", {
    jquery: cc11001100_hook("jquery", f, "object-key-init"),
    constructor: cc11001100_hook("constructor", x, "object-key-init"),
    init: function (e, n, r) {
      var i, o;
      if (!e) return this;
      if ("string" == typeof e) {
        if (i = cc11001100_hook("i", "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), "assign"), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
        if (i[1]) {
          if (n = cc11001100_hook("n", n instanceof x ? n[0] : n, "assign"), x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          return this;
        }
        if (o = cc11001100_hook("o", a.getElementById(i[2]), "assign"), o && o.parentNode) {
          if (o.id !== i[2]) return r.find(e);
          this.length = cc11001100_hook("this.length", 1, "assign"), this[0] = cc11001100_hook("this[0]", o, "assign");
        }
        return this.context = cc11001100_hook("this.context", a, "assign"), this.selector = cc11001100_hook("this.selector", e, "assign"), this;
      }
      return e.nodeType ? (this.context = cc11001100_hook("this.context", this[0] = cc11001100_hook("this[0]", e, "assign"), "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = cc11001100_hook("this.selector", e.selector, "assign"), this.context = cc11001100_hook("this.context", e.context, "assign")), x.makeArray(e, this));
    },
    selector: cc11001100_hook("selector", "", "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    toArray: function () {
      return g.call(this);
    },
    get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function (e) {
      var t = cc11001100_hook("t", x.merge(this.constructor(), e), "var-init");
      return t.prevObject = cc11001100_hook("t.prevObject", this, "assign"), t.context = cc11001100_hook("t.context", this.context, "assign"), t;
    },
    each: function (e, t) {
      return x.each(this, e, t);
    },
    ready: function (e) {
      return x.ready.promise().done(e), this;
    },
    slice: function () {
      return this.pushStack(g.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = cc11001100_hook("t", this.length, "var-init"),
        n = cc11001100_hook("n", +e + (0 > e ? t : 0), "var-init");
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function (e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: cc11001100_hook("push", h, "object-key-init"),
    sort: cc11001100_hook("sort", [].sort, "object-key-init"),
    splice: cc11001100_hook("splice", [].splice, "object-key-init")
  }, "assign"), "assign"), x.fn.init.prototype = cc11001100_hook("x.fn.init.prototype", x.fn, "assign"), x.extend = cc11001100_hook("x.extend", x.fn.extend = cc11001100_hook("x.fn.extend", function () {
    var e,
      n,
      r,
      i,
      o,
      a,
      s = cc11001100_hook("s", arguments[0] || {}, "var-init"),
      l = cc11001100_hook("l", 1, "var-init"),
      u = cc11001100_hook("u", arguments.length, "var-init"),
      c = cc11001100_hook("c", !1, "var-init");
    for ("boolean" == typeof s && (c = cc11001100_hook("c", s, "assign"), s = cc11001100_hook("s", arguments[1] || {}, "assign"), l = cc11001100_hook("l", 2, "assign")), "object" == typeof s || x.isFunction(s) || (s = cc11001100_hook("s", {}, "assign")), u === l && (s = cc11001100_hook("s", this, "assign"), --l); u > l; l++) if (null != (o = cc11001100_hook("o", arguments[l], "assign"))) for (i in o) e = cc11001100_hook("e", s[i], "assign"), r = cc11001100_hook("r", o[i], "assign"), s !== r && (c && r && (x.isPlainObject(r) || (n = cc11001100_hook("n", x.isArray(r), "assign"))) ? (n ? (n = cc11001100_hook("n", !1, "assign"), a = cc11001100_hook("a", e && x.isArray(e) ? e : [], "assign")) : a = cc11001100_hook("a", e && x.isPlainObject(e) ? e : {}, "assign"), s[i] = cc11001100_hook("s[i]", x.extend(c, a, r), "assign")) : r !== t && (s[i] = cc11001100_hook("s[i]", r, "assign")));
    return s;
  }, "assign"), "assign"), x.extend({
    expando: cc11001100_hook("expando", "jQuery" + (f + Math.random()).replace(/\D/g, ""), "object-key-init"),
    noConflict: function (t) {
      return e.$ === x && (e.$ = cc11001100_hook("e.$", u, "assign")), t && e.jQuery === x && (e.jQuery = cc11001100_hook("e.jQuery", l, "assign")), x;
    },
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    holdReady: function (e) {
      e ? x.readyWait++ : x.ready(!0);
    },
    ready: function (e) {
      if (e === !0 ? ! --x.readyWait : !x.isReady) {
        if (!a.body) return setTimeout(x.ready);
        x.isReady = cc11001100_hook("x.isReady", !0, "assign"), e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"));
      }
    },
    isFunction: function (e) {
      return "function" === x.type(e);
    },
    isArray: cc11001100_hook("isArray", Array.isArray || function (e) {
      return "array" === x.type(e);
    }, "object-key-init"),
    isWindow: function (e) {
      return null != e && e == e.window;
    },
    isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e;
    },
    isPlainObject: function (e) {
      var n;
      if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
      try {
        if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (r) {
        return !1;
      }
      if (x.support.ownLast) for (n in e) return v.call(e, n);
      for (n in e);
      return n === t || v.call(e, n);
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    error: function (e) {
      throw Error(e);
    },
    parseHTML: function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", !1, "assign")), t = cc11001100_hook("t", t || a, "assign");
      var r = cc11001100_hook("r", k.exec(e), "var-init"),
        i = cc11001100_hook("i", !n && [], "var-init");
      return r ? [t.createElement(r[1])] : (r = cc11001100_hook("r", x.buildFragment([e], t, i), "assign"), i && x(i).remove(), x.merge([], r.childNodes));
    },
    parseJSON: function (n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = cc11001100_hook("n", x.trim(n), "assign"), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t);
    },
    parseXML: function (n) {
      var r, i;
      if (!n || "string" != typeof n) return null;
      try {
        e.DOMParser ? (i = cc11001100_hook("i", new DOMParser(), "assign"), r = cc11001100_hook("r", i.parseFromString(n, "text/xml"), "assign")) : (r = cc11001100_hook("r", new ActiveXObject("Microsoft.XMLDOM"), "assign"), r.async = cc11001100_hook("r.async", "false", "assign"), r.loadXML(n));
      } catch (o) {
        r = cc11001100_hook("r", t, "assign");
      }
      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r;
    },
    noop: function () {},
    globalEval: function (t) {
      t && x.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function (e) {
      return e.replace(D, "ms-").replace(L, H);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t, n) {
      var r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", e.length, "var-init"),
        a = cc11001100_hook("a", M(e), "var-init");
      if (n) {
        if (a) {
          for (; o > i; i++) if (r = cc11001100_hook("r", t.apply(e[i], n), "assign"), r === !1) break;
        } else for (i in e) if (r = cc11001100_hook("r", t.apply(e[i], n), "assign"), r === !1) break;
      } else if (a) {
        for (; o > i; i++) if (r = cc11001100_hook("r", t.call(e[i], i, e[i]), "assign"), r === !1) break;
      } else for (i in e) if (r = cc11001100_hook("r", t.call(e[i], i, e[i]), "assign"), r === !1) break;
      return e;
    },
    trim: cc11001100_hook("trim", b && !b.call("\ufeff\u00a0") ? function (e) {
      return null == e ? "" : b.call(e);
    } : function (e) {
      return null == e ? "" : (e + "").replace(C, "");
    }, "object-key-init"),
    makeArray: function (e, t) {
      var n = cc11001100_hook("n", t || [], "var-init");
      return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      var r;
      if (t) {
        if (m) return m.call(t, e, n);
        for (r = cc11001100_hook("r", t.length, "assign"), n = cc11001100_hook("n", n ? 0 > n ? Math.max(0, r + n) : n : 0, "assign"); r > n; n++) if (n in t && t[n] === e) return n;
      }
      return -1;
    },
    merge: function (e, n) {
      var r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", e.length, "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      if ("number" == typeof r) for (; r > o; o++) e[i++] = cc11001100_hook("e[i++]", n[o], "assign");else while (n[o] !== t) e[i++] = cc11001100_hook("e[i++]", n[o++], "assign");
      return e.length = cc11001100_hook("e.length", i, "assign"), e;
    },
    grep: function (e, t, n) {
      var r,
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", 0, "var-init"),
        a = cc11001100_hook("a", e.length, "var-init");
      for (n = cc11001100_hook("n", !!n, "assign"); a > o; o++) r = cc11001100_hook("r", !!t(e[o], o), "assign"), n !== r && i.push(e[o]);
      return i;
    },
    map: function (e, t, n) {
      var r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", e.length, "var-init"),
        a = cc11001100_hook("a", M(e), "var-init"),
        s = cc11001100_hook("s", [], "var-init");
      if (a) for (; o > i; i++) r = cc11001100_hook("r", t(e[i], i, n), "assign"), null != r && (s[s.length] = cc11001100_hook("s[s.length]", r, "assign"));else for (i in e) r = cc11001100_hook("r", t(e[i], i, n), "assign"), null != r && (s[s.length] = cc11001100_hook("s[s.length]", r, "assign"));
      return d.apply([], s);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    proxy: function (e, n) {
      var r, i, o;
      return "string" == typeof n && (o = cc11001100_hook("o", e[n], "assign"), n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", o, "assign")), x.isFunction(e) ? (r = cc11001100_hook("r", g.call(arguments, 2), "assign"), i = cc11001100_hook("i", function () {
        return e.apply(n || this, r.concat(g.call(arguments)));
      }, "assign"), i.guid = cc11001100_hook("i.guid", e.guid = cc11001100_hook("e.guid", e.guid || x.guid++, "assign"), "assign"), i) : t;
    },
    access: function (e, n, r, i, o, a, s) {
      var l = cc11001100_hook("l", 0, "var-init"),
        u = cc11001100_hook("u", e.length, "var-init"),
        c = cc11001100_hook("c", null == r, "var-init");
      if ("object" === x.type(r)) {
        o = cc11001100_hook("o", !0, "assign");
        for (l in r) x.access(e, n, l, r[l], !0, a, s);
      } else if (i !== t && (o = cc11001100_hook("o", !0, "assign"), x.isFunction(i) || (s = cc11001100_hook("s", !0, "assign")), c && (s ? (n.call(e, i), n = cc11001100_hook("n", null, "assign")) : (c = cc11001100_hook("c", n, "assign"), n = cc11001100_hook("n", function (e, t, n) {
        return c.call(x(e), n);
      }, "assign"))), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
      return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
    },
    now: function () {
      return new Date().getTime();
    },
    swap: function (e, t, n, r) {
      var i,
        o,
        a = cc11001100_hook("a", {}, "var-init");
      for (o in t) a[o] = cc11001100_hook("a[o]", e.style[o], "assign"), e.style[o] = cc11001100_hook("e.style[o]", t[o], "assign");
      i = cc11001100_hook("i", n.apply(e, r || []), "assign");
      for (o in t) e.style[o] = cc11001100_hook("e.style[o]", a[o], "assign");
      return i;
    }
  }), x.ready.promise = cc11001100_hook("x.ready.promise", function (t) {
    if (!n) if (n = cc11001100_hook("n", x.Deferred(), "assign"), "complete" === a.readyState) setTimeout(x.ready);else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);else {
      a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
      var r = cc11001100_hook("r", !1, "var-init");
      try {
        r = cc11001100_hook("r", null == e.frameElement && a.documentElement, "assign");
      } catch (i) {}
      r && r.doScroll && function o() {
        if (!x.isReady) {
          try {
            r.doScroll("left");
          } catch (e) {
            return setTimeout(o, 50);
          }
          _(), x.ready();
        }
      }();
    }
    return n.promise(t);
  }, "assign"), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    c["[object " + t + "]"] = cc11001100_hook("c[\"[object \" + t + \"]\"]", t.toLowerCase(), "assign");
  });
  function M(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.length, "var-init"),
      n = cc11001100_hook("n", x.type(e), "var-init");
    return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  r = cc11001100_hook("r", x(a), "assign"), function (e, t) {
    var n,
      r,
      i,
      o,
      a,
      s,
      l,
      u,
      c,
      p,
      f,
      d,
      h,
      g,
      m,
      y,
      v,
      b = cc11001100_hook("b", "sizzle" + -new Date(), "var-init"),
      w = cc11001100_hook("w", e.document, "var-init"),
      T = cc11001100_hook("T", 0, "var-init"),
      C = cc11001100_hook("C", 0, "var-init"),
      N = cc11001100_hook("N", lt(), "var-init"),
      k = cc11001100_hook("k", lt(), "var-init"),
      E = cc11001100_hook("E", lt(), "var-init"),
      S = cc11001100_hook("S", !1, "var-init"),
      A = function () {
        return 0;
      },
      j = cc11001100_hook("j", typeof t, "var-init"),
      D = cc11001100_hook("D", 1 << 31, "var-init"),
      L = cc11001100_hook("L", {}.hasOwnProperty, "var-init"),
      H = cc11001100_hook("H", [], "var-init"),
      q = cc11001100_hook("q", H.pop, "var-init"),
      _ = cc11001100_hook("_", H.push, "var-init"),
      M = cc11001100_hook("M", H.push, "var-init"),
      O = cc11001100_hook("O", H.slice, "var-init"),
      F = cc11001100_hook("F", H.indexOf || function (e) {
        var t = cc11001100_hook("t", 0, "var-init"),
          n = cc11001100_hook("n", this.length, "var-init");
        for (; n > t; t++) if (this[t] === e) return t;
        return -1;
      }, "var-init"),
      B = cc11001100_hook("B", "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", "var-init"),
      P = cc11001100_hook("P", "[\\x20\\t\\r\\n\\f]", "var-init"),
      R = cc11001100_hook("R", "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", "var-init"),
      W = cc11001100_hook("W", R.replace("w", "w#"), "var-init"),
      $ = cc11001100_hook("$", "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", "var-init"),
      I = cc11001100_hook("I", ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", "var-init"),
      z = cc11001100_hook("z", RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), "var-init"),
      X = cc11001100_hook("X", RegExp("^" + P + "*," + P + "*"), "var-init"),
      U = cc11001100_hook("U", RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), "var-init"),
      V = cc11001100_hook("V", RegExp(P + "*[+~]"), "var-init"),
      Y = cc11001100_hook("Y", RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), "var-init"),
      J = cc11001100_hook("J", RegExp(I), "var-init"),
      G = cc11001100_hook("G", RegExp("^" + W + "$"), "var-init"),
      Q = cc11001100_hook("Q", {
        ID: cc11001100_hook("ID", RegExp("^#(" + R + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", RegExp("^\\.(" + R + ")"), "object-key-init"),
        TAG: cc11001100_hook("TAG", RegExp("^(" + R.replace("w", "w*") + ")"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", RegExp("^" + $), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", RegExp("^" + I), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), "object-key-init"),
        bool: cc11001100_hook("bool", RegExp("^(?:" + B + ")$", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      K = cc11001100_hook("K", /^[^{]+\{\s*\[native \w/, "var-init"),
      Z = cc11001100_hook("Z", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      et = cc11001100_hook("et", /^(?:input|select|textarea|button)$/i, "var-init"),
      tt = cc11001100_hook("tt", /^h\d$/i, "var-init"),
      nt = cc11001100_hook("nt", /'|\\/g, "var-init"),
      rt = cc11001100_hook("rt", RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), "var-init"),
      it = function (e, t, n) {
        var r = cc11001100_hook("r", "0x" + t - 65536, "var-init");
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
      };
    try {
      M.apply(H = cc11001100_hook("H", O.call(w.childNodes), "assign"), w.childNodes), H[w.childNodes.length].nodeType;
    } catch (ot) {
      M = cc11001100_hook("M", {
        apply: cc11001100_hook("apply", H.length ? function (e, t) {
          _.apply(e, O.call(t));
        } : function (e, t) {
          var n = cc11001100_hook("n", e.length, "var-init"),
            r = cc11001100_hook("r", 0, "var-init");
          while (e[n++] = cc11001100_hook("e[n++]", t[r++], "assign"));
          e.length = cc11001100_hook("e.length", n - 1, "assign");
        }, "object-key-init")
      }, "assign");
    }
    function at(e, t, n, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      var o, a, s, l, u, c, d, m, y, x;
      if ((t ? t.ownerDocument || t : w) !== f && p(t), t = cc11001100_hook("t", t || f, "assign"), n = cc11001100_hook("n", n || [], "assign"), !e || "string" != typeof e) return n;
      if (1 !== (l = cc11001100_hook("l", t.nodeType, "assign")) && 9 !== l) return [];
      if (h && !i) {
        if (o = cc11001100_hook("o", Z.exec(e), "assign")) if (s = cc11001100_hook("s", o[1], "assign")) {
          if (9 === l) {
            if (a = cc11001100_hook("a", t.getElementById(s), "assign"), !a || !a.parentNode) return n;
            if (a.id === s) return n.push(a), n;
          } else if (t.ownerDocument && (a = cc11001100_hook("a", t.ownerDocument.getElementById(s), "assign")) && v(t, a) && a.id === s) return n.push(a), n;
        } else {
          if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
          if ((s = cc11001100_hook("s", o[3], "assign")) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n;
        }
        if (r.qsa && (!g || !g.test(e))) {
          if (m = cc11001100_hook("m", d = cc11001100_hook("d", b, "assign"), "assign"), y = cc11001100_hook("y", t, "assign"), x = cc11001100_hook("x", 9 === l && e, "assign"), 1 === l && "object" !== t.nodeName.toLowerCase()) {
            c = cc11001100_hook("c", bt(e), "assign"), (d = cc11001100_hook("d", t.getAttribute("id"), "assign")) ? m = cc11001100_hook("m", d.replace(nt, "\\$&"), "assign") : t.setAttribute("id", m), m = cc11001100_hook("m", "[id='" + m + "'] ", "assign"), u = cc11001100_hook("u", c.length, "assign");
            while (u--) c[u] = cc11001100_hook("c[u]", m + xt(c[u]), "assign");
            y = cc11001100_hook("y", V.test(e) && t.parentNode || t, "assign"), x = cc11001100_hook("x", c.join(","), "assign");
          }
          if (x) try {
            return M.apply(n, y.querySelectorAll(x)), n;
          } catch (T) {} finally {
            d || t.removeAttribute("id");
          }
        }
      }
      return At(e.replace(z, "$1"), t, n, i);
    }
    function st(e) {
      cc11001100_hook("e", e, "function-parameter");
      return K.test(e + "");
    }
    function lt() {
      var e = cc11001100_hook("e", [], "var-init");
      function t(n, r) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        return e.push(n += cc11001100_hook("n", " ", "assign")) > o.cacheLength && delete t[e.shift()], t[n] = cc11001100_hook("t[n]", r, "assign");
      }
      return t;
    }
    function ut(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e[b] = cc11001100_hook("e[b]", !0, "assign"), e;
    }
    function ct(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", f.createElement("div"), "var-init");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = cc11001100_hook("t", null, "assign");
      }
    }
    function pt(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      e = cc11001100_hook("e", e.split("|"), "assign");
      var r,
        i = cc11001100_hook("i", e.length, "var-init"),
        a = cc11001100_hook("a", n ? null : t, "var-init");
      while (i--) (r = cc11001100_hook("r", o.attrHandle[e[i]], "assign")) && r !== t || (o.attrHandle[e[i]] = cc11001100_hook("o.attrHandle[e[i]]", a, "assign"));
    }
    function ft(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", e.getAttributeNode(t), "var-init");
      return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null;
    }
    function dt(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }
    function ht(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t;
    }
    function gt(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", t && e, "var-init"),
        r = cc11001100_hook("r", n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D), "var-init");
      if (r) return r;
      if (n) while (n = cc11001100_hook("n", n.nextSibling, "assign")) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function mt(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
        return "input" === n && t.type === e;
      };
    }
    function yt(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function vt(e) {
      cc11001100_hook("e", e, "function-parameter");
      return ut(function (t) {
        return t = cc11001100_hook("t", +t, "assign"), ut(function (n, r) {
          var i,
            o = cc11001100_hook("o", e([], n.length, t), "var-init"),
            a = cc11001100_hook("a", o.length, "var-init");
          while (a--) n[i = cc11001100_hook("i", o[a], "assign")] && (n[i] = cc11001100_hook("n[i]", !(r[i] = cc11001100_hook("r[i]", n[i], "assign")), "assign"));
        });
      });
    }
    s = cc11001100_hook("s", at.isXML = cc11001100_hook("at.isXML", function (e) {
      var t = cc11001100_hook("t", e && (e.ownerDocument || e).documentElement, "var-init");
      return t ? "HTML" !== t.nodeName : !1;
    }, "assign"), "assign"), r = cc11001100_hook("r", at.support = cc11001100_hook("at.support", {}, "assign"), "assign"), p = cc11001100_hook("p", at.setDocument = cc11001100_hook("at.setDocument", function (e) {
      var n = cc11001100_hook("n", e ? e.ownerDocument || e : w, "var-init"),
        i = cc11001100_hook("i", n.parentWindow, "var-init");
      return n !== f && 9 === n.nodeType && n.documentElement ? (f = cc11001100_hook("f", n, "assign"), d = cc11001100_hook("d", n.documentElement, "assign"), h = cc11001100_hook("h", !s(n), "assign"), i && i.frameElement && i.attachEvent("onbeforeunload", function () {
        p();
      }), r.attributes = cc11001100_hook("r.attributes", ct(function (e) {
        return e.innerHTML = cc11001100_hook("e.innerHTML", "<a href='#'></a>", "assign"), pt("type|href|height|width", dt, "#" === e.firstChild.getAttribute("href")), pt(B, ft, null == e.getAttribute("disabled")), e.className = cc11001100_hook("e.className", "i", "assign"), !e.getAttribute("className");
      }), "assign"), r.input = cc11001100_hook("r.input", ct(function (e) {
        return e.innerHTML = cc11001100_hook("e.innerHTML", "<input>", "assign"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }), "assign"), pt("value", ht, r.attributes && r.input), r.getElementsByTagName = cc11001100_hook("r.getElementsByTagName", ct(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), "assign"), r.getElementsByClassName = cc11001100_hook("r.getElementsByClassName", ct(function (e) {
        return e.innerHTML = cc11001100_hook("e.innerHTML", "<div class='a'></div><div class='a i'></div>", "assign"), e.firstChild.className = cc11001100_hook("e.firstChild.className", "i", "assign"), 2 === e.getElementsByClassName("i").length;
      }), "assign"), r.getById = cc11001100_hook("r.getById", ct(function (e) {
        return d.appendChild(e).id = cc11001100_hook("d.appendChild(e).id", b, "assign"), !n.getElementsByName || !n.getElementsByName(b).length;
      }), "assign"), r.getById ? (o.find.ID = cc11001100_hook("o.find.ID", function (e, t) {
        if (typeof t.getElementById !== j && h) {
          var n = cc11001100_hook("n", t.getElementById(e), "var-init");
          return n && n.parentNode ? [n] : [];
        }
      }, "assign"), o.filter.ID = cc11001100_hook("o.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(rt, it), "var-init");
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, "assign")) : (delete o.find.ID, o.filter.ID = cc11001100_hook("o.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(rt, it), "var-init");
        return function (e) {
          var n = cc11001100_hook("n", typeof e.getAttributeNode !== j && e.getAttributeNode("id"), "var-init");
          return n && n.value === t;
        };
      }, "assign")), o.find.TAG = cc11001100_hook("o.find.TAG", r.getElementsByTagName ? function (e, n) {
        return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t;
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
      }, "assign"), o.find.CLASS = cc11001100_hook("o.find.CLASS", r.getElementsByClassName && function (e, n) {
        return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t;
      }, "assign"), m = cc11001100_hook("m", [], "assign"), g = cc11001100_hook("g", [], "assign"), (r.qsa = cc11001100_hook("r.qsa", st(n.querySelectorAll), "assign")) && (ct(function (e) {
        e.innerHTML = cc11001100_hook("e.innerHTML", "<select><option selected=''></option></select>", "assign"), e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked");
      }), ct(function (e) {
        var t = cc11001100_hook("t", n.createElement("input"), "var-init");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (r.matchesSelector = cc11001100_hook("r.matchesSelector", st(y = cc11001100_hook("y", d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector, "assign")), "assign")) && ct(function (e) {
        r.disconnectedMatch = cc11001100_hook("r.disconnectedMatch", y.call(e, "div"), "assign"), y.call(e, "[s!='']:x"), m.push("!=", I);
      }), g = cc11001100_hook("g", g.length && RegExp(g.join("|")), "assign"), m = cc11001100_hook("m", m.length && RegExp(m.join("|")), "assign"), v = cc11001100_hook("v", st(d.contains) || d.compareDocumentPosition ? function (e, t) {
        var n = cc11001100_hook("n", 9 === e.nodeType ? e.documentElement : e, "var-init"),
          r = cc11001100_hook("r", t && t.parentNode, "var-init");
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = cc11001100_hook("t", t.parentNode, "assign")) if (t === e) return !0;
        return !1;
      }, "assign"), r.sortDetached = cc11001100_hook("r.sortDetached", ct(function (e) {
        return 1 & e.compareDocumentPosition(n.createElement("div"));
      }), "assign"), A = cc11001100_hook("A", d.compareDocumentPosition ? function (e, t) {
        if (e === t) return S = cc11001100_hook("S", !0, "assign"), 0;
        var i = cc11001100_hook("i", t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t), "var-init");
        return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
          i = cc11001100_hook("i", 0, "var-init"),
          o = cc11001100_hook("o", e.parentNode, "var-init"),
          a = cc11001100_hook("a", t.parentNode, "var-init"),
          s = cc11001100_hook("s", [e], "var-init"),
          l = cc11001100_hook("l", [t], "var-init");
        if (e === t) return S = cc11001100_hook("S", !0, "assign"), 0;
        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
        if (o === a) return gt(e, t);
        r = cc11001100_hook("r", e, "assign");
        while (r = cc11001100_hook("r", r.parentNode, "assign")) s.unshift(r);
        r = cc11001100_hook("r", t, "assign");
        while (r = cc11001100_hook("r", r.parentNode, "assign")) l.unshift(r);
        while (s[i] === l[i]) i++;
        return i ? gt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
      }, "assign"), n) : f;
    }, "assign"), "assign"), at.matches = cc11001100_hook("at.matches", function (e, t) {
      return at(e, null, null, t);
    }, "assign"), at.matchesSelector = cc11001100_hook("at.matchesSelector", function (e, t) {
      if ((e.ownerDocument || e) !== f && p(e), t = cc11001100_hook("t", t.replace(Y, "='$1']"), "assign"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
        var n = cc11001100_hook("n", y.call(e, t), "var-init");
        if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (i) {}
      return at(t, f, null, [e]).length > 0;
    }, "assign"), at.contains = cc11001100_hook("at.contains", function (e, t) {
      return (e.ownerDocument || e) !== f && p(e), v(e, t);
    }, "assign"), at.attr = cc11001100_hook("at.attr", function (e, n) {
      (e.ownerDocument || e) !== f && p(e);
      var i = cc11001100_hook("i", o.attrHandle[n.toLowerCase()], "var-init"),
        a = cc11001100_hook("a", i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t, "var-init");
      return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = cc11001100_hook("a", e.getAttributeNode(n), "assign")) && a.specified ? a.value : null : a;
    }, "assign"), at.error = cc11001100_hook("at.error", function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, "assign"), at.uniqueSort = cc11001100_hook("at.uniqueSort", function (e) {
      var t,
        n = cc11001100_hook("n", [], "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      if (S = cc11001100_hook("S", !r.detectDuplicates, "assign"), c = cc11001100_hook("c", !r.sortStable && e.slice(0), "assign"), e.sort(A), S) {
        while (t = cc11001100_hook("t", e[o++], "assign")) t === e[o] && (i = cc11001100_hook("i", n.push(o), "assign"));
        while (i--) e.splice(n[i], 1);
      }
      return e;
    }, "assign"), a = cc11001100_hook("a", at.getText = cc11001100_hook("at.getText", function (e) {
      var t,
        n = cc11001100_hook("n", "", "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", e.nodeType, "var-init");
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) n += cc11001100_hook("n", a(e), "assign");
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = cc11001100_hook("t", e[r], "assign"); r++) n += cc11001100_hook("n", a(t), "assign");
      return n;
    }, "assign"), "assign"), o = cc11001100_hook("o", at.selectors = cc11001100_hook("at.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", ut, "object-key-init"),
      match: cc11001100_hook("match", Q, "object-key-init"),
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
          return e[1] = cc11001100_hook("e[1]", e[1].replace(rt, it), "assign"), e[3] = cc11001100_hook("e[3]", (e[4] || e[5] || "").replace(rt, it), "assign"), "~=" === e[2] && (e[3] = cc11001100_hook("e[3]", " " + e[3] + " ", "assign")), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = cc11001100_hook("e[1]", e[1].toLowerCase(), "assign"), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = cc11001100_hook("e[4]", +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), "assign"), e[5] = cc11001100_hook("e[5]", +(e[7] + e[8] || "odd" === e[3]), "assign")) : e[3] && at.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var n,
            r = cc11001100_hook("r", !e[5] && e[2], "var-init");
          return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = cc11001100_hook("e[2]", e[4], "assign") : r && J.test(r) && (n = cc11001100_hook("n", bt(r, !0), "assign")) && (n = cc11001100_hook("n", r.indexOf(")", r.length - n) - r.length, "assign")) && (e[0] = cc11001100_hook("e[0]", e[0].slice(0, n), "assign"), e[2] = cc11001100_hook("e[2]", r.slice(0, n), "assign")), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = cc11001100_hook("t", e.replace(rt, it).toLowerCase(), "var-init");
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = cc11001100_hook("t", N[e + " "], "var-init");
          return t || (t = cc11001100_hook("t", RegExp("(^|" + P + ")" + e + "(" + P + "|$)"), "assign")) && N(e, function (e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "");
          });
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = cc11001100_hook("i", at.attr(r, e), "var-init");
            return null == i ? "!=" === t : t ? (i += cc11001100_hook("i", "", "assign"), "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = cc11001100_hook("o", "nth" !== e.slice(0, 3), "var-init"),
            a = cc11001100_hook("a", "last" !== e.slice(-4), "var-init"),
            s = cc11001100_hook("s", "of-type" === t, "var-init");
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
              c,
              p,
              f,
              d,
              h,
              g = cc11001100_hook("g", o !== a ? "nextSibling" : "previousSibling", "var-init"),
              m = cc11001100_hook("m", t.parentNode, "var-init"),
              y = cc11001100_hook("y", s && t.nodeName.toLowerCase(), "var-init"),
              v = cc11001100_hook("v", !l && !s, "var-init");
            if (m) {
              if (o) {
                while (g) {
                  p = cc11001100_hook("p", t, "assign");
                  while (p = cc11001100_hook("p", p[g], "assign")) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                  h = cc11001100_hook("h", g = cc11001100_hook("g", "only" === e && !h && "nextSibling", "assign"), "assign");
                }
                return !0;
              }
              if (h = cc11001100_hook("h", [a ? m.firstChild : m.lastChild], "assign"), a && v) {
                c = cc11001100_hook("c", m[b] || (m[b] = cc11001100_hook("m[b]", {}, "assign")), "assign"), u = cc11001100_hook("u", c[e] || [], "assign"), d = cc11001100_hook("d", u[0] === T && u[1], "assign"), f = cc11001100_hook("f", u[0] === T && u[2], "assign"), p = cc11001100_hook("p", d && m.childNodes[d], "assign");
                while (p = cc11001100_hook("p", ++d && p && p[g] || (f = cc11001100_hook("f", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign")) if (1 === p.nodeType && ++f && p === t) {
                  c[e] = cc11001100_hook("c[e]", [T, d, f], "assign");
                  break;
                }
              } else if (v && (u = cc11001100_hook("u", (t[b] || (t[b] = cc11001100_hook("t[b]", {}, "assign")))[e], "assign")) && u[0] === T) f = cc11001100_hook("f", u[1], "assign");else while (p = cc11001100_hook("p", ++d && p && p[g] || (f = cc11001100_hook("f", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign")) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = cc11001100_hook("p[b]", {}, "assign")))[e] = cc11001100_hook("(p[b] || (p[b] = {}))[e]", [T, f], "assign")), p === t)) break;
              return f -= cc11001100_hook("f", i, "assign"), f === r || 0 === f % r && f / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n,
            r = cc11001100_hook("r", o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e), "var-init");
          return r[b] ? r(t) : r.length > 1 ? (n = cc11001100_hook("n", [e, e, "", t], "assign"), o.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function (e, n) {
            var i,
              o = cc11001100_hook("o", r(e, t), "var-init"),
              a = cc11001100_hook("a", o.length, "var-init");
            while (a--) i = cc11001100_hook("i", F.call(e, o[a]), "assign"), e[i] = cc11001100_hook("e[i]", !(n[i] = cc11001100_hook("n[i]", o[a], "assign")), "assign");
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", ut(function (e) {
          var t = cc11001100_hook("t", [], "var-init"),
            n = cc11001100_hook("n", [], "var-init"),
            r = cc11001100_hook("r", l(e.replace(z, "$1")), "var-init");
          return r[b] ? ut(function (e, t, n, i) {
            var o,
              a = cc11001100_hook("a", r(e, null, i, []), "var-init"),
              s = cc11001100_hook("s", e.length, "var-init");
            while (s--) (o = cc11001100_hook("o", a[s], "assign")) && (e[s] = cc11001100_hook("e[s]", !(t[s] = cc11001100_hook("t[s]", o, "assign")), "assign"));
          }) : function (e, i, o) {
            return t[0] = cc11001100_hook("t[0]", e, "assign"), r(t, null, o, n), !n.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", ut(function (e) {
          return function (t) {
            return at(e, t).length > 0;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", ut(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", ut(function (e) {
          return G.test(e || "") || at.error("unsupported lang: " + e), e = cc11001100_hook("e", e.replace(rt, it).toLowerCase(), "assign"), function (t) {
            var n;
            do if (n = cc11001100_hook("n", h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"), "assign")) return n = cc11001100_hook("n", n.toLowerCase(), "assign"), n === e || 0 === n.indexOf(e + "-"); while ((t = cc11001100_hook("t", t.parentNode, "assign")) && 1 === t.nodeType);
            return !1;
          };
        }), "object-key-init"),
        target: function (t) {
          var n = cc11001100_hook("n", e.location && e.location.hash, "var-init");
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === d;
        },
        focus: function (e) {
          return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return e.disabled === !1;
        },
        disabled: function (e) {
          return e.disabled === !0;
        },
        checked: function (e) {
          var t = cc11001100_hook("t", e.nodeName.toLowerCase(), "var-init");
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function (e) {
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          return !0;
        },
        parent: function (e) {
          return !o.pseudos.empty(e);
        },
        header: function (e) {
          return tt.test(e.nodeName);
        },
        input: function (e) {
          return et.test(e.nodeName);
        },
        button: function (e) {
          var t = cc11001100_hook("t", e.nodeName.toLowerCase(), "var-init");
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = cc11001100_hook("t", e.getAttribute("type"), "assign")) || t.toLowerCase() === e.type);
        },
        first: cc11001100_hook("first", vt(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", vt(function (e, t) {
          return [t - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", vt(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), "object-key-init"),
        even: cc11001100_hook("even", vt(function (e, t) {
          var n = cc11001100_hook("n", 0, "var-init");
          for (; t > n; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", vt(function (e, t) {
          var n = cc11001100_hook("n", 1, "var-init");
          for (; t > n; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", vt(function (e, t, n) {
          var r = cc11001100_hook("r", 0 > n ? n + t : n, "var-init");
          for (; --r >= 0;) e.push(r);
          return e;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", vt(function (e, t, n) {
          var r = cc11001100_hook("r", 0 > n ? n + t : n, "var-init");
          for (; t > ++r;) e.push(r);
          return e;
        }), "object-key-init")
      }
    }, "assign"), "assign");
    for (n in {
      radio: cc11001100_hook("radio", !0, "object-key-init"),
      checkbox: cc11001100_hook("checkbox", !0, "object-key-init"),
      file: cc11001100_hook("file", !0, "object-key-init"),
      password: cc11001100_hook("password", !0, "object-key-init"),
      image: cc11001100_hook("image", !0, "object-key-init")
    }) o.pseudos[n] = cc11001100_hook("o.pseudos[n]", mt(n), "assign");
    for (n in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !0, "object-key-init")
    }) o.pseudos[n] = cc11001100_hook("o.pseudos[n]", yt(n), "assign");
    function bt(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n,
        r,
        i,
        a,
        s,
        l,
        u,
        c = cc11001100_hook("c", k[e + " "], "var-init");
      if (c) return t ? 0 : c.slice(0);
      s = cc11001100_hook("s", e, "assign"), l = cc11001100_hook("l", [], "assign"), u = cc11001100_hook("u", o.preFilter, "assign");
      while (s) {
        (!n || (r = cc11001100_hook("r", X.exec(s), "assign"))) && (r && (s = cc11001100_hook("s", s.slice(r[0].length) || s, "assign")), l.push(i = cc11001100_hook("i", [], "assign"))), n = cc11001100_hook("n", !1, "assign"), (r = cc11001100_hook("r", U.exec(s), "assign")) && (n = cc11001100_hook("n", r.shift(), "assign"), i.push({
          value: cc11001100_hook("value", n, "object-key-init"),
          type: cc11001100_hook("type", r[0].replace(z, " "), "object-key-init")
        }), s = cc11001100_hook("s", s.slice(n.length), "assign"));
        for (a in o.filter) !(r = cc11001100_hook("r", Q[a].exec(s), "assign")) || u[a] && !(r = cc11001100_hook("r", u[a](r), "assign")) || (n = cc11001100_hook("n", r.shift(), "assign"), i.push({
          value: cc11001100_hook("value", n, "object-key-init"),
          type: cc11001100_hook("type", a, "object-key-init"),
          matches: cc11001100_hook("matches", r, "object-key-init")
        }), s = cc11001100_hook("s", s.slice(n.length), "assign"));
        if (!n) break;
      }
      return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
    }
    function xt(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", 0, "var-init"),
        n = cc11001100_hook("n", e.length, "var-init"),
        r = cc11001100_hook("r", "", "var-init");
      for (; n > t; t++) r += cc11001100_hook("r", e[t].value, "assign");
      return r;
    }
    function wt(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", t.dir, "var-init"),
        o = cc11001100_hook("o", n && "parentNode" === r, "var-init"),
        a = cc11001100_hook("a", C++, "var-init");
      return t.first ? function (t, n, i) {
        while (t = cc11001100_hook("t", t[r], "assign")) if (1 === t.nodeType || o) return e(t, n, i);
      } : function (t, n, s) {
        var l,
          u,
          c,
          p = cc11001100_hook("p", T + " " + a, "var-init");
        if (s) {
          while (t = cc11001100_hook("t", t[r], "assign")) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
        } else while (t = cc11001100_hook("t", t[r], "assign")) if (1 === t.nodeType || o) if (c = cc11001100_hook("c", t[b] || (t[b] = cc11001100_hook("t[b]", {}, "assign")), "assign"), (u = cc11001100_hook("u", c[r], "assign")) && u[0] === p) {
          if ((l = cc11001100_hook("l", u[1], "assign")) === !0 || l === i) return l === !0;
        } else if (u = cc11001100_hook("u", c[r] = cc11001100_hook("c[r]", [p], "assign"), "assign"), u[1] = cc11001100_hook("u[1]", e(t, n, s) || i, "assign"), u[1] === !0) return !0;
      };
    }
    function Tt(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.length > 1 ? function (t, n, r) {
        var i = cc11001100_hook("i", e.length, "var-init");
        while (i--) if (!e[i](t, n, r)) return !1;
        return !0;
      } : e[0];
    }
    function Ct(e, t, n, r, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      var o,
        a = cc11001100_hook("a", [], "var-init"),
        s = cc11001100_hook("s", 0, "var-init"),
        l = cc11001100_hook("l", e.length, "var-init"),
        u = cc11001100_hook("u", null != t, "var-init");
      for (; l > s; s++) (o = cc11001100_hook("o", e[s], "assign")) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
      return a;
    }
    function Nt(e, t, n, r, i, o) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      return r && !r[b] && (r = cc11001100_hook("r", Nt(r), "assign")), i && !i[b] && (i = cc11001100_hook("i", Nt(i, o), "assign")), ut(function (o, a, s, l) {
        var u,
          c,
          p,
          f = cc11001100_hook("f", [], "var-init"),
          d = cc11001100_hook("d", [], "var-init"),
          h = cc11001100_hook("h", a.length, "var-init"),
          g = cc11001100_hook("g", o || St(t || "*", s.nodeType ? [s] : s, []), "var-init"),
          m = cc11001100_hook("m", !e || !o && t ? g : Ct(g, f, e, s, l), "var-init"),
          y = cc11001100_hook("y", n ? i || (o ? e : h || r) ? [] : a : m, "var-init");
        if (n && n(m, y, s, l), r) {
          u = cc11001100_hook("u", Ct(y, d), "assign"), r(u, [], s, l), c = cc11001100_hook("c", u.length, "assign");
          while (c--) (p = cc11001100_hook("p", u[c], "assign")) && (y[d[c]] = cc11001100_hook("y[d[c]]", !(m[d[c]] = cc11001100_hook("m[d[c]]", p, "assign")), "assign"));
        }
        if (o) {
          if (i || e) {
            if (i) {
              u = cc11001100_hook("u", [], "assign"), c = cc11001100_hook("c", y.length, "assign");
              while (c--) (p = cc11001100_hook("p", y[c], "assign")) && u.push(m[c] = cc11001100_hook("m[c]", p, "assign"));
              i(null, y = cc11001100_hook("y", [], "assign"), u, l);
            }
            c = cc11001100_hook("c", y.length, "assign");
            while (c--) (p = cc11001100_hook("p", y[c], "assign")) && (u = cc11001100_hook("u", i ? F.call(o, p) : f[c], "assign")) > -1 && (o[u] = cc11001100_hook("o[u]", !(a[u] = cc11001100_hook("a[u]", p, "assign")), "assign"));
          }
        } else y = cc11001100_hook("y", Ct(y === a ? y.splice(h, y.length) : y), "assign"), i ? i(null, a, y, l) : M.apply(a, y);
      });
    }
    function kt(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t,
        n,
        r,
        i = cc11001100_hook("i", e.length, "var-init"),
        a = cc11001100_hook("a", o.relative[e[0].type], "var-init"),
        s = cc11001100_hook("s", a || o.relative[" "], "var-init"),
        l = cc11001100_hook("l", a ? 1 : 0, "var-init"),
        c = cc11001100_hook("c", wt(function (e) {
          return e === t;
        }, s, !0), "var-init"),
        p = cc11001100_hook("p", wt(function (e) {
          return F.call(t, e) > -1;
        }, s, !0), "var-init"),
        f = cc11001100_hook("f", [function (e, n, r) {
          return !a && (r || n !== u) || ((t = cc11001100_hook("t", n, "assign")).nodeType ? c(e, n, r) : p(e, n, r));
        }], "var-init");
      for (; i > l; l++) if (n = cc11001100_hook("n", o.relative[e[l].type], "assign")) f = cc11001100_hook("f", [wt(Tt(f), n)], "assign");else {
        if (n = cc11001100_hook("n", o.filter[e[l].type].apply(null, e[l].matches), "assign"), n[b]) {
          for (r = cc11001100_hook("r", ++l, "assign"); i > r; r++) if (o.relative[e[r].type]) break;
          return Nt(l > 1 && Tt(f), l > 1 && xt(e.slice(0, l - 1).concat({
            value: cc11001100_hook("value", " " === e[l - 2].type ? "*" : "", "object-key-init")
          })).replace(z, "$1"), n, r > l && kt(e.slice(l, r)), i > r && kt(e = cc11001100_hook("e", e.slice(r), "assign")), i > r && xt(e));
        }
        f.push(n);
      }
      return Tt(f);
    }
    function Et(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", 0, "var-init"),
        r = cc11001100_hook("r", t.length > 0, "var-init"),
        a = cc11001100_hook("a", e.length > 0, "var-init"),
        s = function (s, l, c, p, d) {
          var h,
            g,
            m,
            y = cc11001100_hook("y", [], "var-init"),
            v = cc11001100_hook("v", 0, "var-init"),
            b = cc11001100_hook("b", "0", "var-init"),
            x = cc11001100_hook("x", s && [], "var-init"),
            w = cc11001100_hook("w", null != d, "var-init"),
            C = cc11001100_hook("C", u, "var-init"),
            N = cc11001100_hook("N", s || a && o.find.TAG("*", d && l.parentNode || l), "var-init"),
            k = cc11001100_hook("k", T += cc11001100_hook("T", null == C ? 1 : Math.random() || .1, "assign"), "var-init");
          for (w && (u = cc11001100_hook("u", l !== f && l, "assign"), i = cc11001100_hook("i", n, "assign")); null != (h = cc11001100_hook("h", N[b], "assign")); b++) {
            if (a && h) {
              g = cc11001100_hook("g", 0, "assign");
              while (m = cc11001100_hook("m", e[g++], "assign")) if (m(h, l, c)) {
                p.push(h);
                break;
              }
              w && (T = cc11001100_hook("T", k, "assign"), i = cc11001100_hook("i", ++n, "assign"));
            }
            r && ((h = cc11001100_hook("h", !m && h, "assign")) && v--, s && x.push(h));
          }
          if (v += cc11001100_hook("v", b, "assign"), r && b !== v) {
            g = cc11001100_hook("g", 0, "assign");
            while (m = cc11001100_hook("m", t[g++], "assign")) m(x, y, l, c);
            if (s) {
              if (v > 0) while (b--) x[b] || y[b] || (y[b] = cc11001100_hook("y[b]", q.call(p), "assign"));
              y = cc11001100_hook("y", Ct(y), "assign");
            }
            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
          }
          return w && (T = cc11001100_hook("T", k, "assign"), u = cc11001100_hook("u", C, "assign")), x;
        };
      return r ? ut(s) : s;
    }
    l = cc11001100_hook("l", at.compile = cc11001100_hook("at.compile", function (e, t) {
      var n,
        r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", E[e + " "], "var-init");
      if (!o) {
        t || (t = cc11001100_hook("t", bt(e), "assign")), n = cc11001100_hook("n", t.length, "assign");
        while (n--) o = cc11001100_hook("o", kt(t[n]), "assign"), o[b] ? r.push(o) : i.push(o);
        o = cc11001100_hook("o", E(e, Et(i, r)), "assign");
      }
      return o;
    }, "assign"), "assign");
    function St(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", t.length, "var-init");
      for (; i > r; r++) at(e, t[r], n);
      return n;
    }
    function At(e, t, n, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      var a,
        s,
        u,
        c,
        p,
        f = cc11001100_hook("f", bt(e), "var-init");
      if (!i && 1 === f.length) {
        if (s = cc11001100_hook("s", f[0] = cc11001100_hook("f[0]", f[0].slice(0), "assign"), "assign"), s.length > 2 && "ID" === (u = cc11001100_hook("u", s[0], "assign")).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
          if (t = cc11001100_hook("t", (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], "assign"), !t) return n;
          e = cc11001100_hook("e", e.slice(s.shift().value.length), "assign");
        }
        a = cc11001100_hook("a", Q.needsContext.test(e) ? 0 : s.length, "assign");
        while (a--) {
          if (u = cc11001100_hook("u", s[a], "assign"), o.relative[c = cc11001100_hook("c", u.type, "assign")]) break;
          if ((p = cc11001100_hook("p", o.find[c], "assign")) && (i = cc11001100_hook("i", p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t), "assign"))) {
            if (s.splice(a, 1), e = cc11001100_hook("e", i.length && xt(s), "assign"), !e) return M.apply(n, i), n;
            break;
          }
        }
      }
      return l(e, f)(i, t, !h, n, V.test(e)), n;
    }
    o.pseudos.nth = cc11001100_hook("o.pseudos.nth", o.pseudos.eq, "assign");
    function jt() {}
    jt.prototype = cc11001100_hook("jt.prototype", o.filters = cc11001100_hook("o.filters", o.pseudos, "assign"), "assign"), o.setFilters = cc11001100_hook("o.setFilters", new jt(), "assign"), r.sortStable = cc11001100_hook("r.sortStable", b.split("").sort(A).join("") === b, "assign"), p(), [0, 0].sort(A), r.detectDuplicates = cc11001100_hook("r.detectDuplicates", S, "assign"), x.find = cc11001100_hook("x.find", at, "assign"), x.expr = cc11001100_hook("x.expr", at.selectors, "assign"), x.expr[":"] = cc11001100_hook("x.expr[\":\"]", x.expr.pseudos, "assign"), x.unique = cc11001100_hook("x.unique", at.uniqueSort, "assign"), x.text = cc11001100_hook("x.text", at.getText, "assign"), x.isXMLDoc = cc11001100_hook("x.isXMLDoc", at.isXML, "assign"), x.contains = cc11001100_hook("x.contains", at.contains, "assign");
  }(e);
  var O = cc11001100_hook("O", {}, "var-init");
  function F(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", O[e] = cc11001100_hook("O[e]", {}, "assign"), "var-init");
    return x.each(e.match(T) || [], function (e, n) {
      t[n] = cc11001100_hook("t[n]", !0, "assign");
    }), t;
  }
  x.Callbacks = cc11001100_hook("x.Callbacks", function (e) {
    e = cc11001100_hook("e", "string" == typeof e ? O[e] || F(e) : x.extend({}, e), "assign");
    var n,
      r,
      i,
      o,
      a,
      s,
      l = cc11001100_hook("l", [], "var-init"),
      u = cc11001100_hook("u", !e.once && [], "var-init"),
      c = function (t) {
        for (r = cc11001100_hook("r", e.memory && t, "assign"), i = cc11001100_hook("i", !0, "assign"), a = cc11001100_hook("a", s || 0, "assign"), s = cc11001100_hook("s", 0, "assign"), o = cc11001100_hook("o", l.length, "assign"), n = cc11001100_hook("n", !0, "assign"); l && o > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          r = cc11001100_hook("r", !1, "assign");
          break;
        }
        n = cc11001100_hook("n", !1, "assign"), l && (u ? u.length && c(u.shift()) : r ? l = cc11001100_hook("l", [], "assign") : p.disable());
      },
      p = cc11001100_hook("p", {
        add: function () {
          if (l) {
            var t = cc11001100_hook("t", l.length, "var-init");
            (function i(t) {
              x.each(t, function (t, n) {
                var r = cc11001100_hook("r", x.type(n), "var-init");
                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n);
              });
            })(arguments), n ? o = cc11001100_hook("o", l.length, "assign") : r && (s = cc11001100_hook("s", t, "assign"), c(r));
          }
          return this;
        },
        remove: function () {
          return l && x.each(arguments, function (e, t) {
            var r;
            while ((r = cc11001100_hook("r", x.inArray(t, l, r), "assign")) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
          }), this;
        },
        has: function (e) {
          return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
        },
        empty: function () {
          return l = cc11001100_hook("l", [], "assign"), o = cc11001100_hook("o", 0, "assign"), this;
        },
        disable: function () {
          return l = cc11001100_hook("l", u = cc11001100_hook("u", r = cc11001100_hook("r", t, "assign"), "assign"), "assign"), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return u = cc11001100_hook("u", t, "assign"), r || p.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (e, t) {
          return t = cc11001100_hook("t", t || [], "assign"), t = cc11001100_hook("t", [e, t.slice ? t.slice() : t], "assign"), !l || i && !u || (n ? u.push(t) : c(t)), this;
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        }
      }, "var-init");
    return p;
  }, "assign"), x.extend({
    Deferred: function (e) {
      var t = cc11001100_hook("t", [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], "var-init"),
        n = cc11001100_hook("n", "pending", "var-init"),
        r = cc11001100_hook("r", {
          state: function () {
            return n;
          },
          always: function () {
            return i.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = cc11001100_hook("e", arguments, "var-init");
            return x.Deferred(function (n) {
              x.each(t, function (t, o) {
                var a = cc11001100_hook("a", o[0], "var-init"),
                  s = cc11001100_hook("s", x.isFunction(e[t]) && e[t], "var-init");
                i[o[1]](function () {
                  var e = cc11001100_hook("e", s && s.apply(this, arguments), "var-init");
                  e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
                });
              }), e = cc11001100_hook("e", null, "assign");
            }).promise();
          },
          promise: function (e) {
            return null != e ? x.extend(e, r) : r;
          }
        }, "var-init"),
        i = cc11001100_hook("i", {}, "var-init");
      return r.pipe = cc11001100_hook("r.pipe", r.then, "assign"), x.each(t, function (e, o) {
        var a = cc11001100_hook("a", o[2], "var-init"),
          s = cc11001100_hook("s", o[3], "var-init");
        r[o[1]] = cc11001100_hook("r[o[1]]", a.add, "assign"), s && a.add(function () {
          n = cc11001100_hook("n", s, "assign");
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = cc11001100_hook("i[o[0]]", function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, "assign"), i[o[0] + "With"] = cc11001100_hook("i[o[0] + \"With\"]", a.fireWith, "assign");
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function (e) {
      var t = cc11001100_hook("t", 0, "var-init"),
        n = cc11001100_hook("n", g.call(arguments), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", 1 !== r || e && x.isFunction(e.promise) ? r : 0, "var-init"),
        o = cc11001100_hook("o", 1 === i ? e : x.Deferred(), "var-init"),
        a = function (e, t, n) {
          return function (r) {
            t[e] = cc11001100_hook("t[e]", this, "assign"), n[e] = cc11001100_hook("n[e]", arguments.length > 1 ? g.call(arguments) : r, "assign"), n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
          };
        },
        s,
        l,
        u;
      if (r > 1) for (s = cc11001100_hook("s", Array(r), "assign"), l = cc11001100_hook("l", Array(r), "assign"), u = cc11001100_hook("u", Array(r), "assign"); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
      return i || o.resolveWith(u, n), o.promise();
    }
  }), x.support = cc11001100_hook("x.support", function (t) {
    var n,
      r,
      o,
      s,
      l,
      u,
      c,
      p,
      f,
      d = cc11001100_hook("d", a.createElement("div"), "var-init");
    if (d.setAttribute("className", "t"), d.innerHTML = cc11001100_hook("d.innerHTML", "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", "assign"), n = cc11001100_hook("n", d.getElementsByTagName("*") || [], "assign"), r = cc11001100_hook("r", d.getElementsByTagName("a")[0], "assign"), !r || !r.style || !n.length) return t;
    s = cc11001100_hook("s", a.createElement("select"), "assign"), u = cc11001100_hook("u", s.appendChild(a.createElement("option")), "assign"), o = cc11001100_hook("o", d.getElementsByTagName("input")[0], "assign"), r.style.cssText = cc11001100_hook("r.style.cssText", "top:1px;float:left;opacity:.5", "assign"), t.getSetAttribute = cc11001100_hook("t.getSetAttribute", "t" !== d.className, "assign"), t.leadingWhitespace = cc11001100_hook("t.leadingWhitespace", 3 === d.firstChild.nodeType, "assign"), t.tbody = cc11001100_hook("t.tbody", !d.getElementsByTagName("tbody").length, "assign"), t.htmlSerialize = cc11001100_hook("t.htmlSerialize", !!d.getElementsByTagName("link").length, "assign"), t.style = cc11001100_hook("t.style", /top/.test(r.getAttribute("style")), "assign"), t.hrefNormalized = cc11001100_hook("t.hrefNormalized", "/a" === r.getAttribute("href"), "assign"), t.opacity = cc11001100_hook("t.opacity", /^0.5/.test(r.style.opacity), "assign"), t.cssFloat = cc11001100_hook("t.cssFloat", !!r.style.cssFloat, "assign"), t.checkOn = cc11001100_hook("t.checkOn", !!o.value, "assign"), t.optSelected = cc11001100_hook("t.optSelected", u.selected, "assign"), t.enctype = cc11001100_hook("t.enctype", !!a.createElement("form").enctype, "assign"), t.html5Clone = cc11001100_hook("t.html5Clone", "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, "assign"), t.inlineBlockNeedsLayout = cc11001100_hook("t.inlineBlockNeedsLayout", !1, "assign"), t.shrinkWrapBlocks = cc11001100_hook("t.shrinkWrapBlocks", !1, "assign"), t.pixelPosition = cc11001100_hook("t.pixelPosition", !1, "assign"), t.deleteExpando = cc11001100_hook("t.deleteExpando", !0, "assign"), t.noCloneEvent = cc11001100_hook("t.noCloneEvent", !0, "assign"), t.reliableMarginRight = cc11001100_hook("t.reliableMarginRight", !0, "assign"), t.boxSizingReliable = cc11001100_hook("t.boxSizingReliable", !0, "assign"), o.checked = cc11001100_hook("o.checked", !0, "assign"), t.noCloneChecked = cc11001100_hook("t.noCloneChecked", o.cloneNode(!0).checked, "assign"), s.disabled = cc11001100_hook("s.disabled", !0, "assign"), t.optDisabled = cc11001100_hook("t.optDisabled", !u.disabled, "assign");
    try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = cc11001100_hook("t.deleteExpando", !1, "assign");
    }
    o = cc11001100_hook("o", a.createElement("input"), "assign"), o.setAttribute("value", ""), t.input = cc11001100_hook("t.input", "" === o.getAttribute("value"), "assign"), o.value = cc11001100_hook("o.value", "t", "assign"), o.setAttribute("type", "radio"), t.radioValue = cc11001100_hook("t.radioValue", "t" === o.value, "assign"), o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = cc11001100_hook("l", a.createDocumentFragment(), "assign"), l.appendChild(o), t.appendChecked = cc11001100_hook("t.appendChecked", o.checked, "assign"), t.checkClone = cc11001100_hook("t.checkClone", l.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), d.attachEvent && (d.attachEvent("onclick", function () {
      t.noCloneEvent = cc11001100_hook("t.noCloneEvent", !1, "assign");
    }), d.cloneNode(!0).click());
    for (f in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      change: cc11001100_hook("change", !0, "object-key-init"),
      focusin: cc11001100_hook("focusin", !0, "object-key-init")
    }) d.setAttribute(c = cc11001100_hook("c", "on" + f, "assign"), "t"), t[f + "Bubbles"] = cc11001100_hook("t[f + \"Bubbles\"]", c in e || d.attributes[c].expando === !1, "assign");
    d.style.backgroundClip = cc11001100_hook("d.style.backgroundClip", "content-box", "assign"), d.cloneNode(!0).style.backgroundClip = cc11001100_hook("d.cloneNode(!0).style.backgroundClip", "", "assign"), t.clearCloneStyle = cc11001100_hook("t.clearCloneStyle", "content-box" === d.style.backgroundClip, "assign");
    for (f in x(t)) break;
    return t.ownLast = cc11001100_hook("t.ownLast", "0" !== f, "assign"), x(function () {
      var n,
        r,
        o,
        s = cc11001100_hook("s", "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", "var-init"),
        l = cc11001100_hook("l", a.getElementsByTagName("body")[0], "var-init");
      l && (n = cc11001100_hook("n", a.createElement("div"), "assign"), n.style.cssText = cc11001100_hook("n.style.cssText", "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", "assign"), l.appendChild(n).appendChild(d), d.innerHTML = cc11001100_hook("d.innerHTML", "<table><tr><td></td><td>t</td></tr></table>", "assign"), o = cc11001100_hook("o", d.getElementsByTagName("td"), "assign"), o[0].style.cssText = cc11001100_hook("o[0].style.cssText", "padding:0;margin:0;border:0;display:none", "assign"), p = cc11001100_hook("p", 0 === o[0].offsetHeight, "assign"), o[0].style.display = cc11001100_hook("o[0].style.display", "", "assign"), o[1].style.display = cc11001100_hook("o[1].style.display", "none", "assign"), t.reliableHiddenOffsets = cc11001100_hook("t.reliableHiddenOffsets", p && 0 === o[0].offsetHeight, "assign"), d.innerHTML = cc11001100_hook("d.innerHTML", "", "assign"), d.style.cssText = cc11001100_hook("d.style.cssText", "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", "assign"), x.swap(l, null != l.style.zoom ? {
        zoom: cc11001100_hook("zoom", 1, "object-key-init")
      } : {}, function () {
        t.boxSizing = cc11001100_hook("t.boxSizing", 4 === d.offsetWidth, "assign");
      }), e.getComputedStyle && (t.pixelPosition = cc11001100_hook("t.pixelPosition", "1%" !== (e.getComputedStyle(d, null) || {}).top, "assign"), t.boxSizingReliable = cc11001100_hook("t.boxSizingReliable", "4px" === (e.getComputedStyle(d, null) || {
        width: cc11001100_hook("width", "4px", "object-key-init")
      }).width, "assign"), r = cc11001100_hook("r", d.appendChild(a.createElement("div")), "assign"), r.style.cssText = cc11001100_hook("r.style.cssText", d.style.cssText = cc11001100_hook("d.style.cssText", s, "assign"), "assign"), r.style.marginRight = cc11001100_hook("r.style.marginRight", r.style.width = cc11001100_hook("r.style.width", "0", "assign"), "assign"), d.style.width = cc11001100_hook("d.style.width", "1px", "assign"), t.reliableMarginRight = cc11001100_hook("t.reliableMarginRight", !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), "assign")), typeof d.style.zoom !== i && (d.innerHTML = cc11001100_hook("d.innerHTML", "", "assign"), d.style.cssText = cc11001100_hook("d.style.cssText", s + "width:1px;padding:1px;display:inline;zoom:1", "assign"), t.inlineBlockNeedsLayout = cc11001100_hook("t.inlineBlockNeedsLayout", 3 === d.offsetWidth, "assign"), d.style.display = cc11001100_hook("d.style.display", "block", "assign"), d.innerHTML = cc11001100_hook("d.innerHTML", "<div></div>", "assign"), d.firstChild.style.width = cc11001100_hook("d.firstChild.style.width", "5px", "assign"), t.shrinkWrapBlocks = cc11001100_hook("t.shrinkWrapBlocks", 3 !== d.offsetWidth, "assign"), t.inlineBlockNeedsLayout && (l.style.zoom = cc11001100_hook("l.style.zoom", 1, "assign"))), l.removeChild(n), n = cc11001100_hook("n", d = cc11001100_hook("d", o = cc11001100_hook("o", r = cc11001100_hook("r", null, "assign"), "assign"), "assign"), "assign"));
    }), n = cc11001100_hook("n", s = cc11001100_hook("s", l = cc11001100_hook("l", u = cc11001100_hook("u", r = cc11001100_hook("r", o = cc11001100_hook("o", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), t;
  }({}), "assign");
  var B = cc11001100_hook("B", /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, "var-init"),
    P = cc11001100_hook("P", /([A-Z])/g, "var-init");
  function R(e, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    if (x.acceptData(e)) {
      var o,
        a,
        s = cc11001100_hook("s", x.expando, "var-init"),
        l = cc11001100_hook("l", e.nodeType, "var-init"),
        u = cc11001100_hook("u", l ? x.cache : e, "var-init"),
        c = cc11001100_hook("c", l ? e[s] : e[s] && s, "var-init");
      if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = cc11001100_hook("c", l ? e[s] = cc11001100_hook("e[s]", p.pop() || x.guid++, "assign") : s, "assign")), u[c] || (u[c] = cc11001100_hook("u[c]", l ? {} : {
        toJSON: cc11001100_hook("toJSON", x.noop, "object-key-init")
      }, "assign")), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = cc11001100_hook("u[c]", x.extend(u[c], n), "assign") : u[c].data = cc11001100_hook("u[c].data", x.extend(u[c].data, n), "assign")), a = cc11001100_hook("a", u[c], "assign"), i || (a.data || (a.data = cc11001100_hook("a.data", {}, "assign")), a = cc11001100_hook("a", a.data, "assign")), r !== t && (a[x.camelCase(n)] = cc11001100_hook("a[x.camelCase(n)]", r, "assign")), "string" == typeof n ? (o = cc11001100_hook("o", a[n], "assign"), null == o && (o = cc11001100_hook("o", a[x.camelCase(n)], "assign"))) : o = cc11001100_hook("o", a, "assign"), o;
    }
  }
  function W(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (x.acceptData(e)) {
      var r,
        i,
        o = cc11001100_hook("o", e.nodeType, "var-init"),
        a = cc11001100_hook("a", o ? x.cache : e, "var-init"),
        s = cc11001100_hook("s", o ? e[x.expando] : x.expando, "var-init");
      if (a[s]) {
        if (t && (r = cc11001100_hook("r", n ? a[s] : a[s].data, "assign"))) {
          x.isArray(t) ? t = cc11001100_hook("t", t.concat(x.map(t, x.camelCase)), "assign") : t in r ? t = cc11001100_hook("t", [t], "assign") : (t = cc11001100_hook("t", x.camelCase(t), "assign"), t = cc11001100_hook("t", t in r ? [t] : t.split(" "), "assign")), i = cc11001100_hook("i", t.length, "assign");
          while (i--) delete r[t[i]];
          if (n ? !I(r) : !x.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = cc11001100_hook("a[s]", null, "assign"));
      }
    }
  }
  x.extend({
    cache: {},
    noData: {
      applet: cc11001100_hook("applet", !0, "object-key-init"),
      embed: cc11001100_hook("embed", !0, "object-key-init"),
      object: cc11001100_hook("object", "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", "object-key-init")
    },
    hasData: function (e) {
      return e = cc11001100_hook("e", e.nodeType ? x.cache[e[x.expando]] : e[x.expando], "assign"), !!e && !I(e);
    },
    data: function (e, t, n) {
      return R(e, t, n);
    },
    removeData: function (e, t) {
      return W(e, t);
    },
    _data: function (e, t, n) {
      return R(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return W(e, t, !0);
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = cc11001100_hook("t", e.nodeName && x.noData[e.nodeName.toLowerCase()], "var-init");
      return !t || t !== !0 && e.getAttribute("classid") === t;
    }
  }), x.fn.extend({
    data: function (e, n) {
      var r,
        i,
        o = cc11001100_hook("o", null, "var-init"),
        a = cc11001100_hook("a", 0, "var-init"),
        s = cc11001100_hook("s", this[0], "var-init");
      if (e === t) {
        if (this.length && (o = cc11001100_hook("o", x.data(s), "assign"), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
          for (r = cc11001100_hook("r", s.attributes, "assign"); r.length > a; a++) i = cc11001100_hook("i", r[a].name, "assign"), 0 === i.indexOf("data-") && (i = cc11001100_hook("i", x.camelCase(i.slice(5)), "assign"), $(s, i, o[i]));
          x._data(s, "parsedAttrs", !0);
        }
        return o;
      }
      return "object" == typeof e ? this.each(function () {
        x.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        x.data(this, e, n);
      }) : s ? $(s, e, x.data(s, e)) : null;
    },
    removeData: function (e) {
      return this.each(function () {
        x.removeData(this, e);
      });
    }
  });
  function $(e, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    if (r === t && 1 === e.nodeType) {
      var i = cc11001100_hook("i", "data-" + n.replace(P, "-$1").toLowerCase(), "var-init");
      if (r = cc11001100_hook("r", e.getAttribute(i), "assign"), "string" == typeof r) {
        try {
          r = cc11001100_hook("r", "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r, "assign");
        } catch (o) {}
        x.data(e, n, r);
      } else r = cc11001100_hook("r", t, "assign");
    }
    return r;
  }
  function I(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t;
    for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  x.extend({
    queue: function (e, n, r) {
      var i;
      return e ? (n = cc11001100_hook("n", (n || "fx") + "queue", "assign"), i = cc11001100_hook("i", x._data(e, n), "assign"), r && (!i || x.isArray(r) ? i = cc11001100_hook("i", x._data(e, n, x.makeArray(r)), "assign") : i.push(r)), i || []) : t;
    },
    dequeue: function (e, t) {
      t = cc11001100_hook("t", t || "fx", "assign");
      var n = cc11001100_hook("n", x.queue(e, t), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", n.shift(), "var-init"),
        o = cc11001100_hook("o", x._queueHooks(e, t), "var-init"),
        a = function () {
          x.dequeue(e, t);
        };
      "inprogress" === i && (i = cc11001100_hook("i", n.shift(), "assign"), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = cc11001100_hook("n", t + "queueHooks", "var-init");
      return x._data(e, n) || x._data(e, n, {
        empty: cc11001100_hook("empty", x.Callbacks("once memory").add(function () {
          x._removeData(e, t + "queue"), x._removeData(e, n);
        }), "object-key-init")
      });
    }
  }), x.fn.extend({
    queue: function (e, n) {
      var r = cc11001100_hook("r", 2, "var-init");
      return "string" != typeof e && (n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", "fx", "assign"), r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = cc11001100_hook("t", x.queue(this, e, n), "var-init");
        x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    },
    delay: function (e, t) {
      return e = cc11001100_hook("e", x.fx ? x.fx.speeds[e] || e : e, "assign"), t = cc11001100_hook("t", t || "fx", "assign"), this.queue(t, function (t, n) {
        var r = cc11001100_hook("r", setTimeout(t, e), "var-init");
        n.stop = cc11001100_hook("n.stop", function () {
          clearTimeout(r);
        }, "assign");
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, n) {
      var r,
        i = cc11001100_hook("i", 1, "var-init"),
        o = cc11001100_hook("o", x.Deferred(), "var-init"),
        a = cc11001100_hook("a", this, "var-init"),
        s = cc11001100_hook("s", this.length, "var-init"),
        l = function () {
          --i || o.resolveWith(a, [a]);
        };
      "string" != typeof e && (n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", t, "assign")), e = cc11001100_hook("e", e || "fx", "assign");
      while (s--) r = cc11001100_hook("r", x._data(a[s], e + "queueHooks"), "assign"), r && r.empty && (i++, r.empty.add(l));
      return l(), o.promise(n);
    }
  });
  var z,
    X,
    U = cc11001100_hook("U", /[\t\r\n\f]/g, "var-init"),
    V = cc11001100_hook("V", /\r/g, "var-init"),
    Y = cc11001100_hook("Y", /^(?:input|select|textarea|button|object)$/i, "var-init"),
    J = cc11001100_hook("J", /^(?:a|area)$/i, "var-init"),
    G = cc11001100_hook("G", /^(?:checked|selected)$/i, "var-init"),
    Q = cc11001100_hook("Q", x.support.getSetAttribute, "var-init"),
    K = cc11001100_hook("K", x.support.input, "var-init");
  x.fn.extend({
    attr: function (e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return e = cc11001100_hook("e", x.propFix[e] || e, "assign"), this.each(function () {
        try {
          this[e] = cc11001100_hook("this[e]", t, "assign"), delete this[e];
        } catch (n) {}
      });
    },
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a = cc11001100_hook("a", 0, "var-init"),
        s = cc11001100_hook("s", this.length, "var-init"),
        l = cc11001100_hook("l", "string" == typeof e && e, "var-init");
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).addClass(e.call(this, t, this.className));
      });
      if (l) for (t = cc11001100_hook("t", (e || "").match(T) || [], "assign"); s > a; a++) if (n = cc11001100_hook("n", this[a], "assign"), r = cc11001100_hook("r", 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " "), "assign")) {
        o = cc11001100_hook("o", 0, "assign");
        while (i = cc11001100_hook("i", t[o++], "assign")) 0 > r.indexOf(" " + i + " ") && (r += cc11001100_hook("r", i + " ", "assign"));
        n.className = cc11001100_hook("n.className", x.trim(r), "assign");
      }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a = cc11001100_hook("a", 0, "var-init"),
        s = cc11001100_hook("s", this.length, "var-init"),
        l = cc11001100_hook("l", 0 === arguments.length || "string" == typeof e && e, "var-init");
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).removeClass(e.call(this, t, this.className));
      });
      if (l) for (t = cc11001100_hook("t", (e || "").match(T) || [], "assign"); s > a; a++) if (n = cc11001100_hook("n", this[a], "assign"), r = cc11001100_hook("r", 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : ""), "assign")) {
        o = cc11001100_hook("o", 0, "assign");
        while (i = cc11001100_hook("i", t[o++], "assign")) while (r.indexOf(" " + i + " ") >= 0) r = cc11001100_hook("r", r.replace(" " + i + " ", " "), "assign");
        n.className = cc11001100_hook("n.className", e ? x.trim(r) : "", "assign");
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = cc11001100_hook("n", typeof e, "var-init"),
        r = cc11001100_hook("r", "boolean" == typeof t, "var-init");
      return x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) {
          var o,
            a = cc11001100_hook("a", 0, "var-init"),
            s = cc11001100_hook("s", x(this), "var-init"),
            l = cc11001100_hook("l", t, "var-init"),
            u = cc11001100_hook("u", e.match(T) || [], "var-init");
          while (o = cc11001100_hook("o", u[a++], "assign")) l = cc11001100_hook("l", r ? l : !s.hasClass(o), "assign"), s[l ? "addClass" : "removeClass"](o);
        } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = cc11001100_hook("this.className", this.className || e === !1 ? "" : x._data(this, "__className__") || "", "assign"));
      });
    },
    hasClass: function (e) {
      var t = cc11001100_hook("t", " " + e + " ", "var-init"),
        n = cc11001100_hook("n", 0, "var-init"),
        r = cc11001100_hook("r", this.length, "var-init");
      for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
      return !1;
    },
    val: function (e) {
      var n,
        r,
        i,
        o = cc11001100_hook("o", this[0], "var-init");
      {
        if (arguments.length) return i = cc11001100_hook("i", x.isFunction(e), "assign"), this.each(function (n) {
          var o;
          1 === this.nodeType && (o = cc11001100_hook("o", i ? e.call(this, n, x(this).val()) : e, "assign"), null == o ? o = cc11001100_hook("o", "", "assign") : "number" == typeof o ? o += cc11001100_hook("o", "", "assign") : x.isArray(o) && (o = cc11001100_hook("o", x.map(o, function (e) {
            return null == e ? "" : e + "";
          }), "assign")), r = cc11001100_hook("r", x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], "assign"), r && "set" in r && r.set(this, o, "value") !== t || (this.value = cc11001100_hook("this.value", o, "assign")));
        });
        if (o) return r = cc11001100_hook("r", x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], "assign"), r && "get" in r && (n = cc11001100_hook("n", r.get(o, "value"), "assign")) !== t ? n : (n = cc11001100_hook("n", o.value, "assign"), "string" == typeof n ? n.replace(V, "") : null == n ? "" : n);
      }
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = cc11001100_hook("t", x.find.attr(e, "value"), "var-init");
          return null != t ? t : e.text;
        }
      },
      select: {
        get: function (e) {
          var t,
            n,
            r = cc11001100_hook("r", e.options, "var-init"),
            i = cc11001100_hook("i", e.selectedIndex, "var-init"),
            o = cc11001100_hook("o", "select-one" === e.type || 0 > i, "var-init"),
            a = cc11001100_hook("a", o ? null : [], "var-init"),
            s = cc11001100_hook("s", o ? i + 1 : r.length, "var-init"),
            l = cc11001100_hook("l", 0 > i ? s : o ? i : 0, "var-init");
          for (; s > l; l++) if (n = cc11001100_hook("n", r[l], "assign"), !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
            if (t = cc11001100_hook("t", x(n).val(), "assign"), o) return t;
            a.push(t);
          }
          return a;
        },
        set: function (e, t) {
          var n,
            r,
            i = cc11001100_hook("i", e.options, "var-init"),
            o = cc11001100_hook("o", x.makeArray(t), "var-init"),
            a = cc11001100_hook("a", i.length, "var-init");
          while (a--) r = cc11001100_hook("r", i[a], "assign"), (r.selected = cc11001100_hook("r.selected", x.inArray(x(r).val(), o) >= 0, "assign")) && (n = cc11001100_hook("n", !0, "assign"));
          return n || (e.selectedIndex = cc11001100_hook("e.selectedIndex", -1, "assign")), o;
        }
      }
    },
    attr: function (e, n, r) {
      var o,
        a,
        s = cc11001100_hook("s", e.nodeType, "var-init");
      if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = cc11001100_hook("n", n.toLowerCase(), "assign"), o = cc11001100_hook("o", x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z), "assign")), r === t ? o && "get" in o && null !== (a = cc11001100_hook("a", o.get(e, n), "assign")) ? a : (a = cc11001100_hook("a", x.find.attr(e, n), "assign"), null == a ? t : a) : null !== r ? o && "set" in o && (a = cc11001100_hook("a", o.set(e, r, n), "assign")) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t));
    },
    removeAttr: function (e, t) {
      var n,
        r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", t && t.match(T), "var-init");
      if (o && 1 === e.nodeType) while (n = cc11001100_hook("n", o[i++], "assign")) r = cc11001100_hook("r", x.propFix[n] || n, "assign"), x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = cc11001100_hook("e[r]", !1, "assign") : e[x.camelCase("default-" + n)] = cc11001100_hook("e[x.camelCase(\"default-\" + n)]", e[r] = cc11001100_hook("e[r]", !1, "assign"), "assign") : x.attr(e, n, ""), e.removeAttribute(Q ? n : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
            var n = cc11001100_hook("n", e.value, "var-init");
            return e.setAttribute("type", t), n && (e.value = cc11001100_hook("e.value", n, "assign")), t;
          }
        }
      }
    },
    propFix: {
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init")
    },
    prop: function (e, n, r) {
      var i,
        o,
        a,
        s = cc11001100_hook("s", e.nodeType, "var-init");
      if (e && 3 !== s && 8 !== s && 2 !== s) return a = cc11001100_hook("a", 1 !== s || !x.isXMLDoc(e), "assign"), a && (n = cc11001100_hook("n", x.propFix[n] || n, "assign"), o = cc11001100_hook("o", x.propHooks[n], "assign")), r !== t ? o && "set" in o && (i = cc11001100_hook("i", o.set(e, r, n), "assign")) !== t ? i : e[n] = cc11001100_hook("e[n]", r, "assign") : o && "get" in o && null !== (i = cc11001100_hook("i", o.get(e, n), "assign")) ? i : e[n];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = cc11001100_hook("t", x.find.attr(e, "tabindex"), "var-init");
          return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    }
  }), X = cc11001100_hook("X", {
    set: function (e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = cc11001100_hook("e[x.camelCase(\"default-\" + n)]", e[n] = cc11001100_hook("e[n]", !0, "assign"), "assign"), n;
    }
  }, "assign"), x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = cc11001100_hook("r", x.expr.attrHandle[n] || x.find.attr, "var-init");
    x.expr.attrHandle[n] = cc11001100_hook("x.expr.attrHandle[n]", K && Q || !G.test(n) ? function (e, n, i) {
      var o = cc11001100_hook("o", x.expr.attrHandle[n], "var-init"),
        a = cc11001100_hook("a", i ? t : (x.expr.attrHandle[n] = cc11001100_hook("x.expr.attrHandle[n]", t, "assign")) != r(e, n, i) ? n.toLowerCase() : null, "var-init");
      return x.expr.attrHandle[n] = cc11001100_hook("x.expr.attrHandle[n]", o, "assign"), a;
    } : function (e, n, r) {
      return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null;
    }, "assign");
  }), K && Q || (x.attrHooks.value = cc11001100_hook("x.attrHooks.value", {
    set: function (e, n, r) {
      return x.nodeName(e, "input") ? (e.defaultValue = cc11001100_hook("e.defaultValue", n, "assign"), t) : z && z.set(e, n, r);
    }
  }, "assign")), Q || (z = cc11001100_hook("z", {
    set: function (e, n, r) {
      var i = cc11001100_hook("i", e.getAttributeNode(r), "var-init");
      return i || e.setAttributeNode(i = cc11001100_hook("i", e.ownerDocument.createAttribute(r), "assign")), i.value = cc11001100_hook("i.value", n += cc11001100_hook("n", "", "assign"), "assign"), "value" === r || n === e.getAttribute(r) ? n : t;
    }
  }, "assign"), x.expr.attrHandle.id = cc11001100_hook("x.expr.attrHandle.id", x.expr.attrHandle.name = cc11001100_hook("x.expr.attrHandle.name", x.expr.attrHandle.coords = cc11001100_hook("x.expr.attrHandle.coords", function (e, n, r) {
    var i;
    return r ? t : (i = cc11001100_hook("i", e.getAttributeNode(n), "assign")) && "" !== i.value ? i.value : null;
  }, "assign"), "assign"), "assign"), x.valHooks.button = cc11001100_hook("x.valHooks.button", {
    get: function (e, n) {
      var r = cc11001100_hook("r", e.getAttributeNode(n), "var-init");
      return r && r.specified ? r.value : t;
    },
    set: cc11001100_hook("set", z.set, "object-key-init")
  }, "assign"), x.attrHooks.contenteditable = cc11001100_hook("x.attrHooks.contenteditable", {
    set: function (e, t, n) {
      z.set(e, "" === t ? !1 : t, n);
    }
  }, "assign"), x.each(["width", "height"], function (e, n) {
    x.attrHooks[n] = cc11001100_hook("x.attrHooks[n]", {
      set: function (e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t;
      }
    }, "assign");
  })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
    x.propHooks[t] = cc11001100_hook("x.propHooks[t]", {
      get: function (e) {
        return e.getAttribute(t, 4);
      }
    }, "assign");
  }), x.support.style || (x.attrHooks.style = cc11001100_hook("x.attrHooks.style", {
    get: function (e) {
      return e.style.cssText || t;
    },
    set: function (e, t) {
      return e.style.cssText = cc11001100_hook("e.style.cssText", t + "", "assign");
    }
  }, "assign")), x.support.optSelected || (x.propHooks.selected = cc11001100_hook("x.propHooks.selected", {
    get: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  }, "assign")), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    x.propFix[this.toLowerCase()] = cc11001100_hook("x.propFix[this.toLowerCase()]", this, "assign");
  }), x.support.enctype || (x.propFix.enctype = cc11001100_hook("x.propFix.enctype", "encoding", "assign")), x.each(["radio", "checkbox"], function () {
    x.valHooks[this] = cc11001100_hook("x.valHooks[this]", {
      set: function (e, n) {
        return x.isArray(n) ? e.checked = cc11001100_hook("e.checked", x.inArray(x(e).val(), n) >= 0, "assign") : t;
      }
    }, "assign"), x.support.checkOn || (x.valHooks[this].get = cc11001100_hook("x.valHooks[this].get", function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    }, "assign"));
  });
  var Z = cc11001100_hook("Z", /^(?:input|select|textarea)$/i, "var-init"),
    et = cc11001100_hook("et", /^key/, "var-init"),
    tt = cc11001100_hook("tt", /^(?:mouse|contextmenu)|click/, "var-init"),
    nt = cc11001100_hook("nt", /^(?:focusinfocus|focusoutblur)$/, "var-init"),
    rt = cc11001100_hook("rt", /^([^.]*)(?:\.(.+)|)$/, "var-init");
  function it() {
    return !0;
  }
  function ot() {
    return !1;
  }
  function at() {
    try {
      return a.activeElement;
    } catch (e) {}
  }
  x.event = cc11001100_hook("x.event", {
    global: {},
    add: function (e, n, r, o, a) {
      var s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v = cc11001100_hook("v", x._data(e), "var-init");
      if (v) {
        r.handler && (c = cc11001100_hook("c", r, "assign"), r = cc11001100_hook("r", c.handler, "assign"), a = cc11001100_hook("a", c.selector, "assign")), r.guid || (r.guid = cc11001100_hook("r.guid", x.guid++, "assign")), (l = cc11001100_hook("l", v.events, "assign")) || (l = cc11001100_hook("l", v.events = cc11001100_hook("v.events", {}, "assign"), "assign")), (f = cc11001100_hook("f", v.handle, "assign")) || (f = cc11001100_hook("f", v.handle = cc11001100_hook("v.handle", function (e) {
          return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments);
        }, "assign"), "assign"), f.elem = cc11001100_hook("f.elem", e, "assign")), n = cc11001100_hook("n", (n || "").match(T) || [""], "assign"), u = cc11001100_hook("u", n.length, "assign");
        while (u--) s = cc11001100_hook("s", rt.exec(n[u]) || [], "assign"), g = cc11001100_hook("g", y = cc11001100_hook("y", s[1], "assign"), "assign"), m = cc11001100_hook("m", (s[2] || "").split(".").sort(), "assign"), g && (p = cc11001100_hook("p", x.event.special[g] || {}, "assign"), g = cc11001100_hook("g", (a ? p.delegateType : p.bindType) || g, "assign"), p = cc11001100_hook("p", x.event.special[g] || {}, "assign"), d = cc11001100_hook("d", x.extend({
          type: cc11001100_hook("type", g, "object-key-init"),
          origType: cc11001100_hook("origType", y, "object-key-init"),
          data: cc11001100_hook("data", o, "object-key-init"),
          handler: cc11001100_hook("handler", r, "object-key-init"),
          guid: cc11001100_hook("guid", r.guid, "object-key-init"),
          selector: cc11001100_hook("selector", a, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", a && x.expr.match.needsContext.test(a), "object-key-init"),
          namespace: cc11001100_hook("namespace", m.join("."), "object-key-init")
        }, c), "assign"), (h = cc11001100_hook("h", l[g], "assign")) || (h = cc11001100_hook("h", l[g] = cc11001100_hook("l[g]", [], "assign"), "assign"), h.delegateCount = cc11001100_hook("h.delegateCount", 0, "assign"), p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = cc11001100_hook("d.handler.guid", r.guid, "assign"))), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = cc11001100_hook("x.event.global[g]", !0, "assign"));
        e = cc11001100_hook("e", null, "assign");
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m = cc11001100_hook("m", x.hasData(e) && x._data(e), "var-init");
      if (m && (c = cc11001100_hook("c", m.events, "assign"))) {
        t = cc11001100_hook("t", (t || "").match(T) || [""], "assign"), u = cc11001100_hook("u", t.length, "assign");
        while (u--) if (s = cc11001100_hook("s", rt.exec(t[u]) || [], "assign"), d = cc11001100_hook("d", g = cc11001100_hook("g", s[1], "assign"), "assign"), h = cc11001100_hook("h", (s[2] || "").split(".").sort(), "assign"), d) {
          p = cc11001100_hook("p", x.event.special[d] || {}, "assign"), d = cc11001100_hook("d", (r ? p.delegateType : p.bindType) || d, "assign"), f = cc11001100_hook("f", c[d] || [], "assign"), s = cc11001100_hook("s", s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), l = cc11001100_hook("l", o = cc11001100_hook("o", f.length, "assign"), "assign");
          while (o--) a = cc11001100_hook("a", f[o], "assign"), !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
          l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]);
        } else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
        x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"));
      }
    },
    trigger: function (n, r, i, o) {
      var s,
        l,
        u,
        c,
        p,
        f,
        d,
        h = cc11001100_hook("h", [i || a], "var-init"),
        g = cc11001100_hook("g", v.call(n, "type") ? n.type : n, "var-init"),
        m = cc11001100_hook("m", v.call(n, "namespace") ? n.namespace.split(".") : [], "var-init");
      if (u = cc11001100_hook("u", f = cc11001100_hook("f", i = cc11001100_hook("i", i || a, "assign"), "assign"), "assign"), 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = cc11001100_hook("m", g.split("."), "assign"), g = cc11001100_hook("g", m.shift(), "assign"), m.sort()), l = cc11001100_hook("l", 0 > g.indexOf(":") && "on" + g, "assign"), n = cc11001100_hook("n", n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), "assign"), n.isTrigger = cc11001100_hook("n.isTrigger", o ? 2 : 3, "assign"), n.namespace = cc11001100_hook("n.namespace", m.join("."), "assign"), n.namespace_re = cc11001100_hook("n.namespace_re", n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), n.result = cc11001100_hook("n.result", t, "assign"), n.target || (n.target = cc11001100_hook("n.target", i, "assign")), r = cc11001100_hook("r", null == r ? [n] : x.makeArray(r, [n]), "assign"), p = cc11001100_hook("p", x.event.special[g] || {}, "assign"), o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (c = cc11001100_hook("c", p.delegateType || g, "assign"), nt.test(c + g) || (u = cc11001100_hook("u", u.parentNode, "assign")); u; u = cc11001100_hook("u", u.parentNode, "assign")) h.push(u), f = cc11001100_hook("f", u, "assign");
          f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
        }
        d = cc11001100_hook("d", 0, "assign");
        while ((u = cc11001100_hook("u", h[d++], "assign")) && !n.isPropagationStopped()) n.type = cc11001100_hook("n.type", d > 1 ? c : p.bindType || g, "assign"), s = cc11001100_hook("s", (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), "assign"), s && s.apply(u, r), s = cc11001100_hook("s", l && u[l], "assign"), s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
        if (n.type = cc11001100_hook("n.type", g, "assign"), !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
          f = cc11001100_hook("f", i[l], "assign"), f && (i[l] = cc11001100_hook("i[l]", null, "assign")), x.event.triggered = cc11001100_hook("x.event.triggered", g, "assign");
          try {
            i[g]();
          } catch (y) {}
          x.event.triggered = cc11001100_hook("x.event.triggered", t, "assign"), f && (i[l] = cc11001100_hook("i[l]", f, "assign"));
        }
        return n.result;
      }
    },
    dispatch: function (e) {
      e = cc11001100_hook("e", x.event.fix(e), "assign");
      var n,
        r,
        i,
        o,
        a,
        s = cc11001100_hook("s", [], "var-init"),
        l = cc11001100_hook("l", g.call(arguments), "var-init"),
        u = cc11001100_hook("u", (x._data(this, "events") || {})[e.type] || [], "var-init"),
        c = cc11001100_hook("c", x.event.special[e.type] || {}, "var-init");
      if (l[0] = cc11001100_hook("l[0]", e, "assign"), e.delegateTarget = cc11001100_hook("e.delegateTarget", this, "assign"), !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = cc11001100_hook("s", x.event.handlers.call(this, e, u), "assign"), n = cc11001100_hook("n", 0, "assign");
        while ((o = cc11001100_hook("o", s[n++], "assign")) && !e.isPropagationStopped()) {
          e.currentTarget = cc11001100_hook("e.currentTarget", o.elem, "assign"), a = cc11001100_hook("a", 0, "assign");
          while ((i = cc11001100_hook("i", o.handlers[a++], "assign")) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = cc11001100_hook("e.handleObj", i, "assign"), e.data = cc11001100_hook("e.data", i.data, "assign"), r = cc11001100_hook("r", ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), "assign"), r !== t && (e.result = cc11001100_hook("e.result", r, "assign")) === !1 && (e.preventDefault(), e.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, n) {
      var r,
        i,
        o,
        a,
        s = cc11001100_hook("s", [], "var-init"),
        l = cc11001100_hook("l", n.delegateCount, "var-init"),
        u = cc11001100_hook("u", e.target, "var-init");
      if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = cc11001100_hook("u", u.parentNode || this, "assign")) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
        for (o = cc11001100_hook("o", [], "assign"), a = cc11001100_hook("a", 0, "assign"); l > a; a++) i = cc11001100_hook("i", n[a], "assign"), r = cc11001100_hook("r", i.selector + " ", "assign"), o[r] === t && (o[r] = cc11001100_hook("o[r]", i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length, "assign")), o[r] && o.push(i);
        o.length && s.push({
          elem: cc11001100_hook("elem", u, "object-key-init"),
          handlers: cc11001100_hook("handlers", o, "object-key-init")
        });
      }
      return n.length > l && s.push({
        elem: cc11001100_hook("elem", this, "object-key-init"),
        handlers: cc11001100_hook("handlers", n.slice(l), "object-key-init")
      }), s;
    },
    fix: function (e) {
      if (e[x.expando]) return e;
      var t,
        n,
        r,
        i = cc11001100_hook("i", e.type, "var-init"),
        o = cc11001100_hook("o", e, "var-init"),
        s = cc11001100_hook("s", this.fixHooks[i], "var-init");
      s || (this.fixHooks[i] = cc11001100_hook("this.fixHooks[i]", s = cc11001100_hook("s", tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}, "assign"), "assign")), r = cc11001100_hook("r", s.props ? this.props.concat(s.props) : this.props, "assign"), e = cc11001100_hook("e", new x.Event(o), "assign"), t = cc11001100_hook("t", r.length, "assign");
      while (t--) n = cc11001100_hook("n", r[t], "assign"), e[n] = cc11001100_hook("e[n]", o[n], "assign");
      return e.target || (e.target = cc11001100_hook("e.target", o.srcElement || a, "assign")), 3 === e.target.nodeType && (e.target = cc11001100_hook("e.target", e.target.parentNode, "assign")), e.metaKey = cc11001100_hook("e.metaKey", !!e.metaKey, "assign"), s.filter ? s.filter(e, o) : e;
    },
    props: cc11001100_hook("props", "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), "object-key-init"),
    fixHooks: {},
    keyHooks: {
      props: cc11001100_hook("props", "char charCode key keyCode".split(" "), "object-key-init"),
      filter: function (e, t) {
        return null == e.which && (e.which = cc11001100_hook("e.which", null != t.charCode ? t.charCode : t.keyCode, "assign")), e;
      }
    },
    mouseHooks: {
      props: cc11001100_hook("props", "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), "object-key-init"),
      filter: function (e, n) {
        var r,
          i,
          o,
          s = cc11001100_hook("s", n.button, "var-init"),
          l = cc11001100_hook("l", n.fromElement, "var-init");
        return null == e.pageX && null != n.clientX && (i = cc11001100_hook("i", e.target.ownerDocument || a, "assign"), o = cc11001100_hook("o", i.documentElement, "assign"), r = cc11001100_hook("r", i.body, "assign"), e.pageX = cc11001100_hook("e.pageX", n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), "assign"), e.pageY = cc11001100_hook("e.pageY", n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0), "assign")), !e.relatedTarget && l && (e.relatedTarget = cc11001100_hook("e.relatedTarget", l === e.target ? n.toElement : l, "assign")), e.which || s === t || (e.which = cc11001100_hook("e.which", 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0, "assign")), e;
      }
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      focus: {
        trigger: function () {
          if (this !== at() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          return this === at() && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      click: {
        trigger: function () {
          return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
        },
        _default: function (e) {
          return x.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = cc11001100_hook("e.originalEvent.returnValue", e.result, "assign"));
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = cc11001100_hook("i", x.extend(new x.Event(), n, {
        type: cc11001100_hook("type", e, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init"),
        originalEvent: {}
      }), "var-init");
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, "assign"), x.removeEvent = cc11001100_hook("x.removeEvent", a.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = cc11001100_hook("r", "on" + t, "var-init");
    e.detachEvent && (typeof e[r] === i && (e[r] = cc11001100_hook("e[r]", null, "assign")), e.detachEvent(r, n));
  }, "assign"), x.Event = cc11001100_hook("x.Event", function (e, n) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", e, "assign"), this.type = cc11001100_hook("this.type", e.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot, "assign")) : this.type = cc11001100_hook("this.type", e, "assign"), n && x.extend(this, n), this.timeStamp = cc11001100_hook("this.timeStamp", e && e.timeStamp || x.now(), "assign"), this[x.expando] = cc11001100_hook("this[x.expando]", !0, "assign"), t) : new x.Event(e, n);
  }, "assign"), x.Event.prototype = cc11001100_hook("x.Event.prototype", {
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", ot, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", ot, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", ot, "object-key-init"),
    preventDefault: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", it, "assign"), e && (e.preventDefault ? e.preventDefault() : e.returnValue = cc11001100_hook("e.returnValue", !1, "assign"));
    },
    stopPropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", it, "assign"), e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = cc11001100_hook("e.cancelBubble", !0, "assign"));
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", it, "assign"), this.stopPropagation();
    }
  }, "assign"), x.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init")
  }, function (e, t) {
    x.event.special[e] = cc11001100_hook("x.event.special[e]", {
      delegateType: cc11001100_hook("delegateType", t, "object-key-init"),
      bindType: cc11001100_hook("bindType", t, "object-key-init"),
      handle: function (e) {
        var n,
          r = cc11001100_hook("r", this, "var-init"),
          i = cc11001100_hook("i", e.relatedTarget, "var-init"),
          o = cc11001100_hook("o", e.handleObj, "var-init");
        return (!i || i !== r && !x.contains(r, i)) && (e.type = cc11001100_hook("e.type", o.origType, "assign"), n = cc11001100_hook("n", o.handler.apply(this, arguments), "assign"), e.type = cc11001100_hook("e.type", t, "assign")), n;
      }
    }, "assign");
  }), x.support.submitBubbles || (x.event.special.submit = cc11001100_hook("x.event.special.submit", {
    setup: function () {
      return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
        var n = cc11001100_hook("n", e.target, "var-init"),
          r = cc11001100_hook("r", x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t, "var-init");
        r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = cc11001100_hook("e._submit_bubble", !0, "assign");
        }), x._data(r, "submitBubbles", !0));
      }), t);
    },
    postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0));
    },
    teardown: function () {
      return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t);
    }
  }, "assign")), x.support.changeBubbles || (x.event.special.change = cc11001100_hook("x.event.special.change", {
    setup: function () {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = cc11001100_hook("this._just_changed", !0, "assign"));
      }), x.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = cc11001100_hook("this._just_changed", !1, "assign")), x.event.simulate("change", this, e, !0);
      })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
        var t = cc11001100_hook("t", e.target, "var-init");
        Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0);
        }), x._data(t, "changeBubbles", !0));
      }), t);
    },
    handle: function (e) {
      var n = cc11001100_hook("n", e.target, "var-init");
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    },
    teardown: function () {
      return x.event.remove(this, "._change"), !Z.test(this.nodeName);
    }
  }, "assign")), x.support.focusinBubbles || x.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (e, t) {
    var n = cc11001100_hook("n", 0, "var-init"),
      r = function (e) {
        x.event.simulate(t, e.target, x.event.fix(e), !0);
      };
    x.event.special[t] = cc11001100_hook("x.event.special[t]", {
      setup: function () {
        0 === n++ && a.addEventListener(e, r, !0);
      },
      teardown: function () {
        0 === --n && a.removeEventListener(e, r, !0);
      }
    }, "assign");
  }), x.fn.extend({
    on: function (e, n, r, i, o) {
      var a, s;
      if ("object" == typeof e) {
        "string" != typeof n && (r = cc11001100_hook("r", r || n, "assign"), n = cc11001100_hook("n", t, "assign"));
        for (a in e) this.on(a, n, r, e[a], o);
        return this;
      }
      if (null == r && null == i ? (i = cc11001100_hook("i", n, "assign"), r = cc11001100_hook("r", n = cc11001100_hook("n", t, "assign"), "assign")) : null == i && ("string" == typeof n ? (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", t, "assign")) : (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign"))), i === !1) i = cc11001100_hook("i", ot, "assign");else if (!i) return this;
      return 1 === o && (s = cc11001100_hook("s", i, "assign"), i = cc11001100_hook("i", function (e) {
        return x().off(e), s.apply(this, arguments);
      }, "assign"), i.guid = cc11001100_hook("i.guid", s.guid || (s.guid = cc11001100_hook("s.guid", x.guid++, "assign")), "assign")), this.each(function () {
        x.event.add(this, e, i, r, n);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = cc11001100_hook("i", e.handleObj, "assign"), x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (o in e) this.off(o, n, e[o]);
        return this;
      }
      return (n === !1 || "function" == typeof n) && (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign")), r === !1 && (r = cc11001100_hook("r", ot, "assign")), this.each(function () {
        x.event.remove(this, e, r, n);
      });
    },
    trigger: function (e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, n) {
      var r = cc11001100_hook("r", this[0], "var-init");
      return r ? x.event.trigger(e, n, r, !0) : t;
    }
  });
  var st = cc11001100_hook("st", /^.[^:#\[\.,]*$/, "var-init"),
    lt = cc11001100_hook("lt", /^(?:parents|prev(?:Until|All))/, "var-init"),
    ut = cc11001100_hook("ut", x.expr.match.needsContext, "var-init"),
    ct = cc11001100_hook("ct", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  x.fn.extend({
    find: function (e) {
      var t,
        n = cc11001100_hook("n", [], "var-init"),
        r = cc11001100_hook("r", this, "var-init"),
        i = cc11001100_hook("i", r.length, "var-init");
      if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
        for (t = cc11001100_hook("t", 0, "assign"); i > t; t++) if (x.contains(r[t], this)) return !0;
      }));
      for (t = cc11001100_hook("t", 0, "assign"); i > t; t++) x.find(e, r[t], n);
      return n = cc11001100_hook("n", this.pushStack(i > 1 ? x.unique(n) : n), "assign"), n.selector = cc11001100_hook("n.selector", this.selector ? this.selector + " " + e : e, "assign"), n;
    },
    has: function (e) {
      var t,
        n = cc11001100_hook("n", x(e, this), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init");
      return this.filter(function () {
        for (t = cc11001100_hook("t", 0, "assign"); r > t; t++) if (x.contains(this, n[t])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(ft(this, e || [], !0));
    },
    filter: function (e) {
      return this.pushStack(ft(this, e || [], !1));
    },
    is: function (e) {
      return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length;
    },
    closest: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", this.length, "var-init"),
        o = cc11001100_hook("o", [], "var-init"),
        a = cc11001100_hook("a", ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0, "var-init");
      for (; i > r; r++) for (n = cc11001100_hook("n", this[r], "assign"); n && n !== t; n = cc11001100_hook("n", n.parentNode, "assign")) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
        n = cc11001100_hook("n", o.push(n), "assign");
        break;
      }
      return this.pushStack(o.length > 1 ? x.unique(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      var n = cc11001100_hook("n", "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), "var-init"),
        r = cc11001100_hook("r", x.merge(this.get(), n), "var-init");
      return this.pushStack(x.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });
  function pt(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    do e = cc11001100_hook("e", e[t], "assign"); while (e && 1 !== e.nodeType);
    return e;
  }
  x.each({
    parent: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return x.dir(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return x.dir(e, "parentNode", n);
    },
    next: function (e) {
      return pt(e, "nextSibling");
    },
    prev: function (e) {
      return pt(e, "previousSibling");
    },
    nextAll: function (e) {
      return x.dir(e, "nextSibling");
    },
    prevAll: function (e) {
      return x.dir(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return x.dir(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return x.dir(e, "previousSibling", n);
    },
    siblings: function (e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return x.sibling(e.firstChild);
    },
    contents: function (e) {
      return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
    }
  }, function (e, t) {
    x.fn[e] = cc11001100_hook("x.fn[e]", function (n, r) {
      var i = cc11001100_hook("i", x.map(this, t, n), "var-init");
      return "Until" !== e.slice(-5) && (r = cc11001100_hook("r", n, "assign")), r && "string" == typeof r && (i = cc11001100_hook("i", x.filter(r, i), "assign")), this.length > 1 && (ct[e] || (i = cc11001100_hook("i", x.unique(i), "assign")), lt.test(e) && (i = cc11001100_hook("i", i.reverse(), "assign"))), this.pushStack(i);
    }, "assign");
  }), x.extend({
    filter: function (e, t, n) {
      var r = cc11001100_hook("r", t[0], "var-init");
      return n && (e = cc11001100_hook("e", ":not(" + e + ")", "assign")), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    },
    dir: function (e, n, r) {
      var i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", e[n], "var-init");
      while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = cc11001100_hook("o", o[n], "assign");
      return i;
    },
    sibling: function (e, t) {
      var n = cc11001100_hook("n", [], "var-init");
      for (; e; e = cc11001100_hook("e", e.nextSibling, "assign")) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
  });
  function ft(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (x.isFunction(t)) return x.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return x.grep(e, function (e) {
      return e === t !== n;
    });
    if ("string" == typeof t) {
      if (st.test(t)) return x.filter(t, e, n);
      t = cc11001100_hook("t", x.filter(t, e), "assign");
    }
    return x.grep(e, function (e) {
      return x.inArray(e, t) >= 0 !== n;
    });
  }
  function dt(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", ht.split("|"), "var-init"),
      n = cc11001100_hook("n", e.createDocumentFragment(), "var-init");
    if (n.createElement) while (t.length) n.createElement(t.pop());
    return n;
  }
  var ht = cc11001100_hook("ht", "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", "var-init"),
    gt = cc11001100_hook("gt", / jQuery\d+="(?:null|\d+)"/g, "var-init"),
    mt = cc11001100_hook("mt", RegExp("<(?:" + ht + ")[\\s/>]", "i"), "var-init"),
    yt = cc11001100_hook("yt", /^\s+/, "var-init"),
    vt = cc11001100_hook("vt", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "var-init"),
    bt = cc11001100_hook("bt", /<([\w:]+)/, "var-init"),
    xt = cc11001100_hook("xt", /<tbody/i, "var-init"),
    wt = cc11001100_hook("wt", /<|&#?\w+;/, "var-init"),
    Tt = cc11001100_hook("Tt", /<(?:script|style|link)/i, "var-init"),
    Ct = cc11001100_hook("Ct", /^(?:checkbox|radio)$/i, "var-init"),
    Nt = cc11001100_hook("Nt", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    kt = cc11001100_hook("kt", /^$|\/(?:java|ecma)script/i, "var-init"),
    Et = cc11001100_hook("Et", /^true\/(.*)/, "var-init"),
    St = cc11001100_hook("St", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init"),
    At = cc11001100_hook("At", {
      option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
      legend: cc11001100_hook("legend", [1, "<fieldset>", "</fieldset>"], "object-key-init"),
      area: cc11001100_hook("area", [1, "<map>", "</map>"], "object-key-init"),
      param: cc11001100_hook("param", [1, "<object>", "</object>"], "object-key-init"),
      thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
      tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
      col: cc11001100_hook("col", [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], "object-key-init"),
      td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
      _default: cc11001100_hook("_default", x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"], "object-key-init")
    }, "var-init"),
    jt = cc11001100_hook("jt", dt(a), "var-init"),
    Dt = cc11001100_hook("Dt", jt.appendChild(a.createElement("div")), "var-init");
  At.optgroup = cc11001100_hook("At.optgroup", At.option, "assign"), At.tbody = cc11001100_hook("At.tbody", At.tfoot = cc11001100_hook("At.tfoot", At.colgroup = cc11001100_hook("At.colgroup", At.caption = cc11001100_hook("At.caption", At.thead, "assign"), "assign"), "assign"), "assign"), At.th = cc11001100_hook("At.th", At.td, "assign"), x.fn.extend({
    text: function (e) {
      return x.access(this, function (e) {
        return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = cc11001100_hook("t", Lt(this, e), "var-init");
          t.appendChild(e);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = cc11001100_hook("t", Lt(this, e), "var-init");
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function (e, t) {
      var n,
        r = cc11001100_hook("r", e ? x.filter(e, this) : this, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      for (; null != (n = cc11001100_hook("n", r[i], "assign")); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
      return this;
    },
    empty: function () {
      var e,
        t = cc11001100_hook("t", 0, "var-init");
      for (; null != (e = cc11001100_hook("e", this[t], "assign")); t++) {
        1 === e.nodeType && x.cleanData(Ft(e, !1));
        while (e.firstChild) e.removeChild(e.firstChild);
        e.options && x.nodeName(e, "select") && (e.options.length = cc11001100_hook("e.options.length", 0, "assign"));
      }
      return this;
    },
    clone: function (e, t) {
      return e = cc11001100_hook("e", null == e ? !1 : e, "assign"), t = cc11001100_hook("t", null == t ? e : t, "assign"), this.map(function () {
        return x.clone(this, e, t);
      });
    },
    html: function (e) {
      return x.access(this, function (e) {
        var n = cc11001100_hook("n", this[0] || {}, "var-init"),
          r = cc11001100_hook("r", 0, "var-init"),
          i = cc11001100_hook("i", this.length, "var-init");
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
        if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = cc11001100_hook("e", e.replace(vt, "<$1></$2>"), "assign");
          try {
            for (; i > r; r++) n = cc11001100_hook("n", this[r] || {}, "assign"), 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = cc11001100_hook("n.innerHTML", e, "assign"));
            n = cc11001100_hook("n", 0, "assign");
          } catch (o) {}
        }
        n && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = cc11001100_hook("e", x.map(this, function (e) {
          return [e.nextSibling, e.parentNode];
        }), "var-init"),
        t = cc11001100_hook("t", 0, "var-init");
      return this.domManip(arguments, function (n) {
        var r = cc11001100_hook("r", e[t++], "var-init"),
          i = cc11001100_hook("i", e[t++], "var-init");
        i && (r && r.parentNode !== i && (r = cc11001100_hook("r", this.nextSibling, "assign")), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (e, t, n) {
      e = cc11001100_hook("e", d.apply([], e), "assign");
      var r,
        i,
        o,
        a,
        s,
        l,
        u = cc11001100_hook("u", 0, "var-init"),
        c = cc11001100_hook("c", this.length, "var-init"),
        p = cc11001100_hook("p", this, "var-init"),
        f = cc11001100_hook("f", c - 1, "var-init"),
        h = cc11001100_hook("h", e[0], "var-init"),
        g = cc11001100_hook("g", x.isFunction(h), "var-init");
      if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
        var i = cc11001100_hook("i", p.eq(r), "var-init");
        g && (e[0] = cc11001100_hook("e[0]", h.call(this, r, i.html()), "assign")), i.domManip(e, t, n);
      });
      if (c && (l = cc11001100_hook("l", x.buildFragment(e, this[0].ownerDocument, !1, !n && this), "assign"), r = cc11001100_hook("r", l.firstChild, "assign"), 1 === l.childNodes.length && (l = cc11001100_hook("l", r, "assign")), r)) {
        for (a = cc11001100_hook("a", x.map(Ft(l, "script"), Ht), "assign"), o = cc11001100_hook("o", a.length, "assign"); c > u; u++) i = cc11001100_hook("i", l, "assign"), u !== f && (i = cc11001100_hook("i", x.clone(i, !0, !0), "assign"), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
        if (o) for (s = cc11001100_hook("s", a[a.length - 1].ownerDocument, "assign"), x.map(a, qt), u = cc11001100_hook("u", 0, "assign"); o > u; u++) i = cc11001100_hook("i", a[u], "assign"), kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
        l = cc11001100_hook("l", r = cc11001100_hook("r", null, "assign"), "assign");
      }
      return this;
    }
  });
  function Lt(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }
  function Ht(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.type = cc11001100_hook("e.type", (null !== x.find.attr(e, "type")) + "/" + e.type, "assign"), e;
  }
  function qt(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", Et.exec(e.type), "var-init");
    return t ? e.type = cc11001100_hook("e.type", t[1], "assign") : e.removeAttribute("type"), e;
  }
  function _t(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r = cc11001100_hook("r", 0, "var-init");
    for (; null != (n = cc11001100_hook("n", e[r], "assign")); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"));
  }
  function Mt(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (1 === t.nodeType && x.hasData(e)) {
      var n,
        r,
        i,
        o = cc11001100_hook("o", x._data(e), "var-init"),
        a = cc11001100_hook("a", x._data(t, o), "var-init"),
        s = cc11001100_hook("s", o.events, "var-init");
      if (s) {
        delete a.handle, a.events = cc11001100_hook("a.events", {}, "assign");
        for (n in s) for (r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", s[n].length, "assign"); i > r; r++) x.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = cc11001100_hook("a.data", x.extend({}, a.data), "assign"));
    }
  }
  function Ot(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = cc11001100_hook("n", t.nodeName.toLowerCase(), "assign"), !x.support.noCloneEvent && t[x.expando]) {
        i = cc11001100_hook("i", x._data(t), "assign");
        for (r in i.events) x.removeEvent(t, r, i.handle);
        t.removeAttribute(x.expando);
      }
      "script" === n && t.text !== e.text ? (Ht(t).text = cc11001100_hook("Ht(t).text", e.text, "assign"), qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = cc11001100_hook("t.outerHTML", e.outerHTML, "assign")), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = cc11001100_hook("t.innerHTML", e.innerHTML, "assign"))) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = cc11001100_hook("t.defaultChecked", t.checked = cc11001100_hook("t.checked", e.checked, "assign"), "assign"), t.value !== e.value && (t.value = cc11001100_hook("t.value", e.value, "assign"))) : "option" === n ? t.defaultSelected = cc11001100_hook("t.defaultSelected", t.selected = cc11001100_hook("t.selected", e.defaultSelected, "assign"), "assign") : ("input" === n || "textarea" === n) && (t.defaultValue = cc11001100_hook("t.defaultValue", e.defaultValue, "assign"));
    }
  }
  x.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (e, t) {
    x.fn[e] = cc11001100_hook("x.fn[e]", function (e) {
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", x(e), "var-init"),
        a = cc11001100_hook("a", o.length - 1, "var-init");
      for (; a >= r; r++) n = cc11001100_hook("n", r === a ? this : this.clone(!0), "assign"), x(o[r])[t](n), h.apply(i, n.get());
      return this.pushStack(i);
    }, "assign");
  });
  function Ft(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      o,
      a = cc11001100_hook("a", 0, "var-init"),
      s = cc11001100_hook("s", typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t, "var-init");
    if (!s) for (s = cc11001100_hook("s", [], "assign"), r = cc11001100_hook("r", e.childNodes || e, "assign"); null != (o = cc11001100_hook("o", r[a], "assign")); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s;
  }
  function Bt(e) {
    cc11001100_hook("e", e, "function-parameter");
    Ct.test(e.type) && (e.defaultChecked = cc11001100_hook("e.defaultChecked", e.checked, "assign"));
  }
  x.extend({
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        l = cc11001100_hook("l", x.contains(e.ownerDocument, e), "var-init");
      if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = cc11001100_hook("o", e.cloneNode(!0), "assign") : (Dt.innerHTML = cc11001100_hook("Dt.innerHTML", e.outerHTML, "assign"), Dt.removeChild(o = cc11001100_hook("o", Dt.firstChild, "assign"))), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = cc11001100_hook("r", Ft(o), "assign"), s = cc11001100_hook("s", Ft(e), "assign"), a = cc11001100_hook("a", 0, "assign"); null != (i = cc11001100_hook("i", s[a], "assign")); ++a) r[a] && Ot(i, r[a]);
      if (t) if (n) for (s = cc11001100_hook("s", s || Ft(e), "assign"), r = cc11001100_hook("r", r || Ft(o), "assign"), a = cc11001100_hook("a", 0, "assign"); null != (i = cc11001100_hook("i", s[a], "assign")); a++) Mt(i, r[a]);else Mt(e, o);
      return r = cc11001100_hook("r", Ft(o, "script"), "assign"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = cc11001100_hook("r", s = cc11001100_hook("s", i = cc11001100_hook("i", null, "assign"), "assign"), "assign"), o;
    },
    buildFragment: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        l,
        u,
        c,
        p = cc11001100_hook("p", e.length, "var-init"),
        f = cc11001100_hook("f", dt(t), "var-init"),
        d = cc11001100_hook("d", [], "var-init"),
        h = cc11001100_hook("h", 0, "var-init");
      for (; p > h; h++) if (o = cc11001100_hook("o", e[h], "assign"), o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);else if (wt.test(o)) {
        s = cc11001100_hook("s", s || f.appendChild(t.createElement("div")), "assign"), l = cc11001100_hook("l", (bt.exec(o) || ["", ""])[1].toLowerCase(), "assign"), c = cc11001100_hook("c", At[l] || At._default, "assign"), s.innerHTML = cc11001100_hook("s.innerHTML", c[1] + o.replace(vt, "<$1></$2>") + c[2], "assign"), i = cc11001100_hook("i", c[0], "assign");
        while (i--) s = cc11001100_hook("s", s.lastChild, "assign");
        if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
          o = cc11001100_hook("o", "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, "assign"), i = cc11001100_hook("i", o && o.childNodes.length, "assign");
          while (i--) x.nodeName(u = cc11001100_hook("u", o.childNodes[i], "assign"), "tbody") && !u.childNodes.length && o.removeChild(u);
        }
        x.merge(d, s.childNodes), s.textContent = cc11001100_hook("s.textContent", "", "assign");
        while (s.firstChild) s.removeChild(s.firstChild);
        s = cc11001100_hook("s", f.lastChild, "assign");
      } else d.push(t.createTextNode(o));
      s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = cc11001100_hook("h", 0, "assign");
      while (o = cc11001100_hook("o", d[h++], "assign")) if ((!r || -1 === x.inArray(o, r)) && (a = cc11001100_hook("a", x.contains(o.ownerDocument, o), "assign"), s = cc11001100_hook("s", Ft(f.appendChild(o), "script"), "assign"), a && _t(s), n)) {
        i = cc11001100_hook("i", 0, "assign");
        while (o = cc11001100_hook("o", s[i++], "assign")) kt.test(o.type || "") && n.push(o);
      }
      return s = cc11001100_hook("s", null, "assign"), f;
    },
    cleanData: function (e, t) {
      var n,
        r,
        o,
        a,
        s = cc11001100_hook("s", 0, "var-init"),
        l = cc11001100_hook("l", x.expando, "var-init"),
        u = cc11001100_hook("u", x.cache, "var-init"),
        c = cc11001100_hook("c", x.support.deleteExpando, "var-init"),
        f = cc11001100_hook("f", x.event.special, "var-init");
      for (; null != (n = cc11001100_hook("n", e[s], "assign")); s++) if ((t || x.acceptData(n)) && (o = cc11001100_hook("o", n[l], "assign"), a = cc11001100_hook("a", o && u[o], "assign"))) {
        if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
        u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = cc11001100_hook("n[l]", null, "assign"), p.push(o));
      }
    },
    _evalUrl: function (e) {
      return x.ajax({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        dataType: cc11001100_hook("dataType", "script", "object-key-init"),
        async: cc11001100_hook("async", !1, "object-key-init"),
        global: cc11001100_hook("global", !1, "object-key-init"),
        "throws": cc11001100_hook("throws", !0, "object-key-init")
      });
    }
  }), x.fn.extend({
    wrapAll: function (e) {
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      });
      if (this[0]) {
        var t = cc11001100_hook("t", x(e, this[0].ownerDocument).eq(0).clone(!0), "var-init");
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = cc11001100_hook("e", this, "var-init");
          while (e.firstChild && 1 === e.firstChild.nodeType) e = cc11001100_hook("e", e.firstChild, "assign");
          return e;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = cc11001100_hook("t", x(this), "var-init"),
          n = cc11001100_hook("n", t.contents(), "var-init");
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = cc11001100_hook("t", x.isFunction(e), "var-init");
      return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  var Pt,
    Rt,
    Wt,
    $t = cc11001100_hook("$t", /alpha\([^)]*\)/i, "var-init"),
    It = cc11001100_hook("It", /opacity\s*=\s*([^)]*)/, "var-init"),
    zt = cc11001100_hook("zt", /^(top|right|bottom|left)$/, "var-init"),
    Xt = cc11001100_hook("Xt", /^(none|table(?!-c[ea]).+)/, "var-init"),
    Ut = cc11001100_hook("Ut", /^margin/, "var-init"),
    Vt = cc11001100_hook("Vt", RegExp("^(" + w + ")(.*)$", "i"), "var-init"),
    Yt = cc11001100_hook("Yt", RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), "var-init"),
    Jt = cc11001100_hook("Jt", RegExp("^([+-])=(" + w + ")", "i"), "var-init"),
    Gt = cc11001100_hook("Gt", {
      BODY: cc11001100_hook("BODY", "block", "object-key-init")
    }, "var-init"),
    Qt = cc11001100_hook("Qt", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    Kt = cc11001100_hook("Kt", {
      letterSpacing: cc11001100_hook("letterSpacing", 0, "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", 400, "object-key-init")
    }, "var-init"),
    Zt = cc11001100_hook("Zt", ["Top", "Right", "Bottom", "Left"], "var-init"),
    en = cc11001100_hook("en", ["Webkit", "O", "Moz", "ms"], "var-init");
  function tn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (t in e) return t;
    var n = cc11001100_hook("n", t.charAt(0).toUpperCase() + t.slice(1), "var-init"),
      r = cc11001100_hook("r", t, "var-init"),
      i = cc11001100_hook("i", en.length, "var-init");
    while (i--) if (t = cc11001100_hook("t", en[i] + n, "assign"), t in e) return t;
    return r;
  }
  function nn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e = cc11001100_hook("e", t || e, "assign"), "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
  }
  function rn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r,
      i,
      o = cc11001100_hook("o", [], "var-init"),
      a = cc11001100_hook("a", 0, "var-init"),
      s = cc11001100_hook("s", e.length, "var-init");
    for (; s > a; a++) r = cc11001100_hook("r", e[a], "assign"), r.style && (o[a] = cc11001100_hook("o[a]", x._data(r, "olddisplay"), "assign"), n = cc11001100_hook("n", r.style.display, "assign"), t ? (o[a] || "none" !== n || (r.style.display = cc11001100_hook("r.style.display", "", "assign")), "" === r.style.display && nn(r) && (o[a] = cc11001100_hook("o[a]", x._data(r, "olddisplay", ln(r.nodeName)), "assign"))) : o[a] || (i = cc11001100_hook("i", nn(r), "assign"), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
    for (a = cc11001100_hook("a", 0, "assign"); s > a; a++) r = cc11001100_hook("r", e[a], "assign"), r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = cc11001100_hook("r.style.display", t ? o[a] || "" : "none", "assign")));
    return e;
  }
  x.fn.extend({
    css: function (e, n) {
      return x.access(this, function (e, n, r) {
        var i,
          o,
          a = cc11001100_hook("a", {}, "var-init"),
          s = cc11001100_hook("s", 0, "var-init");
        if (x.isArray(n)) {
          for (o = cc11001100_hook("o", Rt(e), "assign"), i = cc11001100_hook("i", n.length, "assign"); i > s; s++) a[n[s]] = cc11001100_hook("a[n[s]]", x.css(e, n[s], !1, o), "assign");
          return a;
        }
        return r !== t ? x.style(e, n, r) : x.css(e, n);
      }, e, n, arguments.length > 1);
    },
    show: function () {
      return rn(this, !0);
    },
    hide: function () {
      return rn(this);
    },
    toggle: function (e) {
      var t = cc11001100_hook("t", "boolean" == typeof e, "var-init");
      return this.each(function () {
        (t ? e : nn(this)) ? x(this).show() : x(this).hide();
      });
    }
  }), x.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = cc11001100_hook("n", Wt(e, "opacity"), "var-init");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: cc11001100_hook("columnCount", !0, "object-key-init"),
      fillOpacity: cc11001100_hook("fillOpacity", !0, "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", !0, "object-key-init"),
      lineHeight: cc11001100_hook("lineHeight", !0, "object-key-init"),
      opacity: cc11001100_hook("opacity", !0, "object-key-init"),
      orphans: cc11001100_hook("orphans", !0, "object-key-init"),
      widows: cc11001100_hook("widows", !0, "object-key-init"),
      zIndex: cc11001100_hook("zIndex", !0, "object-key-init"),
      zoom: cc11001100_hook("zoom", !0, "object-key-init")
    },
    cssProps: {
      "float": cc11001100_hook("float", x.support.cssFloat ? "cssFloat" : "styleFloat", "object-key-init")
    },
    style: function (e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          a,
          s,
          l = cc11001100_hook("l", x.camelCase(n), "var-init"),
          u = cc11001100_hook("u", e.style, "var-init");
        if (n = cc11001100_hook("n", x.cssProps[l] || (x.cssProps[l] = cc11001100_hook("x.cssProps[l]", tn(u, l), "assign")), "assign"), s = cc11001100_hook("s", x.cssHooks[n] || x.cssHooks[l], "assign"), r === t) return s && "get" in s && (o = cc11001100_hook("o", s.get(e, !1, i), "assign")) !== t ? o : u[n];
        if (a = cc11001100_hook("a", typeof r, "assign"), "string" === a && (o = cc11001100_hook("o", Jt.exec(r), "assign")) && (r = cc11001100_hook("r", (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), "assign"), a = cc11001100_hook("a", "number", "assign")), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += cc11001100_hook("r", "px", "assign")), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = cc11001100_hook("u[n]", "inherit", "assign")), s && "set" in s && (r = cc11001100_hook("r", s.set(e, r, i), "assign")) === t))) try {
          u[n] = cc11001100_hook("u[n]", r, "assign");
        } catch (c) {}
      }
    },
    css: function (e, n, r, i) {
      var o,
        a,
        s,
        l = cc11001100_hook("l", x.camelCase(n), "var-init");
      return n = cc11001100_hook("n", x.cssProps[l] || (x.cssProps[l] = cc11001100_hook("x.cssProps[l]", tn(e.style, l), "assign")), "assign"), s = cc11001100_hook("s", x.cssHooks[n] || x.cssHooks[l], "assign"), s && "get" in s && (a = cc11001100_hook("a", s.get(e, !0, r), "assign")), a === t && (a = cc11001100_hook("a", Wt(e, n, i), "assign")), "normal" === a && n in Kt && (a = cc11001100_hook("a", Kt[n], "assign")), "" === r || r ? (o = cc11001100_hook("o", parseFloat(a), "assign"), r === !0 || x.isNumeric(o) ? o || 0 : a) : a;
    }
  }), e.getComputedStyle ? (Rt = cc11001100_hook("Rt", function (t) {
    return e.getComputedStyle(t, null);
  }, "assign"), Wt = cc11001100_hook("Wt", function (e, n, r) {
    var i,
      o,
      a,
      s = cc11001100_hook("s", r || Rt(e), "var-init"),
      l = cc11001100_hook("l", s ? s.getPropertyValue(n) || s[n] : t, "var-init"),
      u = cc11001100_hook("u", e.style, "var-init");
    return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = cc11001100_hook("l", x.style(e, n), "assign")), Yt.test(l) && Ut.test(n) && (i = cc11001100_hook("i", u.width, "assign"), o = cc11001100_hook("o", u.minWidth, "assign"), a = cc11001100_hook("a", u.maxWidth, "assign"), u.minWidth = cc11001100_hook("u.minWidth", u.maxWidth = cc11001100_hook("u.maxWidth", u.width = cc11001100_hook("u.width", l, "assign"), "assign"), "assign"), l = cc11001100_hook("l", s.width, "assign"), u.width = cc11001100_hook("u.width", i, "assign"), u.minWidth = cc11001100_hook("u.minWidth", o, "assign"), u.maxWidth = cc11001100_hook("u.maxWidth", a, "assign"))), l;
  }, "assign")) : a.documentElement.currentStyle && (Rt = cc11001100_hook("Rt", function (e) {
    return e.currentStyle;
  }, "assign"), Wt = cc11001100_hook("Wt", function (e, n, r) {
    var i,
      o,
      a,
      s = cc11001100_hook("s", r || Rt(e), "var-init"),
      l = cc11001100_hook("l", s ? s[n] : t, "var-init"),
      u = cc11001100_hook("u", e.style, "var-init");
    return null == l && u && u[n] && (l = cc11001100_hook("l", u[n], "assign")), Yt.test(l) && !zt.test(n) && (i = cc11001100_hook("i", u.left, "assign"), o = cc11001100_hook("o", e.runtimeStyle, "assign"), a = cc11001100_hook("a", o && o.left, "assign"), a && (o.left = cc11001100_hook("o.left", e.currentStyle.left, "assign")), u.left = cc11001100_hook("u.left", "fontSize" === n ? "1em" : l, "assign"), l = cc11001100_hook("l", u.pixelLeft + "px", "assign"), u.left = cc11001100_hook("u.left", i, "assign"), a && (o.left = cc11001100_hook("o.left", a, "assign"))), "" === l ? "auto" : l;
  }, "assign"));
  function on(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", Vt.exec(t), "var-init");
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function an(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var o = cc11001100_hook("o", n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, "var-init"),
      a = cc11001100_hook("a", 0, "var-init");
    for (; 4 > o; o += cc11001100_hook("o", 2, "assign")) "margin" === n && (a += cc11001100_hook("a", x.css(e, n + Zt[o], !0, i), "assign")), r ? ("content" === n && (a -= cc11001100_hook("a", x.css(e, "padding" + Zt[o], !0, i), "assign")), "margin" !== n && (a -= cc11001100_hook("a", x.css(e, "border" + Zt[o] + "Width", !0, i), "assign"))) : (a += cc11001100_hook("a", x.css(e, "padding" + Zt[o], !0, i), "assign"), "padding" !== n && (a += cc11001100_hook("a", x.css(e, "border" + Zt[o] + "Width", !0, i), "assign")));
    return a;
  }
  function sn(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", !0, "var-init"),
      i = cc11001100_hook("i", "width" === t ? e.offsetWidth : e.offsetHeight, "var-init"),
      o = cc11001100_hook("o", Rt(e), "var-init"),
      a = cc11001100_hook("a", x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o), "var-init");
    if (0 >= i || null == i) {
      if (i = cc11001100_hook("i", Wt(e, t, o), "assign"), (0 > i || null == i) && (i = cc11001100_hook("i", e.style[t], "assign")), Yt.test(i)) return i;
      r = cc11001100_hook("r", a && (x.support.boxSizingReliable || i === e.style[t]), "assign"), i = cc11001100_hook("i", parseFloat(i) || 0, "assign");
    }
    return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function ln(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", a, "var-init"),
      n = cc11001100_hook("n", Gt[e], "var-init");
    return n || (n = cc11001100_hook("n", un(e, t), "assign"), "none" !== n && n || (Pt = cc11001100_hook("Pt", (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), "assign"), t = cc11001100_hook("t", (Pt[0].contentWindow || Pt[0].contentDocument).document, "assign"), t.write("<!doctype html><html><body>"), t.close(), n = cc11001100_hook("n", un(e, t), "assign"), Pt.detach()), Gt[e] = cc11001100_hook("Gt[e]", n, "assign")), n;
  }
  function un(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", x(t.createElement(e)).appendTo(t.body), "var-init"),
      r = cc11001100_hook("r", x.css(n[0], "display"), "var-init");
    return n.remove(), r;
  }
  x.each(["height", "width"], function (e, n) {
    x.cssHooks[n] = cc11001100_hook("x.cssHooks[n]", {
      get: function (e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
          return sn(e, n, i);
        }) : sn(e, n, i) : t;
      },
      set: function (e, t, r) {
        var i = cc11001100_hook("i", r && Rt(e), "var-init");
        return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
      }
    }, "assign");
  }), x.support.opacity || (x.cssHooks.opacity = cc11001100_hook("x.cssHooks.opacity", {
    get: function (e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function (e, t) {
      var n = cc11001100_hook("n", e.style, "var-init"),
        r = cc11001100_hook("r", e.currentStyle, "var-init"),
        i = cc11001100_hook("i", x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", "var-init"),
        o = cc11001100_hook("o", r && r.filter || n.filter || "", "var-init");
      n.zoom = cc11001100_hook("n.zoom", 1, "assign"), (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = cc11001100_hook("n.filter", $t.test(o) ? o.replace($t, i) : o + " " + i, "assign"));
    }
  }, "assign")), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = cc11001100_hook("x.cssHooks.marginRight", {
      get: function (e, n) {
        return n ? x.swap(e, {
          display: cc11001100_hook("display", "inline-block", "object-key-init")
        }, Wt, [e, "marginRight"]) : t;
      }
    }, "assign")), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
      x.cssHooks[n] = cc11001100_hook("x.cssHooks[n]", {
        get: function (e, r) {
          return r ? (r = cc11001100_hook("r", Wt(e, n), "assign"), Yt.test(r) ? x(e).position()[n] + "px" : r) : t;
        }
      }, "assign");
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = cc11001100_hook("x.expr.filters.hidden", function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"));
  }, "assign"), x.expr.filters.visible = cc11001100_hook("x.expr.filters.visible", function (e) {
    return !x.expr.filters.hidden(e);
  }, "assign")), x.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (e, t) {
    x.cssHooks[e + t] = cc11001100_hook("x.cssHooks[e + t]", {
      expand: function (n) {
        var r = cc11001100_hook("r", 0, "var-init"),
          i = cc11001100_hook("i", {}, "var-init"),
          o = cc11001100_hook("o", "string" == typeof n ? n.split(" ") : [n], "var-init");
        for (; 4 > r; r++) i[e + Zt[r] + t] = cc11001100_hook("i[e + Zt[r] + t]", o[r] || o[r - 2] || o[0], "assign");
        return i;
      }
    }, "assign"), Ut.test(e) || (x.cssHooks[e + t].set = cc11001100_hook("x.cssHooks[e + t].set", on, "assign"));
  });
  var cn = cc11001100_hook("cn", /%20/g, "var-init"),
    pn = cc11001100_hook("pn", /\[\]$/, "var-init"),
    fn = cc11001100_hook("fn", /\r?\n/g, "var-init"),
    dn = cc11001100_hook("dn", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    hn = cc11001100_hook("hn", /^(?:input|select|textarea|keygen)/i, "var-init");
  x.fn.extend({
    serialize: function () {
      return x.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", x.prop(this, "elements"), "var-init");
        return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = cc11001100_hook("e", this.type, "var-init");
        return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e));
      }).map(function (e, t) {
        var n = cc11001100_hook("n", x(this).val(), "var-init");
        return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return {
            name: cc11001100_hook("name", t.name, "object-key-init"),
            value: cc11001100_hook("value", e.replace(fn, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", t.name, "object-key-init"),
          value: cc11001100_hook("value", n.replace(fn, "\r\n"), "object-key-init")
        };
      }).get();
    }
  }), x.param = cc11001100_hook("x.param", function (e, n) {
    var r,
      i = cc11001100_hook("i", [], "var-init"),
      o = function (e, t) {
        t = cc11001100_hook("t", x.isFunction(t) ? t() : null == t ? "" : t, "assign"), i[i.length] = cc11001100_hook("i[i.length]", encodeURIComponent(e) + "=" + encodeURIComponent(t), "assign");
      };
    if (n === t && (n = cc11001100_hook("n", x.ajaxSettings && x.ajaxSettings.traditional, "assign")), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
      o(this.name, this.value);
    });else for (r in e) gn(r, e[r], n, o);
    return i.join("&").replace(cn, "+");
  }, "assign");
  function gn(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i;
    if (x.isArray(t)) x.each(t, function (t, i) {
      n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x.type(t)) r(e, t);else for (i in t) gn(e + "[" + i + "]", t[i], n, r);
  }
  x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    x.fn[t] = cc11001100_hook("x.fn[t]", function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    }, "assign");
  }), x.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
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
  });
  var mn,
    yn,
    vn = cc11001100_hook("vn", x.now(), "var-init"),
    bn = cc11001100_hook("bn", /\?/, "var-init"),
    xn = cc11001100_hook("xn", /#.*$/, "var-init"),
    wn = cc11001100_hook("wn", /([?&])_=[^&]*/, "var-init"),
    Tn = cc11001100_hook("Tn", /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, "var-init"),
    Cn = cc11001100_hook("Cn", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
    Nn = cc11001100_hook("Nn", /^(?:GET|HEAD)$/, "var-init"),
    kn = cc11001100_hook("kn", /^\/\//, "var-init"),
    En = cc11001100_hook("En", /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, "var-init"),
    Sn = cc11001100_hook("Sn", x.fn.load, "var-init"),
    An = cc11001100_hook("An", {}, "var-init"),
    jn = cc11001100_hook("jn", {}, "var-init"),
    Dn = cc11001100_hook("Dn", "*/".concat("*"), "var-init");
  try {
    yn = cc11001100_hook("yn", o.href, "assign");
  } catch (Ln) {
    yn = cc11001100_hook("yn", a.createElement("a"), "assign"), yn.href = cc11001100_hook("yn.href", "", "assign"), yn = cc11001100_hook("yn", yn.href, "assign");
  }
  mn = cc11001100_hook("mn", En.exec(yn.toLowerCase()) || [], "assign");
  function Hn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function (t, n) {
      "string" != typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", "*", "assign"));
      var r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", t.toLowerCase().match(T) || [], "var-init");
      if (x.isFunction(n)) while (r = cc11001100_hook("r", o[i++], "assign")) "+" === r[0] ? (r = cc11001100_hook("r", r.slice(1) || "*", "assign"), (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).unshift(n)) : (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).push(n);
    };
  }
  function qn(e, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var o = cc11001100_hook("o", {}, "var-init"),
      a = cc11001100_hook("a", e === jn, "var-init");
    function s(l) {
      cc11001100_hook("l", l, "function-parameter");
      var u;
      return o[l] = cc11001100_hook("o[l]", !0, "assign"), x.each(e[l] || [], function (e, l) {
        var c = cc11001100_hook("c", l(n, r, i), "var-init");
        return "string" != typeof c || a || o[c] ? a ? !(u = cc11001100_hook("u", c, "assign")) : t : (n.dataTypes.unshift(c), s(c), !1);
      }), u;
    }
    return s(n.dataTypes[0]) || !o["*"] && s("*");
  }
  function _n(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", x.ajaxSettings.flatOptions || {}, "var-init");
    for (i in n) n[i] !== t && ((o[i] ? e : r || (r = cc11001100_hook("r", {}, "assign")))[i] = cc11001100_hook("(o[i] ? e : r || (r = {}))[i]", n[i], "assign"));
    return r && x.extend(!0, e, r), e;
  }
  x.fn.load = cc11001100_hook("x.fn.load", function (e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
    var i,
      o,
      a,
      s = cc11001100_hook("s", this, "var-init"),
      l = cc11001100_hook("l", e.indexOf(" "), "var-init");
    return l >= 0 && (i = cc11001100_hook("i", e.slice(l, e.length), "assign"), e = cc11001100_hook("e", e.slice(0, l), "assign")), x.isFunction(n) ? (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign")) : n && "object" == typeof n && (a = cc11001100_hook("a", "POST", "assign")), s.length > 0 && x.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", a, "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", n, "object-key-init")
    }).done(function (e) {
      o = cc11001100_hook("o", arguments, "assign"), s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, "assign"), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    x.fn[t] = cc11001100_hook("x.fn[t]", function (e) {
      return this.on(t, e);
    }, "assign");
  }), x.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", yn, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", Cn.test(mn[1]), "object-key-init"),
      global: cc11001100_hook("global", !0, "object-key-init"),
      processData: cc11001100_hook("processData", !0, "object-key-init"),
      async: cc11001100_hook("async", !0, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", Dn, "object-key-init"),
        text: cc11001100_hook("text", "text/plain", "object-key-init"),
        html: cc11001100_hook("html", "text/html", "object-key-init"),
        xml: cc11001100_hook("xml", "application/xml, text/xml", "object-key-init"),
        json: cc11001100_hook("json", "application/json, text/javascript", "object-key-init")
      },
      contents: {
        xml: cc11001100_hook("xml", /xml/, "object-key-init"),
        html: cc11001100_hook("html", /html/, "object-key-init"),
        json: cc11001100_hook("json", /json/, "object-key-init")
      },
      responseFields: {
        xml: cc11001100_hook("xml", "responseXML", "object-key-init"),
        text: cc11001100_hook("text", "responseText", "object-key-init"),
        json: cc11001100_hook("json", "responseJSON", "object-key-init")
      },
      converters: {
        "* text": cc11001100_hook("* text", String, "object-key-init"),
        "text html": cc11001100_hook("text html", !0, "object-key-init"),
        "text json": cc11001100_hook("text json", x.parseJSON, "object-key-init"),
        "text xml": cc11001100_hook("text xml", x.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", !0, "object-key-init"),
        context: cc11001100_hook("context", !0, "object-key-init")
      }
    },
    ajaxSetup: function (e, t) {
      return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", Hn(An), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", Hn(jn), "object-key-init"),
    ajax: function (e, n) {
      "object" == typeof e && (n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", t, "assign")), n = cc11001100_hook("n", n || {}, "assign");
      var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        p = cc11001100_hook("p", x.ajaxSetup({}, n), "var-init"),
        f = cc11001100_hook("f", p.context || p, "var-init"),
        d = cc11001100_hook("d", p.context && (f.nodeType || f.jquery) ? x(f) : x.event, "var-init"),
        h = cc11001100_hook("h", x.Deferred(), "var-init"),
        g = cc11001100_hook("g", x.Callbacks("once memory"), "var-init"),
        m = cc11001100_hook("m", p.statusCode || {}, "var-init"),
        y = cc11001100_hook("y", {}, "var-init"),
        v = cc11001100_hook("v", {}, "var-init"),
        b = cc11001100_hook("b", 0, "var-init"),
        w = cc11001100_hook("w", "canceled", "var-init"),
        C = cc11001100_hook("C", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (e) {
            var t;
            if (2 === b) {
              if (!c) {
                c = cc11001100_hook("c", {}, "assign");
                while (t = cc11001100_hook("t", Tn.exec(a), "assign")) c[t[1].toLowerCase()] = cc11001100_hook("c[t[1].toLowerCase()]", t[2], "assign");
              }
              t = cc11001100_hook("t", c[e.toLowerCase()], "assign");
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === b ? a : null;
          },
          setRequestHeader: function (e, t) {
            var n = cc11001100_hook("n", e.toLowerCase(), "var-init");
            return b || (e = cc11001100_hook("e", v[n] = cc11001100_hook("v[n]", v[n] || e, "assign"), "assign"), y[e] = cc11001100_hook("y[e]", t, "assign")), this;
          },
          overrideMimeType: function (e) {
            return b || (p.mimeType = cc11001100_hook("p.mimeType", e, "assign")), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (2 > b) for (t in e) m[t] = cc11001100_hook("m[t]", [m[t], e[t]], "assign");else C.always(e[C.status]);
            return this;
          },
          abort: function (e) {
            var t = cc11001100_hook("t", e || w, "var-init");
            return u && u.abort(t), k(0, t), this;
          }
        }, "var-init");
      if (h.promise(C).complete = cc11001100_hook("h.promise(C).complete", g.add, "assign"), C.success = cc11001100_hook("C.success", C.done, "assign"), C.error = cc11001100_hook("C.error", C.fail, "assign"), p.url = cc11001100_hook("p.url", ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), "assign"), p.type = cc11001100_hook("p.type", n.method || n.type || p.method || p.type, "assign"), p.dataTypes = cc11001100_hook("p.dataTypes", x.trim(p.dataType || "*").toLowerCase().match(T) || [""], "assign"), null == p.crossDomain && (r = cc11001100_hook("r", En.exec(p.url.toLowerCase()), "assign"), p.crossDomain = cc11001100_hook("p.crossDomain", !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443"))), "assign")), p.data && p.processData && "string" != typeof p.data && (p.data = cc11001100_hook("p.data", x.param(p.data, p.traditional), "assign")), qn(An, p, n, C), 2 === b) return C;
      l = cc11001100_hook("l", p.global, "assign"), l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = cc11001100_hook("p.type", p.type.toUpperCase(), "assign"), p.hasContent = cc11001100_hook("p.hasContent", !Nn.test(p.type), "assign"), o = cc11001100_hook("o", p.url, "assign"), p.hasContent || (p.data && (o = cc11001100_hook("o", p.url += cc11001100_hook("p.url", (bn.test(o) ? "&" : "?") + p.data, "assign"), "assign"), delete p.data), p.cache === !1 && (p.url = cc11001100_hook("p.url", wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++, "assign"))), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
      for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
      if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
      w = cc11001100_hook("w", "abort", "assign");
      for (i in {
        success: cc11001100_hook("success", 1, "object-key-init"),
        error: cc11001100_hook("error", 1, "object-key-init"),
        complete: cc11001100_hook("complete", 1, "object-key-init")
      }) C[i](p[i]);
      if (u = cc11001100_hook("u", qn(jn, p, n, C), "assign")) {
        C.readyState = cc11001100_hook("C.readyState", 1, "assign"), l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = cc11001100_hook("s", setTimeout(function () {
          C.abort("timeout");
        }, p.timeout), "assign"));
        try {
          b = cc11001100_hook("b", 1, "assign"), u.send(y, k);
        } catch (N) {
          if (!(2 > b)) throw N;
          k(-1, N);
        }
      } else k(-1, "No Transport");
      function k(e, n, r, i) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        var c,
          y,
          v,
          w,
          T,
          N = cc11001100_hook("N", n, "var-init");
        2 !== b && (b = cc11001100_hook("b", 2, "assign"), s && clearTimeout(s), u = cc11001100_hook("u", t, "assign"), a = cc11001100_hook("a", i || "", "assign"), C.readyState = cc11001100_hook("C.readyState", e > 0 ? 4 : 0, "assign"), c = cc11001100_hook("c", e >= 200 && 300 > e || 304 === e, "assign"), r && (w = cc11001100_hook("w", Mn(p, C, r), "assign")), w = cc11001100_hook("w", On(p, w, C, c), "assign"), c ? (p.ifModified && (T = cc11001100_hook("T", C.getResponseHeader("Last-Modified"), "assign"), T && (x.lastModified[o] = cc11001100_hook("x.lastModified[o]", T, "assign")), T = cc11001100_hook("T", C.getResponseHeader("etag"), "assign"), T && (x.etag[o] = cc11001100_hook("x.etag[o]", T, "assign"))), 204 === e || "HEAD" === p.type ? N = cc11001100_hook("N", "nocontent", "assign") : 304 === e ? N = cc11001100_hook("N", "notmodified", "assign") : (N = cc11001100_hook("N", w.state, "assign"), y = cc11001100_hook("y", w.data, "assign"), v = cc11001100_hook("v", w.error, "assign"), c = cc11001100_hook("c", !v, "assign"))) : (v = cc11001100_hook("v", N, "assign"), (e || !N) && (N = cc11001100_hook("N", "error", "assign"), 0 > e && (e = cc11001100_hook("e", 0, "assign")))), C.status = cc11001100_hook("C.status", e, "assign"), C.statusText = cc11001100_hook("C.statusText", (n || N) + "", "assign"), c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = cc11001100_hook("m", t, "assign"), l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")));
      }
      return C;
    },
    getJSON: function (e, t, n) {
      return x.get(e, t, n, "json");
    },
    getScript: function (e, n) {
      return x.get(e, t, n, "script");
    }
  }), x.each(["get", "post"], function (e, n) {
    x[n] = cc11001100_hook("x[n]", function (e, r, i, o) {
      return x.isFunction(r) && (o = cc11001100_hook("o", o || i, "assign"), i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", t, "assign")), x.ajax({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", n, "object-key-init"),
        dataType: cc11001100_hook("dataType", o, "object-key-init"),
        data: cc11001100_hook("data", r, "object-key-init"),
        success: cc11001100_hook("success", i, "object-key-init")
      });
    }, "assign");
  });
  function Mn(e, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i,
      o,
      a,
      s,
      l = cc11001100_hook("l", e.contents, "var-init"),
      u = cc11001100_hook("u", e.dataTypes, "var-init");
    while ("*" === u[0]) u.shift(), o === t && (o = cc11001100_hook("o", e.mimeType || n.getResponseHeader("Content-Type"), "assign"));
    if (o) for (s in l) if (l[s] && l[s].test(o)) {
      u.unshift(s);
      break;
    }
    if (u[0] in r) a = cc11001100_hook("a", u[0], "assign");else {
      for (s in r) {
        if (!u[0] || e.converters[s + " " + u[0]]) {
          a = cc11001100_hook("a", s, "assign");
          break;
        }
        i || (i = cc11001100_hook("i", s, "assign"));
      }
      a = cc11001100_hook("a", a || i, "assign");
    }
    return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
  }
  function On(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i,
      o,
      a,
      s,
      l,
      u = cc11001100_hook("u", {}, "var-init"),
      c = cc11001100_hook("c", e.dataTypes.slice(), "var-init");
    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = cc11001100_hook("u[a.toLowerCase()]", e.converters[a], "assign");
    o = cc11001100_hook("o", c.shift(), "assign");
    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = cc11001100_hook("n[e.responseFields[o]]", t, "assign")), !l && r && e.dataFilter && (t = cc11001100_hook("t", e.dataFilter(t, e.dataType), "assign")), l = cc11001100_hook("l", o, "assign"), o = cc11001100_hook("o", c.shift(), "assign")) if ("*" === o) o = cc11001100_hook("o", l, "assign");else if ("*" !== l && l !== o) {
      if (a = cc11001100_hook("a", u[l + " " + o] || u["* " + o], "assign"), !a) for (i in u) if (s = cc11001100_hook("s", i.split(" "), "assign"), s[1] === o && (a = cc11001100_hook("a", u[l + " " + s[0]] || u["* " + s[0]], "assign"))) {
        a === !0 ? a = cc11001100_hook("a", u[i], "assign") : u[i] !== !0 && (o = cc11001100_hook("o", s[0], "assign"), c.unshift(s[1]));
        break;
      }
      if (a !== !0) if (a && e["throws"]) t = cc11001100_hook("t", a(t), "assign");else try {
        t = cc11001100_hook("t", a(t), "assign");
      } catch (p) {
        return {
          state: cc11001100_hook("state", "parsererror", "object-key-init"),
          error: cc11001100_hook("error", a ? p : "No conversion from " + l + " to " + o, "object-key-init")
        };
      }
    }
    return {
      state: cc11001100_hook("state", "success", "object-key-init"),
      data: cc11001100_hook("data", t, "object-key-init")
    };
  }
  x.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /(?:java|ecma)script/, "object-key-init")
    },
    converters: {
      "text script": function (e) {
        return x.globalEval(e), e;
      }
    }
  }), x.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = cc11001100_hook("e.cache", !1, "assign")), e.crossDomain && (e.type = cc11001100_hook("e.type", "GET", "assign"), e.global = cc11001100_hook("e.global", !1, "assign"));
  }), x.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
        r = cc11001100_hook("r", a.head || x("head")[0] || a.documentElement, "var-init");
      return {
        send: function (t, i) {
          n = cc11001100_hook("n", a.createElement("script"), "assign"), n.async = cc11001100_hook("n.async", !0, "assign"), e.scriptCharset && (n.charset = cc11001100_hook("n.charset", e.scriptCharset, "assign")), n.src = cc11001100_hook("n.src", e.url, "assign"), n.onload = cc11001100_hook("n.onload", n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = cc11001100_hook("n.onload", n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), "assign"), n.parentNode && n.parentNode.removeChild(n), n = cc11001100_hook("n", null, "assign"), t || i(200, "success"));
          }, "assign"), "assign"), r.insertBefore(n, r.firstChild);
        },
        abort: function () {
          n && n.onload(t, !0);
        }
      };
    }
  });
  var Fn = cc11001100_hook("Fn", [], "var-init"),
    Bn = cc11001100_hook("Bn", /(=)\?(?=&|$)|\?\?/, "var-init");
  x.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var e = cc11001100_hook("e", Fn.pop() || x.expando + "_" + vn++, "var-init");
      return this[e] = cc11001100_hook("this[e]", !0, "assign"), e;
    }
  }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o,
      a,
      s,
      l = cc11001100_hook("l", n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"), "var-init");
    return l || "jsonp" === n.dataTypes[0] ? (o = cc11001100_hook("o", n.jsonpCallback = cc11001100_hook("n.jsonpCallback", x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, "assign"), "assign"), l ? n[l] = cc11001100_hook("n[l]", n[l].replace(Bn, "$1" + o), "assign") : n.jsonp !== !1 && (n.url += cc11001100_hook("n.url", (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o, "assign")), n.converters["script json"] = cc11001100_hook("n.converters[\"script json\"]", function () {
      return s || x.error(o + " was not called"), s[0];
    }, "assign"), n.dataTypes[0] = cc11001100_hook("n.dataTypes[0]", "json", "assign"), a = cc11001100_hook("a", e[o], "assign"), e[o] = cc11001100_hook("e[o]", function () {
      s = cc11001100_hook("s", arguments, "assign");
    }, "assign"), i.always(function () {
      e[o] = cc11001100_hook("e[o]", a, "assign"), n[o] && (n.jsonpCallback = cc11001100_hook("n.jsonpCallback", r.jsonpCallback, "assign"), Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = cc11001100_hook("s", a = cc11001100_hook("a", t, "assign"), "assign");
    }), "script") : t;
  });
  var Pn,
    Rn,
    Wn = cc11001100_hook("Wn", 0, "var-init"),
    $n = cc11001100_hook("$n", e.ActiveXObject && function () {
      var e;
      for (e in Pn) Pn[e](t, !0);
    }, "var-init");
  function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  x.ajaxSettings.xhr = cc11001100_hook("x.ajaxSettings.xhr", e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn();
  } : In, "assign"), Rn = cc11001100_hook("Rn", x.ajaxSettings.xhr(), "assign"), x.support.cors = cc11001100_hook("x.support.cors", !!Rn && "withCredentials" in Rn, "assign"), Rn = cc11001100_hook("Rn", x.support.ajax = cc11001100_hook("x.support.ajax", !!Rn, "assign"), "assign"), Rn && x.ajaxTransport(function (n) {
    if (!n.crossDomain || x.support.cors) {
      var r;
      return {
        send: function (i, o) {
          var a,
            s,
            l = cc11001100_hook("l", n.xhr(), "var-init");
          if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = cc11001100_hook("l[s]", n.xhrFields[s], "assign");
          n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = cc11001100_hook("i[\"X-Requested-With\"]", "XMLHttpRequest", "assign"));
          try {
            for (s in i) l.setRequestHeader(s, i[s]);
          } catch (u) {}
          l.send(n.hasContent && n.data || null), r = cc11001100_hook("r", function (e, i) {
            var s, u, c, p;
            try {
              if (r && (i || 4 === l.readyState)) if (r = cc11001100_hook("r", t, "assign"), a && (l.onreadystatechange = cc11001100_hook("l.onreadystatechange", x.noop, "assign"), $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();else {
                p = cc11001100_hook("p", {}, "assign"), s = cc11001100_hook("s", l.status, "assign"), u = cc11001100_hook("u", l.getAllResponseHeaders(), "assign"), "string" == typeof l.responseText && (p.text = cc11001100_hook("p.text", l.responseText, "assign"));
                try {
                  c = cc11001100_hook("c", l.statusText, "assign");
                } catch (f) {
                  c = cc11001100_hook("c", "", "assign");
                }
                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = cc11001100_hook("s", 204, "assign")) : s = cc11001100_hook("s", p.text ? 200 : 404, "assign");
              }
            } catch (d) {
              i || o(-1, d);
            }
            p && o(s, c, p, u);
          }, "assign"), n.async ? 4 === l.readyState ? setTimeout(r) : (a = cc11001100_hook("a", ++Wn, "assign"), $n && (Pn || (Pn = cc11001100_hook("Pn", {}, "assign"), x(e).unload($n)), Pn[a] = cc11001100_hook("Pn[a]", r, "assign")), l.onreadystatechange = cc11001100_hook("l.onreadystatechange", r, "assign")) : r();
        },
        abort: function () {
          r && r(t, !0);
        }
      };
    }
  });
  var Xn,
    Un,
    Vn = cc11001100_hook("Vn", /^(?:toggle|show|hide)$/, "var-init"),
    Yn = cc11001100_hook("Yn", RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), "var-init"),
    Jn = cc11001100_hook("Jn", /queueHooks$/, "var-init"),
    Gn = cc11001100_hook("Gn", [nr], "var-init"),
    Qn = cc11001100_hook("Qn", {
      "*": cc11001100_hook("*", [function (e, t) {
        var n = cc11001100_hook("n", this.createTween(e, t), "var-init"),
          r = cc11001100_hook("r", n.cur(), "var-init"),
          i = cc11001100_hook("i", Yn.exec(t), "var-init"),
          o = cc11001100_hook("o", i && i[3] || (x.cssNumber[e] ? "" : "px"), "var-init"),
          a = cc11001100_hook("a", (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), "var-init"),
          s = cc11001100_hook("s", 1, "var-init"),
          l = cc11001100_hook("l", 20, "var-init");
        if (a && a[3] !== o) {
          o = cc11001100_hook("o", o || a[3], "assign"), i = cc11001100_hook("i", i || [], "assign"), a = cc11001100_hook("a", +r || 1, "assign");
          do s = cc11001100_hook("s", s || ".5", "assign"), a /= cc11001100_hook("a", s, "assign"), x.style(n.elem, e, a + o); while (s !== (s = cc11001100_hook("s", n.cur() / r, "assign")) && 1 !== s && --l);
        }
        return i && (a = cc11001100_hook("a", n.start = cc11001100_hook("n.start", +a || +r || 0, "assign"), "assign"), n.unit = cc11001100_hook("n.unit", o, "assign"), n.end = cc11001100_hook("n.end", i[1] ? a + (i[1] + 1) * i[2] : +i[2], "assign")), n;
      }], "object-key-init")
    }, "var-init");
  function Kn() {
    return setTimeout(function () {
      Xn = cc11001100_hook("Xn", t, "assign");
    }), Xn = cc11001100_hook("Xn", x.now(), "assign");
  }
  function Zn(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i = cc11001100_hook("i", (Qn[t] || []).concat(Qn["*"]), "var-init"),
      o = cc11001100_hook("o", 0, "var-init"),
      a = cc11001100_hook("a", i.length, "var-init");
    for (; a > o; o++) if (r = cc11001100_hook("r", i[o].call(n, t, e), "assign")) return r;
  }
  function er(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", 0, "var-init"),
      a = cc11001100_hook("a", Gn.length, "var-init"),
      s = cc11001100_hook("s", x.Deferred().always(function () {
        delete l.elem;
      }), "var-init"),
      l = function () {
        if (i) return !1;
        var t = cc11001100_hook("t", Xn || Kn(), "var-init"),
          n = cc11001100_hook("n", Math.max(0, u.startTime + u.duration - t), "var-init"),
          r = cc11001100_hook("r", n / u.duration || 0, "var-init"),
          o = cc11001100_hook("o", 1 - r, "var-init"),
          a = cc11001100_hook("a", 0, "var-init"),
          l = cc11001100_hook("l", u.tweens.length, "var-init");
        for (; l > a; a++) u.tweens[a].run(o);
        return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
      },
      u = cc11001100_hook("u", s.promise({
        elem: cc11001100_hook("elem", e, "object-key-init"),
        props: cc11001100_hook("props", x.extend({}, t), "object-key-init"),
        opts: cc11001100_hook("opts", x.extend(!0, {
          specialEasing: {}
        }, n), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", t, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", n, "object-key-init"),
        startTime: cc11001100_hook("startTime", Xn || Kn(), "object-key-init"),
        duration: cc11001100_hook("duration", n.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (t, n) {
          var r = cc11001100_hook("r", x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing), "var-init");
          return u.tweens.push(r), r;
        },
        stop: function (t) {
          var n = cc11001100_hook("n", 0, "var-init"),
            r = cc11001100_hook("r", t ? u.tweens.length : 0, "var-init");
          if (i) return this;
          for (i = cc11001100_hook("i", !0, "assign"); r > n; n++) u.tweens[n].run(1);
          return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
        }
      }), "var-init"),
      c = cc11001100_hook("c", u.props, "var-init");
    for (tr(c, u.opts.specialEasing); a > o; o++) if (r = cc11001100_hook("r", Gn[o].call(u, e, c, u.opts), "assign")) return r;
    return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
      elem: cc11001100_hook("elem", e, "object-key-init"),
      anim: cc11001100_hook("anim", u, "object-key-init"),
      queue: cc11001100_hook("queue", u.opts.queue, "object-key-init")
    })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }
  function tr(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i, o, a;
    for (n in e) if (r = cc11001100_hook("r", x.camelCase(n), "assign"), i = cc11001100_hook("i", t[r], "assign"), o = cc11001100_hook("o", e[n], "assign"), x.isArray(o) && (i = cc11001100_hook("i", o[1], "assign"), o = cc11001100_hook("o", e[n] = cc11001100_hook("e[n]", o[0], "assign"), "assign")), n !== r && (e[r] = cc11001100_hook("e[r]", o, "assign"), delete e[n]), a = cc11001100_hook("a", x.cssHooks[r], "assign"), a && "expand" in a) {
      o = cc11001100_hook("o", a.expand(o), "assign"), delete e[r];
      for (n in o) n in e || (e[n] = cc11001100_hook("e[n]", o[n], "assign"), t[n] = cc11001100_hook("t[n]", i, "assign"));
    } else t[r] = cc11001100_hook("t[r]", i, "assign");
  }
  x.Animation = cc11001100_hook("x.Animation", x.extend(er, {
    tweener: function (e, t) {
      x.isFunction(e) ? (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", ["*"], "assign")) : e = cc11001100_hook("e", e.split(" "), "assign");
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", e.length, "var-init");
      for (; i > r; r++) n = cc11001100_hook("n", e[r], "assign"), Qn[n] = cc11001100_hook("Qn[n]", Qn[n] || [], "assign"), Qn[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? Gn.unshift(e) : Gn.push(e);
    }
  }), "assign");
  function nr(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o,
      a,
      s,
      l,
      u = cc11001100_hook("u", this, "var-init"),
      c = cc11001100_hook("c", {}, "var-init"),
      p = cc11001100_hook("p", e.style, "var-init"),
      f = cc11001100_hook("f", e.nodeType && nn(e), "var-init"),
      d = cc11001100_hook("d", x._data(e, "fxshow"), "var-init");
    n.queue || (s = cc11001100_hook("s", x._queueHooks(e, "fx"), "assign"), null == s.unqueued && (s.unqueued = cc11001100_hook("s.unqueued", 0, "assign"), l = cc11001100_hook("l", s.empty.fire, "assign"), s.empty.fire = cc11001100_hook("s.empty.fire", function () {
      s.unqueued || l();
    }, "assign")), s.unqueued++, u.always(function () {
      u.always(function () {
        s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = cc11001100_hook("n.overflow", [p.overflow, p.overflowX, p.overflowY], "assign"), "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = cc11001100_hook("p.zoom", 1, "assign") : p.display = cc11001100_hook("p.display", "inline-block", "assign"))), n.overflow && (p.overflow = cc11001100_hook("p.overflow", "hidden", "assign"), x.support.shrinkWrapBlocks || u.always(function () {
      p.overflow = cc11001100_hook("p.overflow", n.overflow[0], "assign"), p.overflowX = cc11001100_hook("p.overflowX", n.overflow[1], "assign"), p.overflowY = cc11001100_hook("p.overflowY", n.overflow[2], "assign");
    }));
    for (r in t) if (i = cc11001100_hook("i", t[r], "assign"), Vn.exec(i)) {
      if (delete t[r], o = cc11001100_hook("o", o || "toggle" === i, "assign"), i === (f ? "hide" : "show")) continue;
      c[r] = cc11001100_hook("c[r]", d && d[r] || x.style(e, r), "assign");
    }
    if (!x.isEmptyObject(c)) {
      d ? "hidden" in d && (f = cc11001100_hook("f", d.hidden, "assign")) : d = cc11001100_hook("d", x._data(e, "fxshow", {}), "assign"), o && (d.hidden = cc11001100_hook("d.hidden", !f, "assign")), f ? x(e).show() : u.done(function () {
        x(e).hide();
      }), u.done(function () {
        var t;
        x._removeData(e, "fxshow");
        for (t in c) x.style(e, t, c[t]);
      });
      for (r in c) a = cc11001100_hook("a", Zn(f ? d[r] : 0, r, u), "assign"), r in d || (d[r] = cc11001100_hook("d[r]", a.start, "assign"), f && (a.end = cc11001100_hook("a.end", a.start, "assign"), a.start = cc11001100_hook("a.start", "width" === r || "height" === r ? 1 : 0, "assign")));
    }
  }
  function rr(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    return new rr.prototype.init(e, t, n, r, i);
  }
  x.Tween = cc11001100_hook("x.Tween", rr, "assign"), rr.prototype = cc11001100_hook("rr.prototype", {
    constructor: cc11001100_hook("constructor", rr, "object-key-init"),
    init: function (e, t, n, r, i, o) {
      this.elem = cc11001100_hook("this.elem", e, "assign"), this.prop = cc11001100_hook("this.prop", n, "assign"), this.easing = cc11001100_hook("this.easing", i || "swing", "assign"), this.options = cc11001100_hook("this.options", t, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", r, "assign"), this.unit = cc11001100_hook("this.unit", o || (x.cssNumber[n] ? "" : "px"), "assign");
    },
    cur: function () {
      var e = cc11001100_hook("e", rr.propHooks[this.prop], "var-init");
      return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = cc11001100_hook("n", rr.propHooks[this.prop], "var-init");
      return this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * t + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
    }
  }, "assign"), rr.prototype.init.prototype = cc11001100_hook("rr.prototype.init.prototype", rr.prototype, "assign"), rr.propHooks = cc11001100_hook("rr.propHooks", {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = cc11001100_hook("t", x.css(e.elem, e.prop, ""), "assign"), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      },
      set: function (e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign");
      }
    }
  }, "assign"), rr.propHooks.scrollTop = cc11001100_hook("rr.propHooks.scrollTop", rr.propHooks.scrollLeft = cc11001100_hook("rr.propHooks.scrollLeft", {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign"));
    }
  }, "assign"), "assign"), x.each(["toggle", "show", "hide"], function (e, t) {
    var n = cc11001100_hook("n", x.fn[t], "var-init");
    x.fn[t] = cc11001100_hook("x.fn[t]", function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
    }, "assign");
  }), x.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(nn).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", t, "object-key-init")
      }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = cc11001100_hook("i", x.isEmptyObject(e), "var-init"),
        o = cc11001100_hook("o", x.speed(t, n, r), "var-init"),
        a = function () {
          var t = cc11001100_hook("t", er(this, x.extend({}, e), o), "var-init");
          (i || x._data(this, "finish")) && t.stop(!0);
        };
      return a.finish = cc11001100_hook("a.finish", a, "assign"), i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (e, n, r) {
      var i = function (e) {
        var t = cc11001100_hook("t", e.stop, "var-init");
        delete e.stop, t(r);
      };
      return "string" != typeof e && (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", t, "assign")), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = cc11001100_hook("t", !0, "var-init"),
          n = cc11001100_hook("n", null != e && e + "queueHooks", "var-init"),
          o = cc11001100_hook("o", x.timers, "var-init"),
          a = cc11001100_hook("a", x._data(this), "var-init");
        if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        for (n = cc11001100_hook("n", o.length, "assign"); n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = cc11001100_hook("t", !1, "assign"), o.splice(n, 1));
        (t || !r) && x.dequeue(this, e);
      });
    },
    finish: function (e) {
      return e !== !1 && (e = cc11001100_hook("e", e || "fx", "assign")), this.each(function () {
        var t,
          n = cc11001100_hook("n", x._data(this), "var-init"),
          r = cc11001100_hook("r", n[e + "queue"], "var-init"),
          i = cc11001100_hook("i", n[e + "queueHooks"], "var-init"),
          o = cc11001100_hook("o", x.timers, "var-init"),
          a = cc11001100_hook("a", r ? r.length : 0, "var-init");
        for (n.finish = cc11001100_hook("n.finish", !0, "assign"), x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = cc11001100_hook("t", o.length, "assign"); t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = cc11001100_hook("t", 0, "assign"); a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  });
  function ir(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r = cc11001100_hook("r", {
        height: cc11001100_hook("height", e, "object-key-init")
      }, "var-init"),
      i = cc11001100_hook("i", 0, "var-init");
    for (t = cc11001100_hook("t", t ? 1 : 0, "assign"); 4 > i; i += cc11001100_hook("i", 2 - t, "assign")) n = cc11001100_hook("n", Zt[i], "assign"), r["margin" + n] = cc11001100_hook("r[\"margin\" + n]", r["padding" + n] = cc11001100_hook("r[\"padding\" + n]", e, "assign"), "assign");
    return t && (r.opacity = cc11001100_hook("r.opacity", r.width = cc11001100_hook("r.width", e, "assign"), "assign")), r;
  }
  x.each({
    slideDown: cc11001100_hook("slideDown", ir("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", ir("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", ir("toggle"), "object-key-init"),
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
    x.fn[e] = cc11001100_hook("x.fn[e]", function (e, n, r) {
      return this.animate(t, e, n, r);
    }, "assign");
  }), x.speed = cc11001100_hook("x.speed", function (e, t, n) {
    var r = cc11001100_hook("r", e && "object" == typeof e ? x.extend({}, e) : {
      complete: cc11001100_hook("complete", n || !n && t || x.isFunction(e) && e, "object-key-init"),
      duration: cc11001100_hook("duration", e, "object-key-init"),
      easing: cc11001100_hook("easing", n && t || t && !x.isFunction(t) && t, "object-key-init")
    }, "var-init");
    return r.duration = cc11001100_hook("r.duration", x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, "assign"), (null == r.queue || r.queue === !0) && (r.queue = cc11001100_hook("r.queue", "fx", "assign")), r.old = cc11001100_hook("r.old", r.complete, "assign"), r.complete = cc11001100_hook("r.complete", function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, "assign"), r;
  }, "assign"), x.easing = cc11001100_hook("x.easing", {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, "assign"), x.timers = cc11001100_hook("x.timers", [], "assign"), x.fx = cc11001100_hook("x.fx", rr.prototype.init, "assign"), x.fx.tick = cc11001100_hook("x.fx.tick", function () {
    var e,
      n = cc11001100_hook("n", x.timers, "var-init"),
      r = cc11001100_hook("r", 0, "var-init");
    for (Xn = cc11001100_hook("Xn", x.now(), "assign"); n.length > r; r++) e = cc11001100_hook("e", n[r], "assign"), e() || n[r] !== e || n.splice(r--, 1);
    n.length || x.fx.stop(), Xn = cc11001100_hook("Xn", t, "assign");
  }, "assign"), x.fx.timer = cc11001100_hook("x.fx.timer", function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, "assign"), x.fx.interval = cc11001100_hook("x.fx.interval", 13, "assign"), x.fx.start = cc11001100_hook("x.fx.start", function () {
    Un || (Un = cc11001100_hook("Un", setInterval(x.fx.tick, x.fx.interval), "assign"));
  }, "assign"), x.fx.stop = cc11001100_hook("x.fx.stop", function () {
    clearInterval(Un), Un = cc11001100_hook("Un", null, "assign");
  }, "assign"), x.fx.speeds = cc11001100_hook("x.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"), x.fx.step = cc11001100_hook("x.fx.step", {}, "assign"), x.expr && x.expr.filters && (x.expr.filters.animated = cc11001100_hook("x.expr.filters.animated", function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }, "assign")), x.fn.offset = cc11001100_hook("x.fn.offset", function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      x.offset.setOffset(this, e, t);
    });
    var n,
      r,
      o = cc11001100_hook("o", {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      }, "var-init"),
      a = cc11001100_hook("a", this[0], "var-init"),
      s = cc11001100_hook("s", a && a.ownerDocument, "var-init");
    if (s) return n = cc11001100_hook("n", s.documentElement, "assign"), x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = cc11001100_hook("o", a.getBoundingClientRect(), "assign")), r = cc11001100_hook("r", or(s), "assign"), {
      top: cc11001100_hook("top", o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), "object-key-init"),
      left: cc11001100_hook("left", o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0), "object-key-init")
    }) : o;
  }, "assign"), x.offset = cc11001100_hook("x.offset", {
    setOffset: function (e, t, n) {
      var r = cc11001100_hook("r", x.css(e, "position"), "var-init");
      "static" === r && (e.style.position = cc11001100_hook("e.style.position", "relative", "assign"));
      var i = cc11001100_hook("i", x(e), "var-init"),
        o = cc11001100_hook("o", i.offset(), "var-init"),
        a = cc11001100_hook("a", x.css(e, "top"), "var-init"),
        s = cc11001100_hook("s", x.css(e, "left"), "var-init"),
        l = cc11001100_hook("l", ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, "var-init"),
        u = cc11001100_hook("u", {}, "var-init"),
        c = cc11001100_hook("c", {}, "var-init"),
        p,
        f;
      l ? (c = cc11001100_hook("c", i.position(), "assign"), p = cc11001100_hook("p", c.top, "assign"), f = cc11001100_hook("f", c.left, "assign")) : (p = cc11001100_hook("p", parseFloat(a) || 0, "assign"), f = cc11001100_hook("f", parseFloat(s) || 0, "assign")), x.isFunction(t) && (t = cc11001100_hook("t", t.call(e, n, o), "assign")), null != t.top && (u.top = cc11001100_hook("u.top", t.top - o.top + p, "assign")), null != t.left && (u.left = cc11001100_hook("u.left", t.left - o.left + f, "assign")), "using" in t ? t.using.call(e, u) : i.css(u);
    }
  }, "assign"), x.fn.extend({
    position: function () {
      if (this[0]) {
        var e,
          t,
          n = cc11001100_hook("n", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init"),
          r = cc11001100_hook("r", this[0], "var-init");
        return "fixed" === x.css(r, "position") ? t = cc11001100_hook("t", r.getBoundingClientRect(), "assign") : (e = cc11001100_hook("e", this.offsetParent(), "assign"), t = cc11001100_hook("t", this.offset(), "assign"), x.nodeName(e[0], "html") || (n = cc11001100_hook("n", e.offset(), "assign")), n.top += cc11001100_hook("n.top", x.css(e[0], "borderTopWidth", !0), "assign"), n.left += cc11001100_hook("n.left", x.css(e[0], "borderLeftWidth", !0), "assign")), {
          top: cc11001100_hook("top", t.top - n.top - x.css(r, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", t.left - n.left - x.css(r, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", this.offsetParent || s, "var-init");
        while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = cc11001100_hook("e", e.offsetParent, "assign");
        return e || s;
      });
    }
  }), x.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (e, n) {
    var r = cc11001100_hook("r", /Y/.test(n), "var-init");
    x.fn[e] = cc11001100_hook("x.fn[e]", function (i) {
      return x.access(this, function (e, i, o) {
        var a = cc11001100_hook("a", or(e), "var-init");
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = cc11001100_hook("e[i]", o, "assign"), t);
      }, e, i, arguments.length, null);
    }, "assign");
  });
  function or(e) {
    cc11001100_hook("e", e, "function-parameter");
    return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }
  x.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (e, n) {
    x.each({
      padding: cc11001100_hook("padding", "inner" + e, "object-key-init"),
      content: cc11001100_hook("content", n, "object-key-init"),
      "": cc11001100_hook("", "outer" + e, "object-key-init")
    }, function (r, i) {
      x.fn[i] = cc11001100_hook("x.fn[i]", function (i, o) {
        var a = cc11001100_hook("a", arguments.length && (r || "boolean" != typeof i), "var-init"),
          s = cc11001100_hook("s", r || (i === !0 || o === !0 ? "margin" : "border"), "var-init");
        return x.access(this, function (n, r, i) {
          var o;
          return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = cc11001100_hook("o", n.documentElement, "assign"), Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      }, "assign");
    });
  }), x.fn.size = cc11001100_hook("x.fn.size", function () {
    return this.length;
  }, "assign"), x.fn.andSelf = cc11001100_hook("x.fn.andSelf", x.fn.addBack, "assign"), "object" == typeof module && module && "object" == typeof module.exports ? module.exports = cc11001100_hook("module.exports", x, "assign") : (e.jQuery = cc11001100_hook("e.jQuery", e.$ = cc11001100_hook("e.$", x, "assign"), "assign"), "function" == typeof define && define.amd && define("jquery", [], function () {
    return x;
  }));
})(window);