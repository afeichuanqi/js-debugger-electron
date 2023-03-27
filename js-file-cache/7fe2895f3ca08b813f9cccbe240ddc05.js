!function (e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = cc11001100_hook("module.exports", e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  }, "assign") : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "length" in e && e.length, "var-init"),
      n = cc11001100_hook("n", Z.type(e), "var-init");
    return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
  }
  function r(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (Z.isFunction(t)) return Z.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return Z.grep(e, function (e) {
      return e === t !== n;
    });
    if ("string" == typeof t) {
      if (ae.test(t)) return Z.filter(t, e, n);
      t = cc11001100_hook("t", Z.filter(t, e), "assign");
    }
    return Z.grep(e, function (e) {
      return U.call(t, e) >= 0 !== n;
    });
  }
  function i(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (; (e = cc11001100_hook("e", e[t], "assign")) && 1 !== e.nodeType;);
    return e;
  }
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", he[e] = cc11001100_hook("he[e]", {}, "assign"), "var-init");
    return Z.each(e.match(de) || [], function (e, n) {
      t[n] = cc11001100_hook("t[n]", !0, "assign");
    }), t;
  }
  function s() {
    J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready();
  }
  function a() {
    Object.defineProperty(this.cache = cc11001100_hook("this.cache", {}, "assign"), 0, {
      get: function () {
        return {};
      }
    }), this.expando = cc11001100_hook("this.expando", Z.expando + a.uid++, "assign");
  }
  function u(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = cc11001100_hook("r", "data-" + t.replace(be, "-$1").toLowerCase(), "assign"), n = cc11001100_hook("n", e.getAttribute(r), "assign"), "string" == typeof n) {
      try {
        n = cc11001100_hook("n", "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n, "assign");
      } catch (i) {}
      ye.set(e, t, n);
    } else n = cc11001100_hook("n", void 0, "assign");
    return n;
  }
  function l() {
    return !0;
  }
  function c() {
    return !1;
  }
  function f() {
    try {
      return J.activeElement;
    } catch (e) {}
  }
  function p(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.type = cc11001100_hook("e.type", (null !== e.getAttribute("type")) + "/" + e.type, "assign"), e;
  }
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", Pe.exec(e.type), "var-init");
    return t ? e.type = cc11001100_hook("e.type", t[1], "assign") : e.removeAttribute("type"), e;
  }
  function g(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"));
  }
  function m(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (ve.hasData(e) && (o = cc11001100_hook("o", ve.access(e), "assign"), s = cc11001100_hook("s", ve.set(t, o), "assign"), l = cc11001100_hook("l", o.events, "assign"))) {
        delete s.handle, s.events = cc11001100_hook("s.events", {}, "assign");
        for (i in l) for (n = cc11001100_hook("n", 0, "assign"), r = cc11001100_hook("r", l[i].length, "assign"); r > n; n++) Z.event.add(t, i, l[i][n]);
      }
      ye.hasData(e) && (a = cc11001100_hook("a", ye.access(e), "assign"), u = cc11001100_hook("u", Z.extend({}, a), "assign"), ye.set(t, u));
    }
  }
  function v(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [], "var-init");
    return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n;
  }
  function y(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
    "input" === n && Ne.test(e.type) ? t.checked = cc11001100_hook("t.checked", e.checked, "assign") : ("input" === n || "textarea" === n) && (t.defaultValue = cc11001100_hook("t.defaultValue", e.defaultValue, "assign"));
  }
  function x(t, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i = cc11001100_hook("i", Z(n.createElement(t)).appendTo(n.body), "var-init"),
      o = cc11001100_hook("o", e.getDefaultComputedStyle && (r = cc11001100_hook("r", e.getDefaultComputedStyle(i[0]), "assign")) ? r.display : Z.css(i[0], "display"), "var-init");
    return i.detach(), o;
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", J, "var-init"),
      n = cc11001100_hook("n", $e[e], "var-init");
    return n || (n = cc11001100_hook("n", x(e, t), "assign"), "none" !== n && n || (We = cc11001100_hook("We", (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), "assign"), t = cc11001100_hook("t", We[0].contentDocument, "assign"), t.write(), t.close(), n = cc11001100_hook("n", x(e, t), "assign"), We.detach()), $e[e] = cc11001100_hook("$e[e]", n, "assign")), n;
  }
  function w(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o,
      s,
      a = cc11001100_hook("a", e.style, "var-init");
    return n = cc11001100_hook("n", n || _e(e), "assign"), n && (s = cc11001100_hook("s", n.getPropertyValue(t) || n[t], "assign")), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = cc11001100_hook("s", Z.style(e, t), "assign")), Be.test(s) && Ie.test(t) && (r = cc11001100_hook("r", a.width, "assign"), i = cc11001100_hook("i", a.minWidth, "assign"), o = cc11001100_hook("o", a.maxWidth, "assign"), a.minWidth = cc11001100_hook("a.minWidth", a.maxWidth = cc11001100_hook("a.maxWidth", a.width = cc11001100_hook("a.width", s, "assign"), "assign"), "assign"), s = cc11001100_hook("s", n.width, "assign"), a.width = cc11001100_hook("a.width", r, "assign"), a.minWidth = cc11001100_hook("a.minWidth", i, "assign"), a.maxWidth = cc11001100_hook("a.maxWidth", o, "assign"))), void 0 !== s ? s + "" : s;
  }
  function T(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = cc11001100_hook("this.get", t, "assign")).apply(this, arguments);
      }
    };
  }
  function C(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (t in e) return t;
    for (var n = cc11001100_hook("n", t[0].toUpperCase() + t.slice(1), "var-init"), r = cc11001100_hook("r", t, "var-init"), i = cc11001100_hook("i", Ge.length, "var-init"); i--;) if (t = cc11001100_hook("t", Ge[i] + n, "assign"), t in e) return t;
    return r;
  }
  function N(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", Xe.exec(t), "var-init");
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function k(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    for (var o = cc11001100_hook("o", n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, "var-init"), s = cc11001100_hook("s", 0, "var-init"); 4 > o; o += cc11001100_hook("o", 2, "assign")) "margin" === n && (s += cc11001100_hook("s", Z.css(e, n + Te[o], !0, i), "assign")), r ? ("content" === n && (s -= cc11001100_hook("s", Z.css(e, "padding" + Te[o], !0, i), "assign")), "margin" !== n && (s -= cc11001100_hook("s", Z.css(e, "border" + Te[o] + "Width", !0, i), "assign"))) : (s += cc11001100_hook("s", Z.css(e, "padding" + Te[o], !0, i), "assign"), "padding" !== n && (s += cc11001100_hook("s", Z.css(e, "border" + Te[o] + "Width", !0, i), "assign")));
    return s;
  }
  function E(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", !0, "var-init"),
      i = cc11001100_hook("i", "width" === t ? e.offsetWidth : e.offsetHeight, "var-init"),
      o = cc11001100_hook("o", _e(e), "var-init"),
      s = cc11001100_hook("s", "border-box" === Z.css(e, "boxSizing", !1, o), "var-init");
    if (0 >= i || null == i) {
      if (i = cc11001100_hook("i", w(e, t, o), "assign"), (0 > i || null == i) && (i = cc11001100_hook("i", e.style[t], "assign")), Be.test(i)) return i;
      r = cc11001100_hook("r", s && (Q.boxSizingReliable() || i === e.style[t]), "assign"), i = cc11001100_hook("i", parseFloat(i) || 0, "assign");
    }
    return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px";
  }
  function S(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n, r, i, o = cc11001100_hook("o", [], "var-init"), s = cc11001100_hook("s", 0, "var-init"), a = cc11001100_hook("a", e.length, "var-init"); a > s; s++) r = cc11001100_hook("r", e[s], "assign"), r.style && (o[s] = cc11001100_hook("o[s]", ve.get(r, "olddisplay"), "assign"), n = cc11001100_hook("n", r.style.display, "assign"), t ? (o[s] || "none" !== n || (r.style.display = cc11001100_hook("r.style.display", "", "assign")), "" === r.style.display && Ce(r) && (o[s] = cc11001100_hook("o[s]", ve.access(r, "olddisplay", b(r.nodeName)), "assign"))) : (i = cc11001100_hook("i", Ce(r), "assign"), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
    for (s = cc11001100_hook("s", 0, "assign"); a > s; s++) r = cc11001100_hook("r", e[s], "assign"), r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = cc11001100_hook("r.style.display", t ? o[s] || "" : "none", "assign")));
    return e;
  }
  function D(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    return new D.prototype.init(e, t, n, r, i);
  }
  function j() {
    return setTimeout(function () {
      Qe = cc11001100_hook("Qe", void 0, "assign");
    }), Qe = cc11001100_hook("Qe", Z.now(), "assign");
  }
  function A(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r = cc11001100_hook("r", 0, "var-init"),
      i = cc11001100_hook("i", {
        height: cc11001100_hook("height", e, "object-key-init")
      }, "var-init");
    for (t = cc11001100_hook("t", t ? 1 : 0, "assign"); 4 > r; r += cc11001100_hook("r", 2 - t, "assign")) n = cc11001100_hook("n", Te[r], "assign"), i["margin" + n] = cc11001100_hook("i[\"margin\" + n]", i["padding" + n] = cc11001100_hook("i[\"padding\" + n]", e, "assign"), "assign");
    return t && (i.opacity = cc11001100_hook("i.opacity", i.width = cc11001100_hook("i.width", e, "assign"), "assign")), i;
  }
  function L(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r, i = cc11001100_hook("i", (nt[t] || []).concat(nt["*"]), "var-init"), o = cc11001100_hook("o", 0, "var-init"), s = cc11001100_hook("s", i.length, "var-init"); s > o; o++) if (r = cc11001100_hook("r", i[o].call(n, t, e), "assign")) return r;
  }
  function q(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o,
      s,
      a,
      u,
      l,
      c,
      f = cc11001100_hook("f", this, "var-init"),
      p = cc11001100_hook("p", {}, "var-init"),
      d = cc11001100_hook("d", e.style, "var-init"),
      h = cc11001100_hook("h", e.nodeType && Ce(e), "var-init"),
      g = cc11001100_hook("g", ve.get(e, "fxshow"), "var-init");
    n.queue || (a = cc11001100_hook("a", Z._queueHooks(e, "fx"), "assign"), null == a.unqueued && (a.unqueued = cc11001100_hook("a.unqueued", 0, "assign"), u = cc11001100_hook("u", a.empty.fire, "assign"), a.empty.fire = cc11001100_hook("a.empty.fire", function () {
      a.unqueued || u();
    }, "assign")), a.unqueued++, f.always(function () {
      f.always(function () {
        a.unqueued--, Z.queue(e, "fx").length || a.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = cc11001100_hook("n.overflow", [d.overflow, d.overflowX, d.overflowY], "assign"), l = cc11001100_hook("l", Z.css(e, "display"), "assign"), c = cc11001100_hook("c", "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "assign"), "inline" === c && "none" === Z.css(e, "float") && (d.display = cc11001100_hook("d.display", "inline-block", "assign"))), n.overflow && (d.overflow = cc11001100_hook("d.overflow", "hidden", "assign"), f.always(function () {
      d.overflow = cc11001100_hook("d.overflow", n.overflow[0], "assign"), d.overflowX = cc11001100_hook("d.overflowX", n.overflow[1], "assign"), d.overflowY = cc11001100_hook("d.overflowY", n.overflow[2], "assign");
    }));
    for (r in t) if (i = cc11001100_hook("i", t[r], "assign"), Ke.exec(i)) {
      if (delete t[r], o = cc11001100_hook("o", o || "toggle" === i, "assign"), i === (h ? "hide" : "show")) {
        if ("show" !== i || !g || void 0 === g[r]) continue;
        h = cc11001100_hook("h", !0, "assign");
      }
      p[r] = cc11001100_hook("p[r]", g && g[r] || Z.style(e, r), "assign");
    } else l = cc11001100_hook("l", void 0, "assign");
    if (Z.isEmptyObject(p)) "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = cc11001100_hook("d.display", l, "assign"));else {
      g ? "hidden" in g && (h = cc11001100_hook("h", g.hidden, "assign")) : g = cc11001100_hook("g", ve.access(e, "fxshow", {}), "assign"), o && (g.hidden = cc11001100_hook("g.hidden", !h, "assign")), h ? Z(e).show() : f.done(function () {
        Z(e).hide();
      }), f.done(function () {
        var t;
        ve.remove(e, "fxshow");
        for (t in p) Z.style(e, t, p[t]);
      });
      for (r in p) s = cc11001100_hook("s", L(h ? g[r] : 0, r, f), "assign"), r in g || (g[r] = cc11001100_hook("g[r]", s.start, "assign"), h && (s.end = cc11001100_hook("s.end", s.start, "assign"), s.start = cc11001100_hook("s.start", "width" === r || "height" === r ? 1 : 0, "assign")));
    }
  }
  function H(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i, o, s;
    for (n in e) if (r = cc11001100_hook("r", Z.camelCase(n), "assign"), i = cc11001100_hook("i", t[r], "assign"), o = cc11001100_hook("o", e[n], "assign"), Z.isArray(o) && (i = cc11001100_hook("i", o[1], "assign"), o = cc11001100_hook("o", e[n] = cc11001100_hook("e[n]", o[0], "assign"), "assign")), n !== r && (e[r] = cc11001100_hook("e[r]", o, "assign"), delete e[n]), s = cc11001100_hook("s", Z.cssHooks[r], "assign"), s && "expand" in s) {
      o = cc11001100_hook("o", s.expand(o), "assign"), delete e[r];
      for (n in o) n in e || (e[n] = cc11001100_hook("e[n]", o[n], "assign"), t[n] = cc11001100_hook("t[n]", i, "assign"));
    } else t[r] = cc11001100_hook("t[r]", i, "assign");
  }
  function O(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", 0, "var-init"),
      s = cc11001100_hook("s", tt.length, "var-init"),
      a = cc11001100_hook("a", Z.Deferred().always(function () {
        delete u.elem;
      }), "var-init"),
      u = function () {
        if (i) return !1;
        for (var t = cc11001100_hook("t", Qe || j(), "var-init"), n = cc11001100_hook("n", Math.max(0, l.startTime + l.duration - t), "var-init"), r = cc11001100_hook("r", n / l.duration || 0, "var-init"), o = cc11001100_hook("o", 1 - r, "var-init"), s = cc11001100_hook("s", 0, "var-init"), u = cc11001100_hook("u", l.tweens.length, "var-init"); u > s; s++) l.tweens[s].run(o);
        return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1);
      },
      l = cc11001100_hook("l", a.promise({
        elem: cc11001100_hook("elem", e, "object-key-init"),
        props: cc11001100_hook("props", Z.extend({}, t), "object-key-init"),
        opts: cc11001100_hook("opts", Z.extend(!0, {
          specialEasing: {}
        }, n), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", t, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", n, "object-key-init"),
        startTime: cc11001100_hook("startTime", Qe || j(), "object-key-init"),
        duration: cc11001100_hook("duration", n.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (t, n) {
          var r = cc11001100_hook("r", Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing), "var-init");
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = cc11001100_hook("n", 0, "var-init"),
            r = cc11001100_hook("r", t ? l.tweens.length : 0, "var-init");
          if (i) return this;
          for (i = cc11001100_hook("i", !0, "assign"); r > n; n++) l.tweens[n].run(1);
          return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this;
        }
      }), "var-init"),
      c = cc11001100_hook("c", l.props, "var-init");
    for (H(c, l.opts.specialEasing); s > o; o++) if (r = cc11001100_hook("r", tt[o].call(l, e, c, l.opts), "assign")) return r;
    return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
      elem: cc11001100_hook("elem", e, "object-key-init"),
      anim: cc11001100_hook("anim", l, "object-key-init"),
      queue: cc11001100_hook("queue", l.opts.queue, "object-key-init")
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }
  function F(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function (t, n) {
      "string" != typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", "*", "assign"));
      var r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", t.toLowerCase().match(de) || [], "var-init");
      if (Z.isFunction(n)) for (; r = cc11001100_hook("r", o[i++], "assign");) "+" === r[0] ? (r = cc11001100_hook("r", r.slice(1) || "*", "assign"), (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).unshift(n)) : (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).push(n);
    };
  }
  function P(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    function i(a) {
      cc11001100_hook("a", a, "function-parameter");
      var u;
      return o[a] = cc11001100_hook("o[a]", !0, "assign"), Z.each(e[a] || [], function (e, a) {
        var l = cc11001100_hook("l", a(t, n, r), "var-init");
        return "string" != typeof l || s || o[l] ? s ? !(u = cc11001100_hook("u", l, "assign")) : void 0 : (t.dataTypes.unshift(l), i(l), !1);
      }), u;
    }
    var o = cc11001100_hook("o", {}, "var-init"),
      s = cc11001100_hook("s", e === xt, "var-init");
    return i(t.dataTypes[0]) || !o["*"] && i("*");
  }
  function R(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r,
      i = cc11001100_hook("i", Z.ajaxSettings.flatOptions || {}, "var-init");
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = cc11001100_hook("r", {}, "assign")))[n] = cc11001100_hook("(i[n] ? e : r || (r = {}))[n]", t[n], "assign"));
    return r && Z.extend(!0, e, r), e;
  }
  function M(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r, i, o, s, a = cc11001100_hook("a", e.contents, "var-init"), u = cc11001100_hook("u", e.dataTypes, "var-init"); "*" === u[0];) u.shift(), void 0 === r && (r = cc11001100_hook("r", e.mimeType || t.getResponseHeader("Content-Type"), "assign"));
    if (r) for (i in a) if (a[i] && a[i].test(r)) {
      u.unshift(i);
      break;
    }
    if (u[0] in n) o = cc11001100_hook("o", u[0], "assign");else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = cc11001100_hook("o", i, "assign");
          break;
        }
        s || (s = cc11001100_hook("s", i, "assign"));
      }
      o = cc11001100_hook("o", o || s, "assign");
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
  }
  function W(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i,
      o,
      s,
      a,
      u,
      l = cc11001100_hook("l", {}, "var-init"),
      c = cc11001100_hook("c", e.dataTypes.slice(), "var-init");
    if (c[1]) for (s in e.converters) l[s.toLowerCase()] = cc11001100_hook("l[s.toLowerCase()]", e.converters[s], "assign");
    for (o = cc11001100_hook("o", c.shift(), "assign"); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = cc11001100_hook("n[e.responseFields[o]]", t, "assign")), !u && r && e.dataFilter && (t = cc11001100_hook("t", e.dataFilter(t, e.dataType), "assign")), u = cc11001100_hook("u", o, "assign"), o = cc11001100_hook("o", c.shift(), "assign")) if ("*" === o) o = cc11001100_hook("o", u, "assign");else if ("*" !== u && u !== o) {
      if (s = cc11001100_hook("s", l[u + " " + o] || l["* " + o], "assign"), !s) for (i in l) if (a = cc11001100_hook("a", i.split(" "), "assign"), a[1] === o && (s = cc11001100_hook("s", l[u + " " + a[0]] || l["* " + a[0]], "assign"))) {
        s === !0 ? s = cc11001100_hook("s", l[i], "assign") : l[i] !== !0 && (o = cc11001100_hook("o", a[0], "assign"), c.unshift(a[1]));
        break;
      }
      if (s !== !0) if (s && e["throws"]) t = cc11001100_hook("t", s(t), "assign");else try {
        t = cc11001100_hook("t", s(t), "assign");
      } catch (f) {
        return {
          state: cc11001100_hook("state", "parsererror", "object-key-init"),
          error: cc11001100_hook("error", s ? f : "No conversion from " + u + " to " + o, "object-key-init")
        };
      }
    }
    return {
      state: cc11001100_hook("state", "success", "object-key-init"),
      data: cc11001100_hook("data", t, "object-key-init")
    };
  }
  function $(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i;
    if (Z.isArray(t)) Z.each(t, function (t, i) {
      n || Nt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== Z.type(t)) r(e, t);else for (i in t) $(e + "[" + i + "]", t[i], n, r);
  }
  function I(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var B = cc11001100_hook("B", [], "var-init"),
    _ = cc11001100_hook("_", B.slice, "var-init"),
    z = cc11001100_hook("z", B.concat, "var-init"),
    X = cc11001100_hook("X", B.push, "var-init"),
    U = cc11001100_hook("U", B.indexOf, "var-init"),
    V = cc11001100_hook("V", {}, "var-init"),
    Y = cc11001100_hook("Y", V.toString, "var-init"),
    G = cc11001100_hook("G", V.hasOwnProperty, "var-init"),
    Q = cc11001100_hook("Q", {}, "var-init"),
    J = cc11001100_hook("J", e.document, "var-init"),
    K = cc11001100_hook("K", "2.1.4", "var-init"),
    Z = function (e, t) {
      return new Z.fn.init(e, t);
    },
    ee = cc11001100_hook("ee", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init"),
    te = cc11001100_hook("te", /^-ms-/, "var-init"),
    ne = cc11001100_hook("ne", /-([\da-z])/gi, "var-init"),
    re = function (e, t) {
      return t.toUpperCase();
    };
  Z.fn = cc11001100_hook("Z.fn", Z.prototype = cc11001100_hook("Z.prototype", {
    jquery: cc11001100_hook("jquery", K, "object-key-init"),
    constructor: cc11001100_hook("constructor", Z, "object-key-init"),
    selector: cc11001100_hook("selector", "", "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    toArray: function () {
      return _.call(this);
    },
    get: function (e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this);
    },
    pushStack: function (e) {
      var t = cc11001100_hook("t", Z.merge(this.constructor(), e), "var-init");
      return t.prevObject = cc11001100_hook("t.prevObject", this, "assign"), t.context = cc11001100_hook("t.context", this.context, "assign"), t;
    },
    each: function (e, t) {
      return Z.each(this, e, t);
    },
    map: function (e) {
      return this.pushStack(Z.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function () {
      return this.pushStack(_.apply(this, arguments));
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
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: cc11001100_hook("push", X, "object-key-init"),
    sort: cc11001100_hook("sort", B.sort, "object-key-init"),
    splice: cc11001100_hook("splice", B.splice, "object-key-init")
  }, "assign"), "assign"), Z.extend = cc11001100_hook("Z.extend", Z.fn.extend = cc11001100_hook("Z.fn.extend", function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      s = cc11001100_hook("s", arguments[0] || {}, "var-init"),
      a = cc11001100_hook("a", 1, "var-init"),
      u = cc11001100_hook("u", arguments.length, "var-init"),
      l = cc11001100_hook("l", !1, "var-init");
    for ("boolean" == typeof s && (l = cc11001100_hook("l", s, "assign"), s = cc11001100_hook("s", arguments[a] || {}, "assign"), a++), "object" == typeof s || Z.isFunction(s) || (s = cc11001100_hook("s", {}, "assign")), a === u && (s = cc11001100_hook("s", this, "assign"), a--); u > a; a++) if (null != (e = cc11001100_hook("e", arguments[a], "assign"))) for (t in e) n = cc11001100_hook("n", s[t], "assign"), r = cc11001100_hook("r", e[t], "assign"), s !== r && (l && r && (Z.isPlainObject(r) || (i = cc11001100_hook("i", Z.isArray(r), "assign"))) ? (i ? (i = cc11001100_hook("i", !1, "assign"), o = cc11001100_hook("o", n && Z.isArray(n) ? n : [], "assign")) : o = cc11001100_hook("o", n && Z.isPlainObject(n) ? n : {}, "assign"), s[t] = cc11001100_hook("s[t]", Z.extend(l, o, r), "assign")) : void 0 !== r && (s[t] = cc11001100_hook("s[t]", r, "assign")));
    return s;
  }, "assign"), "assign"), Z.extend({
    expando: cc11001100_hook("expando", "jQuery" + (K + Math.random()).replace(/\D/g, ""), "object-key-init"),
    isReady: cc11001100_hook("isReady", !0, "object-key-init"),
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isFunction: function (e) {
      return "function" === Z.type(e);
    },
    isArray: cc11001100_hook("isArray", Array.isArray, "object-key-init"),
    isWindow: function (e) {
      return null != e && e === e.window;
    },
    isNumeric: function (e) {
      return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0;
    },
    isPlainObject: function (e) {
      return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e;
    },
    globalEval: function (e) {
      var t,
        n = cc11001100_hook("n", eval, "var-init");
      e = cc11001100_hook("e", Z.trim(e), "assign"), e && (1 === e.indexOf("use strict") ? (t = cc11001100_hook("t", J.createElement("script"), "assign"), t.text = cc11001100_hook("t.text", e, "assign"), J.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    },
    camelCase: function (e) {
      return e.replace(te, "ms-").replace(ne, re);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t, r) {
      var i,
        o = cc11001100_hook("o", 0, "var-init"),
        s = cc11001100_hook("s", e.length, "var-init"),
        a = cc11001100_hook("a", n(e), "var-init");
      if (r) {
        if (a) for (; s > o && (i = cc11001100_hook("i", t.apply(e[o], r), "assign"), i !== !1); o++);else for (o in e) if (i = cc11001100_hook("i", t.apply(e[o], r), "assign"), i === !1) break;
      } else if (a) for (; s > o && (i = cc11001100_hook("i", t.call(e[o], o, e[o]), "assign"), i !== !1); o++);else for (o in e) if (i = cc11001100_hook("i", t.call(e[o], o, e[o]), "assign"), i === !1) break;
      return e;
    },
    trim: function (e) {
      return null == e ? "" : (e + "").replace(ee, "");
    },
    makeArray: function (e, t) {
      var r = cc11001100_hook("r", t || [], "var-init");
      return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : U.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = cc11001100_hook("n", +t.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); n > r; r++) e[i++] = cc11001100_hook("e[i++]", t[r], "assign");
      return e.length = cc11001100_hook("e.length", i, "assign"), e;
    },
    grep: function (e, t, n) {
      for (var r, i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"), s = cc11001100_hook("s", e.length, "var-init"), a = cc11001100_hook("a", !n, "var-init"); s > o; o++) r = cc11001100_hook("r", !t(e[o], o), "assign"), r !== a && i.push(e[o]);
      return i;
    },
    map: function (e, t, r) {
      var i,
        o = cc11001100_hook("o", 0, "var-init"),
        s = cc11001100_hook("s", e.length, "var-init"),
        a = cc11001100_hook("a", n(e), "var-init"),
        u = cc11001100_hook("u", [], "var-init");
      if (a) for (; s > o; o++) i = cc11001100_hook("i", t(e[o], o, r), "assign"), null != i && u.push(i);else for (o in e) i = cc11001100_hook("i", t(e[o], o, r), "assign"), null != i && u.push(i);
      return z.apply([], u);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    proxy: function (e, t) {
      var n, r, i;
      return "string" == typeof t && (n = cc11001100_hook("n", e[t], "assign"), t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", n, "assign")), Z.isFunction(e) ? (r = cc11001100_hook("r", _.call(arguments, 2), "assign"), i = cc11001100_hook("i", function () {
        return e.apply(t || this, r.concat(_.call(arguments)));
      }, "assign"), i.guid = cc11001100_hook("i.guid", e.guid = cc11001100_hook("e.guid", e.guid || Z.guid++, "assign"), "assign"), i) : void 0;
    },
    now: cc11001100_hook("now", Date.now, "object-key-init"),
    support: cc11001100_hook("support", Q, "object-key-init")
  }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    V["[object " + t + "]"] = cc11001100_hook("V[\"[object \" + t + \"]\"]", t.toLowerCase(), "assign");
  });
  var ie = cc11001100_hook("ie", function (e) {
    function t(e, t, n, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var i, o, s, a, u, l, f, d, h, g;
      if ((t ? t.ownerDocument || t : $) !== q && L(t), t = cc11001100_hook("t", t || q, "assign"), n = cc11001100_hook("n", n || [], "assign"), a = cc11001100_hook("a", t.nodeType, "assign"), "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
      if (!r && O) {
        if (11 !== a && (i = cc11001100_hook("i", ye.exec(e), "assign"))) if (s = cc11001100_hook("s", i[1], "assign")) {
          if (9 === a) {
            if (o = cc11001100_hook("o", t.getElementById(s), "assign"), !o || !o.parentNode) return n;
            if (o.id === s) return n.push(o), n;
          } else if (t.ownerDocument && (o = cc11001100_hook("o", t.ownerDocument.getElementById(s), "assign")) && M(t, o) && o.id === s) return n.push(o), n;
        } else {
          if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
          if ((s = cc11001100_hook("s", i[3], "assign")) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n;
        }
        if (w.qsa && (!F || !F.test(e))) {
          if (d = cc11001100_hook("d", f = cc11001100_hook("f", W, "assign"), "assign"), h = cc11001100_hook("h", t, "assign"), g = cc11001100_hook("g", 1 !== a && e, "assign"), 1 === a && "object" !== t.nodeName.toLowerCase()) {
            for (l = cc11001100_hook("l", k(e), "assign"), (f = cc11001100_hook("f", t.getAttribute("id"), "assign")) ? d = cc11001100_hook("d", f.replace(be, "\\$&"), "assign") : t.setAttribute("id", d), d = cc11001100_hook("d", "[id='" + d + "'] ", "assign"), u = cc11001100_hook("u", l.length, "assign"); u--;) l[u] = cc11001100_hook("l[u]", d + p(l[u]), "assign");
            h = cc11001100_hook("h", xe.test(e) && c(t.parentNode) || t, "assign"), g = cc11001100_hook("g", l.join(","), "assign");
          }
          if (g) try {
            return K.apply(n, h.querySelectorAll(g)), n;
          } catch (m) {} finally {
            f || t.removeAttribute("id");
          }
        }
      }
      return S(e.replace(ue, "$1"), t, n, r);
    }
    function n() {
      function e(n, r) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = cc11001100_hook("e[n + \" \"]", r, "assign");
      }
      var t = cc11001100_hook("t", [], "var-init");
      return e;
    }
    function r(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e[W] = cc11001100_hook("e[W]", !0, "assign"), e;
    }
    function i(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", q.createElement("div"), "var-init");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = cc11001100_hook("t", null, "assign");
      }
    }
    function o(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      for (var n = cc11001100_hook("n", e.split("|"), "var-init"), r = cc11001100_hook("r", e.length, "var-init"); r--;) T.attrHandle[n[r]] = cc11001100_hook("T.attrHandle[n[r]]", t, "assign");
    }
    function s(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", t && e, "var-init"),
        r = cc11001100_hook("r", n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V), "var-init");
      if (r) return r;
      if (n) for (; n = cc11001100_hook("n", n.nextSibling, "assign");) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
        return "input" === n && t.type === e;
      };
    }
    function u(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function l(e) {
      cc11001100_hook("e", e, "function-parameter");
      return r(function (t) {
        return t = cc11001100_hook("t", +t, "assign"), r(function (n, r) {
          for (var i, o = cc11001100_hook("o", e([], n.length, t), "var-init"), s = cc11001100_hook("s", o.length, "var-init"); s--;) n[i = cc11001100_hook("i", o[s], "assign")] && (n[i] = cc11001100_hook("n[i]", !(r[i] = cc11001100_hook("r[i]", n[i], "assign")), "assign"));
        });
      });
    }
    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function f() {}
    function p(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t = cc11001100_hook("t", 0, "var-init"), n = cc11001100_hook("n", e.length, "var-init"), r = cc11001100_hook("r", "", "var-init"); n > t; t++) r += cc11001100_hook("r", e[t].value, "assign");
      return r;
    }
    function d(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", t.dir, "var-init"),
        i = cc11001100_hook("i", n && "parentNode" === r, "var-init"),
        o = cc11001100_hook("o", B++, "var-init");
      return t.first ? function (t, n, o) {
        for (; t = cc11001100_hook("t", t[r], "assign");) if (1 === t.nodeType || i) return e(t, n, o);
      } : function (t, n, s) {
        var a,
          u,
          l = cc11001100_hook("l", [I, o], "var-init");
        if (s) {
          for (; t = cc11001100_hook("t", t[r], "assign");) if ((1 === t.nodeType || i) && e(t, n, s)) return !0;
        } else for (; t = cc11001100_hook("t", t[r], "assign");) if (1 === t.nodeType || i) {
          if (u = cc11001100_hook("u", t[W] || (t[W] = cc11001100_hook("t[W]", {}, "assign")), "assign"), (a = cc11001100_hook("a", u[r], "assign")) && a[0] === I && a[1] === o) return l[2] = cc11001100_hook("l[2]", a[2], "assign");
          if (u[r] = cc11001100_hook("u[r]", l, "assign"), l[2] = cc11001100_hook("l[2]", e(t, n, s), "assign")) return !0;
        }
      };
    }
    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.length > 1 ? function (t, n, r) {
        for (var i = cc11001100_hook("i", e.length, "var-init"); i--;) if (!e[i](t, n, r)) return !1;
        return !0;
      } : e[0];
    }
    function g(e, n, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      for (var i = cc11001100_hook("i", 0, "var-init"), o = cc11001100_hook("o", n.length, "var-init"); o > i; i++) t(e, n[i], r);
      return r;
    }
    function m(e, t, n, r, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      for (var o, s = cc11001100_hook("s", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"), u = cc11001100_hook("u", e.length, "var-init"), l = cc11001100_hook("l", null != t, "var-init"); u > a; a++) (o = cc11001100_hook("o", e[a], "assign")) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
      return s;
    }
    function v(e, t, n, i, o, s) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      return i && !i[W] && (i = cc11001100_hook("i", v(i), "assign")), o && !o[W] && (o = cc11001100_hook("o", v(o, s), "assign")), r(function (r, s, a, u) {
        var l,
          c,
          f,
          p = cc11001100_hook("p", [], "var-init"),
          d = cc11001100_hook("d", [], "var-init"),
          h = cc11001100_hook("h", s.length, "var-init"),
          v = cc11001100_hook("v", r || g(t || "*", a.nodeType ? [a] : a, []), "var-init"),
          y = cc11001100_hook("y", !e || !r && t ? v : m(v, p, e, a, u), "var-init"),
          x = cc11001100_hook("x", n ? o || (r ? e : h || i) ? [] : s : y, "var-init");
        if (n && n(y, x, a, u), i) for (l = cc11001100_hook("l", m(x, d), "assign"), i(l, [], a, u), c = cc11001100_hook("c", l.length, "assign"); c--;) (f = cc11001100_hook("f", l[c], "assign")) && (x[d[c]] = cc11001100_hook("x[d[c]]", !(y[d[c]] = cc11001100_hook("y[d[c]]", f, "assign")), "assign"));
        if (r) {
          if (o || e) {
            if (o) {
              for (l = cc11001100_hook("l", [], "assign"), c = cc11001100_hook("c", x.length, "assign"); c--;) (f = cc11001100_hook("f", x[c], "assign")) && l.push(y[c] = cc11001100_hook("y[c]", f, "assign"));
              o(null, x = cc11001100_hook("x", [], "assign"), l, u);
            }
            for (c = cc11001100_hook("c", x.length, "assign"); c--;) (f = cc11001100_hook("f", x[c], "assign")) && (l = cc11001100_hook("l", o ? ee(r, f) : p[c], "assign")) > -1 && (r[l] = cc11001100_hook("r[l]", !(s[l] = cc11001100_hook("s[l]", f, "assign")), "assign"));
          }
        } else x = cc11001100_hook("x", m(x === s ? x.splice(h, x.length) : x), "assign"), o ? o(null, s, x, u) : K.apply(s, x);
      });
    }
    function y(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t, n, r, i = cc11001100_hook("i", e.length, "var-init"), o = cc11001100_hook("o", T.relative[e[0].type], "var-init"), s = cc11001100_hook("s", o || T.relative[" "], "var-init"), a = cc11001100_hook("a", o ? 1 : 0, "var-init"), u = cc11001100_hook("u", d(function (e) {
          return e === t;
        }, s, !0), "var-init"), l = cc11001100_hook("l", d(function (e) {
          return ee(t, e) > -1;
        }, s, !0), "var-init"), c = cc11001100_hook("c", [function (e, n, r) {
          var i = cc11001100_hook("i", !o && (r || n !== D) || ((t = cc11001100_hook("t", n, "assign")).nodeType ? u(e, n, r) : l(e, n, r)), "var-init");
          return t = cc11001100_hook("t", null, "assign"), i;
        }], "var-init"); i > a; a++) if (n = cc11001100_hook("n", T.relative[e[a].type], "assign")) c = cc11001100_hook("c", [d(h(c), n)], "assign");else {
        if (n = cc11001100_hook("n", T.filter[e[a].type].apply(null, e[a].matches), "assign"), n[W]) {
          for (r = cc11001100_hook("r", ++a, "assign"); i > r && !T.relative[e[r].type]; r++);
          return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
            value: cc11001100_hook("value", " " === e[a - 2].type ? "*" : "", "object-key-init")
          })).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = cc11001100_hook("e", e.slice(r), "assign")), i > r && p(e));
        }
        c.push(n);
      }
      return h(c);
    }
    function x(e, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var i = cc11001100_hook("i", n.length > 0, "var-init"),
        o = cc11001100_hook("o", e.length > 0, "var-init"),
        s = function (r, s, a, u, l) {
          var c,
            f,
            p,
            d = cc11001100_hook("d", 0, "var-init"),
            h = cc11001100_hook("h", "0", "var-init"),
            g = cc11001100_hook("g", r && [], "var-init"),
            v = cc11001100_hook("v", [], "var-init"),
            y = cc11001100_hook("y", D, "var-init"),
            x = cc11001100_hook("x", r || o && T.find.TAG("*", l), "var-init"),
            b = cc11001100_hook("b", I += cc11001100_hook("I", null == y ? 1 : Math.random() || .1, "assign"), "var-init"),
            w = cc11001100_hook("w", x.length, "var-init");
          for (l && (D = cc11001100_hook("D", s !== q && s, "assign")); h !== w && null != (c = cc11001100_hook("c", x[h], "assign")); h++) {
            if (o && c) {
              for (f = cc11001100_hook("f", 0, "assign"); p = cc11001100_hook("p", e[f++], "assign");) if (p(c, s, a)) {
                u.push(c);
                break;
              }
              l && (I = cc11001100_hook("I", b, "assign"));
            }
            i && ((c = cc11001100_hook("c", !p && c, "assign")) && d--, r && g.push(c));
          }
          if (d += cc11001100_hook("d", h, "assign"), i && h !== d) {
            for (f = cc11001100_hook("f", 0, "assign"); p = cc11001100_hook("p", n[f++], "assign");) p(g, v, s, a);
            if (r) {
              if (d > 0) for (; h--;) g[h] || v[h] || (v[h] = cc11001100_hook("v[h]", Q.call(u), "assign"));
              v = cc11001100_hook("v", m(v), "assign");
            }
            K.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u);
          }
          return l && (I = cc11001100_hook("I", b, "assign"), D = cc11001100_hook("D", y, "assign")), g;
        };
      return i ? r(s) : s;
    }
    var b,
      w,
      T,
      C,
      N,
      k,
      E,
      S,
      D,
      j,
      A,
      L,
      q,
      H,
      O,
      F,
      P,
      R,
      M,
      W = cc11001100_hook("W", "sizzle" + 1 * new Date(), "var-init"),
      $ = cc11001100_hook("$", e.document, "var-init"),
      I = cc11001100_hook("I", 0, "var-init"),
      B = cc11001100_hook("B", 0, "var-init"),
      _ = cc11001100_hook("_", n(), "var-init"),
      z = cc11001100_hook("z", n(), "var-init"),
      X = cc11001100_hook("X", n(), "var-init"),
      U = function (e, t) {
        return e === t && (A = cc11001100_hook("A", !0, "assign")), 0;
      },
      V = cc11001100_hook("V", 1 << 31, "var-init"),
      Y = cc11001100_hook("Y", {}.hasOwnProperty, "var-init"),
      G = cc11001100_hook("G", [], "var-init"),
      Q = cc11001100_hook("Q", G.pop, "var-init"),
      J = cc11001100_hook("J", G.push, "var-init"),
      K = cc11001100_hook("K", G.push, "var-init"),
      Z = cc11001100_hook("Z", G.slice, "var-init"),
      ee = function (e, t) {
        for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); r > n; n++) if (e[n] === t) return n;
        return -1;
      },
      te = cc11001100_hook("te", "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", "var-init"),
      ne = cc11001100_hook("ne", "[\\x20\\t\\r\\n\\f]", "var-init"),
      re = cc11001100_hook("re", "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", "var-init"),
      ie = cc11001100_hook("ie", re.replace("w", "w#"), "var-init"),
      oe = cc11001100_hook("oe", "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", "var-init"),
      se = cc11001100_hook("se", ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", "var-init"),
      ae = cc11001100_hook("ae", new RegExp(ne + "+", "g"), "var-init"),
      ue = cc11001100_hook("ue", new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), "var-init"),
      le = cc11001100_hook("le", new RegExp("^" + ne + "*," + ne + "*"), "var-init"),
      ce = cc11001100_hook("ce", new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), "var-init"),
      fe = cc11001100_hook("fe", new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), "var-init"),
      pe = cc11001100_hook("pe", new RegExp(se), "var-init"),
      de = cc11001100_hook("de", new RegExp("^" + ie + "$"), "var-init"),
      he = cc11001100_hook("he", {
        ID: cc11001100_hook("ID", new RegExp("^#(" + re + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", new RegExp("^\\.(" + re + ")"), "object-key-init"),
        TAG: cc11001100_hook("TAG", new RegExp("^(" + re.replace("w", "w*") + ")"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", new RegExp("^" + oe), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", new RegExp("^" + se), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), "object-key-init"),
        bool: cc11001100_hook("bool", new RegExp("^(?:" + te + ")$", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      ge = cc11001100_hook("ge", /^(?:input|select|textarea|button)$/i, "var-init"),
      me = cc11001100_hook("me", /^h\d$/i, "var-init"),
      ve = cc11001100_hook("ve", /^[^{]+\{\s*\[native \w/, "var-init"),
      ye = cc11001100_hook("ye", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      xe = cc11001100_hook("xe", /[+~]/, "var-init"),
      be = cc11001100_hook("be", /'|\\/g, "var-init"),
      we = cc11001100_hook("we", new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), "var-init"),
      Te = function (e, t, n) {
        var r = cc11001100_hook("r", "0x" + t - 65536, "var-init");
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
      Ce = function () {
        L();
      };
    try {
      K.apply(G = cc11001100_hook("G", Z.call($.childNodes), "assign"), $.childNodes), G[$.childNodes.length].nodeType;
    } catch (Ne) {
      K = cc11001100_hook("K", {
        apply: cc11001100_hook("apply", G.length ? function (e, t) {
          J.apply(e, Z.call(t));
        } : function (e, t) {
          for (var n = cc11001100_hook("n", e.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"); e[n++] = cc11001100_hook("e[n++]", t[r++], "assign"););
          e.length = cc11001100_hook("e.length", n - 1, "assign");
        }, "object-key-init")
      }, "assign");
    }
    w = cc11001100_hook("w", t.support = cc11001100_hook("t.support", {}, "assign"), "assign"), N = cc11001100_hook("N", t.isXML = cc11001100_hook("t.isXML", function (e) {
      var t = cc11001100_hook("t", e && (e.ownerDocument || e).documentElement, "var-init");
      return t ? "HTML" !== t.nodeName : !1;
    }, "assign"), "assign"), L = cc11001100_hook("L", t.setDocument = cc11001100_hook("t.setDocument", function (e) {
      var t,
        n,
        r = cc11001100_hook("r", e ? e.ownerDocument || e : $, "var-init");
      return r !== q && 9 === r.nodeType && r.documentElement ? (q = cc11001100_hook("q", r, "assign"), H = cc11001100_hook("H", r.documentElement, "assign"), n = cc11001100_hook("n", r.defaultView, "assign"), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), O = cc11001100_hook("O", !N(r), "assign"), w.attributes = cc11001100_hook("w.attributes", i(function (e) {
        return e.className = cc11001100_hook("e.className", "i", "assign"), !e.getAttribute("className");
      }), "assign"), w.getElementsByTagName = cc11001100_hook("w.getElementsByTagName", i(function (e) {
        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length;
      }), "assign"), w.getElementsByClassName = cc11001100_hook("w.getElementsByClassName", ve.test(r.getElementsByClassName), "assign"), w.getById = cc11001100_hook("w.getById", i(function (e) {
        return H.appendChild(e).id = cc11001100_hook("H.appendChild(e).id", W, "assign"), !r.getElementsByName || !r.getElementsByName(W).length;
      }), "assign"), w.getById ? (T.find.ID = cc11001100_hook("T.find.ID", function (e, t) {
        if ("undefined" != typeof t.getElementById && O) {
          var n = cc11001100_hook("n", t.getElementById(e), "var-init");
          return n && n.parentNode ? [n] : [];
        }
      }, "assign"), T.filter.ID = cc11001100_hook("T.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(we, Te), "var-init");
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, "assign")) : (delete T.find.ID, T.filter.ID = cc11001100_hook("T.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(we, Te), "var-init");
        return function (e) {
          var n = cc11001100_hook("n", "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"), "var-init");
          return n && n.value === t;
        };
      }, "assign")), T.find.TAG = cc11001100_hook("T.find.TAG", w.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
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
      }, "assign"), T.find.CLASS = cc11001100_hook("T.find.CLASS", w.getElementsByClassName && function (e, t) {
        return O ? t.getElementsByClassName(e) : void 0;
      }, "assign"), P = cc11001100_hook("P", [], "assign"), F = cc11001100_hook("F", [], "assign"), (w.qsa = cc11001100_hook("w.qsa", ve.test(r.querySelectorAll), "assign")) && (i(function (e) {
        H.appendChild(e).innerHTML = cc11001100_hook("H.appendChild(e).innerHTML", "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", "assign"), e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]");
      }), i(function (e) {
        var t = cc11001100_hook("t", r.createElement("input"), "var-init");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:");
      })), (w.matchesSelector = cc11001100_hook("w.matchesSelector", ve.test(R = cc11001100_hook("R", H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector, "assign")), "assign")) && i(function (e) {
        w.disconnectedMatch = cc11001100_hook("w.disconnectedMatch", R.call(e, "div"), "assign"), R.call(e, "[s!='']:x"), P.push("!=", se);
      }), F = cc11001100_hook("F", F.length && new RegExp(F.join("|")), "assign"), P = cc11001100_hook("P", P.length && new RegExp(P.join("|")), "assign"), t = cc11001100_hook("t", ve.test(H.compareDocumentPosition), "assign"), M = cc11001100_hook("M", t || ve.test(H.contains) ? function (e, t) {
        var n = cc11001100_hook("n", 9 === e.nodeType ? e.documentElement : e, "var-init"),
          r = cc11001100_hook("r", t && t.parentNode, "var-init");
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) for (; t = cc11001100_hook("t", t.parentNode, "assign");) if (t === e) return !0;
        return !1;
      }, "assign"), U = cc11001100_hook("U", t ? function (e, t) {
        if (e === t) return A = cc11001100_hook("A", !0, "assign"), 0;
        var n = cc11001100_hook("n", !e.compareDocumentPosition - !t.compareDocumentPosition, "var-init");
        return n ? n : (n = cc11001100_hook("n", (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, "assign"), 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && M($, e) ? -1 : t === r || t.ownerDocument === $ && M($, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return A = cc11001100_hook("A", !0, "assign"), 0;
        var n,
          i = cc11001100_hook("i", 0, "var-init"),
          o = cc11001100_hook("o", e.parentNode, "var-init"),
          a = cc11001100_hook("a", t.parentNode, "var-init"),
          u = cc11001100_hook("u", [e], "var-init"),
          l = cc11001100_hook("l", [t], "var-init");
        if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? ee(j, e) - ee(j, t) : 0;
        if (o === a) return s(e, t);
        for (n = cc11001100_hook("n", e, "assign"); n = cc11001100_hook("n", n.parentNode, "assign");) u.unshift(n);
        for (n = cc11001100_hook("n", t, "assign"); n = cc11001100_hook("n", n.parentNode, "assign");) l.unshift(n);
        for (; u[i] === l[i];) i++;
        return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0;
      }, "assign"), r) : q;
    }, "assign"), "assign"), t.matches = cc11001100_hook("t.matches", function (e, n) {
      return t(e, null, null, n);
    }, "assign"), t.matchesSelector = cc11001100_hook("t.matchesSelector", function (e, n) {
      if ((e.ownerDocument || e) !== q && L(e), n = cc11001100_hook("n", n.replace(fe, "='$1']"), "assign"), w.matchesSelector && O && (!P || !P.test(n)) && (!F || !F.test(n))) try {
        var r = cc11001100_hook("r", R.call(e, n), "var-init");
        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (i) {}
      return t(n, q, null, [e]).length > 0;
    }, "assign"), t.contains = cc11001100_hook("t.contains", function (e, t) {
      return (e.ownerDocument || e) !== q && L(e), M(e, t);
    }, "assign"), t.attr = cc11001100_hook("t.attr", function (e, t) {
      (e.ownerDocument || e) !== q && L(e);
      var n = cc11001100_hook("n", T.attrHandle[t.toLowerCase()], "var-init"),
        r = cc11001100_hook("r", n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0, "var-init");
      return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = cc11001100_hook("r", e.getAttributeNode(t), "assign")) && r.specified ? r.value : null;
    }, "assign"), t.error = cc11001100_hook("t.error", function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, "assign"), t.uniqueSort = cc11001100_hook("t.uniqueSort", function (e) {
      var t,
        n = cc11001100_hook("n", [], "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      if (A = cc11001100_hook("A", !w.detectDuplicates, "assign"), j = cc11001100_hook("j", !w.sortStable && e.slice(0), "assign"), e.sort(U), A) {
        for (; t = cc11001100_hook("t", e[i++], "assign");) t === e[i] && (r = cc11001100_hook("r", n.push(i), "assign"));
        for (; r--;) e.splice(n[r], 1);
      }
      return j = cc11001100_hook("j", null, "assign"), e;
    }, "assign"), C = cc11001100_hook("C", t.getText = cc11001100_hook("t.getText", function (e) {
      var t,
        n = cc11001100_hook("n", "", "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", e.nodeType, "var-init");
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) n += cc11001100_hook("n", C(e), "assign");
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = cc11001100_hook("t", e[r++], "assign");) n += cc11001100_hook("n", C(t), "assign");
      return n;
    }, "assign"), "assign"), T = cc11001100_hook("T", t.selectors = cc11001100_hook("t.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", r, "object-key-init"),
      match: cc11001100_hook("match", he, "object-key-init"),
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
          return e[1] = cc11001100_hook("e[1]", e[1].replace(we, Te), "assign"), e[3] = cc11001100_hook("e[3]", (e[3] || e[4] || e[5] || "").replace(we, Te), "assign"), "~=" === e[2] && (e[3] = cc11001100_hook("e[3]", " " + e[3] + " ", "assign")), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = cc11001100_hook("e[1]", e[1].toLowerCase(), "assign"), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = cc11001100_hook("e[4]", +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), "assign"), e[5] = cc11001100_hook("e[5]", +(e[7] + e[8] || "odd" === e[3]), "assign")) : e[3] && t.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
            n = cc11001100_hook("n", !e[6] && e[2], "var-init");
          return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = cc11001100_hook("e[2]", e[4] || e[5] || "", "assign") : n && pe.test(n) && (t = cc11001100_hook("t", k(n, !0), "assign")) && (t = cc11001100_hook("t", n.indexOf(")", n.length - t) - n.length, "assign")) && (e[0] = cc11001100_hook("e[0]", e[0].slice(0, t), "assign"), e[2] = cc11001100_hook("e[2]", n.slice(0, t), "assign")), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = cc11001100_hook("t", e.replace(we, Te).toLowerCase(), "var-init");
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = cc11001100_hook("t", _[e + " "], "var-init");
          return t || (t = cc11001100_hook("t", new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)"), "assign")) && _(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (e, n, r) {
          return function (i) {
            var o = cc11001100_hook("o", t.attr(i, e), "var-init");
            return null == o ? "!=" === n : n ? (o += cc11001100_hook("o", "", "assign"), "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0;
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = cc11001100_hook("o", "nth" !== e.slice(0, 3), "var-init"),
            s = cc11001100_hook("s", "last" !== e.slice(-4), "var-init"),
            a = cc11001100_hook("a", "of-type" === t, "var-init");
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
              c,
              f,
              p,
              d,
              h,
              g = cc11001100_hook("g", o !== s ? "nextSibling" : "previousSibling", "var-init"),
              m = cc11001100_hook("m", t.parentNode, "var-init"),
              v = cc11001100_hook("v", a && t.nodeName.toLowerCase(), "var-init"),
              y = cc11001100_hook("y", !u && !a, "var-init");
            if (m) {
              if (o) {
                for (; g;) {
                  for (f = cc11001100_hook("f", t, "assign"); f = cc11001100_hook("f", f[g], "assign");) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  h = cc11001100_hook("h", g = cc11001100_hook("g", "only" === e && !h && "nextSibling", "assign"), "assign");
                }
                return !0;
              }
              if (h = cc11001100_hook("h", [s ? m.firstChild : m.lastChild], "assign"), s && y) {
                for (c = cc11001100_hook("c", m[W] || (m[W] = cc11001100_hook("m[W]", {}, "assign")), "assign"), l = cc11001100_hook("l", c[e] || [], "assign"), d = cc11001100_hook("d", l[0] === I && l[1], "assign"), p = cc11001100_hook("p", l[0] === I && l[2], "assign"), f = cc11001100_hook("f", d && m.childNodes[d], "assign"); f = cc11001100_hook("f", ++d && f && f[g] || (p = cc11001100_hook("p", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign");) if (1 === f.nodeType && ++p && f === t) {
                  c[e] = cc11001100_hook("c[e]", [I, d, p], "assign");
                  break;
                }
              } else if (y && (l = cc11001100_hook("l", (t[W] || (t[W] = cc11001100_hook("t[W]", {}, "assign")))[e], "assign")) && l[0] === I) p = cc11001100_hook("p", l[1], "assign");else for (; (f = cc11001100_hook("f", ++d && f && f[g] || (p = cc11001100_hook("p", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign")) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = cc11001100_hook("f[W]", {}, "assign")))[e] = cc11001100_hook("(f[W] || (f[W] = {}))[e]", [I, p], "assign")), f !== t)););
              return p -= cc11001100_hook("p", i, "assign"), p === r || p % r === 0 && p / r >= 0;
            }
          };
        },
        PSEUDO: function (e, n) {
          var i,
            o = cc11001100_hook("o", T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e), "var-init");
          return o[W] ? o(n) : o.length > 1 ? (i = cc11001100_hook("i", [e, e, "", n], "assign"), T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
            for (var r, i = cc11001100_hook("i", o(e, n), "var-init"), s = cc11001100_hook("s", i.length, "var-init"); s--;) r = cc11001100_hook("r", ee(e, i[s]), "assign"), e[r] = cc11001100_hook("e[r]", !(t[r] = cc11001100_hook("t[r]", i[s], "assign")), "assign");
          }) : function (e) {
            return o(e, 0, i);
          }) : o;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", r(function (e) {
          var t = cc11001100_hook("t", [], "var-init"),
            n = cc11001100_hook("n", [], "var-init"),
            i = cc11001100_hook("i", E(e.replace(ue, "$1")), "var-init");
          return i[W] ? r(function (e, t, n, r) {
            for (var o, s = cc11001100_hook("s", i(e, null, r, []), "var-init"), a = cc11001100_hook("a", e.length, "var-init"); a--;) (o = cc11001100_hook("o", s[a], "assign")) && (e[a] = cc11001100_hook("e[a]", !(t[a] = cc11001100_hook("t[a]", o, "assign")), "assign"));
          }) : function (e, r, o) {
            return t[0] = cc11001100_hook("t[0]", e, "assign"), i(t, null, o, n), t[0] = cc11001100_hook("t[0]", null, "assign"), !n.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", r(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", r(function (e) {
          return e = cc11001100_hook("e", e.replace(we, Te), "assign"), function (t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", r(function (e) {
          return de.test(e || "") || t.error("unsupported lang: " + e), e = cc11001100_hook("e", e.replace(we, Te).toLowerCase(), "assign"), function (t) {
            var n;
            do if (n = cc11001100_hook("n", O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"), "assign")) return n = cc11001100_hook("n", n.toLowerCase(), "assign"), n === e || 0 === n.indexOf(e + "-"); while ((t = cc11001100_hook("t", t.parentNode, "assign")) && 1 === t.nodeType);
            return !1;
          };
        }), "object-key-init"),
        target: function (t) {
          var n = cc11001100_hook("n", e.location && e.location.hash, "var-init");
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === H;
        },
        focus: function (e) {
          return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
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
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !T.pseudos.empty(e);
        },
        header: function (e) {
          return me.test(e.nodeName);
        },
        input: function (e) {
          return ge.test(e.nodeName);
        },
        button: function (e) {
          var t = cc11001100_hook("t", e.nodeName.toLowerCase(), "var-init");
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = cc11001100_hook("t", e.getAttribute("type"), "assign")) || "text" === t.toLowerCase());
        },
        first: cc11001100_hook("first", l(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", l(function (e, t) {
          return [t - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", l(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), "object-key-init"),
        even: cc11001100_hook("even", l(function (e, t) {
          for (var n = cc11001100_hook("n", 0, "var-init"); t > n; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", l(function (e, t) {
          for (var n = cc11001100_hook("n", 1, "var-init"); t > n; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", l(function (e, t, n) {
          for (var r = cc11001100_hook("r", 0 > n ? n + t : n, "var-init"); --r >= 0;) e.push(r);
          return e;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", l(function (e, t, n) {
          for (var r = cc11001100_hook("r", 0 > n ? n + t : n, "var-init"); ++r < t;) e.push(r);
          return e;
        }), "object-key-init")
      }
    }, "assign"), "assign"), T.pseudos.nth = cc11001100_hook("T.pseudos.nth", T.pseudos.eq, "assign");
    for (b in {
      radio: cc11001100_hook("radio", !0, "object-key-init"),
      checkbox: cc11001100_hook("checkbox", !0, "object-key-init"),
      file: cc11001100_hook("file", !0, "object-key-init"),
      password: cc11001100_hook("password", !0, "object-key-init"),
      image: cc11001100_hook("image", !0, "object-key-init")
    }) T.pseudos[b] = cc11001100_hook("T.pseudos[b]", a(b), "assign");
    for (b in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !0, "object-key-init")
    }) T.pseudos[b] = cc11001100_hook("T.pseudos[b]", u(b), "assign");
    return f.prototype = cc11001100_hook("f.prototype", T.filters = cc11001100_hook("T.filters", T.pseudos, "assign"), "assign"), T.setFilters = cc11001100_hook("T.setFilters", new f(), "assign"), k = cc11001100_hook("k", t.tokenize = cc11001100_hook("t.tokenize", function (e, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c = cc11001100_hook("c", z[e + " "], "var-init");
      if (c) return n ? 0 : c.slice(0);
      for (a = cc11001100_hook("a", e, "assign"), u = cc11001100_hook("u", [], "assign"), l = cc11001100_hook("l", T.preFilter, "assign"); a;) {
        (!r || (i = cc11001100_hook("i", le.exec(a), "assign"))) && (i && (a = cc11001100_hook("a", a.slice(i[0].length) || a, "assign")), u.push(o = cc11001100_hook("o", [], "assign"))), r = cc11001100_hook("r", !1, "assign"), (i = cc11001100_hook("i", ce.exec(a), "assign")) && (r = cc11001100_hook("r", i.shift(), "assign"), o.push({
          value: cc11001100_hook("value", r, "object-key-init"),
          type: cc11001100_hook("type", i[0].replace(ue, " "), "object-key-init")
        }), a = cc11001100_hook("a", a.slice(r.length), "assign"));
        for (s in T.filter) !(i = cc11001100_hook("i", he[s].exec(a), "assign")) || l[s] && !(i = cc11001100_hook("i", l[s](i), "assign")) || (r = cc11001100_hook("r", i.shift(), "assign"), o.push({
          value: cc11001100_hook("value", r, "object-key-init"),
          type: cc11001100_hook("type", s, "object-key-init"),
          matches: cc11001100_hook("matches", i, "object-key-init")
        }), a = cc11001100_hook("a", a.slice(r.length), "assign"));
        if (!r) break;
      }
      return n ? a.length : a ? t.error(e) : z(e, u).slice(0);
    }, "assign"), "assign"), E = cc11001100_hook("E", t.compile = cc11001100_hook("t.compile", function (e, t) {
      var n,
        r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", X[e + " "], "var-init");
      if (!o) {
        for (t || (t = cc11001100_hook("t", k(e), "assign")), n = cc11001100_hook("n", t.length, "assign"); n--;) o = cc11001100_hook("o", y(t[n]), "assign"), o[W] ? r.push(o) : i.push(o);
        o = cc11001100_hook("o", X(e, x(i, r)), "assign"), o.selector = cc11001100_hook("o.selector", e, "assign");
      }
      return o;
    }, "assign"), "assign"), S = cc11001100_hook("S", t.select = cc11001100_hook("t.select", function (e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l = cc11001100_hook("l", "function" == typeof e && e, "var-init"),
        f = cc11001100_hook("f", !r && k(e = cc11001100_hook("e", l.selector || e, "assign")), "var-init");
      if (n = cc11001100_hook("n", n || [], "assign"), 1 === f.length) {
        if (o = cc11001100_hook("o", f[0] = cc11001100_hook("f[0]", f[0].slice(0), "assign"), "assign"), o.length > 2 && "ID" === (s = cc11001100_hook("s", o[0], "assign")).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
          if (t = cc11001100_hook("t", (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], "assign"), !t) return n;
          l && (t = cc11001100_hook("t", t.parentNode, "assign")), e = cc11001100_hook("e", e.slice(o.shift().value.length), "assign");
        }
        for (i = cc11001100_hook("i", he.needsContext.test(e) ? 0 : o.length, "assign"); i-- && (s = cc11001100_hook("s", o[i], "assign"), !T.relative[a = cc11001100_hook("a", s.type, "assign")]);) if ((u = cc11001100_hook("u", T.find[a], "assign")) && (r = cc11001100_hook("r", u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t), "assign"))) {
          if (o.splice(i, 1), e = cc11001100_hook("e", r.length && p(o), "assign"), !e) return K.apply(n, r), n;
          break;
        }
      }
      return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n;
    }, "assign"), "assign"), w.sortStable = cc11001100_hook("w.sortStable", W.split("").sort(U).join("") === W, "assign"), w.detectDuplicates = cc11001100_hook("w.detectDuplicates", !!A, "assign"), L(), w.sortDetached = cc11001100_hook("w.sortDetached", i(function (e) {
      return 1 & e.compareDocumentPosition(q.createElement("div"));
    }), "assign"), i(function (e) {
      return e.innerHTML = cc11001100_hook("e.innerHTML", "<a href='#'></a>", "assign"), "#" === e.firstChild.getAttribute("href");
    }) || o("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), w.attributes && i(function (e) {
      return e.innerHTML = cc11001100_hook("e.innerHTML", "<input/>", "assign"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || o("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
    }), i(function (e) {
      return null == e.getAttribute("disabled");
    }) || o(te, function (e, t, n) {
      var r;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = cc11001100_hook("r", e.getAttributeNode(t), "assign")) && r.specified ? r.value : null;
    }), t;
  }(e), "var-init");
  Z.find = cc11001100_hook("Z.find", ie, "assign"), Z.expr = cc11001100_hook("Z.expr", ie.selectors, "assign"), Z.expr[":"] = cc11001100_hook("Z.expr[\":\"]", Z.expr.pseudos, "assign"), Z.unique = cc11001100_hook("Z.unique", ie.uniqueSort, "assign"), Z.text = cc11001100_hook("Z.text", ie.getText, "assign"), Z.isXMLDoc = cc11001100_hook("Z.isXMLDoc", ie.isXML, "assign"), Z.contains = cc11001100_hook("Z.contains", ie.contains, "assign");
  var oe = cc11001100_hook("oe", Z.expr.match.needsContext, "var-init"),
    se = cc11001100_hook("se", /^<(\w+)\s*\/?>(?:<\/\1>|)$/, "var-init"),
    ae = cc11001100_hook("ae", /^.[^:#\[\.,]*$/, "var-init");
  Z.filter = cc11001100_hook("Z.filter", function (e, t, n) {
    var r = cc11001100_hook("r", t[0], "var-init");
    return n && (e = cc11001100_hook("e", ":not(" + e + ")", "assign")), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, "assign"), Z.fn.extend({
    find: function (e) {
      var t,
        n = cc11001100_hook("n", this.length, "var-init"),
        r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", this, "var-init");
      if ("string" != typeof e) return this.pushStack(Z(e).filter(function () {
        for (t = cc11001100_hook("t", 0, "assign"); n > t; t++) if (Z.contains(i[t], this)) return !0;
      }));
      for (t = cc11001100_hook("t", 0, "assign"); n > t; t++) Z.find(e, i[t], r);
      return r = cc11001100_hook("r", this.pushStack(n > 1 ? Z.unique(r) : r), "assign"), r.selector = cc11001100_hook("r.selector", this.selector ? this.selector + " " + e : e, "assign"), r;
    },
    filter: function (e) {
      return this.pushStack(r(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(r(this, e || [], !0));
    },
    is: function (e) {
      return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length;
    }
  });
  var ue,
    le = cc11001100_hook("le", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, "var-init"),
    ce = cc11001100_hook("ce", Z.fn.init = cc11001100_hook("Z.fn.init", function (e, t) {
      var n, r;
      if (!e) return this;
      if ("string" == typeof e) {
        if (n = cc11001100_hook("n", "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), "assign"), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
        if (n[1]) {
          if (t = cc11001100_hook("t", t instanceof Z ? t[0] : t, "assign"), Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this;
        }
        return r = cc11001100_hook("r", J.getElementById(n[2]), "assign"), r && r.parentNode && (this.length = cc11001100_hook("this.length", 1, "assign"), this[0] = cc11001100_hook("this[0]", r, "assign")), this.context = cc11001100_hook("this.context", J, "assign"), this.selector = cc11001100_hook("this.selector", e, "assign"), this;
      }
      return e.nodeType ? (this.context = cc11001100_hook("this.context", this[0] = cc11001100_hook("this[0]", e, "assign"), "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = cc11001100_hook("this.selector", e.selector, "assign"), this.context = cc11001100_hook("this.context", e.context, "assign")), Z.makeArray(e, this));
    }, "assign"), "var-init");
  ce.prototype = cc11001100_hook("ce.prototype", Z.fn, "assign"), ue = cc11001100_hook("ue", Z(J), "assign");
  var fe = cc11001100_hook("fe", /^(?:parents|prev(?:Until|All))/, "var-init"),
    pe = cc11001100_hook("pe", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  Z.extend({
    dir: function (e, t, n) {
      for (var r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", void 0 !== n, "var-init"); (e = cc11001100_hook("e", e[t], "assign")) && 9 !== e.nodeType;) if (1 === e.nodeType) {
        if (i && Z(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    sibling: function (e, t) {
      for (var n = cc11001100_hook("n", [], "var-init"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
  }), Z.fn.extend({
    has: function (e) {
      var t = cc11001100_hook("t", Z(e, this), "var-init"),
        n = cc11001100_hook("n", t.length, "var-init");
      return this.filter(function () {
        for (var e = cc11001100_hook("e", 0, "var-init"); n > e; e++) if (Z.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      for (var n, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", this.length, "var-init"), o = cc11001100_hook("o", [], "var-init"), s = cc11001100_hook("s", oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0, "var-init"); i > r; r++) for (n = cc11001100_hook("n", this[r], "assign"); n && n !== t; n = cc11001100_hook("n", n.parentNode, "assign")) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(o.length > 1 ? Z.unique(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), Z.each({
    parent: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return Z.dir(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return Z.dir(e, "parentNode", n);
    },
    next: function (e) {
      return i(e, "nextSibling");
    },
    prev: function (e) {
      return i(e, "previousSibling");
    },
    nextAll: function (e) {
      return Z.dir(e, "nextSibling");
    },
    prevAll: function (e) {
      return Z.dir(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return Z.dir(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return Z.dir(e, "previousSibling", n);
    },
    siblings: function (e) {
      return Z.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return Z.sibling(e.firstChild);
    },
    contents: function (e) {
      return e.contentDocument || Z.merge([], e.childNodes);
    }
  }, function (e, t) {
    Z.fn[e] = cc11001100_hook("Z.fn[e]", function (n, r) {
      var i = cc11001100_hook("i", Z.map(this, t, n), "var-init");
      return "Until" !== e.slice(-5) && (r = cc11001100_hook("r", n, "assign")), r && "string" == typeof r && (i = cc11001100_hook("i", Z.filter(r, i), "assign")), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i);
    }, "assign");
  });
  var de = cc11001100_hook("de", /\S+/g, "var-init"),
    he = cc11001100_hook("he", {}, "var-init");
  Z.Callbacks = cc11001100_hook("Z.Callbacks", function (e) {
    e = cc11001100_hook("e", "string" == typeof e ? he[e] || o(e) : Z.extend({}, e), "assign");
    var t,
      n,
      r,
      i,
      s,
      a,
      u = cc11001100_hook("u", [], "var-init"),
      l = cc11001100_hook("l", !e.once && [], "var-init"),
      c = function (o) {
        for (t = cc11001100_hook("t", e.memory && o, "assign"), n = cc11001100_hook("n", !0, "assign"), a = cc11001100_hook("a", i || 0, "assign"), i = cc11001100_hook("i", 0, "assign"), s = cc11001100_hook("s", u.length, "assign"), r = cc11001100_hook("r", !0, "assign"); u && s > a; a++) if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
          t = cc11001100_hook("t", !1, "assign");
          break;
        }
        r = cc11001100_hook("r", !1, "assign"), u && (l ? l.length && c(l.shift()) : t ? u = cc11001100_hook("u", [], "assign") : f.disable());
      },
      f = cc11001100_hook("f", {
        add: function () {
          if (u) {
            var n = cc11001100_hook("n", u.length, "var-init");
            !function o(t) {
              Z.each(t, function (t, n) {
                var r = cc11001100_hook("r", Z.type(n), "var-init");
                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n);
              });
            }(arguments), r ? s = cc11001100_hook("s", u.length, "assign") : t && (i = cc11001100_hook("i", n, "assign"), c(t));
          }
          return this;
        },
        remove: function () {
          return u && Z.each(arguments, function (e, t) {
            for (var n; (n = cc11001100_hook("n", Z.inArray(t, u, n), "assign")) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--);
          }), this;
        },
        has: function (e) {
          return e ? Z.inArray(e, u) > -1 : !(!u || !u.length);
        },
        empty: function () {
          return u = cc11001100_hook("u", [], "assign"), s = cc11001100_hook("s", 0, "assign"), this;
        },
        disable: function () {
          return u = cc11001100_hook("u", l = cc11001100_hook("l", t = cc11001100_hook("t", void 0, "assign"), "assign"), "assign"), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return l = cc11001100_hook("l", void 0, "assign"), t || f.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (e, t) {
          return !u || n && !l || (t = cc11001100_hook("t", t || [], "assign"), t = cc11001100_hook("t", [e, t.slice ? t.slice() : t], "assign"), r ? l.push(t) : c(t)), this;
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        }
      }, "var-init");
    return f;
  }, "assign"), Z.extend({
    Deferred: function (e) {
      var t = cc11001100_hook("t", [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]], "var-init"),
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
            return Z.Deferred(function (n) {
              Z.each(t, function (t, o) {
                var s = cc11001100_hook("s", Z.isFunction(e[t]) && e[t], "var-init");
                i[o[1]](function () {
                  var e = cc11001100_hook("e", s && s.apply(this, arguments), "var-init");
                  e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
                });
              }), e = cc11001100_hook("e", null, "assign");
            }).promise();
          },
          promise: function (e) {
            return null != e ? Z.extend(e, r) : r;
          }
        }, "var-init"),
        i = cc11001100_hook("i", {}, "var-init");
      return r.pipe = cc11001100_hook("r.pipe", r.then, "assign"), Z.each(t, function (e, o) {
        var s = cc11001100_hook("s", o[2], "var-init"),
          a = cc11001100_hook("a", o[3], "var-init");
        r[o[1]] = cc11001100_hook("r[o[1]]", s.add, "assign"), a && s.add(function () {
          n = cc11001100_hook("n", a, "assign");
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = cc11001100_hook("i[o[0]]", function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, "assign"), i[o[0] + "With"] = cc11001100_hook("i[o[0] + \"With\"]", s.fireWith, "assign");
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function (e) {
      var t,
        n,
        r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", _.call(arguments), "var-init"),
        s = cc11001100_hook("s", o.length, "var-init"),
        a = cc11001100_hook("a", 1 !== s || e && Z.isFunction(e.promise) ? s : 0, "var-init"),
        u = cc11001100_hook("u", 1 === a ? e : Z.Deferred(), "var-init"),
        l = function (e, n, r) {
          return function (i) {
            n[e] = cc11001100_hook("n[e]", this, "assign"), r[e] = cc11001100_hook("r[e]", arguments.length > 1 ? _.call(arguments) : i, "assign"), r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r);
          };
        };
      if (s > 1) for (t = cc11001100_hook("t", new Array(s), "assign"), n = cc11001100_hook("n", new Array(s), "assign"), r = cc11001100_hook("r", new Array(s), "assign"); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
      return a || u.resolveWith(r, o), u.promise();
    }
  });
  var ge;
  Z.fn.ready = cc11001100_hook("Z.fn.ready", function (e) {
    return Z.ready.promise().done(e), this;
  }, "assign"), Z.extend({
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    holdReady: function (e) {
      e ? Z.readyWait++ : Z.ready(!0);
    },
    ready: function (e) {
      (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = cc11001100_hook("Z.isReady", !0, "assign"), e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))));
    }
  }), Z.ready.promise = cc11001100_hook("Z.ready.promise", function (t) {
    return ge || (ge = cc11001100_hook("ge", Z.Deferred(), "assign"), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t);
  }, "assign"), Z.ready.promise();
  var me = cc11001100_hook("me", Z.access = cc11001100_hook("Z.access", function (e, t, n, r, i, o, s) {
    var a = cc11001100_hook("a", 0, "var-init"),
      u = cc11001100_hook("u", e.length, "var-init"),
      l = cc11001100_hook("l", null == n, "var-init");
    if ("object" === Z.type(n)) {
      i = cc11001100_hook("i", !0, "assign");
      for (a in n) Z.access(e, t, a, n[a], !0, o, s);
    } else if (void 0 !== r && (i = cc11001100_hook("i", !0, "assign"), Z.isFunction(r) || (s = cc11001100_hook("s", !0, "assign")), l && (s ? (t.call(e, r), t = cc11001100_hook("t", null, "assign")) : (l = cc11001100_hook("l", t, "assign"), t = cc11001100_hook("t", function (e, t, n) {
      return l.call(Z(e), n);
    }, "assign"))), t)) for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  }, "assign"), "var-init");
  Z.acceptData = cc11001100_hook("Z.acceptData", function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }, "assign"), a.uid = cc11001100_hook("a.uid", 1, "assign"), a.accepts = cc11001100_hook("a.accepts", Z.acceptData, "assign"), a.prototype = cc11001100_hook("a.prototype", {
    key: function (e) {
      if (!a.accepts(e)) return 0;
      var t = cc11001100_hook("t", {}, "var-init"),
        n = cc11001100_hook("n", e[this.expando], "var-init");
      if (!n) {
        n = cc11001100_hook("n", a.uid++, "assign");
        try {
          t[this.expando] = cc11001100_hook("t[this.expando]", {
            value: cc11001100_hook("value", n, "object-key-init")
          }, "assign"), Object.defineProperties(e, t);
        } catch (r) {
          t[this.expando] = cc11001100_hook("t[this.expando]", n, "assign"), Z.extend(e, t);
        }
      }
      return this.cache[n] || (this.cache[n] = cc11001100_hook("this.cache[n]", {}, "assign")), n;
    },
    set: function (e, t, n) {
      var r,
        i = cc11001100_hook("i", this.key(e), "var-init"),
        o = cc11001100_hook("o", this.cache[i], "var-init");
      if ("string" == typeof t) o[t] = cc11001100_hook("o[t]", n, "assign");else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);else for (r in t) o[r] = cc11001100_hook("o[r]", t[r], "assign");
      return o;
    },
    get: function (e, t) {
      var n = cc11001100_hook("n", this.cache[this.key(e)], "var-init");
      return void 0 === t ? n : n[t];
    },
    access: function (e, t, n) {
      var r;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = cc11001100_hook("r", this.get(e, t), "assign"), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
        r,
        i,
        o = cc11001100_hook("o", this.key(e), "var-init"),
        s = cc11001100_hook("s", this.cache[o], "var-init");
      if (void 0 === t) this.cache[o] = cc11001100_hook("this.cache[o]", {}, "assign");else {
        Z.isArray(t) ? r = cc11001100_hook("r", t.concat(t.map(Z.camelCase)), "assign") : (i = cc11001100_hook("i", Z.camelCase(t), "assign"), t in s ? r = cc11001100_hook("r", [t, i], "assign") : (r = cc11001100_hook("r", i, "assign"), r = cc11001100_hook("r", r in s ? [r] : r.match(de) || [], "assign"))), n = cc11001100_hook("n", r.length, "assign");
        for (; n--;) delete s[r[n]];
      }
    },
    hasData: function (e) {
      return !Z.isEmptyObject(this.cache[e[this.expando]] || {});
    },
    discard: function (e) {
      e[this.expando] && delete this.cache[e[this.expando]];
    }
  }, "assign");
  var ve = cc11001100_hook("ve", new a(), "var-init"),
    ye = cc11001100_hook("ye", new a(), "var-init"),
    xe = cc11001100_hook("xe", /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, "var-init"),
    be = cc11001100_hook("be", /([A-Z])/g, "var-init");
  Z.extend({
    hasData: function (e) {
      return ye.hasData(e) || ve.hasData(e);
    },
    data: function (e, t, n) {
      return ye.access(e, t, n);
    },
    removeData: function (e, t) {
      ye.remove(e, t);
    },
    _data: function (e, t, n) {
      return ve.access(e, t, n);
    },
    _removeData: function (e, t) {
      ve.remove(e, t);
    }
  }), Z.fn.extend({
    data: function (e, t) {
      var n,
        r,
        i,
        o = cc11001100_hook("o", this[0], "var-init"),
        s = cc11001100_hook("s", o && o.attributes, "var-init");
      if (void 0 === e) {
        if (this.length && (i = cc11001100_hook("i", ye.get(o), "assign"), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
          for (n = cc11001100_hook("n", s.length, "assign"); n--;) s[n] && (r = cc11001100_hook("r", s[n].name, "assign"), 0 === r.indexOf("data-") && (r = cc11001100_hook("r", Z.camelCase(r.slice(5)), "assign"), u(o, r, i[r])));
          ve.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == typeof e ? this.each(function () {
        ye.set(this, e);
      }) : me(this, function (t) {
        var n,
          r = cc11001100_hook("r", Z.camelCase(e), "var-init");
        if (o && void 0 === t) {
          if (n = cc11001100_hook("n", ye.get(o, e), "assign"), void 0 !== n) return n;
          if (n = cc11001100_hook("n", ye.get(o, r), "assign"), void 0 !== n) return n;
          if (n = cc11001100_hook("n", u(o, r, void 0), "assign"), void 0 !== n) return n;
        } else this.each(function () {
          var n = cc11001100_hook("n", ye.get(this, r), "var-init");
          ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        ye.remove(this, e);
      });
    }
  }), Z.extend({
    queue: function (e, t, n) {
      var r;
      return e ? (t = cc11001100_hook("t", (t || "fx") + "queue", "assign"), r = cc11001100_hook("r", ve.get(e, t), "assign"), n && (!r || Z.isArray(n) ? r = cc11001100_hook("r", ve.access(e, t, Z.makeArray(n)), "assign") : r.push(n)), r || []) : void 0;
    },
    dequeue: function (e, t) {
      t = cc11001100_hook("t", t || "fx", "assign");
      var n = cc11001100_hook("n", Z.queue(e, t), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", n.shift(), "var-init"),
        o = cc11001100_hook("o", Z._queueHooks(e, t), "var-init"),
        s = function () {
          Z.dequeue(e, t);
        };
      "inprogress" === i && (i = cc11001100_hook("i", n.shift(), "assign"), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = cc11001100_hook("n", t + "queueHooks", "var-init");
      return ve.get(e, n) || ve.access(e, n, {
        empty: cc11001100_hook("empty", Z.Callbacks("once memory").add(function () {
          ve.remove(e, [t + "queue", n]);
        }), "object-key-init")
      });
    }
  }), Z.fn.extend({
    queue: function (e, t) {
      var n = cc11001100_hook("n", 2, "var-init");
      return "string" != typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", "fx", "assign"), n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = cc11001100_hook("n", Z.queue(this, e, t), "var-init");
        Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        Z.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
        r = cc11001100_hook("r", 1, "var-init"),
        i = cc11001100_hook("i", Z.Deferred(), "var-init"),
        o = cc11001100_hook("o", this, "var-init"),
        s = cc11001100_hook("s", this.length, "var-init"),
        a = function () {
          --r || i.resolveWith(o, [o]);
        };
      for ("string" != typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), e = cc11001100_hook("e", e || "fx", "assign"); s--;) n = cc11001100_hook("n", ve.get(o[s], e + "queueHooks"), "assign"), n && n.empty && (r++, n.empty.add(a));
      return a(), i.promise(t);
    }
  });
  var we = cc11001100_hook("we", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    Te = cc11001100_hook("Te", ["Top", "Right", "Bottom", "Left"], "var-init"),
    Ce = function (e, t) {
      return e = cc11001100_hook("e", t || e, "assign"), "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e);
    },
    Ne = cc11001100_hook("Ne", /^(?:checkbox|radio)$/i, "var-init");
  !function () {
    var e = cc11001100_hook("e", J.createDocumentFragment(), "var-init"),
      t = cc11001100_hook("t", e.appendChild(J.createElement("div")), "var-init"),
      n = cc11001100_hook("n", J.createElement("input"), "var-init");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = cc11001100_hook("Q.checkClone", t.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), t.innerHTML = cc11001100_hook("t.innerHTML", "<textarea>x</textarea>", "assign"), Q.noCloneChecked = cc11001100_hook("Q.noCloneChecked", !!t.cloneNode(!0).lastChild.defaultValue, "assign");
  }();
  var ke = cc11001100_hook("ke", "undefined", "var-init");
  Q.focusinBubbles = cc11001100_hook("Q.focusinBubbles", "onfocusin" in e, "assign");
  var Ee = cc11001100_hook("Ee", /^key/, "var-init"),
    Se = cc11001100_hook("Se", /^(?:mouse|pointer|contextmenu)|click/, "var-init"),
    De = cc11001100_hook("De", /^(?:focusinfocus|focusoutblur)$/, "var-init"),
    je = cc11001100_hook("je", /^([^.]*)(?:\.(.+)|)$/, "var-init");
  Z.event = cc11001100_hook("Z.event", {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = cc11001100_hook("m", ve.get(e), "var-init");
      if (m) for (n.handler && (o = cc11001100_hook("o", n, "assign"), n = cc11001100_hook("n", o.handler, "assign"), i = cc11001100_hook("i", o.selector, "assign")), n.guid || (n.guid = cc11001100_hook("n.guid", Z.guid++, "assign")), (u = cc11001100_hook("u", m.events, "assign")) || (u = cc11001100_hook("u", m.events = cc11001100_hook("m.events", {}, "assign"), "assign")), (s = cc11001100_hook("s", m.handle, "assign")) || (s = cc11001100_hook("s", m.handle = cc11001100_hook("m.handle", function (t) {
        return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0;
      }, "assign"), "assign")), t = cc11001100_hook("t", (t || "").match(de) || [""], "assign"), l = cc11001100_hook("l", t.length, "assign"); l--;) a = cc11001100_hook("a", je.exec(t[l]) || [], "assign"), d = cc11001100_hook("d", g = cc11001100_hook("g", a[1], "assign"), "assign"), h = cc11001100_hook("h", (a[2] || "").split(".").sort(), "assign"), d && (f = cc11001100_hook("f", Z.event.special[d] || {}, "assign"), d = cc11001100_hook("d", (i ? f.delegateType : f.bindType) || d, "assign"), f = cc11001100_hook("f", Z.event.special[d] || {}, "assign"), c = cc11001100_hook("c", Z.extend({
        type: cc11001100_hook("type", d, "object-key-init"),
        origType: cc11001100_hook("origType", g, "object-key-init"),
        data: cc11001100_hook("data", r, "object-key-init"),
        handler: cc11001100_hook("handler", n, "object-key-init"),
        guid: cc11001100_hook("guid", n.guid, "object-key-init"),
        selector: cc11001100_hook("selector", i, "object-key-init"),
        needsContext: cc11001100_hook("needsContext", i && Z.expr.match.needsContext.test(i), "object-key-init"),
        namespace: cc11001100_hook("namespace", h.join("."), "object-key-init")
      }, o), "assign"), (p = cc11001100_hook("p", u[d], "assign")) || (p = cc11001100_hook("p", u[d] = cc11001100_hook("u[d]", [], "assign"), "assign"), p.delegateCount = cc11001100_hook("p.delegateCount", 0, "assign"), f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = cc11001100_hook("c.handler.guid", n.guid, "assign"))), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = cc11001100_hook("Z.event.global[d]", !0, "assign"));
    },
    remove: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = cc11001100_hook("m", ve.hasData(e) && ve.get(e), "var-init");
      if (m && (u = cc11001100_hook("u", m.events, "assign"))) {
        for (t = cc11001100_hook("t", (t || "").match(de) || [""], "assign"), l = cc11001100_hook("l", t.length, "assign"); l--;) if (a = cc11001100_hook("a", je.exec(t[l]) || [], "assign"), d = cc11001100_hook("d", g = cc11001100_hook("g", a[1], "assign"), "assign"), h = cc11001100_hook("h", (a[2] || "").split(".").sort(), "assign"), d) {
          for (f = cc11001100_hook("f", Z.event.special[d] || {}, "assign"), d = cc11001100_hook("d", (r ? f.delegateType : f.bindType) || d, "assign"), p = cc11001100_hook("p", u[d] || [], "assign"), a = cc11001100_hook("a", a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), s = cc11001100_hook("s", o = cc11001100_hook("o", p.length, "assign"), "assign"); o--;) c = cc11001100_hook("c", p[o], "assign"), !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d]);
        } else for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
        Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"));
      }
    },
    trigger: function (t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p = cc11001100_hook("p", [r || J], "var-init"),
        d = cc11001100_hook("d", G.call(t, "type") ? t.type : t, "var-init"),
        h = cc11001100_hook("h", G.call(t, "namespace") ? t.namespace.split(".") : [], "var-init");
      if (s = cc11001100_hook("s", a = cc11001100_hook("a", r = cc11001100_hook("r", r || J, "assign"), "assign"), "assign"), 3 !== r.nodeType && 8 !== r.nodeType && !De.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = cc11001100_hook("h", d.split("."), "assign"), d = cc11001100_hook("d", h.shift(), "assign"), h.sort()), l = cc11001100_hook("l", d.indexOf(":") < 0 && "on" + d, "assign"), t = cc11001100_hook("t", t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), "assign"), t.isTrigger = cc11001100_hook("t.isTrigger", i ? 2 : 3, "assign"), t.namespace = cc11001100_hook("t.namespace", h.join("."), "assign"), t.namespace_re = cc11001100_hook("t.namespace_re", t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), t.result = cc11001100_hook("t.result", void 0, "assign"), t.target || (t.target = cc11001100_hook("t.target", r, "assign")), n = cc11001100_hook("n", null == n ? [t] : Z.makeArray(n, [t]), "assign"), f = cc11001100_hook("f", Z.event.special[d] || {}, "assign"), i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
        if (!i && !f.noBubble && !Z.isWindow(r)) {
          for (u = cc11001100_hook("u", f.delegateType || d, "assign"), De.test(u + d) || (s = cc11001100_hook("s", s.parentNode, "assign")); s; s = cc11001100_hook("s", s.parentNode, "assign")) p.push(s), a = cc11001100_hook("a", s, "assign");
          a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e);
        }
        for (o = cc11001100_hook("o", 0, "assign"); (s = cc11001100_hook("s", p[o++], "assign")) && !t.isPropagationStopped();) t.type = cc11001100_hook("t.type", o > 1 ? u : f.bindType || d, "assign"), c = cc11001100_hook("c", (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), "assign"), c && c.apply(s, n), c = cc11001100_hook("c", l && s[l], "assign"), c && c.apply && Z.acceptData(s) && (t.result = cc11001100_hook("t.result", c.apply(s, n), "assign"), t.result === !1 && t.preventDefault());
        return t.type = cc11001100_hook("t.type", d, "assign"), i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = cc11001100_hook("a", r[l], "assign"), a && (r[l] = cc11001100_hook("r[l]", null, "assign")), Z.event.triggered = cc11001100_hook("Z.event.triggered", d, "assign"), r[d](), Z.event.triggered = cc11001100_hook("Z.event.triggered", void 0, "assign"), a && (r[l] = cc11001100_hook("r[l]", a, "assign"))), t.result;
      }
    },
    dispatch: function (e) {
      e = cc11001100_hook("e", Z.event.fix(e), "assign");
      var t,
        n,
        r,
        i,
        o,
        s = cc11001100_hook("s", [], "var-init"),
        a = cc11001100_hook("a", _.call(arguments), "var-init"),
        u = cc11001100_hook("u", (ve.get(this, "events") || {})[e.type] || [], "var-init"),
        l = cc11001100_hook("l", Z.event.special[e.type] || {}, "var-init");
      if (a[0] = cc11001100_hook("a[0]", e, "assign"), e.delegateTarget = cc11001100_hook("e.delegateTarget", this, "assign"), !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        for (s = cc11001100_hook("s", Z.event.handlers.call(this, e, u), "assign"), t = cc11001100_hook("t", 0, "assign"); (i = cc11001100_hook("i", s[t++], "assign")) && !e.isPropagationStopped();) for (e.currentTarget = cc11001100_hook("e.currentTarget", i.elem, "assign"), n = cc11001100_hook("n", 0, "assign"); (o = cc11001100_hook("o", i.handlers[n++], "assign")) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = cc11001100_hook("e.handleObj", o, "assign"), e.data = cc11001100_hook("e.data", o.data, "assign"), r = cc11001100_hook("r", ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), "assign"), void 0 !== r && (e.result = cc11001100_hook("e.result", r, "assign")) === !1 && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        s = cc11001100_hook("s", [], "var-init"),
        a = cc11001100_hook("a", t.delegateCount, "var-init"),
        u = cc11001100_hook("u", e.target, "var-init");
      if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = cc11001100_hook("u", u.parentNode || this, "assign")) if (u.disabled !== !0 || "click" !== e.type) {
        for (r = cc11001100_hook("r", [], "assign"), n = cc11001100_hook("n", 0, "assign"); a > n; n++) o = cc11001100_hook("o", t[n], "assign"), i = cc11001100_hook("i", o.selector + " ", "assign"), void 0 === r[i] && (r[i] = cc11001100_hook("r[i]", o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length, "assign")), r[i] && r.push(o);
        r.length && s.push({
          elem: cc11001100_hook("elem", u, "object-key-init"),
          handlers: cc11001100_hook("handlers", r, "object-key-init")
        });
      }
      return a < t.length && s.push({
        elem: cc11001100_hook("elem", this, "object-key-init"),
        handlers: cc11001100_hook("handlers", t.slice(a), "object-key-init")
      }), s;
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
      props: cc11001100_hook("props", "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), "object-key-init"),
      filter: function (e, t) {
        var n,
          r,
          i,
          o = cc11001100_hook("o", t.button, "var-init");
        return null == e.pageX && null != t.clientX && (n = cc11001100_hook("n", e.target.ownerDocument || J, "assign"), r = cc11001100_hook("r", n.documentElement, "assign"), i = cc11001100_hook("i", n.body, "assign"), e.pageX = cc11001100_hook("e.pageX", t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), "assign"), e.pageY = cc11001100_hook("e.pageY", t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0), "assign")), e.which || void 0 === o || (e.which = cc11001100_hook("e.which", 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0, "assign")), e;
      }
    },
    fix: function (e) {
      if (e[Z.expando]) return e;
      var t,
        n,
        r,
        i = cc11001100_hook("i", e.type, "var-init"),
        o = cc11001100_hook("o", e, "var-init"),
        s = cc11001100_hook("s", this.fixHooks[i], "var-init");
      for (s || (this.fixHooks[i] = cc11001100_hook("this.fixHooks[i]", s = cc11001100_hook("s", Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}, "assign"), "assign")), r = cc11001100_hook("r", s.props ? this.props.concat(s.props) : this.props, "assign"), e = cc11001100_hook("e", new Z.Event(o), "assign"), t = cc11001100_hook("t", r.length, "assign"); t--;) n = cc11001100_hook("n", r[t], "assign"), e[n] = cc11001100_hook("e[n]", o[n], "assign");
      return e.target || (e.target = cc11001100_hook("e.target", J, "assign")), 3 === e.target.nodeType && (e.target = cc11001100_hook("e.target", e.target.parentNode, "assign")), s.filter ? s.filter(e, o) : e;
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      focus: {
        trigger: function () {
          return this !== f() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          return this === f() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function (e) {
          return Z.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = cc11001100_hook("e.originalEvent.returnValue", e.result, "assign"));
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = cc11001100_hook("i", Z.extend(new Z.Event(), n, {
        type: cc11001100_hook("type", e, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init"),
        originalEvent: {}
      }), "var-init");
      r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, "assign"), Z.removeEvent = cc11001100_hook("Z.removeEvent", function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  }, "assign"), Z.Event = cc11001100_hook("Z.Event", function (e, t) {
    return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", e, "assign"), this.type = cc11001100_hook("this.type", e.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c, "assign")) : this.type = cc11001100_hook("this.type", e, "assign"), t && Z.extend(this, t), this.timeStamp = cc11001100_hook("this.timeStamp", e && e.timeStamp || Z.now(), "assign"), void (this[Z.expando] = cc11001100_hook("this[Z.expando]", !0, "assign"))) : new Z.Event(e, t);
  }, "assign"), Z.Event.prototype = cc11001100_hook("Z.Event.prototype", {
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", c, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", c, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", c, "object-key-init"),
    preventDefault: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", l, "assign"), e && e.preventDefault && e.preventDefault();
    },
    stopPropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", l, "assign"), e && e.stopPropagation && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", l, "assign"), e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, "assign"), Z.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init"),
    pointerenter: cc11001100_hook("pointerenter", "pointerover", "object-key-init"),
    pointerleave: cc11001100_hook("pointerleave", "pointerout", "object-key-init")
  }, function (e, t) {
    Z.event.special[e] = cc11001100_hook("Z.event.special[e]", {
      delegateType: cc11001100_hook("delegateType", t, "object-key-init"),
      bindType: cc11001100_hook("bindType", t, "object-key-init"),
      handle: function (e) {
        var n,
          r = cc11001100_hook("r", this, "var-init"),
          i = cc11001100_hook("i", e.relatedTarget, "var-init"),
          o = cc11001100_hook("o", e.handleObj, "var-init");
        return (!i || i !== r && !Z.contains(r, i)) && (e.type = cc11001100_hook("e.type", o.origType, "assign"), n = cc11001100_hook("n", o.handler.apply(this, arguments), "assign"), e.type = cc11001100_hook("e.type", t, "assign")), n;
      }
    }, "assign");
  }), Q.focusinBubbles || Z.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (e, t) {
    var n = function (e) {
      Z.event.simulate(t, e.target, Z.event.fix(e), !0);
    };
    Z.event.special[t] = cc11001100_hook("Z.event.special[t]", {
      setup: function () {
        var r = cc11001100_hook("r", this.ownerDocument || this, "var-init"),
          i = cc11001100_hook("i", ve.access(r, t), "var-init");
        i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1);
      },
      teardown: function () {
        var r = cc11001100_hook("r", this.ownerDocument || this, "var-init"),
          i = cc11001100_hook("i", ve.access(r, t) - 1, "var-init");
        i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t));
      }
    }, "assign");
  }), Z.fn.extend({
    on: function (e, t, n, r, i) {
      var o, s;
      if ("object" == typeof e) {
        "string" != typeof t && (n = cc11001100_hook("n", n || t, "assign"), t = cc11001100_hook("t", void 0, "assign"));
        for (s in e) this.on(s, t, n, e[s], i);
        return this;
      }
      if (null == n && null == r ? (r = cc11001100_hook("r", t, "assign"), n = cc11001100_hook("n", t = cc11001100_hook("t", void 0, "assign"), "assign")) : null == r && ("string" == typeof t ? (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", void 0, "assign")) : (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign"))), r === !1) r = cc11001100_hook("r", c, "assign");else if (!r) return this;
      return 1 === i && (o = cc11001100_hook("o", r, "assign"), r = cc11001100_hook("r", function (e) {
        return Z().off(e), o.apply(this, arguments);
      }, "assign"), r.guid = cc11001100_hook("r.guid", o.guid || (o.guid = cc11001100_hook("o.guid", Z.guid++, "assign")), "assign")), this.each(function () {
        Z.event.add(this, e, r, n, t);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = cc11001100_hook("r", e.handleObj, "assign"), Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return (t === !1 || "function" == typeof t) && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign")), n === !1 && (n = cc11001100_hook("n", c, "assign")), this.each(function () {
        Z.event.remove(this, e, n, t);
      });
    },
    trigger: function (e, t) {
      return this.each(function () {
        Z.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = cc11001100_hook("n", this[0], "var-init");
      return n ? Z.event.trigger(e, t, n, !0) : void 0;
    }
  });
  var Ae = cc11001100_hook("Ae", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "var-init"),
    Le = cc11001100_hook("Le", /<([\w:]+)/, "var-init"),
    qe = cc11001100_hook("qe", /<|&#?\w+;/, "var-init"),
    He = cc11001100_hook("He", /<(?:script|style|link)/i, "var-init"),
    Oe = cc11001100_hook("Oe", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    Fe = cc11001100_hook("Fe", /^$|\/(?:java|ecma)script/i, "var-init"),
    Pe = cc11001100_hook("Pe", /^true\/(.*)/, "var-init"),
    Re = cc11001100_hook("Re", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init"),
    Me = cc11001100_hook("Me", {
      option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
      thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
      col: cc11001100_hook("col", [2, "<table><colgroup>", "</colgroup></table>"], "object-key-init"),
      tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
      td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
      _default: cc11001100_hook("_default", [0, "", ""], "object-key-init")
    }, "var-init");
  Me.optgroup = cc11001100_hook("Me.optgroup", Me.option, "assign"), Me.tbody = cc11001100_hook("Me.tbody", Me.tfoot = cc11001100_hook("Me.tfoot", Me.colgroup = cc11001100_hook("Me.colgroup", Me.caption = cc11001100_hook("Me.caption", Me.thead, "assign"), "assign"), "assign"), "assign"), Me.th = cc11001100_hook("Me.th", Me.td, "assign"), Z.extend({
    clone: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a = cc11001100_hook("a", e.cloneNode(!0), "var-init"),
        u = cc11001100_hook("u", Z.contains(e.ownerDocument, e), "var-init");
      if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (s = cc11001100_hook("s", v(a), "assign"), o = cc11001100_hook("o", v(e), "assign"), r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", o.length, "assign"); i > r; r++) y(o[r], s[r]);
      if (t) if (n) for (o = cc11001100_hook("o", o || v(e), "assign"), s = cc11001100_hook("s", s || v(a), "assign"), r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", o.length, "assign"); i > r; r++) m(o[r], s[r]);else m(e, a);
      return s = cc11001100_hook("s", v(a, "script"), "assign"), s.length > 0 && g(s, !u && v(e, "script")), a;
    },
    buildFragment: function (e, t, n, r) {
      for (var i, o, s, a, u, l, c = cc11001100_hook("c", t.createDocumentFragment(), "var-init"), f = cc11001100_hook("f", [], "var-init"), p = cc11001100_hook("p", 0, "var-init"), d = cc11001100_hook("d", e.length, "var-init"); d > p; p++) if (i = cc11001100_hook("i", e[p], "assign"), i || 0 === i) if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);else if (qe.test(i)) {
        for (o = cc11001100_hook("o", o || c.appendChild(t.createElement("div")), "assign"), s = cc11001100_hook("s", (Le.exec(i) || ["", ""])[1].toLowerCase(), "assign"), a = cc11001100_hook("a", Me[s] || Me._default, "assign"), o.innerHTML = cc11001100_hook("o.innerHTML", a[1] + i.replace(Ae, "<$1></$2>") + a[2], "assign"), l = cc11001100_hook("l", a[0], "assign"); l--;) o = cc11001100_hook("o", o.lastChild, "assign");
        Z.merge(f, o.childNodes), o = cc11001100_hook("o", c.firstChild, "assign"), o.textContent = cc11001100_hook("o.textContent", "", "assign");
      } else f.push(t.createTextNode(i));
      for (c.textContent = cc11001100_hook("c.textContent", "", "assign"), p = cc11001100_hook("p", 0, "assign"); i = cc11001100_hook("i", f[p++], "assign");) if ((!r || -1 === Z.inArray(i, r)) && (u = cc11001100_hook("u", Z.contains(i.ownerDocument, i), "assign"), o = cc11001100_hook("o", v(c.appendChild(i), "script"), "assign"), u && g(o), n)) for (l = cc11001100_hook("l", 0, "assign"); i = cc11001100_hook("i", o[l++], "assign");) Fe.test(i.type || "") && n.push(i);
      return c;
    },
    cleanData: function (e) {
      for (var t, n, r, i, o = cc11001100_hook("o", Z.event.special, "var-init"), s = cc11001100_hook("s", 0, "var-init"); void 0 !== (n = cc11001100_hook("n", e[s], "assign")); s++) {
        if (Z.acceptData(n) && (i = cc11001100_hook("i", n[ve.expando], "assign"), i && (t = cc11001100_hook("t", ve.cache[i], "assign")))) {
          if (t.events) for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
          ve.cache[i] && delete ve.cache[i];
        }
        delete ye.cache[n[ye.expando]];
      }
    }
  }), Z.fn.extend({
    text: function (e) {
      return me(this, function (e) {
        return void 0 === e ? Z.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = cc11001100_hook("this.textContent", e, "assign"));
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = cc11001100_hook("t", p(this, e), "var-init");
          t.appendChild(e);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = cc11001100_hook("t", p(this, e), "var-init");
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
      for (var n, r = cc11001100_hook("r", e ? Z.filter(e, this) : this, "var-init"), i = cc11001100_hook("i", 0, "var-init"); null != (n = cc11001100_hook("n", r[i], "assign")); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
      return this;
    },
    empty: function () {
      for (var e, t = cc11001100_hook("t", 0, "var-init"); null != (e = cc11001100_hook("e", this[t], "assign")); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = cc11001100_hook("e.textContent", "", "assign"));
      return this;
    },
    clone: function (e, t) {
      return e = cc11001100_hook("e", null == e ? !1 : e, "assign"), t = cc11001100_hook("t", null == t ? e : t, "assign"), this.map(function () {
        return Z.clone(this, e, t);
      });
    },
    html: function (e) {
      return me(this, function (e) {
        var t = cc11001100_hook("t", this[0] || {}, "var-init"),
          n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", this.length, "var-init");
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !He.test(e) && !Me[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = cc11001100_hook("e", e.replace(Ae, "<$1></$2>"), "assign");
          try {
            for (; r > n; n++) t = cc11001100_hook("t", this[n] || {}, "assign"), 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = cc11001100_hook("t.innerHTML", e, "assign"));
            t = cc11001100_hook("t", 0, "assign");
          } catch (i) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = cc11001100_hook("e", arguments[0], "var-init");
      return this.domManip(arguments, function (t) {
        e = cc11001100_hook("e", this.parentNode, "assign"), Z.cleanData(v(this)), e && e.replaceChild(t, this);
      }), e && (e.length || e.nodeType) ? this : this.remove();
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (e, t) {
      e = cc11001100_hook("e", z.apply([], e), "assign");
      var n,
        r,
        i,
        o,
        s,
        a,
        u = cc11001100_hook("u", 0, "var-init"),
        l = cc11001100_hook("l", this.length, "var-init"),
        c = cc11001100_hook("c", this, "var-init"),
        f = cc11001100_hook("f", l - 1, "var-init"),
        p = cc11001100_hook("p", e[0], "var-init"),
        g = cc11001100_hook("g", Z.isFunction(p), "var-init");
      if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p)) return this.each(function (n) {
        var r = cc11001100_hook("r", c.eq(n), "var-init");
        g && (e[0] = cc11001100_hook("e[0]", p.call(this, n, r.html()), "assign")), r.domManip(e, t);
      });
      if (l && (n = cc11001100_hook("n", Z.buildFragment(e, this[0].ownerDocument, !1, this), "assign"), r = cc11001100_hook("r", n.firstChild, "assign"), 1 === n.childNodes.length && (n = cc11001100_hook("n", r, "assign")), r)) {
        for (i = cc11001100_hook("i", Z.map(v(n, "script"), d), "assign"), o = cc11001100_hook("o", i.length, "assign"); l > u; u++) s = cc11001100_hook("s", n, "assign"), u !== f && (s = cc11001100_hook("s", Z.clone(s, !0, !0), "assign"), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
        if (o) for (a = cc11001100_hook("a", i[i.length - 1].ownerDocument, "assign"), Z.map(i, h), u = cc11001100_hook("u", 0, "assign"); o > u; u++) s = cc11001100_hook("s", i[u], "assign"), Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Re, "")));
      }
      return this;
    }
  }), Z.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (e, t) {
    Z.fn[e] = cc11001100_hook("Z.fn[e]", function (e) {
      for (var n, r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", Z(e), "var-init"), o = cc11001100_hook("o", i.length - 1, "var-init"), s = cc11001100_hook("s", 0, "var-init"); o >= s; s++) n = cc11001100_hook("n", s === o ? this : this.clone(!0), "assign"), Z(i[s])[t](n), X.apply(r, n.get());
      return this.pushStack(r);
    }, "assign");
  });
  var We,
    $e = cc11001100_hook("$e", {}, "var-init"),
    Ie = cc11001100_hook("Ie", /^margin/, "var-init"),
    Be = cc11001100_hook("Be", new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), "var-init"),
    _e = function (t) {
      return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null);
    };
  !function () {
    function t() {
      s.style.cssText = cc11001100_hook("s.style.cssText", "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", "assign"), s.innerHTML = cc11001100_hook("s.innerHTML", "", "assign"), i.appendChild(o);
      var t = cc11001100_hook("t", e.getComputedStyle(s, null), "var-init");
      n = cc11001100_hook("n", "1%" !== t.top, "assign"), r = cc11001100_hook("r", "4px" === t.width, "assign"), i.removeChild(o);
    }
    var n,
      r,
      i = cc11001100_hook("i", J.documentElement, "var-init"),
      o = cc11001100_hook("o", J.createElement("div"), "var-init"),
      s = cc11001100_hook("s", J.createElement("div"), "var-init");
    s.style && (s.style.backgroundClip = cc11001100_hook("s.style.backgroundClip", "content-box", "assign"), s.cloneNode(!0).style.backgroundClip = cc11001100_hook("s.cloneNode(!0).style.backgroundClip", "", "assign"), Q.clearCloneStyle = cc11001100_hook("Q.clearCloneStyle", "content-box" === s.style.backgroundClip, "assign"), o.style.cssText = cc11001100_hook("o.style.cssText", "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", "assign"), o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
      pixelPosition: function () {
        return t(), n;
      },
      boxSizingReliable: function () {
        return null == r && t(), r;
      },
      reliableMarginRight: function () {
        var t,
          n = cc11001100_hook("n", s.appendChild(J.createElement("div")), "var-init");
        return n.style.cssText = cc11001100_hook("n.style.cssText", s.style.cssText = cc11001100_hook("s.style.cssText", "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", "assign"), "assign"), n.style.marginRight = cc11001100_hook("n.style.marginRight", n.style.width = cc11001100_hook("n.style.width", "0", "assign"), "assign"), s.style.width = cc11001100_hook("s.style.width", "1px", "assign"), i.appendChild(o), t = cc11001100_hook("t", !parseFloat(e.getComputedStyle(n, null).marginRight), "assign"), i.removeChild(o), s.removeChild(n), t;
      }
    }));
  }(), Z.swap = cc11001100_hook("Z.swap", function (e, t, n, r) {
    var i,
      o,
      s = cc11001100_hook("s", {}, "var-init");
    for (o in t) s[o] = cc11001100_hook("s[o]", e.style[o], "assign"), e.style[o] = cc11001100_hook("e.style[o]", t[o], "assign");
    i = cc11001100_hook("i", n.apply(e, r || []), "assign");
    for (o in t) e.style[o] = cc11001100_hook("e.style[o]", s[o], "assign");
    return i;
  }, "assign");
  var ze = cc11001100_hook("ze", /^(none|table(?!-c[ea]).+)/, "var-init"),
    Xe = cc11001100_hook("Xe", new RegExp("^(" + we + ")(.*)$", "i"), "var-init"),
    Ue = cc11001100_hook("Ue", new RegExp("^([+-])=(" + we + ")", "i"), "var-init"),
    Ve = cc11001100_hook("Ve", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    Ye = cc11001100_hook("Ye", {
      letterSpacing: cc11001100_hook("letterSpacing", "0", "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", "400", "object-key-init")
    }, "var-init"),
    Ge = cc11001100_hook("Ge", ["Webkit", "O", "Moz", "ms"], "var-init");
  Z.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = cc11001100_hook("n", w(e, "opacity"), "var-init");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
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
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = cc11001100_hook("a", Z.camelCase(t), "var-init"),
          u = cc11001100_hook("u", e.style, "var-init");
        return t = cc11001100_hook("t", Z.cssProps[a] || (Z.cssProps[a] = cc11001100_hook("Z.cssProps[a]", C(u, a), "assign")), "assign"), s = cc11001100_hook("s", Z.cssHooks[t] || Z.cssHooks[a], "assign"), void 0 === n ? s && "get" in s && void 0 !== (i = cc11001100_hook("i", s.get(e, !1, r), "assign")) ? i : u[t] : (o = cc11001100_hook("o", typeof n, "assign"), "string" === o && (i = cc11001100_hook("i", Ue.exec(n), "assign")) && (n = cc11001100_hook("n", (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), "assign"), o = cc11001100_hook("o", "number", "assign")), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += cc11001100_hook("n", "px", "assign")), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = cc11001100_hook("u[t]", "inherit", "assign")), s && "set" in s && void 0 === (n = cc11001100_hook("n", s.set(e, n, r), "assign")) || (u[t] = cc11001100_hook("u[t]", n, "assign"))), void 0);
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        s,
        a = cc11001100_hook("a", Z.camelCase(t), "var-init");
      return t = cc11001100_hook("t", Z.cssProps[a] || (Z.cssProps[a] = cc11001100_hook("Z.cssProps[a]", C(e.style, a), "assign")), "assign"), s = cc11001100_hook("s", Z.cssHooks[t] || Z.cssHooks[a], "assign"), s && "get" in s && (i = cc11001100_hook("i", s.get(e, !0, n), "assign")), void 0 === i && (i = cc11001100_hook("i", w(e, t, r), "assign")), "normal" === i && t in Ye && (i = cc11001100_hook("i", Ye[t], "assign")), "" === n || n ? (o = cc11001100_hook("o", parseFloat(i), "assign"), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i;
    }
  }), Z.each(["height", "width"], function (e, t) {
    Z.cssHooks[t] = cc11001100_hook("Z.cssHooks[t]", {
      get: function (e, n, r) {
        return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function () {
          return E(e, t, r);
        }) : E(e, t, r) : void 0;
      },
      set: function (e, n, r) {
        var i = cc11001100_hook("i", r && _e(e), "var-init");
        return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0);
      }
    }, "assign");
  }), Z.cssHooks.marginRight = cc11001100_hook("Z.cssHooks.marginRight", T(Q.reliableMarginRight, function (e, t) {
    return t ? Z.swap(e, {
      display: cc11001100_hook("display", "inline-block", "object-key-init")
    }, w, [e, "marginRight"]) : void 0;
  }), "assign"), Z.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (e, t) {
    Z.cssHooks[e + t] = cc11001100_hook("Z.cssHooks[e + t]", {
      expand: function (n) {
        for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", {}, "var-init"), o = cc11001100_hook("o", "string" == typeof n ? n.split(" ") : [n], "var-init"); 4 > r; r++) i[e + Te[r] + t] = cc11001100_hook("i[e + Te[r] + t]", o[r] || o[r - 2] || o[0], "assign");
        return i;
      }
    }, "assign"), Ie.test(e) || (Z.cssHooks[e + t].set = cc11001100_hook("Z.cssHooks[e + t].set", N, "assign"));
  }), Z.fn.extend({
    css: function (e, t) {
      return me(this, function (e, t, n) {
        var r,
          i,
          o = cc11001100_hook("o", {}, "var-init"),
          s = cc11001100_hook("s", 0, "var-init");
        if (Z.isArray(t)) {
          for (r = cc11001100_hook("r", _e(e), "assign"), i = cc11001100_hook("i", t.length, "assign"); i > s; s++) o[t[s]] = cc11001100_hook("o[t[s]]", Z.css(e, t[s], !1, r), "assign");
          return o;
        }
        return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function () {
      return S(this, !0);
    },
    hide: function () {
      return S(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Ce(this) ? Z(this).show() : Z(this).hide();
      });
    }
  }), Z.Tween = cc11001100_hook("Z.Tween", D, "assign"), D.prototype = cc11001100_hook("D.prototype", {
    constructor: cc11001100_hook("constructor", D, "object-key-init"),
    init: function (e, t, n, r, i, o) {
      this.elem = cc11001100_hook("this.elem", e, "assign"), this.prop = cc11001100_hook("this.prop", n, "assign"), this.easing = cc11001100_hook("this.easing", i || "swing", "assign"), this.options = cc11001100_hook("this.options", t, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", r, "assign"), this.unit = cc11001100_hook("this.unit", o || (Z.cssNumber[n] ? "" : "px"), "assign");
    },
    cur: function () {
      var e = cc11001100_hook("e", D.propHooks[this.prop], "var-init");
      return e && e.get ? e.get(this) : D.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = cc11001100_hook("n", D.propHooks[this.prop], "var-init");
      return this.options.duration ? this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration), "assign"), "assign") : this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", e, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * t + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this;
    }
  }, "assign"), D.prototype.init.prototype = cc11001100_hook("D.prototype.init.prototype", D.prototype, "assign"), D.propHooks = cc11001100_hook("D.propHooks", {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = cc11001100_hook("t", Z.css(e.elem, e.prop, ""), "assign"), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      },
      set: function (e) {
        Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign");
      }
    }
  }, "assign"), D.propHooks.scrollTop = cc11001100_hook("D.propHooks.scrollTop", D.propHooks.scrollLeft = cc11001100_hook("D.propHooks.scrollLeft", {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign"));
    }
  }, "assign"), "assign"), Z.easing = cc11001100_hook("Z.easing", {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, "assign"), Z.fx = cc11001100_hook("Z.fx", D.prototype.init, "assign"), Z.fx.step = cc11001100_hook("Z.fx.step", {}, "assign");
  var Qe,
    Je,
    Ke = cc11001100_hook("Ke", /^(?:toggle|show|hide)$/, "var-init"),
    Ze = cc11001100_hook("Ze", new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), "var-init"),
    et = cc11001100_hook("et", /queueHooks$/, "var-init"),
    tt = cc11001100_hook("tt", [q], "var-init"),
    nt = cc11001100_hook("nt", {
      "*": cc11001100_hook("*", [function (e, t) {
        var n = cc11001100_hook("n", this.createTween(e, t), "var-init"),
          r = cc11001100_hook("r", n.cur(), "var-init"),
          i = cc11001100_hook("i", Ze.exec(t), "var-init"),
          o = cc11001100_hook("o", i && i[3] || (Z.cssNumber[e] ? "" : "px"), "var-init"),
          s = cc11001100_hook("s", (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)), "var-init"),
          a = cc11001100_hook("a", 1, "var-init"),
          u = cc11001100_hook("u", 20, "var-init");
        if (s && s[3] !== o) {
          o = cc11001100_hook("o", o || s[3], "assign"), i = cc11001100_hook("i", i || [], "assign"), s = cc11001100_hook("s", +r || 1, "assign");
          do a = cc11001100_hook("a", a || ".5", "assign"), s /= cc11001100_hook("s", a, "assign"), Z.style(n.elem, e, s + o); while (a !== (a = cc11001100_hook("a", n.cur() / r, "assign")) && 1 !== a && --u);
        }
        return i && (s = cc11001100_hook("s", n.start = cc11001100_hook("n.start", +s || +r || 0, "assign"), "assign"), n.unit = cc11001100_hook("n.unit", o, "assign"), n.end = cc11001100_hook("n.end", i[1] ? s + (i[1] + 1) * i[2] : +i[2], "assign")), n;
      }], "object-key-init")
    }, "var-init");
  Z.Animation = cc11001100_hook("Z.Animation", Z.extend(O, {
    tweener: function (e, t) {
      Z.isFunction(e) ? (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", ["*"], "assign")) : e = cc11001100_hook("e", e.split(" "), "assign");
      for (var n, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); i > r; r++) n = cc11001100_hook("n", e[r], "assign"), nt[n] = cc11001100_hook("nt[n]", nt[n] || [], "assign"), nt[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? tt.unshift(e) : tt.push(e);
    }
  }), "assign"), Z.speed = cc11001100_hook("Z.speed", function (e, t, n) {
    var r = cc11001100_hook("r", e && "object" == typeof e ? Z.extend({}, e) : {
      complete: cc11001100_hook("complete", n || !n && t || Z.isFunction(e) && e, "object-key-init"),
      duration: cc11001100_hook("duration", e, "object-key-init"),
      easing: cc11001100_hook("easing", n && t || t && !Z.isFunction(t) && t, "object-key-init")
    }, "var-init");
    return r.duration = cc11001100_hook("r.duration", Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, "assign"), (null == r.queue || r.queue === !0) && (r.queue = cc11001100_hook("r.queue", "fx", "assign")), r.old = cc11001100_hook("r.old", r.complete, "assign"), r.complete = cc11001100_hook("r.complete", function () {
      Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue);
    }, "assign"), r;
  }, "assign"), Z.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(Ce).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", t, "object-key-init")
      }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = cc11001100_hook("i", Z.isEmptyObject(e), "var-init"),
        o = cc11001100_hook("o", Z.speed(t, n, r), "var-init"),
        s = function () {
          var t = cc11001100_hook("t", O(this, Z.extend({}, e), o), "var-init");
          (i || ve.get(this, "finish")) && t.stop(!0);
        };
      return s.finish = cc11001100_hook("s.finish", s, "assign"), i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = cc11001100_hook("t", e.stop, "var-init");
        delete e.stop, t(n);
      };
      return "string" != typeof e && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = cc11001100_hook("t", !0, "var-init"),
          i = cc11001100_hook("i", null != e && e + "queueHooks", "var-init"),
          o = cc11001100_hook("o", Z.timers, "var-init"),
          s = cc11001100_hook("s", ve.get(this), "var-init");
        if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
        for (i = cc11001100_hook("i", o.length, "assign"); i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = cc11001100_hook("t", !1, "assign"), o.splice(i, 1));
        (t || !n) && Z.dequeue(this, e);
      });
    },
    finish: function (e) {
      return e !== !1 && (e = cc11001100_hook("e", e || "fx", "assign")), this.each(function () {
        var t,
          n = cc11001100_hook("n", ve.get(this), "var-init"),
          r = cc11001100_hook("r", n[e + "queue"], "var-init"),
          i = cc11001100_hook("i", n[e + "queueHooks"], "var-init"),
          o = cc11001100_hook("o", Z.timers, "var-init"),
          s = cc11001100_hook("s", r ? r.length : 0, "var-init");
        for (n.finish = cc11001100_hook("n.finish", !0, "assign"), Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = cc11001100_hook("t", o.length, "assign"); t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = cc11001100_hook("t", 0, "assign"); s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  }), Z.each(["toggle", "show", "hide"], function (e, t) {
    var n = cc11001100_hook("n", Z.fn[t], "var-init");
    Z.fn[t] = cc11001100_hook("Z.fn[t]", function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i);
    }, "assign");
  }), Z.each({
    slideDown: cc11001100_hook("slideDown", A("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", A("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", A("toggle"), "object-key-init"),
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
    Z.fn[e] = cc11001100_hook("Z.fn[e]", function (e, n, r) {
      return this.animate(t, e, n, r);
    }, "assign");
  }), Z.timers = cc11001100_hook("Z.timers", [], "assign"), Z.fx.tick = cc11001100_hook("Z.fx.tick", function () {
    var e,
      t = cc11001100_hook("t", 0, "var-init"),
      n = cc11001100_hook("n", Z.timers, "var-init");
    for (Qe = cc11001100_hook("Qe", Z.now(), "assign"); t < n.length; t++) e = cc11001100_hook("e", n[t], "assign"), e() || n[t] !== e || n.splice(t--, 1);
    n.length || Z.fx.stop(), Qe = cc11001100_hook("Qe", void 0, "assign");
  }, "assign"), Z.fx.timer = cc11001100_hook("Z.fx.timer", function (e) {
    Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop();
  }, "assign"), Z.fx.interval = cc11001100_hook("Z.fx.interval", 13, "assign"), Z.fx.start = cc11001100_hook("Z.fx.start", function () {
    Je || (Je = cc11001100_hook("Je", setInterval(Z.fx.tick, Z.fx.interval), "assign"));
  }, "assign"), Z.fx.stop = cc11001100_hook("Z.fx.stop", function () {
    clearInterval(Je), Je = cc11001100_hook("Je", null, "assign");
  }, "assign"), Z.fx.speeds = cc11001100_hook("Z.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"), Z.fn.delay = cc11001100_hook("Z.fn.delay", function (e, t) {
    return e = cc11001100_hook("e", Z.fx ? Z.fx.speeds[e] || e : e, "assign"), t = cc11001100_hook("t", t || "fx", "assign"), this.queue(t, function (t, n) {
      var r = cc11001100_hook("r", setTimeout(t, e), "var-init");
      n.stop = cc11001100_hook("n.stop", function () {
        clearTimeout(r);
      }, "assign");
    });
  }, "assign"), function () {
    var e = cc11001100_hook("e", J.createElement("input"), "var-init"),
      t = cc11001100_hook("t", J.createElement("select"), "var-init"),
      n = cc11001100_hook("n", t.appendChild(J.createElement("option")), "var-init");
    e.type = cc11001100_hook("e.type", "checkbox", "assign"), Q.checkOn = cc11001100_hook("Q.checkOn", "" !== e.value, "assign"), Q.optSelected = cc11001100_hook("Q.optSelected", n.selected, "assign"), t.disabled = cc11001100_hook("t.disabled", !0, "assign"), Q.optDisabled = cc11001100_hook("Q.optDisabled", !n.disabled, "assign"), e = cc11001100_hook("e", J.createElement("input"), "assign"), e.value = cc11001100_hook("e.value", "t", "assign"), e.type = cc11001100_hook("e.type", "radio", "assign"), Q.radioValue = cc11001100_hook("Q.radioValue", "t" === e.value, "assign");
  }();
  var rt,
    it,
    ot = cc11001100_hook("ot", Z.expr.attrHandle, "var-init");
  Z.fn.extend({
    attr: function (e, t) {
      return me(this, Z.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        Z.removeAttr(this, e);
      });
    }
  }), Z.extend({
    attr: function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", e.nodeType, "var-init");
      if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = cc11001100_hook("t", t.toLowerCase(), "assign"), r = cc11001100_hook("r", Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt), "assign")), void 0 === n ? r && "get" in r && null !== (i = cc11001100_hook("i", r.get(e, t), "assign")) ? i : (i = cc11001100_hook("i", Z.find.attr(e, t), "assign"), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = cc11001100_hook("i", r.set(e, n, t), "assign")) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t));
    },
    removeAttr: function (e, t) {
      var n,
        r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", t && t.match(de), "var-init");
      if (o && 1 === e.nodeType) for (; n = cc11001100_hook("n", o[i++], "assign");) r = cc11001100_hook("r", Z.propFix[n] || n, "assign"), Z.expr.match.bool.test(n) && (e[r] = cc11001100_hook("e[r]", !1, "assign")), e.removeAttribute(n);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
            var n = cc11001100_hook("n", e.value, "var-init");
            return e.setAttribute("type", t), n && (e.value = cc11001100_hook("e.value", n, "assign")), t;
          }
        }
      }
    }
  }), it = cc11001100_hook("it", {
    set: function (e, t, n) {
      return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, "assign"), Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = cc11001100_hook("n", ot[t] || Z.find.attr, "var-init");
    ot[t] = cc11001100_hook("ot[t]", function (e, t, r) {
      var i, o;
      return r || (o = cc11001100_hook("o", ot[t], "assign"), ot[t] = cc11001100_hook("ot[t]", i, "assign"), i = cc11001100_hook("i", null != n(e, t, r) ? t.toLowerCase() : null, "assign"), ot[t] = cc11001100_hook("ot[t]", o, "assign")), i;
    }, "assign");
  });
  var st = cc11001100_hook("st", /^(?:input|select|textarea|button)$/i, "var-init");
  Z.fn.extend({
    prop: function (e, t) {
      return me(this, Z.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[Z.propFix[e] || e];
      });
    }
  }), Z.extend({
    propFix: {
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init")
    },
    prop: function (e, t, n) {
      var r,
        i,
        o,
        s = cc11001100_hook("s", e.nodeType, "var-init");
      if (e && 3 !== s && 8 !== s && 2 !== s) return o = cc11001100_hook("o", 1 !== s || !Z.isXMLDoc(e), "assign"), o && (t = cc11001100_hook("t", Z.propFix[t] || t, "assign"), i = cc11001100_hook("i", Z.propHooks[t], "assign")), void 0 !== n ? i && "set" in i && void 0 !== (r = cc11001100_hook("r", i.set(e, n, t), "assign")) ? r : e[t] = cc11001100_hook("e[t]", n, "assign") : i && "get" in i && null !== (r = cc11001100_hook("r", i.get(e, t), "assign")) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1;
        }
      }
    }
  }), Q.optSelected || (Z.propHooks.selected = cc11001100_hook("Z.propHooks.selected", {
    get: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    }
  }, "assign")), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    Z.propFix[this.toLowerCase()] = cc11001100_hook("Z.propFix[this.toLowerCase()]", this, "assign");
  });
  var at = cc11001100_hook("at", /[\t\r\n\f]/g, "var-init");
  Z.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = cc11001100_hook("a", "string" == typeof e && e, "var-init"),
        u = cc11001100_hook("u", 0, "var-init"),
        l = cc11001100_hook("l", this.length, "var-init");
      if (Z.isFunction(e)) return this.each(function (t) {
        Z(this).addClass(e.call(this, t, this.className));
      });
      if (a) for (t = cc11001100_hook("t", (e || "").match(de) || [], "assign"); l > u; u++) if (n = cc11001100_hook("n", this[u], "assign"), r = cc11001100_hook("r", 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " "), "assign")) {
        for (o = cc11001100_hook("o", 0, "assign"); i = cc11001100_hook("i", t[o++], "assign");) r.indexOf(" " + i + " ") < 0 && (r += cc11001100_hook("r", i + " ", "assign"));
        s = cc11001100_hook("s", Z.trim(r), "assign"), n.className !== s && (n.className = cc11001100_hook("n.className", s, "assign"));
      }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = cc11001100_hook("a", 0 === arguments.length || "string" == typeof e && e, "var-init"),
        u = cc11001100_hook("u", 0, "var-init"),
        l = cc11001100_hook("l", this.length, "var-init");
      if (Z.isFunction(e)) return this.each(function (t) {
        Z(this).removeClass(e.call(this, t, this.className));
      });
      if (a) for (t = cc11001100_hook("t", (e || "").match(de) || [], "assign"); l > u; u++) if (n = cc11001100_hook("n", this[u], "assign"), r = cc11001100_hook("r", 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : ""), "assign")) {
        for (o = cc11001100_hook("o", 0, "assign"); i = cc11001100_hook("i", t[o++], "assign");) for (; r.indexOf(" " + i + " ") >= 0;) r = cc11001100_hook("r", r.replace(" " + i + " ", " "), "assign");
        s = cc11001100_hook("s", e ? Z.trim(r) : "", "assign"), n.className !== s && (n.className = cc11001100_hook("n.className", s, "assign"));
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = cc11001100_hook("n", typeof e, "var-init");
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function (n) {
        Z(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) for (var t, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", Z(this), "var-init"), o = cc11001100_hook("o", e.match(de) || [], "var-init"); t = cc11001100_hook("t", o[r++], "assign");) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);else (n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = cc11001100_hook("this.className", this.className || e === !1 ? "" : ve.get(this, "__className__") || "", "assign"));
      });
    },
    hasClass: function (e) {
      for (var t = cc11001100_hook("t", " " + e + " ", "var-init"), n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", this.length, "var-init"); r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
      return !1;
    }
  });
  var ut = cc11001100_hook("ut", /\r/g, "var-init");
  Z.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = cc11001100_hook("i", this[0], "var-init");
      {
        if (arguments.length) return r = cc11001100_hook("r", Z.isFunction(e), "assign"), this.each(function (n) {
          var i;
          1 === this.nodeType && (i = cc11001100_hook("i", r ? e.call(this, n, Z(this).val()) : e, "assign"), null == i ? i = cc11001100_hook("i", "", "assign") : "number" == typeof i ? i += cc11001100_hook("i", "", "assign") : Z.isArray(i) && (i = cc11001100_hook("i", Z.map(i, function (e) {
            return null == e ? "" : e + "";
          }), "assign")), t = cc11001100_hook("t", Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], "assign"), t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = cc11001100_hook("this.value", i, "assign")));
        });
        if (i) return t = cc11001100_hook("t", Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], "assign"), t && "get" in t && void 0 !== (n = cc11001100_hook("n", t.get(i, "value"), "assign")) ? n : (n = cc11001100_hook("n", i.value, "assign"), "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n);
      }
    }
  }), Z.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = cc11001100_hook("t", Z.find.attr(e, "value"), "var-init");
          return null != t ? t : Z.trim(Z.text(e));
        }
      },
      select: {
        get: function (e) {
          for (var t, n, r = cc11001100_hook("r", e.options, "var-init"), i = cc11001100_hook("i", e.selectedIndex, "var-init"), o = cc11001100_hook("o", "select-one" === e.type || 0 > i, "var-init"), s = cc11001100_hook("s", o ? null : [], "var-init"), a = cc11001100_hook("a", o ? i + 1 : r.length, "var-init"), u = cc11001100_hook("u", 0 > i ? a : o ? i : 0, "var-init"); a > u; u++) if (n = cc11001100_hook("n", r[u], "assign"), (n.selected || u === i) && (Q.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
            if (t = cc11001100_hook("t", Z(n).val(), "assign"), o) return t;
            s.push(t);
          }
          return s;
        },
        set: function (e, t) {
          for (var n, r, i = cc11001100_hook("i", e.options, "var-init"), o = cc11001100_hook("o", Z.makeArray(t), "var-init"), s = cc11001100_hook("s", i.length, "var-init"); s--;) r = cc11001100_hook("r", i[s], "assign"), (r.selected = cc11001100_hook("r.selected", Z.inArray(r.value, o) >= 0, "assign")) && (n = cc11001100_hook("n", !0, "assign"));
          return n || (e.selectedIndex = cc11001100_hook("e.selectedIndex", -1, "assign")), o;
        }
      }
    }
  }), Z.each(["radio", "checkbox"], function () {
    Z.valHooks[this] = cc11001100_hook("Z.valHooks[this]", {
      set: function (e, t) {
        return Z.isArray(t) ? e.checked = cc11001100_hook("e.checked", Z.inArray(Z(e).val(), t) >= 0, "assign") : void 0;
      }
    }, "assign"), Q.checkOn || (Z.valHooks[this].get = cc11001100_hook("Z.valHooks[this].get", function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    }, "assign"));
  }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    Z.fn[t] = cc11001100_hook("Z.fn[t]", function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    }, "assign");
  }), Z.fn.extend({
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
  var lt = cc11001100_hook("lt", Z.now(), "var-init"),
    ct = cc11001100_hook("ct", /\?/, "var-init");
  Z.parseJSON = cc11001100_hook("Z.parseJSON", function (e) {
    return JSON.parse(e + "");
  }, "assign"), Z.parseXML = cc11001100_hook("Z.parseXML", function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      n = cc11001100_hook("n", new DOMParser(), "assign"), t = cc11001100_hook("t", n.parseFromString(e, "text/xml"), "assign");
    } catch (r) {
      t = cc11001100_hook("t", void 0, "assign");
    }
    return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t;
  }, "assign");
  var ft = cc11001100_hook("ft", /#.*$/, "var-init"),
    pt = cc11001100_hook("pt", /([?&])_=[^&]*/, "var-init"),
    dt = cc11001100_hook("dt", /^(.*?):[ \t]*([^\r\n]*)$/gm, "var-init"),
    ht = cc11001100_hook("ht", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
    gt = cc11001100_hook("gt", /^(?:GET|HEAD)$/, "var-init"),
    mt = cc11001100_hook("mt", /^\/\//, "var-init"),
    vt = cc11001100_hook("vt", /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, "var-init"),
    yt = cc11001100_hook("yt", {}, "var-init"),
    xt = cc11001100_hook("xt", {}, "var-init"),
    bt = cc11001100_hook("bt", "*/".concat("*"), "var-init"),
    wt = cc11001100_hook("wt", e.location.href, "var-init"),
    Tt = cc11001100_hook("Tt", vt.exec(wt.toLowerCase()) || [], "var-init");
  Z.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", wt, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", ht.test(Tt[1]), "object-key-init"),
      global: cc11001100_hook("global", !0, "object-key-init"),
      processData: cc11001100_hook("processData", !0, "object-key-init"),
      async: cc11001100_hook("async", !0, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", bt, "object-key-init"),
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
        "text json": cc11001100_hook("text json", Z.parseJSON, "object-key-init"),
        "text xml": cc11001100_hook("text xml", Z.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", !0, "object-key-init"),
        context: cc11001100_hook("context", !0, "object-key-init")
      }
    },
    ajaxSetup: function (e, t) {
      return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", F(yt), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", F(xt), "object-key-init"),
    ajax: function (e, t) {
      function n(e, t, n, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        var u,
          c,
          v,
          y,
          b,
          T = cc11001100_hook("T", t, "var-init");
        2 !== x && (x = cc11001100_hook("x", 2, "assign"), a && clearTimeout(a), r = cc11001100_hook("r", void 0, "assign"), o = cc11001100_hook("o", s || "", "assign"), w.readyState = cc11001100_hook("w.readyState", e > 0 ? 4 : 0, "assign"), u = cc11001100_hook("u", e >= 200 && 300 > e || 304 === e, "assign"), n && (y = cc11001100_hook("y", M(f, w, n), "assign")), y = cc11001100_hook("y", W(f, y, w, u), "assign"), u ? (f.ifModified && (b = cc11001100_hook("b", w.getResponseHeader("Last-Modified"), "assign"), b && (Z.lastModified[i] = cc11001100_hook("Z.lastModified[i]", b, "assign")), b = cc11001100_hook("b", w.getResponseHeader("etag"), "assign"), b && (Z.etag[i] = cc11001100_hook("Z.etag[i]", b, "assign"))), 204 === e || "HEAD" === f.type ? T = cc11001100_hook("T", "nocontent", "assign") : 304 === e ? T = cc11001100_hook("T", "notmodified", "assign") : (T = cc11001100_hook("T", y.state, "assign"), c = cc11001100_hook("c", y.data, "assign"), v = cc11001100_hook("v", y.error, "assign"), u = cc11001100_hook("u", !v, "assign"))) : (v = cc11001100_hook("v", T, "assign"), (e || !T) && (T = cc11001100_hook("T", "error", "assign"), 0 > e && (e = cc11001100_hook("e", 0, "assign")))), w.status = cc11001100_hook("w.status", e, "assign"), w.statusText = cc11001100_hook("w.statusText", (t || T) + "", "assign"), u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = cc11001100_hook("m", void 0, "assign"), l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")));
      }
      "object" == typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), t = cc11001100_hook("t", t || {}, "assign");
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c,
        f = cc11001100_hook("f", Z.ajaxSetup({}, t), "var-init"),
        p = cc11001100_hook("p", f.context || f, "var-init"),
        d = cc11001100_hook("d", f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, "var-init"),
        h = cc11001100_hook("h", Z.Deferred(), "var-init"),
        g = cc11001100_hook("g", Z.Callbacks("once memory"), "var-init"),
        m = cc11001100_hook("m", f.statusCode || {}, "var-init"),
        v = cc11001100_hook("v", {}, "var-init"),
        y = cc11001100_hook("y", {}, "var-init"),
        x = cc11001100_hook("x", 0, "var-init"),
        b = cc11001100_hook("b", "canceled", "var-init"),
        w = cc11001100_hook("w", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (e) {
            var t;
            if (2 === x) {
              if (!s) for (s = cc11001100_hook("s", {}, "assign"); t = cc11001100_hook("t", dt.exec(o), "assign");) s[t[1].toLowerCase()] = cc11001100_hook("s[t[1].toLowerCase()]", t[2], "assign");
              t = cc11001100_hook("t", s[e.toLowerCase()], "assign");
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === x ? o : null;
          },
          setRequestHeader: function (e, t) {
            var n = cc11001100_hook("n", e.toLowerCase(), "var-init");
            return x || (e = cc11001100_hook("e", y[n] = cc11001100_hook("y[n]", y[n] || e, "assign"), "assign"), v[e] = cc11001100_hook("v[e]", t, "assign")), this;
          },
          overrideMimeType: function (e) {
            return x || (f.mimeType = cc11001100_hook("f.mimeType", e, "assign")), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (2 > x) for (t in e) m[t] = cc11001100_hook("m[t]", [m[t], e[t]], "assign");else w.always(e[w.status]);
            return this;
          },
          abort: function (e) {
            var t = cc11001100_hook("t", e || b, "var-init");
            return r && r.abort(t), n(0, t), this;
          }
        }, "var-init");
      if (h.promise(w).complete = cc11001100_hook("h.promise(w).complete", g.add, "assign"), w.success = cc11001100_hook("w.success", w.done, "assign"), w.error = cc11001100_hook("w.error", w.fail, "assign"), f.url = cc11001100_hook("f.url", ((e || f.url || wt) + "").replace(ft, "").replace(mt, Tt[1] + "//"), "assign"), f.type = cc11001100_hook("f.type", t.method || t.type || f.method || f.type, "assign"), f.dataTypes = cc11001100_hook("f.dataTypes", Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], "assign"), null == f.crossDomain && (u = cc11001100_hook("u", vt.exec(f.url.toLowerCase()), "assign"), f.crossDomain = cc11001100_hook("f.crossDomain", !(!u || u[1] === Tt[1] && u[2] === Tt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443"))), "assign")), f.data && f.processData && "string" != typeof f.data && (f.data = cc11001100_hook("f.data", Z.param(f.data, f.traditional), "assign")), P(yt, f, t, w), 2 === x) return w;
      l = cc11001100_hook("l", Z.event && f.global, "assign"), l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = cc11001100_hook("f.type", f.type.toUpperCase(), "assign"), f.hasContent = cc11001100_hook("f.hasContent", !gt.test(f.type), "assign"), i = cc11001100_hook("i", f.url, "assign"), f.hasContent || (f.data && (i = cc11001100_hook("i", f.url += cc11001100_hook("f.url", (ct.test(i) ? "&" : "?") + f.data, "assign"), "assign"), delete f.data), f.cache === !1 && (f.url = cc11001100_hook("f.url", pt.test(i) ? i.replace(pt, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++, "assign"))), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : f.accepts["*"]);
      for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
      if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
      b = cc11001100_hook("b", "abort", "assign");
      for (c in {
        success: cc11001100_hook("success", 1, "object-key-init"),
        error: cc11001100_hook("error", 1, "object-key-init"),
        complete: cc11001100_hook("complete", 1, "object-key-init")
      }) w[c](f[c]);
      if (r = cc11001100_hook("r", P(xt, f, t, w), "assign")) {
        w.readyState = cc11001100_hook("w.readyState", 1, "assign"), l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = cc11001100_hook("a", setTimeout(function () {
          w.abort("timeout");
        }, f.timeout), "assign"));
        try {
          x = cc11001100_hook("x", 1, "assign"), r.send(v, n);
        } catch (T) {
          if (!(2 > x)) throw T;
          n(-1, T);
        }
      } else n(-1, "No Transport");
      return w;
    },
    getJSON: function (e, t, n) {
      return Z.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return Z.get(e, void 0, t, "script");
    }
  }), Z.each(["get", "post"], function (e, t) {
    Z[t] = cc11001100_hook("Z[t]", function (e, n, r, i) {
      return Z.isFunction(n) && (i = cc11001100_hook("i", i || r, "assign"), r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", void 0, "assign")), Z.ajax({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", t, "object-key-init"),
        dataType: cc11001100_hook("dataType", i, "object-key-init"),
        data: cc11001100_hook("data", n, "object-key-init"),
        success: cc11001100_hook("success", r, "object-key-init")
      });
    }, "assign");
  }), Z._evalUrl = cc11001100_hook("Z._evalUrl", function (e) {
    return Z.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "script", "object-key-init"),
      async: cc11001100_hook("async", !1, "object-key-init"),
      global: cc11001100_hook("global", !1, "object-key-init"),
      "throws": cc11001100_hook("throws", !0, "object-key-init")
    });
  }, "assign"), Z.fn.extend({
    wrapAll: function (e) {
      var t;
      return Z.isFunction(e) ? this.each(function (t) {
        Z(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = cc11001100_hook("t", Z(e, this[0].ownerDocument).eq(0).clone(!0), "assign"), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = cc11001100_hook("e", this, "var-init"); e.firstElementChild;) e = cc11001100_hook("e", e.firstElementChild, "assign");
        return e;
      }).append(this)), this);
    },
    wrapInner: function (e) {
      return Z.isFunction(e) ? this.each(function (t) {
        Z(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = cc11001100_hook("t", Z(this), "var-init"),
          n = cc11001100_hook("n", t.contents(), "var-init");
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = cc11001100_hook("t", Z.isFunction(e), "var-init");
      return this.each(function (n) {
        Z(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes);
      }).end();
    }
  }), Z.expr.filters.hidden = cc11001100_hook("Z.expr.filters.hidden", function (e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0;
  }, "assign"), Z.expr.filters.visible = cc11001100_hook("Z.expr.filters.visible", function (e) {
    return !Z.expr.filters.hidden(e);
  }, "assign");
  var Ct = cc11001100_hook("Ct", /%20/g, "var-init"),
    Nt = cc11001100_hook("Nt", /\[\]$/, "var-init"),
    kt = cc11001100_hook("kt", /\r?\n/g, "var-init"),
    Et = cc11001100_hook("Et", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    St = cc11001100_hook("St", /^(?:input|select|textarea|keygen)/i, "var-init");
  Z.param = cc11001100_hook("Z.param", function (e, t) {
    var n,
      r = cc11001100_hook("r", [], "var-init"),
      i = function (e, t) {
        t = cc11001100_hook("t", Z.isFunction(t) ? t() : null == t ? "" : t, "assign"), r[r.length] = cc11001100_hook("r[r.length]", encodeURIComponent(e) + "=" + encodeURIComponent(t), "assign");
      };
    if (void 0 === t && (t = cc11001100_hook("t", Z.ajaxSettings && Z.ajaxSettings.traditional, "assign")), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) $(n, e[n], t, i);
    return r.join("&").replace(Ct, "+");
  }, "assign"), Z.fn.extend({
    serialize: function () {
      return Z.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", Z.prop(this, "elements"), "var-init");
        return e ? Z.makeArray(e) : this;
      }).filter(function () {
        var e = cc11001100_hook("e", this.type, "var-init");
        return this.name && !Z(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !Ne.test(e));
      }).map(function (e, t) {
        var n = cc11001100_hook("n", Z(this).val(), "var-init");
        return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
          return {
            name: cc11001100_hook("name", t.name, "object-key-init"),
            value: cc11001100_hook("value", e.replace(kt, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", t.name, "object-key-init"),
          value: cc11001100_hook("value", n.replace(kt, "\r\n"), "object-key-init")
        };
      }).get();
    }
  }), Z.ajaxSettings.xhr = cc11001100_hook("Z.ajaxSettings.xhr", function () {
    try {
      return new XMLHttpRequest();
    } catch (e) {}
  }, "assign");
  var Dt = cc11001100_hook("Dt", 0, "var-init"),
    jt = cc11001100_hook("jt", {}, "var-init"),
    At = cc11001100_hook("At", {
      0: cc11001100_hook(0, 200, "object-key-init"),
      1223: cc11001100_hook(1223, 204, "object-key-init")
    }, "var-init"),
    Lt = cc11001100_hook("Lt", Z.ajaxSettings.xhr(), "var-init");
  e.attachEvent && e.attachEvent("onunload", function () {
    for (var e in jt) jt[e]();
  }), Q.cors = cc11001100_hook("Q.cors", !!Lt && "withCredentials" in Lt, "assign"), Q.ajax = cc11001100_hook("Q.ajax", Lt = cc11001100_hook("Lt", !!Lt, "assign"), "assign"), Z.ajaxTransport(function (e) {
    var t;
    return Q.cors || Lt && !e.crossDomain ? {
      send: function (n, r) {
        var i,
          o = cc11001100_hook("o", e.xhr(), "var-init"),
          s = cc11001100_hook("s", ++Dt, "var-init");
        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = cc11001100_hook("o[i]", e.xhrFields[i], "assign");
        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = cc11001100_hook("n[\"X-Requested-With\"]", "XMLHttpRequest", "assign"));
        for (i in n) o.setRequestHeader(i, n[i]);
        t = cc11001100_hook("t", function (e) {
          return function () {
            t && (delete jt[s], t = cc11001100_hook("t", o.onload = cc11001100_hook("o.onload", o.onerror = cc11001100_hook("o.onerror", null, "assign"), "assign"), "assign"), "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(At[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
              text: cc11001100_hook("text", o.responseText, "object-key-init")
            } : void 0, o.getAllResponseHeaders()));
          };
        }, "assign"), o.onload = cc11001100_hook("o.onload", t(), "assign"), o.onerror = cc11001100_hook("o.onerror", t("error"), "assign"), t = cc11001100_hook("t", jt[s] = cc11001100_hook("jt[s]", t("abort"), "assign"), "assign");
        try {
          o.send(e.hasContent && e.data || null);
        } catch (a) {
          if (t) throw a;
        }
      },
      abort: function () {
        t && t();
      }
    } : void 0;
  }), Z.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /(?:java|ecma)script/, "object-key-init")
    },
    converters: {
      "text script": function (e) {
        return Z.globalEval(e), e;
      }
    }
  }), Z.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = cc11001100_hook("e.cache", !1, "assign")), e.crossDomain && (e.type = cc11001100_hook("e.type", "GET", "assign"));
  }), Z.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (r, i) {
          t = cc11001100_hook("t", Z("<script>").prop({
            async: cc11001100_hook("async", !0, "object-key-init"),
            charset: cc11001100_hook("charset", e.scriptCharset, "object-key-init"),
            src: cc11001100_hook("src", e.url, "object-key-init")
          }).on("load error", n = cc11001100_hook("n", function (e) {
            t.remove(), n = cc11001100_hook("n", null, "assign"), e && i("error" === e.type ? 404 : 200, e.type);
          }, "assign")), "assign"), J.head.appendChild(t[0]);
        },
        abort: function () {
          n && n();
        }
      };
    }
  });
  var qt = cc11001100_hook("qt", [], "var-init"),
    Ht = cc11001100_hook("Ht", /(=)\?(?=&|$)|\?\?/, "var-init");
  Z.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var e = cc11001100_hook("e", qt.pop() || Z.expando + "_" + lt++, "var-init");
      return this[e] = cc11001100_hook("this[e]", !0, "assign"), e;
    }
  }), Z.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
      o,
      s,
      a = cc11001100_hook("a", t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data"), "var-init");
    return a || "jsonp" === t.dataTypes[0] ? (i = cc11001100_hook("i", t.jsonpCallback = cc11001100_hook("t.jsonpCallback", Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, "assign"), "assign"), a ? t[a] = cc11001100_hook("t[a]", t[a].replace(Ht, "$1" + i), "assign") : t.jsonp !== !1 && (t.url += cc11001100_hook("t.url", (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i, "assign")), t.converters["script json"] = cc11001100_hook("t.converters[\"script json\"]", function () {
      return s || Z.error(i + " was not called"), s[0];
    }, "assign"), t.dataTypes[0] = cc11001100_hook("t.dataTypes[0]", "json", "assign"), o = cc11001100_hook("o", e[i], "assign"), e[i] = cc11001100_hook("e[i]", function () {
      s = cc11001100_hook("s", arguments, "assign");
    }, "assign"), r.always(function () {
      e[i] = cc11001100_hook("e[i]", o, "assign"), t[i] && (t.jsonpCallback = cc11001100_hook("t.jsonpCallback", n.jsonpCallback, "assign"), qt.push(i)), s && Z.isFunction(o) && o(s[0]), s = cc11001100_hook("s", o = cc11001100_hook("o", void 0, "assign"), "assign");
    }), "script") : void 0;
  }), Z.parseHTML = cc11001100_hook("Z.parseHTML", function (e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", !1, "assign")), t = cc11001100_hook("t", t || J, "assign");
    var r = cc11001100_hook("r", se.exec(e), "var-init"),
      i = cc11001100_hook("i", !n && [], "var-init");
    return r ? [t.createElement(r[1])] : (r = cc11001100_hook("r", Z.buildFragment([e], t, i), "assign"), i && i.length && Z(i).remove(), Z.merge([], r.childNodes));
  }, "assign");
  var Ot = cc11001100_hook("Ot", Z.fn.load, "var-init");
  Z.fn.load = cc11001100_hook("Z.fn.load", function (e, t, n) {
    if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
    var r,
      i,
      o,
      s = cc11001100_hook("s", this, "var-init"),
      a = cc11001100_hook("a", e.indexOf(" "), "var-init");
    return a >= 0 && (r = cc11001100_hook("r", Z.trim(e.slice(a)), "assign"), e = cc11001100_hook("e", e.slice(0, a), "assign")), Z.isFunction(t) ? (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign")) : t && "object" == typeof t && (i = cc11001100_hook("i", "POST", "assign")), s.length > 0 && Z.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", i, "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", t, "object-key-init")
    }).done(function (e) {
      o = cc11001100_hook("o", arguments, "assign"), s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e);
    }).complete(n && function (e, t) {
      s.each(n, o || [e.responseText, t, e]);
    }), this;
  }, "assign"), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    Z.fn[t] = cc11001100_hook("Z.fn[t]", function (e) {
      return this.on(t, e);
    }, "assign");
  }), Z.expr.filters.animated = cc11001100_hook("Z.expr.filters.animated", function (e) {
    return Z.grep(Z.timers, function (t) {
      return e === t.elem;
    }).length;
  }, "assign");
  var Ft = cc11001100_hook("Ft", e.document.documentElement, "var-init");
  Z.offset = cc11001100_hook("Z.offset", {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c = cc11001100_hook("c", Z.css(e, "position"), "var-init"),
        f = cc11001100_hook("f", Z(e), "var-init"),
        p = cc11001100_hook("p", {}, "var-init");
      "static" === c && (e.style.position = cc11001100_hook("e.style.position", "relative", "assign")), a = cc11001100_hook("a", f.offset(), "assign"), o = cc11001100_hook("o", Z.css(e, "top"), "assign"), u = cc11001100_hook("u", Z.css(e, "left"), "assign"), l = cc11001100_hook("l", ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, "assign"), l ? (r = cc11001100_hook("r", f.position(), "assign"), s = cc11001100_hook("s", r.top, "assign"), i = cc11001100_hook("i", r.left, "assign")) : (s = cc11001100_hook("s", parseFloat(o) || 0, "assign"), i = cc11001100_hook("i", parseFloat(u) || 0, "assign")), Z.isFunction(t) && (t = cc11001100_hook("t", t.call(e, n, a), "assign")), null != t.top && (p.top = cc11001100_hook("p.top", t.top - a.top + s, "assign")), null != t.left && (p.left = cc11001100_hook("p.left", t.left - a.left + i, "assign")), "using" in t ? t.using.call(e, p) : f.css(p);
    }
  }, "assign"), Z.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        Z.offset.setOffset(this, e, t);
      });
      var t,
        n,
        r = cc11001100_hook("r", this[0], "var-init"),
        i = cc11001100_hook("i", {
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", r && r.ownerDocument, "var-init");
      if (o) return t = cc11001100_hook("t", o.documentElement, "assign"), Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = cc11001100_hook("i", r.getBoundingClientRect(), "assign")), n = cc11001100_hook("n", I(o), "assign"), {
        top: cc11001100_hook("top", i.top + n.pageYOffset - t.clientTop, "object-key-init"),
        left: cc11001100_hook("left", i.left + n.pageXOffset - t.clientLeft, "object-key-init")
      }) : i;
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
        return "fixed" === Z.css(n, "position") ? t = cc11001100_hook("t", n.getBoundingClientRect(), "assign") : (e = cc11001100_hook("e", this.offsetParent(), "assign"), t = cc11001100_hook("t", this.offset(), "assign"), Z.nodeName(e[0], "html") || (r = cc11001100_hook("r", e.offset(), "assign")), r.top += cc11001100_hook("r.top", Z.css(e[0], "borderTopWidth", !0), "assign"), r.left += cc11001100_hook("r.left", Z.css(e[0], "borderLeftWidth", !0), "assign")), {
          top: cc11001100_hook("top", t.top - r.top - Z.css(n, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", t.left - r.left - Z.css(n, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = cc11001100_hook("e", this.offsetParent || Ft, "var-init"); e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = cc11001100_hook("e", e.offsetParent, "assign");
        return e || Ft;
      });
    }
  }), Z.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (t, n) {
    var r = cc11001100_hook("r", "pageYOffset" === n, "var-init");
    Z.fn[t] = cc11001100_hook("Z.fn[t]", function (i) {
      return me(this, function (t, i, o) {
        var s = cc11001100_hook("s", I(t), "var-init");
        return void 0 === o ? s ? s[n] : t[i] : void (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = cc11001100_hook("t[i]", o, "assign"));
      }, t, i, arguments.length, null);
    }, "assign");
  }), Z.each(["top", "left"], function (e, t) {
    Z.cssHooks[t] = cc11001100_hook("Z.cssHooks[t]", T(Q.pixelPosition, function (e, n) {
      return n ? (n = cc11001100_hook("n", w(e, t), "assign"), Be.test(n) ? Z(e).position()[t] + "px" : n) : void 0;
    }), "assign");
  }), Z.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (e, t) {
    Z.each({
      padding: cc11001100_hook("padding", "inner" + e, "object-key-init"),
      content: cc11001100_hook("content", t, "object-key-init"),
      "": cc11001100_hook("", "outer" + e, "object-key-init")
    }, function (n, r) {
      Z.fn[r] = cc11001100_hook("Z.fn[r]", function (r, i) {
        var o = cc11001100_hook("o", arguments.length && (n || "boolean" != typeof r), "var-init"),
          s = cc11001100_hook("s", n || (r === !0 || i === !0 ? "margin" : "border"), "var-init");
        return me(this, function (t, n, r) {
          var i;
          return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = cc11001100_hook("i", t.documentElement, "assign"), Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s);
        }, t, o ? r : void 0, o, null);
      }, "assign");
    });
  }), Z.fn.size = cc11001100_hook("Z.fn.size", function () {
    return this.length;
  }, "assign"), Z.fn.andSelf = cc11001100_hook("Z.fn.andSelf", Z.fn.addBack, "assign"), "function" == typeof define && define.amd && define("jquery", [], function () {
    return Z;
  });
  var Pt = cc11001100_hook("Pt", e.jQuery, "var-init"),
    Rt = cc11001100_hook("Rt", e.$, "var-init");
  return Z.noConflict = cc11001100_hook("Z.noConflict", function (t) {
    return e.$ === Z && (e.$ = cc11001100_hook("e.$", Rt, "assign")), t && e.jQuery === Z && (e.jQuery = cc11001100_hook("e.jQuery", Pt, "assign")), Z;
  }, "assign"), typeof t === ke && (e.jQuery = cc11001100_hook("e.jQuery", e.$ = cc11001100_hook("e.$", Z, "assign"), "assign")), Z;
});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
  "use strict";

  var e = cc11001100_hook("e", t.fn.jquery.split(" ")[0].split("."), "var-init");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), +function (t) {
  "use strict";

  function e() {
    var t = cc11001100_hook("t", document.createElement("bootstrap"), "var-init"),
      e = cc11001100_hook("e", {
        WebkitTransition: cc11001100_hook("WebkitTransition", "webkitTransitionEnd", "object-key-init"),
        MozTransition: cc11001100_hook("MozTransition", "transitionend", "object-key-init"),
        OTransition: cc11001100_hook("OTransition", "oTransitionEnd otransitionend", "object-key-init"),
        transition: cc11001100_hook("transition", "transitionend", "object-key-init")
      }, "var-init");
    for (var i in e) if (void 0 !== t.style[i]) return {
      end: cc11001100_hook("end", e[i], "object-key-init")
    };
    return !1;
  }
  t.fn.emulateTransitionEnd = cc11001100_hook("t.fn.emulateTransitionEnd", function (e) {
    var i = cc11001100_hook("i", !1, "var-init"),
      o = cc11001100_hook("o", this, "var-init");
    t(this).one("bsTransitionEnd", function () {
      i = cc11001100_hook("i", !0, "assign");
    });
    var n = function () {
      i || t(o).trigger(t.support.transition.end);
    };
    return setTimeout(n, e), this;
  }, "assign"), t(function () {
    t.support.transition = cc11001100_hook("t.support.transition", e(), "assign"), t.support.transition && (t.event.special.bsTransitionEnd = cc11001100_hook("t.event.special.bsTransitionEnd", {
      bindType: cc11001100_hook("bindType", t.support.transition.end, "object-key-init"),
      delegateType: cc11001100_hook("delegateType", t.support.transition.end, "object-key-init"),
      handle: function (e) {
        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
      }
    }, "assign"));
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    return this.each(function () {
      var i = cc11001100_hook("i", t(this), "var-init"),
        n = cc11001100_hook("n", i.data("bs.alert"), "var-init");
      n || i.data("bs.alert", n = cc11001100_hook("n", new o(this), "assign")), "string" == typeof e && n[e].call(i);
    });
  }
  var i = cc11001100_hook("i", '[data-dismiss="alert"]', "var-init"),
    o = function (e) {
      t(e).on("click", i, this.close);
    };
  o.VERSION = cc11001100_hook("o.VERSION", "3.3.4", "assign"), o.TRANSITION_DURATION = cc11001100_hook("o.TRANSITION_DURATION", 150, "assign"), o.prototype.close = cc11001100_hook("o.prototype.close", function (e) {
    function i() {
      a.detach().trigger("closed.bs.alert").remove();
    }
    var n = cc11001100_hook("n", t(this), "var-init"),
      s = cc11001100_hook("s", n.attr("data-target"), "var-init");
    s || (s = cc11001100_hook("s", n.attr("href"), "assign"), s = cc11001100_hook("s", s && s.replace(/.*(?=#[^\s]*$)/, ""), "assign"));
    var a = cc11001100_hook("a", t(s), "var-init");
    e && e.preventDefault(), a.length || (a = cc11001100_hook("a", n.closest(".alert"), "assign")), a.trigger(e = cc11001100_hook("e", t.Event("close.bs.alert"), "assign")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i());
  }, "assign");
  var n = cc11001100_hook("n", t.fn.alert, "var-init");
  t.fn.alert = cc11001100_hook("t.fn.alert", e, "assign"), t.fn.alert.Constructor = cc11001100_hook("t.fn.alert.Constructor", o, "assign"), t.fn.alert.noConflict = cc11001100_hook("t.fn.alert.noConflict", function () {
    return t.fn.alert = cc11001100_hook("t.fn.alert", n, "assign"), this;
  }, "assign"), t(document).on("click.bs.alert.data-api", i, o.prototype.close);
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    return this.each(function () {
      var o = cc11001100_hook("o", t(this), "var-init"),
        n = cc11001100_hook("n", o.data("bs.button"), "var-init"),
        s = cc11001100_hook("s", "object" == typeof e && e, "var-init");
      n || o.data("bs.button", n = cc11001100_hook("n", new i(this, s), "assign")), "toggle" == e ? n.toggle() : e && n.setState(e);
    });
  }
  var i = function (e, o) {
    this.$element = cc11001100_hook("this.$element", t(e), "assign"), this.options = cc11001100_hook("this.options", t.extend({}, i.DEFAULTS, o), "assign"), this.isLoading = cc11001100_hook("this.isLoading", !1, "assign");
  };
  i.VERSION = cc11001100_hook("i.VERSION", "3.3.4", "assign"), i.DEFAULTS = cc11001100_hook("i.DEFAULTS", {
    loadingText: cc11001100_hook("loadingText", "loading...", "object-key-init")
  }, "assign"), i.prototype.setState = cc11001100_hook("i.prototype.setState", function (e) {
    var i = cc11001100_hook("i", "disabled", "var-init"),
      o = cc11001100_hook("o", this.$element, "var-init"),
      n = cc11001100_hook("n", o.is("input") ? "val" : "html", "var-init"),
      s = cc11001100_hook("s", o.data(), "var-init");
    e += cc11001100_hook("e", "Text", "assign"), null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
      o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = cc11001100_hook("this.isLoading", !0, "assign"), o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = cc11001100_hook("this.isLoading", !1, "assign"), o.removeClass(i).removeAttr(i));
    }, this), 0);
  }, "assign"), i.prototype.toggle = cc11001100_hook("i.prototype.toggle", function () {
    var t = cc11001100_hook("t", !0, "var-init"),
      e = cc11001100_hook("e", this.$element.closest('[data-toggle="buttons"]'), "var-init");
    if (e.length) {
      var i = cc11001100_hook("i", this.$element.find("input"), "var-init");
      "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = cc11001100_hook("t", !1, "assign") : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
    t && this.$element.toggleClass("active");
  }, "assign");
  var o = cc11001100_hook("o", t.fn.button, "var-init");
  t.fn.button = cc11001100_hook("t.fn.button", e, "assign"), t.fn.button.Constructor = cc11001100_hook("t.fn.button.Constructor", i, "assign"), t.fn.button.noConflict = cc11001100_hook("t.fn.button.noConflict", function () {
    return t.fn.button = cc11001100_hook("t.fn.button", o, "assign"), this;
  }, "assign"), t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
    var o = cc11001100_hook("o", t(i.target), "var-init");
    o.hasClass("btn") || (o = cc11001100_hook("o", o.closest(".btn"), "assign")), e.call(o, "toggle"), i.preventDefault();
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    return this.each(function () {
      var o = cc11001100_hook("o", t(this), "var-init"),
        n = cc11001100_hook("n", o.data("bs.carousel"), "var-init"),
        s = cc11001100_hook("s", t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e), "var-init"),
        a = cc11001100_hook("a", "string" == typeof e ? e : s.slide, "var-init");
      n || o.data("bs.carousel", n = cc11001100_hook("n", new i(this, s), "assign")), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle();
    });
  }
  var i = function (e, i) {
    this.$element = cc11001100_hook("this.$element", t(e), "assign"), this.$indicators = cc11001100_hook("this.$indicators", this.$element.find(".carousel-indicators"), "assign"), this.options = cc11001100_hook("this.options", i, "assign"), this.paused = cc11001100_hook("this.paused", null, "assign"), this.sliding = cc11001100_hook("this.sliding", null, "assign"), this.interval = cc11001100_hook("this.interval", null, "assign"), this.$active = cc11001100_hook("this.$active", null, "assign"), this.$items = cc11001100_hook("this.$items", null, "assign"), this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
  };
  i.VERSION = cc11001100_hook("i.VERSION", "3.3.4", "assign"), i.TRANSITION_DURATION = cc11001100_hook("i.TRANSITION_DURATION", 600, "assign"), i.DEFAULTS = cc11001100_hook("i.DEFAULTS", {
    interval: cc11001100_hook("interval", 5e3, "object-key-init"),
    pause: cc11001100_hook("pause", "hover", "object-key-init"),
    wrap: cc11001100_hook("wrap", !0, "object-key-init"),
    keyboard: cc11001100_hook("keyboard", !0, "object-key-init")
  }, "assign"), i.prototype.keydown = cc11001100_hook("i.prototype.keydown", function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return;
      }
      t.preventDefault();
    }
  }, "assign"), i.prototype.cycle = cc11001100_hook("i.prototype.cycle", function (e) {
    return e || (this.paused = cc11001100_hook("this.paused", !1, "assign")), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = cc11001100_hook("this.interval", setInterval(t.proxy(this.next, this), this.options.interval), "assign")), this;
  }, "assign"), i.prototype.getItemIndex = cc11001100_hook("i.prototype.getItemIndex", function (t) {
    return this.$items = cc11001100_hook("this.$items", t.parent().children(".item"), "assign"), this.$items.index(t || this.$active);
  }, "assign"), i.prototype.getItemForDirection = cc11001100_hook("i.prototype.getItemForDirection", function (t, e) {
    var i = cc11001100_hook("i", this.getItemIndex(e), "var-init"),
      o = cc11001100_hook("o", "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1, "var-init");
    if (o && !this.options.wrap) return e;
    var n = cc11001100_hook("n", "prev" == t ? -1 : 1, "var-init"),
      s = cc11001100_hook("s", (i + n) % this.$items.length, "var-init");
    return this.$items.eq(s);
  }, "assign"), i.prototype.to = cc11001100_hook("i.prototype.to", function (t) {
    var e = cc11001100_hook("e", this, "var-init"),
      i = cc11001100_hook("i", this.getItemIndex(this.$active = cc11001100_hook("this.$active", this.$element.find(".item.active"), "assign")), "var-init");
    return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      e.to(t);
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
  }, "assign"), i.prototype.pause = cc11001100_hook("i.prototype.pause", function (e) {
    return e || (this.paused = cc11001100_hook("this.paused", !0, "assign")), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = cc11001100_hook("this.interval", clearInterval(this.interval), "assign"), this;
  }, "assign"), i.prototype.next = cc11001100_hook("i.prototype.next", function () {
    return this.sliding ? void 0 : this.slide("next");
  }, "assign"), i.prototype.prev = cc11001100_hook("i.prototype.prev", function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, "assign"), i.prototype.slide = cc11001100_hook("i.prototype.slide", function (e, o) {
    var n = cc11001100_hook("n", this.$element.find(".item.active"), "var-init"),
      s = cc11001100_hook("s", o || this.getItemForDirection(e, n), "var-init"),
      a = cc11001100_hook("a", this.interval, "var-init"),
      r = cc11001100_hook("r", "next" == e ? "left" : "right", "var-init"),
      l = cc11001100_hook("l", this, "var-init");
    if (s.hasClass("active")) return this.sliding = cc11001100_hook("this.sliding", !1, "assign");
    var h = cc11001100_hook("h", s[0], "var-init"),
      d = cc11001100_hook("d", t.Event("slide.bs.carousel", {
        relatedTarget: cc11001100_hook("relatedTarget", h, "object-key-init"),
        direction: cc11001100_hook("direction", r, "object-key-init")
      }), "var-init");
    if (this.$element.trigger(d), !d.isDefaultPrevented()) {
      if (this.sliding = cc11001100_hook("this.sliding", !0, "assign"), a && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var p = cc11001100_hook("p", t(this.$indicators.children()[this.getItemIndex(s)]), "var-init");
        p && p.addClass("active");
      }
      var c = cc11001100_hook("c", t.Event("slid.bs.carousel", {
        relatedTarget: cc11001100_hook("relatedTarget", h, "object-key-init"),
        direction: cc11001100_hook("direction", r, "object-key-init")
      }), "var-init");
      return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
        s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = cc11001100_hook("l.sliding", !1, "assign"), setTimeout(function () {
          l.$element.trigger(c);
        }, 0);
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = cc11001100_hook("this.sliding", !1, "assign"), this.$element.trigger(c)), a && this.cycle(), this;
    }
  }, "assign");
  var o = cc11001100_hook("o", t.fn.carousel, "var-init");
  t.fn.carousel = cc11001100_hook("t.fn.carousel", e, "assign"), t.fn.carousel.Constructor = cc11001100_hook("t.fn.carousel.Constructor", i, "assign"), t.fn.carousel.noConflict = cc11001100_hook("t.fn.carousel.noConflict", function () {
    return t.fn.carousel = cc11001100_hook("t.fn.carousel", o, "assign"), this;
  }, "assign");
  var n = function (i) {
    var o,
      n = cc11001100_hook("n", t(this), "var-init"),
      s = cc11001100_hook("s", t(n.attr("data-target") || (o = cc11001100_hook("o", n.attr("href"), "assign")) && o.replace(/.*(?=#[^\s]+$)/, "")), "var-init");
    if (s.hasClass("carousel")) {
      var a = cc11001100_hook("a", t.extend({}, s.data(), n.data()), "var-init"),
        r = cc11001100_hook("r", n.attr("data-slide-to"), "var-init");
      r && (a.interval = cc11001100_hook("a.interval", !1, "assign")), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault();
    }
  };
  t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
    t('[data-ride="carousel"]').each(function () {
      var i = cc11001100_hook("i", t(this), "var-init");
      e.call(i, i.data());
    });
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    var i,
      o = cc11001100_hook("o", e.attr("data-target") || (i = cc11001100_hook("i", e.attr("href"), "assign")) && i.replace(/.*(?=#[^\s]+$)/, ""), "var-init");
    return t(o);
  }
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    return this.each(function () {
      var i = cc11001100_hook("i", t(this), "var-init"),
        n = cc11001100_hook("n", i.data("bs.collapse"), "var-init"),
        s = cc11001100_hook("s", t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e), "var-init");
      !n && s.toggle && /show|hide/.test(e) && (s.toggle = cc11001100_hook("s.toggle", !1, "assign")), n || i.data("bs.collapse", n = cc11001100_hook("n", new o(this, s), "assign")), "string" == typeof e && n[e]();
    });
  }
  var o = function (e, i) {
    this.$element = cc11001100_hook("this.$element", t(e), "assign"), this.options = cc11001100_hook("this.options", t.extend({}, o.DEFAULTS, i), "assign"), this.$trigger = cc11001100_hook("this.$trigger", t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), "assign"), this.transitioning = cc11001100_hook("this.transitioning", null, "assign"), this.options.parent ? this.$parent = cc11001100_hook("this.$parent", this.getParent(), "assign") : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };
  o.VERSION = cc11001100_hook("o.VERSION", "3.3.4", "assign"), o.TRANSITION_DURATION = cc11001100_hook("o.TRANSITION_DURATION", 350, "assign"), o.DEFAULTS = cc11001100_hook("o.DEFAULTS", {
    toggle: cc11001100_hook("toggle", !0, "object-key-init")
  }, "assign"), o.prototype.dimension = cc11001100_hook("o.prototype.dimension", function () {
    var t = cc11001100_hook("t", this.$element.hasClass("width"), "var-init");
    return t ? "width" : "height";
  }, "assign"), o.prototype.show = cc11001100_hook("o.prototype.show", function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e,
        n = cc11001100_hook("n", this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), "var-init");
      if (!(n && n.length && (e = cc11001100_hook("e", n.data("bs.collapse"), "assign"), e && e.transitioning))) {
        var s = cc11001100_hook("s", t.Event("show.bs.collapse"), "var-init");
        if (this.$element.trigger(s), !s.isDefaultPrevented()) {
          n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
          var a = cc11001100_hook("a", this.dimension(), "var-init");
          this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = cc11001100_hook("this.transitioning", 1, "assign");
          var r = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = cc11001100_hook("this.transitioning", 0, "assign"), this.$element.trigger("shown.bs.collapse");
          };
          if (!t.support.transition) return r.call(this);
          var l = cc11001100_hook("l", t.camelCase(["scroll", a].join("-")), "var-init");
          this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
        }
      }
    }
  }, "assign"), o.prototype.hide = cc11001100_hook("o.prototype.hide", function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = cc11001100_hook("e", t.Event("hide.bs.collapse"), "var-init");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var i = cc11001100_hook("i", this.dimension(), "var-init");
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = cc11001100_hook("this.transitioning", 1, "assign");
        var n = function () {
          this.transitioning = cc11001100_hook("this.transitioning", 0, "assign"), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };
        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this);
      }
    }
  }, "assign"), o.prototype.toggle = cc11001100_hook("o.prototype.toggle", function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, "assign"), o.prototype.getParent = cc11001100_hook("o.prototype.getParent", function () {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
      var n = cc11001100_hook("n", t(o), "var-init");
      this.addAriaAndCollapsedClass(e(n), n);
    }, this)).end();
  }, "assign"), o.prototype.addAriaAndCollapsedClass = cc11001100_hook("o.prototype.addAriaAndCollapsedClass", function (t, e) {
    var i = cc11001100_hook("i", t.hasClass("in"), "var-init");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
  }, "assign");
  var n = cc11001100_hook("n", t.fn.collapse, "var-init");
  t.fn.collapse = cc11001100_hook("t.fn.collapse", i, "assign"), t.fn.collapse.Constructor = cc11001100_hook("t.fn.collapse.Constructor", o, "assign"), t.fn.collapse.noConflict = cc11001100_hook("t.fn.collapse.noConflict", function () {
    return t.fn.collapse = cc11001100_hook("t.fn.collapse", n, "assign"), this;
  }, "assign"), t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
    var n = cc11001100_hook("n", t(this), "var-init");
    n.attr("data-target") || o.preventDefault();
    var s = cc11001100_hook("s", e(n), "var-init"),
      a = cc11001100_hook("a", s.data("bs.collapse"), "var-init"),
      r = cc11001100_hook("r", a ? "toggle" : n.data(), "var-init");
    i.call(s, r);
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    e && 3 === e.which || (t(n).remove(), t(s).each(function () {
      var o = cc11001100_hook("o", t(this), "var-init"),
        n = cc11001100_hook("n", i(o), "var-init"),
        s = cc11001100_hook("s", {
          relatedTarget: cc11001100_hook("relatedTarget", this, "object-key-init")
        }, "var-init");
      n.hasClass("open") && (n.trigger(e = cc11001100_hook("e", t.Event("hide.bs.dropdown", s), "assign")), e.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", s)));
    }));
  }
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    var i = cc11001100_hook("i", e.attr("data-target"), "var-init");
    i || (i = cc11001100_hook("i", e.attr("href"), "assign"), i = cc11001100_hook("i", i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""), "assign"));
    var o = cc11001100_hook("o", i && t(i), "var-init");
    return o && o.length ? o : e.parent();
  }
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    return this.each(function () {
      var i = cc11001100_hook("i", t(this), "var-init"),
        o = cc11001100_hook("o", i.data("bs.dropdown"), "var-init");
      o || i.data("bs.dropdown", o = cc11001100_hook("o", new a(this), "assign")), "string" == typeof e && o[e].call(i);
    });
  }
  var n = cc11001100_hook("n", ".dropdown-backdrop", "var-init"),
    s = cc11001100_hook("s", '[data-toggle="dropdown"]', "var-init"),
    a = function (e) {
      t(e).on("click.bs.dropdown", this.toggle);
    };
  a.VERSION = cc11001100_hook("a.VERSION", "3.3.4", "assign"), a.prototype.toggle = cc11001100_hook("a.prototype.toggle", function (o) {
    var n = cc11001100_hook("n", t(this), "var-init");
    if (!n.is(".disabled, :disabled")) {
      var s = cc11001100_hook("s", i(n), "var-init"),
        a = cc11001100_hook("a", s.hasClass("open"), "var-init");
      if (e(), !a) {
        "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
        var r = cc11001100_hook("r", {
          relatedTarget: cc11001100_hook("relatedTarget", this, "object-key-init")
        }, "var-init");
        if (s.trigger(o = cc11001100_hook("o", t.Event("show.bs.dropdown", r), "assign")), o.isDefaultPrevented()) return;
        n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r);
      }
      return !1;
    }
  }, "assign"), a.prototype.keydown = cc11001100_hook("a.prototype.keydown", function (e) {
    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
      var o = cc11001100_hook("o", t(this), "var-init");
      if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
        var n = cc11001100_hook("n", i(o), "var-init"),
          a = cc11001100_hook("a", n.hasClass("open"), "var-init");
        if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && n.find(s).trigger("focus"), o.trigger("click");
        var r = cc11001100_hook("r", " li:not(.disabled):visible a", "var-init"),
          l = cc11001100_hook("l", n.find('[role="menu"]' + r + ', [role="listbox"]' + r), "var-init");
        if (l.length) {
          var h = cc11001100_hook("h", l.index(e.target), "var-init");
          38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = cc11001100_hook("h", 0, "assign")), l.eq(h).trigger("focus");
        }
      }
    }
  }, "assign");
  var r = cc11001100_hook("r", t.fn.dropdown, "var-init");
  t.fn.dropdown = cc11001100_hook("t.fn.dropdown", o, "assign"), t.fn.dropdown.Constructor = cc11001100_hook("t.fn.dropdown.Constructor", a, "assign"), t.fn.dropdown.noConflict = cc11001100_hook("t.fn.dropdown.noConflict", function () {
    return t.fn.dropdown = cc11001100_hook("t.fn.dropdown", r, "assign"), this;
  }, "assign"), t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation();
  }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown);
}(jQuery), +function (t) {
  "use strict";

  function e(e, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    return this.each(function () {
      var n = cc11001100_hook("n", t(this), "var-init"),
        s = cc11001100_hook("s", n.data("bs.modal"), "var-init"),
        a = cc11001100_hook("a", t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e), "var-init");
      s || n.data("bs.modal", s = cc11001100_hook("s", new i(this, a), "assign")), "string" == typeof e ? s[e](o) : a.show && s.show(o);
    });
  }
  var i = function (e, i) {
    this.options = cc11001100_hook("this.options", i, "assign"), this.$body = cc11001100_hook("this.$body", t(document.body), "assign"), this.$element = cc11001100_hook("this.$element", t(e), "assign"), this.$dialog = cc11001100_hook("this.$dialog", this.$element.find(".modal-dialog"), "assign"), this.$backdrop = cc11001100_hook("this.$backdrop", null, "assign"), this.isShown = cc11001100_hook("this.isShown", null, "assign"), this.originalBodyPad = cc11001100_hook("this.originalBodyPad", null, "assign"), this.scrollbarWidth = cc11001100_hook("this.scrollbarWidth", 0, "assign"), this.ignoreBackdropClick = cc11001100_hook("this.ignoreBackdropClick", !1, "assign"), this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };
  i.VERSION = cc11001100_hook("i.VERSION", "3.3.4", "assign"), i.TRANSITION_DURATION = cc11001100_hook("i.TRANSITION_DURATION", 300, "assign"), i.BACKDROP_TRANSITION_DURATION = cc11001100_hook("i.BACKDROP_TRANSITION_DURATION", 150, "assign"), i.DEFAULTS = cc11001100_hook("i.DEFAULTS", {
    backdrop: cc11001100_hook("backdrop", !0, "object-key-init"),
    keyboard: cc11001100_hook("keyboard", !0, "object-key-init"),
    show: cc11001100_hook("show", !0, "object-key-init")
  }, "assign"), i.prototype.toggle = cc11001100_hook("i.prototype.toggle", function (t) {
    return this.isShown ? this.hide() : this.show(t);
  }, "assign"), i.prototype.show = cc11001100_hook("i.prototype.show", function (e) {
    var o = cc11001100_hook("o", this, "var-init"),
      n = cc11001100_hook("n", t.Event("show.bs.modal", {
        relatedTarget: cc11001100_hook("relatedTarget", e, "object-key-init")
      }), "var-init");
    this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = cc11001100_hook("this.isShown", !0, "assign"), this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      o.$element.one("mouseup.dismiss.bs.modal", function (e) {
        t(e.target).is(o.$element) && (o.ignoreBackdropClick = cc11001100_hook("o.ignoreBackdropClick", !0, "assign"));
      });
    }), this.backdrop(function () {
      var n = cc11001100_hook("n", t.support.transition && o.$element.hasClass("fade"), "var-init");
      o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in").attr("aria-hidden", !1), o.enforceFocus();
      var s = cc11001100_hook("s", t.Event("shown.bs.modal", {
        relatedTarget: cc11001100_hook("relatedTarget", e, "object-key-init")
      }), "var-init");
      n ? o.$dialog.one("bsTransitionEnd", function () {
        o.$element.trigger("focus").trigger(s);
      }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s);
    }));
  }, "assign"), i.prototype.hide = cc11001100_hook("i.prototype.hide", function (e) {
    e && e.preventDefault(), e = cc11001100_hook("e", t.Event("hide.bs.modal"), "assign"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = cc11001100_hook("this.isShown", !1, "assign"), this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal());
  }, "assign"), i.prototype.enforceFocus = cc11001100_hook("i.prototype.enforceFocus", function () {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
      this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
    }, this));
  }, "assign"), i.prototype.escape = cc11001100_hook("i.prototype.escape", function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
      27 == t.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, "assign"), i.prototype.resize = cc11001100_hook("i.prototype.resize", function () {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
  }, "assign"), i.prototype.hideModal = cc11001100_hook("i.prototype.hideModal", function () {
    var t = cc11001100_hook("t", this, "var-init");
    this.$element.hide(), this.backdrop(function () {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
    });
  }, "assign"), i.prototype.removeBackdrop = cc11001100_hook("i.prototype.removeBackdrop", function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = cc11001100_hook("this.$backdrop", null, "assign");
  }, "assign"), i.prototype.backdrop = cc11001100_hook("i.prototype.backdrop", function (e) {
    var o = cc11001100_hook("o", this, "var-init"),
      n = cc11001100_hook("n", this.$element.hasClass("fade") ? "fade" : "", "var-init");
    if (this.isShown && this.options.backdrop) {
      var s = cc11001100_hook("s", t.support.transition && n, "var-init");
      if (this.$backdrop = cc11001100_hook("this.$backdrop", t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), "assign"), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = cc11001100_hook("this.ignoreBackdropClick", !1, "assign")) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var a = function () {
        o.removeBackdrop(), e && e();
      };
      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a();
    } else e && e();
  }, "assign"), i.prototype.handleUpdate = cc11001100_hook("i.prototype.handleUpdate", function () {
    this.adjustDialog();
  }, "assign"), i.prototype.adjustDialog = cc11001100_hook("i.prototype.adjustDialog", function () {
    var t = cc11001100_hook("t", this.$element[0].scrollHeight > document.documentElement.clientHeight, "var-init");
    this.$element.css({
      paddingLeft: cc11001100_hook("paddingLeft", !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", "object-key-init"),
      paddingRight: cc11001100_hook("paddingRight", this.bodyIsOverflowing && !t ? this.scrollbarWidth : "", "object-key-init")
    });
  }, "assign"), i.prototype.resetAdjustments = cc11001100_hook("i.prototype.resetAdjustments", function () {
    this.$element.css({
      paddingLeft: cc11001100_hook("paddingLeft", "", "object-key-init"),
      paddingRight: cc11001100_hook("paddingRight", "", "object-key-init")
    });
  }, "assign"), i.prototype.checkScrollbar = cc11001100_hook("i.prototype.checkScrollbar", function () {
    var t = cc11001100_hook("t", window.innerWidth, "var-init");
    if (!t) {
      var e = cc11001100_hook("e", document.documentElement.getBoundingClientRect(), "var-init");
      t = cc11001100_hook("t", e.right - Math.abs(e.left), "assign");
    }
    this.bodyIsOverflowing = cc11001100_hook("this.bodyIsOverflowing", document.body.clientWidth < t, "assign"), this.scrollbarWidth = cc11001100_hook("this.scrollbarWidth", this.measureScrollbar(), "assign");
  }, "assign"), i.prototype.setScrollbar = cc11001100_hook("i.prototype.setScrollbar", function () {
    var t = cc11001100_hook("t", parseInt(this.$body.css("padding-right") || 0, 10), "var-init");
    this.originalBodyPad = cc11001100_hook("this.originalBodyPad", document.body.style.paddingRight || "", "assign"), this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
  }, "assign"), i.prototype.resetScrollbar = cc11001100_hook("i.prototype.resetScrollbar", function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, "assign"), i.prototype.measureScrollbar = cc11001100_hook("i.prototype.measureScrollbar", function () {
    var t = cc11001100_hook("t", document.createElement("div"), "var-init");
    t.className = cc11001100_hook("t.className", "modal-scrollbar-measure", "assign"), this.$body.append(t);
    var e = cc11001100_hook("e", t.offsetWidth - t.clientWidth, "var-init");
    return this.$body[0].removeChild(t), e;
  }, "assign");
  var o = cc11001100_hook("o", t.fn.modal, "var-init");
  t.fn.modal = cc11001100_hook("t.fn.modal", e, "assign"), t.fn.modal.Constructor = cc11001100_hook("t.fn.modal.Constructor", i, "assign"), t.fn.modal.noConflict = cc11001100_hook("t.fn.modal.noConflict", function () {
    return t.fn.modal = cc11001100_hook("t.fn.modal", o, "assign"), this;
  }, "assign"), t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
    var o = cc11001100_hook("o", t(this), "var-init"),
      n = cc11001100_hook("n", o.attr("href"), "var-init"),
      s = cc11001100_hook("s", t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")), "var-init"),
      a = cc11001100_hook("a", s.data("bs.modal") ? "toggle" : t.extend({
        remote: cc11001100_hook("remote", !/#/.test(n) && n, "object-key-init")
      }, s.data(), o.data()), "var-init");
    o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
        o.is(":visible") && o.trigger("focus");
      });
    }), e.call(s, a, this);
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    return this.each(function () {
      var o = cc11001100_hook("o", t(this), "var-init"),
        n = cc11001100_hook("n", o.data("bs.tooltip"), "var-init"),
        s = cc11001100_hook("s", "object" == typeof e && e, "var-init");
      (n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = cc11001100_hook("n", new i(this, s), "assign")), "string" == typeof e && n[e]());
    });
  }
  var i = function (t, e) {
    this.type = cc11001100_hook("this.type", null, "assign"), this.options = cc11001100_hook("this.options", null, "assign"), this.enabled = cc11001100_hook("this.enabled", null, "assign"), this.timeout = cc11001100_hook("this.timeout", null, "assign"), this.hoverState = cc11001100_hook("this.hoverState", null, "assign"), this.$element = cc11001100_hook("this.$element", null, "assign"), this.init("tooltip", t, e);
  };
  i.VERSION = cc11001100_hook("i.VERSION", "3.3.4", "assign"), i.TRANSITION_DURATION = cc11001100_hook("i.TRANSITION_DURATION", 150, "assign"), i.DEFAULTS = cc11001100_hook("i.DEFAULTS", {
    animation: cc11001100_hook("animation", !0, "object-key-init"),
    placement: cc11001100_hook("placement", "top", "object-key-init"),
    selector: cc11001100_hook("selector", !1, "object-key-init"),
    template: cc11001100_hook("template", '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', "object-key-init"),
    trigger: cc11001100_hook("trigger", "hover focus", "object-key-init"),
    title: cc11001100_hook("title", "", "object-key-init"),
    delay: cc11001100_hook("delay", 0, "object-key-init"),
    html: cc11001100_hook("html", !1, "object-key-init"),
    container: cc11001100_hook("container", !1, "object-key-init"),
    viewport: {
      selector: cc11001100_hook("selector", "body", "object-key-init"),
      padding: cc11001100_hook("padding", 0, "object-key-init")
    }
  }, "assign"), i.prototype.init = cc11001100_hook("i.prototype.init", function (e, i, o) {
    if (this.enabled = cc11001100_hook("this.enabled", !0, "assign"), this.type = cc11001100_hook("this.type", e, "assign"), this.$element = cc11001100_hook("this.$element", t(i), "assign"), this.options = cc11001100_hook("this.options", this.getOptions(o), "assign"), this.$viewport = cc11001100_hook("this.$viewport", this.options.viewport && t(this.options.viewport.selector || this.options.viewport), "assign"), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var n = cc11001100_hook("n", this.options.trigger.split(" "), "var-init"), s = cc11001100_hook("s", n.length, "var-init"); s--;) {
      var a = cc11001100_hook("a", n[s], "var-init");
      if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));else if ("manual" != a) {
        var r = cc11001100_hook("r", "hover" == a ? "mouseenter" : "focusin", "var-init"),
          l = cc11001100_hook("l", "hover" == a ? "mouseleave" : "focusout", "var-init");
        this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
      }
    }
    this.options.selector ? this._options = cc11001100_hook("this._options", t.extend({}, this.options, {
      trigger: cc11001100_hook("trigger", "manual", "object-key-init"),
      selector: cc11001100_hook("selector", "", "object-key-init")
    }), "assign") : this.fixTitle();
  }, "assign"), i.prototype.getDefaults = cc11001100_hook("i.prototype.getDefaults", function () {
    return i.DEFAULTS;
  }, "assign"), i.prototype.getOptions = cc11001100_hook("i.prototype.getOptions", function (e) {
    return e = cc11001100_hook("e", t.extend({}, this.getDefaults(), this.$element.data(), e), "assign"), e.delay && "number" == typeof e.delay && (e.delay = cc11001100_hook("e.delay", {
      show: cc11001100_hook("show", e.delay, "object-key-init"),
      hide: cc11001100_hook("hide", e.delay, "object-key-init")
    }, "assign")), e;
  }, "assign"), i.prototype.getDelegateOptions = cc11001100_hook("i.prototype.getDelegateOptions", function () {
    var e = cc11001100_hook("e", {}, "var-init"),
      i = cc11001100_hook("i", this.getDefaults(), "var-init");
    return this._options && t.each(this._options, function (t, o) {
      i[t] != o && (e[t] = cc11001100_hook("e[t]", o, "assign"));
    }), e;
  }, "assign"), i.prototype.enter = cc11001100_hook("i.prototype.enter", function (e) {
    var i = cc11001100_hook("i", e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type), "var-init");
    return i && i.$tip && i.$tip.is(":visible") ? void (i.hoverState = cc11001100_hook("i.hoverState", "in", "assign")) : (i || (i = cc11001100_hook("i", new this.constructor(e.currentTarget, this.getDelegateOptions()), "assign"), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = cc11001100_hook("i.hoverState", "in", "assign"), i.options.delay && i.options.delay.show ? void (i.timeout = cc11001100_hook("i.timeout", setTimeout(function () {
      "in" == i.hoverState && i.show();
    }, i.options.delay.show), "assign")) : i.show());
  }, "assign"), i.prototype.leave = cc11001100_hook("i.prototype.leave", function (e) {
    var i = cc11001100_hook("i", e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type), "var-init");
    return i || (i = cc11001100_hook("i", new this.constructor(e.currentTarget, this.getDelegateOptions()), "assign"), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = cc11001100_hook("i.hoverState", "out", "assign"), i.options.delay && i.options.delay.hide ? void (i.timeout = cc11001100_hook("i.timeout", setTimeout(function () {
      "out" == i.hoverState && i.hide();
    }, i.options.delay.hide), "assign")) : i.hide();
  }, "assign"), i.prototype.show = cc11001100_hook("i.prototype.show", function () {
    var e = cc11001100_hook("e", t.Event("show.bs." + this.type), "var-init");
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var o = cc11001100_hook("o", t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), "var-init");
      if (e.isDefaultPrevented() || !o) return;
      var n = cc11001100_hook("n", this, "var-init"),
        s = cc11001100_hook("s", this.tip(), "var-init"),
        a = cc11001100_hook("a", this.getUID(this.type), "var-init");
      this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
      var r = cc11001100_hook("r", "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement, "var-init"),
        l = cc11001100_hook("l", /\s?auto?\s?/i, "var-init"),
        h = cc11001100_hook("h", l.test(r), "var-init");
      h && (r = cc11001100_hook("r", r.replace(l, "") || "top", "assign")), s.detach().css({
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init"),
        display: cc11001100_hook("display", "block", "object-key-init")
      }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
      var d = cc11001100_hook("d", this.getPosition(), "var-init"),
        p = cc11001100_hook("p", s[0].offsetWidth, "var-init"),
        c = cc11001100_hook("c", s[0].offsetHeight, "var-init");
      if (h) {
        var f = cc11001100_hook("f", r, "var-init"),
          u = cc11001100_hook("u", this.options.container ? t(this.options.container) : this.$element.parent(), "var-init"),
          g = cc11001100_hook("g", this.getPosition(u), "var-init");
        r = cc11001100_hook("r", "bottom" == r && d.bottom + c > g.bottom ? "top" : "top" == r && d.top - c < g.top ? "bottom" : "right" == r && d.right + p > g.width ? "left" : "left" == r && d.left - p < g.left ? "right" : r, "assign"), s.removeClass(f).addClass(r);
      }
      var m = cc11001100_hook("m", this.getCalculatedOffset(r, d, p, c), "var-init");
      this.applyPlacement(m, r);
      var v = function () {
        var t = cc11001100_hook("t", n.hoverState, "var-init");
        n.$element.trigger("shown.bs." + n.type), n.hoverState = cc11001100_hook("n.hoverState", null, "assign"), "out" == t && n.leave(n);
      };
      t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v();
    }
  }, "assign"), i.prototype.applyPlacement = cc11001100_hook("i.prototype.applyPlacement", function (e, i) {
    var o = cc11001100_hook("o", this.tip(), "var-init"),
      n = cc11001100_hook("n", o[0].offsetWidth, "var-init"),
      s = cc11001100_hook("s", o[0].offsetHeight, "var-init"),
      a = cc11001100_hook("a", parseInt(o.css("margin-top"), 10), "var-init"),
      r = cc11001100_hook("r", parseInt(o.css("margin-left"), 10), "var-init");
    isNaN(a) && (a = cc11001100_hook("a", 0, "assign")), isNaN(r) && (r = cc11001100_hook("r", 0, "assign")), e.top = cc11001100_hook("e.top", e.top + a, "assign"), e.left = cc11001100_hook("e.left", e.left + r, "assign"), t.offset.setOffset(o[0], t.extend({
      using: function (t) {
        o.css({
          top: cc11001100_hook("top", Math.round(t.top), "object-key-init"),
          left: cc11001100_hook("left", Math.round(t.left), "object-key-init")
        });
      }
    }, e), 0), o.addClass("in");
    var l = cc11001100_hook("l", o[0].offsetWidth, "var-init"),
      h = cc11001100_hook("h", o[0].offsetHeight, "var-init");
    "top" == i && h != s && (e.top = cc11001100_hook("e.top", e.top + s - h, "assign"));
    var d = cc11001100_hook("d", this.getViewportAdjustedDelta(i, e, l, h), "var-init");
    d.left ? e.left += cc11001100_hook("e.left", d.left, "assign") : e.top += cc11001100_hook("e.top", d.top, "assign");
    var p = cc11001100_hook("p", /top|bottom/.test(i), "var-init"),
      c = cc11001100_hook("c", p ? 2 * d.left - n + l : 2 * d.top - s + h, "var-init"),
      f = cc11001100_hook("f", p ? "offsetWidth" : "offsetHeight", "var-init");
    o.offset(e), this.replaceArrow(c, o[0][f], p);
  }, "assign"), i.prototype.replaceArrow = cc11001100_hook("i.prototype.replaceArrow", function (t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "");
  }, "assign"), i.prototype.setContent = cc11001100_hook("i.prototype.setContent", function () {
    var t = cc11001100_hook("t", this.tip(), "var-init"),
      e = cc11001100_hook("e", this.getTitle(), "var-init");
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
  }, "assign"), i.prototype.hide = cc11001100_hook("i.prototype.hide", function (e) {
    function o() {
      "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e();
    }
    var n = cc11001100_hook("n", this, "var-init"),
      s = cc11001100_hook("s", t(this.$tip), "var-init"),
      a = cc11001100_hook("a", t.Event("hide.bs." + this.type), "var-init");
    return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = cc11001100_hook("this.hoverState", null, "assign"), this);
  }, "assign"), i.prototype.fixTitle = cc11001100_hook("i.prototype.fixTitle", function () {
    var t = cc11001100_hook("t", this.$element, "var-init");
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
  }, "assign"), i.prototype.hasContent = cc11001100_hook("i.prototype.hasContent", function () {
    return this.getTitle();
  }, "assign"), i.prototype.getPosition = cc11001100_hook("i.prototype.getPosition", function (e) {
    e = cc11001100_hook("e", e || this.$element, "assign");
    var i = cc11001100_hook("i", e[0], "var-init"),
      o = cc11001100_hook("o", "BODY" == i.tagName, "var-init"),
      n = cc11001100_hook("n", i.getBoundingClientRect(), "var-init");
    null == n.width && (n = cc11001100_hook("n", t.extend({}, n, {
      width: cc11001100_hook("width", n.right - n.left, "object-key-init"),
      height: cc11001100_hook("height", n.bottom - n.top, "object-key-init")
    }), "assign"));
    var s = cc11001100_hook("s", o ? {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      } : e.offset(), "var-init"),
      a = cc11001100_hook("a", {
        scroll: cc11001100_hook("scroll", o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(), "object-key-init")
      }, "var-init"),
      r = cc11001100_hook("r", o ? {
        width: cc11001100_hook("width", t(window).width(), "object-key-init"),
        height: cc11001100_hook("height", t(window).height(), "object-key-init")
      } : null, "var-init");
    return t.extend({}, n, a, r, s);
  }, "assign"), i.prototype.getCalculatedOffset = cc11001100_hook("i.prototype.getCalculatedOffset", function (t, e, i, o) {
    return "bottom" == t ? {
      top: cc11001100_hook("top", e.top + e.height, "object-key-init"),
      left: cc11001100_hook("left", e.left + e.width / 2 - i / 2, "object-key-init")
    } : "top" == t ? {
      top: cc11001100_hook("top", e.top - o, "object-key-init"),
      left: cc11001100_hook("left", e.left + e.width / 2 - i / 2, "object-key-init")
    } : "left" == t ? {
      top: cc11001100_hook("top", e.top + e.height / 2 - o / 2, "object-key-init"),
      left: cc11001100_hook("left", e.left - i, "object-key-init")
    } : {
      top: cc11001100_hook("top", e.top + e.height / 2 - o / 2, "object-key-init"),
      left: cc11001100_hook("left", e.left + e.width, "object-key-init")
    };
  }, "assign"), i.prototype.getViewportAdjustedDelta = cc11001100_hook("i.prototype.getViewportAdjustedDelta", function (t, e, i, o) {
    var n = cc11001100_hook("n", {
      top: cc11001100_hook("top", 0, "object-key-init"),
      left: cc11001100_hook("left", 0, "object-key-init")
    }, "var-init");
    if (!this.$viewport) return n;
    var s = cc11001100_hook("s", this.options.viewport && this.options.viewport.padding || 0, "var-init"),
      a = cc11001100_hook("a", this.getPosition(this.$viewport), "var-init");
    if (/right|left/.test(t)) {
      var r = cc11001100_hook("r", e.top - s - a.scroll, "var-init"),
        l = cc11001100_hook("l", e.top + s - a.scroll + o, "var-init");
      r < a.top ? n.top = cc11001100_hook("n.top", a.top - r, "assign") : l > a.top + a.height && (n.top = cc11001100_hook("n.top", a.top + a.height - l, "assign"));
    } else {
      var h = cc11001100_hook("h", e.left - s, "var-init"),
        d = cc11001100_hook("d", e.left + s + i, "var-init");
      h < a.left ? n.left = cc11001100_hook("n.left", a.left - h, "assign") : d > a.width && (n.left = cc11001100_hook("n.left", a.left + a.width - d, "assign"));
    }
    return n;
  }, "assign"), i.prototype.getTitle = cc11001100_hook("i.prototype.getTitle", function () {
    var t,
      e = cc11001100_hook("e", this.$element, "var-init"),
      i = cc11001100_hook("i", this.options, "var-init");
    return t = cc11001100_hook("t", e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title), "assign");
  }, "assign"), i.prototype.getUID = cc11001100_hook("i.prototype.getUID", function (t) {
    do t += cc11001100_hook("t", ~~(1e6 * Math.random()), "assign"); while (document.getElementById(t));
    return t;
  }, "assign"), i.prototype.tip = cc11001100_hook("i.prototype.tip", function () {
    return this.$tip = cc11001100_hook("this.$tip", this.$tip || t(this.options.template), "assign");
  }, "assign"), i.prototype.arrow = cc11001100_hook("i.prototype.arrow", function () {
    return this.$arrow = cc11001100_hook("this.$arrow", this.$arrow || this.tip().find(".tooltip-arrow"), "assign");
  }, "assign"), i.prototype.enable = cc11001100_hook("i.prototype.enable", function () {
    this.enabled = cc11001100_hook("this.enabled", !0, "assign");
  }, "assign"), i.prototype.disable = cc11001100_hook("i.prototype.disable", function () {
    this.enabled = cc11001100_hook("this.enabled", !1, "assign");
  }, "assign"), i.prototype.toggleEnabled = cc11001100_hook("i.prototype.toggleEnabled", function () {
    this.enabled = cc11001100_hook("this.enabled", !this.enabled, "assign");
  }, "assign"), i.prototype.toggle = cc11001100_hook("i.prototype.toggle", function (e) {
    var i = cc11001100_hook("i", this, "var-init");
    e && (i = cc11001100_hook("i", t(e.currentTarget).data("bs." + this.type), "assign"), i || (i = cc11001100_hook("i", new this.constructor(e.currentTarget, this.getDelegateOptions()), "assign"), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
  }, "assign"), i.prototype.destroy = cc11001100_hook("i.prototype.destroy", function () {
    var t = cc11001100_hook("t", this, "var-init");
    clearTimeout(this.timeout), this.hide(function () {
      t.$element.off("." + t.type).removeData("bs." + t.type);
    });
  }, "assign");
  var o = cc11001100_hook("o", t.fn.tooltip, "var-init");
  t.fn.tooltip = cc11001100_hook("t.fn.tooltip", e, "assign"), t.fn.tooltip.Constructor = cc11001100_hook("t.fn.tooltip.Constructor", i, "assign"), t.fn.tooltip.noConflict = cc11001100_hook("t.fn.tooltip.noConflict", function () {
    return t.fn.tooltip = cc11001100_hook("t.fn.tooltip", o, "assign"), this;
  }, "assign");
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    return this.each(function () {
      var o = cc11001100_hook("o", t(this), "var-init"),
        n = cc11001100_hook("n", o.data("bs.popover"), "var-init"),
        s = cc11001100_hook("s", "object" == typeof e && e, "var-init");
      (n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = cc11001100_hook("n", new i(this, s), "assign")), "string" == typeof e && n[e]());
    });
  }
  var i = function (t, e) {
    this.init("popover", t, e);
  };
  if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
  i.VERSION = cc11001100_hook("i.VERSION", "3.3.4", "assign"), i.DEFAULTS = cc11001100_hook("i.DEFAULTS", t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: cc11001100_hook("placement", "right", "object-key-init"),
    trigger: cc11001100_hook("trigger", "click", "object-key-init"),
    content: cc11001100_hook("content", "", "object-key-init"),
    template: cc11001100_hook("template", '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>', "object-key-init")
  }), "assign"), i.prototype = cc11001100_hook("i.prototype", t.extend({}, t.fn.tooltip.Constructor.prototype), "assign"), i.prototype.constructor = cc11001100_hook("i.prototype.constructor", i, "assign"), i.prototype.getDefaults = cc11001100_hook("i.prototype.getDefaults", function () {
    return i.DEFAULTS;
  }, "assign"), i.prototype.setContent = cc11001100_hook("i.prototype.setContent", function () {
    var t = cc11001100_hook("t", this.tip(), "var-init"),
      e = cc11001100_hook("e", this.getTitle(), "var-init"),
      i = cc11001100_hook("i", this.getContent(), "var-init");
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
  }, "assign"), i.prototype.hasContent = cc11001100_hook("i.prototype.hasContent", function () {
    return this.getTitle() || this.getContent();
  }, "assign"), i.prototype.getContent = cc11001100_hook("i.prototype.getContent", function () {
    var t = cc11001100_hook("t", this.$element, "var-init"),
      e = cc11001100_hook("e", this.options, "var-init");
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
  }, "assign"), i.prototype.arrow = cc11001100_hook("i.prototype.arrow", function () {
    return this.$arrow = cc11001100_hook("this.$arrow", this.$arrow || this.tip().find(".arrow"), "assign");
  }, "assign");
  var o = cc11001100_hook("o", t.fn.popover, "var-init");
  t.fn.popover = cc11001100_hook("t.fn.popover", e, "assign"), t.fn.popover.Constructor = cc11001100_hook("t.fn.popover.Constructor", i, "assign"), t.fn.popover.noConflict = cc11001100_hook("t.fn.popover.noConflict", function () {
    return t.fn.popover = cc11001100_hook("t.fn.popover", o, "assign"), this;
  }, "assign");
}(jQuery), +function (t) {
  "use strict";

  function e(i, o) {
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    this.$body = cc11001100_hook("this.$body", t(document.body), "assign"), this.$scrollElement = cc11001100_hook("this.$scrollElement", t(t(i).is(document.body) ? window : i), "assign"), this.options = cc11001100_hook("this.options", t.extend({}, e.DEFAULTS, o), "assign"), this.selector = cc11001100_hook("this.selector", (this.options.target || "") + " .nav li > a", "assign"), this.offsets = cc11001100_hook("this.offsets", [], "assign"), this.targets = cc11001100_hook("this.targets", [], "assign"), this.activeTarget = cc11001100_hook("this.activeTarget", null, "assign"), this.scrollHeight = cc11001100_hook("this.scrollHeight", 0, "assign"), this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process();
  }
  function i(i) {
    cc11001100_hook("i", i, "function-parameter");
    return this.each(function () {
      var o = cc11001100_hook("o", t(this), "var-init"),
        n = cc11001100_hook("n", o.data("bs.scrollspy"), "var-init"),
        s = cc11001100_hook("s", "object" == typeof i && i, "var-init");
      n || o.data("bs.scrollspy", n = cc11001100_hook("n", new e(this, s), "assign")), "string" == typeof i && n[i]();
    });
  }
  e.VERSION = cc11001100_hook("e.VERSION", "3.3.4", "assign"), e.DEFAULTS = cc11001100_hook("e.DEFAULTS", {
    offset: cc11001100_hook("offset", 10, "object-key-init")
  }, "assign"), e.prototype.getScrollHeight = cc11001100_hook("e.prototype.getScrollHeight", function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, "assign"), e.prototype.refresh = cc11001100_hook("e.prototype.refresh", function () {
    var e = cc11001100_hook("e", this, "var-init"),
      i = cc11001100_hook("i", "offset", "var-init"),
      o = cc11001100_hook("o", 0, "var-init");
    this.offsets = cc11001100_hook("this.offsets", [], "assign"), this.targets = cc11001100_hook("this.targets", [], "assign"), this.scrollHeight = cc11001100_hook("this.scrollHeight", this.getScrollHeight(), "assign"), t.isWindow(this.$scrollElement[0]) || (i = cc11001100_hook("i", "position", "assign"), o = cc11001100_hook("o", this.$scrollElement.scrollTop(), "assign")), this.$body.find(this.selector).map(function () {
      var e = cc11001100_hook("e", t(this), "var-init"),
        n = cc11001100_hook("n", e.data("target") || e.attr("href"), "var-init"),
        s = cc11001100_hook("s", /^#./.test(n) && t(n), "var-init");
      return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null;
    }).sort(function (t, e) {
      return t[0] - e[0];
    }).each(function () {
      e.offsets.push(this[0]), e.targets.push(this[1]);
    });
  }, "assign"), e.prototype.process = cc11001100_hook("e.prototype.process", function () {
    var t,
      e = cc11001100_hook("e", this.$scrollElement.scrollTop() + this.options.offset, "var-init"),
      i = cc11001100_hook("i", this.getScrollHeight(), "var-init"),
      o = cc11001100_hook("o", this.options.offset + i - this.$scrollElement.height(), "var-init"),
      n = cc11001100_hook("n", this.offsets, "var-init"),
      s = cc11001100_hook("s", this.targets, "var-init"),
      a = cc11001100_hook("a", this.activeTarget, "var-init");
    if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = cc11001100_hook("t", s[s.length - 1], "assign")) && this.activate(t);
    if (a && e < n[0]) return this.activeTarget = cc11001100_hook("this.activeTarget", null, "assign"), this.clear();
    for (t = cc11001100_hook("t", n.length, "assign"); t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t]);
  }, "assign"), e.prototype.activate = cc11001100_hook("e.prototype.activate", function (e) {
    this.activeTarget = cc11001100_hook("this.activeTarget", e, "assign"), this.clear();
    var i = cc11001100_hook("i", this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', "var-init"),
      o = cc11001100_hook("o", t(i).parents("li").addClass("active"), "var-init");
    o.parent(".dropdown-menu").length && (o = cc11001100_hook("o", o.closest("li.dropdown").addClass("active"), "assign")), o.trigger("activate.bs.scrollspy");
  }, "assign"), e.prototype.clear = cc11001100_hook("e.prototype.clear", function () {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  }, "assign");
  var o = cc11001100_hook("o", t.fn.scrollspy, "var-init");
  t.fn.scrollspy = cc11001100_hook("t.fn.scrollspy", i, "assign"), t.fn.scrollspy.Constructor = cc11001100_hook("t.fn.scrollspy.Constructor", e, "assign"), t.fn.scrollspy.noConflict = cc11001100_hook("t.fn.scrollspy.noConflict", function () {
    return t.fn.scrollspy = cc11001100_hook("t.fn.scrollspy", o, "assign"), this;
  }, "assign"), t(window).on("load.bs.scrollspy.data-api", function () {
    t('[data-spy="scroll"]').each(function () {
      var e = cc11001100_hook("e", t(this), "var-init");
      i.call(e, e.data());
    });
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    return this.each(function () {
      var o = cc11001100_hook("o", t(this), "var-init"),
        n = cc11001100_hook("n", o.data("bs.tab"), "var-init");
      n || o.data("bs.tab", n = cc11001100_hook("n", new i(this), "assign")), "string" == typeof e && n[e]();
    });
  }
  var i = function (e) {
    this.element = cc11001100_hook("this.element", t(e), "assign");
  };
  i.VERSION = cc11001100_hook("i.VERSION", "3.3.4", "assign"), i.TRANSITION_DURATION = cc11001100_hook("i.TRANSITION_DURATION", 150, "assign"), i.prototype.show = cc11001100_hook("i.prototype.show", function () {
    var e = cc11001100_hook("e", this.element, "var-init"),
      i = cc11001100_hook("i", e.closest("ul:not(.dropdown-menu)"), "var-init"),
      o = cc11001100_hook("o", e.data("target"), "var-init");
    if (o || (o = cc11001100_hook("o", e.attr("href"), "assign"), o = cc11001100_hook("o", o && o.replace(/.*(?=#[^\s]*$)/, ""), "assign")), !e.parent("li").hasClass("active")) {
      var n = cc11001100_hook("n", i.find(".active:last a"), "var-init"),
        s = cc11001100_hook("s", t.Event("hide.bs.tab", {
          relatedTarget: cc11001100_hook("relatedTarget", e[0], "object-key-init")
        }), "var-init"),
        a = cc11001100_hook("a", t.Event("show.bs.tab", {
          relatedTarget: cc11001100_hook("relatedTarget", n[0], "object-key-init")
        }), "var-init");
      if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
        var r = cc11001100_hook("r", t(o), "var-init");
        this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
          n.trigger({
            type: cc11001100_hook("type", "hidden.bs.tab", "object-key-init"),
            relatedTarget: cc11001100_hook("relatedTarget", e[0], "object-key-init")
          }), e.trigger({
            type: cc11001100_hook("type", "shown.bs.tab", "object-key-init"),
            relatedTarget: cc11001100_hook("relatedTarget", n[0], "object-key-init")
          });
        });
      }
    }
  }, "assign"), i.prototype.activate = cc11001100_hook("i.prototype.activate", function (e, o, n) {
    function s() {
      a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n();
    }
    var a = cc11001100_hook("a", o.find("> .active"), "var-init"),
      r = cc11001100_hook("r", n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length), "var-init");
    a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in");
  }, "assign");
  var o = cc11001100_hook("o", t.fn.tab, "var-init");
  t.fn.tab = cc11001100_hook("t.fn.tab", e, "assign"), t.fn.tab.Constructor = cc11001100_hook("t.fn.tab.Constructor", i, "assign"), t.fn.tab.noConflict = cc11001100_hook("t.fn.tab.noConflict", function () {
    return t.fn.tab = cc11001100_hook("t.fn.tab", o, "assign"), this;
  }, "assign");
  var n = function (i) {
    i.preventDefault(), e.call(t(this), "show");
  };
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    return this.each(function () {
      var o = cc11001100_hook("o", t(this), "var-init"),
        n = cc11001100_hook("n", o.data("bs.affix"), "var-init"),
        s = cc11001100_hook("s", "object" == typeof e && e, "var-init");
      n || o.data("bs.affix", n = cc11001100_hook("n", new i(this, s), "assign")), "string" == typeof e && n[e]();
    });
  }
  var i = function (e, o) {
    this.options = cc11001100_hook("this.options", t.extend({}, i.DEFAULTS, o), "assign"), this.$target = cc11001100_hook("this.$target", t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), "assign"), this.$element = cc11001100_hook("this.$element", t(e), "assign"), this.affixed = cc11001100_hook("this.affixed", null, "assign"), this.unpin = cc11001100_hook("this.unpin", null, "assign"), this.pinnedOffset = cc11001100_hook("this.pinnedOffset", null, "assign"), this.checkPosition();
  };
  i.VERSION = cc11001100_hook("i.VERSION", "3.3.4", "assign"), i.RESET = cc11001100_hook("i.RESET", "affix affix-top affix-bottom", "assign"), i.DEFAULTS = cc11001100_hook("i.DEFAULTS", {
    offset: cc11001100_hook("offset", 0, "object-key-init"),
    target: cc11001100_hook("target", window, "object-key-init")
  }, "assign"), i.prototype.getState = cc11001100_hook("i.prototype.getState", function (t, e, i, o) {
    var n = cc11001100_hook("n", this.$target.scrollTop(), "var-init"),
      s = cc11001100_hook("s", this.$element.offset(), "var-init"),
      a = cc11001100_hook("a", this.$target.height(), "var-init");
    if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
    if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
    var r = cc11001100_hook("r", null == this.affixed, "var-init"),
      l = cc11001100_hook("l", r ? n : s.top, "var-init"),
      h = cc11001100_hook("h", r ? a : e, "var-init");
    return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1;
  }, "assign"), i.prototype.getPinnedOffset = cc11001100_hook("i.prototype.getPinnedOffset", function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = cc11001100_hook("t", this.$target.scrollTop(), "var-init"),
      e = cc11001100_hook("e", this.$element.offset(), "var-init");
    return this.pinnedOffset = cc11001100_hook("this.pinnedOffset", e.top - t, "assign");
  }, "assign"), i.prototype.checkPositionWithEventLoop = cc11001100_hook("i.prototype.checkPositionWithEventLoop", function () {
    setTimeout(t.proxy(this.checkPosition, this), 1);
  }, "assign"), i.prototype.checkPosition = cc11001100_hook("i.prototype.checkPosition", function () {
    if (this.$element.is(":visible")) {
      var e = cc11001100_hook("e", this.$element.height(), "var-init"),
        o = cc11001100_hook("o", this.options.offset, "var-init"),
        n = cc11001100_hook("n", o.top, "var-init"),
        s = cc11001100_hook("s", o.bottom, "var-init"),
        a = cc11001100_hook("a", t(document.body).height(), "var-init");
      "object" != typeof o && (s = cc11001100_hook("s", n = cc11001100_hook("n", o, "assign"), "assign")), "function" == typeof n && (n = cc11001100_hook("n", o.top(this.$element), "assign")), "function" == typeof s && (s = cc11001100_hook("s", o.bottom(this.$element), "assign"));
      var r = cc11001100_hook("r", this.getState(a, e, n, s), "var-init");
      if (this.affixed != r) {
        null != this.unpin && this.$element.css("top", "");
        var l = cc11001100_hook("l", "affix" + (r ? "-" + r : ""), "var-init"),
          h = cc11001100_hook("h", t.Event(l + ".bs.affix"), "var-init");
        if (this.$element.trigger(h), h.isDefaultPrevented()) return;
        this.affixed = cc11001100_hook("this.affixed", r, "assign"), this.unpin = cc11001100_hook("this.unpin", "bottom" == r ? this.getPinnedOffset() : null, "assign"), this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix");
      }
      "bottom" == r && this.$element.offset({
        top: cc11001100_hook("top", a - e - s, "object-key-init")
      });
    }
  }, "assign");
  var o = cc11001100_hook("o", t.fn.affix, "var-init");
  t.fn.affix = cc11001100_hook("t.fn.affix", e, "assign"), t.fn.affix.Constructor = cc11001100_hook("t.fn.affix.Constructor", i, "assign"), t.fn.affix.noConflict = cc11001100_hook("t.fn.affix.noConflict", function () {
    return t.fn.affix = cc11001100_hook("t.fn.affix", o, "assign"), this;
  }, "assign"), t(window).on("load", function () {
    t('[data-spy="affix"]').each(function () {
      var i = cc11001100_hook("i", t(this), "var-init"),
        o = cc11001100_hook("o", i.data(), "var-init");
      o.offset = cc11001100_hook("o.offset", o.offset || {}, "assign"), null != o.offsetBottom && (o.offset.bottom = cc11001100_hook("o.offset.bottom", o.offsetBottom, "assign")), null != o.offsetTop && (o.offset.top = cc11001100_hook("o.offset.top", o.offsetTop, "assign")), e.call(i, o);
    });
  });
}(jQuery);
var q = cc11001100_hook("q", null, "var-init");
window.PR_SHOULD_USE_CONTINUATION = cc11001100_hook("window.PR_SHOULD_USE_CONTINUATION", !0, "assign"), function () {
  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    function t(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.charCodeAt(0), "var-init");
      if (92 !== t) return t;
      var n = cc11001100_hook("n", e.charAt(1), "var-init");
      return (t = cc11001100_hook("t", d[n], "assign")) ? t : n >= "0" && "7" >= n ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1);
    }
    function n(e) {
      cc11001100_hook("e", e, "function-parameter");
      return 32 > e ? (16 > e ? "\\x0" : "\\x") + e.toString(16) : (e = cc11001100_hook("e", String.fromCharCode(e), "assign"), ("\\" === e || "-" === e || "[" === e || "]" === e) && (e = cc11001100_hook("e", "\\" + e, "assign")), e);
    }
    function r(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var r = cc11001100_hook("r", e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), "var-init"), e = cc11001100_hook("e", [], "var-init"), a = cc11001100_hook("a", [], "var-init"), s = cc11001100_hook("s", "^" === r[0], "var-init"), i = cc11001100_hook("i", s ? 1 : 0, "var-init"), o = cc11001100_hook("o", r.length, "var-init"); o > i; ++i) {
        var l = cc11001100_hook("l", r[i], "var-init");
        if (/\\[bdsw]/i.test(l)) e.push(l);else {
          var c,
            l = cc11001100_hook("l", t(l), "var-init");
          o > i + 2 && "-" === r[i + 1] ? (c = cc11001100_hook("c", t(r[i + 2]), "assign"), i += cc11001100_hook("i", 2, "assign")) : c = cc11001100_hook("c", l, "assign"), a.push([l, c]), 65 > c || l > 122 || (65 > c || l > 90 || a.push([32 | Math.max(65, l), 32 | Math.min(c, 90)]), 97 > c || l > 122 || a.push([-33 & Math.max(97, l), -33 & Math.min(c, 122)]));
        }
      }
      for (a.sort(function (e, t) {
        return e[0] - t[0] || t[1] - e[1];
      }), r = cc11001100_hook("r", [], "assign"), l = cc11001100_hook("l", [NaN, NaN], "assign"), i = cc11001100_hook("i", 0, "assign"); i < a.length; ++i) o = cc11001100_hook("o", a[i], "assign"), o[0] <= l[1] + 1 ? l[1] = cc11001100_hook("l[1]", Math.max(l[1], o[1]), "assign") : r.push(l = cc11001100_hook("l", o, "assign"));
      for (a = cc11001100_hook("a", ["["], "assign"), s && a.push("^"), a.push.apply(a, e), i = cc11001100_hook("i", 0, "assign"); i < r.length; ++i) o = cc11001100_hook("o", r[i], "assign"), a.push(n(o[0])), o[1] > o[0] && (o[1] + 1 > o[0] && a.push("-"), a.push(n(o[1])));
      return a.push("]"), a.join("");
    }
    function a(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t = cc11001100_hook("t", e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), "var-init"), n = cc11001100_hook("n", t.length, "var-init"), a = cc11001100_hook("a", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"), l = cc11001100_hook("l", 0, "var-init"); n > o; ++o) {
        var c = cc11001100_hook("c", t[o], "var-init");
        "(" === c ? ++l : "\\" === c.charAt(0) && (c = cc11001100_hook("c", +c.substring(1), "assign")) && l >= c && (a[c] = cc11001100_hook("a[c]", -1, "assign"));
      }
      for (o = cc11001100_hook("o", 1, "assign"); o < a.length; ++o) -1 === a[o] && (a[o] = cc11001100_hook("a[o]", ++s, "assign"));
      for (l = cc11001100_hook("l", o = cc11001100_hook("o", 0, "assign"), "assign"); n > o; ++o) c = cc11001100_hook("c", t[o], "assign"), "(" === c ? (++l, void 0 === a[l] && (t[o] = cc11001100_hook("t[o]", "(?:", "assign"))) : "\\" === c.charAt(0) && (c = cc11001100_hook("c", +c.substring(1), "assign")) && l >= c && (t[o] = cc11001100_hook("t[o]", "\\" + a[l], "assign"));
      for (l = cc11001100_hook("l", o = cc11001100_hook("o", 0, "assign"), "assign"); n > o; ++o) "^" === t[o] && "^" !== t[o + 1] && (t[o] = cc11001100_hook("t[o]", "", "assign"));
      if (e.ignoreCase && i) for (o = cc11001100_hook("o", 0, "assign"); n > o; ++o) c = cc11001100_hook("c", t[o], "assign"), e = cc11001100_hook("e", c.charAt(0), "assign"), c.length >= 2 && "[" === e ? t[o] = cc11001100_hook("t[o]", r(c), "assign") : "\\" !== e && (t[o] = cc11001100_hook("t[o]", c.replace(/[A-Za-z]/g, function (e) {
        return e = cc11001100_hook("e", e.charCodeAt(0), "assign"), "[" + String.fromCharCode(-33 & e, 32 | e) + "]";
      }), "assign"));
      return t.join("");
    }
    for (var s = cc11001100_hook("s", 0, "var-init"), i = cc11001100_hook("i", !1, "var-init"), o = cc11001100_hook("o", !1, "var-init"), l = cc11001100_hook("l", 0, "var-init"), c = cc11001100_hook("c", e.length, "var-init"); c > l; ++l) {
      var u = cc11001100_hook("u", e[l], "var-init");
      if (u.ignoreCase) o = cc11001100_hook("o", !0, "assign");else if (/[a-z]/i.test(u.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
        i = cc11001100_hook("i", !0, "assign"), o = cc11001100_hook("o", !1, "assign");
        break;
      }
    }
    for (var d = cc11001100_hook("d", {
        b: cc11001100_hook("b", 8, "object-key-init"),
        t: cc11001100_hook("t", 9, "object-key-init"),
        n: cc11001100_hook("n", 10, "object-key-init"),
        v: cc11001100_hook("v", 11, "object-key-init"),
        f: cc11001100_hook("f", 12, "object-key-init"),
        r: cc11001100_hook("r", 13, "object-key-init")
      }, "var-init"), p = cc11001100_hook("p", [], "var-init"), l = cc11001100_hook("l", 0, "var-init"), c = cc11001100_hook("c", e.length, "var-init"); c > l; ++l) {
      if (u = cc11001100_hook("u", e[l], "assign"), u.global || u.multiline) throw Error("" + u);
      p.push("(?:" + a(u) + ")");
    }
    return RegExp(p.join("|"), o ? "gi" : "g");
  }
  function t(e) {
    cc11001100_hook("e", e, "function-parameter");
    function t(e) {
      cc11001100_hook("e", e, "function-parameter");
      switch (e.nodeType) {
        case 1:
          if (r.test(e.className)) break;
          for (var n = cc11001100_hook("n", e.firstChild, "var-init"); n; n = cc11001100_hook("n", n.nextSibling, "assign")) t(n);
          n = cc11001100_hook("n", e.nodeName, "assign"), ("BR" === n || "LI" === n) && (a[o] = cc11001100_hook("a[o]", "\n", "assign"), i[o << 1] = cc11001100_hook("i[o << 1]", s++, "assign"), i[o++ << 1 | 1] = cc11001100_hook("i[o++ << 1 | 1]", e, "assign"));
          break;
        case 3:
        case 4:
          n = cc11001100_hook("n", e.nodeValue, "assign"), n.length && (n = cc11001100_hook("n", l ? n.replace(/\r\n?/g, "\n") : n.replace(/[\t\n\r ]+/g, " "), "assign"), a[o] = cc11001100_hook("a[o]", n, "assign"), i[o << 1] = cc11001100_hook("i[o << 1]", s, "assign"), s += cc11001100_hook("s", n.length, "assign"), i[o++ << 1 | 1] = cc11001100_hook("i[o++ << 1 | 1]", e, "assign"));
      }
    }
    var n,
      r = cc11001100_hook("r", /(?:^|\s)nocode(?:\s|$)/, "var-init"),
      a = cc11001100_hook("a", [], "var-init"),
      s = cc11001100_hook("s", 0, "var-init"),
      i = cc11001100_hook("i", [], "var-init"),
      o = cc11001100_hook("o", 0, "var-init");
    e.currentStyle ? n = cc11001100_hook("n", e.currentStyle.whiteSpace, "assign") : window.getComputedStyle && (n = cc11001100_hook("n", document.defaultView.getComputedStyle(e, q).getPropertyValue("white-space"), "assign"));
    var l = cc11001100_hook("l", n && "pre" === n.substring(0, 3), "var-init");
    return t(e), {
      a: cc11001100_hook("a", a.join("").replace(/\n$/, ""), "object-key-init"),
      c: cc11001100_hook("c", i, "object-key-init")
    };
  }
  function n(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    t && (e = cc11001100_hook("e", {
      a: cc11001100_hook("a", t, "object-key-init"),
      d: cc11001100_hook("d", e, "object-key-init")
    }, "assign"), n(e), r.push.apply(r, e.e));
  }
  function r(t, r) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    function a(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t = cc11001100_hook("t", e.d, "var-init"), c = cc11001100_hook("c", [t, "pln"], "var-init"), u = cc11001100_hook("u", 0, "var-init"), d = cc11001100_hook("d", e.a.match(s) || [], "var-init"), p = cc11001100_hook("p", {}, "var-init"), h = cc11001100_hook("h", 0, "var-init"), f = cc11001100_hook("f", d.length, "var-init"); f > h; ++h) {
        var g,
          m = cc11001100_hook("m", d[h], "var-init"),
          y = cc11001100_hook("y", p[m], "var-init"),
          v = cc11001100_hook("v", void 0, "var-init");
        if ("string" == typeof y) g = cc11001100_hook("g", !1, "assign");else {
          var w = cc11001100_hook("w", i[m.charAt(0)], "var-init");
          if (w) v = cc11001100_hook("v", m.match(w[1]), "assign"), y = cc11001100_hook("y", w[0], "assign");else {
            for (g = cc11001100_hook("g", 0, "assign"); l > g; ++g) if (w = cc11001100_hook("w", r[g], "assign"), v = cc11001100_hook("v", m.match(w[1]), "assign")) {
              y = cc11001100_hook("y", w[0], "assign");
              break;
            }
            v || (y = cc11001100_hook("y", "pln", "assign"));
          }
          !(g = cc11001100_hook("g", y.length >= 5 && "lang-" === y.substring(0, 5), "assign")) || v && "string" == typeof v[1] || (g = cc11001100_hook("g", !1, "assign"), y = cc11001100_hook("y", "src", "assign")), g || (p[m] = cc11001100_hook("p[m]", y, "assign"));
        }
        if (w = cc11001100_hook("w", u, "assign"), u += cc11001100_hook("u", m.length, "assign"), g) {
          g = cc11001100_hook("g", v[1], "assign");
          var b = cc11001100_hook("b", m.indexOf(g), "var-init"),
            S = cc11001100_hook("S", b + g.length, "var-init");
          v[2] && (S = cc11001100_hook("S", m.length - v[2].length, "assign"), b = cc11001100_hook("b", S - g.length, "assign")), y = cc11001100_hook("y", y.substring(5), "assign"), n(t + w, m.substring(0, b), a, c), n(t + w + b, g, o(y, g), c), n(t + w + S, m.substring(S), a, c);
        } else c.push(t + w, y);
      }
      e.e = cc11001100_hook("e.e", c, "assign");
    }
    var s,
      i = cc11001100_hook("i", {}, "var-init");
    !function () {
      for (var n = cc11001100_hook("n", t.concat(r), "var-init"), a = cc11001100_hook("a", [], "var-init"), o = cc11001100_hook("o", {}, "var-init"), l = cc11001100_hook("l", 0, "var-init"), c = cc11001100_hook("c", n.length, "var-init"); c > l; ++l) {
        var u = cc11001100_hook("u", n[l], "var-init"),
          d = cc11001100_hook("d", u[3], "var-init");
        if (d) for (var p = cc11001100_hook("p", d.length, "var-init"); --p >= 0;) i[d.charAt(p)] = cc11001100_hook("i[d.charAt(p)]", u, "assign");
        u = cc11001100_hook("u", u[1], "assign"), d = cc11001100_hook("d", "" + u, "assign"), o.hasOwnProperty(d) || (a.push(u), o[d] = cc11001100_hook("o[d]", q, "assign"));
      }
      a.push(/[\S\s]/), s = cc11001100_hook("s", e(a), "assign");
    }();
    var l = cc11001100_hook("l", r.length, "var-init");
    return a;
  }
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init"),
      n = cc11001100_hook("n", [], "var-init");
    e.tripleQuotedStrings ? t.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : e.multiLineStrings ? t.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : t.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]), e.verbatimStrings && n.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
    var a = cc11001100_hook("a", e.hashComments, "var-init");
    return a && (e.cStyleComments ? (a > 1 ? t.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : t.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), n.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q])) : t.push(["com", /^#[^\n\r]*/, q, "#"])), e.cStyleComments && (n.push(["com", /^\/\/[^\n\r]*/, q]), n.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q])), e.regexLiterals && n.push(["lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]), (a = cc11001100_hook("a", e.types, "assign")) && n.push(["typ", a]), e = cc11001100_hook("e", ("" + e.keywords).replace(/^ | $/g, ""), "assign"), e.length && n.push(["kwd", RegExp("^(?:" + e.replace(/[\s,]+/g, "|") + ")\\b"), q]), t.push(["pln", /^\s+/, q, " \r\n	 "]), n.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", /^.[^\s\w"-$'./@\\`]*/, q]), r(t, n);
  }
  function s(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    function n(e) {
      cc11001100_hook("e", e, "function-parameter");
      switch (e.nodeType) {
        case 1:
          if (s.test(e.className)) break;
          if ("BR" === e.nodeName) r(e), e.parentNode && e.parentNode.removeChild(e);else for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) n(e);
          break;
        case 3:
        case 4:
          if (l) {
            var t = cc11001100_hook("t", e.nodeValue, "var-init"),
              a = cc11001100_hook("a", t.match(i), "var-init");
            if (a) {
              var c = cc11001100_hook("c", t.substring(0, a.index), "var-init");
              e.nodeValue = cc11001100_hook("e.nodeValue", c, "assign"), (t = cc11001100_hook("t", t.substring(a.index + a[0].length), "assign")) && e.parentNode.insertBefore(o.createTextNode(t), e.nextSibling), r(e), c || e.parentNode.removeChild(e);
            }
          }
      }
    }
    function r(e) {
      cc11001100_hook("e", e, "function-parameter");
      function t(e, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var r = cc11001100_hook("r", n ? e.cloneNode(!1) : e, "var-init"),
          a = cc11001100_hook("a", e.parentNode, "var-init");
        if (a) {
          var a = cc11001100_hook("a", t(a, 1), "var-init"),
            s = cc11001100_hook("s", e.nextSibling, "var-init");
          a.appendChild(r);
          for (var i = cc11001100_hook("i", s, "var-init"); i; i = cc11001100_hook("i", s, "assign")) s = cc11001100_hook("s", i.nextSibling, "assign"), a.appendChild(i);
        }
        return r;
      }
      for (; !e.nextSibling;) if (e = cc11001100_hook("e", e.parentNode, "assign"), !e) return;
      for (var n, e = cc11001100_hook("e", t(e.nextSibling, 0), "var-init"); (n = cc11001100_hook("n", e.parentNode, "assign")) && 1 === n.nodeType;) e = cc11001100_hook("e", n, "assign");
      c.push(e);
    }
    var a,
      s = cc11001100_hook("s", /(?:^|\s)nocode(?:\s|$)/, "var-init"),
      i = cc11001100_hook("i", /\r\n?|\n/, "var-init"),
      o = cc11001100_hook("o", e.ownerDocument, "var-init");
    e.currentStyle ? a = cc11001100_hook("a", e.currentStyle.whiteSpace, "assign") : window.getComputedStyle && (a = cc11001100_hook("a", o.defaultView.getComputedStyle(e, q).getPropertyValue("white-space"), "assign"));
    var l = cc11001100_hook("l", a && "pre" === a.substring(0, 3), "var-init");
    for (a = cc11001100_hook("a", o.createElement("LI"), "assign"); e.firstChild;) a.appendChild(e.firstChild);
    for (var c = cc11001100_hook("c", [a], "var-init"), u = cc11001100_hook("u", 0, "var-init"); u < c.length; ++u) n(c[u]);
    t === (0 | t) && c[0].setAttribute("value", t);
    var d = cc11001100_hook("d", o.createElement("OL"), "var-init");
    d.className = cc11001100_hook("d.className", "linenums", "assign");
    for (var p = cc11001100_hook("p", Math.max(0, t - 1 | 0) || 0, "var-init"), u = cc11001100_hook("u", 0, "var-init"), h = cc11001100_hook("h", c.length, "var-init"); h > u; ++u) a = cc11001100_hook("a", c[u], "assign"), a.className = cc11001100_hook("a.className", "L" + (u + p) % 10, "assign"), a.firstChild || a.appendChild(o.createTextNode(" ")), d.appendChild(a);
    e.appendChild(d);
  }
  function i(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", t.length, "var-init"); --n >= 0;) {
      var r = cc11001100_hook("r", t[n], "var-init");
      w.hasOwnProperty(r) ? window.console && console.warn("cannot override language handler %s", r) : w[r] = cc11001100_hook("w[r]", e, "assign");
    }
  }
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e && w.hasOwnProperty(e) || (e = cc11001100_hook("e", /^\s*</.test(t) ? "default-markup" : "default-code", "assign")), w[e];
  }
  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    var n = cc11001100_hook("n", e.g, "var-init");
    try {
      var r = cc11001100_hook("r", t(e.h), "var-init"),
        a = cc11001100_hook("a", r.a, "var-init");
      e.a = cc11001100_hook("e.a", a, "assign"), e.c = cc11001100_hook("e.c", r.c, "assign"), e.d = cc11001100_hook("e.d", 0, "assign"), o(n, a)(e);
      var s = cc11001100_hook("s", /\bMSIE\b/.test(navigator.userAgent), "var-init"),
        n = cc11001100_hook("n", /\n/g, "var-init"),
        i = cc11001100_hook("i", e.a, "var-init"),
        l = cc11001100_hook("l", i.length, "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        c = cc11001100_hook("c", e.c, "var-init"),
        u = cc11001100_hook("u", c.length, "var-init"),
        a = cc11001100_hook("a", 0, "var-init"),
        d = cc11001100_hook("d", e.e, "var-init"),
        p = cc11001100_hook("p", d.length, "var-init"),
        e = cc11001100_hook("e", 0, "var-init");
      d[p] = cc11001100_hook("d[p]", l, "assign");
      var h, f;
      for (f = cc11001100_hook("f", h = cc11001100_hook("h", 0, "assign"), "assign"); p > f;) d[f] !== d[f + 2] ? (d[h++] = cc11001100_hook("d[h++]", d[f++], "assign"), d[h++] = cc11001100_hook("d[h++]", d[f++], "assign")) : f += cc11001100_hook("f", 2, "assign");
      for (p = cc11001100_hook("p", h, "assign"), f = cc11001100_hook("f", h = cc11001100_hook("h", 0, "assign"), "assign"); p > f;) {
        for (var g = cc11001100_hook("g", d[f], "var-init"), m = cc11001100_hook("m", d[f + 1], "var-init"), y = cc11001100_hook("y", f + 2, "var-init"); p >= y + 2 && d[y + 1] === m;) y += cc11001100_hook("y", 2, "assign");
        d[h++] = cc11001100_hook("d[h++]", g, "assign"), d[h++] = cc11001100_hook("d[h++]", m, "assign"), f = cc11001100_hook("f", y, "assign");
      }
      for (d.length = cc11001100_hook("d.length", h, "assign"); u > a;) {
        var v,
          w = cc11001100_hook("w", c[a + 2] || l, "var-init"),
          b = cc11001100_hook("b", d[e + 2] || l, "var-init"),
          y = cc11001100_hook("y", Math.min(w, b), "var-init"),
          S = cc11001100_hook("S", c[a + 1], "var-init");
        if (1 !== S.nodeType && (v = cc11001100_hook("v", i.substring(r, y), "assign"))) {
          s && (v = cc11001100_hook("v", v.replace(n, "\r"), "assign")), S.nodeValue = cc11001100_hook("S.nodeValue", v, "assign");
          var x = cc11001100_hook("x", S.ownerDocument, "var-init"),
            N = cc11001100_hook("N", x.createElement("SPAN"), "var-init");
          N.className = cc11001100_hook("N.className", d[e + 1], "assign");
          var C = cc11001100_hook("C", S.parentNode, "var-init");
          C.replaceChild(N, S), N.appendChild(S), w > r && (c[a + 1] = cc11001100_hook("c[a + 1]", S = cc11001100_hook("S", x.createTextNode(i.substring(y, w)), "assign"), "assign"), C.insertBefore(S, N.nextSibling));
        }
        r = cc11001100_hook("r", y, "assign"), r >= w && (a += cc11001100_hook("a", 2, "assign")), r >= b && (e += cc11001100_hook("e", 2, "assign"));
      }
    } catch (k) {
      "console" in window && console.log(k && k.stack ? k.stack : k);
    }
  }
  var c = cc11001100_hook("c", ["break,continue,do,else,for,if,return,while"], "var-init"),
    u = cc11001100_hook("u", [[c, "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"], "var-init"),
    d = cc11001100_hook("d", [u, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"], "var-init"),
    p = cc11001100_hook("p", [u, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"], "var-init"),
    h = cc11001100_hook("h", [p, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"], "var-init"),
    u = cc11001100_hook("u", [u, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"], "var-init"),
    f = cc11001100_hook("f", [c, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"], "var-init"),
    g = cc11001100_hook("g", [c, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"], "var-init"),
    c = cc11001100_hook("c", [c, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"], "var-init"),
    m = cc11001100_hook("m", /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/, "var-init"),
    y = cc11001100_hook("y", /\S/, "var-init"),
    v = cc11001100_hook("v", a({
      keywords: cc11001100_hook("keywords", [d, h, u, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" + f, g, c], "object-key-init"),
      hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
      cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
      multiLineStrings: cc11001100_hook("multiLineStrings", !0, "object-key-init"),
      regexLiterals: cc11001100_hook("regexLiterals", !0, "object-key-init")
    }), "var-init"),
    w = cc11001100_hook("w", {}, "var-init");
  i(v, ["default-code"]), i(r([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), i(r([["pln", /^\s+/, q, " 	\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]), i(r([], [["atv", /^[\S\s]+/]]), ["uq.val"]), i(a({
    keywords: cc11001100_hook("keywords", d, "object-key-init"),
    hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
    cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
    types: cc11001100_hook("types", m, "object-key-init")
  }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), i(a({
    keywords: cc11001100_hook("keywords", "null,true,false", "object-key-init")
  }), ["json"]), i(a({
    keywords: cc11001100_hook("keywords", h, "object-key-init"),
    hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
    cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
    verbatimStrings: cc11001100_hook("verbatimStrings", !0, "object-key-init"),
    types: cc11001100_hook("types", m, "object-key-init")
  }), ["cs"]), i(a({
    keywords: cc11001100_hook("keywords", p, "object-key-init"),
    cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init")
  }), ["java"]), i(a({
    keywords: cc11001100_hook("keywords", c, "object-key-init"),
    hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
    multiLineStrings: cc11001100_hook("multiLineStrings", !0, "object-key-init")
  }), ["bsh", "csh", "sh"]), i(a({
    keywords: cc11001100_hook("keywords", f, "object-key-init"),
    hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
    multiLineStrings: cc11001100_hook("multiLineStrings", !0, "object-key-init"),
    tripleQuotedStrings: cc11001100_hook("tripleQuotedStrings", !0, "object-key-init")
  }), ["cv", "py"]), i(a({
    keywords: cc11001100_hook("keywords", "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", "object-key-init"),
    hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
    multiLineStrings: cc11001100_hook("multiLineStrings", !0, "object-key-init"),
    regexLiterals: cc11001100_hook("regexLiterals", !0, "object-key-init")
  }), ["perl", "pl", "pm"]), i(a({
    keywords: cc11001100_hook("keywords", g, "object-key-init"),
    hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
    multiLineStrings: cc11001100_hook("multiLineStrings", !0, "object-key-init"),
    regexLiterals: cc11001100_hook("regexLiterals", !0, "object-key-init")
  }), ["rb"]), i(a({
    keywords: cc11001100_hook("keywords", u, "object-key-init"),
    cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
    regexLiterals: cc11001100_hook("regexLiterals", !0, "object-key-init")
  }), ["js"]), i(a({
    keywords: cc11001100_hook("keywords", "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes", "object-key-init"),
    hashComments: cc11001100_hook("hashComments", 3, "object-key-init"),
    cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
    multilineStrings: cc11001100_hook("multilineStrings", !0, "object-key-init"),
    tripleQuotedStrings: cc11001100_hook("tripleQuotedStrings", !0, "object-key-init"),
    regexLiterals: cc11001100_hook("regexLiterals", !0, "object-key-init")
  }), ["coffee"]), i(r([], [["str", /^[\S\s]+/]]), ["regex"]), window.prettyPrintOne = cc11001100_hook("window.prettyPrintOne", function (e, t, n) {
    var r = cc11001100_hook("r", document.createElement("PRE"), "var-init");
    return r.innerHTML = cc11001100_hook("r.innerHTML", e, "assign"), n && s(r, n), l({
      g: cc11001100_hook("g", t, "object-key-init"),
      i: cc11001100_hook("i", n, "object-key-init"),
      h: cc11001100_hook("h", r, "object-key-init")
    }), r.innerHTML;
  }, "assign"), window.prettyPrint = cc11001100_hook("window.prettyPrint", function (e) {
    function t() {
      for (var n = cc11001100_hook("n", window.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : 1 / 0, "var-init"); d < r.length && c.now() < n; d++) {
        var a = cc11001100_hook("a", r[d], "var-init"),
          i = cc11001100_hook("i", a.className, "var-init");
        if (i.indexOf("prettyprint") >= 0) {
          var o,
            h,
            i = cc11001100_hook("i", i.match(p), "var-init");
          if (h = cc11001100_hook("h", !i, "assign")) {
            h = cc11001100_hook("h", a, "assign");
            for (var f = cc11001100_hook("f", void 0, "var-init"), g = cc11001100_hook("g", h.firstChild, "var-init"); g; g = cc11001100_hook("g", g.nextSibling, "assign")) var m = cc11001100_hook("m", g.nodeType, "var-init"), f = cc11001100_hook("f", 1 === m ? f ? h : g : 3 === m && y.test(g.nodeValue) ? h : f, "var-init");
            h = cc11001100_hook("h", (o = cc11001100_hook("o", f === h ? void 0 : f, "assign")) && "CODE" === o.tagName, "assign");
          }
          for (h && (i = cc11001100_hook("i", o.className.match(p), "assign")), i && (i = cc11001100_hook("i", i[1], "assign")), h = cc11001100_hook("h", !1, "assign"), f = cc11001100_hook("f", a.parentNode, "assign"); f; f = cc11001100_hook("f", f.parentNode, "assign")) if (("pre" === f.tagName || "code" === f.tagName || "xmp" === f.tagName) && f.className && f.className.indexOf("prettyprint") >= 0) {
            h = cc11001100_hook("h", !0, "assign");
            break;
          }
          h || ((h = cc11001100_hook("h", (h = cc11001100_hook("h", a.className.match(/\blinenums\b(?::(\d+))?/), "assign")) ? h[1] && h[1].length ? +h[1] : !0 : !1, "assign")) && s(a, h), u = cc11001100_hook("u", {
            g: cc11001100_hook("g", i, "object-key-init"),
            h: cc11001100_hook("h", a, "object-key-init"),
            i: cc11001100_hook("i", h, "object-key-init")
          }, "assign"), l(u));
        }
      }
      d < r.length ? setTimeout(t, 250) : e && e();
    }
    for (var n = cc11001100_hook("n", [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], "var-init"), r = cc11001100_hook("r", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < n.length; ++a) for (var i = cc11001100_hook("i", 0, "var-init"), o = cc11001100_hook("o", n[a].length, "var-init"); o > i; ++i) r.push(n[a][i]);
    var n = cc11001100_hook("n", q, "var-init"),
      c = cc11001100_hook("c", Date, "var-init");
    c.now || (c = cc11001100_hook("c", {
      now: function () {
        return +new Date();
      }
    }, "assign"));
    var u,
      d = cc11001100_hook("d", 0, "var-init"),
      p = cc11001100_hook("p", /\blang(?:uage)?-([\w.]+)(?!\S)/, "var-init");
    t();
  }, "assign"), window.PR = cc11001100_hook("window.PR", {
    createSimpleLexer: cc11001100_hook("createSimpleLexer", r, "object-key-init"),
    registerLangHandler: cc11001100_hook("registerLangHandler", i, "object-key-init"),
    sourceDecorator: cc11001100_hook("sourceDecorator", a, "object-key-init"),
    PR_ATTRIB_NAME: cc11001100_hook("PR_ATTRIB_NAME", "atn", "object-key-init"),
    PR_ATTRIB_VALUE: cc11001100_hook("PR_ATTRIB_VALUE", "atv", "object-key-init"),
    PR_COMMENT: cc11001100_hook("PR_COMMENT", "com", "object-key-init"),
    PR_DECLARATION: cc11001100_hook("PR_DECLARATION", "dec", "object-key-init"),
    PR_KEYWORD: cc11001100_hook("PR_KEYWORD", "kwd", "object-key-init"),
    PR_LITERAL: cc11001100_hook("PR_LITERAL", "lit", "object-key-init"),
    PR_NOCODE: cc11001100_hook("PR_NOCODE", "nocode", "object-key-init"),
    PR_PLAIN: cc11001100_hook("PR_PLAIN", "pln", "object-key-init"),
    PR_PUNCTUATION: cc11001100_hook("PR_PUNCTUATION", "pun", "object-key-init"),
    PR_SOURCE: cc11001100_hook("PR_SOURCE", "src", "object-key-init"),
    PR_STRING: cc11001100_hook("PR_STRING", "str", "object-key-init"),
    PR_TAG: cc11001100_hook("PR_TAG", "tag", "object-key-init"),
    PR_TYPE: cc11001100_hook("PR_TYPE", "typ", "object-key-init")
  }, "assign");
}();
var toggleIndex = function () {
  var t = cc11001100_hook("t", $(".kp-index"), "var-init"),
    e = cc11001100_hook("e", t.offset(), "var-init");
  e.left < 0 ? t.css("left", 0) : t.css("left", "-100%");
};
$(function () {
  $("pre").each(function () {
    $(this).addClass("prettyprint");
  }), prettyPrint();
}), Array.prototype.shuffle = cc11001100_hook("Array.prototype.shuffle", function (t) {
  for (var e, r, n = cc11001100_hook("n", this, "var-init"), f = cc11001100_hook("f", n.slice(0), "var-init"), o = cc11001100_hook("o", n.length, "var-init"), s = cc11001100_hook("s", o - t, "var-init"); o-- > s;) r = cc11001100_hook("r", Math.floor((o + 1) * Math.random()), "assign"), e = cc11001100_hook("e", f[r], "assign"), f[r] = cc11001100_hook("f[r]", f[o], "assign"), f[o] = cc11001100_hook("f[o]", e, "assign");
  return f.slice(s);
}, "assign");