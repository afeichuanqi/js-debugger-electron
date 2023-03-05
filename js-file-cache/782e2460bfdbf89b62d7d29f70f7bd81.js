!function () {
  var s,
    i,
    c,
    a,
    o = cc11001100_hook("o", {
      frameRate: cc11001100_hook("frameRate", 150, "object-key-init"),
      animationTime: cc11001100_hook("animationTime", 400, "object-key-init"),
      stepSize: cc11001100_hook("stepSize", 100, "object-key-init"),
      pulseAlgorithm: cc11001100_hook("pulseAlgorithm", !0, "object-key-init"),
      pulseScale: cc11001100_hook("pulseScale", 4, "object-key-init"),
      pulseNormalize: cc11001100_hook("pulseNormalize", 1, "object-key-init"),
      accelerationDelta: cc11001100_hook("accelerationDelta", 50, "object-key-init"),
      accelerationMax: cc11001100_hook("accelerationMax", 3, "object-key-init"),
      keyboardSupport: cc11001100_hook("keyboardSupport", !0, "object-key-init"),
      arrowScroll: cc11001100_hook("arrowScroll", 50, "object-key-init"),
      fixedBackground: cc11001100_hook("fixedBackground", !0, "object-key-init"),
      excluded: cc11001100_hook("excluded", "", "object-key-init")
    }, "var-init"),
    p = cc11001100_hook("p", o, "var-init"),
    u = cc11001100_hook("u", !1, "var-init"),
    d = cc11001100_hook("d", !1, "var-init"),
    n = cc11001100_hook("n", {
      x: cc11001100_hook("x", 0, "object-key-init"),
      y: cc11001100_hook("y", 0, "object-key-init")
    }, "var-init"),
    f = cc11001100_hook("f", !1, "var-init"),
    m = cc11001100_hook("m", document.documentElement, "var-init"),
    l = cc11001100_hook("l", [], "var-init"),
    h = cc11001100_hook("h", /^Mac/.test(navigator.platform), "var-init"),
    w = cc11001100_hook("w", {
      left: cc11001100_hook("left", 37, "object-key-init"),
      up: cc11001100_hook("up", 38, "object-key-init"),
      right: cc11001100_hook("right", 39, "object-key-init"),
      down: cc11001100_hook("down", 40, "object-key-init"),
      spacebar: cc11001100_hook("spacebar", 32, "object-key-init"),
      pageup: cc11001100_hook("pageup", 33, "object-key-init"),
      pagedown: cc11001100_hook("pagedown", 34, "object-key-init"),
      end: cc11001100_hook("end", 35, "object-key-init"),
      home: cc11001100_hook("home", 36, "object-key-init")
    }, "var-init"),
    v = cc11001100_hook("v", {
      37: cc11001100_hook(37, 1, "object-key-init"),
      38: cc11001100_hook(38, 1, "object-key-init"),
      39: cc11001100_hook(39, 1, "object-key-init"),
      40: cc11001100_hook(40, 1, "object-key-init")
    }, "var-init");
  function y() {
    if (!f && document.body) {
      f = cc11001100_hook("f", !0, "assign");
      var e = cc11001100_hook("e", document.body, "var-init"),
        t = cc11001100_hook("t", document.documentElement, "var-init"),
        o = cc11001100_hook("o", window.innerHeight, "var-init"),
        n = cc11001100_hook("n", e.scrollHeight, "var-init");
      if (m = cc11001100_hook("m", 0 <= document.compatMode.indexOf("CSS") ? t : e, "assign"), s = cc11001100_hook("s", e, "assign"), p.keyboardSupport && Y("keydown", x), top != self) d = cc11001100_hook("d", !0, "assign");else if (Q && o < n && (e.offsetHeight <= o || t.offsetHeight <= o)) {
        var r,
          a = cc11001100_hook("a", document.createElement("div"), "var-init");
        a.style.cssText = cc11001100_hook("a.style.cssText", "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + m.scrollHeight + "px", "assign"), document.body.appendChild(a), c = cc11001100_hook("c", function () {
          r = cc11001100_hook("r", r || setTimeout(function () {
            u || (a.style.height = cc11001100_hook("a.style.height", "0", "assign"), a.style.height = cc11001100_hook("a.style.height", m.scrollHeight + "px", "assign"), r = cc11001100_hook("r", null, "assign"));
          }, 500), "assign");
        }, "assign"), setTimeout(c, 10), Y("resize", c);
        if ((i = cc11001100_hook("i", new R(c), "assign")).observe(e, {
          attributes: cc11001100_hook("attributes", !0, "object-key-init"),
          childList: cc11001100_hook("childList", !0, "object-key-init"),
          characterData: cc11001100_hook("characterData", !1, "object-key-init")
        }), m.offsetHeight <= o) {
          var l = cc11001100_hook("l", document.createElement("div"), "var-init");
          l.style.clear = cc11001100_hook("l.style.clear", "both", "assign"), e.appendChild(l);
        }
      }
      p.fixedBackground || u || (e.style.backgroundAttachment = cc11001100_hook("e.style.backgroundAttachment", "scroll", "assign"), t.style.backgroundAttachment = cc11001100_hook("t.style.backgroundAttachment", "scroll", "assign"));
    }
  }
  var b = cc11001100_hook("b", [], "var-init"),
    g = cc11001100_hook("g", !1, "var-init"),
    r = cc11001100_hook("r", Date.now(), "var-init");
  function S(d, f, m) {
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("m", m, "function-parameter");
    if (function (e, t) {
      e = cc11001100_hook("e", 0 < e ? 1 : -1, "assign"), t = cc11001100_hook("t", 0 < t ? 1 : -1, "assign"), n.x === e && n.y === t || (n.x = cc11001100_hook("n.x", e, "assign"), n.y = cc11001100_hook("n.y", t, "assign"), b = cc11001100_hook("b", [], "assign"), r = cc11001100_hook("r", 0, "assign"));
    }(f, m), 1 != p.accelerationMax) {
      var e = cc11001100_hook("e", Date.now() - r, "var-init");
      if (e < p.accelerationDelta) {
        var t = cc11001100_hook("t", (1 + 50 / e) / 2, "var-init");
        1 < t && (t = cc11001100_hook("t", Math.min(t, p.accelerationMax), "assign"), f *= cc11001100_hook("f", t, "assign"), m *= cc11001100_hook("m", t, "assign"));
      }
      r = cc11001100_hook("r", Date.now(), "assign");
    }
    if (b.push({
      x: cc11001100_hook("x", f, "object-key-init"),
      y: cc11001100_hook("y", m, "object-key-init"),
      lastX: cc11001100_hook("lastX", f < 0 ? .99 : -.99, "object-key-init"),
      lastY: cc11001100_hook("lastY", m < 0 ? .99 : -.99, "object-key-init"),
      start: cc11001100_hook("start", Date.now(), "object-key-init")
    }), !g) {
      var o = cc11001100_hook("o", q(), "var-init"),
        h = cc11001100_hook("h", d === o || d === document.body, "var-init");
      null == d.$scrollBehavior && function (e) {
        var t = cc11001100_hook("t", M(e), "var-init");
        if (null == B[t]) {
          var o = cc11001100_hook("o", getComputedStyle(e, "")["scroll-behavior"], "var-init");
          B[t] = cc11001100_hook("B[t]", "smooth" == o, "assign");
        }
        return B[t];
      }(d) && (d.$scrollBehavior = cc11001100_hook("d.$scrollBehavior", d.style.scrollBehavior, "assign"), d.style.scrollBehavior = cc11001100_hook("d.style.scrollBehavior", "auto", "assign"));
      var w = function (e) {
        for (var t = cc11001100_hook("t", Date.now(), "var-init"), o = cc11001100_hook("o", 0, "var-init"), n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < b.length; r++) {
          var a = cc11001100_hook("a", b[r], "var-init"),
            l = cc11001100_hook("l", t - a.start, "var-init"),
            i = cc11001100_hook("i", l >= p.animationTime, "var-init"),
            c = cc11001100_hook("c", i ? 1 : l / p.animationTime, "var-init");
          p.pulseAlgorithm && (c = cc11001100_hook("c", F(c), "assign"));
          var s = cc11001100_hook("s", a.x * c - a.lastX >> 0, "var-init"),
            u = cc11001100_hook("u", a.y * c - a.lastY >> 0, "var-init");
          o += cc11001100_hook("o", s, "assign"), n += cc11001100_hook("n", u, "assign"), a.lastX += cc11001100_hook("a.lastX", s, "assign"), a.lastY += cc11001100_hook("a.lastY", u, "assign"), i && (b.splice(r, 1), r--);
        }
        h ? window.scrollBy(o, n) : (o && (d.scrollLeft += cc11001100_hook("d.scrollLeft", o, "assign")), n && (d.scrollTop += cc11001100_hook("d.scrollTop", n, "assign"))), f || m || (b = cc11001100_hook("b", [], "assign")), b.length ? j(w, d, 1e3 / p.frameRate + 1) : (g = cc11001100_hook("g", !1, "assign"), null != d.$scrollBehavior && (d.style.scrollBehavior = cc11001100_hook("d.style.scrollBehavior", d.$scrollBehavior, "assign"), d.$scrollBehavior = cc11001100_hook("d.$scrollBehavior", null, "assign")));
      };
      j(w, d, 0), g = cc11001100_hook("g", !0, "assign");
    }
  }
  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    f || y();
    var t = cc11001100_hook("t", e.target, "var-init");
    if (e.defaultPrevented || e.ctrlKey) return !0;
    if (N(s, "embed") || N(t, "embed") && /\.pdf/i.test(t.src) || N(s, "object") || t.shadowRoot) return !0;
    var o = cc11001100_hook("o", -e.wheelDeltaX || e.deltaX || 0, "var-init"),
      n = cc11001100_hook("n", -e.wheelDeltaY || e.deltaY || 0, "var-init");
    h && (e.wheelDeltaX && K(e.wheelDeltaX, 120) && (o = cc11001100_hook("o", e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120, "assign")), e.wheelDeltaY && K(e.wheelDeltaY, 120) && (n = cc11001100_hook("n", e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120, "assign"))), o || n || (n = cc11001100_hook("n", -e.wheelDelta || 0, "assign")), 1 === e.deltaMode && (o *= cc11001100_hook("o", 40, "assign"), n *= cc11001100_hook("n", 40, "assign"));
    var r = cc11001100_hook("r", z(t), "var-init");
    return r ? !!function (e) {
      if (!e) return;
      l.length || (l = cc11001100_hook("l", [e, e, e], "assign"));
      e = cc11001100_hook("e", Math.abs(e), "assign"), l.push(e), l.shift(), clearTimeout(a), a = cc11001100_hook("a", setTimeout(function () {
        try {
          localStorage.SS_deltaBuffer = cc11001100_hook("localStorage.SS_deltaBuffer", l.join(","), "assign");
        } catch (e) {}
      }, 1e3), "assign");
      var t = cc11001100_hook("t", 120 < e && P(e), "var-init"),
        o = cc11001100_hook("o", !P(120) && !P(100) && !t, "var-init");
      return e < 50 || o;
    }(n) || (1.2 < Math.abs(o) && (o *= cc11001100_hook("o", p.stepSize / 120, "assign")), 1.2 < Math.abs(n) && (n *= cc11001100_hook("n", p.stepSize / 120, "assign")), S(r, o, n), e.preventDefault(), void C()) : !d || !W || (Object.defineProperty(e, "target", {
      value: cc11001100_hook("value", window.frameElement, "object-key-init")
    }), parent.wheel(e));
  }
  function x(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.target, "var-init"),
      o = cc11001100_hook("o", e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== w.spacebar, "var-init");
    document.body.contains(s) || (s = cc11001100_hook("s", document.activeElement, "assign"));
    var n = cc11001100_hook("n", /^(button|submit|radio|checkbox|file|color|image)$/i, "var-init");
    if (e.defaultPrevented || /^(textarea|select|embed|object)$/i.test(t.nodeName) || N(t, "input") && !n.test(t.type) || N(s, "video") || function (e) {
      var t = cc11001100_hook("t", e.target, "var-init"),
        o = cc11001100_hook("o", !1, "var-init");
      if (-1 != document.URL.indexOf("www.youtube.com/watch")) do {
        if (o = cc11001100_hook("o", t.classList && t.classList.contains("html5-video-controls"), "assign")) break;
      } while (t = cc11001100_hook("t", t.parentNode, "assign"));
      return o;
    }(e) || t.isContentEditable || o) return !0;
    if ((N(t, "button") || N(t, "input") && n.test(t.type)) && e.keyCode === w.spacebar) return !0;
    if (N(t, "input") && "radio" == t.type && v[e.keyCode]) return !0;
    var r = cc11001100_hook("r", 0, "var-init"),
      a = cc11001100_hook("a", 0, "var-init"),
      l = cc11001100_hook("l", z(s), "var-init");
    if (!l) return !d || !W || parent.keydown(e);
    var i = cc11001100_hook("i", l.clientHeight, "var-init");
    switch (l == document.body && (i = cc11001100_hook("i", window.innerHeight, "assign")), e.keyCode) {
      case w.up:
        a = cc11001100_hook("a", -p.arrowScroll, "assign");
        break;
      case w.down:
        a = cc11001100_hook("a", p.arrowScroll, "assign");
        break;
      case w.spacebar:
        a = cc11001100_hook("a", -(e.shiftKey ? 1 : -1) * i * .9, "assign");
        break;
      case w.pageup:
        a = cc11001100_hook("a", .9 * -i, "assign");
        break;
      case w.pagedown:
        a = cc11001100_hook("a", .9 * i, "assign");
        break;
      case w.home:
        l == document.body && document.scrollingElement && (l = cc11001100_hook("l", document.scrollingElement, "assign")), a = cc11001100_hook("a", -l.scrollTop, "assign");
        break;
      case w.end:
        var c = cc11001100_hook("c", l.scrollHeight - l.scrollTop - i, "var-init");
        a = cc11001100_hook("a", 0 < c ? 10 + c : 0, "assign");
        break;
      case w.left:
        r = cc11001100_hook("r", -p.arrowScroll, "assign");
        break;
      case w.right:
        r = cc11001100_hook("r", p.arrowScroll, "assign");
        break;
      default:
        return !0;
    }
    S(l, r, a), e.preventDefault(), C();
  }
  function t(e) {
    cc11001100_hook("e", e, "function-parameter");
    s = cc11001100_hook("s", e.target, "assign");
  }
  var k,
    D,
    M = cc11001100_hook("M", (k = cc11001100_hook("k", 0, "assign"), function (e) {
      return e.uniqueID || (e.uniqueID = cc11001100_hook("e.uniqueID", k++, "assign"));
    }), "var-init"),
    E = cc11001100_hook("E", {}, "var-init"),
    T = cc11001100_hook("T", {}, "var-init"),
    B = cc11001100_hook("B", {}, "var-init");
  function C() {
    clearTimeout(D), D = cc11001100_hook("D", setInterval(function () {
      E = cc11001100_hook("E", T = cc11001100_hook("T", B = cc11001100_hook("B", {}, "assign"), "assign"), "assign");
    }, 1e3), "assign");
  }
  function H(e, t, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    for (var n = cc11001100_hook("n", o ? E : T, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); r--;) n[M(e[r])] = cc11001100_hook("n[M(e[r])]", t, "assign");
    return t;
  }
  function z(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init"),
      o = cc11001100_hook("o", document.body, "var-init"),
      n = cc11001100_hook("n", m.scrollHeight, "var-init");
    do {
      var r = cc11001100_hook("r", (!1 ? E : T)[M(e)], "var-init");
      if (r) return H(t, r);
      if (t.push(e), n === e.scrollHeight) {
        var a = cc11001100_hook("a", O(m) && O(o) || X(m), "var-init");
        if (d && L(m) || !d && a) return H(t, q());
      } else if (L(e) && X(e)) return H(t, e);
    } while (e = cc11001100_hook("e", e.parentElement, "assign"));
  }
  function L(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.clientHeight + 10 < e.scrollHeight;
  }
  function O(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
  }
  function X(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", getComputedStyle(e, "").getPropertyValue("overflow-y"), "var-init");
    return "scroll" === t || "auto" === t;
  }
  function Y(e, t, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    window.addEventListener(e, t, o || !1);
  }
  function A(e, t, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    window.removeEventListener(e, t, o || !1);
  }
  function N(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
  }
  if (window.localStorage && localStorage.SS_deltaBuffer) try {
    l = cc11001100_hook("l", localStorage.SS_deltaBuffer.split(","), "assign");
  } catch (e) {}
  function K(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return Math.floor(e / t) == e / t;
  }
  function P(e) {
    cc11001100_hook("e", e, "function-parameter");
    return K(l[0], e) && K(l[1], e) && K(l[2], e);
  }
  var $,
    j = cc11001100_hook("j", window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, o) {
      window.setTimeout(e, o || 1e3 / 60);
    }, "var-init"),
    R = cc11001100_hook("R", window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, "var-init"),
    q = cc11001100_hook("q", ($ = cc11001100_hook("$", document.scrollingElement, "assign"), function () {
      if (!$) {
        var e = cc11001100_hook("e", document.createElement("div"), "var-init");
        e.style.cssText = cc11001100_hook("e.style.cssText", "height:10000px;width:1px;", "assign"), document.body.appendChild(e);
        var t = cc11001100_hook("t", document.body.scrollTop, "var-init");
        document.documentElement.scrollTop, window.scrollBy(0, 3), $ = cc11001100_hook("$", document.body.scrollTop != t ? document.body : document.documentElement, "assign"), window.scrollBy(0, -3), document.body.removeChild(e);
      }
      return $;
    }), "var-init");
  function V(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t;
    return ((e *= cc11001100_hook("e", p.pulseScale, "assign")) < 1 ? e - (1 - Math.exp(-e)) : (e -= cc11001100_hook("e", 1, "assign"), (t = cc11001100_hook("t", Math.exp(-1), "assign")) + (1 - Math.exp(-e)) * (1 - t))) * p.pulseNormalize;
  }
  function F(e) {
    cc11001100_hook("e", e, "function-parameter");
    return 1 <= e ? 1 : e <= 0 ? 0 : (1 == p.pulseNormalize && (p.pulseNormalize /= cc11001100_hook("p.pulseNormalize", V(1), "assign")), V(e));
  }
  var I = cc11001100_hook("I", window.navigator.userAgent, "var-init"),
    _ = cc11001100_hook("_", /Edge/.test(I), "var-init"),
    W = cc11001100_hook("W", /chrome/i.test(I) && !_, "var-init"),
    U = cc11001100_hook("U", /safari/i.test(I) && !_, "var-init"),
    G = cc11001100_hook("G", /mobile/i.test(I), "var-init"),
    J = cc11001100_hook("J", /Windows NT 6.1/i.test(I) && /rv:11/i.test(I), "var-init"),
    Q = cc11001100_hook("Q", U && (/Version\/8/i.test(I) || /Version\/9/i.test(I)), "var-init"),
    Z = cc11001100_hook("Z", (W || U || J) && !G, "var-init"),
    ee = cc11001100_hook("ee", !1, "var-init");
  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
      get: function () {
        ee = cc11001100_hook("ee", !0, "assign");
      }
    }));
  } catch (e) {}
  var te = cc11001100_hook("te", !!ee && {
      passive: cc11001100_hook("passive", !1, "object-key-init")
    }, "var-init"),
    oe = cc11001100_hook("oe", "onwheel" in document.createElement("div") ? "wheel" : "mousewheel", "var-init");
  function ne(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t in e) o.hasOwnProperty(t) && (p[t] = cc11001100_hook("p[t]", e[t], "assign"));
  }
  oe && Z && (Y(oe, e, te), Y("mousedown", t), Y("load", y)), ne.destroy = cc11001100_hook("ne.destroy", function () {
    i && i.disconnect(), A(oe, e), A("mousedown", t), A("keydown", x), A("resize", c), A("load", y);
  }, "assign"), window.SmoothScrollOptions && ne(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
    return ne;
  }) : "object" == typeof exports ? module.exports = cc11001100_hook("module.exports", ne, "assign") : window.SmoothScroll = cc11001100_hook("window.SmoothScroll", ne, "assign");
}();