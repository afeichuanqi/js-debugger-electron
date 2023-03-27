define("ralltiir/src/action", ["require", "ralltiir/src/utils/cache", "@searchfe/assert", "ralltiir/src/utils/logger", "@searchfe/underscore", "ralltiir/src/utils/dom", "ralltiir/src/utils/url"], function (require) {
  function a(a, b, R, A, O, S, E) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("R", R, "function-parameter");
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("O", O, "function-parameter");
    cc11001100_hook("S", S, "function-parameter");
    cc11001100_hook("E", E, "function-parameter");
    function P() {
      function a(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        return function (h) {
          return arguments[0] = cc11001100_hook("arguments[0]", (h || "").replace(/#.*$/, ""), "assign"), a.apply(c, arguments);
        };
      }
      var h = cc11001100_hook("h", c.create("pages", {
        onRemove: function (a, c, h) {
          v.isFunction(a.onRemove) && a.onRemove(c, h);
        },
        limit: cc11001100_hook("limit", 1e6, "object-key-init")
      }), "var-init");
      return h.get = cc11001100_hook("h.get", a(h.get, h), "assign"), h.set = cc11001100_hook("h.set", a(h.set, h), "assign"), h.contains = cc11001100_hook("h.contains", a(h.contains, h), "assign"), h;
    }
    function j() {
      return b.pathname + b.search;
    }
    function k(c, h) {
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("h", h, "function-parameter");
      h && S.setInstance(a.createURL(c).toString(), h);
    }
    function U(a) {
      cc11001100_hook("a", a, "function-parameter");
      var c = cc11001100_hook("c", w.parse(a), "var-init");
      return "sfr" === c.scheme && "index" === c.host ? T : a;
    }
    function L() {
      var a,
        c = cc11001100_hook("c", j(), "var-init");
      a = cc11001100_hook("a", F.get(c), "assign"), a ? a.scrollTop = cc11001100_hook("a.scrollTop", window.pageYOffset, "assign") : F.set(c, {
        scrollTop: cc11001100_hook("scrollTop", window.pageYOffset, "object-key-init")
      });
    }
    function _(c, h) {
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("h", h, "function-parameter");
      var v = cc11001100_hook("v", a.ignoreRoot(b.pathname + b.search), "var-init"),
        y = cc11001100_hook("y", a.createURL(v).toString(), "var-init"),
        w = cc11001100_hook("w", a.createURL(c, h).toString(), "var-init");
      return g.log("[transfering page] from:", y, "to:", w), F.contains(y) ? void F.set(w, F.get(y)) : void console.warn("current page not found, cannot transfer to", c);
    }
    function I(a) {
      cc11001100_hook("a", a, "function-parameter");
      a = cc11001100_hook("a", a || window.event, "assign");
      var c = cc11001100_hook("c", N(a.target || a.srcElement, function (a) {
        return "A" === a.tagName;
      }), "var-init");
      if (c) {
        var h = cc11001100_hook("h", c.getAttribute("data-sf-href"), "var-init"),
          g = cc11001100_hook("g", c.getAttribute("data-sf-options"), "var-init"),
          v = cc11001100_hook("v", c.getAttribute("data-visited"), "var-init");
        if (h) {
          a.preventDefault();
          try {
            g = cc11001100_hook("g", JSON.parse(g) || {}, "assign");
          } catch (w) {
            console.warn("JSON parse failed, fallback to empty options"), g = cc11001100_hook("g", {}, "assign");
          }
          g.src = cc11001100_hook("g.src", "hijack", "assign");
          var b = cc11001100_hook("b", {
              event: cc11001100_hook("event", a, "object-key-init"),
              anchor: cc11001100_hook("anchor", c, "object-key-init")
            }, "var-init"),
            R = cc11001100_hook("R", C(c) + h, "var-init");
          exports.redirect(R, null, g, b), "off" !== v && y.addClass(c, D.visitedClassName);
        }
      }
    }
    function C(a) {
      cc11001100_hook("a", a, "function-parameter");
      var c = cc11001100_hook("c", N(a, function (a) {
        return /(^|\s)rt-view($|\s)/.test(a.className);
      }), "var-init");
      return c ? c.getAttribute("data-base") || "" : "";
    }
    function N(a, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      for (var h = cc11001100_hook("h", a, "var-init"); null !== h && !c(h);) h = cc11001100_hook("h", h.parentNode, "assign");
      return h;
    }
    var F,
      H,
      T,
      M,
      z,
      exports = cc11001100_hook("exports", new O(), "var-init"),
      D = cc11001100_hook("D", {}, "var-init"),
      $ = cc11001100_hook("$", {}, "var-init");
    return exports.init = cc11001100_hook("exports.init", function () {
      exports.started = cc11001100_hook("exports.started", !1, "assign"), S.init(this.dispatch), exports.pages = cc11001100_hook("exports.pages", F = cc11001100_hook("F", P(), "assign"), "assign"), H = cc11001100_hook("H", !1, "assign"), D = cc11001100_hook("D", {
        root: cc11001100_hook("root", "/", "object-key-init"),
        visitedClassName: cc11001100_hook("visitedClassName", "visited", "object-key-init")
      }, "assign"), T = cc11001100_hook("T", "/", "assign"), M = cc11001100_hook("M", !0, "assign"), z = cc11001100_hook("z", 0, "assign");
    }, "assign"), exports.getState = cc11001100_hook("exports.getState", function () {
      return $;
    }, "assign"), exports.regist = cc11001100_hook("exports.regist", function (a, c) {
      h(a, "invalid path pattern"), h(c, "invalid service"), c.singleton = cc11001100_hook("c.singleton", !0, "assign"), S.register(a, null, c);
    }, "assign"), exports.unregist = cc11001100_hook("exports.unregist", function (a) {
      S.unRegister(a);
    }, "assign"), exports.dispatch = cc11001100_hook("exports.dispatch", function (a, c) {
      h(a, "cannot dispatch with options:" + a);
      var v = cc11001100_hook("v", S.getOrCreate(c.url, c.pathPattern), "var-init");
      c.service = cc11001100_hook("c.service", v, "assign");
      var y = cc11001100_hook("y", S.getOrCreate(a.url, a.pathPattern, {
        isRendered: cc11001100_hook("isRendered", !v, "object-key-init")
      }), "var-init");
      if (a.service = cc11001100_hook("a.service", y, "assign"), v && v === y && !v.singleton) return void g.log("prev service and current service are the same. disabled dispatch.");
      F.contains(a.url) || F.set(a.url, {
        id: cc11001100_hook("id", z, "object-key-init"),
        isIndex: cc11001100_hook("isIndex", M, "object-key-init")
      }), a.page = cc11001100_hook("a.page", F.get(a.url), "assign"), c.page = cc11001100_hook("c.page", F.get(c.url), "assign");
      var w = cc11001100_hook("w", $, "var-init");
      return $ = cc11001100_hook("$", {}, "assign"), H && (H = cc11001100_hook("H", !1, "assign"), a.options.src = cc11001100_hook("a.options.src", "back", "assign")), a.options && "sync" === a.options.src ? T = cc11001100_hook("T", a.url || "/", "assign") : M = cc11001100_hook("M", !1, "assign"), g.log("action dispatching to: " + a.url), exports.emit("dispatching", {
        current: cc11001100_hook("current", a, "object-key-init"),
        previous: cc11001100_hook("previous", c, "object-key-init"),
        extra: cc11001100_hook("extra", $, "object-key-init")
      }), A.ensureAttached(), E(a, c, w);
    }, "assign"), exports.isIndexPage = cc11001100_hook("exports.isIndexPage", function () {
      return M;
    }, "assign"), exports.exist = cc11001100_hook("exports.exist", function (a) {
      return S.isRegistered(a);
    }, "assign"), exports.config = cc11001100_hook("exports.config", function (c) {
      return 0 !== arguments.length && (v.assign(D, c), a.config(D)), D;
    }, "assign"), exports.redirect = cc11001100_hook("exports.redirect", function (c, h, y, R, A) {
      g.log("action redirecting to: " + c);
      var O = cc11001100_hook("O", exports.emit("redirecting", c, h, y, A), "var-init");
      if (!O) {
        c = cc11001100_hook("c", U(c), "assign"), k(c, v.get(R, "service")), v.assign($, R), y = cc11001100_hook("y", v.assign({}, y, {
          id: cc11001100_hook("id", z++, "object-key-init")
        }), "assign"), L();
        try {
          y.silent && _(c, h), a.redirect(c, h, y);
        } catch (e) {
          throw e.url = cc11001100_hook("e.url", w.resolve(D.root, c), "assign"), b.replace(e.url), exports.emit("redirectFailed", e), e;
        }
      }
    }, "assign"), exports.back = cc11001100_hook("exports.back", function () {
      H = cc11001100_hook("H", !0, "assign"), L(), R.back();
    }, "assign"), exports.reset = cc11001100_hook("exports.reset", function (c, h, g, y) {
      var w = cc11001100_hook("w", exports.emit("reseting", c, h, g), "var-init");
      w || (k(c, v.get(y, "service")), M && (T = cc11001100_hook("T", c, "assign")), _(c, h), v.assign($, y), a.reset(c, h, g));
    }, "assign"), exports.start = cc11001100_hook("exports.start", function (c) {
      arguments.length && exports.config(c), document.body.addEventListener("click", I), a.start(), exports.started = cc11001100_hook("exports.started", !0, "assign");
    }, "assign"), exports.stop = cc11001100_hook("exports.stop", function () {
      document.body.removeEventListener("click", I), a.stop(), a.clear(), exports.started = cc11001100_hook("exports.started", !1, "assign");
    }, "assign"), exports.destroy = cc11001100_hook("exports.destroy", function () {
      exports.stop(), c.destroy("pages"), S.destroy(), exports.pages = cc11001100_hook("exports.pages", F = cc11001100_hook("F", void 0, "assign"), "assign"), S.unRegisterAll();
    }, "assign"), exports.update = cc11001100_hook("exports.update", function (c, h, g, v) {
      g = cc11001100_hook("g", g ? g : {}, "assign"), g.hasOwnProperty("silent") || (g.silent = cc11001100_hook("g.silent", !0, "assign"));
      var y = cc11001100_hook("y", a.ignoreRoot(b.pathname + b.search), "var-init"),
        w = cc11001100_hook("w", a.createURL(y).toString(), "var-init"),
        R = cc11001100_hook("R", a.ignoreRoot(c), "var-init"),
        A = cc11001100_hook("A", (R || "").replace(/\?.*/, ""), "var-init"),
        O = cc11001100_hook("O", a.getState(), "var-init"),
        S = cc11001100_hook("S", {
          from: {
            url: cc11001100_hook("url", w, "object-key-init")
          },
          to: {
            url: cc11001100_hook("url", R, "object-key-init"),
            path: cc11001100_hook("path", A, "object-key-init")
          },
          extra: cc11001100_hook("extra", v, "object-key-init")
        }, "var-init");
      return exports.partialUpdate(c, {
        replace: cc11001100_hook("replace", !0, "object-key-init"),
        state: cc11001100_hook("state", O, "object-key-init"),
        transition: cc11001100_hook("transition", S, "object-key-init"),
        to: cc11001100_hook("to", v && v.container && v.container.get(0), "object-key-init"),
        query: cc11001100_hook("query", h, "object-key-init"),
        options: cc11001100_hook("options", g, "object-key-init")
      });
    }, "assign"), exports.partialUpdate = cc11001100_hook("exports.partialUpdate", function (c, h) {
      var g = cc11001100_hook("g", a.ignoreRoot(b.pathname + b.search), "var-init"),
        y = cc11001100_hook("y", a.createURL(g).toString(), "var-init"),
        w = cc11001100_hook("w", F.get(y), "var-init");
      _(c, h.query), h = cc11001100_hook("h", v.assign({}, {
        fromUrl: cc11001100_hook("fromUrl", c, "object-key-init"),
        replace: cc11001100_hook("replace", !1, "object-key-init"),
        routerOptions: {},
        page: cc11001100_hook("page", w, "object-key-init")
      }, h), "assign");
      var R = cc11001100_hook("R", S.getOrCreate(c), "var-init"),
        A = cc11001100_hook("A", R.partialUpdate(c, h), "var-init");
      return h.routerOptions.silent = cc11001100_hook("h.routerOptions.silent", !0, "assign"), a.reset(c || b.href, h.query, h.routerOptions), Promise.resolve(A);
    }, "assign"), exports.init(), exports;
  }
  var c = cc11001100_hook("c", require("ralltiir/src/utils/cache"), "var-init"),
    h = cc11001100_hook("h", require("@searchfe/assert"), "var-init"),
    g = cc11001100_hook("g", require("ralltiir/src/utils/logger"), "var-init"),
    v = cc11001100_hook("v", require("@searchfe/underscore"), "var-init"),
    y = cc11001100_hook("y", require("ralltiir/src/utils/dom"), "var-init"),
    w = cc11001100_hook("w", require("ralltiir/src/utils/url"), "var-init");
  return a;
}), define("ralltiir/src/config", ["require", "ralltiir/src/action", "ralltiir/src/dispatch", "ralltiir/src/transitions", "ralltiir/src/router/router", "ralltiir/src/services", "ralltiir/src/resource", "ralltiir/src/doc", "ralltiir/src/utils/cache", "ralltiir/src/utils/http", "ralltiir/src/utils/url", "ralltiir/src/utils/di", "ralltiir/src/utils/emitter", "@searchfe/assert", "@searchfe/underscore", "ralltiir/src/lang/map", "ralltiir/src/utils/logger"], function (require) {
  var a = cc11001100_hook("a", {
    action: {
      type: cc11001100_hook("type", "factory", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/action"), "object-key-init"),
      args: cc11001100_hook("args", ["router", "location", "history", "doc", "emitter", "services", "dispatch"], "object-key-init")
    },
    dispatch: {
      type: cc11001100_hook("type", "factory", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/dispatch"), "object-key-init")
    },
    transitions: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/transitions"), "object-key-init")
    },
    router: {
      type: cc11001100_hook("type", "factory", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/router/router"), "object-key-init")
    },
    services: {
      type: cc11001100_hook("type", "factory", "object-key-init"),
      args: cc11001100_hook("args", ["router"], "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/services"), "object-key-init")
    },
    resource: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/resource"), "object-key-init")
    },
    doc: {
      type: cc11001100_hook("type", "factory", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/doc"), "object-key-init"),
      args: cc11001100_hook("args", ["document"], "object-key-init")
    },
    cache: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/utils/cache"), "object-key-init")
    },
    http: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/utils/http"), "object-key-init")
    },
    url: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/utils/url"), "object-key-init")
    },
    di: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/utils/di"), "object-key-init")
    },
    emitter: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/utils/emitter"), "object-key-init")
    },
    assert: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("@searchfe/assert"), "object-key-init")
    },
    _: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("@searchfe/underscore"), "object-key-init")
    },
    promise: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", window.Promise, "object-key-init")
    },
    map: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/lang/map"), "object-key-init")
    },
    window: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      value: cc11001100_hook("value", window, "object-key-init")
    },
    document: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      value: cc11001100_hook("value", window.document, "object-key-init")
    },
    location: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      value: cc11001100_hook("value", window.location, "object-key-init")
    },
    history: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      value: cc11001100_hook("value", window.history, "object-key-init")
    },
    logger: {
      type: cc11001100_hook("type", "value", "object-key-init"),
      module: cc11001100_hook("module", require("ralltiir/src/utils/logger"), "object-key-init")
    }
  }, "var-init");
  return a;
}), define("ralltiir/src/dispatch", ["require", "ralltiir/src/transitions", "@searchfe/underscore"], function (require) {
  var a = cc11001100_hook("a", require("ralltiir/src/transitions"), "var-init"),
    c = cc11001100_hook("c", require("@searchfe/underscore"), "var-init");
  return function (h) {
    function g(a, g, v) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("g", g, "function-parameter");
      cc11001100_hook("v", v, "function-parameter");
      return w.reset([function () {
        return g.service ? g.service.singleton ? g.service.detach(a, g, v) : g.service.beforeDetach(a, g, v) : void 0;
      }, function () {
        return a.service ? a.service.singleton ? a.service.create(a, g, v) : a.service.beforeAttach(a, g, v) : void 0;
      }, function () {
        return g.service ? g.service.singleton ? g.service.destroy(a, g, v) : g.service.detach(a, g, v) : void 0;
      }, function () {
        return a.service ? a.service.attach(a, g, v) : void 0;
      }]).exec(function () {
        a.service && a.service.abort && a.service.abort(a, g, v);
      }, function (e) {
        console.error(e), "sync" !== c.get(a, "options.src") && h.replace(h.href);
      });
    }
    function v() {
      function a(q) {
        cc11001100_hook("q", q, "function-parameter");
        return w = cc11001100_hook("w", q, "assign"), y = cc11001100_hook("y", (y + 1) % v, "assign"), exports;
      }
      function h(a, h) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        var v = cc11001100_hook("v", y, "var-init");
        c.isFunction(g) && g(), g = cc11001100_hook("g", a, "assign");
        var b = function (a, c) {
          var h = cc11001100_hook("h", Promise.resolve("init"), "var-init"),
            g = cc11001100_hook("g", [], "var-init");
          return a.forEach(function (v, y) {
            h = cc11001100_hook("h", h.then(function () {
              return c(v, y, a);
            }).then(function (x) {
              return g.push(x);
            }), "assign");
          }), h.then(function () {
            return g;
          });
        };
        return b(w, function (a) {
          return "function" == typeof a && v === y ? a() : void 0;
        }).catch(h).then(function () {
          g = cc11001100_hook("g", null, "assign");
        });
      }
      var g,
        v = cc11001100_hook("v", 1e4, "var-init"),
        y = cc11001100_hook("y", 0, "var-init"),
        w = cc11001100_hook("w", [], "var-init"),
        exports = cc11001100_hook("exports", {
          reset: cc11001100_hook("reset", a, "object-key-init"),
          exec: cc11001100_hook("exec", h, "object-key-init"),
          aborted: cc11001100_hook("aborted", !1, "object-key-init")
        }, "var-init");
      return exports;
    }
    function y(h, v, y) {
      cc11001100_hook("h", h, "function-parameter");
      cc11001100_hook("v", v, "function-parameter");
      cc11001100_hook("y", y, "function-parameter");
      if (h.service && h.service.guard && h.service.guard(h, v) === !1) return !1;
      if (v.service && v.service.guard && v.service.guard(h, v) === !1) return !1;
      var w = cc11001100_hook("w", v.service && v.service.name, "var-init"),
        b = cc11001100_hook("b", h.service && h.service.name, "var-init"),
        R = cc11001100_hook("R", a.getImpl(w, b), "var-init");
      if (R) {
        var A = cc11001100_hook("A", c.assign({
          prev: cc11001100_hook("prev", v, "object-key-init"),
          current: cc11001100_hook("current", h, "object-key-init")
        }, h, y), "var-init");
        return R(v.service, h.service, A);
      }
      return g(h, v, y);
    }
    var w = cc11001100_hook("w", v(), "var-init");
    return y;
  };
}), define("ralltiir/src/doc", ["require"], function () {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    function c() {
      var c = cc11001100_hook("c", a.querySelector("#sfr-app"), "var-init");
      c || a.body.appendChild(h);
    }
    var h = cc11001100_hook("h", a.querySelector("#sfr-app"), "var-init");
    return h || (h = cc11001100_hook("h", a.createElement("div"), "assign"), h.setAttribute("id", "sfr-app")), h.ensureAttached = cc11001100_hook("h.ensureAttached", c, "assign"), h.ensureAttached(), h;
  }
  return a;
}), define("ralltiir/src/index", ["ralltiir/src/utils/di", "ralltiir/src/config"], function (a, c) {
  var h = cc11001100_hook("h", new a(c), "var-init");
  return Object.keys(c).forEach(h.resolve, h), h.container;
}), define("ralltiir/src/lang/map", ["require", "@searchfe/underscore"], function (require) {
  function a() {
    this.size = cc11001100_hook("this.size", 0, "assign"), this._data = cc11001100_hook("this._data", {}, "assign");
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    return h.isRegExp(a) ? "reg_" + a : h.isString(a) ? "str_" + a : "other_" + a;
  }
  var h = cc11001100_hook("h", require("@searchfe/underscore"), "var-init");
  return a.prototype.set = cc11001100_hook("a.prototype.set", function (a, h) {
    var g = cc11001100_hook("g", c(a), "var-init");
    this._data.hasOwnProperty(g) || this.size++, this._data[g] = cc11001100_hook("this._data[g]", {
      key: cc11001100_hook("key", a, "object-key-init"),
      value: cc11001100_hook("value", h, "object-key-init")
    }, "assign");
  }, "assign"), a.prototype.keys = cc11001100_hook("a.prototype.keys", function () {
    var a = cc11001100_hook("a", this._data, "var-init");
    return Object.keys(this._data).map(function (c) {
      var h = cc11001100_hook("h", a[c], "var-init");
      return h.key;
    });
  }, "assign"), a.prototype.forEach = cc11001100_hook("a.prototype.forEach", function (a) {
    var c = cc11001100_hook("c", this._data, "var-init");
    Object.keys(this._data).forEach(function (h) {
      var g = cc11001100_hook("g", c[h], "var-init");
      a(g.value, g.key);
    });
  }, "assign"), a.prototype.has = cc11001100_hook("a.prototype.has", function (a) {
    var h = cc11001100_hook("h", c(a), "var-init");
    return this._data.hasOwnProperty(h);
  }, "assign"), a.prototype.delete = cc11001100_hook("a.prototype.delete", function (a) {
    var h = cc11001100_hook("h", c(a), "var-init");
    this._data.hasOwnProperty(h) && (delete this._data[h], this.size--);
  }, "assign"), a.prototype.get = cc11001100_hook("a.prototype.get", function (a) {
    var h = cc11001100_hook("h", c(a), "var-init"),
      g = cc11001100_hook("g", this._data[h], "var-init");
    return g ? g.value : void 0;
  }, "assign"), a.prototype.clear = cc11001100_hook("a.prototype.clear", function () {
    this.size = cc11001100_hook("this.size", 0, "assign"), this._data = cc11001100_hook("this._data", {}, "assign");
  }, "assign"), a;
}), define("ralltiir/src/resource", ["require", "ralltiir/src/utils/http", "@searchfe/underscore"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.url = cc11001100_hook("this.url", a, "assign");
  }
  var c = cc11001100_hook("c", require("ralltiir/src/utils/http"), "var-init"),
    h = cc11001100_hook("h", require("@searchfe/underscore"), "var-init");
  return a.prototype = cc11001100_hook("a.prototype", {
    getUrl: function (a) {
      var c = cc11001100_hook("c", this.url, "var-init");
      return h.forOwn(a, function (a, h) {
        c = cc11001100_hook("c", c.replace(":" + h, a), "assign");
      }), c = cc11001100_hook("c", c.replace(/:[a-zA-Z]\w*/g, ""), "assign");
    },
    create: function (a, h) {
      var g = cc11001100_hook("g", this.getUrl(h), "var-init");
      return c.post(g, a);
    },
    query: function (a) {
      var h = cc11001100_hook("h", this.getUrl(a), "var-init");
      return c.get(h);
    },
    update: function (a, h) {
      var g = cc11001100_hook("g", this.getUrl(h), "var-init");
      return c.put(g, a);
    },
    "delete": function (a) {
      var h = cc11001100_hook("h", this.getUrl(a), "var-init");
      return c.delete(h);
    }
  }, "assign"), a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign"), a;
}), define("ralltiir/src/router/router", ["require", "@searchfe/underscore", "ralltiir/src/router/router/config", "ralltiir/src/router/router/controller", "ralltiir/src/utils/logger"], function (require) {
  function a() {
    function a(a) {
      cc11001100_hook("a", a, "function-parameter");
      var c = cc11001100_hook("c", -1, "var-init");
      return a = cc11001100_hook("a", a.toString(), "assign"), S.some(function (h, i) {
        return h.raw.toString() === a && (c = cc11001100_hook("c", i, "assign")), -1 !== c;
      }), c;
    }
    function w(a, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      for (var h, g = cc11001100_hook("g", {}, "var-init"), v = cc11001100_hook("v", c.params || [], "var-init"), y = cc11001100_hook("y", a.match(c.path) || [], "var-init"), i = cc11001100_hook("i", 1, "var-init"); i < y.length; i++) h = cc11001100_hook("h", v[i - 1] || "$" + i, "assign"), g[h] = cc11001100_hook("g[h]", decodeURIComponent(y[i]), "assign");
      return g;
    }
    function b(a, h) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("h", h, "function-parameter");
      y.log("router apply: " + a), h = cc11001100_hook("h", h || {}, "assign");
      var v,
        b = cc11001100_hook("b", c({}, a.getQuery()), "var-init"),
        A = cc11001100_hook("A", {}, "var-init"),
        O = cc11001100_hook("O", a.getPath(), "var-init");
      if (v = cc11001100_hook("v", R(a), "assign"), !v) throw new Error("can not find route for: " + O);
      v.path instanceof RegExp && v.path.test(O) && (A = cc11001100_hook("A", w(O, v), "assign"));
      var S = cc11001100_hook("S", {
          path: cc11001100_hook("path", O, "object-key-init"),
          pathPattern: cc11001100_hook("pathPattern", v.raw, "object-key-init"),
          query: cc11001100_hook("query", b, "object-key-init"),
          params: cc11001100_hook("params", A, "object-key-init"),
          url: cc11001100_hook("url", g.ignoreRoot(a.toString()), "object-key-init"),
          originalUrl: cc11001100_hook("originalUrl", a.toString(), "object-key-init"),
          options: cc11001100_hook("options", h, "object-key-init")
        }, "var-init"),
        P = cc11001100_hook("P", [S, E], "var-init");
      E = cc11001100_hook("E", S, "assign"), y.log("router calling handler: " + v.name), v.fn.apply(v.thisArg, P);
    }
    function R(a) {
      cc11001100_hook("a", a, "function-parameter");
      var c,
        h,
        g = cc11001100_hook("g", a.getPath(), "var-init");
      return y.log("finding handlers for", a, "in rules:", S), S.some(function (v) {
        return v.path instanceof RegExp ? v.path.test(g) && (c = cc11001100_hook("c", v, "assign")) : a.equalPath(v.path) && (c = cc11001100_hook("c", v, "assign")), v.path || (h = cc11001100_hook("h", v, "assign")), !!c;
      }), c || h;
    }
    function A(a) {
      cc11001100_hook("a", a, "function-parameter");
      var c = cc11001100_hook("c", {
        params: cc11001100_hook("params", [], "object-key-init")
      }, "var-init");
      return c.path = cc11001100_hook("c.path", a.replace(/:([^/]+)/g, function (a, h) {
        return c.params.push(h), "([^/]+)";
      }), "assign"), c.path = cc11001100_hook("c.path", new RegExp("^" + c.path + "$"), "assign"), c;
    }
    var O = cc11001100_hook("O", {}, "var-init"),
      S = cc11001100_hook("S", [], "var-init"),
      E = cc11001100_hook("E", {}, "var-init");
    return O.pathPattern = cc11001100_hook("O.pathPattern", function (a) {
      a = cc11001100_hook("a", g.ignoreRoot(a), "assign");
      var c = cc11001100_hook("c", g.createURL(a), "var-init"),
        h = cc11001100_hook("h", R(c), "var-init");
      return h ? h.raw : null;
    }, "assign"), O.reset = cc11001100_hook("O.reset", function (a, c, h) {
      g.reset(a, c, h);
    }, "assign"), O.config = cc11001100_hook("O.config", function (a) {
      a = cc11001100_hook("a", a || {}, "assign");
      var g = cc11001100_hook("g", a.root, "var-init");
      g && "/" === g.charAt(g.length - 1) && (g = cc11001100_hook("g", a.root = cc11001100_hook("a.root", g.substring(0, g.length - 1), "assign"), "assign")), g && "/" !== g.charAt(0) && (a.root = cc11001100_hook("a.root", "/" + g, "assign")), c(h, a);
    }, "assign"), O.add = cc11001100_hook("O.add", function (h, g, y) {
      if (a(h) >= 0) throw new Error("path already exist");
      var w = cc11001100_hook("w", {
        raw: cc11001100_hook("raw", h, "object-key-init"),
        path: cc11001100_hook("path", h, "object-key-init"),
        fn: cc11001100_hook("fn", g, "object-key-init"),
        thisArg: cc11001100_hook("thisArg", y, "object-key-init")
      }, "var-init");
      v.isString(h) && v.contains(h, ":") && (w = cc11001100_hook("w", c(w, A(h)), "assign")), S.push(w);
    }, "assign"), O.remove = cc11001100_hook("O.remove", function (c) {
      var i = cc11001100_hook("i", a(c), "var-init");
      i >= 0 && S.splice(i, 1);
    }, "assign"), O.exist = cc11001100_hook("O.exist", function (c) {
      return a(c) >= 0;
    }, "assign"), O.clear = cc11001100_hook("O.clear", function () {
      S = cc11001100_hook("S", [], "assign");
    }, "assign"), O.redirect = cc11001100_hook("O.redirect", function (a, c, h) {
      y.log("router redirecting to: " + a), g.redirect(a, c, h);
    }, "assign"), O.start = cc11001100_hook("O.start", function (a) {
      O.config(a), g.init(b);
    }, "assign"), O.stop = cc11001100_hook("O.stop", function () {
      g.dispose(), O.clear(), E = cc11001100_hook("E", {}, "assign");
    }, "assign"), O.controller = cc11001100_hook("O.controller", function (a) {
      var c = cc11001100_hook("c", g, "var-init");
      g = cc11001100_hook("g", a, "assign"), v.forOwn(c, function (a, c) {
        g.hasOwnProperty(c) || (g[c] = cc11001100_hook("g[c]", a, "assign"));
      });
    }, "assign"), O.getState = cc11001100_hook("O.getState", function () {
      return E;
    }, "assign"), O.ignoreRoot = cc11001100_hook("O.ignoreRoot", g.ignoreRoot, "assign"), O.createURL = cc11001100_hook("O.createURL", g.createURL, "assign"), O;
  }
  var c = cc11001100_hook("c", require("@searchfe/underscore").extend, "var-init"),
    h = cc11001100_hook("h", require("ralltiir/src/router/router/config"), "var-init"),
    g = cc11001100_hook("g", require("ralltiir/src/router/router/controller"), "var-init"),
    v = cc11001100_hook("v", require("@searchfe/underscore"), "var-init"),
    y = cc11001100_hook("y", require("ralltiir/src/utils/logger"), "var-init");
  return a;
}), define("ralltiir/src/router/router/URL", ["require", "ralltiir/src/utils/uri/component/Path", "ralltiir/src/utils/uri/component/Query", "ralltiir/src/utils/uri/component/Fragment", "ralltiir/src/router/router/config"], function (require) {
  function a(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", b || {}, "assign"), a = cc11001100_hook("a", (a || "").trim() || v.path, "assign");
    var R = cc11001100_hook("R", y.exec(a), "var-init");
    R || console.warn("URI not valid:");
    var A = cc11001100_hook("A", this.token = cc11001100_hook("this.token", b.token || w, "assign"), "var-init"),
      O = cc11001100_hook("O", b.root || v.root, "var-init");
    "/" === O.charAt(O.length - 1) && (O = cc11001100_hook("O", O.substring(0, O.length - 1), "assign")), this.root = cc11001100_hook("this.root", O, "assign"), a = cc11001100_hook("a", a.split("#"), "assign"), this.fragment = cc11001100_hook("this.fragment", new g(a[1]), "assign"), a = cc11001100_hook("a", a[0].split(A), "assign");
    var S = cc11001100_hook("S", b.base || {}, "var-init");
    this.path = cc11001100_hook("this.path", new c(a[0], S.path), "assign"), this.query = cc11001100_hook("this.query", new h(a[1]), "assign");
    var E = cc11001100_hook("E", this.path.get(), "var-init");
    this.outRoot = cc11001100_hook("this.outRoot", 0 === E.indexOf(".."), "assign"), this.outRoot && (E = cc11001100_hook("E", c.resolve(O + "/", E), "assign"), 0 === E.indexOf(O) && (E = cc11001100_hook("E", E.substring(O.length), "assign"), this.path.set(E), this.outRoot = cc11001100_hook("this.outRoot", !1, "assign"))), this.outRoot || "/" === E.charAt(0) || this.path.set("/" + E), b.query && this.query.add(b.query);
  }
  var c = cc11001100_hook("c", require("ralltiir/src/utils/uri/component/Path"), "var-init"),
    h = cc11001100_hook("h", require("ralltiir/src/utils/uri/component/Query"), "var-init"),
    g = cc11001100_hook("g", require("ralltiir/src/utils/uri/component/Fragment"), "var-init"),
    v = cc11001100_hook("v", require("ralltiir/src/router/router/config"), "var-init"),
    y = cc11001100_hook("y", new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"), "var-init"),
    w = cc11001100_hook("w", "?", "var-init");
  return a.prototype.toString = cc11001100_hook("a.prototype.toString", function () {
    var a = cc11001100_hook("a", this.root, "var-init"),
      h = cc11001100_hook("h", this.path.get(), "var-init");
    return h = cc11001100_hook("h", this.outRoot ? c.resolve(a + "/", h) : a + h, "assign"), h + this.query.toString(this.token) + this.fragment.toString();
  }, "assign"), a.prototype.equalPath = cc11001100_hook("a.prototype.equalPath", function (a) {
    return this.path.get() === a;
  }, "assign"), a.prototype.equal = cc11001100_hook("a.prototype.equal", function (a) {
    return this.query.equal(a.query) && this.equalPath(a.path.get());
  }, "assign"), a.prototype.equalWithFragment = cc11001100_hook("a.prototype.equalWithFragment", function (a) {
    return this.equal(a) && this.fragment.equal(a.fragment);
  }, "assign"), a.prototype.getQuery = cc11001100_hook("a.prototype.getQuery", function () {
    return this.query.get();
  }, "assign"), a.prototype.getPath = cc11001100_hook("a.prototype.getPath", function () {
    return this.path.get();
  }, "assign"), a;
}), define("ralltiir/src/router/router/config", [], {
  path: cc11001100_hook("path", "/", "object-key-init"),
  root: cc11001100_hook("root", "", "object-key-init"),
  mode: cc11001100_hook("mode", "async", "object-key-init")
}), define("ralltiir/src/router/router/controller", ["require", "@searchfe/underscore", "ralltiir/src/router/router/URL", "ralltiir/src/router/router/config"], function (require) {
  function a(a, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    c(a, h) || (w(a, h), b = cc11001100_hook("b", a, "assign"));
  }
  function c(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return b && a.equal(b) && !c.force;
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", O.root, "var-init");
    if ("/" === a.charAt(0) && c) if (0 === a.indexOf(c)) a = cc11001100_hook("a", a.replace(c, ""), "assign");else {
      var h = cc11001100_hook("h", c.split("/").slice(1), "var-init");
      h = cc11001100_hook("h", h.map(function () {
        return "..";
      }), "assign"), a = cc11001100_hook("a", h.join("/") + a, "assign"), b = cc11001100_hook("b", null, "assign");
    }
    return a;
  }
  function g(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a || (a = cc11001100_hook("a", h(location.pathname), "assign")), new A(a, {
      query: cc11001100_hook("query", c, "object-key-init"),
      base: cc11001100_hook("base", b, "object-key-init")
    });
  }
  function v(e, c) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (e = cc11001100_hook("e", e || {}, "assign"), !R.get(e, "state.disableServiceDispatch")) {
      var v = cc11001100_hook("v", h(location.pathname), "var-init");
      if (location.search.length > 1 && (v += cc11001100_hook("v", location.search, "assign")), v = cc11001100_hook("v", g(v), "assign"), v.outRoot) return y(v.toString(), !0);
      var w = cc11001100_hook("w", c ? {
        src: cc11001100_hook("src", "sync", "object-key-init")
      } : R.extend({}, e.state, {
        src: cc11001100_hook("src", "history", "object-key-init")
      }), "var-init");
      a(v, w);
    }
  }
  function y(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    exports.dispose(), c ? location.replace(a) : location.href = cc11001100_hook("location.href", a, "assign");
  }
  var w,
    b,
    R = cc11001100_hook("R", require("@searchfe/underscore"), "var-init"),
    A = cc11001100_hook("A", require("ralltiir/src/router/router/URL"), "var-init"),
    O = cc11001100_hook("O", require("ralltiir/src/router/router/config"), "var-init"),
    exports = cc11001100_hook("exports", {}, "var-init");
  return exports.init = cc11001100_hook("exports.init", function (a) {
    window.addEventListener("popstate", v, !1), w = cc11001100_hook("w", a, "assign"), v(null, !0);
  }, "assign"), exports.redirect = cc11001100_hook("exports.redirect", function (h, v, w) {
    return w = cc11001100_hook("w", w || {}, "assign"), h = cc11001100_hook("h", g(h, v), "assign"), h.outRoot || "page" === O.mode ? !c(h, w) && y(h.toString()) : (b.equalWithFragment(h) || history.pushState(w, w.title, h.toString()), void (w.silent || a(h, w)));
  }, "assign"), exports.reset = cc11001100_hook("exports.reset", function (h, v, w) {
    return w = cc11001100_hook("w", w || {}, "assign"), h = cc11001100_hook("h", g(h, v), "assign"), h.outRoot || "page" === O.mode ? !c(h, w) && y(h.toString()) : (w.silent ? b = cc11001100_hook("b", h, "assign") : a(h, w), void history.replaceState(w, w.title, h.toString()));
  }, "assign"), exports.dispose = cc11001100_hook("exports.dispose", function () {
    window.removeEventListener("popstate", v, !1), b = cc11001100_hook("b", null, "assign");
  }, "assign"), exports.ignoreRoot = cc11001100_hook("exports.ignoreRoot", h, "assign"), exports.createURL = cc11001100_hook("exports.createURL", g, "assign"), exports;
}), define("ralltiir/src/services", ["require", "ralltiir/src/lang/map", "@searchfe/underscore", "@searchfe/assert", "ralltiir/src/utils/logger", "ralltiir/src/utils/cache"], function (require) {
  var a = cc11001100_hook("a", require("ralltiir/src/lang/map"), "var-init"),
    c = cc11001100_hook("c", require("@searchfe/underscore"), "var-init"),
    h = cc11001100_hook("h", require("@searchfe/assert"), "var-init"),
    g = cc11001100_hook("g", require("ralltiir/src/utils/logger"), "var-init"),
    v = cc11001100_hook("v", require("ralltiir/src/utils/cache"), "var-init");
  return function (y) {
    function w(n) {
      cc11001100_hook("n", n, "function-parameter");
      return exports.serviceInstances.setLimit(n);
    }
    function b(h) {
      cc11001100_hook("h", h, "function-parameter");
      F = cc11001100_hook("F", new a(), "assign"), N = cc11001100_hook("N", h, "assign"), C = cc11001100_hook("C", exports.urlEntries = cc11001100_hook("exports.urlEntries", new a(), "assign"), "assign"), I = cc11001100_hook("I", exports.serviceInstances = cc11001100_hook("exports.serviceInstances", v.create("services", {
        onRemove: function (a, h, g) {
          return !a.singleton && c.isFunction(a.destroy) ? a.destroy(h, g) : void 0;
        },
        limit: cc11001100_hook("limit", 8, "object-key-init")
      }), "assign"), "assign");
    }
    function R() {
      v.destroy("services");
    }
    function A(a, v, w) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("v", v, "function-parameter");
      cc11001100_hook("w", w, "function-parameter");
      h(a, "invalid path pattern"), h(w, "cannot register empty service"), h(!C.has(a), "path already registerd"), v = cc11001100_hook("v", c.assign({}, v, {
        pathPattern: cc11001100_hook("pathPattern", a, "object-key-init")
      }), "assign"), y.add(a, N), C.set(a, {
        service: cc11001100_hook("service", w, "object-key-init"),
        config: cc11001100_hook("config", v, "object-key-init")
      }), g.info("service", w, "registered to", a);
    }
    function O(a, g) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("g", g, "function-parameter");
      h(g, "message target should be set explicitly"), I.forEach(function (h) {
        c.isFunction(h.onMessage) && ("*" === g || g === h.name) && setTimeout(function () {
          h.onMessage(a);
        });
      });
    }
    function S(a) {
      cc11001100_hook("a", a, "function-parameter");
      return C.has(a);
    }
    function E() {
      C.keys().forEach(P), C.clear();
    }
    function P(a) {
      cc11001100_hook("a", a, "function-parameter");
      h(a, "invalid path pattern"), h(S(a), "path not registered"), y.remove(a), C.delete(a), g.info("service unregistered from: " + a);
    }
    function j(a) {
      cc11001100_hook("a", a, "function-parameter");
      var c = cc11001100_hook("c", F.get(a), "var-init");
      return void 0 === c ? void 0 : I.get(c);
    }
    function k(a, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      var h = cc11001100_hook("h", H++, "var-init");
      return F.set(a, h), c.id = cc11001100_hook("c.id", h, "assign"), I.set(h, c), c;
    }
    function U(a, h, g) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("h", h, "function-parameter");
      cc11001100_hook("g", g, "function-parameter");
      var v = cc11001100_hook("v", j(a), "var-init");
      if (v) return v;
      arguments.length < 2 && (h = cc11001100_hook("h", y.pathPattern(a), "assign"));
      var w = cc11001100_hook("w", C.get(h), "var-init");
      if (w) {
        var b = cc11001100_hook("b", w.service, "var-init"),
          R = cc11001100_hook("R", c.assign({}, w.config, g), "var-init"),
          A = cc11001100_hook("A", b.singleton ? b : new b(a, R), "var-init");
        return k(a, A);
      }
    }
    function L(a, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      var h = cc11001100_hook("h", F.get(a), "var-init");
      return void 0 !== h ? (F.set(c, h), !0) : !1;
    }
    function _(a, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      void 0 !== c.id ? F.set(a, c.id) : k(a, c);
    }
    var I,
      C,
      N,
      F,
      exports = cc11001100_hook("exports", {
        init: cc11001100_hook("init", b, "object-key-init"),
        destroy: cc11001100_hook("destroy", R, "object-key-init"),
        register: cc11001100_hook("register", A, "object-key-init"),
        postMessage: cc11001100_hook("postMessage", O, "object-key-init"),
        unRegister: cc11001100_hook("unRegister", P, "object-key-init"),
        isRegistered: cc11001100_hook("isRegistered", S, "object-key-init"),
        unRegisterAll: cc11001100_hook("unRegisterAll", E, "object-key-init"),
        getOrCreate: cc11001100_hook("getOrCreate", U, "object-key-init"),
        setInstanceLimit: cc11001100_hook("setInstanceLimit", w, "object-key-init"),
        copyServiceMapping: cc11001100_hook("copyServiceMapping", L, "object-key-init"),
        urlEntries: cc11001100_hook("urlEntries", null, "object-key-init"),
        setInstance: cc11001100_hook("setInstance", _, "object-key-init")
      }, "var-init"),
      H = cc11001100_hook("H", 0, "var-init");
    return exports;
  };
}), define("ralltiir/src/transitions", ["require", "@searchfe/underscore"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.impl = cc11001100_hook("a.impl", a.impl || v.noop, "assign"), g.push(a);
  }
  function c() {
    g = cc11001100_hook("g", [], "assign");
  }
  function h(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < g.length; i++) {
      var h = cc11001100_hook("h", g[i], "var-init");
      if (h.from === a && h.to === c) return h.impl;
    }
  }
  var g = cc11001100_hook("g", [], "var-init"),
    v = cc11001100_hook("v", require("@searchfe/underscore"), "var-init");
  return {
    register: cc11001100_hook("register", a, "object-key-init"),
    getImpl: cc11001100_hook("getImpl", h, "object-key-init"),
    clear: cc11001100_hook("clear", c, "object-key-init")
  };
}), define("ralltiir/src/utils/cache-namespace", ["require", "@searchfe/underscore"], function (require) {
  function a() {}
  function c(c, g) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    this.name = cc11001100_hook("this.name", c, "assign"), this.list = cc11001100_hook("this.list", [], "assign"), this.options = cc11001100_hook("this.options", h.assign({
      limit: cc11001100_hook("limit", 3, "object-key-init"),
      onRemove: cc11001100_hook("onRemove", a, "object-key-init")
    }, g), "assign");
  }
  var h = cc11001100_hook("h", require("@searchfe/underscore"), "var-init");
  return c.prototype = cc11001100_hook("c.prototype", {
    constructor: cc11001100_hook("constructor", c, "object-key-init"),
    setLimit: function (a) {
      this.options.limit = cc11001100_hook("this.options.limit", a, "assign");
    },
    get: function (a) {
      var c = cc11001100_hook("c", this.findIndexByKey(a), "var-init");
      if (-1 === c) return void 0;
      var h = cc11001100_hook("h", this.list[c], "var-init");
      return this.list.splice(c, 1), this.list.push(h), h.value;
    },
    set: function (a, c) {
      for (this.remove(a); this.list.length >= this.options.limit;) {
        var h = cc11001100_hook("h", this.list.shift(), "var-init");
        this.options.onRemove(h.value, h.key, !0);
      }
      return this.list.push({
        key: cc11001100_hook("key", a, "object-key-init"),
        value: cc11001100_hook("value", c, "object-key-init")
      }), this;
    },
    contains: function (a) {
      return this.has(a);
    },
    has: function (a) {
      return this.findIndexByKey(a) > -1;
    },
    rename: function (a, c) {
      if (a === c) return this;
      this.remove(c);
      var h = cc11001100_hook("h", this.findIndexByKey(a), "var-init");
      if (-1 === h) throw new Error("key not found:" + a);
      return this.list[h].key = cc11001100_hook("this.list[h].key", c, "assign"), this;
    },
    remove: function (a) {
      var c = cc11001100_hook("c", this.findIndexByKey(a), "var-init");
      if (c > -1) {
        var h = cc11001100_hook("h", this.list[c], "var-init");
        this.options.onRemove(h.value, h.key, !1), this.list.splice(c, 1);
      }
      return this;
    },
    forEach: function (a) {
      this.list.forEach(function (c) {
        a(c.value, c.key);
      });
    },
    size: function () {
      return this.list.length;
    },
    clear: function () {
      return this.list = cc11001100_hook("this.list", [], "assign"), this;
    },
    findIndexByKey: function (a) {
      return h.findIndex(this.list, function (c) {
        return c.key === a;
      });
    }
  }, "assign"), c;
}), define("ralltiir/src/utils/cache", ["require", "@searchfe/assert", "ralltiir/src/utils/cache-namespace"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!g.hasOwnProperty(a)) throw new Error("cache namespace " + a + " undefined");
    return g[a];
  }
  var c = cc11001100_hook("c", require("@searchfe/assert"), "var-init"),
    h = cc11001100_hook("h", require("ralltiir/src/utils/cache-namespace"), "var-init"),
    g = cc11001100_hook("g", {}, "var-init"),
    exports = cc11001100_hook("exports", {}, "var-init");
  return exports.create = cc11001100_hook("exports.create", function (a, v) {
    return c(a, "cannot create namespace with empty name"), c(!g[a], "namespace with " + a + " already created"), g[a] = cc11001100_hook("g[a]", new h(a, v), "assign");
  }, "assign"), exports.destroy = cc11001100_hook("exports.destroy", function (a) {
    c(g[a], "namespace with " + a + " not exist"), delete g[a];
  }, "assign"), exports.using = cc11001100_hook("exports.using", function (c) {
    return a(c);
  }, "assign"), exports.set = cc11001100_hook("exports.set", function (c, h, g) {
    return a(c).set(h, g);
  }, "assign"), exports.get = cc11001100_hook("exports.get", function (c, h) {
    return a(c).get(h);
  }, "assign"), exports.size = cc11001100_hook("exports.size", function (c) {
    return a(c).size();
  }, "assign"), exports.rename = cc11001100_hook("exports.rename", function (c, h, g) {
    return a(c).rename(h, g);
  }, "assign"), exports.remove = cc11001100_hook("exports.remove", function (c, h) {
    return a(c).remove(h);
  }, "assign"), exports.clear = cc11001100_hook("exports.clear", function (c) {
    return 0 !== arguments.length ? a(c).clear() : void (g = cc11001100_hook("g", {}, "assign"));
  }, "assign"), exports.contains = cc11001100_hook("exports.contains", function (a, c) {
    if (0 === arguments.length) throw new Error("namespace not specified");
    return 1 === arguments.length ? g.hasOwnProperty(a) : g.hasOwnProperty(a) ? g[a].contains(c) : !1;
  }, "assign"), exports.has = cc11001100_hook("exports.has", function (a) {
    return g.hasOwnProperty(a);
  }, "assign"), exports;
}), define("ralltiir/src/utils/di", ["require", "@searchfe/assert", "@searchfe/underscore"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.config = cc11001100_hook("this.config", this.normalize(a), "assign"), this.container = cc11001100_hook("this.container", Object.create(null), "assign");
  }
  var c = cc11001100_hook("c", require("@searchfe/assert"), "var-init"),
    h = cc11001100_hook("h", require("@searchfe/underscore"), "var-init");
  return a.prototype.resolve = cc11001100_hook("a.prototype.resolve", function (a) {
    var h = cc11001100_hook("h", this.config[a], "var-init");
    if (c(h, "module declaration not found: " + a), this.container[a] && h.cache) return this.container[a];
    switch (void 0 === h.value && h.module && (h.value = cc11001100_hook("h.value", h.module, "assign")), h.type) {
      case "value":
        return this.container[a] = cc11001100_hook("this.container[a]", h.value, "assign");
      case "factory":
        c("function" == typeof h.value, "entity not injectable: " + h.value);
        var g = cc11001100_hook("g", h.args || [], "var-init");
        return this.container[a] = cc11001100_hook("this.container[a]", this.inject(h.value, g), "assign");
      default:
        throw new Error("DI type " + h.type + " not recognized");
    }
  }, "assign"), a.prototype.inject = cc11001100_hook("a.prototype.inject", function (a, c) {
    var h = cc11001100_hook("h", c.map(function (a) {
      return this.resolve(a);
    }, this), "var-init");
    return a.apply(null, h);
  }, "assign"), a.prototype.normalize = cc11001100_hook("a.prototype.normalize", function (a) {
    return h.forOwn(a, function (a) {
      void 0 === a.cache && (a.cache = cc11001100_hook("a.cache", !0, "assign")), void 0 === a.type && (a.type = cc11001100_hook("a.type", "value", "assign"));
    }), a;
  }, "assign"), a;
}), define("ralltiir/src/utils/dom", ["require"], function () {
  function a(a, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    c(a, h) || (a.className && (a.className += cc11001100_hook("a.className", " ", "assign")), a.className += cc11001100_hook("a.className", h, "assign"));
  }
  function c(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return h(c).test(a.className);
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new RegExp("(^|\\s)" + a + "(\\s|$)");
  }
  return {
    addClass: cc11001100_hook("addClass", a, "object-key-init"),
    hasClass: cc11001100_hook("hasClass", c, "object-key-init")
  };
}), define("ralltiir/src/utils/emitter", ["require"], function () {
  function a() {}
  var c = cc11001100_hook("c", a.prototype, "var-init");
  c._getEvents = cc11001100_hook("c._getEvents", function () {
    return this._events || (this._events = cc11001100_hook("this._events", {}, "assign")), this._events;
  }, "assign"), c._getMaxListeners = cc11001100_hook("c._getMaxListeners", function () {
    return isNaN(this.maxListeners) && (this.maxListeners = cc11001100_hook("this.maxListeners", 10, "assign")), this.maxListeners;
  }, "assign"), c.on = cc11001100_hook("c.on", function (a, c) {
    var h = cc11001100_hook("h", this._getEvents(), "var-init"),
      g = cc11001100_hook("g", this._getMaxListeners(), "var-init");
    h[a] = cc11001100_hook("h[a]", h[a] || [], "assign");
    var v = cc11001100_hook("v", h[a].length, "var-init");
    if (v >= g && 0 !== g) {
      var y = cc11001100_hook("y", "Warning: possible Emitter memory leak detected. " + v + " listeners added.", "var-init");
      console.warn(y);
    }
    return h[a].push(c), this;
  }, "assign"), c.once = cc11001100_hook("c.once", function (a, c) {
    function h() {
      return g.off(a, h), c.apply(this, arguments);
    }
    var g = cc11001100_hook("g", this, "var-init");
    return h.listener = cc11001100_hook("h.listener", c, "assign"), this.on(a, h), this;
  }, "assign"), c.off = cc11001100_hook("c.off", function (a, c) {
    var h = cc11001100_hook("h", this._getEvents(), "var-init");
    if (0 === arguments.length) return this._events = cc11001100_hook("this._events", {}, "assign"), this;
    var g = cc11001100_hook("g", h[a], "var-init");
    if (!g) return this;
    if (1 === arguments.length) return delete h[a], this;
    for (var v, i = cc11001100_hook("i", 0, "var-init"); i < g.length; i++) if (v = cc11001100_hook("v", g[i], "assign"), v === c || v.listener === c) {
      g.splice(i, 1);
      break;
    }
    return this;
  }, "assign"), c.emit = cc11001100_hook("c.emit", function (a) {
    for (var c = cc11001100_hook("c", this._getEvents(), "var-init"), h = cc11001100_hook("h", c[a], "var-init"), g = cc11001100_hook("g", !0, "var-init"), v = cc11001100_hook("v", !1, "var-init"), y = cc11001100_hook("y", [], "var-init"), i = cc11001100_hook("i", 1, "var-init"); i < arguments.length; i++) y.push(arguments[i]);
    if (h) for (h = cc11001100_hook("h", h.slice(0), "assign"), i = cc11001100_hook("i", 0, "assign"); i < h.length; i++) try {
      g = cc11001100_hook("g", h[i].apply(this, y), "assign"), g === !1 && (v = cc11001100_hook("v", !0, "assign"));
    } catch (e) {
      console.error(e);
    }
    return v;
  }, "assign"), c.listeners = cc11001100_hook("c.listeners", function (a) {
    var c = cc11001100_hook("c", this._getEvents(), "var-init");
    return c[a] || [];
  }, "assign"), c.setMaxListeners = cc11001100_hook("c.setMaxListeners", function (a) {
    return this.maxListeners = cc11001100_hook("this.maxListeners", a, "assign"), this;
  }, "assign");
  var h = cc11001100_hook("h", Object.keys(c), "var-init");
  return a.mixin = cc11001100_hook("a.mixin", function (a) {
    for (var g, i = cc11001100_hook("i", 0, "var-init"), v = cc11001100_hook("v", h.length, "var-init"); v > i; i++) g = cc11001100_hook("g", h[i], "assign"), a[g] = cc11001100_hook("a[g]", c[g], "assign");
    return a;
  }, "assign"), a;
}), define("ralltiir/src/utils/http", ["require", "@searchfe/underscore", "ralltiir/src/utils/url"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof FormData ? "multipart/form-data" : "application/x-www-form-urlencoded";
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c;
    try {
      c = cc11001100_hook("c", exports.createXHR(), "assign");
    } catch (e) {
      return Promise.reject(e);
    }
    return c.open(a.method, a.url, !0), g.forOwn(a.headers, function (a, h) {
      c.setRequestHeader(h, a);
    }), g.assign(c, a.xhrFields), new Promise(function (g, v) {
      c.onreadystatechange = cc11001100_hook("c.onreadystatechange", function () {
        4 === c.readyState && (c = cc11001100_hook("c", h(c), "assign"), c.status >= 200 && c.status < 300 ? g(c) : v(c));
      }, "assign"), c.send(a.data);
    });
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.getAllResponseHeaders().split("\r\n").filter(g.negate(g.isEmpty)).map(function (a) {
      return g.split(a, /\s*:\s*/);
    }), "var-init");
    if (a.responseHeaders = cc11001100_hook("a.responseHeaders", g.fromPairs(c), "assign"), a.data = cc11001100_hook("a.data", a.responseText, "assign"), "application/json" === a.responseHeaders["Content-Type"]) try {
      a.data = cc11001100_hook("a.data", JSON.parse(a.responseText), "assign");
    } catch (e) {
      console.warn("Invalid JSON content with Content-Type: application/json");
    }
    return a;
  }
  var g = cc11001100_hook("g", require("@searchfe/underscore"), "var-init"),
    v = cc11001100_hook("v", require("ralltiir/src/utils/url"), "var-init"),
    exports = cc11001100_hook("exports", {}, "var-init");
  return exports.ajax = cc11001100_hook("exports.ajax", function (h, y) {
    return "object" == typeof h && (y = cc11001100_hook("y", h, "assign"), h = cc11001100_hook("h", "", "assign")), y = cc11001100_hook("y", g.defaultsDeep(y, {
      url: cc11001100_hook("url", h, "object-key-init"),
      method: cc11001100_hook("method", y && y.type || "GET", "object-key-init"),
      headers: {},
      data: cc11001100_hook("data", null, "object-key-init"),
      jsonp: cc11001100_hook("jsonp", !1, "object-key-init"),
      jsonpCallback: cc11001100_hook("jsonpCallback", "sf_http_" + Math.random().toString(36).substr(2), "object-key-init")
    }), "assign"), g.forOwn(y.headers, function (a, c) {
      y.headers[c] = cc11001100_hook("y.headers[c]", a.toLowerCase(a), "assign");
    }), (y.headers["content-type"] || y.data) && (y.headers["content-type"] = cc11001100_hook("y.headers[\"content-type\"]", y.headers["content-type"] || a(y.data), "assign")), /application\/json/.test(y.headers["content-type"]) ? y.data = cc11001100_hook("y.data", JSON.stringify(y.data), "assign") : /form-urlencoded/.test(y.headers["content-type"]) && (y.data = cc11001100_hook("y.data", v.param(y.data), "assign")), c(y);
  }, "assign"), exports.get = cc11001100_hook("exports.get", function (a, c) {
    return exports.ajax(a, {
      data: cc11001100_hook("data", c, "object-key-init")
    });
  }, "assign"), exports.post = cc11001100_hook("exports.post", function (a, c) {
    return exports.ajax(a, {
      method: cc11001100_hook("method", "POST", "object-key-init"),
      data: cc11001100_hook("data", c, "object-key-init")
    });
  }, "assign"), exports.put = cc11001100_hook("exports.put", function (a, c) {
    return exports.ajax(a, {
      method: cc11001100_hook("method", "PUT", "object-key-init"),
      data: cc11001100_hook("data", c, "object-key-init")
    });
  }, "assign"), exports.delete = cc11001100_hook("exports.delete", function (a, c) {
    return exports.ajax(a, {
      method: cc11001100_hook("method", "DELETE", "object-key-init"),
      data: cc11001100_hook("data", c, "object-key-init")
    });
  }, "assign"), exports.createXHR = cc11001100_hook("exports.createXHR", function () {
    var a = cc11001100_hook("a", !1, "var-init");
    if (window.XMLHttpRequest ? a = cc11001100_hook("a", new XMLHttpRequest(), "assign") : window.ActiveXObject && (a = cc11001100_hook("a", new ActiveXObject("Microsoft.XMLHTTP"), "assign")), !a) throw new Error("Cannot create an XHR instance");
    return a;
  }, "assign"), exports;
}), define("ralltiir/src/utils/logger", ["require", "@searchfe/underscore", "ralltiir/src/utils/emitter"], function (require) {
  function a() {
    O = cc11001100_hook("O", A = cc11001100_hook("A", Date.now(), "assign"), "assign");
  }
  function c() {
    var a = cc11001100_hook("a", Array.prototype.slice.call(arguments), "var-init");
    y && a.unshift("[" + h() + "]");
    var c,
      g = cc11001100_hook("g", new Error("logger track").stack || "", "var-init"),
      v = cc11001100_hook("v", g.split("\n")[3] || "", "var-init"),
      w = cc11001100_hook("w", "", "var-init");
    c = cc11001100_hook("c", /at\s+\(?(.*):\d+:\d+\)?$/.exec(v) || [], "assign");
    var b = cc11001100_hook("b", c[1], "var-init");
    c = cc11001100_hook("c", /([^/?#]+)([?#]|$)/.exec(b) || [], "assign");
    var R = cc11001100_hook("R", c[1], "var-init");
    w += cc11001100_hook("w", R ? R + ":" : "", "assign"), c = cc11001100_hook("c", /at ([\w\d.]+)\s*\(/.exec(v) || [], "assign");
    var A = cc11001100_hook("A", c[1] || "anonymous", "var-init");
    return w += cc11001100_hook("w", A, "assign"), a.unshift("[" + w + "]"), a;
  }
  function h() {
    var a = cc11001100_hook("a", Date.now(), "var-init"),
      c = cc11001100_hook("c", (a - A) / 1e3, "var-init"),
      h = cc11001100_hook("h", c + "(+" + (a - O) + ")", "var-init");
    return O = cc11001100_hook("O", a, "assign"), h;
  }
  function g(a, c, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    c.apply(console, h), h.unshift(a), exports.emit.apply(exports, h);
  }
  function v(a, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    return !w && /log|debug|info/.test(a) ? b.noop : function () {
      var v = cc11001100_hook("v", c.apply(null, arguments), "var-init");
      g(a, h, v);
    };
  }
  var y = cc11001100_hook("y", !!location.search.match(/rt-debug-timming/i), "var-init"),
    w = cc11001100_hook("w", !!location.search.match(/rt-debug/i), "var-init"),
    b = cc11001100_hook("b", require("@searchfe/underscore"), "var-init"),
    R = cc11001100_hook("R", require("ralltiir/src/utils/emitter"), "var-init"),
    A = cc11001100_hook("A", Date.now(), "var-init"),
    O = cc11001100_hook("O", A, "var-init"),
    exports = cc11001100_hook("exports", new R(), "var-init");
  return w && console.log("Ralltiir debug enabled"), y && console.log("Ralltiir timming debug enabled"), exports.log = cc11001100_hook("exports.log", v("log", console.log), "assign"), exports.debug = cc11001100_hook("exports.debug", v("debug", console.log), "assign"), exports.info = cc11001100_hook("exports.info", v("info", console.info), "assign"), exports.warn = cc11001100_hook("exports.warn", v("warn", console.warn), "assign"), exports.error = cc11001100_hook("exports.error", v("error", console.error), "assign"), exports.reset = cc11001100_hook("exports.reset", a, "assign"), exports;
}), define("ralltiir/src/utils/uri/URI", ["require", "ralltiir/src/utils/uri/util/uri-parser", "ralltiir/src/utils/uri/component/Scheme", "ralltiir/src/utils/uri/component/UserName", "ralltiir/src/utils/uri/component/Password", "ralltiir/src/utils/uri/component/Host", "ralltiir/src/utils/uri/component/Port", "ralltiir/src/utils/uri/component/Path", "ralltiir/src/utils/uri/component/Query", "ralltiir/src/utils/uri/component/Fragment"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", h(a), "assign");
    var c,
      v = cc11001100_hook("v", this, "var-init");
    Object.keys(g).forEach(function (h) {
      c = cc11001100_hook("c", g[h], "assign"), v[h] = cc11001100_hook("v[h]", new c(a[h]), "assign");
    });
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", [], "var-init"),
      h = cc11001100_hook("h", a.username.toString(), "var-init"),
      g = cc11001100_hook("g", a.password.toString(), "var-init"),
      v = cc11001100_hook("v", a.host.toString(), "var-init"),
      port = cc11001100_hook("port", a.port.toString(), "var-init");
    return (h || g) && c.push(h + ":" + g + "@"), c.push(v), c.push(port), c.join("");
  }
  var h = cc11001100_hook("h", require("ralltiir/src/utils/uri/util/uri-parser"), "var-init"),
    g = cc11001100_hook("g", {
      scheme: cc11001100_hook("scheme", require("ralltiir/src/utils/uri/component/Scheme"), "object-key-init"),
      username: cc11001100_hook("username", require("ralltiir/src/utils/uri/component/UserName"), "object-key-init"),
      password: cc11001100_hook("password", require("ralltiir/src/utils/uri/component/Password"), "object-key-init"),
      host: cc11001100_hook("host", require("ralltiir/src/utils/uri/component/Host"), "object-key-init"),
      port: cc11001100_hook("port", require("ralltiir/src/utils/uri/component/Port"), "object-key-init"),
      path: cc11001100_hook("path", require("ralltiir/src/utils/uri/component/Path"), "object-key-init"),
      query: cc11001100_hook("query", require("ralltiir/src/utils/uri/component/Query"), "object-key-init"),
      fragment: cc11001100_hook("fragment", require("ralltiir/src/utils/uri/component/Fragment"), "object-key-init")
    }, "var-init");
  return a.prototype.set = cc11001100_hook("a.prototype.set", function () {
    var i = cc11001100_hook("i", 0, "var-init"),
      a = cc11001100_hook("a", {}, "var-init");
    arguments.length > 1 && (a.name = cc11001100_hook("a.name", arguments[i++], "assign")), a.data = cc11001100_hook("a.data", Array.prototype.slice.call(arguments, i), "assign");
    var c = cc11001100_hook("c", this[a.name], "var-init");
    if (c) c.set.apply(c, a.data);else {
      var v = cc11001100_hook("v", this, "var-init"),
        y = cc11001100_hook("y", h(a.data[0]), "var-init");
      Object.keys(g).forEach(function (a) {
        v[a].set(y[a]);
      });
    }
  }, "assign"), a.prototype.get = cc11001100_hook("a.prototype.get", function () {
    var a = cc11001100_hook("a", {
        name: cc11001100_hook("name", arguments[0], "object-key-init"),
        data: cc11001100_hook("data", Array.prototype.slice.call(arguments, 1), "object-key-init")
      }, "var-init"),
      c = cc11001100_hook("c", this[a.name], "var-init");
    return c ? c.get.apply(c, a.data) : void 0;
  }, "assign"), a.prototype.toString = cc11001100_hook("a.prototype.toString", function (a) {
    var h,
      g = cc11001100_hook("g", this[a], "var-init");
    if (g) h = cc11001100_hook("h", g.toString(), "assign");else {
      h = cc11001100_hook("h", [], "assign");
      var v = cc11001100_hook("v", this.scheme.toString(), "var-init");
      v && h.push(v + ":");
      var y = cc11001100_hook("y", c(this), "var-init");
      v && y && h.push("//"), h.push(y), h.push(this.path.toString()), h.push(this.query.toString()), h.push(this.fragment.toString()), h = cc11001100_hook("h", h.join(""), "assign");
    }
    return h;
  }, "assign"), a.prototype.equal = cc11001100_hook("a.prototype.equal", function (c) {
    c instanceof a || (c = cc11001100_hook("c", new a(c), "assign"));
    for (var h, v = cc11001100_hook("v", !0, "var-init"), y = cc11001100_hook("y", Object.keys(g), "var-init"), i = cc11001100_hook("i", 0, "var-init"); v && (h = cc11001100_hook("h", y[i], "assign")); i++) v = cc11001100_hook("v", "port" === h ? this[h].equal(c[h].get(), this.scheme.get()) : this[h].equal(c[h]), "assign");
    return v;
  }, "assign"), a;
}), define("ralltiir/src/utils/uri/component/Abstract", ["require"], function () {
  function a() {
    var a = cc11001100_hook("a", Array.prototype.slice.call(arguments), "var-init");
    this.set.apply(this, a);
  }
  return a.prototype.get = cc11001100_hook("a.prototype.get", function () {
    return this.data;
  }, "assign"), a.prototype.set = cc11001100_hook("a.prototype.set", function (a) {
    this.data = cc11001100_hook("this.data", a || "", "assign");
  }, "assign"), a.prototype.add = cc11001100_hook("a.prototype.add", function (a) {
    this.set(a);
  }, "assign"), a.prototype.remove = cc11001100_hook("a.prototype.remove", function () {
    this.data = cc11001100_hook("this.data", "", "assign");
  }, "assign"), a.prototype.toString = cc11001100_hook("a.prototype.toString", function () {
    return this.data.toString();
  }, "assign"), a.prototype.equal = cc11001100_hook("a.prototype.equal", function (c) {
    return c instanceof a && (c = cc11001100_hook("c", c.get(), "assign")), this.data == c;
  }, "assign"), a;
}), define("ralltiir/src/utils/uri/component/Fragment", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    h.call(this, a);
  }
  var c = cc11001100_hook("c", require("@searchfe/underscore").inherits, "var-init"),
    h = cc11001100_hook("h", require("ralltiir/src/utils/uri/component/Abstract"), "var-init"),
    g = cc11001100_hook("g", "#", "var-init");
  return c(a, h), a.prototype.toString = cc11001100_hook("a.prototype.toString", function (a) {
    return a = cc11001100_hook("a", a || g, "assign"), this.data ? a + this.data : "";
  }, "assign"), a;
}), define("ralltiir/src/utils/uri/component/Host", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    h.call(this, a);
  }
  var c = cc11001100_hook("c", require("@searchfe/underscore").inherits, "var-init"),
    h = cc11001100_hook("h", require("ralltiir/src/utils/uri/component/Abstract"), "var-init");
  return c(a, h), a.prototype.set = cc11001100_hook("a.prototype.set", function (a) {
    a = cc11001100_hook("a", a || "", "assign"), this.data = cc11001100_hook("this.data", a.toLowerCase(), "assign");
  }, "assign"), a.prototype.equal = cc11001100_hook("a.prototype.equal", function (c) {
    return c = cc11001100_hook("c", c instanceof a ? c.get() : c || "", "assign"), this.data === c.toLowerCase();
  }, "assign"), a;
}), define("ralltiir/src/utils/uri/component/Password", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    h.call(this, a);
  }
  var c = cc11001100_hook("c", require("@searchfe/underscore").inherits, "var-init"),
    h = cc11001100_hook("h", require("ralltiir/src/utils/uri/component/Abstract"), "var-init");
  return c(a, h), a;
}), define("ralltiir/src/utils/uri/component/Path", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a || (a = cc11001100_hook("a", "/", "assign")), a;
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a = cc11001100_hook("a", a.split("/"), "assign"), a.pop(), a.join("/");
  }
  function h(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var h, g = cc11001100_hook("g", 0, "var-init"), i = cc11001100_hook("i", a.length - 1, "var-init"); h = cc11001100_hook("h", a[i], "assign"); i--) "." === h ? a.splice(i, 1) : ".." === h ? (a.splice(i, 1), g++) : g && (a.splice(i, 1), g--);
    if (c) for (; g-- > 0;) a.unshift("..");
    return a;
  }
  function g(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    y.call(this, a, c);
  }
  var v = cc11001100_hook("v", require("@searchfe/underscore").inherits, "var-init"),
    y = cc11001100_hook("y", require("ralltiir/src/utils/uri/component/Abstract"), "var-init");
  return g.resolve = cc11001100_hook("g.resolve", function (a, v) {
    if (v = cc11001100_hook("v", v || "", "assign"), "/" === v.charAt(0)) return g.resolve(v);
    var y = cc11001100_hook("y", "/" === a.charAt(0), "var-init"),
      w = cc11001100_hook("w", !1, "var-init");
    v ? (a = cc11001100_hook("a", c(a), "assign"), w = cc11001100_hook("w", "/" === v.charAt(v.length - 1), "assign")) : a.length > 1 && (w = cc11001100_hook("w", "/" === a.charAt(a.length - 1), "assign"));
    var b = cc11001100_hook("b", a.split("/").concat(v.split("/")).filter(function (a) {
      return !!a;
    }), "var-init");
    return b = cc11001100_hook("b", h(b, !y), "assign"), (y ? "/" : "") + (b.length > 0 ? b.join("/") + (w ? "/" : "") : "");
  }, "assign"), v(g, y), g.prototype.set = cc11001100_hook("g.prototype.set", function (a, c) {
    c instanceof g && (c = cc11001100_hook("c", c.get(), "assign"));
    var h = cc11001100_hook("h", [a || ""], "var-init");
    c && h.unshift(c), this.data = cc11001100_hook("this.data", g.resolve.apply(g, h), "assign");
  }, "assign"), g.prototype.equal = cc11001100_hook("g.prototype.equal", function (c) {
    var h = cc11001100_hook("h", a(this.data), "var-init");
    return c = cc11001100_hook("c", a(c instanceof g ? c.get() : g.resolve(c || "")), "assign"), h === c;
  }, "assign"), g.prototype.resolve = cc11001100_hook("g.prototype.resolve", function (a, c) {
    a instanceof g && (a = cc11001100_hook("a", a.get(), "assign"));
    var h = cc11001100_hook("h", [this.data], "var-init");
    c ? h.unshift(a) : h.push(a), this.data = cc11001100_hook("this.data", g.resolve.apply(g, h), "assign");
  }, "assign"), g;
}), define("ralltiir/src/utils/uri/component/Port", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    h.call(this, a);
  }
  var c = cc11001100_hook("c", require("@searchfe/underscore").inherits, "var-init"),
    h = cc11001100_hook("h", require("ralltiir/src/utils/uri/component/Abstract"), "var-init"),
    g = cc11001100_hook("g", {
      ftp: cc11001100_hook("ftp", "21", "object-key-init"),
      ssh: cc11001100_hook("ssh", "22", "object-key-init"),
      telnet: cc11001100_hook("telnet", "23", "object-key-init"),
      http: cc11001100_hook("http", "80", "object-key-init"),
      https: cc11001100_hook("https", "443", "object-key-init"),
      ws: cc11001100_hook("ws", "80", "object-key-init"),
      wss: cc11001100_hook("wss", "443", "object-key-init")
    }, "var-init");
  return c(a, h), a.prototype.equal = cc11001100_hook("a.prototype.equal", function (port, c) {
    var h = cc11001100_hook("h", this.data || g[c], "var-init");
    return port instanceof a && (port = cc11001100_hook("port", port.get(), "assign")), port = cc11001100_hook("port", port || g[c], "assign"), h === port;
  }, "assign"), a.prototype.toString = cc11001100_hook("a.prototype.toString", function () {
    return this.data ? ":" + this.data : "";
  }, "assign"), a;
}), define("ralltiir/src/utils/uri/component/Query", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract", "ralltiir/src/utils/uri/util/parse-query", "ralltiir/src/utils/uri/util/stringify-query"], function (require) {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!Array.isArray(a) || !Array.isArray(c)) return !1;
    if (a.length !== c.length) return !1;
    a = cc11001100_hook("a", a.slice(0), "assign"), a = cc11001100_hook("a", a.slice(0), "assign"), a.sort(), c.sort();
    for (var h = cc11001100_hook("h", !0, "var-init"), i = cc11001100_hook("i", 0, "var-init"), g = cc11001100_hook("g", a.length, "var-init"); h && g > i; i++) h = cc11001100_hook("h", a[i] == c[i], "assign");
    return h;
  }
  function c(c, h) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    if (!w.isObject(c) || !w.isObject(h)) return !1;
    var g = cc11001100_hook("g", Object.keys(c), "var-init"),
      v = cc11001100_hook("v", Object.keys(h), "var-init");
    if (g.length !== v.length) return !1;
    for (var y, b, R = cc11001100_hook("R", !0, "var-init"), i = cc11001100_hook("i", 0, "var-init"); R && (y = cc11001100_hook("y", g[i], "assign")); i++) {
      if (!h.hasOwnProperty(y)) {
        R = cc11001100_hook("R", !1, "assign");
        break;
      }
      b = cc11001100_hook("b", c[y], "assign"), R = cc11001100_hook("R", Array.isArray(b) ? a(b, h[y]) : b == h[y], "assign");
    }
    return R;
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a = cc11001100_hook("a", Array.isArray(a) ? a.map(function (a) {
      return g(a);
    }) : null === a || void 0 === a ? null : g(a), "assign");
  }
  function g(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a = cc11001100_hook("a", String(a).replace(/\+/g, "%20"), "assign"), decodeURIComponent(a);
  }
  function v(a, c, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    var v = cc11001100_hook("v", g[a], "var-init");
    return c = cc11001100_hook("c", h(c), "assign"), v ? (Array.isArray(v) || (v = cc11001100_hook("v", [v], "assign")), Array.isArray(c) ? v = cc11001100_hook("v", v.concat(c), "assign") : v.push(c)) : v = cc11001100_hook("v", c, "assign"), g[a] = cc11001100_hook("g[a]", v, "assign"), g;
  }
  function y(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a || {}, "assign"), b.call(this, a);
  }
  var w = cc11001100_hook("w", require("@searchfe/underscore"), "var-init"),
    b = cc11001100_hook("b", require("ralltiir/src/utils/uri/component/Abstract"), "var-init"),
    R = cc11001100_hook("R", require("ralltiir/src/utils/uri/util/parse-query"), "var-init"),
    A = cc11001100_hook("A", require("ralltiir/src/utils/uri/util/stringify-query"), "var-init"),
    O = cc11001100_hook("O", "?", "var-init");
  return w.inherits(y, b), y.prototype.set = cc11001100_hook("y.prototype.set", function () {
    if (1 === arguments.length) {
      var a = cc11001100_hook("a", arguments[0], "var-init");
      if (w.isObject(a)) {
        var c = cc11001100_hook("c", this.data = cc11001100_hook("this.data", {}, "assign"), "var-init");
        w.forOwn(a, function (a, g) {
          c[g] = cc11001100_hook("c[g]", h(a), "assign");
        });
      } else this.data = cc11001100_hook("this.data", R(a), "assign");
    } else this.data[arguments[0]] = cc11001100_hook("this.data[arguments[0]]", h(arguments[1]), "assign");
  }, "assign"), y.prototype.get = cc11001100_hook("y.prototype.get", function (a) {
    return a ? this.data[a] : w.extend({}, this.data);
  }, "assign"), y.prototype.toString = cc11001100_hook("y.prototype.toString", function (a) {
    a = cc11001100_hook("a", a || O, "assign");
    var c = cc11001100_hook("c", A(this.data), "var-init");
    return c ? a + c : "";
  }, "assign"), y.prototype.equal = cc11001100_hook("y.prototype.equal", function (a) {
    return w.isString(a) ? a = cc11001100_hook("a", R(a), "assign") : a instanceof y && (a = cc11001100_hook("a", a.get(), "assign")), c(this.data, a);
  }, "assign"), y.prototype.add = cc11001100_hook("y.prototype.add", function (a, c) {
    var h = cc11001100_hook("h", this.data, "var-init");
    w.isObject(a) ? Object.keys(a).forEach(function (c) {
      v(c, a[c], h);
    }) : v(a, c, h), this.data = cc11001100_hook("this.data", h, "assign");
  }, "assign"), y.prototype.remove = cc11001100_hook("y.prototype.remove", function (a) {
    a ? this.data.hasOwnProperty(a) && delete this.data[a] : this.data = cc11001100_hook("this.data", {}, "assign");
  }, "assign"), y;
}), define("ralltiir/src/utils/uri/component/Scheme", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    h.call(this, a);
  }
  var c = cc11001100_hook("c", require("@searchfe/underscore"), "var-init"),
    h = cc11001100_hook("h", require("ralltiir/src/utils/uri/component/Abstract"), "var-init");
  return c.inherits(a, h), a.prototype.set = cc11001100_hook("a.prototype.set", function (a) {
    a = cc11001100_hook("a", a || "", "assign"), this.data = cc11001100_hook("this.data", a.toLowerCase(), "assign");
  }, "assign"), a.prototype.equal = cc11001100_hook("a.prototype.equal", function (c) {
    return c = cc11001100_hook("c", c instanceof a ? c.get() : c || "", "assign"), this.data === c.toLowerCase();
  }, "assign"), a;
}), define("ralltiir/src/utils/uri/component/UserName", ["require", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Abstract"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    h.call(this, a);
  }
  var c = cc11001100_hook("c", require("@searchfe/underscore"), "var-init"),
    h = cc11001100_hook("h", require("ralltiir/src/utils/uri/component/Abstract"), "var-init");
  return c.inherits(a, h), a;
}), define("ralltiir/src/utils/uri/util/parse-query", ["require"], function () {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var h = cc11001100_hook("h", {}, "var-init");
    a = cc11001100_hook("a", a.split("&"), "assign");
    var g, v;
    return a.forEach(function (a) {
      a && (a = cc11001100_hook("a", a.split("="), "assign"), g = cc11001100_hook("g", a[0], "assign"), v = cc11001100_hook("v", a.length >= 2 ? c(a[1]) : null, "assign"), h[g] ? (Array.isArray(h[g]) || (h[g] = cc11001100_hook("h[g]", [h[g]], "assign")), h[g].push(v)) : h[g] = cc11001100_hook("h[g]", v, "assign"));
    }), h;
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a = cc11001100_hook("a", String(a).replace(/\+/g, "%20"), "assign"), decodeURIComponent(a);
  }
  return a;
}), define("ralltiir/src/utils/uri/util/stringify-query", ["require"], function () {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c,
      h = cc11001100_hook("h", [], "var-init");
    return Object.keys(a).forEach(function (g) {
      c = cc11001100_hook("c", a[g], "assign"), Array.isArray(c) || (c = cc11001100_hook("c", [c], "assign")), c.forEach(function (a) {
        h.push(null === a ? g : g + "=" + encodeURIComponent(a || ""));
      });
    }), h.join("&");
  }
  return a;
}), define("ralltiir/src/utils/uri/util/uri-parser", ["require", "@searchfe/underscore"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", {}, "var-init"),
      h = cc11001100_hook("h", ["scheme", "username", "password", "host", "port", "path", "query", "fragment"], "var-init");
    return h.forEach(function (h) {
      c[h] = cc11001100_hook("c[h]", a[h] || y, "assign");
    }), c;
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", {}, "var-init");
    return a.replace(/^([^@]+@)?([^:]+)(:\d+)?$/, function (a, h, g, port) {
      h && (h = cc11001100_hook("h", h.slice(0, -1), "assign"), h = cc11001100_hook("h", h.split(":"), "assign"), c.username = cc11001100_hook("c.username", h[0], "assign"), c.password = cc11001100_hook("c.password", h[1], "assign")), c.host = cc11001100_hook("c.host", g, "assign"), port && (c.port = cc11001100_hook("c.port", port.substring(1), "assign"));
    }), c;
  }
  function h(a, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    var g = cc11001100_hook("g", /[^:]+:\d{2,}(\/|$)/.test(a), "var-init");
    return g && (a = cc11001100_hook("a", a.split("/"), "assign"), w.extend(h, c(a.shift())), a.length > 0 && (h.path = cc11001100_hook("h.path", "/" + a.join("/"), "assign"))), g;
  }
  function g(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var i = cc11001100_hook("i", a.indexOf(":"), "var-init"),
      h = cc11001100_hook("h", a.indexOf("/"), "var-init");
    h = cc11001100_hook("h", h >= 0 ? h : a.length, "assign");
    var g = cc11001100_hook("g", i >= 0 && h > i, "var-init");
    return g && (c.scheme = cc11001100_hook("c.scheme", a.substring(0, i), "assign"), c.path = cc11001100_hook("c.path", a.substring(i + 1), "assign")), g;
  }
  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    var v = cc11001100_hook("v", {}, "var-init"),
      i = cc11001100_hook("i", a.indexOf("#"), "var-init");
    return i >= 0 && (v.fragment = cc11001100_hook("v.fragment", a.substring(i + 1), "assign"), a = cc11001100_hook("a", a.substring(0, i), "assign")), i = cc11001100_hook("i", a.indexOf("?"), "assign"), i >= 0 && (v.query = cc11001100_hook("v.query", a.substring(i + 1), "assign"), a = cc11001100_hook("a", a.substring(0, i), "assign")), i = cc11001100_hook("i", a.indexOf("://"), "assign"), i >= 0 ? (v.scheme = cc11001100_hook("v.scheme", a.substring(0, i), "assign"), a = cc11001100_hook("a", a.substring(i + 3), "assign"), "file" === v.scheme ? v.path = cc11001100_hook("v.path", a, "assign") : (a = cc11001100_hook("a", a.split("/"), "assign"), w.extend(v, c(a.shift())), a.length > 0 && (v.path = cc11001100_hook("v.path", "/" + a.join("/"), "assign"))), v) : h(a, v) ? v : g(a, v) ? v : (a = cc11001100_hook("a", a.split("/"), "assign"), v.host = cc11001100_hook("v.host", a.shift(), "assign"), a.length > 0 && (v.path = cc11001100_hook("v.path", "/" + a.join("/"), "assign")), v);
  }
  var y,
    w = cc11001100_hook("w", require("@searchfe/underscore"), "var-init");
  return function (c) {
    return w.isString(c) && (c = cc11001100_hook("c", v(c), "assign")), a(c);
  };
}), define("ralltiir/src/utils/url", ["require", "ralltiir/src/utils/uri/URI", "@searchfe/underscore", "ralltiir/src/utils/uri/component/Path", "ralltiir/src/utils/uri/util/uri-parser"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new c(a);
  }
  var c = cc11001100_hook("c", require("ralltiir/src/utils/uri/URI"), "var-init"),
    h = cc11001100_hook("h", require("@searchfe/underscore"), "var-init"),
    g = cc11001100_hook("g", require("ralltiir/src/utils/uri/component/Path"), "var-init"),
    v = cc11001100_hook("v", require("ralltiir/src/utils/uri/util/uri-parser"), "var-init");
  return a.parse = cc11001100_hook("a.parse", function (a) {
    return v(a);
  }, "assign"), a.resolve = cc11001100_hook("a.resolve", function (a, c) {
    return g.resolve(a, c);
  }, "assign"), a.param = cc11001100_hook("a.param", function (a) {
    return h.isObject(a) ? h.map(a, function (a, c) {
      return encodeURIComponent(c) + "=" + encodeURIComponent(a);
    }).join("&") : a;
  }, "assign"), a;
}), define("ralltiir", ["ralltiir/src/index"], function (mod) {
  return mod;
});