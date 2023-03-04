/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function (e, t) {
  var n,
    r,
    i = cc11001100_hook("i", typeof t, "var-init"),
    o = cc11001100_hook("o", e.document, "var-init"),
    a = cc11001100_hook("a", e.location, "var-init"),
    s = cc11001100_hook("s", e.jQuery, "var-init"),
    u = cc11001100_hook("u", e.$, "var-init"),
    l = cc11001100_hook("l", {}, "var-init"),
    c = cc11001100_hook("c", [], "var-init"),
    p = cc11001100_hook("p", "1.9.1", "var-init"),
    f = cc11001100_hook("f", c.concat, "var-init"),
    d = cc11001100_hook("d", c.push, "var-init"),
    h = cc11001100_hook("h", c.slice, "var-init"),
    g = cc11001100_hook("g", c.indexOf, "var-init"),
    m = cc11001100_hook("m", l.toString, "var-init"),
    y = cc11001100_hook("y", l.hasOwnProperty, "var-init"),
    v = cc11001100_hook("v", p.trim, "var-init"),
    b = function (e, t) {
      return new b.fn.init(e, t, r);
    },
    x = cc11001100_hook("x", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    w = cc11001100_hook("w", /\S+/g, "var-init"),
    T = cc11001100_hook("T", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init"),
    N = cc11001100_hook("N", /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, "var-init"),
    C = cc11001100_hook("C", /^<(\w+)\s*\/?>(?:<\/\1>|)$/, "var-init"),
    k = cc11001100_hook("k", /^[\],:{}\s]*$/, "var-init"),
    E = cc11001100_hook("E", /(?:^|:|,)(?:\s*\[)+/g, "var-init"),
    S = cc11001100_hook("S", /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "var-init"),
    A = cc11001100_hook("A", /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "var-init"),
    j = cc11001100_hook("j", /^-ms-/, "var-init"),
    D = cc11001100_hook("D", /-([\da-z])/gi, "var-init"),
    L = function (e, t) {
      return t.toUpperCase();
    },
    H = function (e) {
      (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready());
    },
    q = function () {
      o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H));
    };
  b.fn = cc11001100_hook("b.fn", b.prototype = cc11001100_hook("b.prototype", {
    jquery: cc11001100_hook("jquery", p, "object-key-init"),
    constructor: cc11001100_hook("constructor", b, "object-key-init"),
    init: function (e, n, r) {
      var i, a;
      if (!e) return this;
      if ("string" == typeof e) {
        if (i = cc11001100_hook("i", "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), "assign"), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
        if (i[1]) {
          if (n = cc11001100_hook("n", n instanceof b ? n[0] : n, "assign"), b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          return this;
        }
        if (a = cc11001100_hook("a", o.getElementById(i[2]), "assign"), a && a.parentNode) {
          if (a.id !== i[2]) return r.find(e);
          this.length = cc11001100_hook("this.length", 1, "assign"), this[0] = cc11001100_hook("this[0]", a, "assign");
        }
        return this.context = cc11001100_hook("this.context", o, "assign"), this.selector = cc11001100_hook("this.selector", e, "assign"), this;
      }
      return e.nodeType ? (this.context = cc11001100_hook("this.context", this[0] = cc11001100_hook("this[0]", e, "assign"), "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = cc11001100_hook("this.selector", e.selector, "assign"), this.context = cc11001100_hook("this.context", e.context, "assign")), b.makeArray(e, this));
    },
    selector: cc11001100_hook("selector", "", "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    size: function () {
      return this.length;
    },
    toArray: function () {
      return h.call(this);
    },
    get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function (e) {
      var t = cc11001100_hook("t", b.merge(this.constructor(), e), "var-init");
      return t.prevObject = cc11001100_hook("t.prevObject", this, "assign"), t.context = cc11001100_hook("t.context", this.context, "assign"), t;
    },
    each: function (e, t) {
      return b.each(this, e, t);
    },
    ready: function (e) {
      return b.ready.promise().done(e), this;
    },
    slice: function () {
      return this.pushStack(h.apply(this, arguments));
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
      return this.pushStack(b.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: cc11001100_hook("push", d, "object-key-init"),
    sort: cc11001100_hook("sort", [].sort, "object-key-init"),
    splice: cc11001100_hook("splice", [].splice, "object-key-init")
  }, "assign"), "assign"), b.fn.init.prototype = cc11001100_hook("b.fn.init.prototype", b.fn, "assign"), b.extend = cc11001100_hook("b.extend", b.fn.extend = cc11001100_hook("b.fn.extend", function () {
    var e,
      n,
      r,
      i,
      o,
      a,
      s = cc11001100_hook("s", arguments[0] || {}, "var-init"),
      u = cc11001100_hook("u", 1, "var-init"),
      l = cc11001100_hook("l", arguments.length, "var-init"),
      c = cc11001100_hook("c", !1, "var-init");
    for ("boolean" == typeof s && (c = cc11001100_hook("c", s, "assign"), s = cc11001100_hook("s", arguments[1] || {}, "assign"), u = cc11001100_hook("u", 2, "assign")), "object" == typeof s || b.isFunction(s) || (s = cc11001100_hook("s", {}, "assign")), l === u && (s = cc11001100_hook("s", this, "assign"), --u); l > u; u++) if (null != (o = cc11001100_hook("o", arguments[u], "assign"))) for (i in o) e = cc11001100_hook("e", s[i], "assign"), r = cc11001100_hook("r", o[i], "assign"), s !== r && (c && r && (b.isPlainObject(r) || (n = cc11001100_hook("n", b.isArray(r), "assign"))) ? (n ? (n = cc11001100_hook("n", !1, "assign"), a = cc11001100_hook("a", e && b.isArray(e) ? e : [], "assign")) : a = cc11001100_hook("a", e && b.isPlainObject(e) ? e : {}, "assign"), s[i] = cc11001100_hook("s[i]", b.extend(c, a, r), "assign")) : r !== t && (s[i] = cc11001100_hook("s[i]", r, "assign")));
    return s;
  }, "assign"), "assign"), b.extend({
    noConflict: function (t) {
      return e.$ === b && (e.$ = cc11001100_hook("e.$", u, "assign")), t && e.jQuery === b && (e.jQuery = cc11001100_hook("e.jQuery", s, "assign")), b;
    },
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    holdReady: function (e) {
      e ? b.readyWait++ : b.ready(!0);
    },
    ready: function (e) {
      if (e === !0 ? ! --b.readyWait : !b.isReady) {
        if (!o.body) return setTimeout(b.ready);
        b.isReady = cc11001100_hook("b.isReady", !0, "assign"), e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"));
      }
    },
    isFunction: function (e) {
      return "function" === b.type(e);
    },
    isArray: cc11001100_hook("isArray", Array.isArray || function (e) {
      return "array" === b.type(e);
    }, "object-key-init"),
    isWindow: function (e) {
      return null != e && e == e.window;
    },
    isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e;
    },
    isPlainObject: function (e) {
      if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
      try {
        if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (n) {
        return !1;
      }
      var r;
      for (r in e);
      return r === t || y.call(e, r);
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
      "boolean" == typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", !1, "assign")), t = cc11001100_hook("t", t || o, "assign");
      var r = cc11001100_hook("r", C.exec(e), "var-init"),
        i = cc11001100_hook("i", !n && [], "var-init");
      return r ? [t.createElement(r[1])] : (r = cc11001100_hook("r", b.buildFragment([e], t, i), "assign"), i && b(i).remove(), b.merge([], r.childNodes));
    },
    parseJSON: function (n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = cc11001100_hook("n", b.trim(n), "assign"), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t);
    },
    parseXML: function (n) {
      var r, i;
      if (!n || "string" != typeof n) return null;
      try {
        e.DOMParser ? (i = cc11001100_hook("i", new DOMParser(), "assign"), r = cc11001100_hook("r", i.parseFromString(n, "text/xml"), "assign")) : (r = cc11001100_hook("r", new ActiveXObject("Microsoft.XMLDOM"), "assign"), r.async = cc11001100_hook("r.async", "false", "assign"), r.loadXML(n));
      } catch (o) {
        r = cc11001100_hook("r", t, "assign");
      }
      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r;
    },
    noop: function () {},
    globalEval: function (t) {
      t && b.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function (e) {
      return e.replace(j, "ms-").replace(D, L);
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
    trim: cc11001100_hook("trim", v && !v.call("\ufeff\u00a0") ? function (e) {
      return null == e ? "" : v.call(e);
    } : function (e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, "object-key-init"),
    makeArray: function (e, t) {
      var n = cc11001100_hook("n", t || [], "var-init");
      return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      var r;
      if (t) {
        if (g) return g.call(t, e, n);
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
      return f.apply([], s);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    proxy: function (e, n) {
      var r, i, o;
      return "string" == typeof n && (o = cc11001100_hook("o", e[n], "assign"), n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", o, "assign")), b.isFunction(e) ? (r = cc11001100_hook("r", h.call(arguments, 2), "assign"), i = cc11001100_hook("i", function () {
        return e.apply(n || this, r.concat(h.call(arguments)));
      }, "assign"), i.guid = cc11001100_hook("i.guid", e.guid = cc11001100_hook("e.guid", e.guid || b.guid++, "assign"), "assign"), i) : t;
    },
    access: function (e, n, r, i, o, a, s) {
      var u = cc11001100_hook("u", 0, "var-init"),
        l = cc11001100_hook("l", e.length, "var-init"),
        c = cc11001100_hook("c", null == r, "var-init");
      if ("object" === b.type(r)) {
        o = cc11001100_hook("o", !0, "assign");
        for (u in r) b.access(e, n, u, r[u], !0, a, s);
      } else if (i !== t && (o = cc11001100_hook("o", !0, "assign"), b.isFunction(i) || (s = cc11001100_hook("s", !0, "assign")), c && (s ? (n.call(e, i), n = cc11001100_hook("n", null, "assign")) : (c = cc11001100_hook("c", n, "assign"), n = cc11001100_hook("n", function (e, t, n) {
        return c.call(b(e), n);
      }, "assign"))), n)) for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
      return o ? e : c ? n.call(e) : l ? n(e[0], r) : a;
    },
    now: function () {
      return new Date().getTime();
    }
  }), b.ready.promise = cc11001100_hook("b.ready.promise", function (t) {
    if (!n) if (n = cc11001100_hook("n", b.Deferred(), "assign"), "complete" === o.readyState) setTimeout(b.ready);else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);else {
      o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
      var r = cc11001100_hook("r", !1, "var-init");
      try {
        r = cc11001100_hook("r", null == e.frameElement && o.documentElement, "assign");
      } catch (i) {}
      r && r.doScroll && function a() {
        if (!b.isReady) {
          try {
            r.doScroll("left");
          } catch (e) {
            return setTimeout(a, 50);
          }
          q(), b.ready();
        }
      }();
    }
    return n.promise(t);
  }, "assign"), b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    l["[object " + t + "]"] = cc11001100_hook("l[\"[object \" + t + \"]\"]", t.toLowerCase(), "assign");
  });
  function M(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.length, "var-init"),
      n = cc11001100_hook("n", b.type(e), "var-init");
    return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  r = cc11001100_hook("r", b(o), "assign");
  var _ = cc11001100_hook("_", {}, "var-init");
  function F(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", _[e] = cc11001100_hook("_[e]", {}, "assign"), "var-init");
    return b.each(e.match(w) || [], function (e, n) {
      t[n] = cc11001100_hook("t[n]", !0, "assign");
    }), t;
  }
  b.Callbacks = cc11001100_hook("b.Callbacks", function (e) {
    e = cc11001100_hook("e", "string" == typeof e ? _[e] || F(e) : b.extend({}, e), "assign");
    var n,
      r,
      i,
      o,
      a,
      s,
      u = cc11001100_hook("u", [], "var-init"),
      l = cc11001100_hook("l", !e.once && [], "var-init"),
      c = function (t) {
        for (r = cc11001100_hook("r", e.memory && t, "assign"), i = cc11001100_hook("i", !0, "assign"), a = cc11001100_hook("a", s || 0, "assign"), s = cc11001100_hook("s", 0, "assign"), o = cc11001100_hook("o", u.length, "assign"), n = cc11001100_hook("n", !0, "assign"); u && o > a; a++) if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          r = cc11001100_hook("r", !1, "assign");
          break;
        }
        n = cc11001100_hook("n", !1, "assign"), u && (l ? l.length && c(l.shift()) : r ? u = cc11001100_hook("u", [], "assign") : p.disable());
      },
      p = cc11001100_hook("p", {
        add: function () {
          if (u) {
            var t = cc11001100_hook("t", u.length, "var-init");
            (function i(t) {
              b.each(t, function (t, n) {
                var r = cc11001100_hook("r", b.type(n), "var-init");
                "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n);
              });
            })(arguments), n ? o = cc11001100_hook("o", u.length, "assign") : r && (s = cc11001100_hook("s", t, "assign"), c(r));
          }
          return this;
        },
        remove: function () {
          return u && b.each(arguments, function (e, t) {
            var r;
            while ((r = cc11001100_hook("r", b.inArray(t, u, r), "assign")) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--);
          }), this;
        },
        has: function (e) {
          return e ? b.inArray(e, u) > -1 : !(!u || !u.length);
        },
        empty: function () {
          return u = cc11001100_hook("u", [], "assign"), this;
        },
        disable: function () {
          return u = cc11001100_hook("u", l = cc11001100_hook("l", r = cc11001100_hook("r", t, "assign"), "assign"), "assign"), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return l = cc11001100_hook("l", t, "assign"), r || p.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (e, t) {
          return t = cc11001100_hook("t", t || [], "assign"), t = cc11001100_hook("t", [e, t.slice ? t.slice() : t], "assign"), !u || i && !l || (n ? l.push(t) : c(t)), this;
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        }
      }, "var-init");
    return p;
  }, "assign"), b.extend({
    Deferred: function (e) {
      var t = cc11001100_hook("t", [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]], "var-init"),
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
            return b.Deferred(function (n) {
              b.each(t, function (t, o) {
                var a = cc11001100_hook("a", o[0], "var-init"),
                  s = cc11001100_hook("s", b.isFunction(e[t]) && e[t], "var-init");
                i[o[1]](function () {
                  var e = cc11001100_hook("e", s && s.apply(this, arguments), "var-init");
                  e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
                });
              }), e = cc11001100_hook("e", null, "assign");
            }).promise();
          },
          promise: function (e) {
            return null != e ? b.extend(e, r) : r;
          }
        }, "var-init"),
        i = cc11001100_hook("i", {}, "var-init");
      return r.pipe = cc11001100_hook("r.pipe", r.then, "assign"), b.each(t, function (e, o) {
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
        n = cc11001100_hook("n", h.call(arguments), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", 1 !== r || e && b.isFunction(e.promise) ? r : 0, "var-init"),
        o = cc11001100_hook("o", 1 === i ? e : b.Deferred(), "var-init"),
        a = function (e, t, n) {
          return function (r) {
            t[e] = cc11001100_hook("t[e]", this, "assign"), n[e] = cc11001100_hook("n[e]", arguments.length > 1 ? h.call(arguments) : r, "assign"), n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
          };
        },
        s,
        u,
        l;
      if (r > 1) for (s = cc11001100_hook("s", Array(r), "assign"), u = cc11001100_hook("u", Array(r), "assign"), l = cc11001100_hook("l", Array(r), "assign"); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
      return i || o.resolveWith(l, n), o.promise();
    }
  }), b.support = cc11001100_hook("b.support", function () {
    var t,
      n,
      r,
      a,
      s,
      u,
      l,
      c,
      p,
      f,
      d = cc11001100_hook("d", o.createElement("div"), "var-init");
    if (d.setAttribute("className", "t"), d.innerHTML = cc11001100_hook("d.innerHTML", "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", "assign"), n = cc11001100_hook("n", d.getElementsByTagName("*"), "assign"), r = cc11001100_hook("r", d.getElementsByTagName("a")[0], "assign"), !n || !r || !n.length) return {};
    s = cc11001100_hook("s", o.createElement("select"), "assign"), l = cc11001100_hook("l", s.appendChild(o.createElement("option")), "assign"), a = cc11001100_hook("a", d.getElementsByTagName("input")[0], "assign"), r.style.cssText = cc11001100_hook("r.style.cssText", "top:1px;float:left;opacity:.5", "assign"), t = cc11001100_hook("t", {
      getSetAttribute: cc11001100_hook("getSetAttribute", "t" !== d.className, "object-key-init"),
      leadingWhitespace: cc11001100_hook("leadingWhitespace", 3 === d.firstChild.nodeType, "object-key-init"),
      tbody: cc11001100_hook("tbody", !d.getElementsByTagName("tbody").length, "object-key-init"),
      htmlSerialize: cc11001100_hook("htmlSerialize", !!d.getElementsByTagName("link").length, "object-key-init"),
      style: cc11001100_hook("style", /top/.test(r.getAttribute("style")), "object-key-init"),
      hrefNormalized: cc11001100_hook("hrefNormalized", "/a" === r.getAttribute("href"), "object-key-init"),
      opacity: cc11001100_hook("opacity", /^0.5/.test(r.style.opacity), "object-key-init"),
      cssFloat: cc11001100_hook("cssFloat", !!r.style.cssFloat, "object-key-init"),
      checkOn: cc11001100_hook("checkOn", !!a.value, "object-key-init"),
      optSelected: cc11001100_hook("optSelected", l.selected, "object-key-init"),
      enctype: cc11001100_hook("enctype", !!o.createElement("form").enctype, "object-key-init"),
      html5Clone: cc11001100_hook("html5Clone", "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML, "object-key-init"),
      boxModel: cc11001100_hook("boxModel", "CSS1Compat" === o.compatMode, "object-key-init"),
      deleteExpando: cc11001100_hook("deleteExpando", !0, "object-key-init"),
      noCloneEvent: cc11001100_hook("noCloneEvent", !0, "object-key-init"),
      inlineBlockNeedsLayout: cc11001100_hook("inlineBlockNeedsLayout", !1, "object-key-init"),
      shrinkWrapBlocks: cc11001100_hook("shrinkWrapBlocks", !1, "object-key-init"),
      reliableMarginRight: cc11001100_hook("reliableMarginRight", !0, "object-key-init"),
      boxSizingReliable: cc11001100_hook("boxSizingReliable", !0, "object-key-init"),
      pixelPosition: cc11001100_hook("pixelPosition", !1, "object-key-init")
    }, "assign"), a.checked = cc11001100_hook("a.checked", !0, "assign"), t.noCloneChecked = cc11001100_hook("t.noCloneChecked", a.cloneNode(!0).checked, "assign"), s.disabled = cc11001100_hook("s.disabled", !0, "assign"), t.optDisabled = cc11001100_hook("t.optDisabled", !l.disabled, "assign");
    try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = cc11001100_hook("t.deleteExpando", !1, "assign");
    }
    a = cc11001100_hook("a", o.createElement("input"), "assign"), a.setAttribute("value", ""), t.input = cc11001100_hook("t.input", "" === a.getAttribute("value"), "assign"), a.value = cc11001100_hook("a.value", "t", "assign"), a.setAttribute("type", "radio"), t.radioValue = cc11001100_hook("t.radioValue", "t" === a.value, "assign"), a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = cc11001100_hook("u", o.createDocumentFragment(), "assign"), u.appendChild(a), t.appendChecked = cc11001100_hook("t.appendChecked", a.checked, "assign"), t.checkClone = cc11001100_hook("t.checkClone", u.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), d.attachEvent && (d.attachEvent("onclick", function () {
      t.noCloneEvent = cc11001100_hook("t.noCloneEvent", !1, "assign");
    }), d.cloneNode(!0).click());
    for (f in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      change: cc11001100_hook("change", !0, "object-key-init"),
      focusin: cc11001100_hook("focusin", !0, "object-key-init")
    }) d.setAttribute(c = cc11001100_hook("c", "on" + f, "assign"), "t"), t[f + "Bubbles"] = cc11001100_hook("t[f + \"Bubbles\"]", c in e || d.attributes[c].expando === !1, "assign");
    return d.style.backgroundClip = cc11001100_hook("d.style.backgroundClip", "content-box", "assign"), d.cloneNode(!0).style.backgroundClip = cc11001100_hook("d.cloneNode(!0).style.backgroundClip", "", "assign"), t.clearCloneStyle = cc11001100_hook("t.clearCloneStyle", "content-box" === d.style.backgroundClip, "assign"), b(function () {
      var n,
        r,
        a,
        s = cc11001100_hook("s", "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", "var-init"),
        u = cc11001100_hook("u", o.getElementsByTagName("body")[0], "var-init");
      u && (n = cc11001100_hook("n", o.createElement("div"), "assign"), n.style.cssText = cc11001100_hook("n.style.cssText", "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", "assign"), u.appendChild(n).appendChild(d), d.innerHTML = cc11001100_hook("d.innerHTML", "<table><tr><td></td><td>t</td></tr></table>", "assign"), a = cc11001100_hook("a", d.getElementsByTagName("td"), "assign"), a[0].style.cssText = cc11001100_hook("a[0].style.cssText", "padding:0;margin:0;border:0;display:none", "assign"), p = cc11001100_hook("p", 0 === a[0].offsetHeight, "assign"), a[0].style.display = cc11001100_hook("a[0].style.display", "", "assign"), a[1].style.display = cc11001100_hook("a[1].style.display", "none", "assign"), t.reliableHiddenOffsets = cc11001100_hook("t.reliableHiddenOffsets", p && 0 === a[0].offsetHeight, "assign"), d.innerHTML = cc11001100_hook("d.innerHTML", "", "assign"), d.style.cssText = cc11001100_hook("d.style.cssText", "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", "assign"), t.boxSizing = cc11001100_hook("t.boxSizing", 4 === d.offsetWidth, "assign"), t.doesNotIncludeMarginInBodyOffset = cc11001100_hook("t.doesNotIncludeMarginInBodyOffset", 1 !== u.offsetTop, "assign"), e.getComputedStyle && (t.pixelPosition = cc11001100_hook("t.pixelPosition", "1%" !== (e.getComputedStyle(d, null) || {}).top, "assign"), t.boxSizingReliable = cc11001100_hook("t.boxSizingReliable", "4px" === (e.getComputedStyle(d, null) || {
        width: cc11001100_hook("width", "4px", "object-key-init")
      }).width, "assign"), r = cc11001100_hook("r", d.appendChild(o.createElement("div")), "assign"), r.style.cssText = cc11001100_hook("r.style.cssText", d.style.cssText = cc11001100_hook("d.style.cssText", s, "assign"), "assign"), r.style.marginRight = cc11001100_hook("r.style.marginRight", r.style.width = cc11001100_hook("r.style.width", "0", "assign"), "assign"), d.style.width = cc11001100_hook("d.style.width", "1px", "assign"), t.reliableMarginRight = cc11001100_hook("t.reliableMarginRight", !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), "assign")), typeof d.style.zoom !== i && (d.innerHTML = cc11001100_hook("d.innerHTML", "", "assign"), d.style.cssText = cc11001100_hook("d.style.cssText", s + "width:1px;padding:1px;display:inline;zoom:1", "assign"), t.inlineBlockNeedsLayout = cc11001100_hook("t.inlineBlockNeedsLayout", 3 === d.offsetWidth, "assign"), d.style.display = cc11001100_hook("d.style.display", "block", "assign"), d.innerHTML = cc11001100_hook("d.innerHTML", "<div></div>", "assign"), d.firstChild.style.width = cc11001100_hook("d.firstChild.style.width", "5px", "assign"), t.shrinkWrapBlocks = cc11001100_hook("t.shrinkWrapBlocks", 3 !== d.offsetWidth, "assign"), t.inlineBlockNeedsLayout && (u.style.zoom = cc11001100_hook("u.style.zoom", 1, "assign"))), u.removeChild(n), n = cc11001100_hook("n", d = cc11001100_hook("d", a = cc11001100_hook("a", r = cc11001100_hook("r", null, "assign"), "assign"), "assign"), "assign"));
    }), n = cc11001100_hook("n", s = cc11001100_hook("s", u = cc11001100_hook("u", l = cc11001100_hook("l", r = cc11001100_hook("r", a = cc11001100_hook("a", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), t;
  }(), "assign");
  var O = cc11001100_hook("O", /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, "var-init"),
    B = cc11001100_hook("B", /([A-Z])/g, "var-init");
  function P(e, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    if (b.acceptData(e)) {
      var o,
        a,
        s = cc11001100_hook("s", b.expando, "var-init"),
        u = cc11001100_hook("u", "string" == typeof n, "var-init"),
        l = cc11001100_hook("l", e.nodeType, "var-init"),
        p = cc11001100_hook("p", l ? b.cache : e, "var-init"),
        f = cc11001100_hook("f", l ? e[s] : e[s] && s, "var-init");
      if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = cc11001100_hook("e[s]", f = cc11001100_hook("f", c.pop() || b.guid++, "assign"), "assign") : f = cc11001100_hook("f", s, "assign")), p[f] || (p[f] = cc11001100_hook("p[f]", {}, "assign"), l || (p[f].toJSON = cc11001100_hook("p[f].toJSON", b.noop, "assign"))), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = cc11001100_hook("p[f]", b.extend(p[f], n), "assign") : p[f].data = cc11001100_hook("p[f].data", b.extend(p[f].data, n), "assign")), o = cc11001100_hook("o", p[f], "assign"), i || (o.data || (o.data = cc11001100_hook("o.data", {}, "assign")), o = cc11001100_hook("o", o.data, "assign")), r !== t && (o[b.camelCase(n)] = cc11001100_hook("o[b.camelCase(n)]", r, "assign")), u ? (a = cc11001100_hook("a", o[n], "assign"), null == a && (a = cc11001100_hook("a", o[b.camelCase(n)], "assign"))) : a = cc11001100_hook("a", o, "assign"), a;
    }
  }
  function R(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (b.acceptData(e)) {
      var r,
        i,
        o,
        a = cc11001100_hook("a", e.nodeType, "var-init"),
        s = cc11001100_hook("s", a ? b.cache : e, "var-init"),
        u = cc11001100_hook("u", a ? e[b.expando] : b.expando, "var-init");
      if (s[u]) {
        if (t && (o = cc11001100_hook("o", n ? s[u] : s[u].data, "assign"))) {
          b.isArray(t) ? t = cc11001100_hook("t", t.concat(b.map(t, b.camelCase)), "assign") : t in o ? t = cc11001100_hook("t", [t], "assign") : (t = cc11001100_hook("t", b.camelCase(t), "assign"), t = cc11001100_hook("t", t in o ? [t] : t.split(" "), "assign"));
          for (r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", t.length, "assign"); i > r; r++) delete o[t[r]];
          if (!(n ? $ : b.isEmptyObject)(o)) return;
        }
        (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = cc11001100_hook("s[u]", null, "assign"));
      }
    }
  }
  b.extend({
    cache: {},
    expando: cc11001100_hook("expando", "jQuery" + (p + Math.random()).replace(/\D/g, ""), "object-key-init"),
    noData: {
      embed: cc11001100_hook("embed", !0, "object-key-init"),
      object: cc11001100_hook("object", "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", "object-key-init"),
      applet: cc11001100_hook("applet", !0, "object-key-init")
    },
    hasData: function (e) {
      return e = cc11001100_hook("e", e.nodeType ? b.cache[e[b.expando]] : e[b.expando], "assign"), !!e && !$(e);
    },
    data: function (e, t, n) {
      return P(e, t, n);
    },
    removeData: function (e, t) {
      return R(e, t);
    },
    _data: function (e, t, n) {
      return P(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return R(e, t, !0);
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = cc11001100_hook("t", e.nodeName && b.noData[e.nodeName.toLowerCase()], "var-init");
      return !t || t !== !0 && e.getAttribute("classid") === t;
    }
  }), b.fn.extend({
    data: function (e, n) {
      var r,
        i,
        o = cc11001100_hook("o", this[0], "var-init"),
        a = cc11001100_hook("a", 0, "var-init"),
        s = cc11001100_hook("s", null, "var-init");
      if (e === t) {
        if (this.length && (s = cc11001100_hook("s", b.data(o), "assign"), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
          for (r = cc11001100_hook("r", o.attributes, "assign"); r.length > a; a++) i = cc11001100_hook("i", r[a].name, "assign"), i.indexOf("data-") || (i = cc11001100_hook("i", b.camelCase(i.slice(5)), "assign"), W(o, i, s[i]));
          b._data(o, "parsedAttrs", !0);
        }
        return s;
      }
      return "object" == typeof e ? this.each(function () {
        b.data(this, e);
      }) : b.access(this, function (n) {
        return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () {
          b.data(this, e, n);
        }), t);
      }, null, n, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        b.removeData(this, e);
      });
    }
  });
  function W(e, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    if (r === t && 1 === e.nodeType) {
      var i = cc11001100_hook("i", "data-" + n.replace(B, "-$1").toLowerCase(), "var-init");
      if (r = cc11001100_hook("r", e.getAttribute(i), "assign"), "string" == typeof r) {
        try {
          r = cc11001100_hook("r", "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r, "assign");
        } catch (o) {}
        b.data(e, n, r);
      } else r = cc11001100_hook("r", t, "assign");
    }
    return r;
  }
  function $(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t;
    for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  b.extend({
    queue: function (e, n, r) {
      var i;
      return e ? (n = cc11001100_hook("n", (n || "fx") + "queue", "assign"), i = cc11001100_hook("i", b._data(e, n), "assign"), r && (!i || b.isArray(r) ? i = cc11001100_hook("i", b._data(e, n, b.makeArray(r)), "assign") : i.push(r)), i || []) : t;
    },
    dequeue: function (e, t) {
      t = cc11001100_hook("t", t || "fx", "assign");
      var n = cc11001100_hook("n", b.queue(e, t), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", n.shift(), "var-init"),
        o = cc11001100_hook("o", b._queueHooks(e, t), "var-init"),
        a = function () {
          b.dequeue(e, t);
        };
      "inprogress" === i && (i = cc11001100_hook("i", n.shift(), "assign"), r--), o.cur = cc11001100_hook("o.cur", i, "assign"), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = cc11001100_hook("n", t + "queueHooks", "var-init");
      return b._data(e, n) || b._data(e, n, {
        empty: cc11001100_hook("empty", b.Callbacks("once memory").add(function () {
          b._removeData(e, t + "queue"), b._removeData(e, n);
        }), "object-key-init")
      });
    }
  }), b.fn.extend({
    queue: function (e, n) {
      var r = cc11001100_hook("r", 2, "var-init");
      return "string" != typeof e && (n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", "fx", "assign"), r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = cc11001100_hook("t", b.queue(this, e, n), "var-init");
        b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        b.dequeue(this, e);
      });
    },
    delay: function (e, t) {
      return e = cc11001100_hook("e", b.fx ? b.fx.speeds[e] || e : e, "assign"), t = cc11001100_hook("t", t || "fx", "assign"), this.queue(t, function (t, n) {
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
        o = cc11001100_hook("o", b.Deferred(), "var-init"),
        a = cc11001100_hook("a", this, "var-init"),
        s = cc11001100_hook("s", this.length, "var-init"),
        u = function () {
          --i || o.resolveWith(a, [a]);
        };
      "string" != typeof e && (n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", t, "assign")), e = cc11001100_hook("e", e || "fx", "assign");
      while (s--) r = cc11001100_hook("r", b._data(a[s], e + "queueHooks"), "assign"), r && r.empty && (i++, r.empty.add(u));
      return u(), o.promise(n);
    }
  });
  var I,
    z,
    X = cc11001100_hook("X", /[\t\r\n]/g, "var-init"),
    U = cc11001100_hook("U", /\r/g, "var-init"),
    V = cc11001100_hook("V", /^(?:input|select|textarea|button|object)$/i, "var-init"),
    Y = cc11001100_hook("Y", /^(?:a|area)$/i, "var-init"),
    J = cc11001100_hook("J", /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, "var-init"),
    G = cc11001100_hook("G", /^(?:checked|selected)$/i, "var-init"),
    Q = cc11001100_hook("Q", b.support.getSetAttribute, "var-init"),
    K = cc11001100_hook("K", b.support.input, "var-init");
  b.fn.extend({
    attr: function (e, t) {
      return b.access(this, b.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        b.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return b.access(this, b.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return e = cc11001100_hook("e", b.propFix[e] || e, "assign"), this.each(function () {
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
        u = cc11001100_hook("u", "string" == typeof e && e, "var-init");
      if (b.isFunction(e)) return this.each(function (t) {
        b(this).addClass(e.call(this, t, this.className));
      });
      if (u) for (t = cc11001100_hook("t", (e || "").match(w) || [], "assign"); s > a; a++) if (n = cc11001100_hook("n", this[a], "assign"), r = cc11001100_hook("r", 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " "), "assign")) {
        o = cc11001100_hook("o", 0, "assign");
        while (i = cc11001100_hook("i", t[o++], "assign")) 0 > r.indexOf(" " + i + " ") && (r += cc11001100_hook("r", i + " ", "assign"));
        n.className = cc11001100_hook("n.className", b.trim(r), "assign");
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
        u = cc11001100_hook("u", 0 === arguments.length || "string" == typeof e && e, "var-init");
      if (b.isFunction(e)) return this.each(function (t) {
        b(this).removeClass(e.call(this, t, this.className));
      });
      if (u) for (t = cc11001100_hook("t", (e || "").match(w) || [], "assign"); s > a; a++) if (n = cc11001100_hook("n", this[a], "assign"), r = cc11001100_hook("r", 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : ""), "assign")) {
        o = cc11001100_hook("o", 0, "assign");
        while (i = cc11001100_hook("i", t[o++], "assign")) while (r.indexOf(" " + i + " ") >= 0) r = cc11001100_hook("r", r.replace(" " + i + " ", " "), "assign");
        n.className = cc11001100_hook("n.className", e ? b.trim(r) : "", "assign");
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = cc11001100_hook("n", typeof e, "var-init"),
        r = cc11001100_hook("r", "boolean" == typeof t, "var-init");
      return b.isFunction(e) ? this.each(function (n) {
        b(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) {
          var o,
            a = cc11001100_hook("a", 0, "var-init"),
            s = cc11001100_hook("s", b(this), "var-init"),
            u = cc11001100_hook("u", t, "var-init"),
            l = cc11001100_hook("l", e.match(w) || [], "var-init");
          while (o = cc11001100_hook("o", l[a++], "assign")) u = cc11001100_hook("u", r ? u : !s.hasClass(o), "assign"), s[u ? "addClass" : "removeClass"](o);
        } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = cc11001100_hook("this.className", this.className || e === !1 ? "" : b._data(this, "__className__") || "", "assign"));
      });
    },
    hasClass: function (e) {
      var t = cc11001100_hook("t", " " + e + " ", "var-init"),
        n = cc11001100_hook("n", 0, "var-init"),
        r = cc11001100_hook("r", this.length, "var-init");
      for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
      return !1;
    },
    val: function (e) {
      var n,
        r,
        i,
        o = cc11001100_hook("o", this[0], "var-init");
      {
        if (arguments.length) return i = cc11001100_hook("i", b.isFunction(e), "assign"), this.each(function (n) {
          var o,
            a = cc11001100_hook("a", b(this), "var-init");
          1 === this.nodeType && (o = cc11001100_hook("o", i ? e.call(this, n, a.val()) : e, "assign"), null == o ? o = cc11001100_hook("o", "", "assign") : "number" == typeof o ? o += cc11001100_hook("o", "", "assign") : b.isArray(o) && (o = cc11001100_hook("o", b.map(o, function (e) {
            return null == e ? "" : e + "";
          }), "assign")), r = cc11001100_hook("r", b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], "assign"), r && "set" in r && r.set(this, o, "value") !== t || (this.value = cc11001100_hook("this.value", o, "assign")));
        });
        if (o) return r = cc11001100_hook("r", b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], "assign"), r && "get" in r && (n = cc11001100_hook("n", r.get(o, "value"), "assign")) !== t ? n : (n = cc11001100_hook("n", o.value, "assign"), "string" == typeof n ? n.replace(U, "") : null == n ? "" : n);
      }
    }
  }), b.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = cc11001100_hook("t", e.attributes.value, "var-init");
          return !t || t.specified ? e.value : e.text;
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
            u = cc11001100_hook("u", 0 > i ? s : o ? i : 0, "var-init");
          for (; s > u; u++) if (n = cc11001100_hook("n", r[u], "assign"), !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
            if (t = cc11001100_hook("t", b(n).val(), "assign"), o) return t;
            a.push(t);
          }
          return a;
        },
        set: function (e, t) {
          var n = cc11001100_hook("n", b.makeArray(t), "var-init");
          return b(e).find("option").each(function () {
            this.selected = cc11001100_hook("this.selected", b.inArray(b(this).val(), n) >= 0, "assign");
          }), n.length || (e.selectedIndex = cc11001100_hook("e.selectedIndex", -1, "assign")), n;
        }
      }
    },
    attr: function (e, n, r) {
      var o,
        a,
        s,
        u = cc11001100_hook("u", e.nodeType, "var-init");
      if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = cc11001100_hook("a", 1 !== u || !b.isXMLDoc(e), "assign"), a && (n = cc11001100_hook("n", n.toLowerCase(), "assign"), o = cc11001100_hook("o", b.attrHooks[n] || (J.test(n) ? z : I), "assign")), r === t ? o && a && "get" in o && null !== (s = cc11001100_hook("s", o.get(e, n), "assign")) ? s : (typeof e.getAttribute !== i && (s = cc11001100_hook("s", e.getAttribute(n), "assign")), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = cc11001100_hook("s", o.set(e, r, n), "assign")) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t));
    },
    removeAttr: function (e, t) {
      var n,
        r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", t && t.match(w), "var-init");
      if (o && 1 === e.nodeType) while (n = cc11001100_hook("n", o[i++], "assign")) r = cc11001100_hook("r", b.propFix[n] || n, "assign"), J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = cc11001100_hook("e[b.camelCase(\"default-\" + n)]", e[r] = cc11001100_hook("e[r]", !1, "assign"), "assign") : e[r] = cc11001100_hook("e[r]", !1, "assign") : b.attr(e, n, ""), e.removeAttribute(Q ? n : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
            var n = cc11001100_hook("n", e.value, "var-init");
            return e.setAttribute("type", t), n && (e.value = cc11001100_hook("e.value", n, "assign")), t;
          }
        }
      }
    },
    propFix: {
      tabindex: cc11001100_hook("tabindex", "tabIndex", "object-key-init"),
      readonly: cc11001100_hook("readonly", "readOnly", "object-key-init"),
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init"),
      maxlength: cc11001100_hook("maxlength", "maxLength", "object-key-init"),
      cellspacing: cc11001100_hook("cellspacing", "cellSpacing", "object-key-init"),
      cellpadding: cc11001100_hook("cellpadding", "cellPadding", "object-key-init"),
      rowspan: cc11001100_hook("rowspan", "rowSpan", "object-key-init"),
      colspan: cc11001100_hook("colspan", "colSpan", "object-key-init"),
      usemap: cc11001100_hook("usemap", "useMap", "object-key-init"),
      frameborder: cc11001100_hook("frameborder", "frameBorder", "object-key-init"),
      contenteditable: cc11001100_hook("contenteditable", "contentEditable", "object-key-init")
    },
    prop: function (e, n, r) {
      var i,
        o,
        a,
        s = cc11001100_hook("s", e.nodeType, "var-init");
      if (e && 3 !== s && 8 !== s && 2 !== s) return a = cc11001100_hook("a", 1 !== s || !b.isXMLDoc(e), "assign"), a && (n = cc11001100_hook("n", b.propFix[n] || n, "assign"), o = cc11001100_hook("o", b.propHooks[n], "assign")), r !== t ? o && "set" in o && (i = cc11001100_hook("i", o.set(e, r, n), "assign")) !== t ? i : e[n] = cc11001100_hook("e[n]", r, "assign") : o && "get" in o && null !== (i = cc11001100_hook("i", o.get(e, n), "assign")) ? i : e[n];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var n = cc11001100_hook("n", e.getAttributeNode("tabindex"), "var-init");
          return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t;
        }
      }
    }
  }), z = cc11001100_hook("z", {
    get: function (e, n) {
      var r = cc11001100_hook("r", b.prop(e, n), "var-init"),
        i = cc11001100_hook("i", "boolean" == typeof r && e.getAttribute(n), "var-init"),
        o = cc11001100_hook("o", "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n), "var-init");
      return o && o.value !== !1 ? n.toLowerCase() : t;
    },
    set: function (e, t, n) {
      return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = cc11001100_hook("e[b.camelCase(\"default-\" + n)]", e[n] = cc11001100_hook("e[n]", !0, "assign"), "assign"), n;
    }
  }, "assign"), K && Q || (b.attrHooks.value = cc11001100_hook("b.attrHooks.value", {
    get: function (e, n) {
      var r = cc11001100_hook("r", e.getAttributeNode(n), "var-init");
      return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t;
    },
    set: function (e, n, r) {
      return b.nodeName(e, "input") ? (e.defaultValue = cc11001100_hook("e.defaultValue", n, "assign"), t) : I && I.set(e, n, r);
    }
  }, "assign")), Q || (I = cc11001100_hook("I", b.valHooks.button = cc11001100_hook("b.valHooks.button", {
    get: function (e, n) {
      var r = cc11001100_hook("r", e.getAttributeNode(n), "var-init");
      return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t;
    },
    set: function (e, n, r) {
      var i = cc11001100_hook("i", e.getAttributeNode(r), "var-init");
      return i || e.setAttributeNode(i = cc11001100_hook("i", e.ownerDocument.createAttribute(r), "assign")), i.value = cc11001100_hook("i.value", n += cc11001100_hook("n", "", "assign"), "assign"), "value" === r || n === e.getAttribute(r) ? n : t;
    }
  }, "assign"), "assign"), b.attrHooks.contenteditable = cc11001100_hook("b.attrHooks.contenteditable", {
    get: cc11001100_hook("get", I.get, "object-key-init"),
    set: function (e, t, n) {
      I.set(e, "" === t ? !1 : t, n);
    }
  }, "assign"), b.each(["width", "height"], function (e, n) {
    b.attrHooks[n] = cc11001100_hook("b.attrHooks[n]", b.extend(b.attrHooks[n], {
      set: function (e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t;
      }
    }), "assign");
  })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) {
    b.attrHooks[n] = cc11001100_hook("b.attrHooks[n]", b.extend(b.attrHooks[n], {
      get: function (e) {
        var r = cc11001100_hook("r", e.getAttribute(n, 2), "var-init");
        return null == r ? t : r;
      }
    }), "assign");
  }), b.each(["href", "src"], function (e, t) {
    b.propHooks[t] = cc11001100_hook("b.propHooks[t]", {
      get: function (e) {
        return e.getAttribute(t, 4);
      }
    }, "assign");
  })), b.support.style || (b.attrHooks.style = cc11001100_hook("b.attrHooks.style", {
    get: function (e) {
      return e.style.cssText || t;
    },
    set: function (e, t) {
      return e.style.cssText = cc11001100_hook("e.style.cssText", t + "", "assign");
    }
  }, "assign")), b.support.optSelected || (b.propHooks.selected = cc11001100_hook("b.propHooks.selected", b.extend(b.propHooks.selected, {
    get: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  }), "assign")), b.support.enctype || (b.propFix.enctype = cc11001100_hook("b.propFix.enctype", "encoding", "assign")), b.support.checkOn || b.each(["radio", "checkbox"], function () {
    b.valHooks[this] = cc11001100_hook("b.valHooks[this]", {
      get: function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      }
    }, "assign");
  }), b.each(["radio", "checkbox"], function () {
    b.valHooks[this] = cc11001100_hook("b.valHooks[this]", b.extend(b.valHooks[this], {
      set: function (e, n) {
        return b.isArray(n) ? e.checked = cc11001100_hook("e.checked", b.inArray(b(e).val(), n) >= 0, "assign") : t;
      }
    }), "assign");
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
  b.event = cc11001100_hook("b.event", {
    global: {},
    add: function (e, n, r, o, a) {
      var s,
        u,
        l,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v = cc11001100_hook("v", b._data(e), "var-init");
      if (v) {
        r.handler && (c = cc11001100_hook("c", r, "assign"), r = cc11001100_hook("r", c.handler, "assign"), a = cc11001100_hook("a", c.selector, "assign")), r.guid || (r.guid = cc11001100_hook("r.guid", b.guid++, "assign")), (u = cc11001100_hook("u", v.events, "assign")) || (u = cc11001100_hook("u", v.events = cc11001100_hook("v.events", {}, "assign"), "assign")), (f = cc11001100_hook("f", v.handle, "assign")) || (f = cc11001100_hook("f", v.handle = cc11001100_hook("v.handle", function (e) {
          return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments);
        }, "assign"), "assign"), f.elem = cc11001100_hook("f.elem", e, "assign")), n = cc11001100_hook("n", (n || "").match(w) || [""], "assign"), l = cc11001100_hook("l", n.length, "assign");
        while (l--) s = cc11001100_hook("s", rt.exec(n[l]) || [], "assign"), g = cc11001100_hook("g", y = cc11001100_hook("y", s[1], "assign"), "assign"), m = cc11001100_hook("m", (s[2] || "").split(".").sort(), "assign"), p = cc11001100_hook("p", b.event.special[g] || {}, "assign"), g = cc11001100_hook("g", (a ? p.delegateType : p.bindType) || g, "assign"), p = cc11001100_hook("p", b.event.special[g] || {}, "assign"), d = cc11001100_hook("d", b.extend({
          type: cc11001100_hook("type", g, "object-key-init"),
          origType: cc11001100_hook("origType", y, "object-key-init"),
          data: cc11001100_hook("data", o, "object-key-init"),
          handler: cc11001100_hook("handler", r, "object-key-init"),
          guid: cc11001100_hook("guid", r.guid, "object-key-init"),
          selector: cc11001100_hook("selector", a, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", a && b.expr.match.needsContext.test(a), "object-key-init"),
          namespace: cc11001100_hook("namespace", m.join("."), "object-key-init")
        }, c), "assign"), (h = cc11001100_hook("h", u[g], "assign")) || (h = cc11001100_hook("h", u[g] = cc11001100_hook("u[g]", [], "assign"), "assign"), h.delegateCount = cc11001100_hook("h.delegateCount", 0, "assign"), p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = cc11001100_hook("d.handler.guid", r.guid, "assign"))), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = cc11001100_hook("b.event.global[g]", !0, "assign");
        e = cc11001100_hook("e", null, "assign");
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        p,
        f,
        d,
        h,
        g,
        m = cc11001100_hook("m", b.hasData(e) && b._data(e), "var-init");
      if (m && (c = cc11001100_hook("c", m.events, "assign"))) {
        t = cc11001100_hook("t", (t || "").match(w) || [""], "assign"), l = cc11001100_hook("l", t.length, "assign");
        while (l--) if (s = cc11001100_hook("s", rt.exec(t[l]) || [], "assign"), d = cc11001100_hook("d", g = cc11001100_hook("g", s[1], "assign"), "assign"), h = cc11001100_hook("h", (s[2] || "").split(".").sort(), "assign"), d) {
          p = cc11001100_hook("p", b.event.special[d] || {}, "assign"), d = cc11001100_hook("d", (r ? p.delegateType : p.bindType) || d, "assign"), f = cc11001100_hook("f", c[d] || [], "assign"), s = cc11001100_hook("s", s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), u = cc11001100_hook("u", o = cc11001100_hook("o", f.length, "assign"), "assign");
          while (o--) a = cc11001100_hook("a", f[o], "assign"), !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
          u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d]);
        } else for (d in c) b.event.remove(e, d + t[l], n, r, !0);
        b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"));
      }
    },
    trigger: function (n, r, i, a) {
      var s,
        u,
        l,
        c,
        p,
        f,
        d,
        h = cc11001100_hook("h", [i || o], "var-init"),
        g = cc11001100_hook("g", y.call(n, "type") ? n.type : n, "var-init"),
        m = cc11001100_hook("m", y.call(n, "namespace") ? n.namespace.split(".") : [], "var-init");
      if (l = cc11001100_hook("l", f = cc11001100_hook("f", i = cc11001100_hook("i", i || o, "assign"), "assign"), "assign"), 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = cc11001100_hook("m", g.split("."), "assign"), g = cc11001100_hook("g", m.shift(), "assign"), m.sort()), u = cc11001100_hook("u", 0 > g.indexOf(":") && "on" + g, "assign"), n = cc11001100_hook("n", n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), "assign"), n.isTrigger = cc11001100_hook("n.isTrigger", !0, "assign"), n.namespace = cc11001100_hook("n.namespace", m.join("."), "assign"), n.namespace_re = cc11001100_hook("n.namespace_re", n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), n.result = cc11001100_hook("n.result", t, "assign"), n.target || (n.target = cc11001100_hook("n.target", i, "assign")), r = cc11001100_hook("r", null == r ? [n] : b.makeArray(r, [n]), "assign"), p = cc11001100_hook("p", b.event.special[g] || {}, "assign"), a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!a && !p.noBubble && !b.isWindow(i)) {
          for (c = cc11001100_hook("c", p.delegateType || g, "assign"), nt.test(c + g) || (l = cc11001100_hook("l", l.parentNode, "assign")); l; l = cc11001100_hook("l", l.parentNode, "assign")) h.push(l), f = cc11001100_hook("f", l, "assign");
          f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e);
        }
        d = cc11001100_hook("d", 0, "assign");
        while ((l = cc11001100_hook("l", h[d++], "assign")) && !n.isPropagationStopped()) n.type = cc11001100_hook("n.type", d > 1 ? c : p.bindType || g, "assign"), s = cc11001100_hook("s", (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), "assign"), s && s.apply(l, r), s = cc11001100_hook("s", u && l[u], "assign"), s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
        if (n.type = cc11001100_hook("n.type", g, "assign"), !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
          f = cc11001100_hook("f", i[u], "assign"), f && (i[u] = cc11001100_hook("i[u]", null, "assign")), b.event.triggered = cc11001100_hook("b.event.triggered", g, "assign");
          try {
            i[g]();
          } catch (v) {}
          b.event.triggered = cc11001100_hook("b.event.triggered", t, "assign"), f && (i[u] = cc11001100_hook("i[u]", f, "assign"));
        }
        return n.result;
      }
    },
    dispatch: function (e) {
      e = cc11001100_hook("e", b.event.fix(e), "assign");
      var n,
        r,
        i,
        o,
        a,
        s = cc11001100_hook("s", [], "var-init"),
        u = cc11001100_hook("u", h.call(arguments), "var-init"),
        l = cc11001100_hook("l", (b._data(this, "events") || {})[e.type] || [], "var-init"),
        c = cc11001100_hook("c", b.event.special[e.type] || {}, "var-init");
      if (u[0] = cc11001100_hook("u[0]", e, "assign"), e.delegateTarget = cc11001100_hook("e.delegateTarget", this, "assign"), !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = cc11001100_hook("s", b.event.handlers.call(this, e, l), "assign"), n = cc11001100_hook("n", 0, "assign");
        while ((o = cc11001100_hook("o", s[n++], "assign")) && !e.isPropagationStopped()) {
          e.currentTarget = cc11001100_hook("e.currentTarget", o.elem, "assign"), a = cc11001100_hook("a", 0, "assign");
          while ((i = cc11001100_hook("i", o.handlers[a++], "assign")) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = cc11001100_hook("e.handleObj", i, "assign"), e.data = cc11001100_hook("e.data", i.data, "assign"), r = cc11001100_hook("r", ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), "assign"), r !== t && (e.result = cc11001100_hook("e.result", r, "assign")) === !1 && (e.preventDefault(), e.stopPropagation()));
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
        u = cc11001100_hook("u", n.delegateCount, "var-init"),
        l = cc11001100_hook("l", e.target, "var-init");
      if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = cc11001100_hook("l", l.parentNode || this, "assign")) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
        for (o = cc11001100_hook("o", [], "assign"), a = cc11001100_hook("a", 0, "assign"); u > a; a++) i = cc11001100_hook("i", n[a], "assign"), r = cc11001100_hook("r", i.selector + " ", "assign"), o[r] === t && (o[r] = cc11001100_hook("o[r]", i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length, "assign")), o[r] && o.push(i);
        o.length && s.push({
          elem: cc11001100_hook("elem", l, "object-key-init"),
          handlers: cc11001100_hook("handlers", o, "object-key-init")
        });
      }
      return n.length > u && s.push({
        elem: cc11001100_hook("elem", this, "object-key-init"),
        handlers: cc11001100_hook("handlers", n.slice(u), "object-key-init")
      }), s;
    },
    fix: function (e) {
      if (e[b.expando]) return e;
      var t,
        n,
        r,
        i = cc11001100_hook("i", e.type, "var-init"),
        a = cc11001100_hook("a", e, "var-init"),
        s = cc11001100_hook("s", this.fixHooks[i], "var-init");
      s || (this.fixHooks[i] = cc11001100_hook("this.fixHooks[i]", s = cc11001100_hook("s", tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}, "assign"), "assign")), r = cc11001100_hook("r", s.props ? this.props.concat(s.props) : this.props, "assign"), e = cc11001100_hook("e", new b.Event(a), "assign"), t = cc11001100_hook("t", r.length, "assign");
      while (t--) n = cc11001100_hook("n", r[t], "assign"), e[n] = cc11001100_hook("e[n]", a[n], "assign");
      return e.target || (e.target = cc11001100_hook("e.target", a.srcElement || o, "assign")), 3 === e.target.nodeType && (e.target = cc11001100_hook("e.target", e.target.parentNode, "assign")), e.metaKey = cc11001100_hook("e.metaKey", !!e.metaKey, "assign"), s.filter ? s.filter(e, a) : e;
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
          a,
          s = cc11001100_hook("s", n.button, "var-init"),
          u = cc11001100_hook("u", n.fromElement, "var-init");
        return null == e.pageX && null != n.clientX && (i = cc11001100_hook("i", e.target.ownerDocument || o, "assign"), a = cc11001100_hook("a", i.documentElement, "assign"), r = cc11001100_hook("r", i.body, "assign"), e.pageX = cc11001100_hook("e.pageX", n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), "assign"), e.pageY = cc11001100_hook("e.pageY", n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0), "assign")), !e.relatedTarget && u && (e.relatedTarget = cc11001100_hook("e.relatedTarget", u === e.target ? n.toElement : u, "assign")), e.which || s === t || (e.which = cc11001100_hook("e.which", 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0, "assign")), e;
      }
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      click: {
        trigger: function () {
          return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
        }
      },
      focus: {
        trigger: function () {
          if (this !== o.activeElement && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          return this === o.activeElement && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = cc11001100_hook("e.originalEvent.returnValue", e.result, "assign"));
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = cc11001100_hook("i", b.extend(new b.Event(), n, {
        type: cc11001100_hook("type", e, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init"),
        originalEvent: {}
      }), "var-init");
      r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, "assign"), b.removeEvent = cc11001100_hook("b.removeEvent", o.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = cc11001100_hook("r", "on" + t, "var-init");
    e.detachEvent && (typeof e[r] === i && (e[r] = cc11001100_hook("e[r]", null, "assign")), e.detachEvent(r, n));
  }, "assign"), b.Event = cc11001100_hook("b.Event", function (e, n) {
    return this instanceof b.Event ? (e && e.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", e, "assign"), this.type = cc11001100_hook("this.type", e.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot, "assign")) : this.type = cc11001100_hook("this.type", e, "assign"), n && b.extend(this, n), this.timeStamp = cc11001100_hook("this.timeStamp", e && e.timeStamp || b.now(), "assign"), this[b.expando] = cc11001100_hook("this[b.expando]", !0, "assign"), t) : new b.Event(e, n);
  }, "assign"), b.Event.prototype = cc11001100_hook("b.Event.prototype", {
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
  }, "assign"), b.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init")
  }, function (e, t) {
    b.event.special[e] = cc11001100_hook("b.event.special[e]", {
      delegateType: cc11001100_hook("delegateType", t, "object-key-init"),
      bindType: cc11001100_hook("bindType", t, "object-key-init"),
      handle: function (e) {
        var n,
          r = cc11001100_hook("r", this, "var-init"),
          i = cc11001100_hook("i", e.relatedTarget, "var-init"),
          o = cc11001100_hook("o", e.handleObj, "var-init");
        return (!i || i !== r && !b.contains(r, i)) && (e.type = cc11001100_hook("e.type", o.origType, "assign"), n = cc11001100_hook("n", o.handler.apply(this, arguments), "assign"), e.type = cc11001100_hook("e.type", t, "assign")), n;
      }
    }, "assign");
  }), b.support.submitBubbles || (b.event.special.submit = cc11001100_hook("b.event.special.submit", {
    setup: function () {
      return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) {
        var n = cc11001100_hook("n", e.target, "var-init"),
          r = cc11001100_hook("r", b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t, "var-init");
        r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = cc11001100_hook("e._submit_bubble", !0, "assign");
        }), b._data(r, "submitBubbles", !0));
      }), t);
    },
    postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0));
    },
    teardown: function () {
      return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t);
    }
  }, "assign")), b.support.changeBubbles || (b.event.special.change = cc11001100_hook("b.event.special.change", {
    setup: function () {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = cc11001100_hook("this._just_changed", !0, "assign"));
      }), b.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = cc11001100_hook("this._just_changed", !1, "assign")), b.event.simulate("change", this, e, !0);
      })), !1) : (b.event.add(this, "beforeactivate._change", function (e) {
        var t = cc11001100_hook("t", e.target, "var-init");
        Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0);
        }), b._data(t, "changeBubbles", !0));
      }), t);
    },
    handle: function (e) {
      var n = cc11001100_hook("n", e.target, "var-init");
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    },
    teardown: function () {
      return b.event.remove(this, "._change"), !Z.test(this.nodeName);
    }
  }, "assign")), b.support.focusinBubbles || b.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (e, t) {
    var n = cc11001100_hook("n", 0, "var-init"),
      r = function (e) {
        b.event.simulate(t, e.target, b.event.fix(e), !0);
      };
    b.event.special[t] = cc11001100_hook("b.event.special[t]", {
      setup: function () {
        0 === n++ && o.addEventListener(e, r, !0);
      },
      teardown: function () {
        0 === --n && o.removeEventListener(e, r, !0);
      }
    }, "assign");
  }), b.fn.extend({
    on: function (e, n, r, i, o) {
      var a, s;
      if ("object" == typeof e) {
        "string" != typeof n && (r = cc11001100_hook("r", r || n, "assign"), n = cc11001100_hook("n", t, "assign"));
        for (a in e) this.on(a, n, r, e[a], o);
        return this;
      }
      if (null == r && null == i ? (i = cc11001100_hook("i", n, "assign"), r = cc11001100_hook("r", n = cc11001100_hook("n", t, "assign"), "assign")) : null == i && ("string" == typeof n ? (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", t, "assign")) : (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign"))), i === !1) i = cc11001100_hook("i", ot, "assign");else if (!i) return this;
      return 1 === o && (s = cc11001100_hook("s", i, "assign"), i = cc11001100_hook("i", function (e) {
        return b().off(e), s.apply(this, arguments);
      }, "assign"), i.guid = cc11001100_hook("i.guid", s.guid || (s.guid = cc11001100_hook("s.guid", b.guid++, "assign")), "assign")), this.each(function () {
        b.event.add(this, e, i, r, n);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = cc11001100_hook("i", e.handleObj, "assign"), b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (o in e) this.off(o, n, e[o]);
        return this;
      }
      return (n === !1 || "function" == typeof n) && (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign")), r === !1 && (r = cc11001100_hook("r", ot, "assign")), this.each(function () {
        b.event.remove(this, e, r, n);
      });
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
    },
    trigger: function (e, t) {
      return this.each(function () {
        b.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, n) {
      var r = cc11001100_hook("r", this[0], "var-init");
      return r ? b.event.trigger(e, n, r, !0) : t;
    }
  }), function (e, t) {
    var n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      p,
      f,
      d,
      h,
      g,
      m,
      y,
      v,
      x = cc11001100_hook("x", "sizzle" + -new Date(), "var-init"),
      w = cc11001100_hook("w", e.document, "var-init"),
      T = cc11001100_hook("T", {}, "var-init"),
      N = cc11001100_hook("N", 0, "var-init"),
      C = cc11001100_hook("C", 0, "var-init"),
      k = cc11001100_hook("k", it(), "var-init"),
      E = cc11001100_hook("E", it(), "var-init"),
      S = cc11001100_hook("S", it(), "var-init"),
      A = cc11001100_hook("A", typeof t, "var-init"),
      j = cc11001100_hook("j", 1 << 31, "var-init"),
      D = cc11001100_hook("D", [], "var-init"),
      L = cc11001100_hook("L", D.pop, "var-init"),
      H = cc11001100_hook("H", D.push, "var-init"),
      q = cc11001100_hook("q", D.slice, "var-init"),
      M = cc11001100_hook("M", D.indexOf || function (e) {
        var t = cc11001100_hook("t", 0, "var-init"),
          n = cc11001100_hook("n", this.length, "var-init");
        for (; n > t; t++) if (this[t] === e) return t;
        return -1;
      }, "var-init"),
      _ = cc11001100_hook("_", "[\\x20\\t\\r\\n\\f]", "var-init"),
      F = cc11001100_hook("F", "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", "var-init"),
      O = cc11001100_hook("O", F.replace("w", "w#"), "var-init"),
      B = cc11001100_hook("B", "([*^$|!~]?=)", "var-init"),
      P = cc11001100_hook("P", "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", "var-init"),
      R = cc11001100_hook("R", ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", "var-init"),
      W = cc11001100_hook("W", RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), "var-init"),
      $ = cc11001100_hook("$", RegExp("^" + _ + "*," + _ + "*"), "var-init"),
      I = cc11001100_hook("I", RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), "var-init"),
      z = cc11001100_hook("z", RegExp(R), "var-init"),
      X = cc11001100_hook("X", RegExp("^" + O + "$"), "var-init"),
      U = cc11001100_hook("U", {
        ID: cc11001100_hook("ID", RegExp("^#(" + F + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", RegExp("^\\.(" + F + ")"), "object-key-init"),
        NAME: cc11001100_hook("NAME", RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"), "object-key-init"),
        TAG: cc11001100_hook("TAG", RegExp("^(" + F.replace("w", "w*") + ")"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", RegExp("^" + P), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", RegExp("^" + R), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      V = cc11001100_hook("V", /[\x20\t\r\n\f]*[+~]/, "var-init"),
      Y = cc11001100_hook("Y", /^[^{]+\{\s*\[native code/, "var-init"),
      J = cc11001100_hook("J", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      G = cc11001100_hook("G", /^(?:input|select|textarea|button)$/i, "var-init"),
      Q = cc11001100_hook("Q", /^h\d$/i, "var-init"),
      K = cc11001100_hook("K", /'|\\/g, "var-init"),
      Z = cc11001100_hook("Z", /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, "var-init"),
      et = cc11001100_hook("et", /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, "var-init"),
      tt = function (e, t) {
        var n = cc11001100_hook("n", "0x" + t - 65536, "var-init");
        return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
      };
    try {
      q.call(w.documentElement.childNodes, 0)[0].nodeType;
    } catch (nt) {
      q = cc11001100_hook("q", function (e) {
        var t,
          n = cc11001100_hook("n", [], "var-init");
        while (t = cc11001100_hook("t", this[e++], "assign")) n.push(t);
        return n;
      }, "assign");
    }
    function rt(e) {
      cc11001100_hook("e", e, "function-parameter");
      return Y.test(e + "");
    }
    function it() {
      var e,
        t = cc11001100_hook("t", [], "var-init");
      return e = cc11001100_hook("e", function (n, r) {
        return t.push(n += cc11001100_hook("n", " ", "assign")) > i.cacheLength && delete e[t.shift()], e[n] = cc11001100_hook("e[n]", r, "assign");
      }, "assign");
    }
    function ot(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e[x] = cc11001100_hook("e[x]", !0, "assign"), e;
    }
    function at(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", p.createElement("div"), "var-init");
      try {
        return e(t);
      } catch (n) {
        return !1;
      } finally {
        t = cc11001100_hook("t", null, "assign");
      }
    }
    function st(e, t, n, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var i, o, a, s, u, l, f, g, m, v;
      if ((t ? t.ownerDocument || t : w) !== p && c(t), t = cc11001100_hook("t", t || p, "assign"), n = cc11001100_hook("n", n || [], "assign"), !e || "string" != typeof e) return n;
      if (1 !== (s = cc11001100_hook("s", t.nodeType, "assign")) && 9 !== s) return [];
      if (!d && !r) {
        if (i = cc11001100_hook("i", J.exec(e), "assign")) if (a = cc11001100_hook("a", i[1], "assign")) {
          if (9 === s) {
            if (o = cc11001100_hook("o", t.getElementById(a), "assign"), !o || !o.parentNode) return n;
            if (o.id === a) return n.push(o), n;
          } else if (t.ownerDocument && (o = cc11001100_hook("o", t.ownerDocument.getElementById(a), "assign")) && y(t, o) && o.id === a) return n.push(o), n;
        } else {
          if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
          if ((a = cc11001100_hook("a", i[3], "assign")) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n;
        }
        if (T.qsa && !h.test(e)) {
          if (f = cc11001100_hook("f", !0, "assign"), g = cc11001100_hook("g", x, "assign"), m = cc11001100_hook("m", t, "assign"), v = cc11001100_hook("v", 9 === s && e, "assign"), 1 === s && "object" !== t.nodeName.toLowerCase()) {
            l = cc11001100_hook("l", ft(e), "assign"), (f = cc11001100_hook("f", t.getAttribute("id"), "assign")) ? g = cc11001100_hook("g", f.replace(K, "\\$&"), "assign") : t.setAttribute("id", g), g = cc11001100_hook("g", "[id='" + g + "'] ", "assign"), u = cc11001100_hook("u", l.length, "assign");
            while (u--) l[u] = cc11001100_hook("l[u]", g + dt(l[u]), "assign");
            m = cc11001100_hook("m", V.test(e) && t.parentNode || t, "assign"), v = cc11001100_hook("v", l.join(","), "assign");
          }
          if (v) try {
            return H.apply(n, q.call(m.querySelectorAll(v), 0)), n;
          } catch (b) {} finally {
            f || t.removeAttribute("id");
          }
        }
      }
      return wt(e.replace(W, "$1"), t, n, r);
    }
    a = cc11001100_hook("a", st.isXML = cc11001100_hook("st.isXML", function (e) {
      var t = cc11001100_hook("t", e && (e.ownerDocument || e).documentElement, "var-init");
      return t ? "HTML" !== t.nodeName : !1;
    }, "assign"), "assign"), c = cc11001100_hook("c", st.setDocument = cc11001100_hook("st.setDocument", function (e) {
      var n = cc11001100_hook("n", e ? e.ownerDocument || e : w, "var-init");
      return n !== p && 9 === n.nodeType && n.documentElement ? (p = cc11001100_hook("p", n, "assign"), f = cc11001100_hook("f", n.documentElement, "assign"), d = cc11001100_hook("d", a(n), "assign"), T.tagNameNoComments = cc11001100_hook("T.tagNameNoComments", at(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), "assign"), T.attributes = cc11001100_hook("T.attributes", at(function (e) {
        e.innerHTML = cc11001100_hook("e.innerHTML", "<select></select>", "assign");
        var t = cc11001100_hook("t", typeof e.lastChild.getAttribute("multiple"), "var-init");
        return "boolean" !== t && "string" !== t;
      }), "assign"), T.getByClassName = cc11001100_hook("T.getByClassName", at(function (e) {
        return e.innerHTML = cc11001100_hook("e.innerHTML", "<div class='hidden e'></div><div class='hidden'></div>", "assign"), e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = cc11001100_hook("e.lastChild.className", "e", "assign"), 2 === e.getElementsByClassName("e").length) : !1;
      }), "assign"), T.getByName = cc11001100_hook("T.getByName", at(function (e) {
        e.id = cc11001100_hook("e.id", x + 0, "assign"), e.innerHTML = cc11001100_hook("e.innerHTML", "<a name='" + x + "'></a><div name='" + x + "'></div>", "assign"), f.insertBefore(e, f.firstChild);
        var t = cc11001100_hook("t", n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length, "var-init");
        return T.getIdNotName = cc11001100_hook("T.getIdNotName", !n.getElementById(x), "assign"), f.removeChild(e), t;
      }), "assign"), i.attrHandle = cc11001100_hook("i.attrHandle", at(function (e) {
        return e.innerHTML = cc11001100_hook("e.innerHTML", "<a href='#'></a>", "assign"), e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href");
      }) ? {} : {
        href: function (e) {
          return e.getAttribute("href", 2);
        },
        type: function (e) {
          return e.getAttribute("type");
        }
      }, "assign"), T.getIdNotName ? (i.find.ID = cc11001100_hook("i.find.ID", function (e, t) {
        if (typeof t.getElementById !== A && !d) {
          var n = cc11001100_hook("n", t.getElementById(e), "var-init");
          return n && n.parentNode ? [n] : [];
        }
      }, "assign"), i.filter.ID = cc11001100_hook("i.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(et, tt), "var-init");
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, "assign")) : (i.find.ID = cc11001100_hook("i.find.ID", function (e, n) {
        if (typeof n.getElementById !== A && !d) {
          var r = cc11001100_hook("r", n.getElementById(e), "var-init");
          return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : [];
        }
      }, "assign"), i.filter.ID = cc11001100_hook("i.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(et, tt), "var-init");
        return function (e) {
          var n = cc11001100_hook("n", typeof e.getAttributeNode !== A && e.getAttributeNode("id"), "var-init");
          return n && n.value === t;
        };
      }, "assign")), i.find.TAG = cc11001100_hook("i.find.TAG", T.tagNameNoComments ? function (e, n) {
        return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t;
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
      }, "assign"), i.find.NAME = cc11001100_hook("i.find.NAME", T.getByName && function (e, n) {
        return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t;
      }, "assign"), i.find.CLASS = cc11001100_hook("i.find.CLASS", T.getByClassName && function (e, n) {
        return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e);
      }, "assign"), g = cc11001100_hook("g", [], "assign"), h = cc11001100_hook("h", [":focus"], "assign"), (T.qsa = cc11001100_hook("T.qsa", rt(n.querySelectorAll), "assign")) && (at(function (e) {
        e.innerHTML = cc11001100_hook("e.innerHTML", "<select><option selected=''></option></select>", "assign"), e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked");
      }), at(function (e) {
        e.innerHTML = cc11001100_hook("e.innerHTML", "<input type='hidden' i=''/>", "assign"), e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:");
      })), (T.matchesSelector = cc11001100_hook("T.matchesSelector", rt(m = cc11001100_hook("m", f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector, "assign")), "assign")) && at(function (e) {
        T.disconnectedMatch = cc11001100_hook("T.disconnectedMatch", m.call(e, "div"), "assign"), m.call(e, "[s!='']:x"), g.push("!=", R);
      }), h = cc11001100_hook("h", RegExp(h.join("|")), "assign"), g = cc11001100_hook("g", RegExp(g.join("|")), "assign"), y = cc11001100_hook("y", rt(f.contains) || f.compareDocumentPosition ? function (e, t) {
        var n = cc11001100_hook("n", 9 === e.nodeType ? e.documentElement : e, "var-init"),
          r = cc11001100_hook("r", t && t.parentNode, "var-init");
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = cc11001100_hook("t", t.parentNode, "assign")) if (t === e) return !0;
        return !1;
      }, "assign"), v = cc11001100_hook("v", f.compareDocumentPosition ? function (e, t) {
        var r;
        return e === t ? (u = cc11001100_hook("u", !0, "assign"), 0) : (r = cc11001100_hook("r", t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t), "assign")) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
          i = cc11001100_hook("i", 0, "var-init"),
          o = cc11001100_hook("o", e.parentNode, "var-init"),
          a = cc11001100_hook("a", t.parentNode, "var-init"),
          s = cc11001100_hook("s", [e], "var-init"),
          l = cc11001100_hook("l", [t], "var-init");
        if (e === t) return u = cc11001100_hook("u", !0, "assign"), 0;
        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
        if (o === a) return ut(e, t);
        r = cc11001100_hook("r", e, "assign");
        while (r = cc11001100_hook("r", r.parentNode, "assign")) s.unshift(r);
        r = cc11001100_hook("r", t, "assign");
        while (r = cc11001100_hook("r", r.parentNode, "assign")) l.unshift(r);
        while (s[i] === l[i]) i++;
        return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
      }, "assign"), u = cc11001100_hook("u", !1, "assign"), [0, 0].sort(v), T.detectDuplicates = cc11001100_hook("T.detectDuplicates", u, "assign"), p) : p;
    }, "assign"), "assign"), st.matches = cc11001100_hook("st.matches", function (e, t) {
      return st(e, null, null, t);
    }, "assign"), st.matchesSelector = cc11001100_hook("st.matchesSelector", function (e, t) {
      if ((e.ownerDocument || e) !== p && c(e), t = cc11001100_hook("t", t.replace(Z, "='$1']"), "assign"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
        var n = cc11001100_hook("n", m.call(e, t), "var-init");
        if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (r) {}
      return st(t, p, null, [e]).length > 0;
    }, "assign"), st.contains = cc11001100_hook("st.contains", function (e, t) {
      return (e.ownerDocument || e) !== p && c(e), y(e, t);
    }, "assign"), st.attr = cc11001100_hook("st.attr", function (e, t) {
      var n;
      return (e.ownerDocument || e) !== p && c(e), d || (t = cc11001100_hook("t", t.toLowerCase(), "assign")), (n = cc11001100_hook("n", i.attrHandle[t], "assign")) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = cc11001100_hook("n", e.getAttributeNode(t), "assign")) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null;
    }, "assign"), st.error = cc11001100_hook("st.error", function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, "assign"), st.uniqueSort = cc11001100_hook("st.uniqueSort", function (e) {
      var t,
        n = cc11001100_hook("n", [], "var-init"),
        r = cc11001100_hook("r", 1, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      if (u = cc11001100_hook("u", !T.detectDuplicates, "assign"), e.sort(v), u) {
        for (; t = cc11001100_hook("t", e[r], "assign"); r++) t === e[r - 1] && (i = cc11001100_hook("i", n.push(r), "assign"));
        while (i--) e.splice(n[i], 1);
      }
      return e;
    }, "assign");
    function ut(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", t && e, "var-init"),
        r = cc11001100_hook("r", n && (~t.sourceIndex || j) - (~e.sourceIndex || j), "var-init");
      if (r) return r;
      if (n) while (n = cc11001100_hook("n", n.nextSibling, "assign")) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function lt(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
        return "input" === n && t.type === e;
      };
    }
    function ct(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function pt(e) {
      cc11001100_hook("e", e, "function-parameter");
      return ot(function (t) {
        return t = cc11001100_hook("t", +t, "assign"), ot(function (n, r) {
          var i,
            o = cc11001100_hook("o", e([], n.length, t), "var-init"),
            a = cc11001100_hook("a", o.length, "var-init");
          while (a--) n[i = cc11001100_hook("i", o[a], "assign")] && (n[i] = cc11001100_hook("n[i]", !(r[i] = cc11001100_hook("r[i]", n[i], "assign")), "assign"));
        });
      });
    }
    o = cc11001100_hook("o", st.getText = cc11001100_hook("st.getText", function (e) {
      var t,
        n = cc11001100_hook("n", "", "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", e.nodeType, "var-init");
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) n += cc11001100_hook("n", o(e), "assign");
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = cc11001100_hook("t", e[r], "assign"); r++) n += cc11001100_hook("n", o(t), "assign");
      return n;
    }, "assign"), "assign"), i = cc11001100_hook("i", st.selectors = cc11001100_hook("st.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", ot, "object-key-init"),
      match: cc11001100_hook("match", U, "object-key-init"),
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
          return e[1] = cc11001100_hook("e[1]", e[1].replace(et, tt), "assign"), e[3] = cc11001100_hook("e[3]", (e[4] || e[5] || "").replace(et, tt), "assign"), "~=" === e[2] && (e[3] = cc11001100_hook("e[3]", " " + e[3] + " ", "assign")), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = cc11001100_hook("e[1]", e[1].toLowerCase(), "assign"), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = cc11001100_hook("e[4]", +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), "assign"), e[5] = cc11001100_hook("e[5]", +(e[7] + e[8] || "odd" === e[3]), "assign")) : e[3] && st.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
            n = cc11001100_hook("n", !e[5] && e[2], "var-init");
          return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = cc11001100_hook("e[2]", e[4], "assign") : n && z.test(n) && (t = cc11001100_hook("t", ft(n, !0), "assign")) && (t = cc11001100_hook("t", n.indexOf(")", n.length - t) - n.length, "assign")) && (e[0] = cc11001100_hook("e[0]", e[0].slice(0, t), "assign"), e[2] = cc11001100_hook("e[2]", n.slice(0, t), "assign")), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          return "*" === e ? function () {
            return !0;
          } : (e = cc11001100_hook("e", e.replace(et, tt).toLowerCase(), "assign"), function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          });
        },
        CLASS: function (e) {
          var t = cc11001100_hook("t", k[e + " "], "var-init");
          return t || (t = cc11001100_hook("t", RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)"), "assign")) && k(e, function (e) {
            return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "");
          });
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = cc11001100_hook("i", st.attr(r, e), "var-init");
            return null == i ? "!=" === t : t ? (i += cc11001100_hook("i", "", "assign"), "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
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
              p,
              f,
              d,
              h,
              g = cc11001100_hook("g", o !== a ? "nextSibling" : "previousSibling", "var-init"),
              m = cc11001100_hook("m", t.parentNode, "var-init"),
              y = cc11001100_hook("y", s && t.nodeName.toLowerCase(), "var-init"),
              v = cc11001100_hook("v", !u && !s, "var-init");
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
                c = cc11001100_hook("c", m[x] || (m[x] = cc11001100_hook("m[x]", {}, "assign")), "assign"), l = cc11001100_hook("l", c[e] || [], "assign"), d = cc11001100_hook("d", l[0] === N && l[1], "assign"), f = cc11001100_hook("f", l[0] === N && l[2], "assign"), p = cc11001100_hook("p", d && m.childNodes[d], "assign");
                while (p = cc11001100_hook("p", ++d && p && p[g] || (f = cc11001100_hook("f", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign")) if (1 === p.nodeType && ++f && p === t) {
                  c[e] = cc11001100_hook("c[e]", [N, d, f], "assign");
                  break;
                }
              } else if (v && (l = cc11001100_hook("l", (t[x] || (t[x] = cc11001100_hook("t[x]", {}, "assign")))[e], "assign")) && l[0] === N) f = cc11001100_hook("f", l[1], "assign");else while (p = cc11001100_hook("p", ++d && p && p[g] || (f = cc11001100_hook("f", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign")) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = cc11001100_hook("p[x]", {}, "assign")))[e] = cc11001100_hook("(p[x] || (p[x] = {}))[e]", [N, f], "assign")), p === t)) break;
              return f -= cc11001100_hook("f", i, "assign"), f === r || 0 === f % r && f / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n,
            r = cc11001100_hook("r", i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e), "var-init");
          return r[x] ? r(t) : r.length > 1 ? (n = cc11001100_hook("n", [e, e, "", t], "assign"), i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) {
            var i,
              o = cc11001100_hook("o", r(e, t), "var-init"),
              a = cc11001100_hook("a", o.length, "var-init");
            while (a--) i = cc11001100_hook("i", M.call(e, o[a]), "assign"), e[i] = cc11001100_hook("e[i]", !(n[i] = cc11001100_hook("n[i]", o[a], "assign")), "assign");
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", ot(function (e) {
          var t = cc11001100_hook("t", [], "var-init"),
            n = cc11001100_hook("n", [], "var-init"),
            r = cc11001100_hook("r", s(e.replace(W, "$1")), "var-init");
          return r[x] ? ot(function (e, t, n, i) {
            var o,
              a = cc11001100_hook("a", r(e, null, i, []), "var-init"),
              s = cc11001100_hook("s", e.length, "var-init");
            while (s--) (o = cc11001100_hook("o", a[s], "assign")) && (e[s] = cc11001100_hook("e[s]", !(t[s] = cc11001100_hook("t[s]", o, "assign")), "assign"));
          }) : function (e, i, o) {
            return t[0] = cc11001100_hook("t[0]", e, "assign"), r(t, null, o, n), !n.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", ot(function (e) {
          return function (t) {
            return st(e, t).length > 0;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", ot(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", ot(function (e) {
          return X.test(e || "") || st.error("unsupported lang: " + e), e = cc11001100_hook("e", e.replace(et, tt).toLowerCase(), "assign"), function (t) {
            var n;
            do if (n = cc11001100_hook("n", d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang, "assign")) return n = cc11001100_hook("n", n.toLowerCase(), "assign"), n === e || 0 === n.indexOf(e + "-"); while ((t = cc11001100_hook("t", t.parentNode, "assign")) && 1 === t.nodeType);
            return !1;
          };
        }), "object-key-init"),
        target: function (t) {
          var n = cc11001100_hook("n", e.location && e.location.hash, "var-init");
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === f;
        },
        focus: function (e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
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
          return !i.pseudos.empty(e);
        },
        header: function (e) {
          return Q.test(e.nodeName);
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
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = cc11001100_hook("t", e.getAttribute("type"), "assign")) || t.toLowerCase() === e.type);
        },
        first: cc11001100_hook("first", pt(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", pt(function (e, t) {
          return [t - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", pt(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), "object-key-init"),
        even: cc11001100_hook("even", pt(function (e, t) {
          var n = cc11001100_hook("n", 0, "var-init");
          for (; t > n; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", pt(function (e, t) {
          var n = cc11001100_hook("n", 1, "var-init");
          for (; t > n; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", pt(function (e, t, n) {
          var r = cc11001100_hook("r", 0 > n ? n + t : n, "var-init");
          for (; --r >= 0;) e.push(r);
          return e;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", pt(function (e, t, n) {
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
    }) i.pseudos[n] = cc11001100_hook("i.pseudos[n]", lt(n), "assign");
    for (n in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !0, "object-key-init")
    }) i.pseudos[n] = cc11001100_hook("i.pseudos[n]", ct(n), "assign");
    function ft(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n,
        r,
        o,
        a,
        s,
        u,
        l,
        c = cc11001100_hook("c", E[e + " "], "var-init");
      if (c) return t ? 0 : c.slice(0);
      s = cc11001100_hook("s", e, "assign"), u = cc11001100_hook("u", [], "assign"), l = cc11001100_hook("l", i.preFilter, "assign");
      while (s) {
        (!n || (r = cc11001100_hook("r", $.exec(s), "assign"))) && (r && (s = cc11001100_hook("s", s.slice(r[0].length) || s, "assign")), u.push(o = cc11001100_hook("o", [], "assign"))), n = cc11001100_hook("n", !1, "assign"), (r = cc11001100_hook("r", I.exec(s), "assign")) && (n = cc11001100_hook("n", r.shift(), "assign"), o.push({
          value: cc11001100_hook("value", n, "object-key-init"),
          type: cc11001100_hook("type", r[0].replace(W, " "), "object-key-init")
        }), s = cc11001100_hook("s", s.slice(n.length), "assign"));
        for (a in i.filter) !(r = cc11001100_hook("r", U[a].exec(s), "assign")) || l[a] && !(r = cc11001100_hook("r", l[a](r), "assign")) || (n = cc11001100_hook("n", r.shift(), "assign"), o.push({
          value: cc11001100_hook("value", n, "object-key-init"),
          type: cc11001100_hook("type", a, "object-key-init"),
          matches: cc11001100_hook("matches", r, "object-key-init")
        }), s = cc11001100_hook("s", s.slice(n.length), "assign"));
        if (!n) break;
      }
      return t ? s.length : s ? st.error(e) : E(e, u).slice(0);
    }
    function dt(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", 0, "var-init"),
        n = cc11001100_hook("n", e.length, "var-init"),
        r = cc11001100_hook("r", "", "var-init");
      for (; n > t; t++) r += cc11001100_hook("r", e[t].value, "assign");
      return r;
    }
    function ht(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var i = cc11001100_hook("i", t.dir, "var-init"),
        o = cc11001100_hook("o", n && "parentNode" === i, "var-init"),
        a = cc11001100_hook("a", C++, "var-init");
      return t.first ? function (t, n, r) {
        while (t = cc11001100_hook("t", t[i], "assign")) if (1 === t.nodeType || o) return e(t, n, r);
      } : function (t, n, s) {
        var u,
          l,
          c,
          p = cc11001100_hook("p", N + " " + a, "var-init");
        if (s) {
          while (t = cc11001100_hook("t", t[i], "assign")) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
        } else while (t = cc11001100_hook("t", t[i], "assign")) if (1 === t.nodeType || o) if (c = cc11001100_hook("c", t[x] || (t[x] = cc11001100_hook("t[x]", {}, "assign")), "assign"), (l = cc11001100_hook("l", c[i], "assign")) && l[0] === p) {
          if ((u = cc11001100_hook("u", l[1], "assign")) === !0 || u === r) return u === !0;
        } else if (l = cc11001100_hook("l", c[i] = cc11001100_hook("c[i]", [p], "assign"), "assign"), l[1] = cc11001100_hook("l[1]", e(t, n, s) || r, "assign"), l[1] === !0) return !0;
      };
    }
    function gt(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.length > 1 ? function (t, n, r) {
        var i = cc11001100_hook("i", e.length, "var-init");
        while (i--) if (!e[i](t, n, r)) return !1;
        return !0;
      } : e[0];
    }
    function mt(e, t, n, r, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      var o,
        a = cc11001100_hook("a", [], "var-init"),
        s = cc11001100_hook("s", 0, "var-init"),
        u = cc11001100_hook("u", e.length, "var-init"),
        l = cc11001100_hook("l", null != t, "var-init");
      for (; u > s; s++) (o = cc11001100_hook("o", e[s], "assign")) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
      return a;
    }
    function yt(e, t, n, r, i, o) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      return r && !r[x] && (r = cc11001100_hook("r", yt(r), "assign")), i && !i[x] && (i = cc11001100_hook("i", yt(i, o), "assign")), ot(function (o, a, s, u) {
        var l,
          c,
          p,
          f = cc11001100_hook("f", [], "var-init"),
          d = cc11001100_hook("d", [], "var-init"),
          h = cc11001100_hook("h", a.length, "var-init"),
          g = cc11001100_hook("g", o || xt(t || "*", s.nodeType ? [s] : s, []), "var-init"),
          m = cc11001100_hook("m", !e || !o && t ? g : mt(g, f, e, s, u), "var-init"),
          y = cc11001100_hook("y", n ? i || (o ? e : h || r) ? [] : a : m, "var-init");
        if (n && n(m, y, s, u), r) {
          l = cc11001100_hook("l", mt(y, d), "assign"), r(l, [], s, u), c = cc11001100_hook("c", l.length, "assign");
          while (c--) (p = cc11001100_hook("p", l[c], "assign")) && (y[d[c]] = cc11001100_hook("y[d[c]]", !(m[d[c]] = cc11001100_hook("m[d[c]]", p, "assign")), "assign"));
        }
        if (o) {
          if (i || e) {
            if (i) {
              l = cc11001100_hook("l", [], "assign"), c = cc11001100_hook("c", y.length, "assign");
              while (c--) (p = cc11001100_hook("p", y[c], "assign")) && l.push(m[c] = cc11001100_hook("m[c]", p, "assign"));
              i(null, y = cc11001100_hook("y", [], "assign"), l, u);
            }
            c = cc11001100_hook("c", y.length, "assign");
            while (c--) (p = cc11001100_hook("p", y[c], "assign")) && (l = cc11001100_hook("l", i ? M.call(o, p) : f[c], "assign")) > -1 && (o[l] = cc11001100_hook("o[l]", !(a[l] = cc11001100_hook("a[l]", p, "assign")), "assign"));
          }
        } else y = cc11001100_hook("y", mt(y === a ? y.splice(h, y.length) : y), "assign"), i ? i(null, a, y, u) : H.apply(a, y);
      });
    }
    function vt(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t,
        n,
        r,
        o = cc11001100_hook("o", e.length, "var-init"),
        a = cc11001100_hook("a", i.relative[e[0].type], "var-init"),
        s = cc11001100_hook("s", a || i.relative[" "], "var-init"),
        u = cc11001100_hook("u", a ? 1 : 0, "var-init"),
        c = cc11001100_hook("c", ht(function (e) {
          return e === t;
        }, s, !0), "var-init"),
        p = cc11001100_hook("p", ht(function (e) {
          return M.call(t, e) > -1;
        }, s, !0), "var-init"),
        f = cc11001100_hook("f", [function (e, n, r) {
          return !a && (r || n !== l) || ((t = cc11001100_hook("t", n, "assign")).nodeType ? c(e, n, r) : p(e, n, r));
        }], "var-init");
      for (; o > u; u++) if (n = cc11001100_hook("n", i.relative[e[u].type], "assign")) f = cc11001100_hook("f", [ht(gt(f), n)], "assign");else {
        if (n = cc11001100_hook("n", i.filter[e[u].type].apply(null, e[u].matches), "assign"), n[x]) {
          for (r = cc11001100_hook("r", ++u, "assign"); o > r; r++) if (i.relative[e[r].type]) break;
          return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = cc11001100_hook("e", e.slice(r), "assign")), o > r && dt(e));
        }
        f.push(n);
      }
      return gt(f);
    }
    function bt(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", 0, "var-init"),
        o = cc11001100_hook("o", t.length > 0, "var-init"),
        a = cc11001100_hook("a", e.length > 0, "var-init"),
        s = function (s, u, c, f, d) {
          var h,
            g,
            m,
            y = cc11001100_hook("y", [], "var-init"),
            v = cc11001100_hook("v", 0, "var-init"),
            b = cc11001100_hook("b", "0", "var-init"),
            x = cc11001100_hook("x", s && [], "var-init"),
            w = cc11001100_hook("w", null != d, "var-init"),
            T = cc11001100_hook("T", l, "var-init"),
            C = cc11001100_hook("C", s || a && i.find.TAG("*", d && u.parentNode || u), "var-init"),
            k = cc11001100_hook("k", N += cc11001100_hook("N", null == T ? 1 : Math.random() || .1, "assign"), "var-init");
          for (w && (l = cc11001100_hook("l", u !== p && u, "assign"), r = cc11001100_hook("r", n, "assign")); null != (h = cc11001100_hook("h", C[b], "assign")); b++) {
            if (a && h) {
              g = cc11001100_hook("g", 0, "assign");
              while (m = cc11001100_hook("m", e[g++], "assign")) if (m(h, u, c)) {
                f.push(h);
                break;
              }
              w && (N = cc11001100_hook("N", k, "assign"), r = cc11001100_hook("r", ++n, "assign"));
            }
            o && ((h = cc11001100_hook("h", !m && h, "assign")) && v--, s && x.push(h));
          }
          if (v += cc11001100_hook("v", b, "assign"), o && b !== v) {
            g = cc11001100_hook("g", 0, "assign");
            while (m = cc11001100_hook("m", t[g++], "assign")) m(x, y, u, c);
            if (s) {
              if (v > 0) while (b--) x[b] || y[b] || (y[b] = cc11001100_hook("y[b]", L.call(f), "assign"));
              y = cc11001100_hook("y", mt(y), "assign");
            }
            H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f);
          }
          return w && (N = cc11001100_hook("N", k, "assign"), l = cc11001100_hook("l", T, "assign")), x;
        };
      return o ? ot(s) : s;
    }
    s = cc11001100_hook("s", st.compile = cc11001100_hook("st.compile", function (e, t) {
      var n,
        r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", S[e + " "], "var-init");
      if (!o) {
        t || (t = cc11001100_hook("t", ft(e), "assign")), n = cc11001100_hook("n", t.length, "assign");
        while (n--) o = cc11001100_hook("o", vt(t[n]), "assign"), o[x] ? r.push(o) : i.push(o);
        o = cc11001100_hook("o", S(e, bt(i, r)), "assign");
      }
      return o;
    }, "assign"), "assign");
    function xt(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", t.length, "var-init");
      for (; i > r; r++) st(e, t[r], n);
      return n;
    }
    function wt(e, t, n, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var o,
        a,
        u,
        l,
        c,
        p = cc11001100_hook("p", ft(e), "var-init");
      if (!r && 1 === p.length) {
        if (a = cc11001100_hook("a", p[0] = cc11001100_hook("p[0]", p[0].slice(0), "assign"), "assign"), a.length > 2 && "ID" === (u = cc11001100_hook("u", a[0], "assign")).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
          if (t = cc11001100_hook("t", i.find.ID(u.matches[0].replace(et, tt), t)[0], "assign"), !t) return n;
          e = cc11001100_hook("e", e.slice(a.shift().value.length), "assign");
        }
        o = cc11001100_hook("o", U.needsContext.test(e) ? 0 : a.length, "assign");
        while (o--) {
          if (u = cc11001100_hook("u", a[o], "assign"), i.relative[l = cc11001100_hook("l", u.type, "assign")]) break;
          if ((c = cc11001100_hook("c", i.find[l], "assign")) && (r = cc11001100_hook("r", c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t), "assign"))) {
            if (a.splice(o, 1), e = cc11001100_hook("e", r.length && dt(a), "assign"), !e) return H.apply(n, q.call(r, 0)), n;
            break;
          }
        }
      }
      return s(e, p)(r, t, d, n, V.test(e)), n;
    }
    i.pseudos.nth = cc11001100_hook("i.pseudos.nth", i.pseudos.eq, "assign");
    function Tt() {}
    i.filters = cc11001100_hook("i.filters", Tt.prototype = cc11001100_hook("Tt.prototype", i.pseudos, "assign"), "assign"), i.setFilters = cc11001100_hook("i.setFilters", new Tt(), "assign"), c(), st.attr = cc11001100_hook("st.attr", b.attr, "assign"), b.find = cc11001100_hook("b.find", st, "assign"), b.expr = cc11001100_hook("b.expr", st.selectors, "assign"), b.expr[":"] = cc11001100_hook("b.expr[\":\"]", b.expr.pseudos, "assign"), b.unique = cc11001100_hook("b.unique", st.uniqueSort, "assign"), b.text = cc11001100_hook("b.text", st.getText, "assign"), b.isXMLDoc = cc11001100_hook("b.isXMLDoc", st.isXML, "assign"), b.contains = cc11001100_hook("b.contains", st.contains, "assign");
  }(e);
  var at = cc11001100_hook("at", /Until$/, "var-init"),
    st = cc11001100_hook("st", /^(?:parents|prev(?:Until|All))/, "var-init"),
    ut = cc11001100_hook("ut", /^.[^:#\[\.,]*$/, "var-init"),
    lt = cc11001100_hook("lt", b.expr.match.needsContext, "var-init"),
    ct = cc11001100_hook("ct", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  b.fn.extend({
    find: function (e) {
      var t,
        n,
        r,
        i = cc11001100_hook("i", this.length, "var-init");
      if ("string" != typeof e) return r = cc11001100_hook("r", this, "assign"), this.pushStack(b(e).filter(function () {
        for (t = cc11001100_hook("t", 0, "assign"); i > t; t++) if (b.contains(r[t], this)) return !0;
      }));
      for (n = cc11001100_hook("n", [], "assign"), t = cc11001100_hook("t", 0, "assign"); i > t; t++) b.find(e, this[t], n);
      return n = cc11001100_hook("n", this.pushStack(i > 1 ? b.unique(n) : n), "assign"), n.selector = cc11001100_hook("n.selector", (this.selector ? this.selector + " " : "") + e, "assign"), n;
    },
    has: function (e) {
      var t,
        n = cc11001100_hook("n", b(e, this), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init");
      return this.filter(function () {
        for (t = cc11001100_hook("t", 0, "assign"); r > t; t++) if (b.contains(this, n[t])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(ft(this, e, !1));
    },
    filter: function (e) {
      return this.pushStack(ft(this, e, !0));
    },
    is: function (e) {
      return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0);
    },
    closest: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", this.length, "var-init"),
        o = cc11001100_hook("o", [], "var-init"),
        a = cc11001100_hook("a", lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0, "var-init");
      for (; i > r; r++) {
        n = cc11001100_hook("n", this[r], "assign");
        while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
          if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
            o.push(n);
            break;
          }
          n = cc11001100_hook("n", n.parentNode, "assign");
        }
      }
      return this.pushStack(o.length > 1 ? b.unique(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      var n = cc11001100_hook("n", "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e), "var-init"),
        r = cc11001100_hook("r", b.merge(this.get(), n), "var-init");
      return this.pushStack(b.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), b.fn.andSelf = cc11001100_hook("b.fn.andSelf", b.fn.addBack, "assign");
  function pt(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    do e = cc11001100_hook("e", e[t], "assign"); while (e && 1 !== e.nodeType);
    return e;
  }
  b.each({
    parent: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return b.dir(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return b.dir(e, "parentNode", n);
    },
    next: function (e) {
      return pt(e, "nextSibling");
    },
    prev: function (e) {
      return pt(e, "previousSibling");
    },
    nextAll: function (e) {
      return b.dir(e, "nextSibling");
    },
    prevAll: function (e) {
      return b.dir(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return b.dir(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return b.dir(e, "previousSibling", n);
    },
    siblings: function (e) {
      return b.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return b.sibling(e.firstChild);
    },
    contents: function (e) {
      return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes);
    }
  }, function (e, t) {
    b.fn[e] = cc11001100_hook("b.fn[e]", function (n, r) {
      var i = cc11001100_hook("i", b.map(this, t, n), "var-init");
      return at.test(e) || (r = cc11001100_hook("r", n, "assign")), r && "string" == typeof r && (i = cc11001100_hook("i", b.filter(r, i), "assign")), i = cc11001100_hook("i", this.length > 1 && !ct[e] ? b.unique(i) : i, "assign"), this.length > 1 && st.test(e) && (i = cc11001100_hook("i", i.reverse(), "assign")), this.pushStack(i);
    }, "assign");
  }), b.extend({
    filter: function (e, t, n) {
      return n && (e = cc11001100_hook("e", ":not(" + e + ")", "assign")), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t);
    },
    dir: function (e, n, r) {
      var i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", e[n], "var-init");
      while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = cc11001100_hook("o", o[n], "assign");
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
    if (t = cc11001100_hook("t", t || 0, "assign"), b.isFunction(t)) return b.grep(e, function (e, r) {
      var i = cc11001100_hook("i", !!t.call(e, r, e), "var-init");
      return i === n;
    });
    if (t.nodeType) return b.grep(e, function (e) {
      return e === t === n;
    });
    if ("string" == typeof t) {
      var r = cc11001100_hook("r", b.grep(e, function (e) {
        return 1 === e.nodeType;
      }), "var-init");
      if (ut.test(t)) return b.filter(t, r, !n);
      t = cc11001100_hook("t", b.filter(t, r), "assign");
    }
    return b.grep(e, function (e) {
      return b.inArray(e, t) >= 0 === n;
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
    Nt = cc11001100_hook("Nt", /^(?:checkbox|radio)$/i, "var-init"),
    Ct = cc11001100_hook("Ct", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
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
      _default: cc11001100_hook("_default", b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"], "object-key-init")
    }, "var-init"),
    jt = cc11001100_hook("jt", dt(o), "var-init"),
    Dt = cc11001100_hook("Dt", jt.appendChild(o.createElement("div")), "var-init");
  At.optgroup = cc11001100_hook("At.optgroup", At.option, "assign"), At.tbody = cc11001100_hook("At.tbody", At.tfoot = cc11001100_hook("At.tfoot", At.colgroup = cc11001100_hook("At.colgroup", At.caption = cc11001100_hook("At.caption", At.thead, "assign"), "assign"), "assign"), "assign"), At.th = cc11001100_hook("At.th", At.td, "assign"), b.fn.extend({
    text: function (e) {
      return b.access(this, function (e) {
        return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
      }, null, e, arguments.length);
    },
    wrapAll: function (e) {
      if (b.isFunction(e)) return this.each(function (t) {
        b(this).wrapAll(e.call(this, t));
      });
      if (this[0]) {
        var t = cc11001100_hook("t", b(e, this[0].ownerDocument).eq(0).clone(!0), "var-init");
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = cc11001100_hook("e", this, "var-init");
          while (e.firstChild && 1 === e.firstChild.nodeType) e = cc11001100_hook("e", e.firstChild, "assign");
          return e;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (e) {
      return b.isFunction(e) ? this.each(function (t) {
        b(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = cc11001100_hook("t", b(this), "var-init"),
          n = cc11001100_hook("n", t.contents(), "var-init");
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = cc11001100_hook("t", b.isFunction(e), "var-init");
      return this.each(function (n) {
        b(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        b.nodeName(this, "body") || b(this).replaceWith(this.childNodes);
      }).end();
    },
    append: function () {
      return this.domManip(arguments, !0, function (e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e);
      });
    },
    prepend: function () {
      return this.domManip(arguments, !0, function (e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild);
      });
    },
    before: function () {
      return this.domManip(arguments, !1, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return this.domManip(arguments, !1, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init");
      for (; null != (n = cc11001100_hook("n", this[r], "assign")); r++) (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
      return this;
    },
    empty: function () {
      var e,
        t = cc11001100_hook("t", 0, "var-init");
      for (; null != (e = cc11001100_hook("e", this[t], "assign")); t++) {
        1 === e.nodeType && b.cleanData(Ot(e, !1));
        while (e.firstChild) e.removeChild(e.firstChild);
        e.options && b.nodeName(e, "select") && (e.options.length = cc11001100_hook("e.options.length", 0, "assign"));
      }
      return this;
    },
    clone: function (e, t) {
      return e = cc11001100_hook("e", null == e ? !1 : e, "assign"), t = cc11001100_hook("t", null == t ? e : t, "assign"), this.map(function () {
        return b.clone(this, e, t);
      });
    },
    html: function (e) {
      return b.access(this, function (e) {
        var n = cc11001100_hook("n", this[0] || {}, "var-init"),
          r = cc11001100_hook("r", 0, "var-init"),
          i = cc11001100_hook("i", this.length, "var-init");
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
        if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = cc11001100_hook("e", e.replace(vt, "<$1></$2>"), "assign");
          try {
            for (; i > r; r++) n = cc11001100_hook("n", this[r] || {}, "assign"), 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = cc11001100_hook("n.innerHTML", e, "assign"));
            n = cc11001100_hook("n", 0, "assign");
          } catch (o) {}
        }
        n && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function (e) {
      var t = cc11001100_hook("t", b.isFunction(e), "var-init");
      return t || "string" == typeof e || (e = cc11001100_hook("e", b(e).not(this).detach(), "assign")), this.domManip([e], !0, function (e) {
        var t = cc11001100_hook("t", this.nextSibling, "var-init"),
          n = cc11001100_hook("n", this.parentNode, "var-init");
        n && (b(this).remove(), n.insertBefore(e, t));
      });
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (e, n, r) {
      e = cc11001100_hook("e", f.apply([], e), "assign");
      var i,
        o,
        a,
        s,
        u,
        l,
        c = cc11001100_hook("c", 0, "var-init"),
        p = cc11001100_hook("p", this.length, "var-init"),
        d = cc11001100_hook("d", this, "var-init"),
        h = cc11001100_hook("h", p - 1, "var-init"),
        g = cc11001100_hook("g", e[0], "var-init"),
        m = cc11001100_hook("m", b.isFunction(g), "var-init");
      if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) {
        var o = cc11001100_hook("o", d.eq(i), "var-init");
        m && (e[0] = cc11001100_hook("e[0]", g.call(this, i, n ? o.html() : t), "assign")), o.domManip(e, n, r);
      });
      if (p && (l = cc11001100_hook("l", b.buildFragment(e, this[0].ownerDocument, !1, this), "assign"), i = cc11001100_hook("i", l.firstChild, "assign"), 1 === l.childNodes.length && (l = cc11001100_hook("l", i, "assign")), i)) {
        for (n = cc11001100_hook("n", n && b.nodeName(i, "tr"), "assign"), s = cc11001100_hook("s", b.map(Ot(l, "script"), Ht), "assign"), a = cc11001100_hook("a", s.length, "assign"); p > c; c++) o = cc11001100_hook("o", l, "assign"), c !== h && (o = cc11001100_hook("o", b.clone(o, !0, !0), "assign"), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
        if (a) for (u = cc11001100_hook("u", s[s.length - 1].ownerDocument, "assign"), b.map(s, qt), c = cc11001100_hook("c", 0, "assign"); a > c; c++) o = cc11001100_hook("o", s[c], "assign"), kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
          url: cc11001100_hook("url", o.src, "object-key-init"),
          type: cc11001100_hook("type", "GET", "object-key-init"),
          dataType: cc11001100_hook("dataType", "script", "object-key-init"),
          async: cc11001100_hook("async", !1, "object-key-init"),
          global: cc11001100_hook("global", !1, "object-key-init"),
          "throws": cc11001100_hook("throws", !0, "object-key-init")
        }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
        l = cc11001100_hook("l", i = cc11001100_hook("i", null, "assign"), "assign");
      }
      return this;
    }
  });
  function Lt(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
  }
  function Ht(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.getAttributeNode("type"), "var-init");
    return e.type = cc11001100_hook("e.type", (t && t.specified) + "/" + e.type, "assign"), e;
  }
  function qt(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", Et.exec(e.type), "var-init");
    return t ? e.type = cc11001100_hook("e.type", t[1], "assign") : e.removeAttribute("type"), e;
  }
  function Mt(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r = cc11001100_hook("r", 0, "var-init");
    for (; null != (n = cc11001100_hook("n", e[r], "assign")); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"));
  }
  function _t(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (1 === t.nodeType && b.hasData(e)) {
      var n,
        r,
        i,
        o = cc11001100_hook("o", b._data(e), "var-init"),
        a = cc11001100_hook("a", b._data(t, o), "var-init"),
        s = cc11001100_hook("s", o.events, "var-init");
      if (s) {
        delete a.handle, a.events = cc11001100_hook("a.events", {}, "assign");
        for (n in s) for (r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", s[n].length, "assign"); i > r; r++) b.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = cc11001100_hook("a.data", b.extend({}, a.data), "assign"));
    }
  }
  function Ft(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = cc11001100_hook("n", t.nodeName.toLowerCase(), "assign"), !b.support.noCloneEvent && t[b.expando]) {
        i = cc11001100_hook("i", b._data(t), "assign");
        for (r in i.events) b.removeEvent(t, r, i.handle);
        t.removeAttribute(b.expando);
      }
      "script" === n && t.text !== e.text ? (Ht(t).text = cc11001100_hook("Ht(t).text", e.text, "assign"), qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = cc11001100_hook("t.outerHTML", e.outerHTML, "assign")), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = cc11001100_hook("t.innerHTML", e.innerHTML, "assign"))) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = cc11001100_hook("t.defaultChecked", t.checked = cc11001100_hook("t.checked", e.checked, "assign"), "assign"), t.value !== e.value && (t.value = cc11001100_hook("t.value", e.value, "assign"))) : "option" === n ? t.defaultSelected = cc11001100_hook("t.defaultSelected", t.selected = cc11001100_hook("t.selected", e.defaultSelected, "assign"), "assign") : ("input" === n || "textarea" === n) && (t.defaultValue = cc11001100_hook("t.defaultValue", e.defaultValue, "assign"));
    }
  }
  b.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (e, t) {
    b.fn[e] = cc11001100_hook("b.fn[e]", function (e) {
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", b(e), "var-init"),
        a = cc11001100_hook("a", o.length - 1, "var-init");
      for (; a >= r; r++) n = cc11001100_hook("n", r === a ? this : this.clone(!0), "assign"), b(o[r])[t](n), d.apply(i, n.get());
      return this.pushStack(i);
    }, "assign");
  });
  function Ot(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      o,
      a = cc11001100_hook("a", 0, "var-init"),
      s = cc11001100_hook("s", typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t, "var-init");
    if (!s) for (s = cc11001100_hook("s", [], "assign"), r = cc11001100_hook("r", e.childNodes || e, "assign"); null != (o = cc11001100_hook("o", r[a], "assign")); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
    return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s;
  }
  function Bt(e) {
    cc11001100_hook("e", e, "function-parameter");
    Nt.test(e.type) && (e.defaultChecked = cc11001100_hook("e.defaultChecked", e.checked, "assign"));
  }
  b.extend({
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u = cc11001100_hook("u", b.contains(e.ownerDocument, e), "var-init");
      if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = cc11001100_hook("o", e.cloneNode(!0), "assign") : (Dt.innerHTML = cc11001100_hook("Dt.innerHTML", e.outerHTML, "assign"), Dt.removeChild(o = cc11001100_hook("o", Dt.firstChild, "assign"))), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = cc11001100_hook("r", Ot(o), "assign"), s = cc11001100_hook("s", Ot(e), "assign"), a = cc11001100_hook("a", 0, "assign"); null != (i = cc11001100_hook("i", s[a], "assign")); ++a) r[a] && Ft(i, r[a]);
      if (t) if (n) for (s = cc11001100_hook("s", s || Ot(e), "assign"), r = cc11001100_hook("r", r || Ot(o), "assign"), a = cc11001100_hook("a", 0, "assign"); null != (i = cc11001100_hook("i", s[a], "assign")); a++) _t(i, r[a]);else _t(e, o);
      return r = cc11001100_hook("r", Ot(o, "script"), "assign"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = cc11001100_hook("r", s = cc11001100_hook("s", i = cc11001100_hook("i", null, "assign"), "assign"), "assign"), o;
    },
    buildFragment: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        p = cc11001100_hook("p", e.length, "var-init"),
        f = cc11001100_hook("f", dt(t), "var-init"),
        d = cc11001100_hook("d", [], "var-init"),
        h = cc11001100_hook("h", 0, "var-init");
      for (; p > h; h++) if (o = cc11001100_hook("o", e[h], "assign"), o || 0 === o) if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);else if (wt.test(o)) {
        s = cc11001100_hook("s", s || f.appendChild(t.createElement("div")), "assign"), u = cc11001100_hook("u", (bt.exec(o) || ["", ""])[1].toLowerCase(), "assign"), c = cc11001100_hook("c", At[u] || At._default, "assign"), s.innerHTML = cc11001100_hook("s.innerHTML", c[1] + o.replace(vt, "<$1></$2>") + c[2], "assign"), i = cc11001100_hook("i", c[0], "assign");
        while (i--) s = cc11001100_hook("s", s.lastChild, "assign");
        if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
          o = cc11001100_hook("o", "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, "assign"), i = cc11001100_hook("i", o && o.childNodes.length, "assign");
          while (i--) b.nodeName(l = cc11001100_hook("l", o.childNodes[i], "assign"), "tbody") && !l.childNodes.length && o.removeChild(l);
        }
        b.merge(d, s.childNodes), s.textContent = cc11001100_hook("s.textContent", "", "assign");
        while (s.firstChild) s.removeChild(s.firstChild);
        s = cc11001100_hook("s", f.lastChild, "assign");
      } else d.push(t.createTextNode(o));
      s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = cc11001100_hook("h", 0, "assign");
      while (o = cc11001100_hook("o", d[h++], "assign")) if ((!r || -1 === b.inArray(o, r)) && (a = cc11001100_hook("a", b.contains(o.ownerDocument, o), "assign"), s = cc11001100_hook("s", Ot(f.appendChild(o), "script"), "assign"), a && Mt(s), n)) {
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
        u = cc11001100_hook("u", b.expando, "var-init"),
        l = cc11001100_hook("l", b.cache, "var-init"),
        p = cc11001100_hook("p", b.support.deleteExpando, "var-init"),
        f = cc11001100_hook("f", b.event.special, "var-init");
      for (; null != (n = cc11001100_hook("n", e[s], "assign")); s++) if ((t || b.acceptData(n)) && (o = cc11001100_hook("o", n[u], "assign"), a = cc11001100_hook("a", o && l[o], "assign"))) {
        if (a.events) for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
        l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = cc11001100_hook("n[u]", null, "assign"), c.push(o));
      }
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
    Vt = cc11001100_hook("Vt", RegExp("^(" + x + ")(.*)$", "i"), "var-init"),
    Yt = cc11001100_hook("Yt", RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), "var-init"),
    Jt = cc11001100_hook("Jt", RegExp("^([+-])=(" + x + ")", "i"), "var-init"),
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
    return e = cc11001100_hook("e", t || e, "assign"), "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e);
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
    for (; s > a; a++) r = cc11001100_hook("r", e[a], "assign"), r.style && (o[a] = cc11001100_hook("o[a]", b._data(r, "olddisplay"), "assign"), n = cc11001100_hook("n", r.style.display, "assign"), t ? (o[a] || "none" !== n || (r.style.display = cc11001100_hook("r.style.display", "", "assign")), "" === r.style.display && nn(r) && (o[a] = cc11001100_hook("o[a]", b._data(r, "olddisplay", un(r.nodeName)), "assign"))) : o[a] || (i = cc11001100_hook("i", nn(r), "assign"), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
    for (a = cc11001100_hook("a", 0, "assign"); s > a; a++) r = cc11001100_hook("r", e[a], "assign"), r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = cc11001100_hook("r.style.display", t ? o[a] || "" : "none", "assign")));
    return e;
  }
  b.fn.extend({
    css: function (e, n) {
      return b.access(this, function (e, n, r) {
        var i,
          o,
          a = cc11001100_hook("a", {}, "var-init"),
          s = cc11001100_hook("s", 0, "var-init");
        if (b.isArray(n)) {
          for (o = cc11001100_hook("o", Rt(e), "assign"), i = cc11001100_hook("i", n.length, "assign"); i > s; s++) a[n[s]] = cc11001100_hook("a[n[s]]", b.css(e, n[s], !1, o), "assign");
          return a;
        }
        return r !== t ? b.style(e, n, r) : b.css(e, n);
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
        (t ? e : nn(this)) ? b(this).show() : b(this).hide();
      });
    }
  }), b.extend({
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
      "float": cc11001100_hook("float", b.support.cssFloat ? "cssFloat" : "styleFloat", "object-key-init")
    },
    style: function (e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          a,
          s,
          u = cc11001100_hook("u", b.camelCase(n), "var-init"),
          l = cc11001100_hook("l", e.style, "var-init");
        if (n = cc11001100_hook("n", b.cssProps[u] || (b.cssProps[u] = cc11001100_hook("b.cssProps[u]", tn(l, u), "assign")), "assign"), s = cc11001100_hook("s", b.cssHooks[n] || b.cssHooks[u], "assign"), r === t) return s && "get" in s && (o = cc11001100_hook("o", s.get(e, !1, i), "assign")) !== t ? o : l[n];
        if (a = cc11001100_hook("a", typeof r, "assign"), "string" === a && (o = cc11001100_hook("o", Jt.exec(r), "assign")) && (r = cc11001100_hook("r", (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), "assign"), a = cc11001100_hook("a", "number", "assign")), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += cc11001100_hook("r", "px", "assign")), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = cc11001100_hook("l[n]", "inherit", "assign")), s && "set" in s && (r = cc11001100_hook("r", s.set(e, r, i), "assign")) === t))) try {
          l[n] = cc11001100_hook("l[n]", r, "assign");
        } catch (c) {}
      }
    },
    css: function (e, n, r, i) {
      var o,
        a,
        s,
        u = cc11001100_hook("u", b.camelCase(n), "var-init");
      return n = cc11001100_hook("n", b.cssProps[u] || (b.cssProps[u] = cc11001100_hook("b.cssProps[u]", tn(e.style, u), "assign")), "assign"), s = cc11001100_hook("s", b.cssHooks[n] || b.cssHooks[u], "assign"), s && "get" in s && (a = cc11001100_hook("a", s.get(e, !0, r), "assign")), a === t && (a = cc11001100_hook("a", Wt(e, n, i), "assign")), "normal" === a && n in Kt && (a = cc11001100_hook("a", Kt[n], "assign")), "" === r || r ? (o = cc11001100_hook("o", parseFloat(a), "assign"), r === !0 || b.isNumeric(o) ? o || 0 : a) : a;
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
  }), e.getComputedStyle ? (Rt = cc11001100_hook("Rt", function (t) {
    return e.getComputedStyle(t, null);
  }, "assign"), Wt = cc11001100_hook("Wt", function (e, n, r) {
    var i,
      o,
      a,
      s = cc11001100_hook("s", r || Rt(e), "var-init"),
      u = cc11001100_hook("u", s ? s.getPropertyValue(n) || s[n] : t, "var-init"),
      l = cc11001100_hook("l", e.style, "var-init");
    return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = cc11001100_hook("u", b.style(e, n), "assign")), Yt.test(u) && Ut.test(n) && (i = cc11001100_hook("i", l.width, "assign"), o = cc11001100_hook("o", l.minWidth, "assign"), a = cc11001100_hook("a", l.maxWidth, "assign"), l.minWidth = cc11001100_hook("l.minWidth", l.maxWidth = cc11001100_hook("l.maxWidth", l.width = cc11001100_hook("l.width", u, "assign"), "assign"), "assign"), u = cc11001100_hook("u", s.width, "assign"), l.width = cc11001100_hook("l.width", i, "assign"), l.minWidth = cc11001100_hook("l.minWidth", o, "assign"), l.maxWidth = cc11001100_hook("l.maxWidth", a, "assign"))), u;
  }, "assign")) : o.documentElement.currentStyle && (Rt = cc11001100_hook("Rt", function (e) {
    return e.currentStyle;
  }, "assign"), Wt = cc11001100_hook("Wt", function (e, n, r) {
    var i,
      o,
      a,
      s = cc11001100_hook("s", r || Rt(e), "var-init"),
      u = cc11001100_hook("u", s ? s[n] : t, "var-init"),
      l = cc11001100_hook("l", e.style, "var-init");
    return null == u && l && l[n] && (u = cc11001100_hook("u", l[n], "assign")), Yt.test(u) && !zt.test(n) && (i = cc11001100_hook("i", l.left, "assign"), o = cc11001100_hook("o", e.runtimeStyle, "assign"), a = cc11001100_hook("a", o && o.left, "assign"), a && (o.left = cc11001100_hook("o.left", e.currentStyle.left, "assign")), l.left = cc11001100_hook("l.left", "fontSize" === n ? "1em" : u, "assign"), u = cc11001100_hook("u", l.pixelLeft + "px", "assign"), l.left = cc11001100_hook("l.left", i, "assign"), a && (o.left = cc11001100_hook("o.left", a, "assign"))), "" === u ? "auto" : u;
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
    for (; 4 > o; o += cc11001100_hook("o", 2, "assign")) "margin" === n && (a += cc11001100_hook("a", b.css(e, n + Zt[o], !0, i), "assign")), r ? ("content" === n && (a -= cc11001100_hook("a", b.css(e, "padding" + Zt[o], !0, i), "assign")), "margin" !== n && (a -= cc11001100_hook("a", b.css(e, "border" + Zt[o] + "Width", !0, i), "assign"))) : (a += cc11001100_hook("a", b.css(e, "padding" + Zt[o], !0, i), "assign"), "padding" !== n && (a += cc11001100_hook("a", b.css(e, "border" + Zt[o] + "Width", !0, i), "assign")));
    return a;
  }
  function sn(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", !0, "var-init"),
      i = cc11001100_hook("i", "width" === t ? e.offsetWidth : e.offsetHeight, "var-init"),
      o = cc11001100_hook("o", Rt(e), "var-init"),
      a = cc11001100_hook("a", b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o), "var-init");
    if (0 >= i || null == i) {
      if (i = cc11001100_hook("i", Wt(e, t, o), "assign"), (0 > i || null == i) && (i = cc11001100_hook("i", e.style[t], "assign")), Yt.test(i)) return i;
      r = cc11001100_hook("r", a && (b.support.boxSizingReliable || i === e.style[t]), "assign"), i = cc11001100_hook("i", parseFloat(i) || 0, "assign");
    }
    return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function un(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", o, "var-init"),
      n = cc11001100_hook("n", Gt[e], "var-init");
    return n || (n = cc11001100_hook("n", ln(e, t), "assign"), "none" !== n && n || (Pt = cc11001100_hook("Pt", (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), "assign"), t = cc11001100_hook("t", (Pt[0].contentWindow || Pt[0].contentDocument).document, "assign"), t.write("<!doctype html><html><body>"), t.close(), n = cc11001100_hook("n", ln(e, t), "assign"), Pt.detach()), Gt[e] = cc11001100_hook("Gt[e]", n, "assign")), n;
  }
  function ln(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", b(t.createElement(e)).appendTo(t.body), "var-init"),
      r = cc11001100_hook("r", b.css(n[0], "display"), "var-init");
    return n.remove(), r;
  }
  b.each(["height", "width"], function (e, n) {
    b.cssHooks[n] = cc11001100_hook("b.cssHooks[n]", {
      get: function (e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () {
          return sn(e, n, i);
        }) : sn(e, n, i) : t;
      },
      set: function (e, t, r) {
        var i = cc11001100_hook("i", r && Rt(e), "var-init");
        return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0);
      }
    }, "assign");
  }), b.support.opacity || (b.cssHooks.opacity = cc11001100_hook("b.cssHooks.opacity", {
    get: function (e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function (e, t) {
      var n = cc11001100_hook("n", e.style, "var-init"),
        r = cc11001100_hook("r", e.currentStyle, "var-init"),
        i = cc11001100_hook("i", b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", "var-init"),
        o = cc11001100_hook("o", r && r.filter || n.filter || "", "var-init");
      n.zoom = cc11001100_hook("n.zoom", 1, "assign"), (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = cc11001100_hook("n.filter", $t.test(o) ? o.replace($t, i) : o + " " + i, "assign"));
    }
  }, "assign")), b(function () {
    b.support.reliableMarginRight || (b.cssHooks.marginRight = cc11001100_hook("b.cssHooks.marginRight", {
      get: function (e, n) {
        return n ? b.swap(e, {
          display: cc11001100_hook("display", "inline-block", "object-key-init")
        }, Wt, [e, "marginRight"]) : t;
      }
    }, "assign")), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) {
      b.cssHooks[n] = cc11001100_hook("b.cssHooks[n]", {
        get: function (e, r) {
          return r ? (r = cc11001100_hook("r", Wt(e, n), "assign"), Yt.test(r) ? b(e).position()[n] + "px" : r) : t;
        }
      }, "assign");
    });
  }), b.expr && b.expr.filters && (b.expr.filters.hidden = cc11001100_hook("b.expr.filters.hidden", function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"));
  }, "assign"), b.expr.filters.visible = cc11001100_hook("b.expr.filters.visible", function (e) {
    return !b.expr.filters.hidden(e);
  }, "assign")), b.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (e, t) {
    b.cssHooks[e + t] = cc11001100_hook("b.cssHooks[e + t]", {
      expand: function (n) {
        var r = cc11001100_hook("r", 0, "var-init"),
          i = cc11001100_hook("i", {}, "var-init"),
          o = cc11001100_hook("o", "string" == typeof n ? n.split(" ") : [n], "var-init");
        for (; 4 > r; r++) i[e + Zt[r] + t] = cc11001100_hook("i[e + Zt[r] + t]", o[r] || o[r - 2] || o[0], "assign");
        return i;
      }
    }, "assign"), Ut.test(e) || (b.cssHooks[e + t].set = cc11001100_hook("b.cssHooks[e + t].set", on, "assign"));
  });
  var cn = cc11001100_hook("cn", /%20/g, "var-init"),
    pn = cc11001100_hook("pn", /\[\]$/, "var-init"),
    fn = cc11001100_hook("fn", /\r?\n/g, "var-init"),
    dn = cc11001100_hook("dn", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    hn = cc11001100_hook("hn", /^(?:input|select|textarea|keygen)/i, "var-init");
  b.fn.extend({
    serialize: function () {
      return b.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", b.prop(this, "elements"), "var-init");
        return e ? b.makeArray(e) : this;
      }).filter(function () {
        var e = cc11001100_hook("e", this.type, "var-init");
        return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e));
      }).map(function (e, t) {
        var n = cc11001100_hook("n", b(this).val(), "var-init");
        return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
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
  }), b.param = cc11001100_hook("b.param", function (e, n) {
    var r,
      i = cc11001100_hook("i", [], "var-init"),
      o = function (e, t) {
        t = cc11001100_hook("t", b.isFunction(t) ? t() : null == t ? "" : t, "assign"), i[i.length] = cc11001100_hook("i[i.length]", encodeURIComponent(e) + "=" + encodeURIComponent(t), "assign");
      };
    if (n === t && (n = cc11001100_hook("n", b.ajaxSettings && b.ajaxSettings.traditional, "assign")), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
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
    if (b.isArray(t)) b.each(t, function (t, i) {
      n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== b.type(t)) r(e, t);else for (i in t) gn(e + "[" + i + "]", t[i], n, r);
  }
  b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    b.fn[t] = cc11001100_hook("b.fn[t]", function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    }, "assign");
  }), b.fn.hover = cc11001100_hook("b.fn.hover", function (e, t) {
    return this.mouseenter(e).mouseleave(t || e);
  }, "assign");
  var mn,
    yn,
    vn = cc11001100_hook("vn", b.now(), "var-init"),
    bn = cc11001100_hook("bn", /\?/, "var-init"),
    xn = cc11001100_hook("xn", /#.*$/, "var-init"),
    wn = cc11001100_hook("wn", /([?&])_=[^&]*/, "var-init"),
    Tn = cc11001100_hook("Tn", /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, "var-init"),
    Nn = cc11001100_hook("Nn", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
    Cn = cc11001100_hook("Cn", /^(?:GET|HEAD)$/, "var-init"),
    kn = cc11001100_hook("kn", /^\/\//, "var-init"),
    En = cc11001100_hook("En", /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, "var-init"),
    Sn = cc11001100_hook("Sn", b.fn.load, "var-init"),
    An = cc11001100_hook("An", {}, "var-init"),
    jn = cc11001100_hook("jn", {}, "var-init"),
    Dn = cc11001100_hook("Dn", "*/".concat("*"), "var-init");
  try {
    yn = cc11001100_hook("yn", a.href, "assign");
  } catch (Ln) {
    yn = cc11001100_hook("yn", o.createElement("a"), "assign"), yn.href = cc11001100_hook("yn.href", "", "assign"), yn = cc11001100_hook("yn", yn.href, "assign");
  }
  mn = cc11001100_hook("mn", En.exec(yn.toLowerCase()) || [], "assign");
  function Hn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function (t, n) {
      "string" != typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", "*", "assign"));
      var r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", t.toLowerCase().match(w) || [], "var-init");
      if (b.isFunction(n)) while (r = cc11001100_hook("r", o[i++], "assign")) "+" === r[0] ? (r = cc11001100_hook("r", r.slice(1) || "*", "assign"), (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).unshift(n)) : (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).push(n);
    };
  }
  function qn(e, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var o = cc11001100_hook("o", {}, "var-init"),
      a = cc11001100_hook("a", e === jn, "var-init");
    function s(u) {
      cc11001100_hook("u", u, "function-parameter");
      var l;
      return o[u] = cc11001100_hook("o[u]", !0, "assign"), b.each(e[u] || [], function (e, u) {
        var c = cc11001100_hook("c", u(n, r, i), "var-init");
        return "string" != typeof c || a || o[c] ? a ? !(l = cc11001100_hook("l", c, "assign")) : t : (n.dataTypes.unshift(c), s(c), !1);
      }), l;
    }
    return s(n.dataTypes[0]) || !o["*"] && s("*");
  }
  function Mn(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", b.ajaxSettings.flatOptions || {}, "var-init");
    for (i in n) n[i] !== t && ((o[i] ? e : r || (r = cc11001100_hook("r", {}, "assign")))[i] = cc11001100_hook("(o[i] ? e : r || (r = {}))[i]", n[i], "assign"));
    return r && b.extend(!0, e, r), e;
  }
  b.fn.load = cc11001100_hook("b.fn.load", function (e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
    var i,
      o,
      a,
      s = cc11001100_hook("s", this, "var-init"),
      u = cc11001100_hook("u", e.indexOf(" "), "var-init");
    return u >= 0 && (i = cc11001100_hook("i", e.slice(u, e.length), "assign"), e = cc11001100_hook("e", e.slice(0, u), "assign")), b.isFunction(n) ? (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign")) : n && "object" == typeof n && (a = cc11001100_hook("a", "POST", "assign")), s.length > 0 && b.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", a, "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", n, "object-key-init")
    }).done(function (e) {
      o = cc11001100_hook("o", arguments, "assign"), s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, "assign"), b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    b.fn[t] = cc11001100_hook("b.fn[t]", function (e) {
      return this.on(t, e);
    }, "assign");
  }), b.each(["get", "post"], function (e, n) {
    b[n] = cc11001100_hook("b[n]", function (e, r, i, o) {
      return b.isFunction(r) && (o = cc11001100_hook("o", o || i, "assign"), i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", t, "assign")), b.ajax({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", n, "object-key-init"),
        dataType: cc11001100_hook("dataType", o, "object-key-init"),
        data: cc11001100_hook("data", r, "object-key-init"),
        success: cc11001100_hook("success", i, "object-key-init")
      });
    }, "assign");
  }), b.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", yn, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", Nn.test(mn[1]), "object-key-init"),
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
        text: cc11001100_hook("text", "responseText", "object-key-init")
      },
      converters: {
        "* text": cc11001100_hook("* text", e.String, "object-key-init"),
        "text html": cc11001100_hook("text html", !0, "object-key-init"),
        "text json": cc11001100_hook("text json", b.parseJSON, "object-key-init"),
        "text xml": cc11001100_hook("text xml", b.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", !0, "object-key-init"),
        context: cc11001100_hook("context", !0, "object-key-init")
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e);
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
        u,
        l,
        c,
        p = cc11001100_hook("p", b.ajaxSetup({}, n), "var-init"),
        f = cc11001100_hook("f", p.context || p, "var-init"),
        d = cc11001100_hook("d", p.context && (f.nodeType || f.jquery) ? b(f) : b.event, "var-init"),
        h = cc11001100_hook("h", b.Deferred(), "var-init"),
        g = cc11001100_hook("g", b.Callbacks("once memory"), "var-init"),
        m = cc11001100_hook("m", p.statusCode || {}, "var-init"),
        y = cc11001100_hook("y", {}, "var-init"),
        v = cc11001100_hook("v", {}, "var-init"),
        x = cc11001100_hook("x", 0, "var-init"),
        T = cc11001100_hook("T", "canceled", "var-init"),
        N = cc11001100_hook("N", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (e) {
            var t;
            if (2 === x) {
              if (!c) {
                c = cc11001100_hook("c", {}, "assign");
                while (t = cc11001100_hook("t", Tn.exec(a), "assign")) c[t[1].toLowerCase()] = cc11001100_hook("c[t[1].toLowerCase()]", t[2], "assign");
              }
              t = cc11001100_hook("t", c[e.toLowerCase()], "assign");
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === x ? a : null;
          },
          setRequestHeader: function (e, t) {
            var n = cc11001100_hook("n", e.toLowerCase(), "var-init");
            return x || (e = cc11001100_hook("e", v[n] = cc11001100_hook("v[n]", v[n] || e, "assign"), "assign"), y[e] = cc11001100_hook("y[e]", t, "assign")), this;
          },
          overrideMimeType: function (e) {
            return x || (p.mimeType = cc11001100_hook("p.mimeType", e, "assign")), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (2 > x) for (t in e) m[t] = cc11001100_hook("m[t]", [m[t], e[t]], "assign");else N.always(e[N.status]);
            return this;
          },
          abort: function (e) {
            var t = cc11001100_hook("t", e || T, "var-init");
            return l && l.abort(t), k(0, t), this;
          }
        }, "var-init");
      if (h.promise(N).complete = cc11001100_hook("h.promise(N).complete", g.add, "assign"), N.success = cc11001100_hook("N.success", N.done, "assign"), N.error = cc11001100_hook("N.error", N.fail, "assign"), p.url = cc11001100_hook("p.url", ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), "assign"), p.type = cc11001100_hook("p.type", n.method || n.type || p.method || p.type, "assign"), p.dataTypes = cc11001100_hook("p.dataTypes", b.trim(p.dataType || "*").toLowerCase().match(w) || [""], "assign"), null == p.crossDomain && (r = cc11001100_hook("r", En.exec(p.url.toLowerCase()), "assign"), p.crossDomain = cc11001100_hook("p.crossDomain", !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443))), "assign")), p.data && p.processData && "string" != typeof p.data && (p.data = cc11001100_hook("p.data", b.param(p.data, p.traditional), "assign")), qn(An, p, n, N), 2 === x) return N;
      u = cc11001100_hook("u", p.global, "assign"), u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = cc11001100_hook("p.type", p.type.toUpperCase(), "assign"), p.hasContent = cc11001100_hook("p.hasContent", !Cn.test(p.type), "assign"), o = cc11001100_hook("o", p.url, "assign"), p.hasContent || (p.data && (o = cc11001100_hook("o", p.url += cc11001100_hook("p.url", (bn.test(o) ? "&" : "?") + p.data, "assign"), "assign"), delete p.data), p.cache === !1 && (p.url = cc11001100_hook("p.url", wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++, "assign"))), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
      for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
      if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
      T = cc11001100_hook("T", "abort", "assign");
      for (i in {
        success: cc11001100_hook("success", 1, "object-key-init"),
        error: cc11001100_hook("error", 1, "object-key-init"),
        complete: cc11001100_hook("complete", 1, "object-key-init")
      }) N[i](p[i]);
      if (l = cc11001100_hook("l", qn(jn, p, n, N), "assign")) {
        N.readyState = cc11001100_hook("N.readyState", 1, "assign"), u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = cc11001100_hook("s", setTimeout(function () {
          N.abort("timeout");
        }, p.timeout), "assign"));
        try {
          x = cc11001100_hook("x", 1, "assign"), l.send(y, k);
        } catch (C) {
          if (!(2 > x)) throw C;
          k(-1, C);
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
          C = cc11001100_hook("C", n, "var-init");
        2 !== x && (x = cc11001100_hook("x", 2, "assign"), s && clearTimeout(s), l = cc11001100_hook("l", t, "assign"), a = cc11001100_hook("a", i || "", "assign"), N.readyState = cc11001100_hook("N.readyState", e > 0 ? 4 : 0, "assign"), r && (w = cc11001100_hook("w", _n(p, N, r), "assign")), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = cc11001100_hook("T", N.getResponseHeader("Last-Modified"), "assign"), T && (b.lastModified[o] = cc11001100_hook("b.lastModified[o]", T, "assign")), T = cc11001100_hook("T", N.getResponseHeader("etag"), "assign"), T && (b.etag[o] = cc11001100_hook("b.etag[o]", T, "assign"))), 204 === e ? (c = cc11001100_hook("c", !0, "assign"), C = cc11001100_hook("C", "nocontent", "assign")) : 304 === e ? (c = cc11001100_hook("c", !0, "assign"), C = cc11001100_hook("C", "notmodified", "assign")) : (c = cc11001100_hook("c", Fn(p, w), "assign"), C = cc11001100_hook("C", c.state, "assign"), y = cc11001100_hook("y", c.data, "assign"), v = cc11001100_hook("v", c.error, "assign"), c = cc11001100_hook("c", !v, "assign"))) : (v = cc11001100_hook("v", C, "assign"), (e || !C) && (C = cc11001100_hook("C", "error", "assign"), 0 > e && (e = cc11001100_hook("e", 0, "assign")))), N.status = cc11001100_hook("N.status", e, "assign"), N.statusText = cc11001100_hook("N.statusText", (n || C) + "", "assign"), c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = cc11001100_hook("m", t, "assign"), u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")));
      }
      return N;
    },
    getScript: function (e, n) {
      return b.get(e, t, n, "script");
    },
    getJSON: function (e, t, n) {
      return b.get(e, t, n, "json");
    }
  });
  function _n(e, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i,
      o,
      a,
      s,
      u = cc11001100_hook("u", e.contents, "var-init"),
      l = cc11001100_hook("l", e.dataTypes, "var-init"),
      c = cc11001100_hook("c", e.responseFields, "var-init");
    for (s in c) s in r && (n[c[s]] = cc11001100_hook("n[c[s]]", r[s], "assign"));
    while ("*" === l[0]) l.shift(), o === t && (o = cc11001100_hook("o", e.mimeType || n.getResponseHeader("Content-Type"), "assign"));
    if (o) for (s in u) if (u[s] && u[s].test(o)) {
      l.unshift(s);
      break;
    }
    if (l[0] in r) a = cc11001100_hook("a", l[0], "assign");else {
      for (s in r) {
        if (!l[0] || e.converters[s + " " + l[0]]) {
          a = cc11001100_hook("a", s, "assign");
          break;
        }
        i || (i = cc11001100_hook("i", s, "assign"));
      }
      a = cc11001100_hook("a", a || i, "assign");
    }
    return a ? (a !== l[0] && l.unshift(a), r[a]) : t;
  }
  function Fn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r,
      i,
      o,
      a = cc11001100_hook("a", {}, "var-init"),
      s = cc11001100_hook("s", 0, "var-init"),
      u = cc11001100_hook("u", e.dataTypes.slice(), "var-init"),
      l = cc11001100_hook("l", u[0], "var-init");
    if (e.dataFilter && (t = cc11001100_hook("t", e.dataFilter(t, e.dataType), "assign")), u[1]) for (i in e.converters) a[i.toLowerCase()] = cc11001100_hook("a[i.toLowerCase()]", e.converters[i], "assign");
    for (; r = cc11001100_hook("r", u[++s], "assign");) if ("*" !== r) {
      if ("*" !== l && l !== r) {
        if (i = cc11001100_hook("i", a[l + " " + r] || a["* " + r], "assign"), !i) for (n in a) if (o = cc11001100_hook("o", n.split(" "), "assign"), o[1] === r && (i = cc11001100_hook("i", a[l + " " + o[0]] || a["* " + o[0]], "assign"))) {
          i === !0 ? i = cc11001100_hook("i", a[n], "assign") : a[n] !== !0 && (r = cc11001100_hook("r", o[0], "assign"), u.splice(s--, 0, r));
          break;
        }
        if (i !== !0) if (i && e["throws"]) t = cc11001100_hook("t", i(t), "assign");else try {
          t = cc11001100_hook("t", i(t), "assign");
        } catch (c) {
          return {
            state: cc11001100_hook("state", "parsererror", "object-key-init"),
            error: cc11001100_hook("error", i ? c : "No conversion from " + l + " to " + r, "object-key-init")
          };
        }
      }
      l = cc11001100_hook("l", r, "assign");
    }
    return {
      state: cc11001100_hook("state", "success", "object-key-init"),
      data: cc11001100_hook("data", t, "object-key-init")
    };
  }
  b.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /(?:java|ecma)script/, "object-key-init")
    },
    converters: {
      "text script": function (e) {
        return b.globalEval(e), e;
      }
    }
  }), b.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = cc11001100_hook("e.cache", !1, "assign")), e.crossDomain && (e.type = cc11001100_hook("e.type", "GET", "assign"), e.global = cc11001100_hook("e.global", !1, "assign"));
  }), b.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
        r = cc11001100_hook("r", o.head || b("head")[0] || o.documentElement, "var-init");
      return {
        send: function (t, i) {
          n = cc11001100_hook("n", o.createElement("script"), "assign"), n.async = cc11001100_hook("n.async", !0, "assign"), e.scriptCharset && (n.charset = cc11001100_hook("n.charset", e.scriptCharset, "assign")), n.src = cc11001100_hook("n.src", e.url, "assign"), n.onload = cc11001100_hook("n.onload", n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = cc11001100_hook("n.onload", n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), "assign"), n.parentNode && n.parentNode.removeChild(n), n = cc11001100_hook("n", null, "assign"), t || i(200, "success"));
          }, "assign"), "assign"), r.insertBefore(n, r.firstChild);
        },
        abort: function () {
          n && n.onload(t, !0);
        }
      };
    }
  });
  var On = cc11001100_hook("On", [], "var-init"),
    Bn = cc11001100_hook("Bn", /(=)\?(?=&|$)|\?\?/, "var-init");
  b.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var e = cc11001100_hook("e", On.pop() || b.expando + "_" + vn++, "var-init");
      return this[e] = cc11001100_hook("this[e]", !0, "assign"), e;
    }
  }), b.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o,
      a,
      s,
      u = cc11001100_hook("u", n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"), "var-init");
    return u || "jsonp" === n.dataTypes[0] ? (o = cc11001100_hook("o", n.jsonpCallback = cc11001100_hook("n.jsonpCallback", b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, "assign"), "assign"), u ? n[u] = cc11001100_hook("n[u]", n[u].replace(Bn, "$1" + o), "assign") : n.jsonp !== !1 && (n.url += cc11001100_hook("n.url", (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o, "assign")), n.converters["script json"] = cc11001100_hook("n.converters[\"script json\"]", function () {
      return s || b.error(o + " was not called"), s[0];
    }, "assign"), n.dataTypes[0] = cc11001100_hook("n.dataTypes[0]", "json", "assign"), a = cc11001100_hook("a", e[o], "assign"), e[o] = cc11001100_hook("e[o]", function () {
      s = cc11001100_hook("s", arguments, "assign");
    }, "assign"), i.always(function () {
      e[o] = cc11001100_hook("e[o]", a, "assign"), n[o] && (n.jsonpCallback = cc11001100_hook("n.jsonpCallback", r.jsonpCallback, "assign"), On.push(o)), s && b.isFunction(a) && a(s[0]), s = cc11001100_hook("s", a = cc11001100_hook("a", t, "assign"), "assign");
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
  b.ajaxSettings.xhr = cc11001100_hook("b.ajaxSettings.xhr", e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn();
  } : In, "assign"), Rn = cc11001100_hook("Rn", b.ajaxSettings.xhr(), "assign"), b.support.cors = cc11001100_hook("b.support.cors", !!Rn && "withCredentials" in Rn, "assign"), Rn = cc11001100_hook("Rn", b.support.ajax = cc11001100_hook("b.support.ajax", !!Rn, "assign"), "assign"), Rn && b.ajaxTransport(function (n) {
    if (!n.crossDomain || b.support.cors) {
      var r;
      return {
        send: function (i, o) {
          var a,
            s,
            u = cc11001100_hook("u", n.xhr(), "var-init");
          if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = cc11001100_hook("u[s]", n.xhrFields[s], "assign");
          n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = cc11001100_hook("i[\"X-Requested-With\"]", "XMLHttpRequest", "assign"));
          try {
            for (s in i) u.setRequestHeader(s, i[s]);
          } catch (l) {}
          u.send(n.hasContent && n.data || null), r = cc11001100_hook("r", function (e, i) {
            var s, l, c, p;
            try {
              if (r && (i || 4 === u.readyState)) if (r = cc11001100_hook("r", t, "assign"), a && (u.onreadystatechange = cc11001100_hook("u.onreadystatechange", b.noop, "assign"), $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();else {
                p = cc11001100_hook("p", {}, "assign"), s = cc11001100_hook("s", u.status, "assign"), l = cc11001100_hook("l", u.getAllResponseHeaders(), "assign"), "string" == typeof u.responseText && (p.text = cc11001100_hook("p.text", u.responseText, "assign"));
                try {
                  c = cc11001100_hook("c", u.statusText, "assign");
                } catch (f) {
                  c = cc11001100_hook("c", "", "assign");
                }
                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = cc11001100_hook("s", 204, "assign")) : s = cc11001100_hook("s", p.text ? 200 : 404, "assign");
              }
            } catch (d) {
              i || o(-1, d);
            }
            p && o(s, c, p, l);
          }, "assign"), n.async ? 4 === u.readyState ? setTimeout(r) : (a = cc11001100_hook("a", ++Wn, "assign"), $n && (Pn || (Pn = cc11001100_hook("Pn", {}, "assign"), b(e).unload($n)), Pn[a] = cc11001100_hook("Pn[a]", r, "assign")), u.onreadystatechange = cc11001100_hook("u.onreadystatechange", r, "assign")) : r();
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
    Yn = cc11001100_hook("Yn", RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), "var-init"),
    Jn = cc11001100_hook("Jn", /queueHooks$/, "var-init"),
    Gn = cc11001100_hook("Gn", [nr], "var-init"),
    Qn = cc11001100_hook("Qn", {
      "*": cc11001100_hook("*", [function (e, t) {
        var n,
          r,
          i = cc11001100_hook("i", this.createTween(e, t), "var-init"),
          o = cc11001100_hook("o", Yn.exec(t), "var-init"),
          a = cc11001100_hook("a", i.cur(), "var-init"),
          s = cc11001100_hook("s", +a || 0, "var-init"),
          u = cc11001100_hook("u", 1, "var-init"),
          l = cc11001100_hook("l", 20, "var-init");
        if (o) {
          if (n = cc11001100_hook("n", +o[2], "assign"), r = cc11001100_hook("r", o[3] || (b.cssNumber[e] ? "" : "px"), "assign"), "px" !== r && s) {
            s = cc11001100_hook("s", b.css(i.elem, e, !0) || n || 1, "assign");
            do u = cc11001100_hook("u", u || ".5", "assign"), s /= cc11001100_hook("s", u, "assign"), b.style(i.elem, e, s + r); while (u !== (u = cc11001100_hook("u", i.cur() / a, "assign")) && 1 !== u && --l);
          }
          i.unit = cc11001100_hook("i.unit", r, "assign"), i.start = cc11001100_hook("i.start", s, "assign"), i.end = cc11001100_hook("i.end", o[1] ? s + (o[1] + 1) * n : n, "assign");
        }
        return i;
      }], "object-key-init")
    }, "var-init");
  function Kn() {
    return setTimeout(function () {
      Xn = cc11001100_hook("Xn", t, "assign");
    }), Xn = cc11001100_hook("Xn", b.now(), "assign");
  }
  function Zn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    b.each(t, function (t, n) {
      var r = cc11001100_hook("r", (Qn[t] || []).concat(Qn["*"]), "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", r.length, "var-init");
      for (; o > i; i++) if (r[i].call(e, t, n)) return;
    });
  }
  function er(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", 0, "var-init"),
      a = cc11001100_hook("a", Gn.length, "var-init"),
      s = cc11001100_hook("s", b.Deferred().always(function () {
        delete u.elem;
      }), "var-init"),
      u = function () {
        if (i) return !1;
        var t = cc11001100_hook("t", Xn || Kn(), "var-init"),
          n = cc11001100_hook("n", Math.max(0, l.startTime + l.duration - t), "var-init"),
          r = cc11001100_hook("r", n / l.duration || 0, "var-init"),
          o = cc11001100_hook("o", 1 - r, "var-init"),
          a = cc11001100_hook("a", 0, "var-init"),
          u = cc11001100_hook("u", l.tweens.length, "var-init");
        for (; u > a; a++) l.tweens[a].run(o);
        return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1);
      },
      l = cc11001100_hook("l", s.promise({
        elem: cc11001100_hook("elem", e, "object-key-init"),
        props: cc11001100_hook("props", b.extend({}, t), "object-key-init"),
        opts: cc11001100_hook("opts", b.extend(!0, {
          specialEasing: {}
        }, n), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", t, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", n, "object-key-init"),
        startTime: cc11001100_hook("startTime", Xn || Kn(), "object-key-init"),
        duration: cc11001100_hook("duration", n.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (t, n) {
          var r = cc11001100_hook("r", b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing), "var-init");
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = cc11001100_hook("n", 0, "var-init"),
            r = cc11001100_hook("r", t ? l.tweens.length : 0, "var-init");
          if (i) return this;
          for (i = cc11001100_hook("i", !0, "assign"); r > n; n++) l.tweens[n].run(1);
          return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this;
        }
      }), "var-init"),
      c = cc11001100_hook("c", l.props, "var-init");
    for (tr(c, l.opts.specialEasing); a > o; o++) if (r = cc11001100_hook("r", Gn[o].call(l, e, c, l.opts), "assign")) return r;
    return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
      elem: cc11001100_hook("elem", e, "object-key-init"),
      anim: cc11001100_hook("anim", l, "object-key-init"),
      queue: cc11001100_hook("queue", l.opts.queue, "object-key-init")
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }
  function tr(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i, o, a;
    for (i in e) if (r = cc11001100_hook("r", b.camelCase(i), "assign"), o = cc11001100_hook("o", t[r], "assign"), n = cc11001100_hook("n", e[i], "assign"), b.isArray(n) && (o = cc11001100_hook("o", n[1], "assign"), n = cc11001100_hook("n", e[i] = cc11001100_hook("e[i]", n[0], "assign"), "assign")), i !== r && (e[r] = cc11001100_hook("e[r]", n, "assign"), delete e[i]), a = cc11001100_hook("a", b.cssHooks[r], "assign"), a && "expand" in a) {
      n = cc11001100_hook("n", a.expand(n), "assign"), delete e[r];
      for (i in n) i in e || (e[i] = cc11001100_hook("e[i]", n[i], "assign"), t[i] = cc11001100_hook("t[i]", o, "assign"));
    } else t[r] = cc11001100_hook("t[r]", o, "assign");
  }
  b.Animation = cc11001100_hook("b.Animation", b.extend(er, {
    tweener: function (e, t) {
      b.isFunction(e) ? (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", ["*"], "assign")) : e = cc11001100_hook("e", e.split(" "), "assign");
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
      u,
      l,
      c,
      p,
      f = cc11001100_hook("f", this, "var-init"),
      d = cc11001100_hook("d", e.style, "var-init"),
      h = cc11001100_hook("h", {}, "var-init"),
      g = cc11001100_hook("g", [], "var-init"),
      m = cc11001100_hook("m", e.nodeType && nn(e), "var-init");
    n.queue || (c = cc11001100_hook("c", b._queueHooks(e, "fx"), "assign"), null == c.unqueued && (c.unqueued = cc11001100_hook("c.unqueued", 0, "assign"), p = cc11001100_hook("p", c.empty.fire, "assign"), c.empty.fire = cc11001100_hook("c.empty.fire", function () {
      c.unqueued || p();
    }, "assign")), c.unqueued++, f.always(function () {
      f.always(function () {
        c.unqueued--, b.queue(e, "fx").length || c.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = cc11001100_hook("n.overflow", [d.overflow, d.overflowX, d.overflowY], "assign"), "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = cc11001100_hook("d.zoom", 1, "assign") : d.display = cc11001100_hook("d.display", "inline-block", "assign"))), n.overflow && (d.overflow = cc11001100_hook("d.overflow", "hidden", "assign"), b.support.shrinkWrapBlocks || f.always(function () {
      d.overflow = cc11001100_hook("d.overflow", n.overflow[0], "assign"), d.overflowX = cc11001100_hook("d.overflowX", n.overflow[1], "assign"), d.overflowY = cc11001100_hook("d.overflowY", n.overflow[2], "assign");
    }));
    for (i in t) if (a = cc11001100_hook("a", t[i], "assign"), Vn.exec(a)) {
      if (delete t[i], u = cc11001100_hook("u", u || "toggle" === a, "assign"), a === (m ? "hide" : "show")) continue;
      g.push(i);
    }
    if (o = cc11001100_hook("o", g.length, "assign")) {
      s = cc11001100_hook("s", b._data(e, "fxshow") || b._data(e, "fxshow", {}), "assign"), "hidden" in s && (m = cc11001100_hook("m", s.hidden, "assign")), u && (s.hidden = cc11001100_hook("s.hidden", !m, "assign")), m ? b(e).show() : f.done(function () {
        b(e).hide();
      }), f.done(function () {
        var t;
        b._removeData(e, "fxshow");
        for (t in h) b.style(e, t, h[t]);
      });
      for (i = cc11001100_hook("i", 0, "assign"); o > i; i++) r = cc11001100_hook("r", g[i], "assign"), l = cc11001100_hook("l", f.createTween(r, m ? s[r] : 0), "assign"), h[r] = cc11001100_hook("h[r]", s[r] || b.style(e, r), "assign"), r in s || (s[r] = cc11001100_hook("s[r]", l.start, "assign"), m && (l.end = cc11001100_hook("l.end", l.start, "assign"), l.start = cc11001100_hook("l.start", "width" === r || "height" === r ? 1 : 0, "assign")));
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
  b.Tween = cc11001100_hook("b.Tween", rr, "assign"), rr.prototype = cc11001100_hook("rr.prototype", {
    constructor: cc11001100_hook("constructor", rr, "object-key-init"),
    init: function (e, t, n, r, i, o) {
      this.elem = cc11001100_hook("this.elem", e, "assign"), this.prop = cc11001100_hook("this.prop", n, "assign"), this.easing = cc11001100_hook("this.easing", i || "swing", "assign"), this.options = cc11001100_hook("this.options", t, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", r, "assign"), this.unit = cc11001100_hook("this.unit", o || (b.cssNumber[n] ? "" : "px"), "assign");
    },
    cur: function () {
      var e = cc11001100_hook("e", rr.propHooks[this.prop], "var-init");
      return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = cc11001100_hook("n", rr.propHooks[this.prop], "var-init");
      return this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * t + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
    }
  }, "assign"), rr.prototype.init.prototype = cc11001100_hook("rr.prototype.init.prototype", rr.prototype, "assign"), rr.propHooks = cc11001100_hook("rr.propHooks", {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = cc11001100_hook("t", b.css(e.elem, e.prop, ""), "assign"), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      },
      set: function (e) {
        b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign");
      }
    }
  }, "assign"), rr.propHooks.scrollTop = cc11001100_hook("rr.propHooks.scrollTop", rr.propHooks.scrollLeft = cc11001100_hook("rr.propHooks.scrollLeft", {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign"));
    }
  }, "assign"), "assign"), b.each(["toggle", "show", "hide"], function (e, t) {
    var n = cc11001100_hook("n", b.fn[t], "var-init");
    b.fn[t] = cc11001100_hook("b.fn[t]", function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
    }, "assign");
  }), b.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(nn).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", t, "object-key-init")
      }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = cc11001100_hook("i", b.isEmptyObject(e), "var-init"),
        o = cc11001100_hook("o", b.speed(t, n, r), "var-init"),
        a = function () {
          var t = cc11001100_hook("t", er(this, b.extend({}, e), o), "var-init");
          a.finish = cc11001100_hook("a.finish", function () {
            t.stop(!0);
          }, "assign"), (i || b._data(this, "finish")) && t.stop(!0);
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
          o = cc11001100_hook("o", b.timers, "var-init"),
          a = cc11001100_hook("a", b._data(this), "var-init");
        if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        for (n = cc11001100_hook("n", o.length, "assign"); n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = cc11001100_hook("t", !1, "assign"), o.splice(n, 1));
        (t || !r) && b.dequeue(this, e);
      });
    },
    finish: function (e) {
      return e !== !1 && (e = cc11001100_hook("e", e || "fx", "assign")), this.each(function () {
        var t,
          n = cc11001100_hook("n", b._data(this), "var-init"),
          r = cc11001100_hook("r", n[e + "queue"], "var-init"),
          i = cc11001100_hook("i", n[e + "queueHooks"], "var-init"),
          o = cc11001100_hook("o", b.timers, "var-init"),
          a = cc11001100_hook("a", r ? r.length : 0, "var-init");
        for (n.finish = cc11001100_hook("n.finish", !0, "assign"), b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = cc11001100_hook("t", o.length, "assign"); t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
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
  b.each({
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
    b.fn[e] = cc11001100_hook("b.fn[e]", function (e, n, r) {
      return this.animate(t, e, n, r);
    }, "assign");
  }), b.speed = cc11001100_hook("b.speed", function (e, t, n) {
    var r = cc11001100_hook("r", e && "object" == typeof e ? b.extend({}, e) : {
      complete: cc11001100_hook("complete", n || !n && t || b.isFunction(e) && e, "object-key-init"),
      duration: cc11001100_hook("duration", e, "object-key-init"),
      easing: cc11001100_hook("easing", n && t || t && !b.isFunction(t) && t, "object-key-init")
    }, "var-init");
    return r.duration = cc11001100_hook("r.duration", b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, "assign"), (null == r.queue || r.queue === !0) && (r.queue = cc11001100_hook("r.queue", "fx", "assign")), r.old = cc11001100_hook("r.old", r.complete, "assign"), r.complete = cc11001100_hook("r.complete", function () {
      b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
    }, "assign"), r;
  }, "assign"), b.easing = cc11001100_hook("b.easing", {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, "assign"), b.timers = cc11001100_hook("b.timers", [], "assign"), b.fx = cc11001100_hook("b.fx", rr.prototype.init, "assign"), b.fx.tick = cc11001100_hook("b.fx.tick", function () {
    var e,
      n = cc11001100_hook("n", b.timers, "var-init"),
      r = cc11001100_hook("r", 0, "var-init");
    for (Xn = cc11001100_hook("Xn", b.now(), "assign"); n.length > r; r++) e = cc11001100_hook("e", n[r], "assign"), e() || n[r] !== e || n.splice(r--, 1);
    n.length || b.fx.stop(), Xn = cc11001100_hook("Xn", t, "assign");
  }, "assign"), b.fx.timer = cc11001100_hook("b.fx.timer", function (e) {
    e() && b.timers.push(e) && b.fx.start();
  }, "assign"), b.fx.interval = cc11001100_hook("b.fx.interval", 13, "assign"), b.fx.start = cc11001100_hook("b.fx.start", function () {
    Un || (Un = cc11001100_hook("Un", setInterval(b.fx.tick, b.fx.interval), "assign"));
  }, "assign"), b.fx.stop = cc11001100_hook("b.fx.stop", function () {
    clearInterval(Un), Un = cc11001100_hook("Un", null, "assign");
  }, "assign"), b.fx.speeds = cc11001100_hook("b.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"), b.fx.step = cc11001100_hook("b.fx.step", {}, "assign"), b.expr && b.expr.filters && (b.expr.filters.animated = cc11001100_hook("b.expr.filters.animated", function (e) {
    return b.grep(b.timers, function (t) {
      return e === t.elem;
    }).length;
  }, "assign")), b.fn.offset = cc11001100_hook("b.fn.offset", function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      b.offset.setOffset(this, e, t);
    });
    var n,
      r,
      o = cc11001100_hook("o", {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      }, "var-init"),
      a = cc11001100_hook("a", this[0], "var-init"),
      s = cc11001100_hook("s", a && a.ownerDocument, "var-init");
    if (s) return n = cc11001100_hook("n", s.documentElement, "assign"), b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = cc11001100_hook("o", a.getBoundingClientRect(), "assign")), r = cc11001100_hook("r", or(s), "assign"), {
      top: cc11001100_hook("top", o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), "object-key-init"),
      left: cc11001100_hook("left", o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0), "object-key-init")
    }) : o;
  }, "assign"), b.offset = cc11001100_hook("b.offset", {
    setOffset: function (e, t, n) {
      var r = cc11001100_hook("r", b.css(e, "position"), "var-init");
      "static" === r && (e.style.position = cc11001100_hook("e.style.position", "relative", "assign"));
      var i = cc11001100_hook("i", b(e), "var-init"),
        o = cc11001100_hook("o", i.offset(), "var-init"),
        a = cc11001100_hook("a", b.css(e, "top"), "var-init"),
        s = cc11001100_hook("s", b.css(e, "left"), "var-init"),
        u = cc11001100_hook("u", ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1, "var-init"),
        l = cc11001100_hook("l", {}, "var-init"),
        c = cc11001100_hook("c", {}, "var-init"),
        p,
        f;
      u ? (c = cc11001100_hook("c", i.position(), "assign"), p = cc11001100_hook("p", c.top, "assign"), f = cc11001100_hook("f", c.left, "assign")) : (p = cc11001100_hook("p", parseFloat(a) || 0, "assign"), f = cc11001100_hook("f", parseFloat(s) || 0, "assign")), b.isFunction(t) && (t = cc11001100_hook("t", t.call(e, n, o), "assign")), null != t.top && (l.top = cc11001100_hook("l.top", t.top - o.top + p, "assign")), null != t.left && (l.left = cc11001100_hook("l.left", t.left - o.left + f, "assign")), "using" in t ? t.using.call(e, l) : i.css(l);
    }
  }, "assign"), b.fn.extend({
    position: function () {
      if (this[0]) {
        var e,
          t,
          n = cc11001100_hook("n", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init"),
          r = cc11001100_hook("r", this[0], "var-init");
        return "fixed" === b.css(r, "position") ? t = cc11001100_hook("t", r.getBoundingClientRect(), "assign") : (e = cc11001100_hook("e", this.offsetParent(), "assign"), t = cc11001100_hook("t", this.offset(), "assign"), b.nodeName(e[0], "html") || (n = cc11001100_hook("n", e.offset(), "assign")), n.top += cc11001100_hook("n.top", b.css(e[0], "borderTopWidth", !0), "assign"), n.left += cc11001100_hook("n.left", b.css(e[0], "borderLeftWidth", !0), "assign")), {
          top: cc11001100_hook("top", t.top - n.top - b.css(r, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", t.left - n.left - b.css(r, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", this.offsetParent || o.documentElement, "var-init");
        while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = cc11001100_hook("e", e.offsetParent, "assign");
        return e || o.documentElement;
      });
    }
  }), b.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (e, n) {
    var r = cc11001100_hook("r", /Y/.test(n), "var-init");
    b.fn[e] = cc11001100_hook("b.fn[e]", function (i) {
      return b.access(this, function (e, i, o) {
        var a = cc11001100_hook("a", or(e), "var-init");
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = cc11001100_hook("e[i]", o, "assign"), t);
      }, e, i, arguments.length, null);
    }, "assign");
  });
  function or(e) {
    cc11001100_hook("e", e, "function-parameter");
    return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }
  b.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (e, n) {
    b.each({
      padding: cc11001100_hook("padding", "inner" + e, "object-key-init"),
      content: cc11001100_hook("content", n, "object-key-init"),
      "": cc11001100_hook("", "outer" + e, "object-key-init")
    }, function (r, i) {
      b.fn[i] = cc11001100_hook("b.fn[i]", function (i, o) {
        var a = cc11001100_hook("a", arguments.length && (r || "boolean" != typeof i), "var-init"),
          s = cc11001100_hook("s", r || (i === !0 || o === !0 ? "margin" : "border"), "var-init");
        return b.access(this, function (n, r, i) {
          var o;
          return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = cc11001100_hook("o", n.documentElement, "assign"), Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      }, "assign");
    });
  }), e.jQuery = cc11001100_hook("e.jQuery", e.$ = cc11001100_hook("e.$", b, "assign"), "assign"), "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
    return b;
  });
})(window);