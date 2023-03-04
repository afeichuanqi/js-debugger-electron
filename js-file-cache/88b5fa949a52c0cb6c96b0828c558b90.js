!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = cc11001100_hook("module.exports", t(), "assign") : "function" == typeof define && define.amd ? define(t) : (e = cc11001100_hook("e", "undefined" != typeof globalThis ? globalThis : e || self, "assign")).slardarPluginImageReport = cc11001100_hook("(e = \"undefined\" != typeof globalThis ? globalThis : e || self).slardarPluginImageReport", t(), "assign");
}(this, function () {
  "use strict";

  var L = function () {
    return (L = cc11001100_hook("L", Object.assign || function (e) {
      for (var t, n = cc11001100_hook("n", 1, "var-init"), r = cc11001100_hook("r", arguments.length, "var-init"); n < r; n++) for (var o in t = cc11001100_hook("t", arguments[n], "assign")) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = cc11001100_hook("e[o]", t[o], "assign"));
      return e;
    }, "assign")).apply(this, arguments);
  };
  function v(e, a, u, c) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return new (u = cc11001100_hook("u", u || Promise, "assign"))(function (n, t) {
      function r(e) {
        cc11001100_hook("e", e, "function-parameter");
        try {
          i(c.next(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        cc11001100_hook("e", e, "function-parameter");
        try {
          i(c.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function i(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t;
        e.done ? n(e.value) : ((t = cc11001100_hook("t", e.value, "assign")) instanceof u ? t : new u(function (e) {
          e(t);
        })).then(r, o);
      }
      i((c = cc11001100_hook("c", c.apply(e, a || []), "assign")).next());
    });
  }
  function h(r, o) {
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var i,
      a,
      u,
      c = cc11001100_hook("c", {
        label: cc11001100_hook("label", 0, "object-key-init"),
        sent: function () {
          if (1 & u[0]) throw u[1];
          return u[1];
        },
        trys: cc11001100_hook("trys", [], "object-key-init"),
        ops: cc11001100_hook("ops", [], "object-key-init")
      }, "var-init"),
      e = cc11001100_hook("e", {
        next: cc11001100_hook("next", t(0), "object-key-init"),
        throw: cc11001100_hook("throw", t(1), "object-key-init"),
        return: cc11001100_hook("return", t(2), "object-key-init")
      }, "var-init");
    return "function" == typeof Symbol && (e[Symbol.iterator] = cc11001100_hook("e[Symbol.iterator]", function () {
      return this;
    }, "assign")), e;
    function t(n) {
      cc11001100_hook("n", n, "function-parameter");
      return function (e) {
        var t = cc11001100_hook("t", [n, e], "var-init");
        if (i) throw new TypeError("Generator is already executing.");
        for (; c;) try {
          if (i = cc11001100_hook("i", 1, "assign"), a && (u = cc11001100_hook("u", 2 & t[0] ? a.return : t[0] ? a.throw || ((u = cc11001100_hook("u", a.return, "assign")) && u.call(a), 0) : a.next, "assign")) && !(u = cc11001100_hook("u", u.call(a, t[1]), "assign")).done) return u;
          switch (a = cc11001100_hook("a", 0, "assign"), (t = cc11001100_hook("t", u ? [2 & t[0], u.value] : t, "assign"))[0]) {
            case 0:
            case 1:
              u = cc11001100_hook("u", t, "assign");
              break;
            case 4:
              return c.label++, {
                value: cc11001100_hook("value", t[1], "object-key-init"),
                done: cc11001100_hook("done", !1, "object-key-init")
              };
            case 5:
              c.label++, a = cc11001100_hook("a", t[1], "assign"), t = cc11001100_hook("t", [0], "assign");
              continue;
            case 7:
              t = cc11001100_hook("t", c.ops.pop(), "assign"), c.trys.pop();
              continue;
            default:
              if (!(u = cc11001100_hook("u", 0 < (u = cc11001100_hook("u", c.trys, "assign")).length && u[u.length - 1], "assign")) && (6 === t[0] || 2 === t[0])) {
                c = cc11001100_hook("c", 0, "assign");
                continue;
              }
              if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                c.label = cc11001100_hook("c.label", t[1], "assign");
                break;
              }
              if (6 === t[0] && c.label < u[1]) {
                c.label = cc11001100_hook("c.label", u[1], "assign"), u = cc11001100_hook("u", t, "assign");
                break;
              }
              if (u && c.label < u[2]) {
                c.label = cc11001100_hook("c.label", u[2], "assign"), c.ops.push(t);
                break;
              }
              u[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          t = cc11001100_hook("t", o.call(r, c), "assign");
        } catch (e) {
          t = cc11001100_hook("t", [6, e], "assign"), a = cc11001100_hook("a", 0, "assign");
        } finally {
          i = cc11001100_hook("i", u = cc11001100_hook("u", 0, "assign"), "assign");
        }
        if (5 & t[0]) throw t[1];
        return {
          value: cc11001100_hook("value", t[0] ? t[1] : void 0, "object-key-init"),
          done: cc11001100_hook("done", !0, "object-key-init")
        };
      };
    }
  }
  function z(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "function" == typeof Symbol && Symbol.iterator, "var-init"),
      n = cc11001100_hook("n", t && e[t], "var-init"),
      r = cc11001100_hook("r", 0, "var-init");
    if (n) return n.call(e);
    if (e && "number" == typeof e.length) return {
      next: function () {
        return {
          value: cc11001100_hook("value", (e = cc11001100_hook("e", e && r >= e.length ? void 0 : e, "assign")) && e[r++], "object-key-init"),
          done: cc11001100_hook("done", !e, "object-key-init")
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function x(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", "function" == typeof Symbol && e[Symbol.iterator], "var-init");
    if (!n) return e;
    var r,
      o,
      i = cc11001100_hook("i", n.call(e), "var-init"),
      a = cc11001100_hook("a", [], "var-init");
    try {
      for (; (void 0 === t || 0 < t--) && !(r = cc11001100_hook("r", i.next(), "assign")).done;) a.push(r.value);
    } catch (e) {
      o = cc11001100_hook("o", {
        error: cc11001100_hook("error", e, "object-key-init")
      }, "assign");
    } finally {
      try {
        r && !r.done && (n = cc11001100_hook("n", i.return, "assign")) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return a;
  }
  function s(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (n || 2 === arguments.length) for (var r, o = cc11001100_hook("o", 0, "var-init"), i = cc11001100_hook("i", t.length, "var-init"); o < i; o++) !r && o in t || ((r = cc11001100_hook("r", r || Array.prototype.slice.call(t, 0, o), "assign"))[o] = cc11001100_hook("(r = r || Array.prototype.slice.call(t, 0, o))[o]", t[o], "assign"));
    return e.concat(r || Array.prototype.slice.call(t));
  }
  function t(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "object" == typeof e && null !== e;
  }
  function r(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "function" == typeof e;
  }
  function l(n, r, o) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    return function () {
      for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
      n[r] = cc11001100_hook("n[r]", o.apply(void 0, s([n[r]], x(e), !1)), "assign");
    };
  }
  var o = cc11001100_hook("o", 0, "var-init"),
    R = function (e) {
      return Math.random() < Number(e);
    };
  function M() {
    if ("object" == typeof window && t(window)) return window;
  }
  function C() {
    if ("object" == typeof document && t(document)) return document;
  }
  var i = function () {
      for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
      var n = cc11001100_hook("n", function (e) {
        if (e) return e.__SLARDAR_REGISTRY__ || (e.__SLARDAR_REGISTRY__ = cc11001100_hook("e.__SLARDAR_REGISTRY__", {
          Slardar: {
            plugins: cc11001100_hook("plugins", [], "object-key-init"),
            errors: cc11001100_hook("errors", [], "object-key-init")
          }
        }, "assign")), e.__SLARDAR_REGISTRY__.Slardar;
      }(M()), "var-init");
      n && (n.errors || (n.errors = cc11001100_hook("n.errors", [], "assign")), n.errors.push(e));
    },
    N = function (e, t) {
      var n = cc11001100_hook("n", e && new e(t), "var-init");
      return [function (e, t) {
        n && e && n.observe(e, t);
      }, function () {
        return n && n.disconnect();
      }];
    },
    T = function (n) {
      var e = cc11001100_hook("e", n && n.timing || void 0, "var-init");
      return [e, function () {
        return n && n.now ? n.now() : (Date.now ? Date.now() : +new Date()) - (e && e.navigationStart || 0);
      }, function (e) {
        var t = cc11001100_hook("t", (n || {}).getEntriesByType, "var-init");
        return r(t) && t.call(n, e) || [];
      }, function () {
        var e = cc11001100_hook("e", (n || {}).clearResourceTimings, "var-init");
        r(e) && e.call(n);
      }, function (e) {
        var t = cc11001100_hook("t", (n || {}).getEntriesByName, "var-init");
        return r(t) && t.call(n, e) || [];
      }];
    },
    D = function (n, o, t, i) {
      var r = cc11001100_hook("r", n && new n(function (e, r) {
        e.getEntries ? e.getEntries().forEach(function (e, t, n) {
          return o(e, t, n, r);
        }) : i && i(), t && r.disconnect();
      }), "var-init");
      return [function () {
        for (var t = cc11001100_hook("t", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) t[e] = cc11001100_hook("t[e]", arguments[e], "assign");
        if (!n || !r) return i && i();
        try {
          t.forEach(function (e) {
            -1 < n.supportedEntryTypes.indexOf(e) && r.observe({
              type: cc11001100_hook("type", e, "object-key-init"),
              buffered: cc11001100_hook("buffered", !1, "object-key-init")
            });
          });
        } catch (e) {
          try {
            r.observe({
              entryTypes: cc11001100_hook("entryTypes", t, "object-key-init")
            });
          } catch (e) {
            return i && i();
          }
        }
      }, function () {
        return r && r.disconnect();
      }];
    };
  var k = function (n, e) {
      return void 0 === n && (n = cc11001100_hook("n", "SlardarPlugins", "assign")), (e = cc11001100_hook("e", void 0 === e ? !1 : e, "assign")) ? function () {
        for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
        return console.log.apply(console, s(["[".concat(n, "] ")], x(e), !1));
      } : function () {};
    },
    e = cc11001100_hook("e", (n.prototype.subscribe = cc11001100_hook("n.prototype.subscribe", function (e) {
      this.observers.push(e);
    }, "assign"), n.prototype.unsubscribe = cc11001100_hook("n.prototype.unsubscribe", function (t) {
      this.observers.filter(function (e) {
        return e !== t;
      });
    }, "assign"), n.prototype.notify = cc11001100_hook("n.prototype.notify", function (t) {
      this.observers.forEach(function (e) {
        e(t);
      });
    }, "assign"), n), "var-init");
  function n() {
    this.observers = cc11001100_hook("this.observers", [], "assign");
  }
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init");
    return Array.from(e).forEach(function (e) {
      e instanceof Element && ("img" === e.nodeName.toLocaleLowerCase() ? t.push(e) : null != e && e.querySelectorAll && (e = cc11001100_hook("e", e.querySelectorAll("img"), "assign"), t = cc11001100_hook("t", t.concat(Array.from(e)), "assign")));
    }), t;
  }
  var A = function (e) {
      var t = cc11001100_hook("t", [], "var-init"),
        n = cc11001100_hook("n", [], "var-init");
      return (e = cc11001100_hook("e", void 0 === e ? [] : e, "assign")).forEach(function (e) {
        t.push.apply(t, s([], x(a(e.addedNodes)), !1)), n.push.apply(n, s([], x(a(e.removedNodes)), !1));
      }), [t, n];
    },
    u = cc11001100_hook("u", "undefined" != typeof IntersectionObserver, "var-init"),
    j = cc11001100_hook("j", (c.prototype.set = cc11001100_hook("c.prototype.set", function (e) {
      var t;
      u && null != (t = cc11001100_hook("t", this.intersectionObserver, "assign")) && t.observe(e), this.record.set(e, {
        visible: cc11001100_hook("visible", !1, "object-key-init"),
        observer: cc11001100_hook("observer", this.intersectionObserver, "object-key-init")
      });
    }, "assign"), c.prototype.del = cc11001100_hook("c.prototype.del", function (e) {
      var t;
      null != (t = cc11001100_hook("t", this.record.get(e), "assign")) && t.visible || !u || null != (t = cc11001100_hook("t", this.intersectionObserver, "assign")) && t.unobserve(e), this.record.delete(e);
    }, "assign"), c.prototype.find = cc11001100_hook("c.prototype.find", function (e) {
      var t,
        n,
        r = cc11001100_hook("r", null, "var-init");
      try {
        for (var o = cc11001100_hook("o", z(this.record), "var-init"), i = cc11001100_hook("i", o.next(), "var-init"); !i.done; i = cc11001100_hook("i", o.next(), "assign")) {
          var a = cc11001100_hook("a", x(i.value, 2), "var-init"),
            u = cc11001100_hook("u", a[0], "var-init"),
            c = cc11001100_hook("c", a[1], "var-init");
          if (u.currentSrc === e) {
            r = cc11001100_hook("r", L({
              target: cc11001100_hook("target", u, "object-key-init")
            }, c), "assign");
            break;
          }
        }
      } catch (e) {
        t = cc11001100_hook("t", {
          error: cc11001100_hook("error", e, "object-key-init")
        }, "assign");
      } finally {
        try {
          i && !i.done && (n = cc11001100_hook("n", o.return, "assign")) && n.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return r;
    }, "assign"), c), "var-init");
  function c() {
    var n = cc11001100_hook("n", this, "var-init");
    this.record = cc11001100_hook("this.record", new Map(), "assign"), this.intersectionObserver = cc11001100_hook("this.intersectionObserver", null, "assign"), u && (this.intersectionObserver = cc11001100_hook("this.intersectionObserver", new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        var t;
        (e.isIntersecting || 0 < e.intersectionRatio) && ((t = cc11001100_hook("t", n.record.get(e.target), "assign")) && n.record.set(e.target, L(L({}, t), {
          visible: cc11001100_hook("visible", !0, "object-key-init")
        })), null != (t = cc11001100_hook("t", n.intersectionObserver, "assign")) && t.unobserve(e.target));
      });
    }, {
      rootMargin: cc11001100_hook("rootMargin", "200px", "object-key-init")
    }), "assign"));
  }
  function f(i, a, u) {
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    var c = cc11001100_hook("c", 1, "var-init");
    return function () {
      for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
      var n = cc11001100_hook("n", i.apply(void 0, s([], x(e), !1)), "var-init"),
        r = cc11001100_hook("r", c += cc11001100_hook("c", 2, "assign"), "var-init"),
        o = cc11001100_hook("o", "string" == typeof e[0] ? e[0] : e[0].url, "var-init");
      a(r, o);
      return n.then(function () {
        u(r);
      }, function () {
        u(r);
      }), n;
    };
  }
  function d(n, o, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var a = cc11001100_hook("a", 0, "var-init");
    return function () {
      for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
      var r = cc11001100_hook("r", a += cc11001100_hook("a", 2, "assign"), "var-init");
      return o(r, this._url), l(this, "onreadystatechange", function (n) {
        return function () {
          for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
          return 4 === this.readyState && i(r), n && n.apply(this, e);
        };
      })(), n.apply(this, e);
    };
  }
  function p(c, s, e, l, f, d, p) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("l", l, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("p", p, "function-parameter");
    if (void 0 === c && (c = cc11001100_hook("c", M(), "assign")), void 0 === s && (s = cc11001100_hook("s", C(), "assign")), void 0 === e && (e = cc11001100_hook("e", M() && window.location, "assign")), void 0 === l && (l = cc11001100_hook("l", function () {
      if ("function" == typeof XMLHttpRequest && r(XMLHttpRequest)) return XMLHttpRequest;
    }(), "assign")), void 0 === f && (f = cc11001100_hook("f", function () {
      if (M() && t(window.performance)) return window.performance;
    }(), "assign")), void 0 === d && (d = cc11001100_hook("d", function () {
      if (M() && r(window.MutationObserver)) return window.MutationObserver;
    }(), "assign")), void 0 === p && (p = cc11001100_hook("p", function () {
      if (M() && r(window.PerformanceObserver)) return window.PerformanceObserver;
    }(), "assign")), s && c && e) return function (e, t) {
      var n = cc11001100_hook("n", e.debug, "var-init"),
        e = cc11001100_hook("e", e.sample_rate, "var-init"),
        y = cc11001100_hook("y", void 0 === e ? B : e, "var-init"),
        g = cc11001100_hook("g", k("imageReport", n), "var-init");
      g("图片插件已注册，version:", Q);
      function a(e) {
        cc11001100_hook("e", e, "function-parameter");
        g("图片资源上报", e), t && t({
          ev_type: cc11001100_hook("ev_type", K, "object-key-init"),
          payload: cc11001100_hook("payload", e, "object-key-init")
        });
      }
      var r,
        m = cc11001100_hook("m", x(T(f), 2)[1], "var-init"),
        b = cc11001100_hook("b", new j(), "var-init"),
        e = cc11001100_hook("e", x(W(), 3), "var-init"),
        w = cc11001100_hook("w", e[0], "var-init"),
        S = cc11001100_hook("S", e[1], "var-init"),
        u = cc11001100_hook("u", e[2], "var-init"),
        _ = cc11001100_hook("_", (r = cc11001100_hook("r", function () {
          X.notify({
            ev_type: cc11001100_hook("ev_type", H, "object-key-init"),
            payload: {
              pageLoad: cc11001100_hook("pageLoad", !0, "object-key-init")
            }
          });
        }, "assign"), n = cc11001100_hook("n", M(), "assign"), e = cc11001100_hook("e", C(), "assign"), n && e && ("complete" === e.readyState ? r() : n.addEventListener("load", function () {
          setTimeout(function () {
            r();
          }, 0);
        }, !1)), x(J(c, l, function (e) {
          return g("before http 请求, url:", e), !0;
        }, function (e) {
          e = cc11001100_hook("e", _.get(e), "assign");
          g("after http 请求, url:", e), e && _.size - 1 < G && X.notify({
            ev_type: cc11001100_hook("ev_type", P, "object-key-init"),
            payload: {
              url: cc11001100_hook("url", e, "object-key-init"),
              remainConnections: cc11001100_hook("remainConnections", G - (_.size - 1), "object-key-init")
            }
          });
        }), 1)[0]), "var-init"),
        e = cc11001100_hook("e", x(N(d, function (e) {
          var e = cc11001100_hook("e", x(A(e), 2), "var-init"),
            t = cc11001100_hook("t", e[0], "var-init"),
            e = cc11001100_hook("e", e[1], "var-init");
          (t.length || e.length) && g("监听到DOM变更", t, e), t.forEach(function (e) {
            return b.set(e);
          }), e.forEach(function (e) {
            return b.del(e);
          });
        }), 2), "var-init"),
        n = cc11001100_hook("n", e[0], "var-init"),
        o = cc11001100_hook("o", e[1], "var-init"),
        e = cc11001100_hook("e", (n(s, {
          childList: cc11001100_hook("childList", !0, "object-key-init"),
          subtree: cc11001100_hook("subtree", !0, "object-key-init"),
          characterData: cc11001100_hook("characterData", !1, "object-key-init"),
          attributes: cc11001100_hook("attributes", !1, "object-key-init")
        }), x(D(p, function (e) {
          var t, n, r, o, i, a, u, c, s, l, f, d, p, v, h, y, m;
          "img" !== e.initiatorType && "css" !== e.initiatorType || (g("监听到resource", e), m = cc11001100_hook("m", (h = cc11001100_hook("h", e.toJSON(), "assign")).name, "assign"), y = cc11001100_hook("y", h.initiatorType, "assign"), t = cc11001100_hook("t", h.transferSize, "assign"), n = cc11001100_hook("n", h.duration, "assign"), r = cc11001100_hook("r", h.encodedBodySize, "assign"), o = cc11001100_hook("o", h.decodedBodySize, "assign"), i = cc11001100_hook("i", h.redirectStart, "assign"), a = cc11001100_hook("a", h.redirectEnd, "assign"), u = cc11001100_hook("u", h.serverTiming, "assign"), c = cc11001100_hook("c", h.domainLookupStart, "assign"), s = cc11001100_hook("s", h.domainLookupEnd, "assign"), l = cc11001100_hook("l", h.connectStart, "assign"), f = cc11001100_hook("f", h.connectEnd, "assign"), d = cc11001100_hook("d", h.secureConnectionStart, "assign"), p = cc11001100_hook("p", h.requestStart, "assign"), v = cc11001100_hook("v", h.responseStart, "assign"), h = cc11001100_hook("h", h.responseEnd, "assign"), "img" === (y = cc11001100_hook("y", {
            name: cc11001100_hook("name", m, "object-key-init"),
            source: cc11001100_hook("source", y, "object-key-init"),
            dpr: cc11001100_hook("dpr", Math.round(null != (m = cc11001100_hook("m", null === window || void 0 === window ? void 0 : window.devicePixelRatio, "assign")) ? m : 1), "object-key-init"),
            needCompress: cc11001100_hook("needCompress", !1, "object-key-init"),
            needSizeOptim: cc11001100_hook("needSizeOptim", !1, "object-key-init"),
            needFormatOptim: cc11001100_hook("needFormatOptim", !1, "object-key-init"),
            hitLocalCache: cc11001100_hook("hitLocalCache", 0 === t || void 0 === t && 0 === n, "object-key-init"),
            hitCdnCache: cc11001100_hook("hitCdnCache", 0 <= (u || []).findIndex(function (e) {
              return "cdn-cache" === e.name && 0 <= e.description.toLocaleLowerCase().indexOf("hit");
            }), "object-key-init"),
            size: cc11001100_hook("size", 0 !== o ? r : 0, "object-key-init"),
            duration: cc11001100_hook("duration", n, "object-key-init"),
            redirect: cc11001100_hook("redirect", a - i, "object-key-init"),
            dns: cc11001100_hook("dns", s - c, "object-key-init"),
            tcp: cc11001100_hook("tcp", f - l, "object-key-init"),
            ssl: cc11001100_hook("ssl", void 0 === d || d <= 0 ? 0 : f - d, "object-key-init"),
            request: cc11001100_hook("request", void 0 === p || p <= 0 ? 0 : v - p, "object-key-init"),
            download: cc11001100_hook("download", void 0 === v || v <= 0 ? 0 : h - v, "object-key-init"),
            timingDetail: cc11001100_hook("timingDetail", e.toJSON(), "object-key-init")
          }, "assign")).source && (m = cc11001100_hook("m", b.find(e.name), "assign"), g("匹配到img", m, b.record), m && (y = cc11001100_hook("y", L(L({}, y), {
            isLazyLoad: cc11001100_hook("isLazyLoad", Boolean(m.visible), "object-key-init"),
            width: cc11001100_hook("width", (null == (t = cc11001100_hook("t", m.target, "assign")) ? void 0 : t.naturalWidth) || 0, "object-key-init"),
            height: cc11001100_hook("height", (null == (u = cc11001100_hook("u", m.target, "assign")) ? void 0 : u.naturalHeight) || 0, "object-key-init"),
            viewerWidth: cc11001100_hook("viewerWidth", null == (o = cc11001100_hook("o", m.target, "assign")) ? void 0 : o.width, "object-key-init"),
            viewerHeight: cc11001100_hook("viewerHeight", null == (r = cc11001100_hook("r", m.target, "assign")) ? void 0 : r.height, "object-key-init")
          }), "assign"))), X.notify({
            ev_type: cc11001100_hook("ev_type", q, "object-key-init"),
            payload: cc11001100_hook("payload", y, "object-key-init")
          }));
        }), 2)), "var-init"),
        n = cc11001100_hook("n", e[0], "var-init"),
        i = cc11001100_hook("i", e[1], "var-init"),
        O = function (o) {
          return v(void 0, void 0, void 0, function () {
            var t, n, r;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return (g("进行中的请求数：".concat(_.size)), 0 < G - _.size) ? [4, F(o.name)] : [3, 2];
                case 1:
                  if (t = cc11001100_hook("t", e.sent() || {}, "assign"), n = cc11001100_hook("n", t.format, "assign"), r = cc11001100_hook("r", t.status, "assign"), t = cc11001100_hook("t", t.contentLength, "assign"), g("response header：", n, r), "css" === o.source) {
                    if (null == n || !n.startsWith("image/")) return [2];
                  } else if ((null == n || !n.startsWith("image/")) && Number(r) < 400) return [2];
                  return !(n = cc11001100_hook("n", L(L({}, o), {
                    format: cc11001100_hook("format", n && String(n).startsWith("image/") ? n.slice(6) : void 0, "object-key-init"),
                    status: cc11001100_hook("status", r, "object-key-init")
                  }), "assign")).size && Number(r) < 400 && 0 < Number(t) && (n.size = cc11001100_hook("n.size", Number(t), "assign")), r = cc11001100_hook("r", I(n), "assign"), a(L(L({}, n), r)), [3, 3];
                case 2:
                  S(o.name, L({}, o)), e.label = cc11001100_hook("e.label", 3, "assign");
                case 3:
                  return [2];
              }
            });
          });
        },
        E = function (o, i) {
          return v(void 0, void 0, void 0, function () {
            var t, n, r;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, F(o)];
                case 1:
                  if (t = cc11001100_hook("t", e.sent() || {}, "assign"), n = cc11001100_hook("n", t.format, "assign"), r = cc11001100_hook("r", t.status, "assign"), t = cc11001100_hook("t", t.contentLength, "assign"), g("response header：", n, r), "css" === i.source) {
                    if (null == n || !n.startsWith("image/")) return u(o), [2];
                  } else if ((null == n || !n.startsWith("image/")) && Number(r) < 400) return u(o), [2];
                  return !(n = cc11001100_hook("n", L(L({}, i || {}), {
                    format: cc11001100_hook("format", n && String(n).startsWith("image/") ? n.slice(6) : void 0, "object-key-init"),
                    status: cc11001100_hook("status", r, "object-key-init")
                  }), "assign")).size && Number(r) < 400 && 0 < Number(t) && (n.size = cc11001100_hook("n.size", Number(t), "assign")), r = cc11001100_hook("r", I(n), "assign"), a(L(L({}, n), r)), u(o), [2];
              }
            });
          });
        };
      X.subscribe(function (e) {
        var t, n, r, o, i;
        if (e.ev_type === q) {
          var a = cc11001100_hook("a", m() - (null == (a = cc11001100_hook("a", null == (a = cc11001100_hook("a", e.payload, "assign")) ? void 0 : a.timingDetail, "assign")) ? void 0 : a.responseEnd), "var-init");
          if (g("资源加载事件: ", e.payload.name), g("资源完成加载时间: ", null == (i = cc11001100_hook("i", null == (i = cc11001100_hook("i", e.payload, "assign")) ? void 0 : i.timingDetail, "assign")) ? void 0 : i.responseEnd), g("时间间隔: ", a), g("是否命中本地缓存: ", null == (i = cc11001100_hook("i", e.payload, "assign")) ? void 0 : i.hitLocalCache), !R(y)) return;
          if (!Y) return void S(e.payload.name, L({}, e.payload));
          O(e.payload);
        }
        if (e.ev_type === P && Y) {
          if (g("http请求完成事件"), e.payload.remainConnections <= 0) return;
          try {
            for (var u = cc11001100_hook("u", z(w), "var-init"), c = cc11001100_hook("c", u.next(), "var-init"); !c.done; c = cc11001100_hook("c", u.next(), "assign")) {
              var s = cc11001100_hook("s", x(c.value, 2), "var-init"),
                l = cc11001100_hook("l", s[0], "var-init");
              if (null == (h = cc11001100_hook("h", s[1], "assign")) || !h.__lock) {
                S(l, L(L({}, h), {
                  __lock: cc11001100_hook("__lock", !0, "object-key-init")
                })), E(l, h);
                break;
              }
            }
          } catch (e) {
            t = cc11001100_hook("t", {
              error: cc11001100_hook("error", e, "object-key-init")
            }, "assign");
          } finally {
            try {
              c && !c.done && (n = cc11001100_hook("n", u.return, "assign")) && n.call(u);
            } finally {
              if (t) throw t.error;
            }
          }
        }
        if (e.ev_type === H && e.payload.pageLoad) {
          g("pageload 事件");
          try {
            for (var f = cc11001100_hook("f", z(w), "var-init"), d = cc11001100_hook("d", f.next(), "var-init"); !d.done; d = cc11001100_hook("d", f.next(), "assign")) {
              var p = cc11001100_hook("p", x(d.value, 2), "var-init"),
                v = cc11001100_hook("v", p[0], "var-init"),
                h = cc11001100_hook("h", p[1], "var-init");
              if (!(0 < G - _.size)) break;
              null != h && h.__lock || (S(v, L(L({}, h), {
                __lock: cc11001100_hook("__lock", !0, "object-key-init")
              })), E(v, h));
            }
          } catch (e) {
            r = cc11001100_hook("r", {
              error: cc11001100_hook("error", e, "object-key-init")
            }, "assign");
          } finally {
            try {
              d && !d.done && (o = cc11001100_hook("o", f.return, "assign")) && o.call(f);
            } finally {
              if (r) throw r.error;
            }
          }
          Y = cc11001100_hook("Y", !0, "assign");
        }
      }), n(U);
      return [function () {
        g("插件销毁"), o(), i();
      }];
    };
  }
  var W = function () {
      var n = cc11001100_hook("n", new Map(), "var-init");
      return [n, function (e, t) {
        return n.set(e, t);
      }, function (e) {
        return n.delete(e);
      }];
    },
    J = function (e, t, n, r) {
      function o(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        n && n(t) && c(e, t);
      }
      function i(e) {
        cc11001100_hook("e", e, "function-parameter");
        r && r(e), s(e);
      }
      var a = cc11001100_hook("a", x(W(), 3), "var-init"),
        u = cc11001100_hook("u", a[0], "var-init"),
        c = cc11001100_hook("c", a[1], "var-init"),
        s = cc11001100_hook("s", a[2], "var-init");
      return t && l(t.prototype, "send", d)(o, i), e && l(e, "fetch", f)(o, i), [u];
    },
    F = function (r) {
      return v(void 0, void 0, void 0, function () {
        var t, n;
        return h(this, function (e) {
          switch (e.label) {
            case 0:
              return e.trys.push([0, 2,, 3]), [4, fetch(r, {
                cache: cc11001100_hook("cache", "force-cache", "object-key-init")
              })];
            case 1:
              return t = cc11001100_hook("t", e.sent(), "assign"), n = cc11001100_hook("n", t.headers, "assign"), [2, {
                status: cc11001100_hook("status", t.status, "object-key-init"),
                format: cc11001100_hook("format", n.get("content-type") || "", "object-key-init"),
                contentLength: cc11001100_hook("contentLength", Number(n.get("content-length")) || 0, "object-key-init")
              }];
            case 2:
              return function () {
                for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < arguments.length; t++) e[t] = cc11001100_hook("e[t]", arguments[t], "assign");
                console.log.apply(console, s(["[SDK]", Date.now(), ("" + o++).padStart(8, " ")], x(e), !1));
              }("获取header失败", e.sent()), [2, null];
            case 3:
              return [2];
          }
        });
      });
    },
    I = function (e) {
      var t = cc11001100_hook("t", {
        needCompress: cc11001100_hook("needCompress", !1, "object-key-init"),
        needSizeOptim: cc11001100_hook("needSizeOptim", !1, "object-key-init"),
        needFormatOptim: cc11001100_hook("needFormatOptim", !1, "object-key-init")
      }, "var-init");
      if (!e.size) return t;
      o = cc11001100_hook("o", (l = cc11001100_hook("l", e, "assign")).width, "assign"), c = cc11001100_hook("c", l.height, "assign"), i = cc11001100_hook("i", void 0 === (i = cc11001100_hook("i", l.format, "assign")) ? "" : i, "assign"), l = cc11001100_hook("l", l.size, "assign"), r = cc11001100_hook("r", navigator && navigator.userAgent.toLocaleLowerCase().includes("chrome"), "assign"), s = cc11001100_hook("s", {}, "assign"), /(jpeg|png|bmp)/.test(i) && (o && c ? (n = cc11001100_hook("n", Math.round(Math.max(l - o * c * .2, 0)), "assign"), r ? (o = cc11001100_hook("o", Math.round(Math.max(l - o * c / 6, 0)), "assign"), s.needFormatOptim = cc11001100_hook("s.needFormatOptim", 0 < o, "assign"), s.needFormatOptim && (s.webpSavings = cc11001100_hook("s.webpSavings", n, "assign"), s.avifSavings = cc11001100_hook("s.avifSavings", o, "assign"))) : (s.needFormatOptim = cc11001100_hook("s.needFormatOptim", 0 < n, "assign"), s.needFormatOptim && (s.webpSavings = cc11001100_hook("s.webpSavings", n, "assign")))) : (s.needFormatOptim = cc11001100_hook("s.needFormatOptim", !0, "assign"), s.webpSavings = cc11001100_hook("s.webpSavings", Math.round(/png/.test(i) ? .26 * l : .3 * l), "assign"), r && (s.avifSavings = cc11001100_hook("s.avifSavings", Math.round(/png/.test(i) ? .408 * l : .44 * l), "assign")))), /gif/.test(i) && (s.needFormatOptim = cc11001100_hook("s.needFormatOptim", !0, "assign"), s.webpSavings = cc11001100_hook("s.webpSavings", .65 * l, "assign"), r && (s.avifSavings = cc11001100_hook("s.avifSavings", .65 * l, "assign")));
      var n,
        r,
        o,
        i,
        a,
        u,
        c = cc11001100_hook("c", s, "var-init"),
        s = cc11001100_hook("s", (n = cc11001100_hook("n", (o = cc11001100_hook("o", e, "assign")).width, "assign"), i = cc11001100_hook("i", o.height, "assign"), r = cc11001100_hook("r", void 0 === (r = cc11001100_hook("r", o.format, "assign")) ? "" : r, "assign"), o = cc11001100_hook("o", o.size, "assign"), l = cc11001100_hook("l", {}, "assign"), n && i && (/(jpeg|bmp)/.test(r) && (a = cc11001100_hook("a", o - n * i * .25, "assign"), l.needCompress = cc11001100_hook("l.needCompress", 0 < a, "assign"), l.needCompress && (l.compressSavings = cc11001100_hook("l.compressSavings", Math.round(a), "assign"))), /png/.test(r) && (a = cc11001100_hook("a", o - n * i * 4 * .2 * .3, "assign"), l.needCompress = cc11001100_hook("l.needCompress", 0 < a, "assign"), l.needCompress && (l.compressSavings = cc11001100_hook("l.compressSavings", Math.round(a), "assign")))), l), "var-init"),
        l = cc11001100_hook("l", (o = cc11001100_hook("o", (r = cc11001100_hook("r", e, "assign")).width, "assign"), i = cc11001100_hook("i", e.height, "assign"), a = cc11001100_hook("a", e.viewerWidth, "assign"), l = cc11001100_hook("l", e.viewerHeight, "assign"), u = cc11001100_hook("u", e.dpr, "assign"), r = cc11001100_hook("r", e.size, "assign"), e = cc11001100_hook("e", {}, "assign"), o && i && a && l && (e.needSizeOptim = cc11001100_hook("e.needSizeOptim", 0 < (a = cc11001100_hook("a", 1 - a * l * u * u / (o * i), "assign")), "assign"), e.needSizeOptim && (e.resizeSavings = cc11001100_hook("e.resizeSavings", Math.round((1 - a) * r), "assign"))), e), "var-init");
      return L(L(L(L({}, t), c), s), l);
    },
    q = cc11001100_hook("q", "image_resource", "var-init"),
    P = cc11001100_hook("P", "http_custom", "var-init"),
    H = cc11001100_hook("H", "pageload", "var-init"),
    K = cc11001100_hook("K", "image", "var-init"),
    B = cc11001100_hook("B", .1, "var-init"),
    Q = cc11001100_hook("Q", "0.1.2", "var-init"),
    U = cc11001100_hook("U", "resource", "var-init"),
    G = cc11001100_hook("G", 4, "var-init"),
    X = cc11001100_hook("X", new e(), "var-init"),
    Y = cc11001100_hook("Y", !1, "var-init"),
    y = cc11001100_hook("y", {
      sample_rate: cc11001100_hook("sample_rate", B, "object-key-init")
    }, "var-init");
  return function (n) {
    return void 0 === n && (n = cc11001100_hook("n", y, "assign")), {
      name: cc11001100_hook("name", "imageReport", "object-key-init"),
      setup: function (t) {
        t.on("init", function () {
          var e = cc11001100_hook("e", x(function (e, t, n, r) {
            void 0 === t && (t = cc11001100_hook("t", {}, "assign")), void 0 === r && (r = cc11001100_hook("r", [], "assign"));
            try {
              var o = cc11001100_hook("o", e.apply(void 0, s([], x(r), !1)), "var-init");
              return o && o(t, n) || [];
            } catch (e) {
              return i(e), [];
            }
          }(p, n, t.report.bind(t)), 1)[0], "var-init");
          t.on("beforeDestroy", function () {
            e();
          });
        });
      }
    };
  };
});