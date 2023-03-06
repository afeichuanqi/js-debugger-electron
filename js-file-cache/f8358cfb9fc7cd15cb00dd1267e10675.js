/*! Sea.js 2.2.3 | seajs.org/LICENSE.md */
!function (a, b) {
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b) {
      return {}.toString.call(b) == "[object " + a + "]";
    };
  }
  function d() {
    return B++;
  }
  function e(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.match(E)[0];
  }
  function f(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (a = cc11001100_hook("a", a.replace(F, "/"), "assign"); a.match(G);) a = cc11001100_hook("a", a.replace(G, "/"), "assign");
    return a = cc11001100_hook("a", a.replace(H, "$1/"), "assign");
  }
  function g(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.length - 1, "var-init"),
      c = cc11001100_hook("c", a.charAt(b), "var-init");
    return "#" === c ? a.substring(0, b) : ".js" === a.substring(b - 2) || a.indexOf("?") > 0 || ".css" === a.substring(b - 3) || "/" === c ? a : a + ".js";
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", v.alias, "var-init");
    return b && x(b[a]) ? b[a] : a;
  }
  function i(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", v.paths, "var-init"),
      c;
    return b && (c = cc11001100_hook("c", a.match(I), "assign")) && x(b[c[1]]) && (a = cc11001100_hook("a", b[c[1]] + c[2], "assign")), a;
  }
  function j(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", v.vars, "var-init");
    return b && a.indexOf("{") > -1 && (a = cc11001100_hook("a", a.replace(J, function (a, c) {
      return x(b[c]) ? b[c] : a;
    }), "assign")), a;
  }
  function k(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", v.map, "var-init"),
      c = cc11001100_hook("c", a, "var-init");
    if (b) for (var d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", b.length, "var-init"); e > d; d++) {
      var f = cc11001100_hook("f", b[d], "var-init");
      if (c = cc11001100_hook("c", z(f) ? f(a) || a : a.replace(f[0], f[1]), "assign"), c !== a) break;
    }
    return c;
  }
  function l(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c,
      d = cc11001100_hook("d", a.charAt(0), "var-init");
    if (K.test(a)) c = cc11001100_hook("c", a, "assign");else if ("." === d) c = cc11001100_hook("c", f((b ? e(b) : v.cwd) + a), "assign");else if ("/" === d) {
      var g = cc11001100_hook("g", v.cwd.match(L), "var-init");
      c = cc11001100_hook("c", g ? g[0] + a.substring(1) : a, "assign");
    } else c = cc11001100_hook("c", v.base + a, "assign");
    return 0 === c.indexOf("//") && (c = cc11001100_hook("c", location.protocol + c, "assign")), c;
  }
  function m(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) return "";
    a = cc11001100_hook("a", h(a), "assign"), a = cc11001100_hook("a", i(a), "assign"), a = cc11001100_hook("a", j(a), "assign"), a = cc11001100_hook("a", g(a), "assign");
    var c = cc11001100_hook("c", l(a, b), "var-init");
    return c = cc11001100_hook("c", k(c), "assign");
  }
  function n(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.hasAttribute ? a.src : a.getAttribute("src", 4);
  }
  function o(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", T.test(a), "var-init"),
      f = cc11001100_hook("f", M.createElement(e ? "link" : "script"), "var-init");
    c && (f.charset = cc11001100_hook("f.charset", c, "assign")), A(d) || f.setAttribute("crossorigin", d), p(f, b, e, a), e ? (f.rel = cc11001100_hook("f.rel", "stylesheet", "assign"), f.href = cc11001100_hook("f.href", a, "assign")) : (f.async = cc11001100_hook("f.async", !0, "assign"), f.src = cc11001100_hook("f.src", a, "assign")), U = cc11001100_hook("U", f, "assign"), S ? R.insertBefore(f, S) : R.appendChild(f), U = cc11001100_hook("U", null, "assign");
  }
  function p(a, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    function f() {
      a.onload = cc11001100_hook("a.onload", a.onerror = cc11001100_hook("a.onerror", a.onreadystatechange = cc11001100_hook("a.onreadystatechange", null, "assign"), "assign"), "assign"), d || v.debug || R.removeChild(a), a = cc11001100_hook("a", null, "assign"), c();
    }
    var g = cc11001100_hook("g", "onload" in a, "var-init");
    return !d || !W && g ? (g ? (a.onload = cc11001100_hook("a.onload", f, "assign"), a.onerror = cc11001100_hook("a.onerror", function () {
      D("error", {
        uri: cc11001100_hook("uri", e, "object-key-init"),
        node: cc11001100_hook("node", a, "object-key-init")
      }), f();
    }, "assign")) : a.onreadystatechange = cc11001100_hook("a.onreadystatechange", function () {
      /loaded|complete/.test(a.readyState) && f();
    }, "assign"), b) : (setTimeout(function () {
      q(a, c);
    }, 1), b);
  }
  function q(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.sheet, "var-init"),
      d;
    if (W) c && (d = cc11001100_hook("d", !0, "assign"));else if (c) try {
      c.cssRules && (d = cc11001100_hook("d", !0, "assign"));
    } catch (e) {
      "NS_ERROR_DOM_SECURITY_ERR" === e.name && (d = cc11001100_hook("d", !0, "assign"));
    }
    setTimeout(function () {
      d ? b() : q(a, b);
    }, 20);
  }
  function r() {
    if (U) return U;
    if (V && "interactive" === V.readyState) return V;
    for (var a = cc11001100_hook("a", R.getElementsByTagName("script"), "var-init"), b = cc11001100_hook("b", a.length - 1, "var-init"); b >= 0; b--) {
      var c = cc11001100_hook("c", a[b], "var-init");
      if ("interactive" === c.readyState) return V = cc11001100_hook("V", c, "assign");
    }
  }
  function s(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init");
    return a.replace(Y, "").replace(X, function (a, c, d) {
      d && b.push(d);
    }), b;
  }
  function t(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.uri = cc11001100_hook("this.uri", a, "assign"), this.dependencies = cc11001100_hook("this.dependencies", b || [], "assign"), this.exports = cc11001100_hook("this.exports", null, "assign"), this.status = cc11001100_hook("this.status", 0, "assign"), this._waitings = cc11001100_hook("this._waitings", {}, "assign"), this._remain = cc11001100_hook("this._remain", 0, "assign");
  }
  if (!a.seajs) {
    var u = cc11001100_hook("u", a.seajs = cc11001100_hook("a.seajs", {
        version: cc11001100_hook("version", "2.2.3", "object-key-init")
      }, "assign"), "var-init"),
      v = cc11001100_hook("v", u.data = cc11001100_hook("u.data", {}, "assign"), "var-init"),
      w = cc11001100_hook("w", c("Object"), "var-init"),
      x = cc11001100_hook("x", c("String"), "var-init"),
      y = cc11001100_hook("y", Array.isArray || c("Array"), "var-init"),
      z = cc11001100_hook("z", c("Function"), "var-init"),
      A = cc11001100_hook("A", c("Undefined"), "var-init"),
      B = cc11001100_hook("B", 0, "var-init"),
      C = cc11001100_hook("C", v.events = cc11001100_hook("v.events", {}, "assign"), "var-init");
    u.on = cc11001100_hook("u.on", function (a, b) {
      var c = cc11001100_hook("c", C[a] || (C[a] = cc11001100_hook("C[a]", [], "assign")), "var-init");
      return c.push(b), u;
    }, "assign"), u.off = cc11001100_hook("u.off", function (a, b) {
      if (!a && !b) return C = cc11001100_hook("C", v.events = cc11001100_hook("v.events", {}, "assign"), "assign"), u;
      var c = cc11001100_hook("c", C[a], "var-init");
      if (c) if (b) for (var d = cc11001100_hook("d", c.length - 1, "var-init"); d >= 0; d--) c[d] === b && c.splice(d, 1);else delete C[a];
      return u;
    }, "assign");
    var D = cc11001100_hook("D", u.emit = cc11001100_hook("u.emit", function (a, b) {
        var c = cc11001100_hook("c", C[a], "var-init"),
          d;
        if (c) for (c = cc11001100_hook("c", c.slice(), "assign"); d = cc11001100_hook("d", c.shift(), "assign");) d(b);
        return u;
      }, "assign"), "var-init"),
      E = cc11001100_hook("E", /[^?#]*\//, "var-init"),
      F = cc11001100_hook("F", /\/\.\//g, "var-init"),
      G = cc11001100_hook("G", /\/[^/]+\/\.\.\//, "var-init"),
      H = cc11001100_hook("H", /([^:/])\/\//g, "var-init"),
      I = cc11001100_hook("I", /^([^/:]+)(\/.+)$/, "var-init"),
      J = cc11001100_hook("J", /{([^{]+)}/g, "var-init"),
      K = cc11001100_hook("K", /^\/\/.|:\//, "var-init"),
      L = cc11001100_hook("L", /^.*?\/\/.*?\//, "var-init"),
      M = cc11001100_hook("M", document, "var-init"),
      N = cc11001100_hook("N", e(M.URL), "var-init"),
      O = cc11001100_hook("O", M.scripts, "var-init"),
      P = cc11001100_hook("P", M.getElementById("seajsnode") || O[O.length - 1], "var-init"),
      Q = cc11001100_hook("Q", e(n(P) || N), "var-init");
    u.resolve = cc11001100_hook("u.resolve", m, "assign");
    var R = cc11001100_hook("R", M.head || M.getElementsByTagName("head")[0] || M.documentElement, "var-init"),
      S = cc11001100_hook("S", R.getElementsByTagName("base")[0], "var-init"),
      T = cc11001100_hook("T", /\.css(?:\?|$)/i, "var-init"),
      U,
      V,
      W = cc11001100_hook("W", +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/, "$1") < 536, "var-init");
    u.request = cc11001100_hook("u.request", o, "assign");
    var X = cc11001100_hook("X", /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g, "var-init"),
      Y = cc11001100_hook("Y", /\\\\/g, "var-init"),
      Z = cc11001100_hook("Z", u.cache = cc11001100_hook("u.cache", {}, "assign"), "var-init"),
      $,
      _ = cc11001100_hook("_", {}, "var-init"),
      ab = cc11001100_hook("ab", {}, "var-init"),
      bb = cc11001100_hook("bb", {}, "var-init"),
      cb = cc11001100_hook("cb", t.STATUS = cc11001100_hook("t.STATUS", {
        FETCHING: cc11001100_hook("FETCHING", 1, "object-key-init"),
        SAVED: cc11001100_hook("SAVED", 2, "object-key-init"),
        LOADING: cc11001100_hook("LOADING", 3, "object-key-init"),
        LOADED: cc11001100_hook("LOADED", 4, "object-key-init"),
        EXECUTING: cc11001100_hook("EXECUTING", 5, "object-key-init"),
        EXECUTED: cc11001100_hook("EXECUTED", 6, "object-key-init")
      }, "assign"), "var-init");
    t.prototype.resolve = cc11001100_hook("t.prototype.resolve", function () {
      for (var a = cc11001100_hook("a", this, "var-init"), b = cc11001100_hook("b", a.dependencies, "var-init"), c = cc11001100_hook("c", [], "var-init"), d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", b.length, "var-init"); e > d; d++) c[d] = cc11001100_hook("c[d]", t.resolve(b[d], a.uri), "assign");
      return c;
    }, "assign"), t.prototype.load = cc11001100_hook("t.prototype.load", function () {
      var a = cc11001100_hook("a", this, "var-init");
      if (!(a.status >= cb.LOADING)) {
        a.status = cc11001100_hook("a.status", cb.LOADING, "assign");
        var c = cc11001100_hook("c", a.resolve(), "var-init");
        D("load", c);
        for (var d = cc11001100_hook("d", a._remain = cc11001100_hook("a._remain", c.length, "assign"), "var-init"), e, f = cc11001100_hook("f", 0, "var-init"); d > f; f++) e = cc11001100_hook("e", t.get(c[f]), "assign"), e.status < cb.LOADED ? e._waitings[a.uri] = cc11001100_hook("e._waitings[a.uri]", (e._waitings[a.uri] || 0) + 1, "assign") : a._remain--;
        if (0 === a._remain) return a.onload(), b;
        var g = cc11001100_hook("g", {}, "var-init");
        for (f = cc11001100_hook("f", 0, "assign"); d > f; f++) e = cc11001100_hook("e", Z[c[f]], "assign"), e.status < cb.FETCHING ? e.fetch(g) : e.status === cb.SAVED && e.load();
        for (var h in g) g.hasOwnProperty(h) && g[h]();
      }
    }, "assign"), t.prototype.onload = cc11001100_hook("t.prototype.onload", function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.status = cc11001100_hook("a.status", cb.LOADED, "assign"), a.callback && a.callback();
      var b = cc11001100_hook("b", a._waitings, "var-init"),
        c,
        d;
      for (c in b) b.hasOwnProperty(c) && (d = cc11001100_hook("d", Z[c], "assign"), d._remain -= cc11001100_hook("d._remain", b[c], "assign"), 0 === d._remain && d.onload());
      delete a._waitings, delete a._remain;
    }, "assign"), t.prototype.fetch = cc11001100_hook("t.prototype.fetch", function (a) {
      function c() {
        u.request(g.requestUri, g.onRequest, g.charset, g.crossorigin);
      }
      function d() {
        delete _[h], ab[h] = cc11001100_hook("ab[h]", !0, "assign"), $ && (t.save(f, $), $ = cc11001100_hook("$", null, "assign"));
        var a,
          b = cc11001100_hook("b", bb[h], "var-init");
        for (delete bb[h]; a = cc11001100_hook("a", b.shift(), "assign");) a.load();
      }
      var e = cc11001100_hook("e", this, "var-init"),
        f = cc11001100_hook("f", e.uri, "var-init");
      e.status = cc11001100_hook("e.status", cb.FETCHING, "assign");
      var g = cc11001100_hook("g", {
        uri: cc11001100_hook("uri", f, "object-key-init")
      }, "var-init");
      D("fetch", g);
      var h = cc11001100_hook("h", g.requestUri || f, "var-init");
      return !h || ab[h] ? (e.load(), b) : _[h] ? (bb[h].push(e), b) : (_[h] = cc11001100_hook("_[h]", !0, "assign"), bb[h] = cc11001100_hook("bb[h]", [e], "assign"), D("request", g = cc11001100_hook("g", {
        uri: cc11001100_hook("uri", f, "object-key-init"),
        requestUri: cc11001100_hook("requestUri", h, "object-key-init"),
        onRequest: cc11001100_hook("onRequest", d, "object-key-init"),
        charset: cc11001100_hook("charset", z(v.charset) ? v.charset(h) : v.charset, "object-key-init"),
        crossorigin: cc11001100_hook("crossorigin", z(v.crossorigin) ? v.crossorigin(h) : v.crossorigin, "object-key-init")
      }, "assign")), g.requested || (a ? a[g.requestUri] = cc11001100_hook("a[g.requestUri]", c, "assign") : c()), b);
    }, "assign"), t.prototype.exec = cc11001100_hook("t.prototype.exec", function () {
      function a(b) {
        cc11001100_hook("b", b, "function-parameter");
        return t.get(a.resolve(b)).exec();
      }
      var c = cc11001100_hook("c", this, "var-init");
      if (c.status >= cb.EXECUTING) return c.exports;
      c.status = cc11001100_hook("c.status", cb.EXECUTING, "assign");
      var e = cc11001100_hook("e", c.uri, "var-init");
      a.resolve = cc11001100_hook("a.resolve", function (a) {
        return t.resolve(a, e);
      }, "assign"), a.async = cc11001100_hook("a.async", function (b, c) {
        return t.use(b, c, e + "_async_" + d()), a;
      }, "assign");
      var f = cc11001100_hook("f", c.factory, "var-init"),
        g = cc11001100_hook("g", z(f) ? f(a, c.exports = cc11001100_hook("c.exports", {}, "assign"), c) : f, "var-init");
      return g === b && (g = cc11001100_hook("g", c.exports, "assign")), delete c.factory, c.exports = cc11001100_hook("c.exports", g, "assign"), c.status = cc11001100_hook("c.status", cb.EXECUTED, "assign"), D("exec", c), g;
    }, "assign"), t.resolve = cc11001100_hook("t.resolve", function (a, b) {
      var c = cc11001100_hook("c", {
        id: cc11001100_hook("id", a, "object-key-init"),
        refUri: cc11001100_hook("refUri", b, "object-key-init")
      }, "var-init");
      return D("resolve", c), c.uri || u.resolve(c.id, b);
    }, "assign"), t.define = cc11001100_hook("t.define", function (a, c, d) {
      var e = cc11001100_hook("e", arguments.length, "var-init");
      1 === e ? (d = cc11001100_hook("d", a, "assign"), a = cc11001100_hook("a", b, "assign")) : 2 === e && (d = cc11001100_hook("d", c, "assign"), y(a) ? (c = cc11001100_hook("c", a, "assign"), a = cc11001100_hook("a", b, "assign")) : c = cc11001100_hook("c", b, "assign")), !y(c) && z(d) && (c = cc11001100_hook("c", s("" + d), "assign"));
      var f = cc11001100_hook("f", {
        id: cc11001100_hook("id", a, "object-key-init"),
        uri: cc11001100_hook("uri", t.resolve(a), "object-key-init"),
        deps: cc11001100_hook("deps", c, "object-key-init"),
        factory: cc11001100_hook("factory", d, "object-key-init")
      }, "var-init");
      if (!f.uri && M.attachEvent) {
        var g = cc11001100_hook("g", r(), "var-init");
        g && (f.uri = cc11001100_hook("f.uri", g.src, "assign"));
      }
      D("define", f), f.uri ? t.save(f.uri, f) : $ = cc11001100_hook("$", f, "assign");
    }, "assign"), t.save = cc11001100_hook("t.save", function (a, b) {
      var c = cc11001100_hook("c", t.get(a), "var-init");
      c.status < cb.SAVED && (c.id = cc11001100_hook("c.id", b.id || a, "assign"), c.dependencies = cc11001100_hook("c.dependencies", b.deps || [], "assign"), c.factory = cc11001100_hook("c.factory", b.factory, "assign"), c.status = cc11001100_hook("c.status", cb.SAVED, "assign"));
    }, "assign"), t.get = cc11001100_hook("t.get", function (a, b) {
      return Z[a] || (Z[a] = cc11001100_hook("Z[a]", new t(a, b), "assign"));
    }, "assign"), t.use = cc11001100_hook("t.use", function (b, c, d) {
      var e = cc11001100_hook("e", t.get(d, y(b) ? b : [b]), "var-init");
      e.callback = cc11001100_hook("e.callback", function () {
        for (var b = cc11001100_hook("b", [], "var-init"), d = cc11001100_hook("d", e.resolve(), "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", d.length, "var-init"); g > f; f++) b[f] = cc11001100_hook("b[f]", Z[d[f]].exec(), "assign");
        c && c.apply(a, b), delete e.callback;
      }, "assign"), e.load();
    }, "assign"), t.preload = cc11001100_hook("t.preload", function (a) {
      var b = cc11001100_hook("b", v.preload, "var-init"),
        c = cc11001100_hook("c", b.length, "var-init");
      c ? t.use(b, function () {
        b.splice(0, c), t.preload(a);
      }, v.cwd + "_preload_" + d()) : a();
    }, "assign"), u.use = cc11001100_hook("u.use", function (a, b) {
      return t.preload(function () {
        t.use(a, b, v.cwd + "_use_" + d());
      }), u;
    }, "assign"), t.define.cmd = cc11001100_hook("t.define.cmd", {}, "assign"), a.define = cc11001100_hook("a.define", t.define, "assign"), u.Module = cc11001100_hook("u.Module", t, "assign"), v.fetchedList = cc11001100_hook("v.fetchedList", ab, "assign"), v.cid = cc11001100_hook("v.cid", d, "assign"), u.require = cc11001100_hook("u.require", function (a) {
      var b = cc11001100_hook("b", t.get(t.resolve(a)), "var-init");
      return b.status < cb.EXECUTING && (b.onload(), b.exec()), b.exports;
    }, "assign");
    var db = cc11001100_hook("db", /^(.+?\/)(\?\?)?(seajs\/)+/, "var-init");
    v.base = cc11001100_hook("v.base", (Q.match(db) || ["", Q])[1], "assign"), v.dir = cc11001100_hook("v.dir", Q, "assign"), v.cwd = cc11001100_hook("v.cwd", N, "assign"), v.charset = cc11001100_hook("v.charset", "utf-8", "assign"), v.preload = cc11001100_hook("v.preload", function () {
      var a = cc11001100_hook("a", [], "var-init"),
        b = cc11001100_hook("b", location.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2"), "var-init");
      return b += cc11001100_hook("b", " " + M.cookie, "assign"), b.replace(/(seajs-\w+)=1/g, function (b, c) {
        a.push(c);
      }), a;
    }(), "assign"), u.config = cc11001100_hook("u.config", function (a) {
      for (var b in a) {
        var c = cc11001100_hook("c", a[b], "var-init"),
          d = cc11001100_hook("d", v[b], "var-init");
        if (d && w(d)) for (var e in c) d[e] = cc11001100_hook("d[e]", c[e], "assign");else y(d) ? c = cc11001100_hook("c", d.concat(c), "assign") : "base" === b && ("/" !== c.slice(-1) && (c += cc11001100_hook("c", "/", "assign")), c = cc11001100_hook("c", l(c), "assign")), v[b] = cc11001100_hook("v[b]", c, "assign");
      }
      return D("config", a), u;
    }, "assign");
  }
}(this);
seajs.config({
  alias: {
    'jquery': cc11001100_hook('jquery', '{static}/lib/jquery/jquery-3.2.1.min', "object-key-init"),
    '$': cc11001100_hook('$', '{static}/lib/jquery/jquery-3.2.1.min', "object-key-init"),
    'global': cc11001100_hook('global', '{static}/home/js/modules/global.js?v={site_version}', "object-key-init"),
    'index': cc11001100_hook('index', '{static}/home/js/modules/index.js?v={site_version}', "object-key-init"),
    'user': cc11001100_hook('user', '{static}/home/js/modules/user.js?v={site_version}', "object-key-init"),
    'login': cc11001100_hook('login', '{static}/home/js/modules/login.js?v={site_version}', "object-key-init"),
    'editor': cc11001100_hook('editor', '{static}/home/js/modules/editor.js?v={site_version}', "object-key-init"),
    'topic': cc11001100_hook('topic', '{static}/home/js/modules/topic.js?v={site_version}', "object-key-init"),
    'loginbox': cc11001100_hook('loginbox', '{static}/home/js/modules/loginbox.js?v={site_version}', "object-key-init"),
    'ajaxLogin': cc11001100_hook('ajaxLogin', '{static}/home/js/modules/ajaxLogin.js?v={site_version}', "object-key-init"),
    'question': cc11001100_hook('question', '{static}/home/js/modules/question.js?v={site_version}', "object-key-init"),
    'article': cc11001100_hook('article', '{static}/home/js/modules/article.js?v={site_version}', "object-key-init"),
    'editor': cc11001100_hook('editor', '{static}/home/js/modules/editor.js?v={site_version}', "object-key-init"),
    'load': cc11001100_hook('load', '{static}/home/js/modules/load.js?v={site_version}', "object-key-init"),
    'jquerySuperSlider': cc11001100_hook('jquerySuperSlider', '{static}/lib/jquerySuperSlider/jquery.SuperSlide.2.1.4', "object-key-init"),
    'jqueryMoreContent': cc11001100_hook('jqueryMoreContent', '{static}/lib/jqueryMoreContent/jquery.morecontent', "object-key-init"),
    'jqueryLazyload': cc11001100_hook('jqueryLazyload', '{static}/lib/jqueryLazyload/jquery.lazyload', "object-key-init"),
    'layer': cc11001100_hook('layer', '{static}/lib/layer/layer', "object-key-init"),
    'bootstrap': cc11001100_hook('bootstrap', '{static}/lib/bootstrap/js/bootstrap.min', "object-key-init"),
    'layui': cc11001100_hook('layui', '{static}/lib/layui/layui', "object-key-init"),
    'viewer': cc11001100_hook('viewer', '{static}/lib/viewer/viewer-jquery.min', "object-key-init"),
    "mdeditor": cc11001100_hook("mdeditor", '{static}/lib/mdeditor/editormd', "object-key-init"),
    'tagsinput': cc11001100_hook('tagsinput', '{static}/home/js/modules/tagsinput', "object-key-init"),
    'prettify': cc11001100_hook('prettify', '{static}/lib/googlePrettify/prettify', "object-key-init"),
    'mark': cc11001100_hook('mark', '{static}/lib/mark/jquery.mark.min', "object-key-init")
  },
  // 预加载项
  preload: cc11001100_hook("preload", ['jquery'], "object-key-init"),
  // 路径配置
  paths: {
    'lib': cc11001100_hook('lib', '/lib', "object-key-init")
  },
  // 变量配置
  vars: {
    'locale': cc11001100_hook('locale', 'zh-cn', "object-key-init")
  },
  charset: cc11001100_hook("charset", 'utf-8', "object-key-init"),
  debug: cc11001100_hook("debug", false, "object-key-init")
});