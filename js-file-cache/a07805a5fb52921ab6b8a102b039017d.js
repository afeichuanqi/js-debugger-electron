define("@searchfe/promise/src/promise", ["require", "@searchfe/assert", "@searchfe/promise/src/set-immediate"], function (require) {
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    b(this instanceof c, "Promise must be called with new operator"), b("function" == typeof a, "callback not defined"), this._state = cc11001100_hook("this._state", _, "assign"), this._fulfilledCbs = cc11001100_hook("this._fulfilledCbs", [], "assign"), this._rejectedCbs = cc11001100_hook("this._rejectedCbs", [], "assign"), this._errorPending = cc11001100_hook("this._errorPending", !1, "assign"), this._fromResolver(a);
  }
  function a(c) {
    cc11001100_hook("c", c, "function-parameter");
    b(c._state === y, w);
    var a;
    a = cc11001100_hook("a", "function" == typeof window.PromiseRejectionEvent ? window.PromiseRejectionEvent : CustomEvent, "assign");
    var h = cc11001100_hook("h", new a("unhandledrejection", {
      promise: cc11001100_hook("promise", c, "object-key-init"),
      reason: cc11001100_hook("reason", c._result, "object-key-init")
    }), "var-init");
    return h.reason = cc11001100_hook("h.reason", h.reason || c._result, "assign"), h;
  }
  function h(c) {
    cc11001100_hook("c", c, "function-parameter");
    return c && "function" == typeof c.then;
  }
  var _ = cc11001100_hook("_", 0, "var-init"),
    v = cc11001100_hook("v", 1, "var-init"),
    y = cc11001100_hook("y", 2, "var-init"),
    w = cc11001100_hook("w", "cannot make RejectionEvent when promise not rejected", "var-init"),
    g = cc11001100_hook("g", {
      longStackTraces: cc11001100_hook("longStackTraces", !1, "object-key-init")
    }, "var-init"),
    b = cc11001100_hook("b", require("@searchfe/assert"), "var-init"),
    j = cc11001100_hook("j", require("@searchfe/promise/src/set-immediate"), "var-init");
  return c.prototype._fulfill = cc11001100_hook("c.prototype._fulfill", function (c) {
    this._result = cc11001100_hook("this._result", c, "assign"), this._state = cc11001100_hook("this._state", v, "assign"), this._flush();
  }, "assign"), c.prototype._reject = cc11001100_hook("c.prototype._reject", function (c) {
    g.longStackTraces && c && (c.stack += cc11001100_hook("c.stack", "\n" + this._originalStack, "assign")), this._result = cc11001100_hook("this._result", c, "assign"), this._state = cc11001100_hook("this._state", y, "assign"), this._errorPending = cc11001100_hook("this._errorPending", !0, "assign"), this._flush(), j(function () {
      this._checkUnHandledRejection();
    }.bind(this));
  }, "assign"), c.prototype._resolve = cc11001100_hook("c.prototype._resolve", function (c) {
    h(c) ? this._fromResolver(c.then.bind(c)) : this._fulfill(c);
  }, "assign"), c.prototype._fromResolver = cc11001100_hook("c.prototype._fromResolver", function (c) {
    var a = cc11001100_hook("a", !1, "var-init"),
      h = cc11001100_hook("h", this, "var-init");
    try {
      c(function (c) {
        a || (a = cc11001100_hook("a", !0, "assign"), h._resolve(c));
      }, function (c) {
        a || (a = cc11001100_hook("a", !0, "assign"), h._reject(c));
      });
    } catch (_) {
      if (a) return;
      a = cc11001100_hook("a", !0, "assign"), h._reject(_);
    }
  }, "assign"), c.prototype._checkUnHandledRejection = cc11001100_hook("c.prototype._checkUnHandledRejection", function () {
    if (this._errorPending) {
      var c = cc11001100_hook("c", a(this), "var-init");
      window.dispatchEvent(c);
    }
  }, "assign"), c.prototype._flush = cc11001100_hook("c.prototype._flush", function () {
    if (this._state !== _) {
      var c = cc11001100_hook("c", this._state === y ? this._rejectedCbs : this._fulfilledCbs, "var-init");
      c.forEach(function (c) {
        if (this._state === y && this._errorPending && (this._errorPending = cc11001100_hook("this._errorPending", !1, "assign")), "function" == typeof c) {
          var a = cc11001100_hook("a", this._result, "var-init");
          j(function () {
            c(a);
          });
        }
      }, this), this._rejectedCbs = cc11001100_hook("this._rejectedCbs", [], "assign"), this._fulfilledCbs = cc11001100_hook("this._fulfilledCbs", [], "assign");
    }
  }, "assign"), c.prototype._done = cc11001100_hook("c.prototype._done", function (c, a) {
    this._fulfilledCbs.push(c), this._rejectedCbs.push(a), this._flush();
  }, "assign"), c.prototype.then = cc11001100_hook("c.prototype.then", function (a, h) {
    var _ = cc11001100_hook("_", this, "var-init");
    return new c(function (c, v) {
      var y;
      _._done(function (h) {
        if ("function" != typeof a) return c(h);
        try {
          y = cc11001100_hook("y", a(h), "assign");
        } catch (e) {
          return v(e);
        }
        c(y);
      }, function (a) {
        if ("function" != typeof h) return v(a);
        try {
          y = cc11001100_hook("y", h(a), "assign");
        } catch (e) {
          return v(e);
        }
        c(y);
      });
    });
  }, "assign"), c.prototype.catch = cc11001100_hook("c.prototype.catch", function (c) {
    return this.then(function (c) {
      return c;
    }, c);
  }, "assign"), c.prototype.finally = cc11001100_hook("c.prototype.finally", function (c) {
    return this.then(c, c);
  }, "assign"), c.resolve = cc11001100_hook("c.resolve", function (a) {
    return a instanceof c ? a : new c(function (c) {
      return c(a);
    });
  }, "assign"), c.reject = cc11001100_hook("c.reject", function (a) {
    return new c(function (c, h) {
      h(a);
    });
  }, "assign"), c.all = cc11001100_hook("c.all", function (a) {
    return new c(function (h, _) {
      function v() {
        0 >= w && h(y);
      }
      var y = cc11001100_hook("y", a.map(function () {
          return void 0;
        }), "var-init"),
        w = cc11001100_hook("w", a.length, "var-init");
      a.map(c.resolve).forEach(function (c, a) {
        c.then(function (c) {
          y[a] = cc11001100_hook("y[a]", c, "assign"), w--, v();
        }, _);
      }), v();
    });
  }, "assign"), c.fromCallback = cc11001100_hook("c.fromCallback", function (a) {
    return new c(function (c) {
      a(function (a) {
        c(a);
      });
    });
  }, "assign"), c.mapSeries = cc11001100_hook("c.mapSeries", function (a, h) {
    var _,
      v = cc11001100_hook("v", [], "var-init");
    return a.forEach(function (y, w) {
      _ = cc11001100_hook("_", _ ? c.resolve(_).then(function () {
        return h(y, w, a);
      }) : c.resolve(h(y, w, a)), "assign"), _ = cc11001100_hook("_", _.then(function (c) {
        v.push(c);
      }), "assign");
    }), _.then(function () {
      return v;
    });
  }, "assign"), c;
}), define("@searchfe/promise/src/set-immediate", ["require"], function () {
  function c(c, a) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    var h = cc11001100_hook("h", c.setImmediate, "var-init");
    h(a);
  }
  function a(c, a) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    var h = cc11001100_hook("h", c.setTimeout, "var-init");
    h(a);
  }
  function h(c, a) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    var h = cc11001100_hook("h", new c.MessageChannel(), "var-init");
    h.port1.onmessage = cc11001100_hook("h.port1.onmessage", function () {
      a();
    }, "assign"), h.port2.postMessage(w);
  }
  function _(c, a) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    c.addEventListener("message", function h() {
      c.removeEventListener("message", h, !1), a();
    }, !1), c.postMessage(w, "*");
  }
  function v(v, y) {
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("y", y, "function-parameter");
    g ? a(v, y) : v.setImmediate ? c(v, y) : v.MessageChannel ? h(v, y) : v.addEventListener && v.postMessage ? _(v, y) : a(v, y);
  }
  function y() {
    return "undefined" != typeof window ? window : "undefined" != typeof self ? self : Function("return this")();
  }
  function exports(c) {
    cc11001100_hook("c", c, "function-parameter");
    var a = cc11001100_hook("a", y(), "var-init");
    v(a, c);
  }
  var w = cc11001100_hook("w", "setImmediate polyfill", "var-init"),
    g = cc11001100_hook("g", /baiduboxapp/.test(window.navigator.userAgent), "var-init");
  return exports.impl = cc11001100_hook("exports.impl", v, "assign"), exports;
}), define("@searchfe/promise", ["@searchfe/promise/src/promise"], function (mod) {
  return mod;
});