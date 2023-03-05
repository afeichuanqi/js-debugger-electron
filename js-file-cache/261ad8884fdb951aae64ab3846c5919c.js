var InstantClick = cc11001100_hook("InstantClick", function (c, a) {
  var d,
    n,
    r,
    o,
    l,
    s,
    f,
    u,
    t = cc11001100_hook("t", navigator.userAgent, "var-init"),
    h = cc11001100_hook("h", -1 < t.indexOf(" CriOS/"), "var-init"),
    v = cc11001100_hook("v", "createTouch" in c, "var-init"),
    p = cc11001100_hook("p", {}, "var-init"),
    m = cc11001100_hook("m", !1, "var-init"),
    y = cc11001100_hook("y", !1, "var-init"),
    b = cc11001100_hook("b", !1, "var-init"),
    g = cc11001100_hook("g", !1, "var-init"),
    T = cc11001100_hook("T", {}, "var-init"),
    e = cc11001100_hook("e", !1, "var-init"),
    E = cc11001100_hook("E", !1, "var-init"),
    w = cc11001100_hook("w", [], "var-init"),
    L = cc11001100_hook("L", {
      fetch: cc11001100_hook("fetch", [], "object-key-init"),
      receive: cc11001100_hook("receive", [], "object-key-init"),
      wait: cc11001100_hook("wait", [], "object-key-init"),
      change: cc11001100_hook("change", [], "object-key-init")
    }, "var-init");
  function A(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", t.indexOf("#"), "var-init");
    return e < 0 ? t : t.substr(0, e);
  }
  function x(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (; t && "A" != t.nodeName;) t = cc11001100_hook("t", t.parentNode, "assign");
    return t;
  }
  function k(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", a.protocol + "//" + a.host, "var-init");
    return !(t.target || t.hasAttribute("download") || 0 != t.href.indexOf(e + "/") || -1 < t.href.indexOf("#") && A(t.href) == d || (s ? !function (t) {
      do {
        if (!t.hasAttribute) break;
        if (t.hasAttribute("data-no-instant")) return !1;
        if (t.hasAttribute("data-instant")) return !0;
      } while (t = cc11001100_hook("t", t.parentNode, "assign"));
      return !1;
    }(t) : function (t) {
      do {
        if (!t.hasAttribute) break;
        if (t.hasAttribute("data-instant")) return !1;
        if (t.hasAttribute("data-no-instant")) return !0;
      } while (t = cc11001100_hook("t", t.parentNode, "assign"));
      return !1;
    }(t)));
  }
  function C(t, e, n, i) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    for (var r = cc11001100_hook("r", !1, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < L[t].length; a++) if ("receive" == t) {
      var o = cc11001100_hook("o", L[t][a](e, n, i), "var-init");
      o && ("body" in o && (n = cc11001100_hook("n", o.body, "assign")), "title" in o && (i = cc11001100_hook("i", o.title, "assign")), r = cc11001100_hook("r", o, "assign"));
    } else L[t][a](e, n, i);
    return r;
  }
  function M(t, e, n, i) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    if (c.documentElement.replaceChild(e, c.body), n) {
      history.pushState(null, null, n);
      var r = cc11001100_hook("r", n.indexOf("#"), "var-init"),
        a = cc11001100_hook("a", -1 < r && c.getElementById(n.substr(r + 1)), "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      if (a) for (; a.offsetParent;) o += cc11001100_hook("o", a.offsetTop, "assign"), a = cc11001100_hook("a", a.offsetParent, "assign");
      scrollTo(0, o), d = cc11001100_hook("d", A(n), "assign");
    } else scrollTo(0, i);
    h && c.title == t ? c.title = cc11001100_hook("c.title", t + String.fromCharCode(160), "assign") : c.title = cc11001100_hook("c.title", t, "assign"), I(), K.done(), C("change", !1);
    var s = cc11001100_hook("s", c.createEvent("HTMLEvents"), "var-init");
    s.initEvent("instantclick:newpage", !0, !0), dispatchEvent(s);
  }
  function O() {
    E = cc11001100_hook("E", e = cc11001100_hook("e", !1, "assign"), "assign");
  }
  function H(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (!(o > +new Date() - 500)) {
      var e = cc11001100_hook("e", x(t.target), "var-init");
      e && k(e) && z(e.href);
    }
  }
  function Y(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (!(o > +new Date() - 500)) {
      var e = cc11001100_hook("e", x(t.target), "var-init");
      e && k(e) && (e.addEventListener("mouseout", N), u ? (n = cc11001100_hook("n", e.href, "assign"), r = cc11001100_hook("r", setTimeout(z, u), "assign")) : z(e.href));
    }
  }
  function D(t) {
    cc11001100_hook("t", t, "function-parameter");
    o = cc11001100_hook("o", +new Date(), "assign");
    var e = cc11001100_hook("e", x(t.target), "var-init");
    e && k(e) && (f ? e.removeEventListener("mousedown", H) : e.removeEventListener("mouseover", Y), z(e.href));
  }
  function B(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", x(t.target), "var-init");
    e && k(e) && (1 < t.which || t.metaKey || t.ctrlKey || (t.preventDefault(), W(e.href)));
  }
  function N() {
    if (r) return clearTimeout(r), void (r = cc11001100_hook("r", !1, "assign"));
    e && !E && (l.abort(), O());
  }
  function S() {
    if (!(l.readyState < 4) && 0 != l.status) {
      if (T.ready = cc11001100_hook("T.ready", +new Date() - T.start, "assign"), l.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)) {
        var t = cc11001100_hook("t", c.implementation.createHTMLDocument(""), "var-init");
        t.documentElement.innerHTML = cc11001100_hook("t.documentElement.innerHTML", l.responseText.replace(/<noscript[\s\S]+<\/noscript>/gi, ""), "assign"), y = cc11001100_hook("y", t.title, "assign"), g = cc11001100_hook("g", t.body, "assign");
        var e = cc11001100_hook("e", C("receive", m, g, y), "var-init");
        e && ("body" in e && (g = cc11001100_hook("g", e.body, "assign")), "title" in e && (y = cc11001100_hook("y", e.title, "assign")));
        var n = cc11001100_hook("n", A(m), "var-init");
        p[n] = cc11001100_hook("p[n]", {
          body: cc11001100_hook("body", g, "object-key-init"),
          title: cc11001100_hook("title", y, "object-key-init"),
          scrollY: cc11001100_hook("scrollY", n in p ? p[n].scrollY : 0, "object-key-init")
        }, "assign");
        for (var i, r, a = cc11001100_hook("a", t.head.children, "var-init"), o = cc11001100_hook("o", 0, "var-init"), s = cc11001100_hook("s", a.length - 1, "var-init"); 0 <= s; s--) if ((i = cc11001100_hook("i", a[s], "assign")).hasAttribute("data-instant-track")) {
          r = cc11001100_hook("r", i.getAttribute("href") || i.getAttribute("src") || i.innerHTML, "assign");
          for (var d = cc11001100_hook("d", w.length - 1, "var-init"); 0 <= d; d--) w[d] == r && o++;
        }
        o != w.length && (b = cc11001100_hook("b", !0, "assign"));
      } else b = cc11001100_hook("b", !0, "assign");
      E && (E = cc11001100_hook("E", !1, "assign"), W(m));
    }
  }
  function I(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (c.body.addEventListener("touchstart", D, !0), f ? c.body.addEventListener("mousedown", H, !0) : c.body.addEventListener("mouseover", Y, !0), c.body.addEventListener("click", B, !0), !t) {
      var e,
        n,
        r,
        a,
        o = cc11001100_hook("o", c.body.getElementsByTagName("script"), "var-init");
      for (i = cc11001100_hook("i", 0, "assign"), j = cc11001100_hook("j", o.length, "assign"); i < j; i++) (e = cc11001100_hook("e", o[i], "assign")).hasAttribute("data-no-instant") || (n = cc11001100_hook("n", c.createElement("script"), "assign"), e.src && (n.src = cc11001100_hook("n.src", e.src, "assign")), e.innerHTML && (n.innerHTML = cc11001100_hook("n.innerHTML", e.innerHTML, "assign")), r = cc11001100_hook("r", e.parentNode, "assign"), a = cc11001100_hook("a", e.nextSibling, "assign"), r.removeChild(e), r.insertBefore(n, a));
    }
  }
  function z(t) {
    cc11001100_hook("t", t, "function-parameter");
    !f && "display" in T && +new Date() - (T.start + T.display) < 100 || (r && (clearTimeout(r), r = cc11001100_hook("r", !1, "assign")), t || (t = cc11001100_hook("t", n, "assign")), e && (t == m || E) || (m = cc11001100_hook("m", t, "assign"), b = cc11001100_hook("b", g = cc11001100_hook("g", E = cc11001100_hook("E", !(e = cc11001100_hook("e", !0, "assign")), "assign"), "assign"), "assign"), T = cc11001100_hook("T", {
      start: cc11001100_hook("start", +new Date(), "object-key-init")
    }, "assign"), C("fetch"), l.open("GET", t), l.send()));
  }
  function W(t) {
    cc11001100_hook("t", t, "function-parameter");
    if ("display" in T || (T.display = cc11001100_hook("T.display", +new Date() - T.start, "assign")), r || !e) return r && m && m != t ? void (a.href = cc11001100_hook("a.href", t, "assign")) : (z(t), K.start(0, !0), C("wait"), void (E = cc11001100_hook("E", !0, "assign")));
    if (E) a.href = cc11001100_hook("a.href", t, "assign");else if (b) a.href = cc11001100_hook("a.href", m, "assign");else {
      if (!g) return K.start(0, !0), C("wait"), void (E = cc11001100_hook("E", !0, "assign"));
      p[d].scrollY = cc11001100_hook("p[d].scrollY", pageYOffset, "assign"), O(), M(y, g, m);
    }
  }
  var K = cc11001100_hook("K", function () {
      var r, a, o, n, i;
      function e(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        n = cc11001100_hook("n", t, "assign"), c.getElementById(r.id) && c.body.removeChild(r), r.style.opacity = cc11001100_hook("r.style.opacity", "1", "assign"), c.getElementById(r.id) && c.body.removeChild(r), l(), e && setTimeout(s, 0), clearTimeout(i), i = cc11001100_hook("i", setTimeout(d, 500), "assign");
      }
      function s() {
        n = cc11001100_hook("n", 10, "assign"), l();
      }
      function d() {
        98 <= (n += cc11001100_hook("n", 1 + 2 * Math.random(), "assign")) ? n = cc11001100_hook("n", 98, "assign") : i = cc11001100_hook("i", setTimeout(d, 500), "assign"), l();
      }
      function l() {
        a.style[o] = cc11001100_hook("a.style[o]", "translate(" + n + "%)", "assign"), c.getElementById(r.id) || c.body.appendChild(r);
      }
      function f() {
        r.style.left = cc11001100_hook("r.style.left", pageXOffset + "px", "assign"), r.style.width = cc11001100_hook("r.style.width", innerWidth + "px", "assign"), r.style.top = cc11001100_hook("r.style.top", pageYOffset + "px", "assign");
        var t = cc11001100_hook("t", "orientation" in window && 90 == Math.abs(orientation), "var-init"),
          e = cc11001100_hook("e", innerWidth / screen[t ? "height" : "width"] * 2, "var-init");
        r.style[o] = cc11001100_hook("r.style[o]", "scaleY(" + e + ")", "assign");
      }
      return {
        init: function () {
          (r = cc11001100_hook("r", c.createElement("div"), "assign")).id = cc11001100_hook("(r = c.createElement(\"div\")).id", "instantclick", "assign"), (a = cc11001100_hook("a", c.createElement("div"), "assign")).id = cc11001100_hook("(a = c.createElement(\"div\")).id", "instantclick-bar", "assign"), a.className = cc11001100_hook("a.className", "instantclick-bar", "assign"), r.appendChild(a);
          var t = cc11001100_hook("t", ["Webkit", "Moz", "O"], "var-init");
          if (!((o = cc11001100_hook("o", "transform", "assign")) in a.style)) for (var e = cc11001100_hook("e", 0, "var-init"); e < 3; e++) t[e] + "Transform" in a.style && (o = cc11001100_hook("o", t[e] + "Transform", "assign"));
          var n = cc11001100_hook("n", "transition", "var-init");
          if (!(n in a.style)) for (e = cc11001100_hook("e", 0, "assign"); e < 3; e++) t[e] + "Transition" in a.style && (n = cc11001100_hook("n", "-" + t[e].toLowerCase() + "-" + n, "assign"));
          var i = cc11001100_hook("i", c.createElement("style"), "var-init");
          i.innerHTML = cc11001100_hook("i.innerHTML", "#instantclick{position:" + (v ? "absolute" : "fixed") + ";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;" + n + ":opacity .25s .1s}.instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;" + n + ":all .25s}", "assign"), c.head.appendChild(i), v && (f(), addEventListener("resize", f), addEventListener("scroll", f));
        },
        start: cc11001100_hook("start", e, "object-key-init"),
        done: function t() {
          if (c.getElementById(r.id)) return clearTimeout(i), n = cc11001100_hook("n", 100, "assign"), l(), void (r.style.opacity = cc11001100_hook("r.style.opacity", "0", "assign"));
          e(100 == n ? 0 : n), setTimeout(t, 0);
        }
      };
    }(), "var-init"),
    P = cc11001100_hook("P", "pushState" in history && (!t.match("Android") || t.match("Chrome/")) && "file:" != a.protocol, "var-init");
  return {
    supported: cc11001100_hook("supported", P, "object-key-init"),
    init: function () {
      if (!d) if (P) {
        for (var t = cc11001100_hook("t", arguments.length - 1, "var-init"); 0 <= t; t--) {
          var e = cc11001100_hook("e", arguments[t], "var-init");
          !0 === e ? s = cc11001100_hook("s", !0, "assign") : "mousedown" == e ? f = cc11001100_hook("f", !0, "assign") : "number" == typeof e && (u = cc11001100_hook("u", e, "assign"));
        }
        d = cc11001100_hook("d", A(a.href), "assign"), p[d] = cc11001100_hook("p[d]", {
          body: cc11001100_hook("body", c.body, "object-key-init"),
          title: cc11001100_hook("title", c.title, "object-key-init"),
          scrollY: cc11001100_hook("scrollY", pageYOffset, "object-key-init")
        }, "assign");
        var n,
          i,
          r = cc11001100_hook("r", c.head.children, "var-init");
        for (t = cc11001100_hook("t", r.length - 1, "assign"); 0 <= t; t--) (n = cc11001100_hook("n", r[t], "assign")).hasAttribute("data-instant-track") && (i = cc11001100_hook("i", n.getAttribute("href") || n.getAttribute("src") || n.innerHTML, "assign"), w.push(i));
        (l = cc11001100_hook("l", new XMLHttpRequest(), "assign")).addEventListener("readystatechange", S), I(!0), K.init(), C("change", !0), addEventListener("popstate", function () {
          var t = cc11001100_hook("t", A(a.href), "var-init");
          t != d && (t in p ? (p[d].scrollY = cc11001100_hook("p[d].scrollY", pageYOffset, "assign"), M(p[d = cc11001100_hook("d", t, "assign")].title, p[t].body, !1, p[t].scrollY)) : a.href = cc11001100_hook("a.href", a.href, "assign"));
        });
      } else C("change", !0);
    },
    on: function (t, e) {
      L[t].push(e);
    }
  };
}(document, location), "var-init");