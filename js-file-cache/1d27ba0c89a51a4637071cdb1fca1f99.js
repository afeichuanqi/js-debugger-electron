define("wiseindex/lib/sf/activity", function () {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", this, "var-init"),
      h = cc11001100_hook("h", $.Deferred(), "var-init"),
      c = cc11001100_hook("c", c.routeScope, "var-init"),
      w = cc11001100_hook("w", $.Deferred(), "var-init");
    return require([v._scopeList.view], function (a) {
      v._view = cc11001100_hook("v._view", new a(), "assign"), w.resolve();
    }), $.when(w).then(y(v._scopeList.create, v, [c, v._view])).then(function () {
      return v._view.render(), v._view.create(c);
    }).always(function () {
      h.resolve();
    }), h.promise();
  }
  function c(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", this, "var-init"),
      h = cc11001100_hook("h", $.Deferred(), "var-init"),
      c = cc11001100_hook("c", c.routeScope, "var-init");
    return $.when(y(v._scopeList.start, v, [c, v._view])).then(function () {
      return v._view.start(c);
    }).always(function () {
      h.resolve();
    }), h.promise();
  }
  function v(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", this, "var-init"),
      h = cc11001100_hook("h", $.Deferred(), "var-init"),
      c = cc11001100_hook("c", c.routeScope, "var-init");
    return $.when(y(v._scopeList.stop, v, [c, v._view])).then(function () {
      return v._view.stop(c);
    }).always(function () {
      h.resolve();
    }), h.promise();
  }
  function h(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", this, "var-init"),
      h = cc11001100_hook("h", $.Deferred(), "var-init"),
      c = cc11001100_hook("c", c.routeScope, "var-init");
    return $.when(y(v._scopeList.destroy, v, [c, v._view])).then(function () {
      return v._view.destroy(c);
    }).always(function () {
      v._view.options.holdView || (v._view = cc11001100_hook("v._view", null, "assign")), h.resolve();
    }), h.promise();
  }
  function y(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    return a.apply(c, v);
  }
  function w(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", this, "var-init");
    v._scopeList[a] = cc11001100_hook("v._scopeList[a]", c, "assign");
  }
  var b = function () {
    var a = cc11001100_hook("a", this, "var-init");
    B.log, a._scopeList = cc11001100_hook("a._scopeList", {
      create: function () {},
      start: function () {},
      stop: function () {},
      destroy: function () {},
      view: cc11001100_hook("view", "lib/sf/view", "object-key-init")
    }, "assign");
  };
  return b.prototype = cc11001100_hook("b.prototype", {
    constructor: cc11001100_hook("constructor", b, "object-key-init"),
    on: cc11001100_hook("on", w, "object-key-init"),
    create: cc11001100_hook("create", a, "object-key-init"),
    start: cc11001100_hook("start", c, "object-key-init"),
    stop: cc11001100_hook("stop", v, "object-key-init"),
    destroy: cc11001100_hook("destroy", h, "object-key-init"),
    change: function () {},
    resume: function () {}
  }, "assign"), b;
}), define("wiseindex/lib/sf/route", function () {
  var a = function () {
      function a(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        H = cc11001100_hook("H", "virtual", "assign"), I.routeStatus = cc11001100_hook("I.routeStatus", {
          action: cc11001100_hook("action", "push", "object-key-init"),
          type: cc11001100_hook("type", "virtual", "object-key-init")
        }, "assign");
        var v = cc11001100_hook("v", a, "var-init");
        if (v) if ("base" == a) for (var i in k) O.remove(k[i]);else O.set(a, c);
      }
      function c() {
        H = cc11001100_hook("H", "virtual", "assign"), I.routeStatus = cc11001100_hook("I.routeStatus", {
          action: cc11001100_hook("action", "back", "object-key-init"),
          type: cc11001100_hook("type", "virtual", "object-key-init")
        }, "assign"), history.back();
      }
      function v() {}
      function h(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        var v = cc11001100_hook("v", {}, "var-init");
        "function" == typeof c && (v.doActivity = cc11001100_hook("v.doActivity", c, "assign")), "object" == typeof c && (v.doActivity = cc11001100_hook("v.doActivity", c["do"], "assign"), v.beforeActivity = cc11001100_hook("v.beforeActivity", c.before, "assign"), v.afterActivity = cc11001100_hook("v.afterActivity", c.after, "assign"), v.destroy = cc11001100_hook("v.destroy", c.destroy, "assign"), v.ready = cc11001100_hook("v.ready", c.ready, "assign")), C.regist(a, v);
      }
      function y(a) {
        cc11001100_hook("a", a, "function-parameter");
        C.remove(a);
      }
      function w(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", a.match(/#(.*)$/), "var-init"),
          v = cc11001100_hook("v", c ? c[0] : "", "var-init");
        return v = cc11001100_hook("v", v.slice(1), "assign"), v || "";
      }
      function b(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c,
          v,
          h = cc11001100_hook("h", a.split("&"), "var-init"),
          y = cc11001100_hook("y", {}, "var-init");
        for (var i in h) c = cc11001100_hook("c", h[i], "assign"), "" != c && (v = cc11001100_hook("v", c.split("="), "assign"), 2 == v.length && (y[v[0]] = cc11001100_hook("y[v[0]]", decodeURIComponent(v[1]), "assign")), 3 == v.length && (y[v[0]] = cc11001100_hook("y[v[0]]", decodeURIComponent(v[1]) + "=" + decodeURIComponent(v[2]), "assign")));
        return y;
      }
      function A(e, a, c, v) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("v", v, "function-parameter");
        var h, y, w, b;
        v.forEach(function (a) {
          var c = cc11001100_hook("c", a.type, "var-init");
          ("removed" == c || "modified" == c) && (y = cc11001100_hook("y", a.key, "assign"), b = cc11001100_hook("b", a.oldValue, "assign")), ("added" == c || "modified" == c) && (h = cc11001100_hook("h", a.key, "assign"), w = cc11001100_hook("w", a.newValue, "assign"));
        }), I.last = cc11001100_hook("I.last", {
          path: cc11001100_hook("path", y || "base", "object-key-init"),
          params: cc11001100_hook("params", b, "object-key-init")
        }, "assign"), I.path = cc11001100_hook("I.path", h || "base", "assign"), I.params = cc11001100_hook("I.params", w, "assign"), C.run(I.path, I).then(function () {
          H = cc11001100_hook("H", "natural", "assign"), I.routeStatus = cc11001100_hook("I.routeStatus", {
            action: cc11001100_hook("action", "history", "object-key-init"),
            type: cc11001100_hook("type", "natural", "object-key-init")
          }, "assign");
        }), D.path = cc11001100_hook("D.path", I.path, "assign"), D.params = cc11001100_hook("D.params", I.params, "assign");
      }
      function g() {
        require(["wiseindex/lib/sf/controller"], function (a) {
          C = cc11001100_hook("C", a, "assign");
        });
      }
      function S() {
        if ((O = cc11001100_hook("O", B.hash, "assign")) && L !== !0) {
          O.on("change", A);
          var a = cc11001100_hook("a", b(w(location.href)), "var-init"),
            c = cc11001100_hook("c", {
              last: {
                path: cc11001100_hook("path", "", "object-key-init"),
                params: cc11001100_hook("params", "", "object-key-init")
              },
              path: cc11001100_hook("path", "", "object-key-init"),
              params: cc11001100_hook("params", "", "object-key-init")
            }, "var-init");
          for (var i in a) c.params = cc11001100_hook("c.params", a[i], "assign"), c.path = cc11001100_hook("c.path", i, "assign"), C.run(i, c).then(function () {
            H = cc11001100_hook("H", "natural", "assign");
          }), D.path = cc11001100_hook("D.path", i, "assign"), D.params = cc11001100_hook("D.params", a[i], "assign");
          L = cc11001100_hook("L", !0, "assign");
        }
      }
      function _() {
        var a = cc11001100_hook("a", b(w(location.href)), "var-init"),
          c = cc11001100_hook("c", "#page", "var-init");
        for (var i in a) if ("iact" == i && !$("#activitystyle")) {
          var v = cc11001100_hook("v", document.createElement("style"), "var-init");
          v.id = cc11001100_hook("v.id", "activitystyle", "assign"), v.innerHTML = cc11001100_hook("v.innerHTML", c + "{width:100%;position:absolute;top:-99999px;visibility:hidden;}", "assign"), document.head.appendChild(v);
          break;
        }
      }
      var O,
        C,
        D = cc11001100_hook("D", {}, "var-init"),
        L = cc11001100_hook("L", !1, "var-init"),
        k = cc11001100_hook("k", ["iact"], "var-init"),
        H = cc11001100_hook("H", "natural", "var-init"),
        I = cc11001100_hook("I", {
          last: {},
          path: cc11001100_hook("path", "", "object-key-init"),
          params: cc11001100_hook("params", null, "object-key-init"),
          routeStatus: {
            action: cc11001100_hook("action", "history", "object-key-init"),
            type: cc11001100_hook("type", "natural", "object-key-init")
          }
        }, "var-init");
      return _(), {
        push: cc11001100_hook("push", a, "object-key-init"),
        replace: cc11001100_hook("replace", v, "object-key-init"),
        on: cc11001100_hook("on", h, "object-key-init"),
        init: cc11001100_hook("init", g, "object-key-init"),
        start: cc11001100_hook("start", S, "object-key-init"),
        back: cc11001100_hook("back", c, "object-key-init"),
        current: cc11001100_hook("current", D, "object-key-init"),
        remove: cc11001100_hook("remove", y, "object-key-init")
      };
    },
    c = cc11001100_hook("c", new a(), "var-init");
  return window.B.route || (window.B.route = cc11001100_hook("window.B.route", c, "assign")), c;
}), define("wiseindex/lib/sf/controller", function () {
  function a() {
    function a() {
      return deferred = cc11001100_hook("deferred", $.Deferred(), "assign"), deferred.resolve(), $.each(v, function () {
        var a = cc11001100_hook("a", this, "var-init");
        deferred = cc11001100_hook("deferred", deferred.then(function () {
          return a();
        }), "assign");
      }), v = cc11001100_hook("v", [], "assign"), deferred;
    }
    function c(a, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      var h = cc11001100_hook("h", 2 in arguments && Array.prototype.slice.call(arguments, 2), "var-init");
      "function" == typeof a && v.push(function () {
        return a.apply(c, h ? h : []);
      });
    }
    var v = cc11001100_hook("v", [], "var-init");
    return {
      push: cc11001100_hook("push", c, "object-key-init"),
      excute: cc11001100_hook("excute", a, "object-key-init")
    };
  }
  function c(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (h.hasOwnProperty(a)) {
      var v = cc11001100_hook("v", h[a], "var-init");
      v.destroy(c);
    }
  }
  var v = cc11001100_hook("v", {}, "var-init"),
    h = cc11001100_hook("h", {}, "var-init");
  v.regist = cc11001100_hook("v.regist", function (a, c) {
    var v = cc11001100_hook("v", this.create(c), "var-init");
    h[a] = cc11001100_hook("h[a]", v, "assign");
  }, "assign"), v.create = cc11001100_hook("v.create", function (a) {
    return y(a);
  }, "assign"), v.run = cc11001100_hook("v.run", function (v, y) {
    proxyList = cc11001100_hook("proxyList", [], "assign");
    var w = cc11001100_hook("w", new a(), "var-init");
    if (h.hasOwnProperty(v)) {
      var b = cc11001100_hook("b", h[v], "var-init");
      w.push(b.beforeActivity, b, y), w.push(b.doActivity, b, y), w.push(b.afterActivity, b, y);
    }
    return h.hasOwnProperty(v) && v !== (y.last && y.last.path) && w.push(c, this, y.last.path, y), h.hasOwnProperty(v) && w.push(b.ready, b, y), w.excute();
  }, "assign"), v.remove = cc11001100_hook("v.remove", function (a) {
    h.hasOwnProperty(a) && delete h[a];
  }, "assign");
  var y = function (a) {
    var c = cc11001100_hook("c", {}, "var-init");
    return c.doActivity = cc11001100_hook("c.doActivity", a.doActivity || function () {}, "assign"), c.beforeActivity = cc11001100_hook("c.beforeActivity", a.beforeActivity || function () {}, "assign"), c.afterActivity = cc11001100_hook("c.afterActivity", a.afterActivity || function () {}, "assign"), c.destroy = cc11001100_hook("c.destroy", a.destroy || function () {}, "assign"), c.ready = cc11001100_hook("c.ready", a.ready || function () {}, "assign"), c;
  };
  return v;
}), define("wiseindex/lib/sf/activityController", ["wiseindex/lib/sf/controller", "wiseindex/lib/sf/route"], function (a, c) {
  function v() {
    var a = cc11001100_hook("a", this, "var-init");
    a.swtichTag = cc11001100_hook("a.swtichTag", "iact", "assign");
  }
  function h() {
    var a = cc11001100_hook("a", location.href.match(/#(.*)$/), "var-init"),
      c = cc11001100_hook("c", a ? a[0] : "", "var-init");
    return 0 === c.indexOf("#%7C") && (c = cc11001100_hook("c", c.replace(/%7C/, "|"), "assign")), c || "";
  }
  function y(a, c, v, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    var y = cc11001100_hook("y", [], "var-init"),
      A = cc11001100_hook("A", $.Deferred(), "var-init");
    return a && y.push(a.name), c && y.push(c.name), y.length > 0 && (_ = cc11001100_hook("_", {
      from: {
        path: cc11001100_hook("path", h.last ? h.last.path : null, "object-key-init"),
        params: cc11001100_hook("params", h.last ? w(h.last.params) : null, "object-key-init")
      },
      to: {
        path: cc11001100_hook("path", h.path, "object-key-init"),
        params: cc11001100_hook("params", w(h.params), "object-key-init")
      },
      status: cc11001100_hook("status", h.routeStatus, "object-key-init")
    }, "assign"), require(y, function (h, y) {
      var w = cc11001100_hook("w", h === y, "var-init");
      y || (y = cc11001100_hook("y", h, "assign"));
      var $ = cc11001100_hook("$", {
          routeState: cc11001100_hook("routeState", S, "object-key-init"),
          routeScope: cc11001100_hook("routeScope", _, "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", new b(), "var-init");
      v ? (a && g.push(h.start, h, a.state, $), a && g.push(h.resume, h, a.state, $)) : w ? (c && g.push(y.destroy, y, c.state, $), a && g.push(h.create, h, a.state, $)) : (c && g.push(y.stop, y, c.state, $), a && g.push(h.create, h, a.state, $), c && g.push(y.destroy, y, c.state, $)), g.push(function () {
        S = cc11001100_hook("S", "natural", "assign"), _ = cc11001100_hook("_", {}, "assign");
      }, this), g.excute(A);
    })), A;
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", /([^=]+)=?(.*)/, "var-init"),
      v = cc11001100_hook("v", a ? a.match(c) : null, "var-init");
    if (v && v[1]) {
      var h = cc11001100_hook("h", {}, "var-init");
      return h.name = cc11001100_hook("h.name", v[1].replace(/:/g, "").replace(/\/\/+/g, "/"), "assign"), h.state = cc11001100_hook("h.state", v[2] ? $.parseJSON(decodeURIComponent(v[2])) : void 0, "assign"), h;
    }
    return !1;
  }
  function b() {
    function a(a) {
      cc11001100_hook("a", a, "function-parameter");
      return v = cc11001100_hook("v", $.Deferred(), "assign"), v.resolve(), $.each(h, function () {
        var a = cc11001100_hook("a", this, "var-init");
        v = cc11001100_hook("v", v.then(function () {
          return a();
        }), "assign");
      }), h = cc11001100_hook("h", [], "assign"), v.then(function () {
        a.resolve();
      });
    }
    function c(a, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      var v = cc11001100_hook("v", 2 in arguments && Array.prototype.slice.call(arguments, 2), "var-init");
      "function" == typeof a && h.push(function () {
        return a.apply(c, v ? v : []);
      });
    }
    var v,
      h = cc11001100_hook("h", [], "var-init");
    return {
      push: cc11001100_hook("push", c, "object-key-init"),
      excute: cc11001100_hook("excute", a, "object-key-init")
    };
  }
  var A,
    g = cc11001100_hook("g", !1, "var-init"),
    S = cc11001100_hook("S", "natural", "var-init"),
    _ = cc11001100_hook("_", {}, "var-init");
  v.prototype = cc11001100_hook("v.prototype", {
    constructor: cc11001100_hook("constructor", v, "object-key-init"),
    beforeActivity: function (a) {
      a && a.last && "base" === a.last.path && (A = cc11001100_hook("A", pageYOffset, "assign"));
    },
    doActivity: function (a) {
      var c,
        v,
        h = cc11001100_hook("h", a.last.params, "var-init"),
        b = cc11001100_hook("b", a.params, "var-init");
      return v = cc11001100_hook("v", w(b), "assign"), a.last.path === a.path && (c = cc11001100_hook("c", w(h), "assign")), y(v, c, !1, a);
    },
    destroy: function (a) {
      var c = cc11001100_hook("c", a.last ? w(a.last.params) : null, "var-init");
      y(null, c, !1, a);
    },
    ready: function (a) {
      var c = cc11001100_hook("c", w(a.params), "var-init");
      y(c, null, !0, a);
    },
    pushState: function (a) {
      if (S = cc11001100_hook("S", "virtual", "assign"), a = cc11001100_hook("a", a || {}, "assign"), a.silent === !0 ? !0 : !1, a.activity) if ("base" === a.activity) c.push("base");else {
        var v = cc11001100_hook("v", a.state, "var-init");
        a.activity.indexOf("activity/") < 0 && (a.activity = cc11001100_hook("a.activity", "activity/" + a.activity, "assign")), v = cc11001100_hook("v", v ? a.activity + "=" + encodeURIComponent(JSON.stringify(a.state)) : a.activity, "assign"), c.push("iact", v);
      }
    },
    replaceState: function (a) {
      function c() {
        var c = cc11001100_hook("c", a.state, "var-init");
        c = cc11001100_hook("c", c ? a.activity + "=" + JSON.stringify(a.state) : a.activity, "assign");
        var v = cc11001100_hook("v", "iact=" + encodeURIComponent(c), "var-init");
        return -1 === location.href.indexOf("#") && (v = cc11001100_hook("v", "#" + v, "assign")), v;
      }
      function v(a) {
        cc11001100_hook("a", a, "function-parameter");
        HASH.mute = cc11001100_hook("HASH.mute", !0, "assign"), window.location.replace(a), setTimeout(function () {
          HASH.mute = cc11001100_hook("HASH.mute", !1, "assign");
        }, 100);
      }
      if (a = cc11001100_hook("a", a || {}, "assign"), a.silent === !0 ? !0 : !1, a.activity) {
        var y = cc11001100_hook("y", h(), "var-init"),
          w = cc11001100_hook("w", y.match(/(.*?)(iact)\=(.*?)(%3D|$)(.*?)(\&|$)(.*?)$/), "var-init"),
          b = cc11001100_hook("b", actAfter = cc11001100_hook("actAfter", "", "assign"), "var-init");
        if (null == w) {
          if ("base" === a.activity) return;
          v(window.location.href + c());
        } else {
          var A = cc11001100_hook("A", location.protocol + "//" + location.host + location.pathname + location.search, "var-init");
          if (b = cc11001100_hook("b", w[1], "assign"), actAfter = cc11001100_hook("actAfter", w[6] + w[7], "assign"), "base" === a.activity) A += cc11001100_hook("A", b + actAfter, "assign");else {
            if (c() === "iact=" + w[3] + "%3D" + w[5]) return;
            A += cc11001100_hook("A", b + c() + actAfter, "assign");
          }
          v(A);
        }
      }
    },
    start: function () {
      if ((HASH = cc11001100_hook("HASH", B.hash, "assign")) && g !== !0) {
        var a = cc11001100_hook("a", this, "var-init");
        c.init(), c.on("iact", {
          before: cc11001100_hook("before", a.beforeActivity, "object-key-init"),
          "do": cc11001100_hook("do", a.doActivity, "object-key-init"),
          ready: cc11001100_hook("ready", a.ready, "object-key-init"),
          destroy: cc11001100_hook("destroy", a.destroy, "object-key-init")
        }), c.on("base", {
          "do": function () {
            $("#page").show(), $("#activitystyle").remove();
          },
          ready: function () {
            "undefined" != typeof A && scrollTo(0, A);
          },
          destroy: function () {
            $("#page").hide();
          }
        }), c.start(), g = cc11001100_hook("g", !0, "assign");
      }
    },
    back: function () {
      S = cc11001100_hook("S", "virtual", "assign"), c.back();
    }
  }, "assign");
  var O = cc11001100_hook("O", new v(), "var-init");
  return B.activity || (B.activity = cc11001100_hook("B.activity", O, "assign")), O;
});